namespace :npm do
  desc 'Install dependencies'
  task :install do
    on roles(:front) do
      within release_path do
        execute 'docker-compose', "-f #{fetch :docker_file}", :run, 'front', 'npm ci'
      end
    end
  end

  desc 'Build project'
  task :build do
    on roles(:front) do
      within release_path do
        execute 'docker-compose', "-f #{fetch :docker_file}", :run, 'front', 'npm run build'
      end
    end
  end
end