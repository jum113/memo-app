class MemosController < ApplicationController
  def index
    @memo = Memo.new
  end

  def create
    memo = memo.create(memo: params[:memo])
    reder json:{ post: memo }
  end
end
