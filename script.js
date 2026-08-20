```javascript
/* ============================================================
   CROATIA PLANESPOTTING
   Complete spotting map
   ============================================================ */


/* ============================================================
   CREATE MAP
   ============================================================ */

const map = L.map("map").setView([44.8, 16.0], 7);


/* ============================================================
   MAP TILES
   ============================================================ */

L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
        attribution: "&copy; OpenStreetMap contributors",
        maxZoom: 19
    }
).addTo(map);


/* ============================================================
   SPOT COLORS
   ============================================================ */

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


/* ============================================================
   SPOT ICON
   ============================================================ */

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


/* ============================================================
   AIRPORT ICON
   ============================================================ */

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
                color:white;
                font-size:20px;
                box-shadow:0 3px 12px rgba(0,0,0,.6);
            ">
                ✈
            </div>
        `,

        iconSize: [42, 42],
        iconAnchor: [21, 21],
        popupAnchor: [0, -22]
    });
}


/* ============================================================
   ADD SPOT
   ============================================================ */

function addSpot(
    lat,
    lng,
    number,
    title,
    description
) {

    L.marker(
        [lat, lng],
        {
            icon: createSpotIcon(number)
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


/* ============================================================
   ADD AIRPORT
   ============================================================ */

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


/* ============================================================
   ADD RUNWAY
   ============================================================ */

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


/* ============================================================
   LDDU - DUBROVNIK
   ============================================================ */


/* Spot 1 */

addSpot(
    42.57024915946364,
    18.245391561326596,
    1,
    "LDDU Spot 1 - RWY 11 Approach",
    `
    Aircraft can be seen seconds before touchdown.
    <br><br>
    Excellent position for close-up landing photographs.
    `
);


/* Spot 2 */

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


/* Spot 3 */

addSpot(
    42.5573083097695,
    18.27213111634963,
    3,
    "LDDU Spot 3 - Taxiway / General Aviation Apron",
    `
    Very good view of aircraft on the taxiway
    and the General Aviation apron.
    <br><br>
    Excellent for taxiing and vacating shots.
    `
);


/* Spot 4 */

addSpot(
    42.5544013524664,
    18.282621230913833,
    4,
    "LDDU Spot 4 - HNK Konavljanin",
    `
    Very good when RWY 29 is in use.
    `
);


/* Spot 5 */

addSpot(
    42.588411734070775,
    18.246839539179884,
    5,
    "LDDU Spot 5 - Hill Position",
    `
    Hill position overlooking Dubrovnik Airport.
    <br><br>
    Wide view of the airport and Dubrovnik area.
    `
);


/* Airport */

addAirport(
    42.5624,
    18.2660,
    "Dubrovnik Airport",
    "LDDU / DBV",
    "11/29"
);


/* Runway */

addRunway(
    [
        [42.569572, 18.247528],
        [42.555820, 18.282192]
    ],
    "LDDU RWY 11/29",
    "Dubrovnik Airport"
);


/* ============================================================
   LDSP - SPLIT
   ============================================================ */


/* Spot 1 */

addSpot(
    43.546278,
    16.312611,
    1,
    "LDSP Spot 1 - RWY 23 Arrival",
    `
    Excellent for aircraft arriving on RWY 23.
    `
);


/* Spot 2 */

addSpot(
    43.546639,
    16.309306,
    2,
    "LDSP Spot 2 - RWY 23 End",
    `
    Very good for aircraft movements around
    the end of RWY 23.
    `
);


/* Spot 3 */

addSpot(
    43.545583,
    16.307361,
    3,
    "LDSP Spot 3 - RWY 23 Touchdown",
    `
    Excellent position for touchdown photographs.
    `
);


/* Spot 4 */

addSpot(
    43.534528,
    16.288333,
    4,
    "LDSP Spot 4 - RWY 05",
    `
    Useful for RWY 05 movements.
    `
);


/* Spot 5 */

addSpot(
    43.535056,
    16.292611,
    5,
    "LDSP Spot 5 - RWY 05 Line-up",
    `
    Good view of aircraft lining up for RWY 05.
    `
);


/* Spot 6 */

addSpot(
    43.535639,
    16.294722,
    6,
    "LDSP Spot 6 - Observation Position",
    `
    Observation position with views toward
    the airport movement area.
    `
);


/* Spot 7 */

addSpot(
    43.536139,
    16.297583,
    7,
    "LDSP Spot 7 - Terminal",
    `
    Terminal-side observation position.
    `
);


/* Spot 8 */

addSpot(
    43.533722,
    16.274944,
    8,
    "LDSP Spot 8 - Elevated Position",
    `
    Elevated position west of the airport.
    <br><br>
    Good for RWY 05 arrivals and RWY 23 departures.
    `
);


/* Airport */

addAirport(
    43.5389,
    16.2980,
    "Split Airport",
    "LDSP / SPU",
    "05/23"
);


/* Runway */

addRunway(
    [
        [43.531944, 16.285583],
        [43.545181, 16.309194]
    ],
    "LDSP RWY 05/23",
    "Split Airport"
);


/* ============================================================
   LDZD - ZADAR
   ============================================================ */


/* Spot 1 */

addSpot(
    44.1134,
    15.3669,
    1,
    "LDZD Spot 1 - Fence Front",
    `
    Good position for RWY 31 arrivals and
    aircraft lining up for departure.
    `
);


/* Spot 2 */

addSpot(
    44.1085,
    15.3658,
    2,
    "LDZD Spot 2 - Terminal Fence",
    `
    Apron position useful for parked aircraft
    and apron movements.
    `
);


/* Spot 3 */

addSpot(
    44.0877,
    15.3690,
    3,
    "LDZD Spot 3 - RWY 22 Area",
    `
    Useful for movements around the RWY 22 end.
    `
);


/* Spot 4 */

addSpot(
    44.0697,
    15.3698,
    4,
    "LDZD Spot 4 - RWY 04 Area",
    `
    Useful for RWY 04 arrivals and departures.
    `
);


/* Spot 5 */

addSpot(
    44.0608,
    15.3575,
    5,
    "LDZD Spot 5 - RWY 04 Head",
    `
    Position near the RWY 04 end.
    `
);


/* Spot 6 */

addSpot(
    44.0500,
    15.3508,
    6,
    "LDZD Spot 6 - Southern Position",
    `
    Useful for aircraft approaching the southern
    end of the airport.
    `
);


/* Airport */

addAirport(
    44.0967,
    15.3534,
    "Zadar Airport",
    "LDZD / ZAD",
    "04/22 + 13/31"
);


/* Runway 13/31 */

addRunway(
    [
        [44.1163, 15.3357],
        [44.1003, 15.3573]
    ],
    "LDZD RWY 13/31",
    "Zadar Airport"
);


/* Runway 04/22 */

addRunway(
    [
        [44.0793, 15.3412],
        [44.0938, 15.3577]
    ],
    "LDZD RWY 04/22",
    "Zadar Airport"
);


/* ============================================================
   LDRI - RIJEKA
   ============================================================ */


/* Spot 1 */

addSpot(
    45.2173,
    14.5721,
    1,
    "LDRI Spot 1 - Terminal & Rental Car Apron View",
    `
    Good for regional traffic and airliners parked
    on the ramp or taxiing toward the runway.
    `
);


/* Spot 2 */

addSpot(
    45.2265,
    14.5595,
    2,
    "LDRI Spot 2 - RWY 14 Touchdown",
    `
    North perimeter position for low-altitude
    RWY 14 landing shots.
    `
);


/* Spot 3 */

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


/* Spot 4 */

addSpot(
    45.2155,
    14.5685,
    4,
    "LDRI Spot 4 - General Aviation Apron",
    `
    Good view of private jets and small aircraft.
    `
);


/* Airport */

addAirport(
    45.2173,
    14.5721,
    "Rijeka Airport",
    "LDRI / RJK",
    "14/32"
);


/* Runway */

addRunway(
    [
        [45.2257, 14.5614],
        [45.2076, 14.5802]
    ],
    "LDRI RWY 14/32",
    "Rijeka Airport"
);


/* ============================================================
   LDPL - PULA
   ============================================================ */


/*
   These are the LDPL coordinates supplied by you.
*/


/* Spot 1 */

addSpot(
    44.89304463331475,
    13.898132213396597,
    1,
    "LDPL Spot 1",
    `
    Spotting position on the western side
    of Pula Airport.
    <br><br>
    Useful for aircraft approaching and departing
    from the western side of the runway.
    `
);


/* Spot 2 */

addSpot(
    44.88770260819165,
    13.898164921331809,
    2,
    "LDPL Spot 2",
    `
    Southern-western spotting position.
    <br><br>
    Useful for approach and departure photography.
    `
);


/* Spot 3 */

addSpot(
    44.89067421705795,
    13.949351446173514,
    3,
    "LDPL Spot 3",
    `
    Eastern-side spotting position.
    <br><br>
    Useful for aircraft approaching and departing
    from the eastern side.
    `
);


/* Spot 4 */

addSpot(
    44.898544048604855,
    13.92339056553631,
    4,
    "LDPL Spot 4 - Terminal",
    `
    Terminal spotting position.
    <br><br>
    Good views of aircraft on the apron
    and terminal area.
    `
);


/* Airport */

addAirport(
    44.8943,
    13.9212,
    "Pula Airport",
    "LDPL / PUY",
    "09/27"
);


/* Runway */

addRunway(
    [
        [44.8914, 13.9048],
        [44.8919, 13.9392]
    ],
    "LDPL RWY 09/27",
    "Pula Airport"
);


/* ============================================================
   LDZA - ZAGREB
   ============================================================ */


/*
   LDZA coordinates supplied by you in DMS
   and converted to decimal degrees.
*/


/* Spot 1 */

addSpot(
    45.72516667,
    16.04186111,
    1,
    "LDZA Spot 1",
    `
    Spotting position southwest of Zagreb Airport.
    <br><br>
    Useful for aircraft movements around the
    southwestern side of the airport.
    `
);


/* Spot 2 */

addSpot(
    45.75602778,
    16.08783333,
    2,
    "LDZA Spot 2",
    `
    Northern spotting position.
    <br><br>
    Useful for aircraft approaching and departing
    from the northern side of the airport.
    `
);


/* Spot 3 */

addSpot(
    45.75455556,
    16.08430556,
    3,
    "LDZA Spot 3",
    `
    Northern spotting position close to the
    approach area.
    `
);


/* Spot 4 */

addSpot(
    45.73741667,
    16.05630556,
    4,
    "LDZA Spot 4",
    `
    Southern airport spotting position.
    <br><br>
    Useful for aircraft movements near
    the terminal and runway area.
    `
);


/* Spot 5 */

addSpot(
    45.75011111,
    16.07561111,
    5,
    "LDZA Spot 5",
    `
    Northern/eastern spotting position.
    <br><br>
    Useful for aircraft movements around
    the runway and approach area.
    `
);


/* Airport */

addAirport(
    45.74058,
    16.06522,
    "Zagreb Franjo Tuđman Airport",
    "LDZA / ZAG",
    "04/22"
);


/* Runway */

addRunway(
    [
        [45.7275, 16.0538],
        [45.7455, 16.0792]
    ],
    "LDZA RWY 04/22",
    "Zagreb Franjo Tuđman Airport"
);


/* ============================================================
   LDZA PHOTOGRAPHY NOTICE
   ============================================================ */

const zagrebNotice = L.control({
    position: "topright"
});


zagrebNotice.onAdd = function() {

    const div = L.DomUtil.create(
        "div",
        "map-legend"
    );

    div.innerHTML = `

        <strong>⚠️ LDZA Photography</strong>

        <br><br>

        Stay in public areas and do not enter
        restricted airport operational areas.

        <br><br>

        Do not enter runways, taxiways or
        aircraft stands.

        <br><br>

        Follow airport staff instructions and
        current airport rules.

    `;

    return div;
};


zagrebNotice.addTo(map);


/* ============================================================
   LDOS - OSIJEK
   ============================================================ */


/* Spot 1 */

addSpot(
    45.4628,
    18.8105,
    1,
    "LDOS Spot 1 - Terminal Area",
    `
    Public terminal area with views of the
    apron and runway.
    `
);


/* Spot 2 */

addSpot(
    45.4668,
    18.8021,
    2,
    "LDOS Spot 2 - RWY 11 Approach",
    `
    Western approach position.
    <br><br>
    Useful for low-altitude RWY 11 arrivals.
    `
);


/* Spot 3 */

addSpot(
    45.4578,
    18.8315,
    3,
    "LDOS Spot 3 - RWY 29 Approach",
    `
    Eastern approach position.
    <br><br>
    Useful for RWY 29 arrivals and
    touchdown photographs.
    `
);


/* Airport */

addAirport(
    45.462667,
    18.810156,
    "Osijek Airport",
    "LDOS / OSI",
    "11/29"
);


/* Runway */

addRunway(
    [
        [45.4651, 18.8078],
        [45.4594, 18.8258]
    ],
    "LDOS RWY 11/29",
    "Osijek Airport"
);


/* ============================================================
   MAP LEGEND
   ============================================================ */

const legend = L.control({
    position: "bottomright"
});


legend.onAdd = function() {

    const div = L.DomUtil.create(
        "div",
        "map-legend"
    );

    div.innerHTML = `

        <div class="legend-title">
            🇭🇷 Croatia Planespotting
        </div>

        <div class="legend-item">
            🟢 Spot
        </div>

        <div class="legend-item">
            🔵 Spot
        </div>

        <div class="legend-item">
            🟠 Spot
        </div>

        <div class="legend-item">
            🔴 Spot
        </div>

        <div class="legend-item">
            🟣 Spot
        </div>

        <div class="legend-item">
            🔷 Spot
        </div>

        <div class="legend-item">
            🩷 Spot
        </div>

        <div class="legend-item">
            🟡 Spot
        </div>

        <div class="legend-runway">
            ━ Runway
        </div>

    `;

    return div;
};


legend.addTo(map);


/* ============================================================
   MAP SIZE FIX
   ============================================================ */

setTimeout(() => {

    map.invalidateSize();

}, 500);


/* ============================================================
   ADDITIONAL MAP SIZE FIX
   ============================================================ */

window.addEventListener("load", () => {

    setTimeout(() => {

        map.invalidateSize();

    }, 300);

});
```
