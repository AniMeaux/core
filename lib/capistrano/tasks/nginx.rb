namespace :nginx do
  desc "Copy config"
  task :copy do
    on roles(:front) do |host|
      upload! 'apps/nginx/front.conf' , '/etc/nginx/sites-available/default'
    end
    on roles(:back) do |host|
      upload! 'apps/nginx/back.conf' , '/etc/nginx/sites-available/default'
    end
  end

  desc "Restart config"
  task :restart do
    on roles(:all) do |host|
      within release_path do
        execute :service, :nginx, :restart
      end
    end
  end
end