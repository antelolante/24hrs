// ==========================================
// CROATIA PLANESPOTTING
// LDDU + LDSP
// ==========================================


// ==========================================
// CREATE MAP
// ==========================================

const map = L.map("map").setView(
    [43.0, 17.5],
    7
);


// ==========================================
// OPENSTREETMAP
// ==========================================

L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
        attribution: "&copy; OpenStreetMap contributors",
        maxZoom: 19
    }
).addTo(map);


// ==========================================
// SPOTTING MARKER FUNCTION
// ==========================================

function createSpotMarker(
    lat,
    lng,
    number,
    color
) {

    const icon = L.divIcon({

        className: "",

        html: `
            <div style="
                width:42px;
                height:42px;
                background:${color};
                border:3px solid white;
                border-radius:50%;
                display:flex;
                align-items:center;
                justify-content:center;
                color:white;
                font-size:18px;
                font-weight:bold;
                box-shadow:0 3px 10px rgba(0,0,0,.6);
            ">
                ${number}
            </div>
        `,

        iconSize: [42, 42],
        iconAnchor: [21, 21],
        popupAnchor: [0, -20]
    });

    return L.marker(
        [lat, lng],
        { icon: icon }
    );
}


// ==========================================
// AIRPORT ICON
// ==========================================

function createAirportIcon() {

    return L.divIcon({

        className: "",

        html: `
            <div style="
                width:46px;
                height:46px;
                background:#1473e6;
                border:3px solid white;
                border-radius:50%;
                display:flex;
                align-items:center;
                justify-content:center;
                font-size:22px;
                box-shadow:0 3px 12px rgba(0,0,0,.6);
            ">
                ✈️
            </div>
        `,

        iconSize: [46, 46],
        iconAnchor: [23, 23],
        popupAnchor: [0, -25]
    });
}


// ============================================================
// ============================================================
// LDDU - DUBROVNIK
// ============================================================
// ============================================================


// ==========================================
// LDDU SPOT 1
// ==========================================

createSpotMarker(
    42.57024915946364,
    18.245391561326596,
    "1",
    "#39d353"
)
.addTo(map)
.bindPopup(`
    <div class="popup">

        <h3>🟢 LDDU Spot 1</h3>

        <p>
            ✈️ Aircraft can be seen
            <strong>seconds before touchdown.</strong>
        </p>

        <p>
            📍 42.570249, 18.245392
        </p>

        <p>
            📸 Excellent for close-up
            landing photographs.
        </p>

    </div>
`);


// ==========================================
// LDDU SPOT 2
// ==========================================

createSpotMarker(
    42.56441239157695,
    18.253351872913807,
    "2",
    "#3399ff"
)
.addTo(map)
.bindPopup(`
    <div class="popup">

        <h3>🔵 LDDU Spot 2</h3>

        <p>
            ⭐ Very good spotting position.
        </p>

        <p>
            ✈️ You can see aircraft
            <strong>all the time.</strong>
        </p>

        <p>
            📍 42.564412, 18.253352
        </p>

        <p>
            📸 Great all-around
            spotting location.
        </p>

    </div>
`);


// ==========================================
// LDDU SPOT 3
// ==========================================

createSpotMarker(
    42.5573083097695,
    18.27213111634963,
    "3",
    "#ff9d00"
)
.addTo(map)
.bindPopup(`
    <div class="popup">

        <h3>🟠 LDDU Spot 3</h3>

        <p>
            🧱 From the wall you can see
            aircraft on the taxiway and
            the entire General Aviation apron.
        </p>

        <p>
            ✈️ Aircraft vacating via
            <strong>taxiway E</strong>
            can be photographed very well.
        </p>

        <p>
            📍 42.557308, 18.272131
        </p>

        <p>
            📸 Excellent for taxiing
            and vacating shots.
        </p>

    </div>
`);


// ==========================================
// LDDU SPOT 4
// ==========================================

createSpotMarker(
    42.5544013524664,
    18.282621230913833,
    "4",
    "#ff4444"
)
.addTo(map)
.bindPopup(`
    <div class="popup">

        <h3>🔴 LDDU Spot 4 - HNK Konavljanin</h3>

        <p>
            ⚽ HNK Konavljanin
        </p>

        <p>
            ✈️ Very good when
            <strong>RWY 29</strong>
            is in use.
        </p>

        <p>
            📍 42.554401, 18.282621
        </p>

    </div>
`);


// ==========================================
// LDDU SPOT 5
// ==========================================

