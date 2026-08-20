/* ============================================================
   CROATIA PLANESPOTTING
   Complete spotting map
   ============================================================ */

const map = L.map("map").setView([44.8, 16.0], 7);


// ============================================================
// MAP TILES
// ============================================================

L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
        attribution: "&copy; OpenStreetMap contributors",
        maxZoom: 19
    }
).addTo(map);


// ============================================================
// COLORS
// ============================================================

const spotColors = [
    "#39d98a",
    "#3d8bfd",
    "#ff9f43",
    "#ff4757",
    "#9b59ff",
    "#20c7e8",
    "#ff69b4",
    "#f1c40f"
];


// ============================================================
// SPOT ICON
// ============================================================

function createSpotIcon(number) {

    const color =
        spotColors[(number - 1) % spotColors.length];

    return L.divIcon({

        className: "",

        html: `
            <div style="
                width:38px;
                height:38px;
                background:${color};
                border:3px solid white;
                border-radius:50%;
                display:flex;
                align-items:center;
                justify-content:center;
                color:white;
                font-size:16px;
                font-weight:bold;
                box-shadow:0 3px 10px rgba(0,0,0,.55);
            ">
                ${number}
            </div>
        `,

        iconSize: [38, 38],
        iconAnchor: [19, 19],
        popupAnchor: [0, -20]
    });
}


// ============================================================
// AIRPORT ICON
// ============================================================

function createAirportIcon() {

    return L.divIcon({

        className: "",

        html: `
            <div style="
                width:42px;
                height:42px;
                background:#1473e6;
                border:3px solid white;
                border-radius:50%;
                display:flex;
                align-items:center;
                justify-content:center;
                font-size:20px;
                box-shadow:0 3px 12px rgba(0,0,0,.6);
            ">
                ✈
            </div>
        `,

        iconSize: [42,42],
        iconAnchor: [21,21],
        popupAnchor: [0,-22]
    });
}


// ============================================================
// ADD SPOT
// ============================================================

function addSpot(
    lat,
    lng,
    number,
    title,
    description
) {

    L.marker(
        [lat,lng],
        {
            icon:createSpotIcon(number)
        }
    )
    .addTo(map)
    .bindPopup(`
        <div class="popup">

            <h3>${title}</h3>

            <p>
                ${description}
            </p>

            <p>
                <strong>📍 Coordinates</strong><br>
                ${lat.toFixed(6)}, ${lng.toFixed(6)}
            </p>

        </div>
    `);
}


// ============================================================
// ADD AIRPORT
// ============================================================

function addAirport(
    lat,
    lng,
    name,
    icao,
    runway
) {

    L.marker(
        [lat,lng],
        {
            icon:createAirportIcon()
        }
    )
    .addTo(map)
    .bindPopup(`
        <div class="popup">

            <h3>✈️ ${name}</h3>

            <p>
                <strong>${icao}</strong>
            </p>

            <p>
                Runway:
                <strong>${runway}</strong>
            </p>

        </div>
    `);
}


// ============================================================
// ADD RUNWAY
// ============================================================

function addRunway(
    points,
    name,
    airport
) {

    L.polyline(
        points,
        {
            color:"#ff3333",
            weight:5,
            opacity:0.8
        }
    )
    .addTo(map)
    .bindPopup(`
        <div class="popup">
            <h3>🛫 ${name}</h3>
            <p>${airport}</p>
        </div>
    `);
}


// ============================================================
// LDDU - DUBROVNIK
// ============================================================

// Spot 1

addSpot(
    42.57024915946364,
    18.245391561326596,
    1,
    "LDDU Spot 1",
    `
    Aircraft can be seen seconds before touchdown.
    <br><br>
    Excellent for close-up landing photographs.
    `
);


// Spot 2

addSpot(
    42.56441239157695,
    18.253351872913807,
    2,
    "LDDU Spot 2",
    `
    Very good all-around spotting position.
    <br><br>
    Aircraft can be seen throughout the day.
    `
);


// Spot 3

addSpot(
    42.5573083097695,
    18.27213111634963,
    3,
    "LDDU Spot 3",
    `
    Very good view of aircraft on the taxiway
    and the General Aviation apron.
    <br><br>
    Excellent for taxiing and vacating shots.
    `
);


// Spot 4

addSpot(
    42.5544013524664,
    18.282621230913833,
    4,
    "LDDU Spot 4",
    `
    HNK Konavljanin.
    <br><br>
    Very good when RWY 29 is in use.
    `
);


// Spot 5

addSpot(
    42.588411734070775,
    18.246839539179884,
    5,
    "LDDU Spot 5",
    `
    Hill position overlooking Dubrovnik Airport.
    <br><br>
    Wide view of the airport and Dubrovnik area.
    `
);


