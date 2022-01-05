class Stakeholder::DashboardController < ApplicationController
  before_action :authenticate_user!

  def index
    @stakeholder_props = { userType: 'stakeholder', signOutPath: destroy_user_session_path }
  end
end
