class Api::V1::ExperiencesController < ApplicationController

    def index
        @experiences = Experience.all
        render json: @experiences
    end

    def show
        @experience = Experience.find(params[:id])
        render json: @experience
    end
    
end
