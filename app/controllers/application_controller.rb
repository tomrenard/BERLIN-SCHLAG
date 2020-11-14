class ApplicationController < ActionController::Base
  # before_action :authenticate_user!
  def footer_action
    @display_footer = true
  end
end
