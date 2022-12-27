const xmlhttprequest = require('xmlhttprequest');
// llamado a la API 
// Hace rferencia a que no va a cambiar dentro de nuestros archivos 
const API = 'https://api.escuelajs.co/api/v1';

function data(urlapi, callback){
    let xhttp = new xmlhttprequest();

    // abrir una conexion a la API 
    xhttp.open('GET', urlapi, true);
    // Escuhar los diferentes estados que tiene la solicitud y saber cuando esta disponible la informacion 
    xhttp.onreadystatechange = function(event){
        if(xhttp.readystate === 4){
            if(xhttp.status ===200){
                callback(null,JSON.parse(xhttp.responseText));
            }
        }else{
            const error = new Error ('Error'+ urlapi);
            return callback(error, null);
        }
    }
    xhttp.send()
};

data(`${API}/products`,function(error1,data1){

    if(error1) return console.error(error1);

    data(`${API}/products/${data1[0].id}`, function(error2,data2){

        if(error2) return console.error(error2);

        data(`${API}/categories/${data2?.category?.id}`, function(error3,data3){

            if(error3) return console.error(error3);
            
            console.log(data1[0]);
            console.log(data2.tile);
            console.log(data3.name);

        })
    })

})




















// Existen 5 estados en un llamado XMLHttpRequest:
// .

// 0 → Se ha inicializado.
// 1 → Loading (cargando).
// 2 → Se ha cargado.
// 3 → Procesamiento si existe alguna descarga.
// 4 → Completado.
// .
// 📫 Métodos y propiedades:
// .
// xmlhttp.open() → Prepara la petición para ser enviada tomando tres parámetros: prótocolo, url, asíncrono (true).
// xmlhttp.readyState → Retorna el estado de la petición.
// xmlhttp.onreadystatechange → Un eventHandler que es llamado cuando la propiedad readyState cambia.
// xmlhttp.status → Retorna el estado de la respuesta de la petición. (200,400,500)
// xmlhttp.send() → Envía la petición.
    


