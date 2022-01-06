class Vendor::DashboardController < ApplicationController
  before_action :authenticate_user!

  def index
    @vendor_props = { signOutPath: destroy_user_session_path, data: data }
  end

  def data
    orders = []
    Order.all.each do |order|
      orders << {
        id: order.id,
        vendor_name: order.vendor_name,
        status: order.status,
        created_at: order.created_at,
        updated_at: order.updated_at,
        discount: order.discount,
        total_amount: order.total_amount,
        sender_address_id: order.sender_address_id,
        recipient_address_id: order.recipient_address_id,
        sender_country: order.sender_address.country,
        recipient_country: order.recipient_address.country,
        product_id: order.product_id,
        product_name: order.product.name,
        product_description: order.product.description,
        product_price: order.product.price
      }
    end

    orders
  end
  
end
