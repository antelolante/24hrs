// ==========================================
// LDDU DUBROVNIK PLANESPOTTING MAP
// ==========================================

// Create map
const map = L.map("map").setView(
    [42.5680, 18.2600],
    14
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
// CUSTOM SPOTTING MARKER
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
// SPOT 1
// ==========================================

createSpotMarker(
    42.57024915946364,
    18.245391561326596,
    "1",
    "#39d353"
)
.addTo(map)
.bindPopup(`
    <div class="popup spot1">

        <h3>🟢 Spot 1</h3>

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
// SPOT 2
// ==========================================

createSpotMarker(
    42.56441239157695,
    18.253351872913807,
    "2",
    "#3399ff"
)
.addTo(map)
.bindPopup(`
    <div class="popup spot2">

        <h3>🔵 Spot 2</h3>

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
// SPOT 3
// ==========================================

createSpotMarker(
    42.5573083097695,
    18.27213111634963,
    "3",
    "#ff9d00"
)
.addTo(map)
.bindPopup(`
    <div class="popup spot3">

        <h3>🟠 Spot 3</h3>

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

        <p>
            ⚠️ Stay outside restricted
            airport areas.
        </p>

    </div>
`);


// ==========================================
// SPOT 4 - HNK KONAVLJANIN
// ==========================================

createSpotMarker(
    42.5544013524664,
    18.282621230913833,
    "4",
    "#ff4444"
)
.addTo(map)
.bindPopup(`
    <div class="popup spot4">

        <h3>🔴 Spot 4 - HNK Konavljanin</h3>

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

        <p>
            📸 Excellent for aircraft
            approaching runway 29.
        </p>

    </div>
`);


// ==========================================
// SPOT 5
// ==========================================

createSpotMarker(
    42.588411734070775,
    18.246839539179884,
    "5",
    "#c04cff"
)
.addTo(map)
.bindPopup(`
    <div class="popup spot5">

        <h3>🟣 Spot 5 - Hill</h3>

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

        <p>
            📸 Excellent for wide shots
            with aircraft and Dubrovnik.
        </p>

    </div>
`);


// ==========================================
// AIRPORT MARKER
// ==========================================

const airportIcon = L.divIcon({

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


L.marker(
    [42.5624, 18.2660],
    { icon: airportIcon }
)
.addTo(map)
.bindPopup(`
    <div class="popup airport">

        <h3>✈️ Dubrovnik Airport</h3>

        <p>
            <strong>LDDU / DBV</strong>
        </p>

        <p>
            Dubrovnik Ruđer Bošković Airport
        </p>

        <p>
            🛫 Runway:
            <strong>11/29</strong>
        </p>

    </div>
`);


// ==========================================
// CORRECTED RUNWAY 11/29
// ==========================================

const runway = L.polyline(

    [
        [42.569572, 18.247528],  // RWY 11
        [42.555820, 18.282192]   // RWY 29
    ],

    {
        color: "#ff3333",
        weight: 6,
        opacity: 0.8
    }

).addTo(map);


runway.bindPopup(`
    <div class="popup runway">

        <h3>🛫 LDDU Runway 11/29</h3>

        <p>
            Runway length:
            <strong>3,230 m</strong>
        </p>

        <p>
            <strong>11</strong>
            ← Runway →
            <strong>29</strong>
        </p>

    </div>
`);


// ==========================================
// RUNWAY MARKER
// ==========================================

const runwayIcon = L.divIcon({

    className: "",

    html: `
        <div style="
            width:50px;
            height:50px;
            background:#181818;
            border:3px solid #ff3333;
            border-radius:8px;
            display:flex;
            align-items:center;
            justify-content:center;
            transform:rotate(45deg);
            box-shadow:0 4px 12px rgba(0,0,0,.7);
        ">

            <div style="
                transform:rotate(-45deg);
                color:white;
                font-weight:bold;
                font-size:14px;
                text-align:center;
                line-height:16px;
            ">
                11
                <br>
                ✈
                <br>
                29
            </div>

        </div>
    `,

    iconSize: [50, 50],
    iconAnchor: [25, 25],
    popupAnchor: [0, -25]
});


L.marker(
    [42.5627, 18.2658],
    { icon: runwayIcon }
)
.addTo(map)
.bindPopup(`
    <div class="popup runway">

        <h3>🛫 Runway 11/29</h3>

        <p>
            LDDU / DBV
        </p>

        <p>
            Length:
            <strong>3,230 m</strong>
        </p>

    </div>
`);


// ==========================================
// LEGEND
// ==========================================

const legend = L.control({
    position: "bottomright"
});


legend.onAdd = function () {

    const div = L.DomUtil.create(
        "div",
        "map-legend"
    );

    div.innerHTML = `

        <h4>📍 LDDU Spotting</h4>

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

        <div style="color:#ff3333">
            🛫 Runway 11/29
        </div>

    `;

    return div;
};


legend.addTo(map);
