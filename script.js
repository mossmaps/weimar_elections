const map = L.map('map').setview([52.52, 13.405], 10);
L.tileLayer('https://tile.openstreetmap.org/${z}/${x}/${y}.png');
L.geoJSON('\Weimar Election Data.geojson').addTo(map);