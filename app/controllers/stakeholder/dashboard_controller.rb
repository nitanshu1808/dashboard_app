class Stakeholder::DashboardController < ApplicationController
  before_action :authenticate_user!
  before_action :verify_user

  def index
    @stakeholder_props = { signOutPath: destroy_user_session_path, data: data, profile: profile_data }
  end

  def profile_data
    team_members = TeamMember.all
    @vendor_props = { name: 'Neato Inc', team_members: team_members }
  end

  def data
    orders = []
    Order.includes(:sender_address, :recipient_address, [product: :vendor]).each do |order|
      orders << {
        id: order.id,
        vendor_name: order.vendor_name&.titleize,
        status: order.status&.titleize,
        created_at: order.created_at.strftime('%d/%m/%Y'),
        updated_at: order.updated_at,
        discount: order.discount,
        total_amount: order.total_amount,
        sender_address_id: order.sender_address_id,
        recipient_address_id: order.recipient_address_id,
        sender_country: order.sender_address.country,
        recipient_country: order.recipient_address.country,
        product_id: order.product_id,
        product_name: order.product.name&.titleize,
        product_description: order.product.description&.titleize,
        product_price: order.product.price,
        sender_name: order.sender_address.user_name&.titleize,
        recipient_name: order.recipient_address.user_name&.titleize
      }
    end

    orders
  end

  def verify_user
    return if current_user.nil?

    redirect_to vendor_dashboard_index_path if current_user.vendor?
  end
end
