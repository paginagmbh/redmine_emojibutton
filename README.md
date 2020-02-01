Redmine Gemoji Plugin
=====================

This plugin enables github style emoji notation in textile formatter and adds a new button to the wiki editor to insert emoji's more easily.

*This plugin is roughly based on a fork of the [redmine_gemoji](https://github.com/tmy/redmine_gemoji) plugin, made by [@tmy](https://github.com/tmy/) and others. Thanks! :smirk:*

*This plugin is listed in the [Redmine plugin directory](http://www.redmine.org/plugins/redmine_emojibutton)*


Compatibility
-------------

The `master` supports Redmine **2.6.x** as well as **3.x** and **4.x**.

**PLEASE NOTE:** The `master` branch uses images to display emojis and therefore has a consistent display across all operating systems. The downside, however, is that there is no support for *latest* Unicode 10+ emojis – and will never be! If you want to use the latest Unicode emojis displayed in the operating systems default emoji font please use the pre-release version v0.6.0 from the `gemoji-4.0-native-emojis-no-images` branch. It uses the `gemoji` gem and displays emojis as native Unicode emojis.



Installation
------------

 1. Copy the plugin directory into the `plugins` directory, for example:

        $ cd /home/redmine/redmine-${version}/plugins
        $ git clone https://github.com/paginagmbh/redmine_emojibutton.git

 2. Run bundler (from the **plugin directory**, e.g. `/home/redmine/redmine-${version}/plugins/redmine_emojibutton`):

        $ bundle install

 3. Run rake task (from the **Redmine root directory**, e.g. `/home/redmine/redmine-${version}`):

        $ rake emoji

 4. If your Redmine version 4.1, run the following rake install. Otherwise, skip to step 5.
 
        $ rake emojibutton:install

 5.  Run the plugin rake task to provide the assets (from the Redmine root directory):

        $ rake redmine:plugins:migrate RAILS_ENV=production

 6. Restart redmine


Usage
-----

* Insert emojis with new button in issue/wiki editor
* Use emoji codes from http://www.emoji-cheat-sheet.com



Update the plugin
-----------------

 1. Pull the changes from the repository:

        $ cd /home/redmine/redmine-${version}/plugins/redmine_emojibutton
        $ git pull origin master

 2. Run bundler (from the **plugin directory**, e.g. `/home/redmine/redmine-${version}/plugins/redmine_emojibutton`):

        $ bundle update

 3. Run rake task (from the **Redmine root directory**, e.g. `/home/redmine/redmine-${version}`):

        $ rake emoji

 4.  Run the plugin rake task to provide the assets (from the Redmine root directory):

        $ rake redmine:plugins:migrate RAILS_ENV=production

 5. Restart redmine


License
-------

*redmine_emojibutton* plugin is released under the [MIT License](LICENCE).
