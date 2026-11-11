// Las Vegas Thanksgiving 2026 — Confirmed Email Data & Group Research Dataset
// Extracted from danielgeri@gmail.com on Nov 11, 2026

export const TRIP_META = {
  title: "Geri Family & Friends — Vegas Thanksgiving 2026",
  subtitle: "Wednesday, Nov 25 – Monday, Nov 30, 2026 • 5 Nights / 6 Days",
  departureIso: "2026-11-25T17:20:00-08:00",
  returnIso: "2026-11-30T15:19:00-08:00",
  basecamp: {
    name: "The Cliffs at Peace Canyon",
    neighborhood: "Summerlin South / Spring Valley (West Las Vegas)",
    address: "4550 South Grand Canyon Drive, Las Vegas, NV 89147",
    phone: "+1 (702) 248-3570",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=The+Cliffs+at+Peace+Canyon+4550+South+Grand+Canyon+Drive+Las+Vegas+NV+89147"
  },
  weatherOutlook: {
    summary: "Crisp Sunny Desert Days & Chilly Evenings",
    highF: "62°F – 67°F",
    lowF: "41°F – 46°F",
    tips: "Bring warm layers/jackets for evening light shows (Enchant Christmas, Ethel M) and morning strolls at Red Rock Canyon."
  },
  sistersHome: {
    name: "Vegas Sisters' Home (The Gardens at Summerlin South)",
    address: "10768 Wallflower Ave, Las Vegas, NV 89135",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=10768+Wallflower+Ave+Las+Vegas+NV+89135"
  },
  groupSummary: "Peak Group: 9 Total on Thu (7 Adults + 2 Toddlers, ages 2 & ~3) • Anchored near 10768 Wallflower Ave (Summerlin 89135)",
  travelers: [
    {
      name: "Daniel Geri, Maria Cavicchi, Kayden (2yo) + Pomeranian 🐾",
      role: "Bay Area Core Family (3 + Dog)",
      email: "danielgeri@gmail.com • mcav6487@gmail.com",
      tags: ["Wed 11/25 – Mon 11/30", "SFO ⇄ LAS (+ In-Cabin Pet)", "⚠️ Check Main Resort Pet Rule!"]
    },
    {
      name: "Mom",
      role: "24-Hour Holiday Flyer (1)",
      email: "Thu Arrival → Fri Departure",
      tags: ["Flies in Thu 11/26", "Flies out Fri 11/27", "Priority Grandma Window!"]
    },
    {
      name: "Brother (James Geri)",
      role: "Driving In (1)",
      email: "jamesgeri1@gmail.com",
      tags: ["Drives in Thu 11/26", "Departure TBD", "Has Own Car • Flexible Room"]
    },
    {
      name: "Vegas Sister #1",
      role: "Summerlin Host (1)",
      email: "10768 Wallflower Ave, Las Vegas, NV 89135",
      tags: ["The Gardens (Summerlin 89135)", "Has Local Car", "All Weekend"]
    },
    {
      name: "Vegas Sister #2, Partner & Toddler (Almost 3yo)",
      role: "Summerlin Host Family (3)",
      email: "10768 Wallflower Ave, Las Vegas, NV 89135",
      tags: ["2 Adults + Almost-3yo Cousin", "The Gardens (Summerlin 89135)", "Playmate for Kayden!"]
    }
  ]
};

export const CONFIRMED_BOOKINGS = [
  {
    id: "flight-outbound",
    type: "flight",
    badge: "Outbound Flight",
    status: "Confirmed",
    title: "Southwest Airlines WN #2386 (SFO → LAS)",
    subtitle: "Wednesday, Nov 25, 2026 • 5:20 PM – 6:55 PM PST (1h 35m Nonstop)",
    confirmationCode: "CACD5X",
    secondaryCodeLabel: "Rapid Rewards #",
    secondaryCode: "284191176",
    bookedDate: "Tue, Nov 10, 2026 (9:43 PM CST)",
    provider: "Southwest Airlines (Basic Fare)",
    location: "San Francisco Int'l (SFO) → Harry Reid Int'l (LAS)",
    priceSummary: "43,500 Rapid Rewards pts (14,500 × 3) + $16.80 ($5.60 × 3 on Visa *7855)",
    passengers: [
      { name: "Daniel Geri", ticket: "5262418858456", seat: "Assigned at check-in" },
      { name: "Maria Cavicchi", ticket: "5262418858455", seat: "Assigned at check-in" },
      { name: "Kayden Geri (Age 2)", ticket: "5262418858457", seat: "Own Ticketed Seat" }
    ],
    highlights: [
      "🐾 POMERANIAN FLIGHT RULE: Call Southwest NOW (1-800-435-9792) to reserve 1 of ~6 cabin pet spots on #CACD5X! Fee is $125 one-way paid at the SFO ticket counter (max carrier 18.5\"×13.5\"×9.5\" under seat).",
      "Check-in opens 24h prior: Tuesday, Nov 24, 2026 at 5:20 PM PST (must check in at counter on travel day with pet carrier).",
      "Basic Fare baggage: Includes 1 standard carry-on + 1 personal item per ticketed passenger (pet carrier counts as either carry-on or personal item)."
    ],
    icsEvent: {
      title: "✈️ Flight to Vegas — Southwest WN 2386 (Conf #CACD5X)",
      start: "20261125T172000",
      end: "20261125T185500",
      location: "San Francisco International Airport (SFO) to Las Vegas (LAS)",
      description: "Southwest Airlines WN #2386 | Confirmation #CACD5X | Passengers: Daniel Geri (5262418858456), Maria Cavicchi (5262418858455), Kayden Geri (5262418858457)."
    }
  },
  {
    id: "hotel-night1",
    type: "hotel",
    badge: "Night 1 Hotel (Nov 25–26)",
    status: "Confirmed • ✅ Dog Friendly ($50 Fee)",
    title: "Homewood Suites by Hilton Las Vegas Airport",
    subtitle: "Check-in Wed, Nov 25 (3:00 PM) → Check-out Thu, Nov 26 (11:00 AM)",
    confirmationCode: "73585813376033",
    secondaryCodeLabel: "Hotel Phone",
    secondaryCode: "+1 (702) 407-0075",
    bookedDate: "Tue, Nov 10, 2026 (10:21 PM CST)",
    provider: "Expedia.com",
    location: "230 Hidden Well Rd, Las Vegas, NV 89119",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Homewood+Suites+by+Hilton+Las+Vegas+Airport+230+Hidden+Well+Rd+Las+Vegas+NV+89119",
    priceSummary: "$86.19 Total Paid (+ $50 Pet Fee at Front Desk)",
    passengers: [
      { name: "Daniel, Maria, 2yo Kayden + Pomeranian 🐾", ticket: "Studio Suite, 1 King Bed with Sofa Bed, Kitchen", seat: "1 Night" }
    ],
    highlights: [
      "✅ DOG FRIENDLY: Welcomes up to 2 dogs (up to 100 lbs) for a $50 flat non-refundable fee (1–4 nights). Call (702) 407-0075 ahead so they assign a designated pet-friendly suite!",
      "Complimentary Airport Shuttle: Ask when calling (702) 407-0075 if crated Pomeranians are allowed on the shuttle, or take a 5-minute Uber Pet from LAS.",
      "Rate is non-refundable. Check-out is Thursday, Nov 26 at 11:00 AM."
    ],
    icsEvent: {
      title: "🏨 Check-in: Homewood Suites Las Vegas Airport (Expedia #73585813376033)",
      start: "20261125T193000",
      end: "20261126T110000",
      location: "230 Hidden Well Rd, Las Vegas, NV 89119",
      description: "Expedia Itinerary #73585813376033 | Studio Suite, 1 King Bed with Sofa Bed, Kitchen | Tel: +1 (702) 407-0075."
    }
  },
  {
    id: "hotel-main",
    type: "resort",
    badge: "Main Group Resort (Nov 26–30 • 4 Nights)",
    status: "🚨 NO PETS ALLOWED • Free Cancel until 11/26 2PM",
    title: "The Cliffs at Peace Canyon",
    subtitle: "Check-in Thu, Nov 26 (4:00 PM) → Check-out Mon, Nov 30 (10:00 AM)",
    confirmationCode: "5477904180",
    secondaryCodeLabel: "Confidential PIN",
    secondaryCode: "1964",
    isSecretPin: true,
    bookedDate: "Fri, Oct 30, 2026 (Forwarded to James Geri on Nov 10)",
    provider: "Booking.com (Managed by Berkley Las Vegas Management Team)",
    location: "4550 South Grand Canyon Drive, Las Vegas, NV 89147",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=The+Cliffs+at+Peace+Canyon+4550+South+Grand+Canyon+Drive+Las+Vegas+NV+89147",
    priceSummary: "$1,249.67 Total ($0 paid yet • Free Cancel until Nov 26 @ 2:00 PM)",
    passengers: [
      { name: "Daniel Geri (Booked for 4 Adults)", ticket: "Two-Bedroom Unit (Full Kitchen, Living Room, Washer/Dryer)", seat: "4 Nights" },
      { name: "Forwarded to James Geri (jamesgeri1@gmail.com)", ticket: "Group Basecamp in Summerlin South", seat: "Shared Comms" }
    ],
    highlights: [
      "🚨 STRICT NO-PETS POLICY: Vacation Village / The Cliffs at Peace Canyon strictly prohibits pet dogs (ADA service animals only). Either have your Pomeranian stay overnight at your Vegas sisters' house OR use your $0 free cancellation to switch to a dog-friendly 2BR suite (e.g., Homewood Suites City Center, Residence Inn Hughes Center, Element Summerlin, or a dog-friendly Summerlin Airbnb)!",
      "Free Cancellation until Thursday, Nov 26, 2026 at 2:00 PM PST ($0). After 2:00 PM on Nov 26, cancellation fee is $370.14.",
      "Payment & Deposit: Scheduled automatic charge via Booking.com ($1,249.66). A $150 refundable damage deposit + $40 resort fee due at check-in."
    ],
    icsEvent: {
      title: "🏜️ Check-in: The Cliffs at Peace Canyon (Booking.com #5477904180)",
      start: "20261126T160000",
      end: "20261130T100000",
      location: "4550 South Grand Canyon Drive, Las Vegas, NV 89147",
      description: "Booking.com Confirmation #5477904180 | PIN: 1964 | Two-Bedroom Unit (4 Nights) | Phone: +1 702-248-3570."
    }
  },
  {
    id: "flight-return",
    type: "flight",
    badge: "Return Flight",
    status: "Confirmed • Seats Assigned",
    title: "United Airlines UA 1799 (LAS → SFO)",
    subtitle: "Monday, Nov 30, 2026 • 1:31 PM – 3:19 PM PST (1h 48m Nonstop)",
    confirmationCode: "L29ERJ",
    secondaryCodeLabel: "Aircraft",
    secondaryCode: "Boeing 737-800",
    bookedDate: "Tue, Nov 10 / Wed, Nov 11, 2026",
    provider: "United Airlines — Basic Economy (Class N)",
    location: "Harry Reid Int'l (LAS) → San Francisco Int'l (SFO)",
    priceSummary: "$544.80 Total Paid ($181.60 × 3 passengers on Visa *4675)",
    passengers: [
      { name: "Daniel Geri (MP UA-*****693)", ticket: "eTicket 0162156530168", seat: "Seat 38C (Aisle)" },
      { name: "Kayden Geri", ticket: "eTicket 0162156530170", seat: "Seat 38B (Middle)" },
      { name: "Maria Cavicchi", ticket: "eTicket 0162156530169", seat: "Check United App (Family Seating)" }
    ],
    highlights: [
      "🐾 POMERANIAN BASIC ECONOMY RULE: Add your pet NOW in United 'My Trips' (#L29ERJ) before cabin pet slots sell out ($150 fee). ⚠️ On Basic Economy, your under-seat pet carrier (max 18\"×11\"×11\" soft-sided) REPLACES that passenger's 1 allowed personal item—so that adult cannot bring a separate backpack/purse through the gate!",
      "Family Seat Update (Email #1a1c8bf20f1f8222): Daniel (38C Aisle) & Kayden (38B Middle) assigned together; verify Maria's adjacent seat & confirm Row 38 under-seat pet clearance in the United app.",
      "Airport Cutoff: Pet check-in, checked bags, and boarding passes must be completed at the counter ≥45 minutes before departure (by 12:46 PM PST; arrive by 11:45 AM with a pet!)."
    ],
    icsEvent: {
      title: "✈️ Return Flight — United UA 1799 (Conf #L29ERJ)",
      start: "20261130T133100",
      end: "20261130T151900",
      location: "Harry Reid International Airport (LAS) to San Francisco (SFO)",
      description: "United Airlines UA 1799 | Confirmation #L29ERJ | Seats: Daniel 38C, Kayden 38B, Maria (check app). Basic Economy baggage rules apply."
    }
  }
];

