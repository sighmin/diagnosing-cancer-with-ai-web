class AuthenticatedController < ApplicationController
  before_filter :authenticate!

  private

  def authenticate!
    Rails.logger.debug "TODO: authenticate me!"
  end
end
