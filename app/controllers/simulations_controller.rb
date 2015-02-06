class SimulationsController < AuthenticatedController

  def create
    new_simulation = Simulation.new(params[:simulation])
    new_simulation.save
    NeuralNetworkTrainingJob.perform_later(new_simulation.id)
    render json: { simulation: new_simulation }
  end

  def show
    render json: { simulation: simulation }
  end

  def classify
    render status: 400, json: { message: "We're not ready yet" } unless simulation.ready?
    measurements = params[:measurements].split(',').map(&:to_f)
    net = Intelligence::Nn::NeuralNetwork.new(simulation.config)
    net.weights = simulation.weights
    render json: { classification: net.classify(measurements) }
  end

  def classify_with_pretrained
    render status: 400, json: { message: "We're not ready yet" } unless best_simulation.ready?
    measurements = params[:measurements].split(',').map(&:to_f)
    net = Intelligence::Nn::NeuralNetwork.new(best_simulation.config)
    net.weights = best_simulation.weights
    render json: { classification: net.classify(measurements) }
  end

  private

  def best_simulation
    @best_simulation ||= Simulation.where(status: 2).order('accuracy DESC').first
  end

  def simulation
    @simulation ||= Simulation.find(params[:id])
  end

end
