// ==========================================
// DUBROVNIK PLANESPOTTING - LDDU
// Spotting positions
// ==========================================

const map = L.map("map").setView([42.5680, 18.2600], 14);


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
// ==========================================

L.marker([42.57024915946364, 18.245391561326596])
    .addTo(map)
    .bindPopup(`
        <h3>🟢 Spotting Position 1</h3>

        <p>
            ✈️ Aircraft can be seen just seconds
            before touchdown.
        </p>

        <p>
            📍 42.570249, 18.245392
        </p>

        <p>
            📸 Excellent position for close-up
            landing photographs.
        </p>
    `);


// ==========================================
// SPOTTING POSITION 2
// ==========================================

L.marker([42.56441239157695, 18.253351872913807])
    .addTo(map)
    .bindPopup(`
        <h3>🔵 Spotting Position 2</h3>

        <p>
            ⭐ Very good spotting position.
        </p>

        <p>
            ✈️ You can see aircraft throughout
            their movement around the airport.
        </p>

        <p>
            📍 42.564412, 18.253352
        </p>

        <p>
            📸 Great all-around location for
            plane spotting.
        </p>
    `);


// ==========================================
// SPOTTING POSITION 3
// ==========================================

L.marker([42.5573083097695, 18.27213111634963])
    .addTo(map)
    .bindPopup(`
        <h3>🟠 Spotting Position 3</h3>

        <p>
            🧱 If you climb on the wall, you can
            see aircraft on the taxiway and the
            entire General Aviation apron.
        </p>

        <p>
            ✈️ Aircraft vacating via taxiway E
            can also be photographed very well.
        </p>

        <p>
            📸 Excellent position for unique
            taxiing and vacating shots.
        </p>

        <p>
            📍 42.557308, 18.272131
        </p>
    `);


// ==========================================
// SPOTTING POSITION 4
// HNK KONAVLJANIN
// ==========================================

L.marker([42.5544013524664, 18.282621230913833])
    .addTo(map)
    .bindPopup(`
        <h3>🔴 HNK Konavljanin</h3>

        <p>
            ⚽ HNK Konavljanin
        </p>

        <p>
            ✈️ Very good spotting location when
            <b>RWY 29</b> is in use.
        </p>

        <p>
            📸 Excellent for aircraft on approach
            to runway 29.
        </p>

        <p>
            📍 42.554401, 18.282621
        </p>
    `);


// ==========================================
// SPOTTING POSITION 5
// HILL
// ==========================================

L.marker([42.588411734070775, 18.246839539179884])
    .addTo(map)
    .bindPopup(`
        <h3>🟣 Hill Spot</h3>

        <p>
            🏔️ Located on the hill overlooking
            Dubrovnik Airport.
        </p>

        <p>
            ✈️ Aircraft are further away, but you
            can see the <b>entire airport</b>.
        </p>

        <p>
            🌆 You can also see
            <b>Dubrovnik Old Town</b>.
        </p>

        <p>
            📸 Excellent for wide shots and
            aircraft + airport + Dubrovnik scenery.
        </p>

        <p>
            📍 42.588412, 18.246840
        </p>
    `);


// ==========================================
// LEGEND
// ==========================================

const legend = L.control({ position: "bottomright" });

legend.onAdd = function () {

    const div = L.DomUtil.create("div", "map-legend");

    div.innerHTML = `
        <h4>📍 LDDU Spotting</h4>

        <div>🟢 Spot 1 - Seconds before touchdown</div>
        <div>🔵 Spot 2 - Aircraft visible all the time</div>
        <div>🟠 Spot 3 - Taxiway / GA apron</div>
        <div>🔴 Spot 4 - HNK Konavljanin</div>
        <div>🟣 Spot 5 - Hill / Airport panorama</div>
    `;

    return div;
};

legend.addTo(map);
