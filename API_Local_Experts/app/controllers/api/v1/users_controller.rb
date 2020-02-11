class Api::V1::UsersController < ApplicationController

    def show
        # byebug
        @user = User.find(params[:id])
        render json: @user
    end

    def index
        @users = User.all
        render json: @users
    end

    def create
        # byebug
        @user = User.create(name: params[:name], password: params[:password])
        render json: @user
    end

end