// Airport

addAirport(
    42.5624,
    18.2660,
    "Dubrovnik Airport",
    "LDDU / DBV",
    "11/29"
);


// Runway

addRunway(
    [
        [42.569572,18.247528],
        [42.555820,18.282192]
    ],
    "LDDU RWY 11/29",
    "Dubrovnik Airport"
);


// ============================================================
// LDSP - SPLIT
// ============================================================

// Spot 1

addSpot(
    43.546278,
    16.312611,
    1,
    "LDSP Spot 1",
    `
    RWY 23 arrival position.
    <br><br>
    Excellent for aircraft arriving on RWY 23.
    `
);


// Spot 2

addSpot(
    43.546639,
    16.309306,
    2,
    "LDSP Spot 2",
    `
    RWY 23 end.
    <br><br>
    Very good for aircraft movements around
    the end of RWY 23.
    `
);


// Spot 3

addSpot(
    43.545583,
    16.307361,
    3,
    "LDSP Spot 3",
    `
    RWY 23 short final / touchdown.
    <br><br>
    Excellent for touchdowns.
    `
);


// Spot 4

addSpot(
    43.534528,
    16.288333,
    4,
    "LDSP Spot 4",
    `
    RWY 05 turning area.
    `
);


// Spot 5

addSpot(
    43.535056,
    16.292611,
    5,
    "LDSP Spot 5",
    `
    RWY 05 line-up and approach.
    `
);


// Spot 6

addSpot(
    43.535639,
    16.294722,
    6,
    "LDSP Spot 6",
    `
    Observation deck.
    `
);


// Spot 7

addSpot(
    43.536139,
    16.297583,
    7,
    "LDSP Spot 7",
    `
    Terminal / observation position.
    `
);


// Spot 8

addSpot(
    43.533722,
    16.274944,
    8,
    "LDSP Spot 8",
    `
    Elevated position west of the airport.
    <br><br>
    Good for RWY 05 arrivals and RWY 23 departures.
    `
);


// Airport

addAirport(
    43.5389,
    16.2980,
    "Split Airport",
    "LDSP / SPU",
    "05/23"
);


// Runway

addRunway(
    [
        [43.531944,16.285583],
        [43.545181,16.309194]
    ],
    "LDSP RWY 05/23",
    "Split Airport"
);


// ============================================================
// LDZD - ZADAR
// ============================================================
//
// Positions follow the current SpotterGuide guide.
// Coordinates are map-position estimates because the
// SpotterGuide text does not expose the Google-map GPS pins.
// ============================================================


// Spot 1

addSpot(
    44.1134,
    15.3669,
    1,
    "LDZD Spot 1 - Fence Front",
    `
    13/31 movements.
    <br><br>
    Best for 31 arrivals and line-ups.
    Also useful for 13 arrivals using the last exit.
    `
);


// Spot 2

addSpot(
    44.1085,
    15.3658,
    2,
    "LDZD Spot 2 - Terminal Fence",
    `
    Apron position.
    <br><br>
    Good for parked aircraft and apron movements.
    `
);


// Spot 3

addSpot(
    44.0877,
    15.3690,
    3,
    "LDZD Spot 3 - 22 Threshold",
    `
    RWY 04/22 movements.
    <br><br>
    Good for line-ups onto RWY 22 and aircraft
    vacating after RWY 04 arrivals.
    `
);


// Spot 4

addSpot(
    44.0697,
    15.3698,
    4,
    "LDZD Spot 4 - Gate P7",
    `
    RWY 04 movements.
    <br><br>
    Good for RWY 04 arrivals and line-ups.
    `
);


// Spot 5

addSpot(
    44.0608,
    15.3575,
    5,
    "LDZD Spot 5 - 04 Head",
    `
    RWY 04 movements.
    <br><br>
    Good for RWY 04 arrivals and line-ups.
    `
);


// Spot 6

addSpot(
    44.0500,
    15.3508,
    6,
    "LDZD Spot 6 - Highway Turnoff",
    `
    RWY 04 arrivals only.
    `
);


// Airport

addAirport(
    44.0967,
    15.3534,
    "Zadar Airport",
    "LDZD / ZAD",
    "04/22 + 13/31"
);


// Runway 13/31

addRunway(
    [
        [44.1163,15.3357],
        [44.1003,15.3573]
    ],
    "LDZD RWY 13/31",
    "Zadar Airport"
);


// Runway 04/22

addRunway(
    [
        [44.0793,15.3412],
        [44.0938,15.3577]
    ],
    "LDZD RWY 04/22",
    "Zadar Airport"
);


// ============================================================
// LDRI - RIJEKA
// ============================================================

// Spot 1

