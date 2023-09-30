var map = L.map('map').setview([52.52, 13.405], 10);
L.tileLayer('https://tile.openstreetmap.org/${z}/${x}/${y}.png'), {
    maxZoom: 19,
    attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
}.addTo(map);