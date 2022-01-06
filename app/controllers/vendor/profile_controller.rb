class Vendor::ProfileController < ApplicationController
  before_action :authenticate_user!

  def show
    @vendor_props = { name: 'Neato Inc', contacts: [
      { name: 'Jane Foley', member_type: 'Team Owner' },
      { name: 'Tom Frank', member_type: 'Team Member' }
      ]
    }
  end
end