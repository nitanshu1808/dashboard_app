class TeamMember < ApplicationRecord
  belongs_to :vendor

  MEMBERSHIP_TYPES = %w[Regular Lead]

  def full_name
    "#{first_name} #{last_name}"
  end
end
