class OptionsController < ApplicationController
  before_action :set_option, only: %i[show]

  def create
    @option = Option.new(option_params)
    respond_to do |format|
      if @option.save
        format.json { render :show, status: :created, location: @option }
      else
        format.json { render json: @option.errors, status: :unprocessable_entity }
      end
    end
  end

  private

  def set_option
    @option = Option.find(params[:id])
  end

  def option_params
    params.require(:option).permit(:value, :poll_id)
  end
end
