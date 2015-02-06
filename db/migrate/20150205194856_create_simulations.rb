class CreateSimulations < ActiveRecord::Migration
  def change
    create_table :simulations do |t|
      t.integer :status, default: 0
      t.decimal :accuracy
      t.text :weights
      t.string :config

      t.timestamps null: false
    end
  end
end
