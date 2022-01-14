class MemosController < ApplicationController
  def index
    @memo = Memo.new
  end

  def create
    memo = Memo.create(memo_params)
    render json:{ post: memo }
  end

  private
  def memo_params
    params.require(:memo).permit(:memo).merge(user_id: current_user.id)
  end
end
