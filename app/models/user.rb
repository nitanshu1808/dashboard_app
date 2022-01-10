class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable, :validatable
  enum status: %i[active inactive]

  USER_TYPES = %w[Vendor StakeHolder]

  USER_TYPES.each do |kind|
    define_method "#{kind.downcase}?" do
      kind == self.class.name
    end
  end

  def full_name
    "#{first_name} #{last_name}"&.strip
  end
end