export const DOG_FRIENDLY_2BR_ALTERNATIVES = [
  {
    id: "alt-element-summerlin",
    rank: "#1 Closest to Sister (3–4 Mins / 1.2 Mi!)",
    name: "Element by Westin Las Vegas Summerlin (Same 89135 Zip Code!)",
    address: "10555 Discovery Dr, Las Vegas, NV 89135",
    driveToWestVegas: "3–4 mins (1.2 mi) to 10768 Wallflower Ave • 5 mins to Downtown Summerlin",
    suiteLayout: "1-Bedroom Suite w/ Full Kitchen (King + Living Room Sofa Bed) + Connecting/Adjacent Studio for Brother!",
    petPolicy: "$50/night capped at $150 max per stay • Up to 2 dogs ≤40 lbs (1st-floor pet suites w/ easy outdoor grass walkout!).",
    extraFees: "$0 Resort Fee • FREE Self-Parking • FREE Daily Hot Breakfast",
    estNightlyRate: "~$170–$220/night per suite (~$340–$420 for 2 rooms)",
    whyPick: "Zero Summerlin hotels have a single-key dog-friendly 2BR, making THIS the #1 Summerlin hack: you're 3 mins from your sisters' house (closer than Cliffs at Peace Canyon!), you get a closed bedroom door + full kitchen for Kayden & your Pom, AND since you're unsure when your brother leaves, he only pays for the exact nights he stays (or crashes at your sisters' 3 mins away)!",
    url: "https://www.marriott.com/en-us/hotels/lasel-element-las-vegas-summerlin/overview/"
  },
  {
    id: "alt-home2-sunset",
    rank: "#2 Closest All-Suite Hilton (10 Mins via 215)",
    name: "Home2 Suites by Hilton Las Vegas Southwest I-215 Curve",
    address: "8470 W Sunset Rd, Las Vegas, NV 89113",
    driveToWestVegas: "10 mins (5.8 mi) to 10768 Wallflower Ave • Right across from Durango Resort!",
    suiteLayout: "1-Bedroom Kitchenette Suite + Adjoining Studio Option (Full Fridge, Dishwasher, Microwave, Sofa Bed)",
    petPolicy: "$75 flat fee (1–4 nights) • Up to 2 dogs ≤75 lbs.",
    extraFees: "$0 Resort Fee • FREE Self-Parking • FREE Daily Hot Breakfast",
    estNightlyRate: "~$155–$210/night per suite",
    whyPick: "Straight 2-exit hop down the 215 Beltway from your sisters' Town Center Dr exit, lower flat $75 pet fee, and right next to Durango Resort's Eat Your Heart Out Food Hall & Summer House.",
    url: "https://www.hilton.com/en/hotels/lasswht-home2-suites-las-vegas-southwest-i-215-curve/"
  },
  {
    id: "alt-hampton-summerlin",
    rank: "#3 9 Mins to Sister (1 Block from Cliffs)",
    name: "Hampton Inn & Suites Las Vegas-Red Rock/Summerlin",
    address: "4280 S Grand Canyon Dr, Las Vegas, NV 89147",
    driveToWestVegas: "9 mins (4.0 mi) to 10768 Wallflower Ave • Same street as Cliffs at Peace Canyon",
    suiteLayout: "King Studio Suite + Adjacent Room for Brother (Mini-fridge/microwave; note connecting doors aren't pre-guaranteed)",
    petPolicy: "$75 flat fee (1–4 nights) • Up to 2 pets ≤75 lbs.",
    extraFees: "$0 Resort Fee • FREE Self-Parking • FREE Daily Hot Breakfast",
    estNightlyRate: "~$145–$190/night per room",
    whyPick: "Literally 0.3 miles up the street from your original Cliffs at Peace Canyon booking, dog-friendly ($75 flat fee), and under 10 minutes to 10768 Wallflower Ave.",
    url: "https://www.hilton.com/en/hotels/lasrrhx-hampton-suites-las-vegas-red-rock-summerlin/"
  },
  {
    id: "alt-residence-stadium",
    rank: "#4 Closest TRUE Single-Key 2BR Suite (15 Mins)",
    name: "Residence Inn Las Vegas Stadium Area (or Staybridge Suites Next Door)",
    address: "5875 Dean Martin Dr, Las Vegas, NV 89118",
    driveToWestVegas: "15 mins (11.5 mi via 215 Beltway) to 10768 Wallflower Ave",
    suiteLayout: "TRUE Two-Bedroom / Two-Bath Apartment Suite under 1 Key (Full Kitchen + Separate Living Room)",
    petPolicy: "$100 flat fee at Residence Inn (≤75 lbs) • $75 flat fee at Staybridge next door (≤30 lbs).",
    extraFees: "$0 Resort Fee (Residence Inn) • ~$20/day parking • FREE Hot Breakfast",
    estNightlyRate: "~$250–$380/night (for 1 shared 2BR/2BA suite)",
    whyPick: "Because every casino & timeshare inside Summerlin bans pets, this I-215/I-15 hub is the closest true locked-off 2-Bedroom / 2-Bath hotel suite under a single key—straight shot west up the 215 Beltway to Wallflower Ave.",
    url: "https://www.marriott.com/en-us/hotels/lasra-residence-inn-las-vegas-stadium-area/overview/"
  },
  {
    id: "alt-homewood-city-center",
    rank: "#5 True 2BR/2BA Suite ($75 Pet Fee • 16 Mins)",
    name: "Homewood Suites by Hilton Las Vegas City Center",
    address: "4625 Dean Martin Dr, Las Vegas, NV 89103",
    driveToWestVegas: "16 mins (10.5 mi via Flamingo or I-215) to 10768 Wallflower Ave",
    suiteLayout: "TRUE Two-Bedroom / Two-Bath Suite (Full Kitchen, Living Room, Sofa Sleeper)",
    petPolicy: "$75 flat fee per stay (up to 2 pets ≤75 lbs).",
    extraFees: "$0 Resort Fee • $20/day garage parking • FREE Daily Hot Breakfast",
    estNightlyRate: "~$220–$350/night (for 1 shared 2BR/2BA suite)",
    whyPick: "Great value true 2BR/2BA Hilton suite with full stove/fridge/dishwasher and a low $75 flat pet fee.",
    url: "https://www.hilton.com/en/hotels/lasccwh-homewood-suites-las-vegas-city-center/"
  },
  {
    id: "alt-homewood-airport",
    rank: "#6 Zero-Move True 2BR/2BA (17 Mins All-Freeway)",
    name: "Homewood Suites by Hilton Las Vegas Airport (Your Night 1 Hotel!)",
    address: "230 Hidden Well Rd, Las Vegas, NV 89119",
    driveToWestVegas: "17 mins (14.5 mi straight up the 215 Beltway) to 10768 Wallflower Ave",
    suiteLayout: "TRUE Two-Bedroom / Two-Bath Suite (1 King + 2 Queens + Sofa Bed + Full Kitchen)",
    petPolicy: "$75 total for ALL 5 NIGHTS (only +$25 extra over the $50 fee you already pay Night 1!).",
    extraFees: "$0 Resort Fee • FREE Parking (2 cars) • FREE Hot Breakfast",
    estNightlyRate: "~$240–$360/night (for 1 shared 2BR/2BA suite)",
    whyPick: "Zero Thursday hotel switch, free parking for both cars, lowest incremental pet fee (+$25), and 100% freeway drive up the 215 Beltway right to your sisters' Town Center Dr exit.",
    url: "https://www.hilton.com/en/hotels/lasafhw-homewood-suites-las-vegas-airport/"
  }
];

