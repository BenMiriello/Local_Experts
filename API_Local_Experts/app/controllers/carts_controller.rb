class Api::V1::CartsController < ApplicationController

    def show
        # byebug
        @cart = User.find(params[:id]).cart
        render json: @cart
    end

end

