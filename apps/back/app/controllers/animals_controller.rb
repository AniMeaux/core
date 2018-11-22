class AnimalsController < ApplicationController
  before_action :set_animal, only: [:show, :update, :destroy]

  # GET /animals
  def index
    respond_to do |format|
      @animals = Animal.all
      format.json { render template: 'animals/index', status: :ok }
    end
  end

  # GET /animals/1
  def show
    respond_to do |format|
      format.json { render template: 'animals/show', status: :ok }
    end
  end

  # POST /animals
  def create
    @animal = Animal.new(animal_params)

    if @animal.save
      render json: @animal, status: :created, location: @animal
    else
      render json: @animal.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /animals/1
  def update
    if @animal.update(animal_params)
      render json: @animal
    else
      render json: @animal.errors, status: :unprocessable_entity
    end
  end

  # DELETE /animals/1
  def destroy
    @animal.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_animal
      @animal = Animal.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def animal_params
      params.require(:animal).permit(:category, :name, :age, :description, :gender, :species, :status)
    end
end
