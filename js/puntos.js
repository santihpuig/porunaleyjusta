// Estilo

function popupPuntos(feature, layer) {
  layer.on("mouseover", function (e) {
    tooltipPopup = L.popup({
      offset: L.point(0, 0),
    });
    tooltipPopup.setContent("<b>" + feature.properties.fecha + "</b>");
    tooltipPopup.setLatLng(e.target.getLatLng());
    tooltipPopup.openOn(map);
  });

  layer.on("mouseout", function (e) {
    map.closePopup(tooltipPopup);
  });

  layer.bindPopup(
    "Ciclistas fallecidos: <b>" +
      feature.properties.fallecidos +
      "</b><br>Comunidad autónoma: <b>" +
      feature.properties.ccaa +
      "</b><br>" +
      "Provincia: <b>" +
      feature.properties.provincia +
      "</b><br>" +
      "Municipio: <b>" +
      feature.properties.municipio +
      "</b><br>" +
      "Fecha: <b>" +
      feature.properties.fecha +
      "</b><br>" +
      "Carretera: <b>" +
      feature.properties.carretera +
      "</b><br>" +
      "Punto kilométrico: <b>" +
      feature.properties.pkm +
      "</b><br>" +
      "Conductor bajo los efectos del alcohol: <b>" +
      feature.properties.alcohol +
      "</b><br>" +
      "Conductor bajo los efectos de otras drogas: <b>" +
      feature.properties.droga +
      "</b><br>" +
      "Conductor huido tras el atropello: <b>" +
      feature.properties.huido +
      "</b>"
  );
}

function getSize(d) {
  return d > 3 ? "9" : d > 2 ? "6" : d > 1 ? "3" : "4";
}

function estiloPuntos(feature, layer) {
  return {
    radius: getSize(feature.properties.fallecidos),
    fillColor: "#e63946",
    color: "#e63946",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8,
  };
}

// Marcadores

var puntos = L.geoJson(atropellos, {
  pointToLayer: function (feature, latlng) {
    return L.circleMarker(latlng, estiloPuntos);
  },
  style: estiloPuntos,
  onEachFeature: popupPuntos,
}).addTo(map);
