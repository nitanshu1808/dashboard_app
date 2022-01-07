class ProfileController < ApplicationController
  # before_action :authenticate_user!
  before_action :set_vendor

  def index
    team_members = @vendor.team_members.map { |member| member.attributes.merge({ full_name: member.full_name }) }
    render json: { name: @vendor.first_name, funds: '$195,000', team_members: team_members }.to_json
  end

  private

  def set_vendor
    @vendor = Vendor.find(params[:vendor_id])
  end
end