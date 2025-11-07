Entrega Final - Desarrollo Backend III (NestJS)

Resumen:
Proyecto migrado a NestJS con las funcionalidades previas (mocks, users, pets, generateData),
documentación Swagger para Users, tests funcionales para adoption router, y Dockerfile.

DockerHub user: juanilucente
(la imagen NO fue subida automáticamente; instrucciones para construir y subir están más abajo)

Cómo ejecutar (local):
1) Copiar .env.example a .env y completar MONGO_URI
2) npm install
3) npm run start:dev

Swagger (Users):
- Una vez corriendo, ir a: http://localhost:3000/api/docs

Tests:
- npm test
(usa mocha + ts-node; test de adopciones incluidos en test/adoption.spec.ts)

Contenido principal:
- src/ (Nest-style modules, controllers, services, schemas)
- test/ (tests funcionales de adoption)
- Dockerfile
- README.txt (este archivo)
