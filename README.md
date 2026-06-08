::page{title="Laboratorio Práctico - Callback Asíncrono (30 minutos)"}

<img src="https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMDeveloperSkillsNetwork-CD0220EN-SkillsNetwork/images/IDSN-logo.png" width="200" alt="logo de cognitiveclass.ai">

##

## Objetivo del Ejercicio:

Después de completar este laboratorio, podrás:

- Describir callbacks asíncronos
- Crear una aplicación en Node.js

## Requisitos Previos

- Conocimientos básicos de JavaScript

::page{title="Tarea 1 : Configuración - Verificar los archivos clonados"}

1. Abre una ventana de terminal utilizando el menú en el editor: Terminal > Nuevo Terminal.

<img src="https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMDeveloperSkillsNetwork-CD0220EN-SkillsNetwork/labs/Module2_Async_Callback/images/new-terminal.png" style="align:center" width="75%">

2. Cambia a tu carpeta de proyecto.

```
cd /home/project
```


3. Verifica si tienes la carpeta **lkpho-Cloud-applications-with-Node.js-and-React**

```
ls /home/project
```


Si lo haces, puedes saltar al paso 5.

4. Clona el repositorio de git que contiene los artefactos necesarios para este laboratorio, si aún no existe.

```
git clone https://github.com/ibm-developer-skills-network/lkpho-Cloud-applications-with-Node.js-and-React.git
```


5. Cambia al directorio para este laboratorio.

```
cd lkpho-Cloud-applications-with-Node.js-and-React/CD220Labs/async_callback/
```


6.  Enumera el contenido de este directorio para ver los artefactos de este laboratorio.

```
ls
```


> Debes tener algunos archivos de ejercicio que estarás utilizando en los ejercicios.

::page{title="Tarea 2: I/O Síncrono"}

En la vista del explorador de archivos ExampleSyncIO.js. Aparecería así.

<img src="https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/AUs_hzXyCWrwT3VmQmNW6w/1.png" width="75%">

<details><summary>También puedes hacer clic aquí para ver el código</summary>

```javascript
// Requiring fs module - fs is used for File I/O
let fs = require('fs');
 
// Define the filenames to be read
let filename1 = "courseDetails.json";
let filename2 = "sampleData.json";
 
// Function to read the first file synchronously
function readFile1(filename1) {
    // Reading the file Synchronously - Blocking rest of execution
    let data = fs.readFileSync(filename1);
    console.log("\n\nThe content of the file is \n\n" + data);
    console.log("Completed reading file1");
}
 
// Function to read the second file synchronously
function readFile2(filename2) {
    // Reading the file Synchronously - Blocking rest of execution
    let data = fs.readFileSync(filename2);
    console.log("\n\nThe content of the file is \n\n" + data);
    console.log("Completed reading file2");
}
 
// Log message before reading the first file
console.log('Before reading file-1');
readFile1(filename1);
 
// Log message before reading the second file
console.log('Before reading file-2');
readFile2(filename2);
 
// Log message after reading both files
console.log('All done!');
```


</details>

#### Aquí hay una explicación del código en él:

- `require('fs')` importa el módulo fs incorporado de Node.js, que proporciona funcionalidad relacionada con el sistema de archivos.

- `readFile1(filename1)` y `readFile2(filename2)` definen funciones para leer `courseDetails.json` y `sampleData.json` respectivamente de manera sincrónica utilizando `fs.readFileSync`, que bloquea la ejecución posterior hasta que se lea cada archivo.

- Antes de llamar a las funciones `readFile1(filename1)` y `readFile2(filename2)`, se imprimen mensajes de registro para indicar el inicio del proceso de lectura para cada archivo.

- Después de iniciar la lectura de ambos archivos, se imprime un mensaje de registro final "¡Todo listo!" para indicar que el código se ha ejecutado más allá de la iniciación de la lectura de archivos.

2. En la ventana del terminal, ejecuta el servidor con el siguiente comando.

```
node ExampleSyncIO.js
```


Observe que los dos archivos se están leyendo de manera sincrónica, uno después del otro. Esto será evidente por el orden en que aparece el registro en la consola.

::page{title="Tarea 3: IO Asíncrono"}

1. En la vista del explorador de archivos ExampleAsyncIO.js. Aparecería así.

<img src="https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/uuI4mt6xrK844j3gazjbkw/2.png" width="75%">

<details><summary>También puedes hacer clic aquí para ver el código</summary>