addSpot(
    45.2173,
    14.5721,
    1,
    "LDRI Spot 1 - Terminal & Rental Car Apron View",
    `
    Regional traffic and airliners parked on the ramp
    or taxiing toward the runway.
    `
);


// Spot 2

addSpot(
    45.2265,
    14.5595,
    2,
    "LDRI Spot 2 - RWY 14 Touchdown",
    `
    North perimeter fence.
    <br><br>
    Low-altitude landing shots for RWY 14 arrivals.
    `
);


// Spot 3

addSpot(
    45.2058,
    14.5815,
    3,
    "LDRI Spot 3 - RWY 32 Touchdown",
    `
    South touchdown area.
    <br><br>
    Good for arrivals from the southeast.
    `
);


// Spot 4

addSpot(
    45.2155,
    14.5685,
    4,
    "LDRI Spot 4 - General Aviation Apron",
    `
    Good for private jets and small aircraft.
    `
);


// Airport

addAirport(
    45.2173,
    14.5721,
    "Rijeka Airport",
    "LDRI / RJK",
    "14/32"
);


// Runway

addRunway(
    [
        [45.2257,14.5614],
        [45.2076,14.5802]
    ],
    "LDRI RWY 14/32",
    "Rijeka Airport"
);


// ============================================================
// LDPL - PULA
// ============================================================
//
// Six SpotterGuide positions.
// Terminal positions are approximate map markers because
// the guide's text does not expose GPS pin coordinates.
// ============================================================


// Spot 1

addSpot(
    44.8943,
    13.9212,
    1,
    "LDPL Spot 1 - Rental Parking",
    `
    Landside rental-car parking.
    <br><br>
    Elevated fence position with views
    of runway, taxiway and apron.
    `
);


// Spot 2

addSpot(
    44.8940,
    13.9218,
    2,
    "LDPL Spot 2 - Observation Deck",
    `
    Airside observation terrace.
    <br><br>
    Views of runway, taxiway and apron.
    `
);


// Spot 3

addSpot(
    44.8938,
    13.9220,
    3,
    "LDPL Spot 3 - Terminal Seating",
    `
    Airside terminal windows.
    <br><br>
    Views of runway, taxiway and apron.
    `
);


// Spot 4

addSpot(
    44.8913,
    13.9015,
    4,
    "LDPL Spot 4 - Kaznionica",
    `
    RWY 09 arrivals and RWY 27 departures.
    <br><br>
    Also useful for backtracks.
    `
);


// Spot 5

addSpot(
    44.8848,
    13.9005,
    5,
    "LDPL Spot 5 - Corn Field",
    `
    RWY 09 arrivals and RWY 27 departures.
    `
);


// Spot 6

addSpot(
    44.9055,
    13.9520,
    6,
    "LDPL Spot 6 - Forest",
    `
    RWY 09 departures and RWY 27 arrivals.
    <br><br>
    Reached by the rough road through Valtursko polje.
    `
);


// Airport

addAirport(
    44.8943,
    13.9212,
    "Pula Airport",
    "LDPL / PUY",
    "09/27"
);


// Runway

addRunway(
    [
        [44.8914,13.9048],
        [44.8919,13.9392]
    ],
    "LDPL RWY 09/27",
    "Pula Airport"
);


// ============================================================
// LDZA - ZAGREB
// ============================================================

// Main verified spotting position

addSpot(
    45.747111,
    16.064222,
    1,
    "LDZA Spot 1 - Runway / Taxiway View",
    `
    Public roadside spotting position beside the runway.
    <br><br>
    Excellent view of the taxiway, apron and runway.
    `
);


// Additional approach position

addSpot(
    45.7550,
    16.0910,
    2,
    "LDZA Spot 2 - RWY 23 Approach",
    `
    Northern approach area.
    <br><br>
    Tracks alongside the approach lights provide
    views of aircraft approaching RWY 23.
    `
);


// Terminal

addSpot(
    45.7410,
    16.0612,
    3,
    "LDZA Spot 3 - Terminal / Cargo Area",
    `
    Views toward the terminal, apron and
    cargo/maintenance traffic.
    `
);


// Airport

addAirport(
    45.74058,
    16.06522,
    "Zagreb Franjo Tuđman Airport",
    "LDZA / ZAG",
    "04/22"
);


// Runway

addRunway(
    [
        [45.7275,16.0538],
        [45.7455,16.0792]
    ],
    "LDZA RWY 04/22",
    "Zagreb Franjo Tuđman Airport"
);


// Photography notice

const zagrebNotice = L.control({
    position:"topright"
});