export const EMAIL_COMMS = [
  {
    id: "1a1c8bf20f1f8222",
    date: "Nov 10, 2026 • 7:55 PM PST",
    from: "United Airlines <notifications@united.com>",
    to: "danielgeri@gmail.com",
    subject: "Your family has been assigned seats on your flight to San Francisco (SFO)",
    category: "Flight",
    summary: "Automated family-seating update for UA 1799 (Nov 30, Conf #L29ERJ): Assigned Daniel Geri to 38C (Aisle) and Kayden Geri to 38B (Middle)."
  },
  {
    id: "1a1c8bb7cb2c9168",
    date: "Nov 10, 2026 • 7:51 PM PST",
    from: "United Airlines <Receipts@united.com>",
    to: "danielgeri@gmail.com (Addressed to Maria)",
    subject: "eTicket Itinerary and Receipt for Confirmation L29ERJ",
    category: "Flight",
    summary: "Official eTicket receipt for Mon, Nov 30 UA 1799 (LAS 1:31 PM → SFO 3:19 PM). eTickets: Maria (0162156530169), Daniel (0162156530168), Kayden (0162156530170). Total: $544.80 on Visa *4675."
  },
  {
    id: "1a1c8ba9b95bfaaf",
    date: "Nov 10, 2026 • 7:50 PM PST",
    from: "United Airlines <notifications@united.com>",
    to: "danielgeri@gmail.com",
    subject: "Your United Airlines booking confirmation – L29ERJ",
    category: "Flight",
    summary: "Initial booking confirmation for UA 1799 on Nov 30, 2026 (Boeing 737-800). Details Basic Economy personal-item limits (9\"x10\"x17\") and 45-minute bag check cutoff."
  },
  {
    id: "1a1c8d89ac21ffeb",
    date: "Nov 10, 2026 • 8:23 PM PST",
    from: "Expedia.com <expedia@eg.expedia.com>",
    to: "danielgeri@gmail.com",
    subject: "Homewood Suites by Hilton Las Vegas Airport sent you a message",
    category: "Hotel",
    summary: "Welcome message from Homewood Suites Las Vegas Airport regarding the Nov 25 stay (Expedia #73585813376033) with check-in and shuttle reminders."
  },
  {
    id: "1a1c8d776839710a",
    date: "Nov 10, 2026 • 8:21 PM PST",
    from: "Expedia.com <expedia@eg.expedia.com>",
    to: "danielgeri@gmail.com",
    subject: "Expedia travel confirmation - Wed, Nov 25 - (Itinerary # 73585813376033)",
    category: "Hotel",
    summary: "Confirmed 1-night stay (Wed Nov 25 – Thu Nov 26) at Homewood Suites by Hilton Las Vegas Airport (230 Hidden Well Rd). Studio Suite (1 King + Sofa bed + Kitchen) for 2 adults, 1 infant. Total: $86.19 after $32.91 OneKeyCash."
  },
  {
    id: "1a1c8cc2a5fa981c",
    date: "Nov 10, 2026 • 8:09 PM PST",
    from: "Daniel Geri <danielgeri@gmail.com>",
    to: "James Geri <jamesgeri1@gmail.com>",
    subject: "Fwd: 🛄 Thanks! Your booking is confirmed at The Cliffs at Peace Canyon",
    category: "Group Coordination",
    summary: "Daniel forwarded the Booking.com confirmation (#5477904180) for The Cliffs at Peace Canyon (Thu Nov 26 – Mon Nov 30, 2-Bedroom Unit) to James Geri."
  },
  {
    id: "1a1c8b3c8f083582",
    date: "Nov 10, 2026 • 7:43 PM PST",
    from: "Southwest Airlines <southwestairlines@ifly.southwest.com>",
    to: "danielgeri@gmail.com",
    subject: "You're going to Las Vegas on 11/25 (CACD5X)!",
    category: "Flight",
    summary: "Confirmed outbound flight WN #2386 on Wed, Nov 25 (SFO 5:20 PM → LAS 6:55 PM) for Daniel Geri, Maria Cavicchi, and Kayden Geri. Redeemed 43,500 Rapid Rewards points + $16.80 fees."
  },
  {
    id: "1a1c8b483e5a42ed",
    date: "Nov 10, 2026 • 7:43 PM PST",
    from: "Southwest Airlines Rapid Rewards",
    to: "danielgeri@gmail.com",
    subject: "Your travel has been reserved with points (×3 receipts)",
    category: "Flight",
    summary: "Three Rapid Rewards point redemption receipts (14,500 pts each; 43,500 pts total from RR #284191176) for the Nov 25 SFO → LAS flight."
  },
  {
    id: "1a19002797819f45",
    date: "Oct 30, 2026 • 8:30 PM PST",
    from: "The Cliffs at Peace Canyon via Booking.com <noreply@booking.com>",
    to: "danielgeri@gmail.com",
    subject: "You have a message from The Cliffs at Peace Canyon",
    category: "Resort",
    summary: "Message from Berkley Las Vegas Management Team welcoming Daniel for Nov 26–30 and noting all official communication happens via Booking.com (never WhatsApp/SMS)."
  },
  {
    id: "1a18fee991ee49f3",
    date: "Oct 30, 2026 • 8:09 PM PST",
    from: "Booking.com <noreply@booking.com>",
    to: "danielgeri@gmail.com",
    subject: "🛄 Thanks! Your booking is confirmed at The Cliffs at Peace Canyon",
    category: "Resort",
    summary: "Original booking confirmation (#5477904180, PIN 1964) for 4 nights (Thu Nov 26 – Mon Nov 30) in a Two-Bedroom Unit at 4550 S Grand Canyon Dr. Free cancellation until Nov 26 at 2:00 PM PST."
  },
  {
    id: "2025-context",
    date: "Nov 25–29, 2025 (Prior Year Context)",
    from: "Southwest (AD887P) / Avis / Universe / OpenTable",
    to: "danielgeri@gmail.com",
    subject: "2025 Thanksgiving Vegas Reference: Avis Car Rental, Immersive Van Gogh & STRIPSTEAK",
    category: "Past Trip Context",
    summary: "Last Thanksgiving (Nov 25–29, 2025), the family rented an Avis car at LAS, visited Immersive Van Gogh at Crystals, and browsed STRIPSTEAK by Michael Mina (Mandalay Bay) on OpenTable."
  }
];

