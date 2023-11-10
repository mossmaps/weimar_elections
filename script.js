var map = L.map('map').setView([52.52, 13.405], 10);

L.tileLayer('https://tile.openstreetmap.org/${10}/${13.405}/${52.52}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
}.addTo(map));

var marker = L.marker([52.52, 13.405]).addTo(map);