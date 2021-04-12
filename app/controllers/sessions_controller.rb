class SessionsController < ApplicationController
   skip_before_action :verify_authenticity_token
    def create
    user = User.find_by(email: login_params[:email].downcase)
     if user.present? && user.authenticate(login_params[:password])
       render status: :ok, json: {auth_token: user.authentication_token, userId: user.id, email: user.email}  
    else
        render status: :unauthorized, json: {
            notice: "Incorrect credential, try again"
        }
    end
    end
    private 
    def login_params
        params.require(:login).permit(:email, :password)
    end

    end