export const ITINERARY_DAYS = [
  {
    dayId: "day-1",
    date: "Wed, Nov 25",
    isoDate: "2026-11-25",
    title: "Arrival Night — Bay Area Trio Lands in Vegas (3 People)",
    theme: "Easy Transit & Toddler Bedtime at Homewood Suites Airport",
    items: [
      {
        id: "it-1",
        time: "5:20 PM PST",
        title: "Depart SFO on Southwest WN #2386",
        type: "confirmed",
        location: "San Francisco Int'l Airport (SFO)",
        note: "Conf #CACD5X • Daniel, Maria & 2yo Kayden (3 ticketed seats). Arrive at SFO by 3:45 PM."
      },
      {
        id: "it-2",
        time: "6:55 PM PST",
        title: "Land at Harry Reid Int'l (LAS) & Call Shuttle",
        type: "confirmed",
        location: "LAS Terminal 1",
        note: "Call Homewood Suites at (702) 407-0075 for complimentary airport shuttle transfer (or 5-min ride)."
      },
      {
        id: "it-3",
        time: "7:40 PM PST",
        title: "Check-in: Homewood Suites by Hilton Las Vegas Airport",
        type: "confirmed",
        location: "230 Hidden Well Rd, Las Vegas, NV 89119",
        note: "Expedia #73585813376033 • Studio Suite (1 King + Sofa Bed + Kitchen). Quick bite & straight to bed for Kayden."
      }
    ]
  },
  {
    dayId: "day-2",
    date: "Thu, Nov 26",
    isoDate: "2026-11-26",
    title: "Thanksgiving Day — ALL 9 Together! (Mom Flies In + Brother Drives In)",
    theme: "Peak Family Day (7 Adults + 2 Toddlers) — Protect Mom's 24-Hour Visit!",
    items: [
      {
        id: "it-4",
        time: "10:30 AM",
        title: "Check-out of Homewood Suites & Pick Up Compact/Midsize SUV",
        type: "confirmed",
        location: "230 Hidden Well Rd / LAS Rent-A-Car Center (7135 Gilespie St)",
        note: "You only need 1 standard SUV + Kayden's car seat—your Vegas sisters have local car(s)/car seat and your brother is driving his own car!"
      },
      {
        id: "it-5",
        time: "11:30 AM – 3:15 PM",
        title: "Head to Sisters' House (10768 Wallflower Ave, Summerlin) for Nap, Cousin Play & Arrivals",
        type: "suggested",
        location: "10768 Wallflower Ave, Las Vegas, NV 89135 (The Gardens at Summerlin South)",
        note: "BEST MOVE for the 11 AM–4 PM hotel gap: Kayden (2yo) gets a real midday nap & plays with his almost-3yo cousin (plus The Gardens Park tot-lot & dog lawn right around the corner!), Mom lands at LAS, and Brother drives straight in!"
      },
      {
        id: "it-6",
        time: "3:15 PM",
        title: "Quick Grocery & Toddler Breakfast Run for the 2BR Condo",
        type: "suggested",
        location: "Trader Joe's / Whole Foods (Downtown Summerlin) or Smith's (Flamingo & Grand Canyon)",
        note: "Grab milk, berries, eggs, coffee & toddler snacks for The Cliffs at Peace Canyon's full kitchen."
      },
      {
        id: "it-7",
        time: "4:00 PM",
        title: "Check-in: The Cliffs at Peace Canyon (4 Nights • 2-Bedroom Unit)",
        type: "confirmed",
        location: "4550 S Grand Canyon Dr, Las Vegas, NV 89147",
        note: "Booking.com #5477904180 (PIN: 1964) • Sleeps Daniel, Maria & Kayden + Brother (2nd BR). Bring ID + credit card ($150 refundable deposit + $40 resort fee)."
      },
      {
        id: "it-8",
        time: "4:45 PM – 5:15 PM",
        title: "Thanksgiving Feast for All 9 (7 Adults + 2 High Chairs) — Stay Off the Strip!",
        type: "suggested",
        location: "Option A: Catered at Sisters' House / 2BR Condo • Option B: Maggiano's Summerlin or Summer House Durango",
        note: "Since Mom leaves tomorrow & you have two 2–3yo toddlers, skip Strip casino traffic! Either host a catered feast (Maggiano's/Whole Foods/HoneyBaked) so toddlers roam freely, or book an early 4:45–5:15 PM table for 9 (7A + 2 high chairs) 7–10 mins away."
      }
    ]
  },
  {
    dayId: "day-3",
    date: "Fri, Nov 27",
    isoDate: "2026-11-27",
    title: "Black Friday — Grandma Send-Off Brunch, Toddlers Outdoors & Holiday Lights",
    theme: "Morning Quality Time Before Mom's Flight → 8 People (6 Adults + 2 Toddlers)",
    items: [
      {
        id: "it-9",
        time: "9:00 AM – 11:00 AM",
        title: "Grandma Farewell Breakfast & Family Photos Before Mom's Flight",
        type: "suggested",
        location: "2BR Condo / Sisters' House OR Summer House at Durango Resort (7 mins away)",
        note: "Prioritize slow morning time with Mom, all 4 siblings, and both toddler grandkids before Mom heads to LAS airport!"
      },
      {
        id: "it-10",
        time: "11:30 AM (or Post-Nap 2:30 PM)",
        title: "Exploration Peak Park (Frontier Toddler Playground) OR Red Rock Scenic Loop",
        type: "suggested",
        location: "9275 S Buffalo Dr (10 mins south) OR Red Rock Canyon (15 mins west)",
        note: "Exploration Peak has a flat Old West town & fossil dig built for 2–3yo toddlers; Red Rock's 13-mile loop lets sleepy toddlers ride/nap in car seats ($2 Recreation.gov timed entry)."
      },
      {
        id: "it-11",
        time: "4:45 PM (Opening Slot)",
        title: "Holiday Lights: Enchant Christmas (Bring Carriers!) OR Glittering Lights Drive-Thru",
        type: "suggested",
        location: "Las Vegas Ballpark (10 mins away) OR LV Motor Speedway Drive-Thru",
        note: "⚠️ TODDLER PRO TIP: Enchant prohibits strollers inside the Light Maze (park stroller outside + use toddler carriers, no backpacks >16x16x8). Want zero walking? Do Glittering Lights ($39/car) with kids in PJs! (Note: NO Downtown Summerlin Parade on Black Friday—it runs Sat Nov 28!)"
      },
      {
        id: "it-12",
        time: "8:00 PM (Optional Adult Swap)",
        title: "Adults-Only Night Out (Built-In Family Babysitting Swap!)",
        type: "suggested",
        location: "Wax Rabbit Speakeasy (Durango, 7 mins) / Sphere (The Eagles) / Strip",
        note: "Once the 2yo & almost-3yo are asleep (~7:30 PM), 6 adults means easy babysitting trade-offs!"
      }
    ]
  },
  {
    dayId: "day-4",
    date: "Sat, Nov 28",
    isoDate: "2026-11-28",
    title: "Saturday — Toddler Heaven + Free 6 PM Holiday Parade & Chinatown",
    theme: "Built Around Two 2–3yo Cousins + 6 Adults",
    items: [
      {
        id: "it-13",
        time: "9:30 AM – 12:00 PM",
        title: "Discovery Children's Museum (Toddler Town + Water World) OR Springs Preserve",
        type: "suggested",
        location: "360 Promenade Pl (18 mins) OR 333 S Valley View Blvd (15 mins)",
        note: "Discovery Museum's Water World (smocks provided!) & Toddler Town are peak joy for a 2yo + almost-3yo before midday nap!"
      },
      {
        id: "it-14",
        time: "12:30 PM – 3:00 PM",
        title: "Midday Toddler Nap Break (+ Optional Adult Subset Outing to Sphere / AREA15)",
        type: "suggested",
        location: "The Cliffs 2BR Condo / Sisters' House",
        note: "⚠️ Sphere 'Wizard of Oz' recommends ages 6+, charges full ticket for 2yo, and has loud tornado audio/strobes—best done by an adult subgroup while toddlers nap!"
      },
      {
        id: "it-15",
        time: "5:00 PM Dinner → 6:00 PM Parade",
        title: "Early Group Dinner + FREE 6:00 PM Downtown Summerlin Holiday Parade!",
        type: "suggested",
        location: "Downtown Summerlin (10 mins) or Chinatown Round-Table Feast (14 mins)",
        note: "VERIFIED FOR SAT NOV 28 @ 6:00 PM: Free 25-min Holiday Parade on Park Centre Dr with Polar Express float, snow flurries & Santa—ideal 2–3yo length!"
      }
    ]
  },
  {
    dayId: "day-5",
    date: "Sun, Nov 29",
    isoDate: "2026-11-29",
    title: "Sunday — Easy Food Hall, Sharks & Stroller-Friendly Cactus Lights",
    theme: "Relaxed Family Pace (7–8 People)",
    items: [
      {
        id: "it-16",
        time: "11:00 AM",
        title: "Zero-Wait Group Lunch at 'Eat Your Heart Out' Food Hall (Durango Resort)",
        type: "suggested",
        location: "6915 S Durango Dr (Only 7 mins from The Cliffs at Peace Canyon!)",
        note: "Easiest meal of the trip with two toddlers: zero wait for 8 people, high chairs, pizza/noodles/burgers/tacos & frozen custard."
      },
      {
        id: "it-17",
        time: "2:30 PM (Post-Nap)",
        title: "Shark Reef Aquarium Tunnel (Mandalay Bay) + Bellagio Conservatory",
        type: "suggested",
        location: "South/Mid Strip (~19 mins)",
        note: "60–75 minute walkthrough sweet spot—2yo & almost-3yo cousins will love the 360° shark & sea turtle tunnel!"
      },
      {
        id: "it-18",
        time: "5:15 PM",
        title: "Ethel M Chocolates 33rd Annual Holiday Cactus Garden Lights",
        type: "suggested",
        location: "2 Cactus Garden Dr, Henderson, NV",
        note: "FREE admission & 100% stroller-friendly (unlike Enchant's maze)! 1M+ lights & hot cocoa before bedtime."
      }
    ]
  },
  {
    dayId: "day-6",
    date: "Mon, Nov 30",
    isoDate: "2026-11-30",
    title: "Departure Day — Checkout & Flight Home to SFO (3 People)",
    theme: "Morning Pack-Up & Midday Nonstop Flight",
    items: [
      {
        id: "it-19",
        time: "10:00 AM",
        title: "Check-out of The Cliffs at Peace Canyon",
        type: "confirmed",
        location: "4550 S Grand Canyon Dr, Las Vegas, NV 89147",
        note: "Check-out deadline is 10:00 AM. Ensure $150 damage deposit inspection is cleared."
      },
      {
        id: "it-20",
        time: "10:30 AM",
        title: "Quick Bagel / Breakfast Stop & Rental Car Return",
        type: "suggested",
        location: "Downtown Summerlin / Durango → LAS Rent-A-Car Center",
        note: "Allow 25 mins drive to LAS Rent-A-Car Center + shuttle to Terminal 3 with Kayden's car seat."
      },
      {
        id: "it-21",
        time: "12:30 PM (Cutoff 12:46 PM)",
        title: "United Bag Drop Cutoff (45m prior) at LAS Terminal 3",
        type: "confirmed",
        location: "LAS Terminal 3",
        note: "Conf #L29ERJ • Car seat & stroller check/gate-check FREE on United; remember Basic Economy 9\"x10\"x17\" personal-item rule for adult bags."
      },
      {
        id: "it-22",
        time: "1:31 PM → 3:19 PM PST",
        title: "Fly Home: United Airlines UA 1799 (LAS → SFO)",
        type: "confirmed",
        location: "LAS → SFO",
        note: "Seats: Daniel (38C Aisle), Kayden (38B Middle), Maria (check app). Welcome home at 3:19 PM!"
      }
    ]
  }
];

