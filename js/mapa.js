// Mapa base

var esquinaizq = L.latLng(50, -24);
var esquinader = L.latLng(19, 20);

var bounds = L.latLngBounds(esquinaizq, esquinader);

var map = L.map("map", {
  zoomControl: false,
  attributionControl: false,
  fullscreenControl: true,
  maxBounds: bounds,
}).setView([39.95, -3.5], 6);

var simple = L.tileLayer(
  "https://api.mapbox.com/styles/v1/santihpuig/clibq535d030b01qy5mzqer7h/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic2FudGlocHVpZyIsImEiOiJrYkhOMDVnIn0.ak6qwXtkOps01I5G-LCS_A",
  {
    minZoom: 5,
    maxZoom: 18,
    attribution:
      'Map data &copy; <a href="http://openstreetmap.org"> OpenStreetMap</a> contributors, ' +
      '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
      'Imagery © <a href="http://mapbox.com">Mapbox</a> | ' +
      '<a href="https://santihpuig.com/portfolio/porunaleyjusta/">santihpuig - datos: 2008-2022</a>',
  }
).addTo(map);