```javascript
// Requiring fs module - fs is used for File I/O
let fs = require('fs');

let filename1 = "courseDetails.json";
let filename2 = "sampleData.json";

// Reading the file Asynchronously - Not blocking rest of execution
function readFile1(filename1) {
    // Using fs.readFile to read the file asynchronously
    fs.readFile(filename1, (err, data) => {
        if (err) {
            // Logging the error if any occurs
            console.log(err);
        } else {
            // Logging the content of the file if read successfully
            console.log("\n\nThe content of the file is \n\n" + data);
            console.log("Completed reading file1");
        }
    });
}

function readFile2(filename2) {
    // Using fs.readFile to read the file asynchronously
    fs.readFile(filename2, (err, data) => {
        if (err) {
            // Logging the error if any occurs
            console.log(err);
        } else {
            // Logging the content of the file if read successfully
            console.log("\n\nThe content of the file is \n\n" + data);
            console.log("Completed reading file2");
        }
    });
}

// Log message before reading the first file
console.log('Before reading the file-1');
readFile1(filename1);

// Log message before reading the second file
console.log('Before reading the file-2');
readFile2(filename2);

// Log message after initiating the reading of both files
console.log('All done!');
```


</details>

### Explicación del Código
- `require('fs')` importa el módulo fs integrado de Node.js, que proporciona funcionalidad relacionada con el sistema de archivos.

- `readFile1(filename1)` y `readFile2(filename2)` definen funciones para leer `courseDetails.json` y `sampleData.json` respectivamente utilizando `fs.readFile`, que lee los archivos de manera asíncrona, permitiendo que el resto del código se ejecute sin esperar a que la lectura del archivo se complete.

- En cada función, `fs.readFile(filename, callback)` lee el archivo especificado. Si ocurre un error durante la lectura, se registra el error; de lo contrario, se registra el contenido del archivo y un mensaje de finalización.

- Antes de llamar a las funciones `readFile1(filename1)` y `readFile2(filename2)`, se imprimen mensajes de registro para indicar el inicio del proceso de lectura para cada archivo.

- Después de iniciar la lectura de ambos archivos, se imprime un mensaje de registro final "¡Todo listo!" para indicar que el código se ha ejecutado más allá de la iniciación de la lectura del archivo.

2. En la ventana del terminal, ejecuta el servidor con el siguiente comando.

```
node ExampleAsyncIO.js
```


Observe que los dos archivos se están leyendo de manera asíncrona. Esto será evidente por el orden en que aparece el registro en la consola. Los siguientes tres registros en la consola aparecen antes de que se imprima el contenido del archivo, aunque los registros se llaman en el código en un orden diferente.

```
Before the reading the file-1
Before the reading the file-2
All done!
```


::page{title="Tarea 4: Creación de Funciones de Callback"}

1. En la vista del explorador de archivos ExampleAsyncCallBack.js. Se vería así.

<img src="https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/yR3tAyIOkzFrtmJJ-GFDsg/3.png" width="75%">

<details><summary>También puedes hacer clic aquí para ver el código</summary>

```javascript
// This method will be provided as a parameter
function firstCallBackMethod() {
    // Logging a message inside the callback method
    console.log("Inside the first call back method");
}

// Log message before calling setTimeout
console.log("Going to call setTimeout with a delay of 5 seconds");

// Call the function firstCallBackMethod after a delay using setTimeout
setTimeout(firstCallBackMethod, 5000);
```


</details>

### Explicación del Código
- `firstCallBackMethod()` es una función que registra un mensaje "Dentro del primer método de callback". Esta función se utilizará como un callback.

- Antes de llamar a `setTimeout`, se imprime un mensaje de registro "Voy a llamar a setTimeout con un retraso de 5 segundos" para indicar la próxima configuración del temporizador.

- `setTimeout(firstCallBackMethod, 5000)` programa la ejecución de `firstCallBackMethod()` después de un retraso de 5000 milisegundos (5 segundos), permitiendo que el resto del código continúe ejecutándose de inmediato mientras el temporizador se ejecuta en segundo plano.

2. En la ventana del terminal, ejecuta el servidor con el siguiente comando.

```
node ExampleAsyncCallBack.js
```


setTimeout es un método de biblioteca incorporado que te permite pasar un método que necesita ser llamado después de un tiempo de espera, como un parámetro. Aquí, firstCallBackMethod se define y luego se pasa como un parámetro a setTimeout. Como habrás observado, el método se llamará después de 5 segundos. Esto se llama `callback`.

::page{title="Tarea 5: Promesas"}

1. En la vista del explorador de archivos asyncPromise.js. Se vería así.

<img src="https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IV9Dj-KHu_vlpZJK9xeqPQ/4.png" width="75%">

<details><summary>También puedes hacer clic aquí para ver el código</summary>