export const RESTAURANTS = [
  {
    id: "rest-eat-your-heart-out",
    name: "Eat Your Heart Out Food Hall (Durango Resort)",
    zone: "West Vegas / Near Resort",
    cuisine: "Upscale Curated Food Hall (7 Concepts)",
    driveFromResort: "7 mins (3.1 mi)",
    price: "$$",
    groupCapacity: "8–20+ (No reservation needed, huge indoor/patio communal tables)",
    kidFriendly: true,
    thanksgivingOpen: true,
    tags: ["Top Pick Near Resort", "Zero Wait", "Kid Friendly", "Casual Group"],
    description: "25,000 sq ft culinary hall at the brand-new Durango Casino & Resort just minutes from The Cliffs at Peace Canyon. Houses Shang Artisan Noodle, Prince Street Pizza, Irv's Burgers, Villa's Tacos, Ai Pono Café, Yu Or Mi Sushi, and Nielsen's Frozen Custard.",
    mustOrder: "Shang Beef Noodle Soup, Prince Street Spicy Spring Sicilian Pizza, Nielsen's Frozen Custard",
    bookingTip: "Walk-in friendly! Best stress-free spot when the whole extended family wants different cuisines.",
    url: "https://durangoresort.com/eat-and-drink/eat-your-heart-out/"
  },
  {
    id: "rest-summer-house",
    name: "Summer House (Durango Resort)",
    zone: "West Vegas / Near Resort",
    cuisine: "California-Inspired American & Artisanal Bakery",
    driveFromResort: "7 mins (3.1 mi)",
    price: "$$$",
    groupCapacity: "8–16+ (Semi-private patio & large family tables)",
    kidFriendly: true,
    thanksgivingOpen: true,
    tags: ["Top Pick Near Resort", "Brunch & Dinner", "Kid Friendly", "Thanksgiving Open"],
    description: "Breezy, sun-drenched indoor/outdoor restaurant at Durango Resort with wood-grilled meats, house-made pastas, a kids' menu, and a famous oversized cookie bar at the entrance.",
    mustOrder: "Wood-Grilled Skirt Steak, Buena Vista Cobb Salad, Sea Salt Chocolate Chip Cookies",
    bookingTip: "Book via OpenTable or call Durango Group Dining for parties of 8+.",
    url: "https://www.summerhouserestaurant.com/las-vegas/"
  },
  {
    id: "rest-mijo",
    name: "Mijo Modern Mexican (Durango Resort)",
    zone: "West Vegas / Near Resort",
    cuisine: "Coastal & Wood-Fired Modern Mexican",
    driveFromResort: "7 mins (3.1 mi)",
    price: "$$$",
    groupCapacity: "8–20 (Dedicated private dining room & large booths)",
    kidFriendly: true,
    thanksgivingOpen: true,
    tags: ["Near Resort", "Lively Vibe", "Private Room Available"],
    description: "Vibrant coastal Mexican spot at Durango Resort featuring shareable wood-fired fajitas, tableside guacamole, birria, and a hidden speakeasy (Wax Rabbit) for the adults afterward.",
    mustOrder: "Tableside Guacamole, Short Rib Birria Enchiladas, Churro Tree for the table",
    bookingTip: "Great for Friday or Saturday night when you want a short 7-minute drive back to the condo.",
    url: "https://durangoresort.com/eat-and-drink/mijo-modern-mexican-restaurant/"
  },
  {
    id: "rest-maggianos-summerlin",
    name: "Maggiano's Little Italy (Downtown Summerlin)",
    zone: "West Vegas / Near Resort",
    cuisine: "Family-Style Italian & Traditional Thanksgiving Feast",
    driveFromResort: "10 mins (4.8 mi)",
    price: "$$",
    groupCapacity: "8–30+ (Built specifically for family-style banquets)",
    kidFriendly: true,
    thanksgivingOpen: true,
    tags: ["Thanksgiving Feast", "Family-Style", "Kid Friendly", "Near Resort"],
    description: "A Downtown Summerlin staple for large multi-generational families. On Thanksgiving Day, they serve a massive 3-course family-style feast with roasted turkey, country-style smoked ham, stuffing, mashed potatoes, AND two classic pastas.",
    mustOrder: "3-Course Family-Style Thanksgiving Feast, Taylor Street Baked Ziti, Warm Apple Crostada",
    bookingTip: "Pair with Enchant Christmas at Las Vegas Ballpark right across the street!",
    url: "https://www.maggianos.com/"
  },
  {
    id: "rest-jing-summerlin",
    name: "JING Las Vegas (Downtown Summerlin)",
    zone: "West Vegas / Near Resort",
    cuisine: "Global Fusion, Prime Steaks & Sushi",
    driveFromResort: "10 mins (4.8 mi)",
    price: "$$$$",
    groupCapacity: "8–18 (Dedicated group dining coordinator)",
    kidFriendly: false,
    thanksgivingOpen: true,
    tags: ["Thanksgiving Feast", "Upscale", "Near Resort"],
    description: "Chic, high-energy culinary hotspot in Downtown Summerlin offering both a traditional Thanksgiving Day menu (roasted turkey, fall pumpkin risotto, pumpkin pie cheesecake) and their full steak/sushi menu.",
    mustOrder: "Fall Pumpkin Risotto, Prime Ribeye, Crispy Snapper",
    bookingTip: "Best for an upscale group dinner in Summerlin without driving to the Strip.",
    url: "https://www.jingrestaurant.com/las-vegas/"
  },
  {
    id: "rest-echo-rig",
    name: "Echo & Rig Butcher and Steakhouse (Tivoli Village)",
    zone: "West Vegas / Near Resort",
    cuisine: "Modern Butcher Shop & Steakhouse",
    driveFromResort: "12 mins (5.4 mi)",
    price: "$$$",
    groupCapacity: "8–16 (Upstairs patio & large round tables)",
    kidFriendly: true,
    thanksgivingOpen: false,
    tags: ["Local Favorite", "Great Value Steaks", "Kid Friendly"],
    description: "Located in charming European-style Tivoli Village, Echo & Rig offers Strip-quality aged cuts at half the Strip price, with zero corkage fee and shareable small plates.",
    mustOrder: "Butcher's Cut Spencer Steak, Portobello Fries, Garlic Chips",
    bookingTip: "Ideal for Friday or Saturday lunch/dinner after Red Rock Canyon.",
    url: "https://www.echoandrig.com/"
  },
  {
    id: "rest-carmines",
    name: "Carmine's NYC Family-Style Italian (Forum Shops at Caesars)",
    zone: "The Strip",
    cuisine: "Legendary NYC Family-Style Italian & Thanksgiving Turkey",
    driveFromResort: "18 mins (9.5 mi)",
    price: "$$$",
    groupCapacity: "8–25+ (Massive platters served for the whole table)",
    kidFriendly: true,
    thanksgivingOpen: true,
    tags: ["Thanksgiving Feast", "Ultimate Large Group", "Family-Style", "Kid Friendly"],
    description: "Built from the ground up for large groups! Every dish is served on giant platters meant for 4–6+ people. For Thanksgiving, they offer a whole 16–18 lb roasted turkey with sausage & sage stuffing, Brussels sprouts, sweet potatoes, and cranberry sauce for the table.",
    mustOrder: "Family-Style Thanksgiving Turkey Feast, Chicken Parmigiana Platter, Titanic Banana Split",
    bookingTip: "Call group dining directly if booking 8+ for Thanksgiving Day.",
    url: "https://www.carminesnyc.com/locations/las-vegas"
  },
  {
    id: "rest-stripsteak",
    name: "STRIPSTEAK by Michael Mina (Mandalay Bay)",
    zone: "The Strip",
    cuisine: "Modern American Steakhouse",
    driveFromResort: "19 mins (10.2 mi)",
    price: "$$$$",
    groupCapacity: "8–16 (Private dining rooms & large booths)",
    kidFriendly: true,
    thanksgivingOpen: true,
    tags: ["Thanksgiving Feast", "2025 Email Favorite", "Upscale Steakhouse"],
    description: "You checked STRIPSTEAK on OpenTable during your 2025 Thanksgiving trip! Famous for its complimentary duck-fat fries trio at the start of the meal, wood-fired prime cuts, and an elevated Thanksgiving Day menu.",
    mustOrder: "Signature Duck Fat Fries Trio, Hay-Smoked Japanese A5 Wagyu, Black Truffle Mac & Cheese",
    bookingTip: "Combine with a daytime visit to Shark Reef Aquarium inside Mandalay Bay.",
    url: "https://mandalaybay.mgmresorts.com/en/restaurants/stripsteak.html"
  },
  {
    id: "rest-carversteak",
    name: "Carversteak (Resorts World Las Vegas)",
    zone: "The Strip",
    cuisine: "Luxury Steakhouse & Holiday Prix-Fixe",
    driveFromResort: "20 mins (10.5 mi)",
    price: "$$$$",
    groupCapacity: "8–24 (Expansive terrace, knife room & private rooms)",
    kidFriendly: true,
    thanksgivingOpen: true,
    tags: ["Thanksgiving Feast", "Upscale", "Both Turkey & Steak Menus"],
    description: "One of the largest and sleekest steakhouses on the Strip. Offers a 3-course Thanksgiving prix-fixe alongside its full dry-aged steak menu so turkey-lovers and steak-lovers in your group are both happy.",
    mustOrder: "Roasted Heritage Turkey Dinner OR Tomahawk Ribeye for the Table, Lobster En Croute",
    bookingTip: "Resorts World has easy group parking and is less congested than mid-Strip.",
    url: "https://carversteak.com/"
  },
  {
    id: "rest-din-tai-fung",
    name: "Din Tai Fung (ARIA Resort & Casino)",
    zone: "The Strip",
    cuisine: "Taiwanese Soup Dumplings (Xiao Long Bao) & Noodles",
    driveFromResort: "18 mins (9.4 mi)",
    price: "$$$",
    groupCapacity: "8–14 (Large round lazy-susan tables)",
    kidFriendly: true,
    thanksgivingOpen: true,
    tags: ["Crowd Pleaser", "Kid Friendly", "Shareable"],
    description: "Sprawling dining room inside ARIA with lazy-susan round tables built for sharing stacks of bamboo steamers. Kids love watching the dumpling makers through the glass kitchen.",
    mustOrder: "Kurobuta Pork Xiao Long Bao, Spicy Wontons, Chocolate & Mochi Xiao Long Bao",
    bookingTip: "Book exact time slots on SevenRooms/ARIA website as early as possible.",
    url: "https://aria.mgmresorts.com/en/restaurants/din-tai-fung.html"
  },
  {
    id: "rest-hakkasan",
    name: "Hakkasan Restaurant (MGM Grand)",
    zone: "The Strip",
    cuisine: "Modern Cantonese Fine Dining",
    driveFromResort: "20 mins (10.1 mi)",
    price: "$$$$",
    groupCapacity: "8–20 (Semi-private lattice cages & group feast menus)",
    kidFriendly: true,
    thanksgivingOpen: true,
    tags: ["Thanksgiving Feast", "Peking Duck", "Group Tasting Menu"],
    description: "For an unforgettable non-traditional Thanksgiving feast, Hakkasan's signature group menus center around whole roasted Peking duck, dim sum platters, and Chilean sea bass in dramatic carved-wood booths.",
    mustOrder: "Signature Peking Duck with Caviar, Supreme Dim Sum Platter, Crispy Duck Salad",
    bookingTip: "Their 'Signature Group Menu' simplifies ordering for 8+ guests.",
    url: "https://hakkasan.com/las-vegas/"
  },
  {
    id: "rest-bacchanal",
    name: "Bacchanal Buffet (Caesars Palace)",
    zone: "The Strip",
    cuisine: "Luxury All-You-Can-Eat Holiday Buffet (9 Show Kitchens)",
    driveFromResort: "18 mins (9.3 mi)",
    price: "$$$$",
    groupCapacity: "8–16 (Pre-book large group seating on OpenTable)",
    kidFriendly: true,
    thanksgivingOpen: true,
    tags: ["Thanksgiving Feast", "Something for Everyone", "Kid Friendly"],
    description: "Las Vegas's flagship mega-buffet featuring 250+ dishes, crab legs, prime rib, dim sum, tacos, and dedicated Thanksgiving carving stations.",
    mustOrder: "Snow Crab Legs, Smoked Wagyu Brisket, Made-to-Order Crepes & Holiday Pies",
    bookingTip: "Reserve on OpenTable in advance—walk-in lines on Thanksgiving weekend can exceed 2 hours.",
    url: "https://www.caesars.com/caesars-palace/restaurants/bacchanal-buffet"
  },
  {
    id: "rest-888-jbbq",
    name: "888 Japanese BBQ (Chinatown)",
    zone: "Chinatown (Spring Mountain Rd)",
    cuisine: "Interactive Japanese Yakiniku & Kobe Beef",
    driveFromResort: "14 mins (6.5 mi)",
    price: "$$",
    groupCapacity: "8–16 (Adjacent smokeless grill booths)",
    kidFriendly: true,
    thanksgivingOpen: true,
    tags: ["Chinatown Gem", "Interactive Group Meal", "High Value"],
    description: "Consistently rated one of the best Japanese BBQ spots in America. Unbeatable quality-to-price ratio for a big group wanting to grill A5 Wagyu, prime short rib, pork belly, and garlic noodles together.",
    mustOrder: "Kobe Tier All-You-Can-Eat, Beef Tongue, Truffle Belly",
    bookingTip: "Join the Yelp Waitlist remotely 60–90 minutes before leaving the condo!",
    url: "https://www.yelp.com/biz/888-japanese-bbq-las-vegas"
  },
  {
    id: "rest-chubby-cattle",
    name: "Chubby Cattle Hotpot & Wagyu (Chinatown)",
    zone: "Chinatown (Spring Mountain Rd)",
    cuisine: "Conveyor-Belt & Group Wagyu Hot Pot",
    driveFromResort: "14 mins (6.6 mi)",
    price: "$$$",
    groupCapacity: "8–14",
    kidFriendly: true,
    thanksgivingOpen: true,
    tags: ["Chinatown Gem", "Kid Friendly", "Warm Winter Comfort"],
    description: "Fun, interactive hot pot experience where everyone gets their own individual broth pot (mild bone broth for kids, spicy mala for adults) while sharing platters of Wagyu and handmade noodles.",
    mustOrder: "House Original Bone Broth, A5 Miyazaki Wagyu Platter, Lobster Balls",
    bookingTip: "Individual soup pots make it super easy for families with young kids and dietary preferences.",
    url: "https://www.chubbycattle.com/"
  },
  {
    id: "rest-lotus-of-siam",
    name: "Lotus of Siam (Red Rock Resort OR Flamingo Rd)",
    zone: "West Vegas / Near Resort",
    cuisine: "James Beard Award-Winning Northern Thai",
    driveFromResort: "10 mins (4.9 mi to Red Rock location)",
    price: "$$$",
    groupCapacity: "8–14 (Family-style Thai sharing)",
    kidFriendly: true,
    thanksgivingOpen: true,
    tags: ["Near Resort", "James Beard Winner", "Family-Style"],
    description: "Las Vegas's most famous Northern Thai restaurant now has a gorgeous location inside Red Rock Casino Resort just 10 minutes from The Cliffs at Peace Canyon!",
    mustOrder: "Khao Soi (Crispy Duck on Curry Noodles), Garlic Prawns, Nam Kao Tod (Crispy Rice Salad)",
    bookingTip: "Book the Red Rock Casino location—it's only 10 minutes from your condo!",
    url: "https://lotusofsiamlv.com/"
  },
  {
    id: "rest-chengdu-taste",
    name: "Chengdu Taste (Chinatown)",
    zone: "Chinatown (Spring Mountain Rd)",
    cuisine: "Authentic Sichuan Family-Style",
    driveFromResort: "14 mins (6.4 mi)",
    price: "$$",
    groupCapacity: "8–12 (Large round tables with lazy susans)",
    kidFriendly: true,
    thanksgivingOpen: true,
    tags: ["Chinatown Gem", "Lazy Susan Round Tables", "Open Thanksgiving"],
    description: "Bold Sichuan flavors alongside mild, kid-friendly dishes served at classic round tables with lazy susans—perfect for an 8–10 person group.",
    mustOrder: "Boiled Fish with Green Peppercorns, Toothpick Lamb, Non-Spicy String Beans & Egg Fried Rice",
    bookingTip: "Always open on Thanksgiving Day when traditional spots are packed.",
    url: "https://www.yelp.com/biz/chengdu-taste-las-vegas"
  }
];

