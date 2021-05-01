class UsersController < ApplicationController
 
  def create
    @user = User.new(user_params)
    if @user.save
      render status: :ok,
             json: { auth_token: @user.authentication_token, userId: @user.id, email: @user.email, name: @user.name,
                     notice: 'Sign up Successfully' }
    else
      render status: 422, json: {
        errors: @user.errors.full_messages.to_sentence
      }
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password)
  end
end
