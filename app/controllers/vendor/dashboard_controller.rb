class Vendor::DashboardController < ApplicationController
  before_action :authenticate_user!

  def index
  end
end
