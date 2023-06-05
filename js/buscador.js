//var buscador = L.layerGroup(puntos);

var searchControl = new L.Control.Search({
  layer: puntos,
  collapsed: false,
  initial: false,
  propertyName: "municipio",
  marker: false,
  moveToLocation: function (latlng, title, map) {
    map.setView(latlng, 12);
  },
});
map.addControl(searchControl);
