source "https://rubygems.org"

# Managing which Jekyll version is used to run.When you want to use a different version, change it below, save the
# file and run `bundle install`. Run Jekyll with `bundle exec`, like so:
#
#     bundle exec jekyll serve

# Default theme for new Jekyll sites:
# gem "minima", "~> 2.0"
# Alternative version:
# gem "jekyll", "~> 3.9.4"

gem "github-pages", group: :jekyll_plugins

# command to install and update all necessary gems:
# bundle install

# Plugins:
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.6"
end

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.0", :install_if => Gem.win_platform?

# kramdown v2 ships without the gfm parser by default. If you're using
# kramdown v1, comment out this line.
gem "kramdown-parser-gfm"

# Lock `http_parser.rb` gem to `v0.6.x` on JRuby builds since newer versions of the gem
# do not have a Java counterpart.
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]
