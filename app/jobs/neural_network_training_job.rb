class NeuralNetworkTrainingJob < ActiveJob::Base
  queue_as :default

  def perform(simulation_id)
    simulation = Simulation.find(simulation_id)
    simulation.pending!

    accuracy, weights = run_simulation
    simulation.accuracy = accuracy
    simulation.weights = weights
    simulation.config = nn_config
    simulation.save

    simulation.ready!
  end

  private

  def run_simulation
    Intelligence.train_for_cancer
  end

  def nn_config
    {
      layers: [{
        size: 30,
        bias: true,
        function: nil
      },{
        size: 7,
        bias: true,
        function: :sigmoid
      },{
        size: 1,
        bias: false,
        function: :sigmoid
      }]
    }
  end
end
