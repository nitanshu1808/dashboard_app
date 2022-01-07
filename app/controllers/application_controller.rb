class ApplicationController < ActionController::Base
  before_action :verify_user
end
