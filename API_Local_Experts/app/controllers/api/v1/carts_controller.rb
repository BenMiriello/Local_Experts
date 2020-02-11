class Api::V1::CartsController < ApplicationController

    def show
        # byebug
        @cart = User.find(params[:id]).cart
        render json: @cart
    end

    def update
        @user = User.find(params[:id])
        byebug
        booked = []
        failed = []
        @user.cart.each do |save|
            save.book
            if save.booked
                booked << save
            else
                failed << save
            end
        end
        render json: {failed: failed, booked: booked}
        # This solution isn't the best user experience.
        # It will still book some items in your cart if some others fail.
        # It would be better if it first checks that all are available,
        # and only if all are available will it book them.
        # maybe have a purchase # attribute to the save to track which was bought in what combination?
    end

end