createSpotMarker(
    42.588411734070775,
    18.246839539179884,
    "5",
    "#c04cff"
)
.addTo(map)
.bindPopup(`
    <div class="popup">

        <h3>🟣 LDDU Spot 5 - Hill</h3>

        <p>
            🏔️ Located on the hill
            overlooking Dubrovnik Airport.
        </p>

        <p>
            ✈️ Aircraft are further away,
            but you can see the
            <strong>whole airport.</strong>
        </p>

        <p>
            🌆 You can also see
            <strong>Dubrovnik Old Town.</strong>
        </p>

        <p>
            📍 42.588412, 18.246840
        </p>

    </div>
`);


// ==========================================
// LDDU AIRPORT
// ==========================================

L.marker(
    [42.5624, 18.2660],
    {
        icon: createAirportIcon()
    }
)
.addTo(map)
.bindPopup(`
    <div class="popup">

        <h3>✈️ Dubrovnik Airport</h3>

        <p>
            <strong>LDDU / DBV</strong>
        </p>

        <p>
            Runway:
            <strong>11/29</strong>
        </p>

    </div>
`);


// ==========================================
// LDDU RUNWAY
// ==========================================

const ldduRunway = L.polyline(

    [
        [42.569572, 18.247528],
        [42.555820, 18.282192]
    ],

    {
        color: "#ff3333",
        weight: 6,
        opacity: 0.8
    }

).addTo(map);


ldduRunway.bindPopup(`
    <div class="popup">

        <h3>🛫 LDDU Runway 11/29</h3>

        <p>
            Length:
            <strong>3,230 m</strong>
        </p>

    </div>
`);


// ============================================================
// ============================================================
// LDSP - SPLIT
// ============================================================
// ============================================================


// ==========================================
// LDSP SPOT 1
// RWY 23 ARRIVAL - MORNING
// ==========================================

// ============================================================
// LDSP - SPLIT AIRPORT SPOTTING POSITIONS
// ============================================================

// SPOT 1
createSpotMarker(
    43.546278,
    16.312611,
    "1",
    "#39d353"
)
.addTo(map)
.bindPopup(`
    <div class="popup">
        <h3>🟢 LDSP Spot 1</h3>
        <p><strong>RWY 23 Arrival</strong></p>
        <p>Excellent position for aircraft arriving on RWY 23.</p>
        <p>🌅 Best light: sunrise – 13:00</p>
        <p>📍 43.546278, 16.312611</p>
    </div>
`);


// SPOT 2
createSpotMarker(
    43.546639,
    16.309306,
    "2",
    "#3399ff"
)
.addTo(map)
.bindPopup(`
    <div class="popup">
        <h3>🔵 LDSP Spot 2</h3>
        <p><strong>RWY 23 End</strong></p>
        <p>Very good for aircraft movements around the end of RWY 23.</p>
        <p>🌅 Best light: afternoon – sunset</p>
        <p>📍 43.546639, 16.309306</p>
    </div>
`);


// SPOT 3
createSpotMarker(
    43.545583,
    16.307361,
    "3",
    "#ff9d00"
)
.addTo(map)
.bindPopup(`
    <div class="popup">
        <h3>🟠 LDSP Spot 3</h3>
        <p><strong>RWY 23 Short Final / Touchdown</strong></p>
        <p>Excellent for touchdowns and aircraft on short final.</p>
        <p>🌅 Best light: 14:30 – sunset</p>
        <p>📍 43.545583, 16.307361</p>
    </div>
`);


// SPOT 4
createSpotMarker(
    43.534528,
    16.288333,
    "4",
    "#ff4444"
)
.addTo(map)
.bindPopup(`
    <div class="popup">
        <h3>🔴 LDSP Spot 4</h3>
        <p><strong>RWY 05 Turning Area</strong></p>
        <p>Excellent position for aircraft turning at RWY 05.</p>
        <p>🌅 Best light: 15:00 – sunset</p>
        <p>📍 43.534528, 16.288333</p>
    </div>
`);


// SPOT 5
createSpotMarker(
    43.535056,
    16.292611,
    "5",
    "#c04cff"
)
.addTo(map)
.bindPopup(`
    <div class="popup">
        <h3>🟣 LDSP Spot 5</h3>
        <p><strong>RWY 05 Line-up & Approach</strong></p>
        <p>
            Good for line-ups, approaches and
            backtracking on RWY 05.
        </p>
        <p>🌅 Best light: sunrise – 13:00</p>
        <p>📍 43.535056, 16.292611</p>
    </div>
`);


