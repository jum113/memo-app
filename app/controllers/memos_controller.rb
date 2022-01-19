class MemosController < ApplicationController
  def index
    @memo = Memo.new
  end

  def create
    binding.pry
    memo = Memo.create(memo_params)
  end

  private
  def memo_params
    params.require(:memo).permit(:memo).merge(user_id: current_user.id)
  end
end
