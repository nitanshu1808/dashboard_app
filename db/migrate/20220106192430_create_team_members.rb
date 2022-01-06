class CreateTeamMembers < ActiveRecord::Migration[7.0]
  def change
    create_table :team_members do |t|
      t.string :first_name
      t.string :last_name
      t.string :email_address
      t.string :membership_type

      t.timestamps
    end
  end
end
