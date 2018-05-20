

var miMapa;

require(["esri/map",
"esri/geometry/Point",
"dojo/domReady!"], function(Map,
  Point) {

var miCentro = new Point (-16.26,28.464);


var obj = {
  "basemap": "hybrid",
  "center" : miCentro,
  "zoom": 8

}

miMapa = new Map("mapaCont", obj);

/* Dame un zoom de 15 */
function dameZoom () {
 var Zoom = miMapa.setZoom(15);
}

var botonZoom = document.getElementById("btnZoom");
botonZoom.onclick = dameZoom;


/* Dame un zoom del valor que tu me des */

function dameunZoom () {
      var inputZoom = document.getElementById("inputZoom");
      miMapa.setZoom(inputZoom.value);
      var escalaTexto = miMapa.getScale();
      var parrafo = document.getElementById ("pEscala");
      var textoRes = "La escala es : " + escalaTexto;
      parrafo.innerHTML = textoRes;


    }

var calculazoom = document.getElementById("btnCalcZoom");
calculazoom.onclick = dameunZoom;


function LatLon () {

  var inputZoom = document.getElementById("inputZoom");
  var Lat = document.getElementById("inputLat");
  var Lon = document.getElementById("inputLon");


  var mipunto = new Point (Lat.value,Lon.value);
  miMapa.centerAndZoom(mipunto, inputZoom.value);




};

var botonLatylon = document.getElementById("btnLatLon");
botonLatylon.onclick = LatLon;

});




/*featureLayer.setDefinitionExpression("STATE_NAME = 'South Carolina'");


}

var calculazoom = document.getElementById("btnCalcZoom");
    calculazoom.onclick = dameunZoom;

    var botonZoom = document.getElementById("btnZoom");
    botonZoom.onclick = dameZoom;

    var botonLatylon = document.getElementById("btnLatLon");
    botonLatylon.onclick = LatLon;*/
