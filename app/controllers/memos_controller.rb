class MemosController < ApplicationController
  def index
    @memo = Memo.new
  end

  def create
    post = memo.create(memo: params[:memo])
  end
end
