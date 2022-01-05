class Stakeholder::DashboardController < ApplicationController
  before_action :authenticate_user!

  def index
    @stakeholder_props = { signOutPath: destroy_user_session_path }
  end
end
