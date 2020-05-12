# Deployment

To handle the deployment of the apps, we use [Capistrano](https://capistranorb.com/).

Before deploying, ensure your SSH key is present in the production servers (both front-end & api).

To deploy in production, run at the root of the project:

```bash
bundle exec cap production deploy
```

(Ruby is required & you must run `bundle` to install the capistrano gems before)

Running this will ask your SSH key password. Once validated, the deployment will starts.
This will stop all the containers, install the required dependencies, build the project & re-start the containers once again. See [the deployment steps](./config/deploy/production.rb) for more informations.

This will deploy the branch "master".

## Deploy a specific branch

If you need to deploy a different branch than "master", this can be changed in `config/deploy.rb` by editing the line ```set :branch, "master"```
