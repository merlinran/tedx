require 'bootstrap-sass'
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

helpers do
  def nav_active(page)
    print @page_id
    @page_id == page ? 'class="active"' : ''
  end

  def inject_events()
    return data.events.inject([]) do |all_talks, by_year|
      year = by_year[0]
      year_events = by_year[1]
      return all_talks.concat(year_events.inject([]) do |yearly_talks, event_map|
        event_id = event_map[0]
        event = event_map[1]
        return yearly_talks.concat(yield year, event_id, event)
      end)
    end
  end

  def all_events()
    return inject_events do |year, event_id, event|
      [event.merge({
        :year => year,
        :event_id => event_id,
      })]
    end
  end

  def all_speakers()
    return inject_events do |year, event_id, event|
      return event.speakers.map do |speaker|
        speaker.merge({
          :year => year,
          :event_id => event_id,
          :event => event.event,
          :talk => event.talks.find do |talk|
            talk.speaker_id == speaker.id
          end
        })
      end
    end
  end

  def all_talks()
    return inject_events do |year, event_id, event|
      return event.talks.collect do |talk|
        talk.merge({
          :year => year,
          :event_id => event_id,
          :event => event.event,
          :speaker => event.speakers.find do |speaker|
            speaker.id == talk.speaker_id
          end
        })
      end
    end
  end

  def event_path(event)
    return "/#{event.year}/#{event.event_id}.html"
  end

  def speaker_path(speaker)
    return "/#{speaker.year}/#{speaker.event_id}/speakers/#{speaker.id}.html"
  end

  def talk_path(talk)
    return "/#{talk.year}/#{talk.event_id}/talks/#{talk.id}.html"
  end

end

all_events().each do |event|
  proxy event_path(event), "event/event.html", :locals => { :event => event }, :ignore => true
end

all_speakers().each do |speaker|
  proxy speaker_path(speaker), "event/speaker.html", :locals => { :speaker => speaker }, :ignore => true
end

all_talks().each do |talk|
  proxy talk_path(talk), "event/talk.html", :locals => { :talk => talk }, :ignore => true
end

all_talks().group_by { |talk| talk.category }.each do |category, talks|
  proxy "/talks/#{category}.html",
    "talks.html",
    :locals => { :talks => talks }
end
