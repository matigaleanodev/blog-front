# blog-front

[Español](README.es.md)

Angular/Ionic frontend for the educational blog. Calls the HTTP gateway for authentication, posts and comments.

Part of an abandoned learning exercise exploring service boundaries and request/response communication. Kept without active maintenance; not intended for production.

## Stack

Angular · Ionic · TypeScript.

## Scope and configuration

Configure environment.API_URL for the gateway, normally http://localhost:3000/api.

## Local development

Use a Node.js toolchain compatible with package.json and the dependency lockfile, when present.

```sh
npm install
npm start
npm run build
npm test
```

## Related repositories

- [Blog practice / Práctica de blog](https://github.com/matigaleanodev/blog-personal)
