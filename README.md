# Express Tasklist MongoDB
Este proyecto es una lista de tareas con guardado en base de datos, desarrollado utilizando Node.js, Express.js, Handlebars (estilizado con Boostrap) y MongoDB.

## Descripción del proyecto
El proyecto consiste en una aplicación de lista de tareas donde se puede agregar, editar y eliminar tareas. Las tareas se guardan en una base de datos MongoDB para persistencia de datos. La aplicación utiliza el framework Express.js para el servidor, las plantillas Handlebars para renderizar las vistas y Boostrap para algo de diseño.

### Funcionalidades
Cada tarea puede ser editada, eliminada o marcada como completada o sin completar ademas todas las tareas pueden ser eliminadas a la vez.

#### Instalación

1. Clona este repositorio en tu máquina local o sube a tu servidor.
2. Instala las dependencias ejecutando el comando `npm install`.
3. Asegurate de configurar las variables de entorno con los datos de conexion de la base de datos Mongodb y el puerto.
4. Ejecuta el servidor en modo produccion con `npm start`.
5. Para iniciar el servidor en modo desarrollo con reinicio automatico (usando nodemon) usa `npm run dev`.


##### Variables de entorno 
MONGODB_URI=mongodb://localhost:27017/DB_name //ejemplo   
PORT=3000 //ejemplo   