class Api::V1::SavesController < ApplicationController

    def index
        @saves = Save.all
        render json: @saves
    end

    def create
        # byebug
        @save = Save.create(user_id: params[:user_id].to_i, event_id: params[:event_id], number_of_guests: params[:number_of_guests])
        render json: @save
    end

    def delete
        # render json: 'u hit saves#delete'
        @save = Save.find(params[:id])
        @save.destroy
        render json: @save
    end

end

