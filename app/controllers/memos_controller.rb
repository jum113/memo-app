class MemosController < ApplicationController
  def index
    @memos = Memo.order('created_at DESC')
    @memo = Memo.new
  end

  def create
    memo = Memo.create(memo_params)
    render json: { post: memo }
  end

  def destroy
    memo = Memo.find(params[:id])
    memo.destroy
    redirect_to root_path
  end

  private

  def memo_params
    params.require(:memo).permit(:title, :content).merge(user_id: current_user.id)
  end
end