// SPOT 6
createSpotMarker(
    43.535639,
    16.294722,
    "6",
    "#00bcd4"
)
.addTo(map)
.bindPopup(`
    <div class="popup">
        <h3>🔷 LDSP Spot 6</h3>
        <p><strong>Observation Deck</strong></p>
        <p>
            Official observation area inside
            the terminal.
        </p>
        <p>
            ✈️ Excellent for seeing aircraft
            movements around the airport.
        </p>
        <p>📍 43.535639, 16.294722</p>
    </div>
`);


// SPOT 7
createSpotMarker(
    43.536139,
    16.297583,
    "7",
    "#9c27b0"
)
.addTo(map)
.bindPopup(`
    <div class="popup">
        <h3>🟣 LDSP Spot 7</h3>
        <p><strong>Terminal / Observation Position</strong></p>
        <p>
            Position from the terminal area
            with views of airport movements.
        </p>
        <p>📍 43.536139, 16.297583</p>
    </div>
`);


// SPOT 8
createSpotMarker(
    43.533722,
    16.274944,
    "8",
    "#ff69b4"
)
.addTo(map)
.bindPopup(`
    <div class="popup">
        <h3>🩷 LDSP Spot 8 - Mountain</h3>
        <p><strong>Mountain Spot</strong></p>
        <p>
            Elevated position west of the airport.
        </p>
        <p>
            🛬 Good for RWY 05 arrivals
            and backtracking.
        </p>
        <p>
            🛫 Also good for RWY 23 departures.
        </p>
        <p>🌅 Best light: 15:00 – sunset</p>
        <p>📍 43.533722, 16.274944</p>
    </div>
`);


// ==========================================
// LDSP AIRPORT
// ==========================================

L.marker(
    [43.5389, 16.2980],
    {
        icon: createAirportIcon()
    }
)
.addTo(map)
.bindPopup(`
    <div class="popup">

        <h3>✈️ Split Airport</h3>

        <p>
            <strong>LDSP / SPU</strong>
        </p>

        <p>
            Split Airport
        </p>

        <p>
            Runway:
            <strong>05/23</strong>
        </p>

        <p>
            Length:
            <strong>2,550 m</strong>
        </p>

    </div>
`);


// ==========================================
// LDSP RUNWAY
// ==========================================

const LDSP_RUNWAY = [
    [43.531944, 16.285583], // RWY 05 end
    [43.545181, 16.309194]  // RWY 23 end
];

L.polyline(LDSP_RUNWAY, {
    color: "#ff3333",
    weight: 4,
    opacity: 0.75,
    lineCap: "round"
}).addTo(map).bindPopup(`
    <div class="popup">
        <h3>🛫 LDSP RWY 05/23</h3>
        <p><strong>Split Airport</strong></p>
        <p>Length: 2,550 m</p>
        <p>Heading: 052° / 232°</p>
    </div>
`);

// ==========================================
// LEGEND
// ==========================================

const legend = L.control({
    position: "bottomright"
});


legend.onAdd = function () {

    const div =
        L.DomUtil.create(
            "div",
            "map-legend"
        );

    div.innerHTML = `

        <h4>🇭🇷 Croatia Planespotting</h4>

        <strong>LDDU - Dubrovnik</strong>

        <div style="color:#39d353">
            🟢 Spot 1
        </div>

        <div style="color:#3399ff">
            🔵 Spot 2
        </div>

        <div style="color:#ff9d00">
            🟠 Spot 3
        </div>

        <div style="color:#ff4444">
            🔴 Spot 4
        </div>

        <div style="color:#c04cff">
            🟣 Spot 5
        </div>

        <br>

        <strong>LDSP - Split</strong>

        <div style="color:#39d353">
            🟢 Spot 1
        </div>

        <div style="color:#3399ff">
            🔵 Spot 2
        </div>

        <div style="color:#ff9d00">
            🟠 Spot 3
        </div>

        <div style="color:#ff4444">
            🔴 Spot 4
        </div>

        <div style="color:#c04cff">
            🟣 Spot 5
        </div>

        <div style="color:#00bcd4">
            🔷 Spot 6
        </div>

        <div style="color:#9c27b0">
            🟣 Spot 7
        </div>

        <br>

        <div style="color:#ff3333">
            🛫 Runway
        </div>

    `;

    return div;
};


legend.addTo(map);
