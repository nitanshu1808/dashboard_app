class TeamMember < ApplicationRecord
  belongs_to :vendor

  def full_name
    "#{first_name} #{last_name}"
  end
end
