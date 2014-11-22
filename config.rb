###
# Compass
###

# Susy grids in Compass
# First: gem install susy
# require 'susy'

# Change Compass configuration
# compass_config do |config|
#   config.output_style = :compact
# end

###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
# page "/path/to/file.html", :layout => false
#
# With alternative layout
# page "/path/to/file.html", :layout => :otherlayout
#
# A path which all have the same layout
# with_layout :admin do
#   page "/admin/*"
# end

# Proxy (fake) files
# page "/this-page-has-no-template.html", :proxy => "/template-file.html" do
#   @which_fake_page = "Rendering a fake page with a variable"
# end

###
# Helpers
###

# Automatic image dimensions on image_tag helper
# activate :automatic_image_sizes

# Methods defined in the helpers block are available in templates
# helpers do
#   def some_helper
#     "Helping"
#   end
# end

set :css_dir, 'css'

set :js_dir, 'js'

set :images_dir, 'img'

# Build-specific configuration
configure :build do
  # For example, change the Compass output style for deployment
  # activate :minify_css

  # Minify Javascript on build
  # activate :minify_javascript

  # Enable cache buster
  # activate :cache_buster

  # Use relative URLs
  # activate :relative_assets

  # Compress PNGs after build
  # First: gem install middleman-smusher
  # require "middleman-smusher"
  # activate :smusher

  # Or use a different image path
  # set :http_path, "/Content/images/"
end

activate :directory_indexes

activate :deploy do |deploy|
  deploy.method = :git
end

data.events.each do |by_year|
  year = by_year[0]
  year_events = by_year[1]
  year_events.each do |event_map|
    event_id = event_map[0]
    event = event_map[1]
    proxy "/#{year}/#{event_id}/event.html", "event/event.html", :locals => { :event => event }, :ignore => true
    event.talks.each do |talk|
      proxy "/#{year}/#{event_id}/talks/#{talk.name}.html", "event/talk.html", :locals => { :event => event, :talk => talk }, :ignore => true
    end
    event.speakers.each do |speaker|
      proxy "/#{year}/#{event_id}/speakers/#{speaker.name}.html", "event/speaker.html", :locals => { :event => event, :speaker => speaker }, :ignore => true
    end
  end
end