export const EVENTS = [
  {
    id: "evt-enchant",
    title: "Enchant Christmas: 'The Great Search' & Ice Skating Trail",
    dates: "Open Nightly Nov 20 – Dec 27, 2026 (Opens ~4:30/5:00 PM)",
    venue: "Las Vegas Ballpark (Downtown Summerlin)",
    driveFromResort: "10 mins (4.7 mi)",
    category: "Holiday & Family",
    price: "$35–$48 Adult / Kids & Family Packs Available",
    tags: ["10 Mins from Resort", "⚠️ No Strollers Inside Maze", "Book 4:30 PM Slot"],
    description: "Right in Summerlin! World's largest Christmas light maze, Santa's Landing, and artisan village. ⚠️ IMPORTANT FOR YOUR 2 TODDLERS: Strollers are allowed on the ballpark concourse, but PROHIBITED inside the light maze itself (park outside & use toddler carriers), and backpacks are banned (bags max 16\"×16\"×8\").",
    url: "https://enchantchristmas.com/"
  },
  {
    id: "evt-summerlin-parade",
    title: "Downtown Summerlin FREE Holiday Parade (Polar Express & Snow!)",
    dates: "Saturday, Nov 28, 2026 at 6:00 PM (⚠️ NO Parade on Black Friday Nov 27!)",
    venue: "Park Centre Drive at Downtown Summerlin",
    driveFromResort: "10 mins (4.7 mi)",
    category: "Holiday & Family",
    price: "FREE (No tickets required)",
    tags: ["Best for 2–3yo Toddlers!", "FREE", "Sat Nov 28 Only"],
    description: "25-minute high-energy street parade with Polar Express floats, costumed dancers, fake snow flurries, and Santa Claus—literally the ideal attention span for a 2-year-old and almost-3-year-old! Verified schedule note: skipped on Black Friday (Nov 27), runs Saturday (Nov 28) at 6:00 PM.",
    url: "https://summerlin.com/downtown-summerlin/"
  },
  {
    id: "evt-sphere-oz",
    title: "The Wizard of Oz — Immersive Experience at Sphere",
    dates: "Daily Matinee & Early Evening Showtimes (Nov 25–30, 2026)",
    venue: "Sphere Las Vegas (255 Sands Ave)",
    driveFromResort: "20 mins (10.3 mi)",
    category: "Immersive & Family",
    price: "From $79–$149 (Every age needs a full ticket)",
    tags: ["⚠️ Recommended Ages 6+", "Adult Swap-Off Outing", "Intense 4D Audio/Wind"],
    description: "16K wraparound LED screen with haptic shaking seats, tornado wind, fog, strobes, and booming 164,000-speaker audio. ⚠️ TODDLER HEADS-UP: Officially recommended for ages 6+ (and 2–3yo toddlers still require full-price tickets and often get scared by the tornado sequence)—best done by an adult subgroup!",
    url: "https://www.thesphere.com/"
  },
  {
    id: "evt-sphere-eagles",
    title: "The Eagles — Live in Concert at Sphere",
    dates: "Thanksgiving Weekend Residency (Fri, Nov 27 & Sat, Nov 28, 2026)",
    venue: "Sphere Las Vegas",
    driveFromResort: "20 mins (10.3 mi)",
    category: "Headliner Concert",
    price: "Residency Tickets / Vibee Packages",
    tags: ["Blockbuster Concert", "Fri/Sat Night"],
    description: "The Eagles headline Sphere over Thanksgiving weekend with unmatched 167,000-speaker beamforming audio and floor-to-ceiling visual production.",
    url: "https://www.thesphere.com/"
  },
  {
    id: "evt-players-era",
    title: "Players Era Festival — NCAA Men's & Women's Basketball Tournament",
    dates: "Nov 24 – Nov 27, 2026 (Thanksgiving Week)",
    venue: "T-Mobile Arena & MGM Grand Garden Arena",
    driveFromResort: "19 mins (9.8 mi)",
    category: "Live Sports",
    price: "From $45+",
    tags: ["Live Sports", "Thanksgiving Week", "Hoops Fans"],
    description: "Premier college basketball showcase featuring top-ranked NCAA programs battling on the Strip throughout Thanksgiving week.",
    url: "https://www.t-mobilearena.com/"
  },
  {
    id: "evt-journey-jonas",
    title: "Journey (Nov 27) & Jonas Brothers (Nov 28) at MGM Grand",
    dates: "Fri, Nov 27 (Journey) & Sat, Nov 28, 2026 (Jonas Brothers)",
    venue: "MGM Grand Garden Arena",
    driveFromResort: "20 mins (10.1 mi)",
    category: "Headliner Concert",
    price: "From $75+",
    tags: ["Arena Concert", "Black Friday Weekend"],
    description: "Back-to-back arena concerts at MGM Grand Garden Arena: rock legends Journey on Black Friday (Nov 27) followed by the Jonas Brothers on Saturday night (Nov 28).",
    url: "https://mgmgrand.mgmresorts.com/en/entertainment.html"
  },
  {
    id: "evt-unlv-football",
    title: "UNLV Rebels vs. Nevada Wolf Pack (Fremont Cannon Rivalry Game)",
    dates: "Saturday, Nov 28, 2026",
    venue: "Allegiant Stadium",
    driveFromResort: "18 mins (9.5 mi)",
    category: "Live Sports",
    price: "From $40+",
    tags: ["Live Sports", "Allegiant Stadium", "Rivalry Game"],
    description: "The biggest college football rivalry game in Nevada inside the $2B climate-controlled Allegiant Stadium on the Saturday after Thanksgiving.",
    url: "https://www.allegiantstadium.com/"
  },
  {
    id: "evt-ethel-m",
    title: "33rd Annual Ethel M Holiday Cactus Garden Lights",
    dates: "Nightly Nov 5, 2026 – Jan 3, 2027 (5:00 PM – 10:00 PM)",
    venue: "Ethel M Chocolates Factory & Cactus Garden (Henderson)",
    driveFromResort: "25 mins (16.5 mi)",
    category: "Holiday & Family",
    price: "FREE Entry ($2–$5 charity donation optional)",
    tags: ["Free Admission", "All Ages", "1M+ Lights"],
    description: "Stroll a 3-acre desert botanical garden illuminated with over 1 million twinkling holiday lights, watch chocolate-making through the factory windows, and sip gourmet hot cocoa.",
    url: "https://www.ethelm.com/en-us/events/holiday-cactus-garden"
  },
  {
    id: "evt-bellagio-conservatory",
    title: "Bellagio Conservatory & Botanical Gardens + Fountains",
    dates: "Open 24 Hours Daily (Nov 25–30, 2026)",
    venue: "Bellagio Resort & Casino",
    driveFromResort: "18 mins (9.3 mi)",
    category: "Holiday & Family",
    price: "FREE",
    tags: ["Free Admission", "All Ages", "Iconic Vegas"],
    description: "14,000-square-foot floral wonderland crafted from tens of thousands of fresh flowers and towering holiday displays, paired with the Bellagio Fountain shows every 15–30 minutes.",
    url: "https://bellagio.mgmresorts.com/en/entertainment/conservatory-botanical-gardens.html"
  },
  {
    id: "evt-glittering-lights",
    title: "Glittering Lights Drive-Thru at Las Vegas Motor Speedway",
    dates: "Nightly Nov 6, 2026 – Jan 3, 2027 (Starts at Dusk ~4:45 PM)",
    venue: "Las Vegas Motor Speedway",
    driveFromResort: "32 mins",
    category: "Holiday & Family",
    price: "$39 per vehicle (Whole carload!)",
    tags: ["Stay in Warm Car", "Zero Toddler Walking", "PJ-Friendly"],
    description: "Nevada's largest drive-thru holiday light show spanning 2.5+ miles with 5 million LED lights. Zero stroller hassle—put both 2–3yo cousins in pajamas with snacks and stay cozy in your cars!",
    url: "https://glitteringlightslasvegas.com/"
  },
  {
    id: "evt-cirque-mystere",
    title: "Cirque du Soleil: 'Mystère' or 'O' (Adults Swap Night)",
    dates: "Evening Performances (7:00 PM & 9:30 PM)",
    venue: "Treasure Island / Bellagio",
    driveFromResort: "18 mins",
    category: "Strip Production",
    price: "From $69 (Mystère) / $129 ('O')",
    tags: ["⚠️ 'O' Requires Ages 5+", "Adults Night Out"],
    description: "Note for your group: 'O' at Bellagio strictly enforces age 5+, and 7:00 PM / 9:30 PM curtains overlap toddler bedtime—great option if 2–4 adults swap babysitting one evening!",
    url: "https://www.cirquedusoleil.com/las-vegas"
  }
];

