/* eslint-disable*/
const locations = JSON.parse(document.getElementById('map').dataset.locations);

mapboxgl.accessToken =
  'pk.eyJ1IjoiZWtvZWtvIiwiYSI6ImNramRuNGRqZjN4YXIyemxnZmF4d2w0d3gifQ.vVgbKZtB8ODLMngyPvEEhQ';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/ekoeko/ckj5whf330qis19mw4o9li6p0',
  scrollZoom: false
});

const bounds = new mapboxgl.LngLatBounds();

locations.forEach(loc => {
  // Create marker
  const el = document.createElement('div');
  el.className = 'marker';

  new mapboxgl.Marker({
    element: el,
    anchor: 'bottom'
  })
    .setLngLat(loc.coordinates)
    .addTo(map);

  // Add popup
  new mapboxgl.Popup({ offset: 30 })
    .setLngLat(loc.coordinates)
    .setHTML(`<p>${loc.description}</p>`)
    .addTo(map);

  // Extends map bounds to include current location
  bounds.extend(loc.coordinates);
});

map.fitBounds(bounds, {
  padding: {
    top: 200,
    bottom: 150,
    right: 100,
    left: 100
  }
});

map.on('load', function() {
  map.resize();
});

function responsiveMapa(x) {
  if (x.matches) {
    map.fitBounds(bounds, {
      padding: {
        top: 100,
        bottom: 75,
        right: 50,
        left: 50
      }
    });
  }
}
function responsiveMapa2(y, z) {
  if (y.matches && z.matches) {
    map.fitBounds(bounds, {
      padding: {
        top: 0,
        bottom: 0,
        right: 0,
        left: 0
      }
    });
  }
}

var x = window.matchMedia('(max-width: 450px)');
var y = window.matchMedia('(max-width: 570px) and (max-height: 425px)');
var z = window.matchMedia('(max-width: 736px) and (max-height: 415px)');
responsiveMapa(x); // Call listener function at run time
responsiveMapa2(y, z); // Call listener function at run time
x.addListener(responsiveMapa); // Attach listener function on state changes
z.addListener(responsiveMapa2); // Attach listener function on state changes
y.addListener(responsiveMapa2); // Attach listener function on state changes
