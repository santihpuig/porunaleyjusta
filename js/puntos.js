// Puntos

var puntos = L.geoJson(atropellos, {
  pointToLayer: function (feature, latlng) {
    return L.circleMarker(latlng, estiloPuntos);
  },
  style: estiloPuntos,
  onEachFeature: popupPuntos,
}).addTo(map);
