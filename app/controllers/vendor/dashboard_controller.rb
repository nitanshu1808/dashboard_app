class Vendor::DashboardController < ApplicationController
  before_action :authenticate_user!
  before_action :verify_user

  def index
    @vendor_props = { signOutPath: destroy_user_session_path, data: data, orders: orders }
  end

  def data
    products = []
    current_user.products.each do |product|
      products << {
        id: product.id,
        name: product.name,
        product_description: product.description,
        product_price: product.price,
        order_count: product.orders.size,
        created_at: product.created_at.strftime('%d/%m/%Y'),
        status: product.status&.titleize
      }
    end

    products
  end

  def verify_user
    return if current_user.nil?

    redirect_to stakeholder_dashboard_index_path if current_user.stakeholder?
  end

  def orders
    orders = []
    Order.where('product_id IN(?)', current_user.product_ids).includes(:sender_address, :recipient_address, [product: :vendor]).each do |order|
      orders << {
        id: order.id,
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
end
