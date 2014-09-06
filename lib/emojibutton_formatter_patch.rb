module EmojiButtonPlugin
  module Formatter
    module Patch
      def self.included(base) # :nodoc:
        base.send(:include, EmojiButtonPlugin::Formatter)
        base.class_eval do
          unloadable # Send unloadable so it will not be unloaded in development
        end
      end
    end

    Redmine::WikiFormatting::Textile::Formatter::RULES << :inline_emoji

    private

    def inline_emoji(text)
      text.gsub!(/:([a-z0-9\+\-_]+):/) do |match|
        if emoji = Emoji.find_by_alias($1)
          '<img alt="' + $1 + '" height="20" src="'+ Setting.protocol + "://" + Setting.host_name + Redmine::Utils.relative_url_root + '/images/emoji/' + emoji.image_filename + '" style="vertical-align:middle" width="20" title=":' + $1 + ':" class="emoji" />'
        else
          match
        end
      end
    end
  end
end
