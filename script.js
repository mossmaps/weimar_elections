var map = L.map('map').setView([52.52, 13.405], 10);

L.tileLayer.provider('OpenStreetMap.Mapnik').addTo(map);

L.geoJSON('Weimar Election Data.geojson').addTo(map);
