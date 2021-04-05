class usersController < AppliationController
    def index
        users = Users.al.as_json(only: %[id name])
        render status: :ok, json: {users: users}
    end
    def create
    end
    private 
    def user_params 
        params.require(:user).permit(:name, :email, password)
    end

end