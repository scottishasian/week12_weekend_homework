const MapWrapper = function(container, coordinates, zoom) {
  this.googleMap = new google.maps.Map(container, {
    center: coordinates,
    zoom: zoom
  });
}
