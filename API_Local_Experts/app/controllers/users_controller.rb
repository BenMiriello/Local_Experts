class Api::V1::UsersController < ApplicationController

    def show
        @user = User.find(params[:id])
        render json: @user
    end

    # def cart
    #     byebug
    #     @cart = User.find(params[:id]).cart
    #     render json: @cart
    # end

end

