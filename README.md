## Made With
<div align="center">
  <a href="https://angular.io/">
    <img src="https://angular.io/assets/images/logos/angular/angular.svg" alt="angular" height="150" width="221">
  </a>
  <a href="https://golang.org/">
    <img src="https://golang.org/lib/godoc/images/go-logo-blue.svg" alt="golang" height="140" width="95">
  </a>
</div>

- Angular frontend
- Go for a backend API
- MariaDB as... a db
- All live in a docker container.

### Startup
1. Run `./scripts/start.sh`.
2. Once inside the container, `cd /var/www/html/go` and then
`go build -o build/api`. Lastly, start the HTTP server `./build/api`
3. Access the web app via `localhost:8080`.

The image will be built called `go` and will be started and named as `go`.

---

Why the switch?

Measured API performance improvement, reducing latency from 16 to 30ms to 4 to 6 ms with Go.