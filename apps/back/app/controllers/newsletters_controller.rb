class NewslettersController < ApplicationController
  before_action :set_newsletter, only: [:show, :update, :destroy]

  # GET /newsletters
  # GET /newsletters.json
  def index
    respond_to do |format|
      @newsletters = Newsletter.all
      format.json { render template: 'newsletters/index', status: :ok }
    end
  end

  # GET /newsletters/1
  # GET /newsletters/1.json
  def show
    respond_to do |format|
      format.json { render template: 'newsletters/show', status: :ok }
    end
  end

  # POST /newsletters
  # POST /newsletters.json
  def create
    @newsletter = Newsletter.new(newsletter_params)

    respond_to do |format|
      if @newsletter.save
        format.json { render template: 'newsletters/show', status: :created }
      else
        format.json { render template: 'newsletters/show', json: @newsletter.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /newsletters/1
  # PATCH/PUT /newsletters/1.json
  def update
    if @newsletter.update(newsletter_params)
      render :show, status: :ok, location: @newsletter
    else
      render json: @newsletter.errors, status: :unprocessable_entity
    end
  end

  # DELETE /newsletters/1
  # DELETE /newsletters/1.json
  def destroy
    @newsletter.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_newsletter
      @newsletter = Newsletter.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def newsletter_params
      params.require(:newsletter).permit(:email)
    end
end
