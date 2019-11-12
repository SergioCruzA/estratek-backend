# prueba - TODO

Esta projecto consiste en un CRUD basico para la gestion del modelo 'Todos'.

## migrations y seeders

Es necesario correr las migraciones de la tabla (todos) y correr los seeders para la data inicial.

# database

Es necesario la instalación de postgres, para el entorno local se utilizó una imagen de docker con ```docker pull postgres:latest``` para la ultima version.

# environment

Para la conexión a la db, es necesario modificar el archivo `.env` deacuerdo a la configuracion de postgres que se tenga.

# ejecución

1. Se deben instalar las dependencias de node con el siguiente comando: ``` npm install```
2. Se deben correr las migraciones con el siguiente comando: ``` npm run migrate```
3. Se deben correr las seeders con el siguiente comando: ``` npm run seed```
4. Para probar que esté funcionando correctamente, se debe ejecutar el siguiente comando: ```npm start```