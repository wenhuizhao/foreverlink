class FeedbacksController < ApplicationController
  before_action :set_feedback, only: %i[ show update destroy ]
  before_action :authenticate_user!, only: %i[ index show delete ]
  before_action :admin_only, only: %i[ index show delete ]
  # GET /feedbacks
  def index
    @feedbacks = Feedback.all

    render json: @feedbacks
  end

  # GET /feedbacks/1
  def show
    render json: @feedback
  end

  # POST /feedbacks
  def create
    @feedback = Feedback.new(feedback_params)

    if @feedback.save
      render json: @feedback, status: :created, location: @feedback
    else
      render json: @feedback.errors, status: :unprocessable_entity
    end
  end

  # DELETE /feedbacks/1
  def destroy
    @feedback.destroy
  end

  def email_list
    @email_list = EmailList.new(email: params[:email])
    if @email_list.save
      render json: {}, status: :created
    else
      render json: {}, status: :unprocessable_entity
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_feedback
      @feedback = Feedback.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def feedback_params
      params.require(:feedback).permit(:email, :subject, :message)
    end
end
