/* ============================================================
   CROATIA PLANESPOTTING
   Spotting map
   Airports:
   LDDU - Dubrovnik
   LDSP - Split
   LDZD - Zadar
   LDRI - Rijeka
   LDPL - Pula
   LDZA - Zagreb
   LDOS - Osijek
   ============================================================ */


// ============================================================
// MAP
// ============================================================

const map = L.map("map").setView([44.8, 16.0], 7);


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
// SPOTTING ICON
// ============================================================

function createSpotIcon(number, color) {

    return L.divIcon({

        className: "spot-marker",

        html: `
            <div style="
                width: 38px;
                height: 38px;
                background: ${color};
                border: 3px solid white;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                font-size: 16px;
                font-weight: bold;
                box-shadow: 0 3px 10px rgba(0,0,0,.55);
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

        className: "airport-marker",

        html: `
            <div style="
                width: 42px;
                height: 42px;
                background: #1473e6;
                border: 3px solid white;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 20px;
                box-shadow: 0 3px 12px rgba(0,0,0,.6);
            ">
                ✈
            </div>
        `,

        iconSize: [42, 42],
        iconAnchor: [21, 21],
        popupAnchor: [0, -22]
    });
}


// ============================================================
// ADD SPOTTING POSITION
// ============================================================

function addSpot(
    lat,
    lng,
    number,
    title,
    description
) {

    const color =
        spotColors[(number - 1) % spotColors.length];

    L.marker(
        [lat, lng],
        {
            icon: createSpotIcon(number, color)
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
            color: "#ff3333",
            weight: 5,
            opacity: 0.8
        }
    )
    .addTo(map)
    .bindPopup(`
        <div class="popup">

            <h3>🛫 ${name}</h3>

            <p>
                ${airport}
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
    1,
    "🟢 LDDU Spot 1",
    `
    Aircraft can be seen seconds before touchdown.
    <br><br>
    Excellent for close-up landing photographs.
    `
);


// SPOT 2

addSpot(
    42.56441239157695,
    18.253351872913807,
    2,
    "🔵 LDDU Spot 2",
    `
    Very good spotting position.
    <br><br>
    You can see aircraft throughout the day.
    <br><br>
    Great all-around spotting location.
    `
);


// SPOT 3

addSpot(
    42.5573083097695,
    18.27213111634963,
    3,
    "🟠 LDDU Spot 3",
    `
    Very good view of aircraft on the taxiway
    and the entire General Aviation apron.
    <br><br>
    Aircraft vacating via taxiway E can be
    photographed very well.
    <br><br>
    Excellent for taxiing and vacating shots.
    `
);


// SPOT 4

addSpot(
    42.5544013524664,
    18.282621230913833,
    4,
    "🔴 LDDU Spot 4",
    `
    HNK Konavljanin.
    <br><br>
    Very good when RWY 29 is in use.
    `
);


// SPOT 5

addSpot(
    42.588411734070775,
    18.246839539179884,
    5,
    "🟣 LDDU Spot 5",
    `
    Hill position overlooking Dubrovnik Airport.
    <br><br>
    Aircraft are further away, but you can see
    the whole airport.
    <br><br>
    Dubrovnik Old Town can also be seen.
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

addRunway(
    [
        [42.569572, 18.247528],
        [42.555820, 18.282192]
    ],
    "LDDU RWY 11/29",
    "Dubrovnik Airport"
);


// ============================================================
// LDSP - SPLIT
// ============================================================


// SPOT 1

addSpot(
    43.546278,
    16.312611,
    1,
    "🟢 LDSP Spot 1",
    `
    RWY 23 arrival position.
    <br><br>
    Excellent for aircraft arriving on RWY 23.
    `
);


// SPOT 2

addSpot(
    43.546639,
    16.309306,
    2,
    "🔵 LDSP Spot 2",
    `
    RWY 23 end.
    <br><br>
    Very good for aircraft movements
    around the end of RWY 23.
    `
);


// SPOT 3

addSpot(
    43.545583,
    16.307361,
    3,
    "🟠 LDSP Spot 3",
    `
    RWY 23 short final / touchdown.
    <br><br>
    Excellent for touchdowns and
    aircraft on short final.
    `
);


// SPOT 4

addSpot(
    43.534528,
    16.288333,
    4,
    "🔴 LDSP Spot 4",
    `
    RWY 05 turning area.
    <br><br>
    Excellent position for aircraft
    turning at RWY 05.
    `
);


// SPOT 5

addSpot(
    43.535056,
    16.292611,
    5,
    "🟣 LDSP Spot 5",
    `
    RWY 05 line-up and approach.
    <br><br>
    Good for line-ups, approaches
    and backtracking.
    `
);


// SPOT 6

addSpot(
    43.535639,
    16.294722,
    6,
    "🔷 LDSP Spot 6",
    `
    Observation deck.
    <br><br>
    Official observation area inside
    the terminal.
    `
);


// SPOT 7

addSpot(
    43.536139,
    16.297583,
    7,
    "🟣 LDSP Spot 7",
    `
    Terminal / observation position.
    <br><br>
    Views of airport movements
    from the terminal area.
    `
);


// SPOT 8

addSpot(
    43.533722,
    16.274944,
    8,
    "🩷 LDSP Spot 8",
    `
    Elevated position west of the airport.
    <br><br>
    Good for RWY 05 arrivals and
    backtracking.
    <br><br>
    Also good for RWY 23 departures.
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

addRunway(
    [
        [43.531944, 16.285583],
        [43.545181, 16.309194]
    ],
    "LDSP RWY 05/23",
    "Split Airport"
);


// ============================================================
// LDZD - ZADAR
// ============================================================


// SPOT 1

addSpot(
    44.1134,
    15.3669,
    1,
    "🟢 LDZD Spot 1 - Fence Front",
    `
    Good position for runway 13/31 movements.
    <br><br>
    Particularly useful for RWY 31 arrivals
    and RWY 13 movements.
    `
);


// SPOT 2

addSpot(
    44.1085,
    15.3658,
    2,
    "🔵 LDZD Spot 2 - Terminal Fence",
    `
    View of the terminal and apron.
    <br><br>
    Good for parked aircraft and
    apron movements.
    `
);


// SPOT 3

addSpot(
    44.0877,
    15.3690,
    3,
    "🟠 LDZD Spot 3 - 22 Threshold",
    `
    RWY 22 threshold area.
    <br><br>
    Good for RWY 22 line-ups and
    aircraft vacating after RWY 04 arrivals.
    `
);


// SPOT 4

addSpot(
    44.0697,
    15.3698,
    4,
    "🔴 LDZD Spot 4 - Gate P7",
    `
    Good for RWY 04 arrivals
    and line-ups.
    `
);


// SPOT 5

addSpot(
    44.0608,
    15.3575,
    5,
    "🟣 LDZD Spot 5 - 04 Head",
    `
    RWY 04 head position.
    <br><br>
    Good for RWY 04 arrivals and line-ups.
    `
);


// SPOT 6

addSpot(
    44.0500,
    15.3508,
    6,
    "🔷 LDZD Spot 6 - Highway Turnoff",
    `
    Good position for RWY 04 arrivals.
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

addRunway(
    [
        [44.1163, 15.3357],
        [44.1003, 15.3573]
    ],
    "LDZD RWY 13/31",
    "Zadar Airport"
);


// RUNWAY 04/22

addRunway(
    [
        [44.0793, 15.3412],
        [44.0938, 15.3577]
    ],
    "LDZD RWY 04/22",
    "Zadar Airport"
);


// ============================================================
// LDRI - RIJEKA
// ============================================================


// SPOT 1

addSpot(
    45.2173,
    14.5721,
    1,
    "🟢 LDRI Spot 1 - Terminal & Rental Car Apron View",
    `
    Best for capturing regional traffic and
    airliners parked on the ramp or taxiing
    toward the runway.
    `
);


// SPOT 2

addSpot(
    45.2265,
    14.5595,
    2,
    "🔵 LDRI Spot 2 - RWY 14 Touchdown",
    `
    Perimeter fence north position.
    <br><br>
    Good for low-altitude landing shots
    when aircraft approach from the
    Kvarner Gulf over Omišalj.
    `
);


// SPOT 3

addSpot(
    45.2058,
    14.5815,
    3,
    "🟠 LDRI Spot 3 - RWY 32 Touchdown",
    `
    Good for capturing arrivals flying
    low over Krk Island from the southeast.
    `
);


// SPOT 4

addSpot(
    45.2155,
    14.5685,
    4,
    "🔴 LDRI Spot 4 - General Aviation Apron",
    `
    Unobstructed views of private jets
    and small leisure aircraft near the
    old terminal layout.
    `
);


// AIRPORT

addAirport(
    45.2173,
    14.5721,
    "Rijeka Airport",
    "LDRI / RJK",
    "14/32"
);


// RUNWAY

addRunway(
    [
        [45.2257, 14.5614],
        [45.2076, 14.5802]
    ],
    "LDRI RWY 14/32",
    "Rijeka Airport"
);


// ============================================================
// LDPL - PULA
// ============================================================


// SPOT 1

addSpot(
    44.8920,
    13.9372,
    1,
    "🟢 LDPL Spot 1 - RWY 27 Approach",
    `
    East perimeter fence.
    <br><br>
    Extremely close-up, low-altitude
    arrival shots.
    `
);


// SPOT 2

addSpot(
    44.8913,
    13.9015,
    2,
    "🔵 LDPL Spot 2 - RWY 09 Approach",
    `
    West perimeter fence / Stancija Peličeti.
    <br><br>
    Good for arriving aircraft flying
    in from the west.
    `
);


// SPOT 3

addSpot(
    44.8943,
    13.9212,
    3,
    "🟠 LDPL Spot 3 - Main Terminal Apron",
    `
    Public parking area.
    <br><br>
    Good view of commercial aircraft
    on the main ramp.
    `
);


// SPOT 4

addSpot(
    44.8955,
    13.9110,
    4,
    "🔴 LDPL Spot 4 - GA & Military Apron",
    `
    Northern side of the airport.
    <br><br>
    Good for private traffic, charters
    and occasional Croatian Air Force
    operations.
    `
);


// AIRPORT

addAirport(
    44.8943,
    13.9212,
    "Pula Airport",
    "LDPL / PUY",
    "09/27"
);


// RUNWAY

addRunway(
    [
        [44.8914, 13.9048],
        [44.8919, 13.9392]
    ],
    "LDPL RWY 09/27",
    "Pula Airport"
);


// ============================================================
// LDZA - ZAGREB
// ============================================================


// SPOT 1

addSpot(
    45.7483,
    16.0504,
    1,
    "🟢 LDZA Spot 1 - RWY 22 Approach",
    `
    North / Mičevec fence.
    <br><br>
    Popular position for low-altitude
    landing shots when aircraft arrive
    from the northeast.
    `
);


// SPOT 2

addSpot(
    45.7231,
    16.0754,
    2,
    "🔵 LDZA Spot 2 - RWY 04 Approach",
    `
    Southwest / Pleso village fields.
    <br><br>
    Good for arrivals from the southwest.
    `
);


// SPOT 3

addSpot(
    45.7410,
    16.0612,
    3,
    "🟠 LDZA Spot 3 - Old Terminal & Cargo Apron",
    `
    North side.
    <br><br>
    Good for cargo flights, general aviation
    and maintenance traffic.
    `
);


// SPOT 4

addSpot(
    45.7335,
    16.0601,
    4,
    "🔴 LDZA Spot 4 - New Terminal Parking Garage",
    `
    Upper deck.
    <br><br>
    High-angle views of aircraft at the
    modern jet bridges and taxiing aircraft.
    `
);


// AIRPORT

addAirport(
    45.7420,
    16.0680,
    "Zagreb Franjo Tuđman Airport",
    "LDZA / ZAG",
    "04/22"
);


// RUNWAY

addRunway(
    [
        [45.7275, 16.0538],
        [45.7455, 16.0792]
    ],
    "LDZA RWY 04/22",
    "Zagreb Franjo Tuđman Airport"
);


// ============================================================
// LDZA PHOTOGRAPHY NOTICE
// ============================================================

const zagrebNotice = L.control({
    position: "topright"
});

zagrebNotice.onAdd = function () {

    const div = L.DomUtil.create(
        "div",
        "map-legend"
    );

    div.innerHTML = `
        <div style="
            max-width: 320px;
            font-size: 13px;
            line-height: 1.5;
        ">

            <strong>⚠️ LDZA Photography Rules</strong>

            <br><br>

            Private photography with your own device
            is permitted in public areas of Zagreb Airport.

            <br><br>

            <strong>
                Photography is strictly prohibited
                in operational/restricted areas
            </strong>,
            including runways, taxiways and aircraft stands.

            <br><br>

            Commercial photography requires
            prior airport approval and is subject
            to special conditions and fees.

            <br><br>

            <a
                href="https://www.zagreb-airport.hr/en/business/b2b/permission-to-film-photograph/132"
                target="_blank"
                rel="noopener noreferrer"
                style="color:#5da9ff;"
            >
                Official Zagreb Airport photography rules
            </a>

        </div>
    `;

    return div;
};

zagrebNotice.addTo(map);


// ============================================================
// LDOS - OSIJEK
// ============================================================


// SPOT 1

addSpot(
    45.4668,
    18.8021,
    1,
    "🟢 LDOS Spot 1 - RWY 11 Approach",
    `
    West perimeter fence / Road 5114.
    <br><br>
    Good for low-altitude arrival shots
    when aircraft approach from the west.
    `
);


// SPOT 2

addSpot(
    45.4578,
    18.8315,
    2,
    "🔵 LDOS Spot 2 - RWY 29 Approach",
    `
    East perimeter fence / Klisa side.
    <br><br>
    Good for aircraft arriving
    from the southeast.
    `
);


// SPOT 3

addSpot(
    45.4628,
    18.8105,
    3,
    "🟠 LDOS Spot 3 - Terminal Apron View",
    `
    Public parking area.
    <br><br>
    Good for scheduled commercial traffic
    and regional turboprops on the main ramp.
    `
);


// AIRPORT

addAirport(
    45.4628,
    18.8105,
    "Osijek Airport",
    "LDOS / OSI",
    "11/29"
);


// RUNWAY

addRunway(
    [
        [45.4651, 18.8078],
        [45.4594, 18.8258]
    ],
    "LDOS RWY 11/29",
    "Osijek Airport"
);


// ============================================================
// MAP LEGEND
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
        <div class="legend-item">🟣 Spot 7</div>
        <div class="legend-item">🩷 Spot 8</div>


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


        <div class="legend-airport">
            LDZA — Zagreb
        </div>

        <div class="legend-item">🟢 Spot 1</div>
        <div class="legend-item">🔵 Spot 2</div>
        <div class="legend-item">🟠 Spot 3</div>
        <div class="legend-item">🔴 Spot 4</div>


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
// FIX MAP SIZE
// ============================================================

setTimeout(function () {

    map.invalidateSize();

}, 500);
