module ApplicationHelper
  def sign_out_link
    return if current_user.nil?

    button_to "Log out", destroy_user_session_path, {method: :delete}
  end
end
