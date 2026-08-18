// LDDU / Dubrovnik Airport
const map = L.map("map").setView([42.5624, 18.2660], 14);

// OpenStreetMap karta
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);


// Dubrovnik Airport marker
L.marker([42.5624, 18.2660])
    .addTo(map)
    .bindPopup(`
        <h3>✈️ Dubrovnik Airport</h3>
        <b>LDDU / DBV</b>
        <p>Dubrovnik Ruđer Bošković Airport</p>
    `);


// RWY 11 APPROACH
L.marker([42.5700, 18.2480])
    .addTo(map)
    .bindPopup(`
        <h3>🟢 RWY 11 Approach</h3>
        <p>
            Spotting position za prilaze na RWY 11.
        </p>
    `);


// RWY 29 APPROACH
L.marker([42.5550, 18.2840])
    .addTo(map)
    .bindPopup(`
        <h3>🔵 RWY 29 Approach</h3>
        <p>
            Spotting position za prilaze na RWY 29.
        </p>
    `);


// HILL SPOT
L.marker([42.5585, 18.2740])
    .addTo(map)
    .bindPopup(`
        <h3>🟠 Hill Spot</h3>
        <p>
            Viša spotting pozicija s pogledom prema aerodromu.
        </p>
    `);