zagrebNotice.onAdd = function() {

    const div =
        L.DomUtil.create(
            "div",
            "map-legend"
        );

    div.innerHTML = `

        <strong>⚠️ LDZA Photography</strong>

        <br><br>

        Photography in public areas is different
        from photography inside restricted
        operational areas.

        <br><br>

        <strong>
        Do not enter restricted airport areas,
        runways, taxiways or aircraft stands.
        </strong>

        <br><br>

        Commercial photography may require
        prior airport approval.

        <br><br>

        Always follow airport staff instructions
        and current airport rules.

    `;

    return div;
};

zagrebNotice.addTo(map);


// ============================================================
// LDOS - OSIJEK
// ============================================================

// Spot 1

addSpot(
    45.4628,
    18.8105,
    1,
    "LDOS Spot 1 - Terminal Area",
    `
    Terminal area.
    <br><br>
    Good views of the apron and runway.
    `
);


// Spot 2

addSpot(
    45.4668,
    18.8021,
    2,
    "LDOS Spot 2 - RWY 11 Approach",
    `
    South-side approach position.
    <br><br>
    Good for RWY 11 arrivals.
    `
);


// Spot 3

addSpot(
    45.4578,
    18.8315,
    3,
    "LDOS Spot 3 - RWY 29 Approach",
    `
    South-side approach position.
    <br><br>
    Good for RWY 29 arrivals and touchdown shots.
    `
);


// Airport

addAirport(
    45.462667,
    18.810156,
    "Osijek Airport",
    "LDOS / OSI",
    "11/29"
);


// Runway

addRunway(
    [
        [45.4651,18.8078],
        [45.4594,18.8258]
    ],
    "LDOS RWY 11/29",
    "Osijek Airport"
);


// ============================================================
// LEGEND
// ============================================================

const legend = L.control({
    position:"bottomright"
});

legend.onAdd = function() {

    const div =
        L.DomUtil.create(
            "div",
            "map-legend"
        );

    div.innerHTML = `

        <div class="legend-title">
            🇭🇷 Croatia Planespotting
        </div>

        <div class="legend-airport">
            LDDU — Dubrovnik
        </div>

        <div class="legend-item">🟢 Spot 1</div>
        <div class="legend-item">🔵 Spot 2</div>
        <div class="legend-item">🟠 Spot 3</div>
        <div class="legend-item">🔴 Spot 4</div>
        <div class="legend-item">🟣 Spot 5</div>


        <div class="legend-airport">
            LDSP — Split
        </div>

        <div class="legend-item">🟢 Spot 1</div>
        <div class="legend-item">🔵 Spot 2</div>
        <div class="legend-item">🟠 Spot 3</div>
        <div class="legend-item">🔴 Spot 4</div>
        <div class="legend-item">🟣 Spot 5</div>
        <div class="legend-item">🔷 Spot 6</div>
        <div class="legend-item">🩷 Spot 7</div>
        <div class="legend-item">🟡 Spot 8</div>


        <div class="legend-airport">
            LDZD — Zadar
        </div>

        <div class="legend-item">🟢 Spot 1</div>
        <div class="legend-item">🔵 Spot 2</div>
        <div class="legend-item">🟠 Spot 3</div>
        <div class="legend-item">🔴 Spot 4</div>
        <div class="legend-item">🟣 Spot 5</div>
        <div class="legend-item">🔷 Spot 6</div>


        <div class="legend-airport">
            LDRI — Rijeka
        </div>

        <div class="legend-item">🟢 Spot 1</div>
        <div class="legend-item">🔵 Spot 2</div>
        <div class="legend-item">🟠 Spot 3</div>
        <div class="legend-item">🔴 Spot 4</div>


        <div class="legend-airport">
            LDPL — Pula
        </div>

        <div class="legend-item">🟢 Spot 1</div>
        <div class="legend-item">🔵 Spot 2</div>
        <div class="legend-item">🟠 Spot 3</div>
        <div class="legend-item">🔴 Spot 4</div>
        <div class="legend-item">🟣 Spot 5</div>
        <div class="legend-item">🔷 Spot 6</div>


        <div class="legend-airport">
            LDZA — Zagreb
        </div>

        <div class="legend-item">🟢 Spot 1</div>
        <div class="legend-item">🔵 Spot 2</div>
        <div class="legend-item">🟠 Spot 3</div>


        <div class="legend-airport">
            LDOS — Osijek
        </div>

        <div class="legend-item">🟢 Spot 1</div>
        <div class="legend-item">🔵 Spot 2</div>
        <div class="legend-item">🟠 Spot 3</div>


        <div class="legend-runway">
            ━ Runway
        </div>

    `;

    return div;
};

legend.addTo(map);


// ============================================================
// MAP FIX
// ============================================================

setTimeout(() => {

    map.invalidateSize();

}, 500);
