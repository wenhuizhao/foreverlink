require "test_helper"

class ForeverLinksControllerTest < ActionDispatch::IntegrationTest
  setup do
    @forever_link = forever_links(:one)
  end

  test "should get index" do
    get forever_links_url, as: :json
    assert_response :success
  end

  test "should create forever_link" do
    assert_difference("ForeverLink.count") do
      post forever_links_url, params: { forever_link: { domain: @forever_link.domain, order_id: @forever_link.order_id, status: @forever_link.status, subdomain: @forever_link.subdomain, user_id: @forever_link.user_id } }, as: :json
    end

    assert_response :created
  end

  test "should show forever_link" do
    get forever_link_url(@forever_link), as: :json
    assert_response :success
  end

  test "should update forever_link" do
    patch forever_link_url(@forever_link), params: { forever_link: { domain: @forever_link.domain, order_id: @forever_link.order_id, status: @forever_link.status, subdomain: @forever_link.subdomain, user_id: @forever_link.user_id } }, as: :json
    assert_response :success
  end

  test "should destroy forever_link" do
    assert_difference("ForeverLink.count", -1) do
      delete forever_link_url(@forever_link), as: :json
    end

    assert_response :no_content
  end
end
