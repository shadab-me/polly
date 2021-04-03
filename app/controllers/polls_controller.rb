class PollsController < ApplicationController
     skip_before_action :verify_authenticity_token

    def index 
        @polls = Poll.all
        puts @polls
        render status: :ok, json: {polls: @polls}
    end

def create
@poll = Poll.new(poll_params)
if @poll.save 
    render status: :ok, json: {notice: "poll successfully created!", poll: @poll}
    end
end
    private
    def poll_params
        params.require(:poll).permit(:question, :user_id, :options)
    end
end
