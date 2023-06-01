// Funciones para los popups

function plural(feature) {
  if (feature.properties.fallecidos == 1) {
    return "<b style='color: #c8102e;font-size: 18px'>ciclista fallecido:</b><br>";
  } else {
    return "<b style='color: #c8102e;font-size: 18px'>ciclistas fallecidos:</b><br>";
  }
}

function condAlcohol(feature) {
  if (feature.properties.alcohol === "Sí") {
    return "<b class='bsi'>Sí</b>";
  } else if (feature.properties.alcohol === "No") {
    return "<b class ='bno'>No</b>";
  } else {
    return "<b class ='bdesc'>Se desconoce</b>";
  }
}

function condDroga(feature) {
  if (feature.properties.droga === "Sí") {
    return "<b class='bsi'>Sí</b>";
  } else if (feature.properties.droga === "No") {
    return "<b class ='bno'>No</b>";
  } else {
    return "<b class ='bdesc'>Se desconoce</b>";
  }
}

function condHuido(feature) {
  if (feature.properties.huido === "Sí") {
    return "<b class='bsi'>Sí</b>";
  } else if (feature.properties.huido === "No") {
    return "<b class ='bno'>No</b>";
  } else {
    return "<b class ='bdesc'>Se desconoce</b>";
  }
}

function condGenero(feature) {
  if (feature.properties.genero === "Hombre") {
    return "<b class='bno'>Hombre</b>";
  } else if (feature.properties.genero === "Mujer") {
    return "<b class ='bno'>Mujer</b>";
  } else {
    return "<b class ='bdesc'>Se desconoce</b>";
  }
}

// Estilo

function popupPuntos(feature, layer) {
  layer.on("mouseover", function (e) {
    tooltipPopup = L.popup({
      // offset: L.point(0, 0),
      className: "pophover",
    });
    tooltipPopup.setContent(
      "<b>" +
        feature.properties.carretera +
        "</b> - " +
        feature.properties.municipio
    );
    tooltipPopup.setLatLng(e.target.getLatLng());
    tooltipPopup.openOn(map);
  });

  layer.on("mouseout", function (e) {
    map.closePopup(tooltipPopup);
  });

  layer.bindPopup(
    "<b style='color: #c8102e;font-size: 25px'>" +
      feature.properties.fallecidos +
      "</b><br>" +
      plural(feature) +
      "<b class='bsi'>" +
      feature.properties.ciclistas +
      "</b><br><br>Carretera: <b>" +
      feature.properties.carretera +
      " en " +
      feature.properties.municipio +
      ", " +
      feature.properties.provincia +
      "</b><br>" +
      "Punto kilométrico: <b>" +
      feature.properties.pkm +
      "</b><br>Fecha y hora: <b>" +
      feature.properties.fecha +
      "</b><br>Día de la semana: <b>" +
      feature.properties.dia_sem +
      "</b><br><br>" +
      "<b>¿Qué se sabe de la persona que conducía?</b><br><br>" +
      "<table class='tabla'><thead><tr><th>¿Dio positivo en alcohol?</th><th>¿Dio positivo en otras drogas?</th><th>¿Huyó tras el atropello?</th><th>¿Se le ha identificado como hombre o como mujer?</th></tr></thead><tbody><tr><td>" +
      condAlcohol(feature) +
      "</td><td>" +
      condDroga(feature) +
      "</td><td> " +
      condHuido(feature) +
      "</td><td>" +
      condGenero(feature) +
      " </td></tr></tbody></table><br/><a target='_blank' href='" +
      feature.properties.fuente +
      "'>Consulta la fuente" +
      "</a>"
  );
}

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
