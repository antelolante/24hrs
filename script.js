// ==========================================
// DUBROVNIK PLANESPOTTING - LDDU
// Real spotting locations
// ==========================================

const map = L.map("map").setView([42.5638, 18.2570], 14);


// OpenStreetMap
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);


// ==========================================
// AIRPORT
// ==========================================

L.marker([42.5624, 18.2660])
    .addTo(map)
    .bindPopup(`
        <h3>✈️ Dubrovnik Airport</h3>
        <b>LDDU / DBV</b>
        <p>Dubrovnik Ruđer Bošković Airport</p>
        <p><b>Runway:</b> 11/29</p>
    `);


// ==========================================
// SPOTTING POSITION 1
// RWY 11 SHORT FINAL
// ==========================================

L.marker([42.570499, 18.239793])
    .addTo(map)
    .bindPopup(`
        <h3>🟢 RWY 11 Short Final</h3>

        <p>
            One of the documented spotting locations
            near Močići.
        </p>

        <p>
            📍 <b>42.570499, 18.239793</b>
        </p>

        <p>
            ✈️ Excellent for aircraft on final approach
            to RWY 11.
        </p>

        <p>
            📷 Especially good for approach photography.
        </p>
    `);


// ==========================================
// SPOTTING POSITION 2
// RWY 11 - CHURCH / PERIMETER
// ==========================================

L.marker([42.564229, 18.254096])
    .addTo(map)
    .bindPopup(`
        <h3>🔵 RWY 11 Perimeter Spot</h3>

        <p>
            Documented spotting position near the
            perimeter behind the church.
        </p>

        <p>
            📍 <b>42.564229, 18.254096</b>
        </p>

        <p>
            ✈️ Good view of aircraft approaching
            RWY 11.
        </p>

        <p>
            📷 Used by plane spotters for approach
            photography.
        </p>
    `);


// ==========================================
// SPOTTING POSITION 3
// RWY 29 - HNK KONAVLJANIN
// ==========================================

// Approximate map position of the documented
// HNK Konavljanin football-club spotting area.
L.marker([42.5597, 18.2745])
    .addTo(map)
    .bindPopup(`
        <h3>🟠 RWY 29 Approach</h3>

        <p>
            HNK Konavljanin football-club area
            in Čilipi/Konavle.
        </p>

        <p>
            ✈️ Documented location for photographing
            aircraft approaching RWY 29.
        </p>

        <p>
            📷 Particularly useful when RWY 29
            is in use.
        </p>
    `);


// ==========================================
// RUNWAY LINE
// ==========================================

const runway = L.polyline([
    [42.5592, 18.2770],
    [42.5650, 18.2550]
], {
    color: "#ff3333",
    weight: 4,
    opacity: 0.8
}).addTo(map);

runway.bindPopup(`
    <h3>🛫 LDDU Runway 11/29</h3>
    <p>Runway length: approximately 3,230 m</p>
    <p>Direction: 11 / 29</p>
`);


// ==========================================
// MAP LEGEND
// ==========================================

const legend = L.control({ position: "bottomright" });

legend.onAdd = function () {

    const div = L.DomUtil.create("div", "map-legend");

    div.innerHTML = `
        <h4>Planespotting</h4>
        <div>🟢 RWY 11 Short Final</div>
        <div>🔵 RWY 11 Perimeter</div>
        <div>🟠 RWY 29 Approach</div>
        <div>✈️ Airport</div>
    `;

    return div;
};

legend.addTo(map);
