class ProfileController < ApplicationController
  # before_action :authenticate_user!

  def index
    team_members = TeamMember.where(vendor_id: params[:vendor_id]).map { |member| member.attributes.merge({ full_name: member.full_name }) }
    render json: { name: 'Neato Inc', team_members: team_members }.to_json
  end
end