class VotesController < ApplicationController
  before_action :authenticate_user_using_x_auth_token
  before_action :check_vote_existance, only: %i[create]

  def create
    @vote = Vote.new(vote_params.merge(user_id: @current_user.id))
    puts @vote
    if @vote.save
      render status: :ok, json: { vote: @vote, notice: 'Voted Successfully!' }
    else
      format.json { render json: @vote.errors, status: :unprocessable_entity }
    end
  end

  def check_vote_existance
    vote = Vote.where(
      poll_id: params[:vote][:poll_id],
      user_id: @current_user
    )
    render status: :unprocessable_entity, json: { errors: 'duplicate_vote' } unless vote.length.zero?
  end

  private

  def vote_params
    params.require(:vote).permit(:poll_id, :option_id)
  end
end
