source 'https://rubygems.org'

ruby '2.5.1'

gem 'rails', '~> 4.2'
gem 'foreman'
gem 'pg'
gem 'puma'
gem 'sass-rails', github: 'rails/sass-rails' # Use sass-rails master until Sass 3.3 is supported: https://github.com/rails/sass-rails/pull/192
gem 'uglifier', '>= 1.3.0'
gem 'coffee-rails', '~> 4.1.0'
gem 'slim'
gem 'bourbon'
gem 'neat'

gem 'jquery-rails'
gem 'turbolinks'
gem 'jbuilder', '~> 2.0'
gem 'sdoc', '~> 0.4.0', group: :doc
gem 'sucker_punch'
gem 'intelligence', github: 'sighmin/diagnosing-cancer-with-ai', ref: '4125162b49b26f6f7c6b6324885a2e521a05f065'

# Assets
gem 'font-awesome-rails'

group :development, :test do
  gem 'byebug' # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'spring'
  gem 'spring-commands-rspec'
  gem 'pry-rails'
  gem 'rspec-rails'
end

group :development do
  gem 'better_errors'
  gem 'binding_of_caller'
end

group :test do
  gem 'shoulda-matchers', require: false
end

group :production do
  gem 'rails_12factor'
end
