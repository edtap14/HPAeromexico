<h1>Examen de ingreso Frontend Aeromexico</h1>

## Proyecto de Harry Potter

Instrucciones:

1. Es necesario clonar el repositorio para obtener el codigo fuente. Para lo cual es necesario útilizar el comando git clone.
````
$ git clone https://github.com/edtap14/HPAeromexico.git
````
2. Una vez descargado el repo, ingresamos a la carpeta client con la terminal.

3. Instalamos los paquetes necesarios para el proyecto con npm o yarn segun sea el caso.

con npm:
````
$ npm install
````
con yarn:
````
$ yarn install
````
4. una vez instalados los paquetes es necesario iniciar el servidor de json-server con el comando:
````
$ json-server --watch db.json --port 3001
````
*** IMPORTANTE ***
El archivo no debe ser manipulado por el usuario. 
5. En una terminal adicional, iniciamos el servidor de react con el comando:
````    
$ npm start
````
6. Finalmente, ya tenemos el proyeto corriendo y podemos hacer uso de la pagina en el frontend.

cabe mencionar que es necesario tener ambos servidores corriendo para que la pagina funcione. una vez que se apague alguno de los dos servicios se pierde la informacion.

<h3>Preguntas adicionales: </h3>

1. ¿Ques es lo que más te gusto de tu desarrollo?

R: Me gusto que fuera un proyecto de algo con lo que estoy familiarizado, tanto en terminos de programación como en terminos de entretenimiento.

2. Si hubieras tenido más tiempo ¿qué hubieras mejorado o qué más hubieras hecho?

R: Podría mejorar haciendo paginado para que se mostraran cierto nuemero de cards por pagina, además de diseñar un buscador que permita encontrar a un personaje por nombre y/o apellido. Adicional si la api contara con información sobre descripción o algun texto podría adicionarlo en la parte de detalle del personaje.


3. Descríbenos un pain point o bug con el que te hayas encontrado y como lo solucionaste

R: No había tenido anteriormente oportunidad de trabajar con la libreria de json-server, por lo que fue un reto tener que entender la parte del post, como implementarlo y como hacer que me respetara los envios de datos. 





