require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module AnimeauxBack
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 5.0

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration can go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded after loading
    # the framework and any gems in your application.
    # config.serve_static_assets = true
    config.assets.compile = true
    config.middleware.insert_before 0, Rack::Cors do
      allow do
        origins Rails.env.production? ? 'www.animeaux.org' : 'localhost:8080'
        resource '*', :headers => :any, :methods => :any
      end
    end

    # Only loads a smaller set of middleware suitable for API only apps.
    # Middleware like session, flash, cookies can be added back manually.
    # Skip views, helpers and assets when generating a new resource.
    config.api_only = false
    # config.middleware.use ActionDispatch::Flash
  end
end
