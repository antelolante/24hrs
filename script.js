```javascript
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

addAirport(
    42.5624,
    18.2660,
    "Dubrovnik Airport",
    "LDDU / DBV",
    "11/29"
);

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

addSpot(
    43.534528,
    16.288333,
    4,
    "LDSP Spot 4",
    `
    RWY 05 turning area.
    `
);

addSpot(
    43.535056,
    16.292611,
    5,
    "LDSP Spot 5",
    `
    RWY 05 line-up and approach.
    `
);

addSpot(
    43.535639,
    16.294722,
    6,
    "LDSP Spot 6",
    `
    Observation deck.
    `
);

addSpot(
    43.536139,
    16.297583,
    7,
    "LDSP Spot 7",
    `
    Terminal / observation position.
    `
);

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

addAirport(
    43.5389,
    16.2980,
    "Split Airport",
    "LDSP / SPU",
    "05/23"
);

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

addSpot(
    44.0500,
    15.3508,
    6,
    "LDZD Spot 6 - Highway Turnoff",
    `
    RWY 04 arrivals only.
    `
);

addAirport(
    44.0967,
    15.3534,
    "Zadar Airport",
    "LDZD / ZAD",
    "04/22 + 13/31"
);

addRunway(
    [
        [44.1163,15.3357],
        [44.1003,15.3573]
    ],
    "LDZD RWY 13/31",
    "Zadar Airport"
);

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

addSpot(
    45.2155,
    14.5685,
    4,
    "LDRI Spot 4 - General Aviation Apron",
    `
    Good for private jets and small aircraft.
    `
);

addAirport(
    45.2173,
    14.5721,
    "Rijeka Airport",
    "LDRI / RJK",
    "14/32"
);

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

addSpot(
    44.89304463331475,
    13.898132213396597,
    1,
    "LDPL Spot 1",
    `
    Western spotting position.
    <br><br>
    Good position for runway movements and
    arriving/departing aircraft.
    `
);

addSpot(
    44.88770260819165,
    13.898164921331809,
    2,
    "LDPL Spot 2",
    `
    Southwest spotting position.
    <br><br>
    Useful for aircraft approaching and departing
    RWY 09/27.
    `
);

addSpot(
    44.89067421705795,
    13.949351446173514,
    3,
    "LDPL Spot 3",
    `
    Eastern spotting position.
    <br><br>
    Good for aircraft approaching and departing
    RWY 09/27.
    `
);

addSpot(
    44.898544048604855,
    13.92339056553631,
    4,
    "LDPL Spot 4 - Terminal",
    `
    Terminal spotting position.
    <br><br>
    Good view toward the apron and aircraft
    operating around the terminal.
    `
);

addAirport(
    44.8943,
    13.9212,
    "Pula Airport",
    "LDPL / PUY",
    "09/27"
);

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
//
// THESE ARE THE USER-PROVIDED SPOTTERGUIDE COORDINATES
// CONVERTED FROM DMS TO DECIMAL DEGREES.
//
// 1: 45°43'30.6"N 16°02'30.7"E
// 2: 45°45'21.7"N 16°05'16.2"E
// 3: 45°45'16.4"N 16°05'03.5"E
// 4: 45°44'14.7"N 16°03'22.7"E
// 5: 45°45'00.4"N 16°04'32.2"E
//


// Spot 1

addSpot(
    45.7251667,
    16.0418611,
    1,
    "LDZA Spot 1",
    `
    SpotterGuide position 1.
    <br><br>
    Good position for observing aircraft around
    Zagreb Airport and the runway.
    `
);


// Spot 2

addSpot(
    45.7560278,
    16.0878333,
    2,
    "LDZA Spot 2",
    `
    SpotterGuide position 2.
    <br><br>
    Useful for aircraft approaching or departing
    Zagreb Airport.
    `
);


// Spot 3

addSpot(
    45.7545556,
    16.0843056,
    3,
    "LDZA Spot 3",
    `
    SpotterGuide position 3.
    <br><br>
    Good view of aircraft movements around
    the airport.
    `
);


// Spot 4

addSpot(
    45.7374167,
    16.0563056,
    4,
    "LDZA Spot 4",
    `
    SpotterGuide position 4.
    <br><br>
    Useful for aircraft movements near
    the southern side of the airport.
    `
);


// Spot 5

addSpot(
    45.7501111,
    16.0756111,
    5,
    "LDZA Spot 5",
    `
    SpotterGuide position 5.
    <br><br>
    Good position for observing aircraft
    operating around Zagreb Airport.
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


// ============================================================
// LDOS - OSIJEK
// ============================================================

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

addSpot(
    45.4668,
    18.8021,
    2,
    "LDOS Spot 2 - RWY 11 Approach",
    `
    RWY 11 approach position.
    <br><br>
    Good for low-altitude arrivals.
    `
);

addSpot(
    45.4578,
    18.8315,
    3,
    "LDOS Spot 3 - RWY 29 Approach",
    `
    RWY 29 approach position.
    <br><br>
    Good for arrivals and touchdown shots.
    `
);

addAirport(
    45.462667,
    18.810156,
    "Osijek Airport",
    "LDOS / OSI",
    "11/29"
);

addRunway(
    [
        [45.4651,18.8078],
        [45.4594,18.8258]
    ],
    "LDOS RWY 11/29",
    "Osijek Airport"
);


// ============================================================
// MAP FIX
// ============================================================

setTimeout(() => {

    map.invalidateSize();

}, 500);
```