```javascript
// Requiring prompt-sync module to enable synchronous user input
let prompt = require('prompt-sync')();

// Requiring fs module - fs is used for File I/O
let fs = require('fs');

// Creating a new Promise to handle file reading
const methCall = new Promise((resolve, reject) => {
    // Prompting the user to input the filename
    let filename = prompt('What is the name of the file?');
    try {
        // Reading the file synchronously
        const data = fs.readFileSync(filename, { encoding: 'utf8', flag: 'r' });
        // Resolving the promise with the file data if read successfully
        resolve(data);
    } catch (err) {
        // Rejecting the promise if an error occurs
        reject(err);
    }
});

// Logging the promise object
console.log(methCall);

// Handling the resolved and rejected states of the promise
methCall.then(
    // Logging the file data if the promise is resolved
    (data) => console.log(data),
    // Logging an error message if the promise is rejected
    (err) => console.log("Error reading file")
);
```


</details>

### Explicación del Código
- `require('prompt-sync')()` importa el módulo `prompt-sync` para habilitar la entrada de usuario sincrónica. `require('fs')` importa el módulo `fs` incorporado de Node.js para funcionalidades relacionadas con el sistema de archivos.

- `const methCall = new Promise((resolve, reject) => { ... })` crea una nueva promesa para manejar el proceso de lectura del archivo. La promesa toma una función de callback con los parámetros `resolve` y `reject`.

- Dentro de la promesa:
   - `let filename = prompt('¿Cuál es el nombre del archivo?')` solicita al usuario que ingrese el nombre del archivo.
   - `fs.readFileSync(filename, { encoding: 'utf8', flag: 'r' })` intenta leer el archivo especificado de manera sincrónica con codificación UTF-8.
   - Si el archivo se lee con éxito, se llama a `resolve(data)` con los datos del archivo, resolviendo la promesa.
   - Si ocurre un error, se llama a `reject(err)` con el error, rechazando la promesa.

- `console.log(methCall)` registra el objeto de la promesa.

- `methCall.then(...).catch(...)` maneja la promesa:
    - `then((data) => console.log(data))` registra los datos del archivo si la promesa se resuelve.
    - `catch((err) => console.log("Error al leer el archivo"))` registra un mensaje de error si la promesa es rechazada.

2. En la ventana del terminal, ejecuta el siguiente comando para instalar prompt-sync.

```
npm install prompt-sync
```


3. En la ventana del terminal, ejecuta el servidor con el siguiente comando. Te pedirá un nombre de archivo. Ingresa un nombre de archivo válido del directorio actual.

```
node asyncPromise.js
```


methCall aquí es un objeto de promesa. Cuando la promesa se cumple, se imprimirá el registro en la consola. Ejecuta el comando anterior nuevamente y trata de pasar un nombre de archivo inválido. Verás el registro en la consola impreso a medida que la promesa es rechazada.

::page{title="Tarea 6: AsyncAxiosRequest"}

1. En la vista del explorador de archivos asyncAxiosRequest.js. Aparecería así.

<img src="https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/lRjEw8EYzfx_y_PTg7WPMw/5.png" width="75%">

<details><summary>También puedes hacer clic aquí para ver el código</summary>

```javascript
// Requiring axios module for making HTTP requests
const axios = require('axios').default;

// Function to connect to a URL and handle the response
const connectToURL = (url) => {
    // Sending a GET request to the specified URL using axios
    const req = axios.get(url);
    // Logging the initial promise object
    console.log(req);
    // Handling the promise resolution
    req.then(resp => {
        // Logging the fulfillment message
        console.log("Fulfilled");
        // Logging the response data
        console.log(resp.data);
    })
    // Handling the promise rejection
    .catch(err => {
        // Logging the rejection message with the URL
        console.log("Rejected for url " + url);
        // Logging the error message
        console.log(err.toString());
    });
}

// Valid URL
connectToURL('https://raw.githubusercontent.com/ibm-developer-skills-network/lkpho-Cloud-applications-with-Node.js-and-React/master/CD220Labs/async_callback/sampleData.json');
// Invalid URL
connectToURL('https://raw.githubusercontent.com/ibm-developer-skills-network/lkpho-Cloud-applications-with-Node.js-and-React/master/CD220Labs/async_callback/sampleDate.json');
```


</details>

### Explicación del Código
- `require('axios').default` importa el módulo `axios`, que se utiliza para realizar solicitudes HTTP.

- `connectToURL(url)` define una función que toma una URL como parámetro y envía una solicitud GET a esa URL utilizando `axios.get(url)`. Registra el objeto de promesa inicial devuelto por `axios.get`.

