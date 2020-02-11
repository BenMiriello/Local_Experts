class Api::V1::SavesController < ApplicationController

    def delete
        # render json: 'u hit saves#delete'
        @save = Save.find(params[:id])
        @save.destroy
        render json: @save
    end

end
