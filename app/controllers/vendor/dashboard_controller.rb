class Vendor::DashboardController < ApplicationController
  before_action :authenticate_user!

  def index
    @vendor_props = { signOutPath: destroy_user_session_path }
  end
end
