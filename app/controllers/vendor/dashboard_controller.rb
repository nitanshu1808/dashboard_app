class Vendor::DashboardController < ApplicationController
  before_action :authenticate_user!
  before_action :verify_user

  def index
    @vendor_props = { signOutPath: destroy_user_session_path, data: data }
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
end
