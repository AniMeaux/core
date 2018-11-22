require 'test_helper'

class NewslettersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @newsletter = newsletters(:one)
  end

  test "should get index" do
    get newsletters_url, as: :json
    assert_response :success
  end

  test "should create newsletter" do
    assert_difference('Newsletter.count') do
      post newsletters_url, params: { newsletter: {  } }, as: :json
    end

    assert_response 201
  end

  test "should show newsletter" do
    get newsletter_url(@newsletter), as: :json
    assert_response :success
  end

  test "should update newsletter" do
    patch newsletter_url(@newsletter), params: { newsletter: {  } }, as: :json
    assert_response 200
  end

  test "should destroy newsletter" do
    assert_difference('Newsletter.count', -1) do
      delete newsletter_url(@newsletter), as: :json
    end

    assert_response 204
  end
end
