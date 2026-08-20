// ============================================================
// CROATIA PLANESPOTTING
// LDDU + LDSP + LDZD + LDRI + LDPL + LDZA + LDOS
// ============================================================


// ============================================================
// MAP
// ============================================================

const map = L.map("map").setView(
    [44.5, 16.0],
    7
);


// ============================================================
// OPENSTREETMAP
// ============================================================

L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
        attribution: "&copy; OpenStreetMap contributors",
        maxZoom: 19
    }
).addTo(map);


// ============================================================
// SPOTTING MARKER
// ============================================================

function createSpotMarker(lat, lng, number, color) {

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


// ============================================================
// AIRPORT ICON
// ============================================================

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
// HELPER FOR SPOTS
// ============================================================

function addSpot(
    lat,
    lng,
    number,
    color,
    title,
    description
) {

    createSpotMarker(
        lat,
        lng,
        number,
        color
    )
    .addTo(map)
    .bindPopup(`
        <div class="popup">

            <h3>${title}</h3>

            <p>
                ${description}
            </p>

            <p>
                📍 ${lat.toFixed(6)}, ${lng.toFixed(6)}
            </p>

        </div>
    `);
}


// ============================================================
// HELPER FOR AIRPORTS
// ============================================================

function addAirport(
    lat,
    lng,
    name,
    code,
    runways
) {

    L.marker(
        [lat, lng],
        {
            icon: createAirportIcon()
        }
    )
    .addTo(map)
    .bindPopup(`
        <div class="popup">

            <h3>✈️ ${name}</h3>

            <p>
                <strong>${code}</strong>
            </p>

            <p>
                Runway:
                <strong>${runways}</strong>
            </p>

        </div>
    `);
}


// ============================================================
// LDDU - DUBROVNIK
// ============================================================


// SPOT 1

addSpot(
    42.57024915946364,
    18.245391561326596,
    "1",
    "#39d353",
    "🟢 LDDU Spot 1",
    `
        Aircraft can be seen
        <strong>seconds before touchdown.</strong>
        <br><br>
        📸 Excellent for close-up landing photographs.
    `
);


// SPOT 2

addSpot(
    42.56441239157695,
    18.253351872913807,
    "2",
    "#3399ff",
    "🔵 LDDU Spot 2",
    `
        Very good spotting position.
        <br><br>
        ✈️ You can see aircraft
        <strong>all the time.</strong>
        <br><br>
        📸 Great all-around spotting location.
    `
);


// SPOT 3

addSpot(
    42.5573083097695,
    18.27213111634963,
    "3",
    "#ff9d00",
    "🟠 LDDU Spot 3",
    `
        Very good view of aircraft
        on the taxiway and the entire
        General Aviation apron.
        <br><br>
        ✈️ Aircraft vacating via
        <strong>taxiway E</strong>
        can be photographed very well.
        <br><br>
        📸 Excellent for taxiing
        and vacating shots.
    `
);


// SPOT 4

addSpot(
    42.5544013524664,
    18.282621230913833,
    "4",
    "#ff4444",
    "🔴 LDDU Spot 4 - HNK Konavljanin",
    `
        ⚽ HNK Konavljanin.
        <br><br>
        ✈️ Very good when
        <strong>RWY 29</strong>
        is in use.
    `
);


// SPOT 5

addSpot(
    42.588411734070775,
    18.246839539179884,
    "5",
    "#c04cff",
    "🟣 LDDU Spot 5 - Hill",
    `
        Located on the hill overlooking
        Dubrovnik Airport.
        <br><br>
        ✈️ Aircraft are further away,
        but you can see the
        <strong>whole airport.</strong>
        <br><br>
        🌆 You can also see
        <strong>Dubrovnik Old Town.</strong>
    `
);


// AIRPORT

addAirport(
    42.5624,
    18.2660,
    "Dubrovnik Airport",
    "LDDU / DBV",
    "11/29"
);


// RUNWAY

L.polyline(
    [
        [42.569572, 18.247528],
        [42.555820, 18.282192]
    ],
    {
        color: "#ff3333",
        weight: 5,
        opacity: 0.8
    }
)
.addTo(map)
.bindPopup(`
    <div class="popup">
        <h3>🛫 LDDU RWY 11/29</h3>
        <p>Dubrovnik Airport</p>
    </div>
`);


// ============================================================
// LDSP - SPLIT
// ============================================================


// SPOT 1

addSpot(
    43.546278,
    16.312611,
    "1",
    "#39d353",
    "🟢 LDSP Spot 1",
    `
        <strong>RWY 23 Arrival</strong>
        <br><br>
        Excellent position for aircraft
        arriving on RWY 23.
    `
);


// SPOT 2

addSpot(
    43.546639,
    16.309306,
    "2",
    "#3399ff",
    "🔵 LDSP Spot 2",
    `
        <strong>RWY 23 End</strong>
        <br><br>
        Very good for aircraft movements
        around the end of RWY 23.
    `
);


// SPOT 3

addSpot(
    43.545583,
    16.307361,
    "3",
    "#ff9d00",
    "🟠 LDSP Spot 3",
    `
        <strong>RWY 23 Short Final / Touchdown</strong>
        <br><br>
        Excellent for touchdowns
        and aircraft on short final.
    `
);


// SPOT 4

addSpot(
    43.534528,
    16.288333,
    "4",
    "#ff4444",
    "🔴 LDSP Spot 4",
    `
        <strong>RWY 05 Turning Area</strong>
        <br><br>
        Excellent position for aircraft
        turning at RWY 05.
    `
);


// SPOT 5

addSpot(
    43.535056,
    16.292611,
    "5",
    "#c04cff",
    "🟣 LDSP Spot 5",
    `
        <strong>RWY 05 Line-up & Approach</strong>
        <br><br>
        Good for line-ups, approaches
        and backtracking on RWY 05.
    `
);


// SPOT 6

addSpot(
    43.535639,
    16.294722,
    "6",
    "#00bcd4",
    "🔷 LDSP Spot 6",
    `
        <strong>Observation Deck</strong>
        <br><br>
        Official observation area
        inside the terminal.
    `
);


// SPOT 7

addSpot(
    43.536139,
    16.297583,
    "7",
    "#9c27b0",
    "🟣 LDSP Spot 7",
    `
        <strong>Terminal / Observation Position</strong>
        <br><br>
        Position from the terminal area
        with views of airport movements.
    `
);


// SPOT 8

addSpot(
    43.533722,
    16.274944,
    "8",
    "#ff69b4",
    "🩷 LDSP Spot 8 - Mountain",
    `
        Elevated position west of the airport.
        <br><br>
        🛬 Good for RWY 05 arrivals
        and backtracking.
        <br><br>
        🛫 Also good for RWY 23 departures.
    `
);


// AIRPORT

addAirport(
    43.5389,
    16.2980,
    "Split Airport",
    "LDSP / SPU",
    "05/23"
);


// RUNWAY

L.polyline(
    [
        [43.531944, 16.285583],
        [43.545181, 16.309194]
    ],
    {
        color: "#ff3333",
        weight: 5,
        opacity: 0.8
    }
)
.addTo(map)
.bindPopup(`
    <div class="popup">
        <h3>🛫 LDSP RWY 05/23</h3>
        <p>Split Airport</p>
    </div>
`);


// ============================================================
// LDZD - ZADAR
// ============================================================
// Coordinates below are derived from the SpotterGuide map,
// road descriptions and runway thresholds.
// ============================================================


// SPOT 1

addSpot(
    44.1134,
    15.3669,
    "1",
    "#39d353",
    "🟢 LDZD Spot 1 - Fence Front",
    `
        <strong>13/31 movements</strong>
        <br><br>
        Best for RWY 31 arrivals and line-ups.
        Also useful for RWY 13 arrivals
        using the last exit.
        <br><br>
        📸 Good all-around Zadar position.
    `
);


// SPOT 2

addSpot(
    44.1085,
    15.3658,
    "2",
    "#3399ff",
    "🔵 LDZD Spot 2 - Terminal Fence",
    `
        <strong>Apron</strong>
        <br><br>
        Good view of parked aircraft
        and apron movements.
    `
);


// SPOT 3

addSpot(
    44.0877,
    15.3690,
    "3",
    "#ff9d00",
    "🟠 LDZD Spot 3 - 22 Threshold",
    `
        <strong>RWY 04/22 movements</strong>
        <br><br>
        Good for line-ups onto RWY 22
        and aircraft vacating after RWY 04 arrivals.
    `
);


// SPOT 4

addSpot(
    44.0697,
    15.3698,
    "4",
    "#ff4444",
    "🔴 LDZD Spot 4 - Gate P7",
    `
        <strong>RWY 04 movements</strong>
        <br><br>
        Good for RWY 04 arrivals
        and line-ups.
    `
);


// SPOT 5

addSpot(
    44.0608,
    15.3575,
    "5",
    "#c04cff",
    "🟣 LDZD Spot 5 - 04 Head",
    `
        <strong>RWY 04 movements</strong>
        <br><br>
        Good for RWY 04 arrivals
        and line-ups.
        <br><br>
        Excellent afternoon/sunset position.
    `
);


// SPOT 6

addSpot(
    44.0500,
    15.3508,
    "6",
    "#00bcd4",
    "🔷 LDZD Spot 6 - Highway Turnoff",
    `
        <strong>RWY 04 arrivals</strong>
        <br><br>
        Best for aircraft on the
        RWY 04 arrival path.
    `
);


// AIRPORT

addAirport(
    44.0967,
    15.3534,
    "Zadar Airport",
    "LDZD / ZAD",
    "04/22 + 13/31"
);


// RUNWAY 13/31

L.polyline(
    [
        [44.1163, 15.3357],
        [44.1003, 15.3573]
    ],
    {
        color: "#ff3333",
        weight: 5,
        opacity: 0.8
    }
)
.addTo(map)
.bindPopup(`
    <div class="popup">
        <h3>🛫 LDZD RWY 13/31</h3>
        <p>Zadar Airport</p>
    </div>
`);


// RUNWAY 04/22

L.polyline(
    [
        [44.0793, 15.3412],
        [44.0938, 15.3577]
    ],
    {
        color: "#ff3333",
        weight: 5,
        opacity: 0.8
    }
)
.addTo(map)
.bindPopup(`
    <div class="popup">
        <h3>🛫 LDZD RWY 04/22</h3>
        <p>Zadar Airport</p>
    </div>
`);


// ============================================================
// LDRI - RIJEKA
// ============================================================


// SPOT 1

addSpot(
    45.2165,
    14.5705,
    "1",
    "#39d353",
    "🟢 LDRI Spot 1 - Terminal Car Park",
    `
        <strong>Terminal / Apron</strong>
        <br><br>
        The car park outside the terminal
        provides views of aircraft movements.
    `
);


// SPOT 2

addSpot(
    45.2200,
    14.5550,
    "2",
    "#3399ff",
    "🔵 LDRI Spot 2 - Far Side",
    `
        <strong>Far side of the runway</strong>
        <br><br>
        Accessible from the road toward
        Omišalj and useful for runway movements.
    `
);


// AIRPORT

addAirport(
    45.2188,
    14.5703,
    "Rijeka Airport",
    "LDRI / RJK",
    "14/32"
);


// RUNWAY

L.polyline(
    [
        [45.2257, 14.5615],
        [45.2077, 14.5802]
    ],
    {
        color: "#ff3333",
        weight: 5,
        opacity: 0.8
    }
)
.addTo(map)
.bindPopup(`
    <div class="popup">
        <h3>🛫 LDRI RWY 14/32</h3>
        <p>Rijeka Airport</p>
    </div>
`);


// ============================================================
// LDPL - PULA
// ============================================================


// SPOT 1

addSpot(
    44.8920,
    13.9188,
    "1",
    "#39d353",
    "🟢 LDPL Spot 1 - Rental Parking",
    `
        <strong>09/27 movements + apron</strong>
        <br><br>
        Elevated position at the rental
        car parking beside the terminal.
    `
);


// SPOT 2

addSpot(
    44.8930,
    13.9218,
    "2",
    "#3399ff",
    "🔵 LDPL Spot 2 - Observation Deck",
    `
        <strong>09/27 movements + apron</strong>
        <br><br>
        Airside observation terrace
        inside the terminal.
    `
);


// SPOT 3

addSpot(
    44.8931,
    13.9222,
    "3",
    "#ff9d00",
    "🟠 LDPL Spot 3 - Terminal Seating",
    `
        <strong>09/27 movements + apron</strong>
        <br><br>
        Clean terminal windows with
        views of aircraft movements.
    `
);


// SPOT 4

addSpot(
    44.8920,
    13.9000,
    "4",
    "#ff4444",
    "🔴 LDPL Spot 4 - Kaznionica",
    `
        <strong>09 arrivals + 27 departures</strong>
        <br><br>
        Also useful for backtracks
        and taxiing aircraft.
    `
);


// SPOT 5

addSpot(
    44.8790,
    13.9020,
    "5",
    "#c04cff",
    "🟣 LDPL Spot 5 - Corn Field",
    `
        <strong>09 arrivals + 27 departures</strong>
        <br><br>
        Position near the southern edge
        of the corn field.
    `
);


// SPOT 6

addSpot(
    44.9040,
    13.9480,
    "6",
    "#00bcd4",
    "🔷 LDPL Spot 6 - Forest",
    `
        <strong>09 departures + 27 arrivals</strong>
        <br><br>
        Meadow/forest position east of
        the airport.
    `
);


// AIRPORT

addAirport(
    44.8935,
    13.9222,
    "Pula Airport",
    "LDPL / PUY",
    "09/27"
);


// RUNWAY

L.polyline(
    [
        [44.8932, 13.9035],
        [44.8940, 13.9408]
    ],
    {
        color: "#ff3333",
        weight: 5,
        opacity: 0.8
    }
)
.addTo(map)
.bindPopup(`
    <div class="popup">
        <h3>🛫 LDPL RWY 09/27</h3>
        <p>Pula Airport</p>
    </div>
`);


// ============================================================
// LDZA - ZAGREB
// ============================================================


// SPOT 1

addSpot(
    45.7471,
    16.0642,
    "1",
    "#39d353",
    "🟢 LDZA Spot 1 - South / Runway Area",
    `
        <strong>Excellent runway position</strong>
        <br><br>
        One of the known Zagreb spotting
        areas alongside the runway.
    `
);


// SPOT 2

addSpot(
    45.7536,
    16.0871,
    "2",
    "#3399ff",
    "🔵 LDZA Spot 2 - North",
    `
        <strong>Northern spotting area</strong>
        <br><br>
        Good for aircraft movements
        around the northern side of the airport.
    `
);


// SPOT 3

addSpot(
    45.7260,
    16.0464,
    "3",
    "#ff9d00",
    "🟠 LDZA Spot 3 - South Zone",
    `
        <strong>Southern spotting area</strong>
        <br><br>
        Useful for aircraft and
        military movements.
    `
);


// AIRPORT

addAirport(
    45.7420,
    16.0680,
    "Zagreb Franjo Tuđman Airport",
    "LDZA / ZAG",
    "05/23"
);


// RUNWAY

L.polyline(
    [
        [45.7318, 16.0520],
        [45.7518, 16.0825]
    ],
    {
        color: "#ff3333",
        weight: 5,
        opacity: 0.8
    }
)
.addTo(map)
.bindPopup(`
    <div class="popup">
        <h3>🛫 LDZA RWY 05/23</h3>
        <p>Zagreb Airport</p>
    </div>
`);


// ============================================================
// LDOS - OSIJEK
// ============================================================


// SPOT 1

addSpot(
    45.4628,
    18.8102,
    "1",
    "#39d353",
    "🟢 LDOS Spot 1 - Terminal Area",
    `
        <strong>Apron + runway</strong>
        <br><br>
        Good views of aircraft parked
        in front of the terminal and
        runway movements.
    `
);


// SPOT 2

addSpot(
    45.4470,
    18.7950,
    "2",
    "#3399ff",
    "🔵 LDOS Spot 2 - RWY 11 Approach",
    `
        <strong>RWY 11 approach</strong>
        <br><br>
        Southern-side position for
        aircraft on final to RWY 11.
    `
);


// SPOT 3

addSpot(
    45.4775,
    18.8250,
    "3",
    "#ff9d00",
    "🟠 LDOS Spot 3 - RWY 29 Approach",
    `
        <strong>RWY 29 approach</strong>
        <br><br>
        Good for RWY 29 arrivals
        and touchdown photography.
    `
);


// AIRPORT

addAirport(
    45.4627,
    18.8102,
    "Osijek Airport",
    "LDOS / OSI",
    "11/29"
);


// RUNWAY

L.polyline(
    [
        [45.4560, 18.7960],
        [45.4690, 18.8240]
    ],
    {
        color: "#ff3333",
        weight: 5,
        opacity: 0.8
    }
)
.addTo(map)
.bindPopup(`
    <div class="popup">
        <h3>🛫 LDOS RWY 11/29</h3>
        <p>Osijek Airport</p>
    </div>
`);


// ============================================================
// LEGEND
// ============================================================

const legend = L.control({
    position: "bottomright"
});

legend.onAdd = function () {

    const div = L.DomUtil.create(
        "div",
        "map-legend"
    );

    div.innerHTML = `

        <h4>🇭🇷 Croatia Planespotting</h4>

        <strong>LDDU - Dubrovnik</strong>
        <div>🟢 Spot 1</div>
        <div>🔵 Spot 2</div>
        <div>🟠 Spot 3</div>
        <div>🔴 Spot 4</div>
        <div>🟣 Spot 5</div>

        <br>

        <strong>LDSP - Split</strong>
        <div>🟢 Spot 1</div>
        <div>🔵 Spot 2</div>
        <div>🟠 Spot 3</div>
        <div>🔴 Spot 4</div>
        <div>🟣 Spot 5</div>
        <div>🔷 Spot 6</div>
        <div>🟣 Spot 7</div>
        <div>🩷 Spot 8</div>

        <br>

        <strong>LDZD - Zadar</strong>
        <div>🟢 Spot 1</div>
        <div>🔵 Spot 2</div>
        <div>🟠 Spot 3</div>
        <div>🔴 Spot 4</div>
        <div>🟣 Spot 5</div>
        <div>🔷 Spot 6</div>

        <br>

        <strong>LDRI - Rijeka</strong>
        <div>🟢 Spot 1</div>
        <div>🔵 Spot 2</div>

        <br>

        <strong>LDPL - Pula</strong>
        <div>🟢 Spot 1</div>
        <div>🔵 Spot 2</div>
        <div>🟠 Spot 3</div>
        <div>🔴 Spot 4</div>
        <div>🟣 Spot 5</div>
        <div>🔷 Spot 6</div>

        <br>

        <strong>LDZA - Zagreb</strong>
        <div>🟢 Spot 1</div>
        <div>🔵 Spot 2</div>
        <div>🟠 Spot 3</div>

        <br>

        <strong>LDOS - Osijek</strong>
        <div>🟢 Spot 1</div>
        <div>🔵 Spot 2</div>
        <div>🟠 Spot 3</div>

        <br>

        <div style="color:#ff3333">
            ━ Runway
        </div>

    `;

    return div;
};

legend.addTo(map);


// ============================================================
// MAP SIZE FIX
// ============================================================

setTimeout(function () {
    map.invalidateSize();
}, 500);
