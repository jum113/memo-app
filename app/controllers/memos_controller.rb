class MemosController < ApplicationController
  def index
    @memo = Memo.new
    @folder = Folder.find(params[:folder_id])
    @memos = @folder.memos.order("created_at DESC")
    @folders = Folder.order("created_at ASC")
  end

  def create
    @folder = Folder.find(params[:folder_id])
    @memo = @folder.memos.new(memo_params)
    if @memo.save
      redirect_to folder_memos_path(@folder)
    else
      render :index
    end
  end

  def destroy
    @folder = Folder.find(params[:folder_id])
    memo = @folder.memos.find(params[:id])
    memo.destroy
    redirect_to action: :index
  end

  private

  def memo_params
    params.require(:memo).permit(:title, :content).merge(user_id: current_user.id)
  end
end