export const ACTIVITIES = [
  {
    id: "act-discovery-museum",
    title: "Discovery Children's Museum (Toddler Town & Water World)",
    zone: "Downtown / Symphony Park",
    driveFromResort: "18 mins (10.5 mi)",
    duration: "2–2.5 hours",
    bestFor: "#1 Indoor Hit for 2yo Kayden + Almost-3yo Cousin",
    kidFriendly: true,
    tags: ["S-Tier for Ages 2–3", "Water World Smocks", "Indoor"],
    description: "58,000-square-foot, three-story interactive children's museum featuring dedicated Toddler Town, Water World splash tables (with waterproof smocks!), pirate ship, and EcoCity—purpose-built for 2- and 3-year-olds.",
    proTip: "Go right at 9:30 AM/10:00 AM opening so both toddlers can burn energy before their midday nap! Right next to North Premium Outlets too.",
    url: "https://www.discoverykidslv.org/"
  },
  {
    id: "act-exploration-peak",
    title: "Exploration Peak Park (Old West Frontier Toddler Playground)",
    zone: "Southwest / Mountain's Edge",
    driveFromResort: "10 mins (4.9 mi)",
    duration: "1.5–2 hours",
    bestFor: "2yo & Almost-3yo Outdoor Play (Way Better Than Steep Fox Hill!)",
    kidFriendly: true,
    tags: ["10 Mins from Resort", "FREE", "Built for Toddlers"],
    description: "Flat, imaginative miniature Old West frontier town playground with ground-level storefronts, covered wagons, and a dinosaur/archaeology fossil dig sandpit—far safer and easier for 2- and 3-year-olds than the steep ropes at Fox Hill Park.",
    proTip: "Grab morning coffee on the way—easy free morning outing where all 6–7 adults can chat while the two cousins dig and explore.",
    url: "https://www.clarkcountynv.gov/government/departments/parks___recreation/"
  },
  {
    id: "act-red-rock",
    title: "Red Rock Canyon National Conservation Area",
    zone: "West Vegas / Summerlin",
    driveFromResort: "15 mins (8.2 mi)",
    duration: "2–2.5 hours",
    bestFor: "Whole Group Caravan (13-Mile Scenic Drive + Short Flat Walks)",
    kidFriendly: true,
    tags: ["15 Mins from Resort", "Stroller-Friendly Visitor Center", "Nap-Drive Friendly"],
    description: "Towering crimson sandstone cliffs 15 mins from your condo. Drive the 13-mile Scenic Loop stopping at the Visitor Center (desert tortoises!) and Petroglyph Wall trail (flat 0.2-mile walk easy for toddler legs).",
    proTip: "Reserve timed entry on Recreation.gov ($2 + $20/car between 8 AM–5 PM) for each car in your family caravan.",
    url: "https://www.recreation.gov/timed-entry/10075177"
  },
  {
    id: "act-springs-preserve",
    title: "Springs Preserve & Botanical Gardens",
    zone: "West / Central Valley",
    driveFromResort: "15 mins (7.8 mi)",
    duration: "2–3 hours",
    bestFor: "Stroller-Friendly Multi-Gen Walk, Desert Animals & Train",
    kidFriendly: true,
    tags: ["15 Mins from Resort", "100% Stroller Friendly", "Desert Wildlife"],
    description: "180 acres of flat paved desert botanical trails, live foxes/tortoises/lizards, Boomtown 1905 streetscape, indoor kid exhibits, and playground—great with Mom on Friday morning if she has an afternoon flight!",
    proTip: "Flat paved loops make pushing two strollers side-by-side completely effortless.",
    url: "https://www.springspreserve.org/"
  },
  {
    id: "act-downtown-summerlin",
    title: "Downtown Summerlin & Sat 6 PM Holiday Parade",
    zone: "West Vegas / Summerlin",
    driveFromResort: "10 mins (4.7 mi)",
    duration: "2–3 hours",
    bestFor: "Stroller Strolling, Dining, Trader Joe's & Sat Night Snow Parade",
    kidFriendly: true,
    tags: ["10 Mins from Resort", "Sat Nov 28 Parade @ 6 PM", "Stroller Friendly"],
    description: "Open-air walkable district with 125+ shops, Trader Joe's, Rock Rink ice skating, Maggiano's, and the FREE Saturday 6:00 PM Holiday Parade (note: no parade on Black Friday Nov 27!).",
    proTip: "Arrive at 4:45 PM on Saturday, Nov 28 for an early group dinner, then watch the 25-minute 6:00 PM Holiday Parade before bedtime.",
    url: "https://summerlin.com/downtown-summerlin/"
  },
  {
    id: "act-lion-habitat",
    title: "Lion Habitat Ranch (Lions + Feed Ozzie the Giraffe)",
    zone: "Henderson / South Valley",
    driveFromResort: "22 mins (14.5 mi)",
    duration: "1.5 hours",
    bestFor: "Quick Morning Animal Outing (Even Open Thanksgiving 11 AM–3 PM!)",
    kidFriendly: true,
    tags: ["Toddlers Love It", "Open Thu–Sun 11 AM–3 PM", "Stroller Friendly"],
    description: "Outdoor sanctuary housing ~30 African lions, tortoises, ostriches, and Ozzie the painting giraffe—short 60–90 minute loop that fits toddler attention spans without zoo exhaustion.",
    proTip: "Note: Gilcrease Nature Sanctuary is CLOSED on Thanksgiving Day, whereas Lion Habitat Ranch is open 11 AM–3 PM (last entry 2 PM).",
    url: "https://lionhabitatranch.org/"
  },
  {
    id: "act-popstroke",
    title: "PopStroke Las Vegas at Town Square",
    zone: "South Strip / Airport",
    driveFromResort: "16 mins (4 mins from Homewood Suites!)",
    duration: "1.5–2 hours",
    bestFor: "Casual Adult Putting + Enclosed On-Site Kids' Playground",
    kidFriendly: true,
    tags: ["Enclosed Toddler Playground", "Outdoor Dining", "Ice Cream"],
    description: "Two synthetic turf putting courses with an on-site open-air restaurant, drinks delivered to the greens, gourmet ice cream, and a fenced-in kids' playground where the 2yo and almost-3yo can play while adults putt.",
    proTip: "Right across I-215/I-15 near Town Square—super easy daytime hangout for 6–7 adults + 2 toddlers.",
    url: "https://popstroke.com/venues/las-vegas/"
  },
  {
    id: "act-shark-reef",
    title: "Shark Reef Aquarium at Mandalay Bay",
    zone: "The Strip",
    driveFromResort: "19 mins (10.2 mi)",
    duration: "1–1.5 hours",
    bestFor: "60-Minute Toddler-Sized Underwater Tunnel Adventure",
    kidFriendly: true,
    tags: ["2–3yo Hit!", "Sharks & Sea Turtles", "Indoor"],
    description: "1.3-million-gallon aquarium with a 360-degree acrylic shipwreck tunnel of sharks, giant sea turtles, sawfish, and stingrays—short enough that neither toddler gets overtired.",
    proTip: "Book timed-entry tickets online so you breeze straight inside with strollers.",
    url: "https://mandalaybay.mgmresorts.com/en/entertainment/shark-reef-aquarium.html"
  },
  {
    id: "act-area15",
    title: "AREA15 & Meow Wolf's Omega Mart (Best for Adult Subset)",
    zone: "Off-Strip West",
    driveFromResort: "15 mins (8.1 mi)",
    duration: "2–3 hours",
    bestFor: "Adults Swap-Off During Toddler Nap or Evening",
    kidFriendly: false,
    tags: ["⚠️ Sensory/Crowded for 2yo", "Great for Adults", "15 Mins Away"],
    description: "Surreal hidden-portal supermarket and immersive art playground. Note: narrow dark stairs/crawls and loud lighting inside Omega Mart are tough with two 2–3yo toddlers—ideal for 3–4 adults during midday nap!",
    proTip: "Only 15 mins from The Cliffs at Peace Canyon, making a 2.5-hour adult outing super easy.",
    url: "https://area15.com/"
  }
];

