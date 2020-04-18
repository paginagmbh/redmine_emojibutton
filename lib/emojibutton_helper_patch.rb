# Wiki Extensions plugin for Redmine
# Copyright (C) 2011-2013  Haruyuki Iida
#
# This program is free software; you can redistribute it and/or
# modify it under the terms of the GNU General Public License
# as published by the Free Software Foundation; either version 2
# of the License, or (at your option) any later version.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with this program; if not, write to the Free Software
# Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.

module EmojiButtonPlugin
  module Helper
    module Patch
      def heads_for_wiki_formatter
        super
        return if ie6_or_ie7?

        unless @heads_for_wiki_redmine_emojibutton_included
          content_for :header_tags do
            o = javascript_tag("redmineSettingsFullHostname = '" + Setting.protocol + "://" + Setting.host_name + "';")

            settings = ""
            if Setting.plugin_redmine_emojibutton['max_unicode_version']
              settings << "jsToolBar.prototype.emojibuttonMaxUnicodeVersion = " + Setting.plugin_redmine_emojibutton['max_unicode_version'] + ";"
            end
            unless settings.empty?
              o << javascript_tag(settings)
            end

            o << javascript_include_tag('emojibutton_plugin.js', :plugin => 'redmine_emojibutton')
            o << stylesheet_link_tag('emojibutton_plugin.css', :plugin => 'redmine_emojibutton')

            o.html_safe
          end
          @heads_for_wiki_redmine_emojibutton_included = true
        end
      end

      private

      def ie6_or_ie7?
        useragent = request.env['HTTP_USER_AGENT'].to_s
        return useragent.match(/IE[ ]+[67]./) != nil
      end
    end
  end
end
