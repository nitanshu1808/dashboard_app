class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable, :validatable
  enum status: [:active, :inactive]

  USER_TYPES = [Vendor.name, StakeHolder.name]

  USER_TYPES.each do |kind|
    define_method "#{kind.downcase}?" do
      kind == self.class.name
    end
  end

end
