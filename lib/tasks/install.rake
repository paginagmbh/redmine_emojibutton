desc 'Add requirements for Redmine v4.1+'
namespace :emojibutton do
  task :install do

    # Uncomment the sprockets railtie requirement
    path = "#{Rake.original_dir}/config/application.rb"
    IO.write(path, File.open(path) { |f| f.read.gsub(/^# require 'sprockets\/railtie'$/, "require 'sprockets/railtie'") })

    # Add a blank manifest file for sprockets
    unless File.exist?(Rails.root.join('app', 'assets', 'config', 'manifest.js'))
      `mkdir -p app/assets/config && echo '{}' > app/assets/config/manifest.js`
    end

  end
end
