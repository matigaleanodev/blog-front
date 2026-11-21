# blog-front

[English](README.md)

Frontend Angular/Ionic del blog educativo. Consume el gateway HTTP para autenticación, publicaciones y comentarios.

Forma parte de una práctica abandonada para explorar separación de servicios y comunicación solicitud/respuesta. Se conserva sin mantenimiento activo; no está destinada a producción.

## Stack

Angular · Ionic · TypeScript.

## Alcance y configuración

Configurar environment.API_URL para el gateway, normalmente http://localhost:3000/api.

## Desarrollo local

Usar un entorno Node.js compatible con package.json y el lockfile de dependencias, cuando exista.

```sh
npm install
npm start
npm run build
npm test
```

## Repositorios relacionados

- [Blog practice / Práctica de blog](https://github.com/matigaleanodev/blog-personal)
