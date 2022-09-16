class CreateEmailLists < ActiveRecord::Migration[7.0]
  def change
    create_table :email_lists do |t|
      t.string :email

      t.timestamps
    end
  end
end
