require 'test_helper'

class AnimalImagesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @animal_image = animal_images(:one)
  end

  test "should get index" do
    get animal_images_url, as: :json
    assert_response :success
  end

  test "should create animal_image" do
    assert_difference('AnimalImage.count') do
      post animal_images_url, params: { animal_image: { animal_id: @animal_image.animal_id, image_id: @animal_image.image_id } }, as: :json
    end

    assert_response 201
  end

  test "should show animal_image" do
    get animal_image_url(@animal_image), as: :json
    assert_response :success
  end

  test "should update animal_image" do
    patch animal_image_url(@animal_image), params: { animal_image: { animal_id: @animal_image.animal_id, image_id: @animal_image.image_id } }, as: :json
    assert_response 200
  end

  test "should destroy animal_image" do
    assert_difference('AnimalImage.count', -1) do
      delete animal_image_url(@animal_image), as: :json
    end

    assert_response 204
  end
end
