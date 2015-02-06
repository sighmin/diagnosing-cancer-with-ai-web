class Simulation < ActiveRecord::Base
  enum status: { created: 0, pending: 1, ready: 2, errored: 3 }

  serialize :weights
  serialize :config
end
