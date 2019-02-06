SENDGRID_CONFIG = YAML.load_file("#{::Rails.root}/config/sendgrid.yml")[::Rails.env]

# Override keys
SENDGRID_CONFIG['api_key'] = ENV['SENDGRID_API_KEY'] if ENV['SENDGRID_API_KEY']
