## Made With
<div align="center">
  <a href="https://angular.io/">
    <img src="https://angular.io/assets/images/logos/angular/angular.svg" alt="angular" height="150" width="221">
  </a>
  <a href="https://codeigniter.com/">
    <img src="https://codeigniter.com/assets/images/ci-logo-big.png" alt="codeigniter" height="200" width="155">
  </a>
</div>

- Angular frontend
- Codeigniter api backend
- NGINX webserver that lives in...
- Docker, using PHP FPM to serve the PHP, and a
- MariaDB instance in its own docker container

### Startup
1. Run `ng build` from within `angular/`. This will generate a build in the `dist/` folder.
2. Back in the project root directory, run `docker-compose up -d` to start the database and the NGINX + Codeigniter containers.
3. Access the web app via `https://localhost/` and Codeigniter via `https://localhost/ci-api/`