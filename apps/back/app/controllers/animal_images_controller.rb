class AnimalImagesController < ApplicationController
  before_action :set_animal_image, only: [:show, :update, :destroy]

  # GET /animal_images
  # GET /animal_images.json
  def index
    @animal_images = AnimalImage.all
  end

  # GET /animal_images/1
  # GET /animal_images/1.json
  def show
  end

  # POST /animal_images
  # POST /animal_images.json
  def create
    @animal_image = AnimalImage.new(animal_image_params)

    if @animal_image.save
      render :show, status: :created, location: @animal_image
    else
      render json: @animal_image.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /animal_images/1
  # PATCH/PUT /animal_images/1.json
  def update
    if @animal_image.update(animal_image_params)
      render :show, status: :ok, location: @animal_image
    else
      render json: @animal_image.errors, status: :unprocessable_entity
    end
  end

  # DELETE /animal_images/1
  # DELETE /animal_images/1.json
  def destroy
    @animal_image.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_animal_image
      @animal_image = AnimalImage.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def animal_image_params
      params.require(:animal_image).permit(:animal_id, :image_id)
    end
end
