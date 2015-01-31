source 'https://rubygems.org'

ruby '2.2.0'

gem 'rails', '4.2.0'
gem 'foreman'
gem 'pg'
gem 'thin'
gem 'sass-rails', '~> 5.0'
gem 'uglifier', '>= 1.3.0'
gem 'coffee-rails', '~> 4.1.0'

gem 'jquery-rails'
gem 'turbolinks'
gem 'jbuilder', '~> 2.0'
gem 'sdoc', '~> 0.4.0', group: :doc

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
  gem 'guard-rspec', require: false
end

group :test do
  gem 'shoulda-matchers', require: false
end

group :production do
  gem 'rails_12factor'
end
