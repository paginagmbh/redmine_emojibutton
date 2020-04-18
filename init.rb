require 'emojibutton_formatter'
require 'emojibutton_formatter_textile_patch'
require 'emojibutton_formatter_markdown_patch'
require 'emojibutton_helper_patch'

Redmine::Plugin.register :redmine_emojibutton do
  name 'Redmine Emoji Button'
  author 'Tobias Fischer'
  description "Enable GitHub style emoji's in tickets and comments and choose emojis from a new editor button"
  version '0.6.2'
  url 'https://github.com/paginagmbh/redmine_emojibutton'
  author_url 'https://github.com/tofi86'
  requires_redmine :version_or_higher => '3.0'

  settings :default => {
    'max_unicode_version' => '13.0'
  }, :partial => 'redmine_emojibutton_settings'
end

Rails.configuration.to_prepare do

  # send Emoji Patches to all wiki formatters available to be able to switch formatter without app restart
  Redmine::WikiFormatting::format_names.each do |format|
    case format
    when "markdown"
      unless Redmine::WikiFormatting::Markdown::HTML.included_modules.include? EmojiButtonPlugin::Formatter::Markdown::Patch
        Redmine::WikiFormatting::Markdown::HTML.send(:include, EmojiButtonPlugin::Formatter::Markdown::Patch)
      end
    when "textile"
      unless Redmine::WikiFormatting::Textile::Formatter.included_modules.include? EmojiButtonPlugin::Formatter::Textile::Patch
        Redmine::WikiFormatting::Textile::Formatter.send(:include, EmojiButtonPlugin::Formatter::Textile::Patch)
      end
    end

    unless Redmine::WikiFormatting::helper_for(format).included_modules.include? EmojiButtonPlugin::Helper::Patch
     Redmine::WikiFormatting::helper_for(format).prepend EmojiButtonPlugin::Helper::Patch
    end
  end
end
