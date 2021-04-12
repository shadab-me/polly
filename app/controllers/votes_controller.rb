class VotesController < ApplicationController
     skip_before_action :verify_authenticity_token
     before_action :authenticate_user_using_x_auth_token
     before_action :check_vote_existance, only: %i[create]
     
   def create
       @vote = Vote.new(vote_params.merge(user_id: @current_user.id))
        if @vote.save
        render status: :ok, json: {vote: @vote} 
      else
         format.json { render json: @vote.errors, status: :unprocessable_entity}
    end
  end

 def check_vote_existance
  vote = Vote.where(
      poll_id: params[:vote][:poll_id],
      user_id: @current_user
   )
    unless vote.length == 0
      render status: :unprocessable_entity, json: { errors: t('duplicate_vote')}  
    end
end

 private 
  def vote_params
    params.require(:vote).permit(:poll_id, :option_id)
  end

end