export const DEFAULT_CHECKLIST = [
  {
    id: "chk-pet-1",
    category: "🐾 Pomeranian Urgent!",
    text: "Decide Nights 2–5 (Nov 26–30): The Cliffs at Peace Canyon is STRICTLY NO PETS — either confirm Pomeranian can sleep at Vegas Sisters' house OR free-cancel Cliffs (before 11/26 2PM) & book a dog-friendly 2BR suite!",
    done: false
  },
  {
    id: "chk-pet-2",
    category: "🐾 Pomeranian Urgent!",
    text: "Reserve cabin pet spots NOW before Thanksgiving flights fill up: Call Southwest (1-800-435-9792) for #CACD5X ($125) AND add pet in United App 'My Trips' for #L29ERJ ($150 — replaces 1 adult's personal item!)",
    done: false
  },
  {
    id: "chk-pet-3",
    category: "🐾 Pomeranian Urgent!",
    text: "Call Homewood Suites Las Vegas Airport (702-407-0075) to add Pomeranian to Night 1 Studio Suite ($50 fee) & check shuttle pet rule",
    done: false
  },
  {
    id: "chk-1",
    category: "Mom & Group Timing",
    text: "Confirm Mom's exact Thu Nov 26 arrival & Fri Nov 27 departure flight times so airport pickup + Friday farewell brunch are locked in",
    done: false
  },
  {
    id: "chk-2",
    category: "Urgent Bookings",
    text: "Decide Thu Nov 26 Thanksgiving Meal for 9 (7 Adults + 2 High Chairs): Pre-order catering for Sisters' house / 2BR condo OR book 4:45–5:15 PM table at Maggiano's Summerlin / Summer House Durango",
    done: false
  },
  {
    id: "chk-3",
    category: "Urgent Bookings",
    text: "Reserve 1 Compact/Midsize SUV for Thu Nov 26 – Mon Nov 30 (Sisters have local car/seat & Brother is driving his own car!)",
    done: false
  },
  {
    id: "chk-4",
    category: "Urgent Bookings",
    text: "Book Red Rock Canyon timed-entry passes on Recreation.gov ($2/car) for how many family cars are driving the loop",
    done: false
  },
  {
    id: "chk-5",
    category: "Flight Prep",
    text: "Set alarm for Tue, Nov 24 at 5:20 PM PST: Check in for Southwest Flight WN #2386 (Conf #CACD5X — Daniel, Maria & Kayden)",
    done: false
  },
  {
    id: "chk-6",
    category: "Flight Prep",
    text: "Verify Maria's seat assignment on United Flight UA 1799 (Conf #L29ERJ) next to Daniel (38C) & Kayden (38B)",
    done: false
  },
  {
    id: "chk-7",
    category: "Flight Prep",
    text: "Check United Basic Economy bag sizes for Mon Nov 30 return (car seat & stroller fly FREE; adult personal items max 9\"×10\"×17\" unless checking bags)",
    done: false
  },
  {
    id: "chk-8",
    category: "Hotel & Resort",
    text: "Coordinate w/ Vegas Sisters for Thu Nov 26 (11 AM – 4 PM) hotel gap so 2yo Kayden can nap & play with his almost-3yo cousin before 4 PM check-in",
    done: false
  },
  {
    id: "chk-9",
    category: "Hotel & Resort",
    text: "Bring physical credit card + photo ID for The Cliffs at Peace Canyon check-in (Thu Nov 26, 4:00 PM; $150 refundable deposit + $40 resort fee)",
    done: false
  },
  {
    id: "chk-10",
    category: "Toddlers & Packing",
    text: "Pack Kayden's car seat, stroller + a hip/toddler carrier & small diaper clutch (<16\"×16\"×8\") since Enchant's Light Maze bans strollers & backpacks!",
    done: false
  },
  {
    id: "chk-11",
    category: "Toddlers & Packing",
    text: "Pack warm jackets, beanies & layers for 42°F desert evenings (Sat 6 PM Summerlin Parade, Enchant, or Ethel M Cactus Garden)",
    done: false
  }
];
