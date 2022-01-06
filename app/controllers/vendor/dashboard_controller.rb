class Vendor::DashboardController < ApplicationController
  before_action :authenticate_user!

  def index
    @vendor_props = { signOutPath: destroy_user_session_path, data: data }
  end

  def data
    orders = []
    Order.last(5).each do |order|
      orders << {
        order_id: order.id,
        vendor_name: order.vendor_name,
        status: order.status
      }
    end

    orders
  end
end
