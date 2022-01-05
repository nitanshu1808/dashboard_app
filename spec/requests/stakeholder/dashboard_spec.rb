require 'rails_helper'

RSpec.describe "Stakeholder::Dashboards", type: :request do
  describe "GET /index" do
    it "returns http success" do
      get "/stakeholder/dashboard/index"
      expect(response).to have_http_status(:success)
    end
  end

end
