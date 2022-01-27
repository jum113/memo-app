class AddFolderToMemos < ActiveRecord::Migration[6.0]
  def change
    add_reference :memos, :folder, null: false, foreign_key: true
  end
end
