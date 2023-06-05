// Estilo puntos

function getSize(d) {
  return d == 3 ? "7" : d == 2 ? "5" : d == 1 ? "3" : "0";
}

function estiloPuntos(feature, layer) {
  return {
    radius: getSize(feature.properties.fallecidos),
    fillColor: "#c8102e",
    color: "#c8102e",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8,
  };
}

// Puntos

var puntos = L.geoJson(atropellos, {
  pointToLayer: function (feature, latlng) {
    return L.circleMarker(latlng, estiloPuntos);
  },
  style: estiloPuntos,
  onEachFeature: popupPuntos,
}).addTo(map);
