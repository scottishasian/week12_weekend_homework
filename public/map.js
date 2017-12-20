const initialize = function() {


  const center = {
    lat: 55.947647,
    lng: -3.201958
  };

  const container = document.querySelector('#country-map');

  const mainMap = new MapWrapper(container, center, 16);

}

document.addEventListener('DOMContentLoaded', initialize)
