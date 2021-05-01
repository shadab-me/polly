class PollsController < ApplicationController
  before_action :authenticate_user_using_x_auth_token, except: %i[index show]
  before_action :set_poll, only: [:show]

  def index
    @polls = Poll.all
    render status: :ok, json: { polls: @polls }
  end

  def show
    @options = @poll.options
    @votes = @poll.votes
    render status: :ok, json: { poll: @poll, options: @options, votes: @votes }
  end

  def create
    @poll = Poll.new(poll_params.merge(user_id: @current_user.id))
    if @poll.save
      render status: :created, json: { notice: 'Sucessfully Created' }
    else
      format.json { render json: @poll.errors, status: :unprocessable_entity }
    end
  end

  private

  def set_poll
    @poll = Poll.find(params[:id])
  end

  def poll_params
    params.require(:poll).permit(:value, :user_id, options_attributes: [:value])
  end
end