- Dentro de la función `connectToURL`:
   - `req.then(resp => { ... })` maneja la resolución de la promesa registrando "Cumplido" y los datos de la respuesta (`resp.data`) si la solicitud es exitosa.
   - `req.catch(err => { ... })` maneja el rechazo de la promesa registrando "Rechazado para url" seguido de la URL y el mensaje de error si la solicitud falla.

- La función `connectToURL()` se utiliza para llamar a una URL. Proporcionar una URL válida debería recuperar los datos con éxito, mientras que una URL inválida debería resultar en un error y activar el manejador de rechazo.

2. Para ejecutar este código, necesitamos instalar el paquete axios. Ejecute el siguiente comando para instalar axios.

```
npm install axios
```


3. En la ventana del terminal, ejecuta el código con el siguiente comando.

```
node asyncAxiosRequest.js
```


Cuando ejecutes el código, el primer connectToURL es una solicitud de axios a una URL válida que devolverá un objeto JSON. El segundo connectToURL es una solicitud de axios a una URL no válida. Esto devolverá un mensaje de error apropiado. La salida será como se muestra a continuación.

<img src="https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMDeveloperSkillsNetwork-CD0220EN-SkillsNetwork/labs/Module2_Async_Callback/images/screenshot_axiosOutput.png" width="75%">

::page{title="Tarea 7: Trabajando con JSON"}

1. En el explorador de archivos, visualiza jsonParse.js. Debería aparecer así.

<img src="https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/Wc7jYmqtrt-f_YPCha6uBA/6.png" width="75%">

<details><summary>También puedes hacer clic aquí para ver el código</summary>

```javascript
// Requiring axios module for making HTTP requests
const axios = require('axios').default;

// Sending a GET request to the specified URL using axios
const req = axios.get("https://raw.githubusercontent.com/ibm-developer-skills-network/lkpho-Cloud-applications-with-Node.js-and-React/master/CD220Labs/async_callback/courseDetails.json");
// Logging the initial promise object
console.log(req);
// Handling the promise resolution
req.then(resp => {
    // Storing the response data in the courseDetails variable
    let courseDetails = resp.data;
    // Logging the course details as a formatted JSON string
    console.log(JSON.stringify(courseDetails, null, 4));
})
// Handling the promise rejection
.catch(err => {
    // Logging the error message
    console.log(err.toString());
    // This will console log the error with the code. e.g., Error: Request failed with status code 404
});
```


</details>

### Explicación del Código
- `require('axios').default` importa el módulo `axios`, que se utiliza para realizar solicitudes HTTP.

- `axios.get()` envía una solicitud GET a la URL especificada para obtener el archivo `courseDetails.json`.

- La constante `req` almacena la promesa devuelta por `axios.get`.

- `console.log(req)` registra el objeto de promesa inicial en la consola.

- `req.then(resp => { ... })` maneja la resolución de la promesa:
   - `let courseDetails = resp.data` almacena los datos de la respuesta en la variable `courseDetails`.
   - `console.log(JSON.stringify(courseDetails, null, 4))` registra los detalles del curso como una cadena JSON formateada con sangrías.

- `req.catch(err => { ... })` maneja el rechazo de la promesa:
   - `console.log(err.toString())` registra el mensaje de error, que incluye el código de error y la descripción si la solicitud falla (por ejemplo, `Error: Request failed with status code 404`).

2. Para ejecutar este código, necesitamos instalar el paquete axios. Tendrás el módulo axios que instalaste en el ejercicio anterior. Si no, ejecuta el siguiente comando para instalar axios.

```
npm install axios
```


3. En la ventana del terminal, ejecuta el código con el siguiente comando.

```
node jsonParse.js
```


Cuando ejecutas el código, se realiza una solicitud axios a una URL remota que devuelve un objeto JSON. Este objeto JSON se convierte en una cadena (o se formatea en una forma legible) y se registra en la consola. La salida será como se muestra a continuación.

<img src="https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMDeveloperSkillsNetwork-CD0220EN-SkillsNetwork/labs/Module2_Async_Callback/images/screenshot_jsonParseOutput.png" width="75%">

### ¡Felicidades! Has completado el laboratorio del segundo módulo de este curso.

## Resumen

Ahora que has aprendido a utilizar la programación de Callback Asíncrono, iremos más allá y ampliaremos las capacidades de nuestro lado del servidor.

## Author(s)

[Lavanya](https://www.linkedin.com/in/lavanya-sunderarajan-199a445 "Lavanya")

<h3 align="center"> &#169; IBM Corporation. Todos los derechos reservados. <h3/>