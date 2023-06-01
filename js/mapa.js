// Mapa base

var esquinaizq = L.latLng(51, -24);
var esquinader = L.latLng(19, 20);

var bounds = L.latLngBounds(esquinaizq, esquinader);

var map = L.map("map", {
  attributionControl: true,
  fullscreenControl: true,
  maxBounds: bounds,
}).setView([40, -4], 6);

var simple = L.tileLayer(
  "https://api.mapbox.com/styles/v1/santihpuig/clibq535d030b01qy5mzqer7h/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic2FudGlocHVpZyIsImEiOiJrYkhOMDVnIn0.ak6qwXtkOps01I5G-LCS_A",
  {
    minZoom: 6,
    maxZoom: 18,
    attribution:
      'Map data &copy; <a href="http://openstreetmap.org"> OpenStreetMap</a> contributors, ' +
      '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
      'Imagery © <a href="http://mapbox.com">Mapbox</a>',
  }
).addTo(map);
