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
    tips: "Bring warm layers/jackets for evening light shows (Enchant Christmas, Ethel M) and morning hikes at Red Rock Canyon."
  },
  travelers: [
    { name: "Daniel Geri", role: "Organizer", email: "danielgeri@gmail.com", tags: ["SFO ⇄ LAS", "Homewood Suites", "Cliffs at Peace Canyon"] },
    { name: "Maria Cavicchi", role: "Core Family", email: "mcav6487@gmail.com", tags: ["SFO ⇄ LAS", "Homewood Suites", "Cliffs at Peace Canyon"] },
    { name: "Kayden Geri", role: "Kid Traveler", email: "", tags: ["SFO ⇄ LAS (Own Seat)", "Cliffs at Peace Canyon"] },
    { name: "Leo Geri", role: "Infant Traveler", email: "", tags: ["Lap Infant", "Homewood Suites (2A + 1 Infant)"] },
    { name: "James Geri", role: "Extended Family Group", email: "jamesgeri1@gmail.com", tags: ["Forwarded Cliffs at Peace Canyon Booking (Nov 10)"] },
    { name: "Kumi Takahashi", role: "Extended Family Group", email: "kumi_geri@yahoo.com", tags: ["Family Group"] },
    { name: "Joe Geri", role: "Extended Family Group", email: "uclafootball@outlook.com", tags: ["Family Group"] }
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
      { name: "Kayden Geri", ticket: "5262418858457", seat: "Assigned at check-in" },
      { name: "Infant (Lap Child)", ticket: "Verify digitally at check-in", seat: "Lap" }
    ],
    highlights: [
      "Check-in opens 24h prior: Tuesday, Nov 24, 2026 at 5:20 PM PST (must check in ≥30 mins before departure).",
      "Basic Fare baggage: Includes 1 standard carry-on + 1 personal item per ticketed passenger.",
      "Cancellation rule: Cancel at least 10 minutes prior to scheduled departure or points/funds may be forfeited."
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
    status: "Confirmed • Paid",
    title: "Homewood Suites by Hilton Las Vegas Airport",
    subtitle: "Check-in Wed, Nov 25 (3:00 PM) → Check-out Thu, Nov 26 (11:00 AM)",
    confirmationCode: "73585813376033",
    secondaryCodeLabel: "Hotel Phone",
    secondaryCode: "+1 (702) 407-0075",
    bookedDate: "Tue, Nov 10, 2026 (10:21 PM CST)",
    provider: "Expedia.com",
    location: "230 Hidden Well Rd, Las Vegas, NV 89119",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Homewood+Suites+by+Hilton+Las+Vegas+Airport+230+Hidden+Well+Rd+Las+Vegas+NV+89119",
    priceSummary: "$86.19 Total Paid ($105.40 room + $13.70 tax − $32.91 OneKeyCash)",
    passengers: [
      { name: "Daniel Geri + Maria Cavicchi + 1 Infant", ticket: "Studio Suite, 1 King Bed with Sofa Bed, Kitchen", seat: "1 Night" }
    ],
    highlights: [
      "Complimentary Airport Shuttle: Property offers transfers from LAS airport. Call (702) 407-0075 with arrival details upon landing at 6:55 PM.",
      "Check-in window runs 3:00 PM to 2:00 AM. Includes Free High-Speed Internet & in-suite kitchen.",
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
    status: "Confirmed • Free Cancel until 11/26 2PM",
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
    priceSummary: "$1,249.67 Total ($1,147.11 unit + $154.32 tax + $40 resort fee − $91.77 Booking.com credit)",
    passengers: [
      { name: "Daniel Geri (Booked for 4 Adults)", ticket: "Two-Bedroom Unit (Full Kitchen, Living Room, Washer/Dryer)", seat: "4 Nights" },
      { name: "Forwarded to James Geri (jamesgeri1@gmail.com)", ticket: "Group Basecamp in Summerlin South", seat: "Shared Comms" }
    ],
    highlights: [
      "Free Cancellation until Thursday, Nov 26, 2026 at 2:00 PM PST ($0). After 2:00 PM on Nov 26, cancellation fee is $370.14.",
      "Payment & Deposit: Scheduled automatic charge via Booking.com ($1,249.66). Property invoice shows $1,341.43 (Booking.com pays $91.77). A $150 refundable damage deposit on credit card + $40 resort fee due at check-in.",
      "Security notice from Berkley Las Vegas Management: Property NEVER contacts guests via WhatsApp or SMS for payment links—only communicate via Booking.com or call +1 (702) 248-3570."
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
      "Family Seat Update (Email #1a1c8bf20f1f8222): United automatically assigned Daniel (38C Aisle) and Kayden (38B Middle) together; verify Maria's adjacent seat in the United app.",
      "⚠️ Basic Economy Bag Policy: Personal item only (9\" × 10\" × 17\" under-seat) unless MileagePlus Premier or qualifying United cardmember. Full-size carry-ons are NOT permitted at gate ($75 gate fee); check bags before security ($45–$50 1st bag).",
      "Airport Cutoff: Checked bags and boarding passes must be completed at least 45 minutes before departure (by 12:46 PM PST)."
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
    title: "Arrival Night — Bay Area to Vegas",
    theme: "Easy Transit & Airport Suite Check-In",
    items: [
      {
        id: "it-1",
        time: "5:20 PM PST",
        title: "Depart SFO on Southwest WN #2386",
        type: "confirmed",
        location: "San Francisco Int'l Airport (SFO)",
        note: "Conf #CACD5X • Daniel, Maria, Kayden + Leo. Arrive at SFO by 3:45 PM."
      },
      {
        id: "it-2",
        time: "6:55 PM PST",
        title: "Land at Harry Reid Int'l (LAS) & Call Shuttle",
        type: "confirmed",
        location: "LAS Terminal 1",
        note: "Call Homewood Suites at (702) 407-0075 for complimentary airport shuttle transfer (or 5-min Uber)."
      },
      {
        id: "it-3",
        time: "7:40 PM PST",
        title: "Check-in: Homewood Suites by Hilton Las Vegas Airport",
        type: "confirmed",
        location: "230 Hidden Well Rd, Las Vegas, NV 89119",
        note: "Expedia #73585813376033 • Studio Suite (1 King + Sofa Bed + Kitchen). Grab easy dinner/DoorDash & rest up."
      }
    ]
  },
  {
    dayId: "day-2",
    date: "Thu, Nov 26",
    isoDate: "2026-11-26",
    title: "Thanksgiving Day — Resort Move-In & Holiday Feast",
    theme: "Bridging the 11 AM → 4 PM Window + Group Thanksgiving Dinner",
    items: [
      {
        id: "it-4",
        time: "10:30 AM",
        title: "Check-out of Homewood Suites & Pick Up Rental Car",
        type: "confirmed",
        location: "230 Hidden Well Rd / LAS Rent-A-Car Center (7135 Gilespie St)",
        note: "Homewood Suites check-out is 11:00 AM. Rent-A-Car Center is 3 mins away—ideal time to pick up a minivan/SUV."
      },
      {
        id: "it-5",
        time: "11:30 AM – 2:30 PM",
        title: "Transition Gap Option A: PopStroke Town Square OR Bellagio Conservatory",
        type: "suggested",
        location: "Town Square (6617 Las Vegas Blvd S) — 4 mins from Homewood Suites",
        note: "Bridges the 11 AM–4 PM gap! PopStroke has 2 mini-golf courses, outdoor dining & kids' playground; or stroll the free Bellagio Holiday Conservatory."
      },
      {
        id: "it-6",
        time: "2:45 PM",
        title: "Grocery & Breakfast Stock-Up for the 2-Bedroom Suite",
        type: "suggested",
        location: "Trader Joe's / Whole Foods (Downtown Summerlin) or Smith's (Flamingo & Grand Canyon)",
        note: "The Cliffs at Peace Canyon has a full kitchen—stock up on coffee, milk, fruit, snacks for Kayden/Leo, and drinks for the group."
      },
      {
        id: "it-7",
        time: "4:00 PM",
        title: "Check-in: The Cliffs at Peace Canyon (4 Nights)",
        type: "confirmed",
        location: "4550 S Grand Canyon Dr, Las Vegas, NV 89147",
        note: "Booking.com #5477904180 (PIN: 1964) • Two-Bedroom Unit. Bring photo ID + credit card for $150 refundable deposit & $40 resort fee."
      },
      {
        id: "it-8",
        time: "6:00 PM",
        title: "Group Thanksgiving Dinner (Book ASAP!)",
        type: "suggested",
        location: "Summerlin (Maggiano's / JING / Durango) or Strip (Carmine's / STRIPSTEAK / Carversteak)",
        note: "See the 'Restaurants' tab for top large-group Thanksgiving prix-fixe, family-style Italian, or Chinatown Hot Pot options."
      }
    ]
  },
  {
    dayId: "day-3",
    date: "Fri, Nov 27",
    isoDate: "2026-11-27",
    title: "Black Friday — Red Rock Canyon & Enchant Christmas",
    theme: "West Vegas Desert Beauty + Summerlin Holiday Lights (10 mins from Resort)",
    items: [
      {
        id: "it-9",
        time: "9:30 AM",
        title: "Red Rock Canyon 13-Mile Scenic Drive & Visitor Center",
        type: "suggested",
        location: "1000 Scenic Loop Dr (15 mins west of The Cliffs at Peace Canyon)",
        note: "Reserve timed-entry vehicle pass ($2/reservation + $20/car on Recreation.gov). Easy stroller/toddler trails & desert tortoise habitat."
      },
      {
        id: "it-10",
        time: "1:00 PM",
        title: "Group Lunch at Durango Resort's 'Eat Your Heart Out' Food Hall",
        type: "suggested",
        location: "6915 S Durango Dr (Only 7 mins from The Cliffs at Peace Canyon!)",
        note: "Zero wait for large groups! Everyone picks from Shang Artisan Noodle, Prince Street Pizza, Irv's Burgers, Villa's Tacos, or Yu Or Mi Sushi."
      },
      {
        id: "it-11",
        time: "5:30 PM",
        title: "Enchant Christmas Light Maze & Ice Trail at Las Vegas Ballpark",
        type: "suggested",
        location: "1650 S Pavilion Center Dr, Downtown Summerlin (10 mins from resort)",
        note: "2026 Theme: 'The Great Search' — massive walk-through light maze, Santa visits, holiday village & dinner at Downtown Summerlin."
      },
      {
        id: "it-12",
        time: "8:00 PM (Optional)",
        title: "Evening Concert Option: The Eagles at Sphere OR Journey at MGM Grand",
        type: "suggested",
        location: "The Sphere / MGM Grand Garden Arena",
        note: "For adults in the group wanting a blockbuster Black Friday night concert while others relax at the 2BR condo."
      }
    ]
  },
  {
    dayId: "day-4",
    date: "Sat, Nov 28",
    isoDate: "2026-11-28",
    title: "Saturday — Immersive Vegas & Chinatown Group Feast",
    theme: "The Sphere / AREA15 + Spring Mountain Road Communal Dining",
    items: [
      {
        id: "it-13",
        time: "10:30 AM",
        title: "Morning Kid & Family Adventure: Discovery Children's Museum OR Springs Preserve",
        type: "suggested",
        location: "360 Promenade Pl / 333 S Valley View Blvd (~18 mins from resort)",
        note: "3 floors of interactive water/climbing exhibits for Kayden, or 180 acres of desert botanical trails & train rides at Springs Preserve."
      },
      {
        id: "it-14",
        time: "2:30 PM",
        title: "The Wizard of Oz at Sphere OR AREA15 / Omega Mart",
        type: "suggested",
        location: "The Sphere (255 Sands Ave) or AREA15 (3215 S Rancho Dr)",
        note: "Daytime immersive show at Sphere with haptic wind/scent effects, or explore Meow Wolf's Omega Mart."
      },
      {
        id: "it-15",
        time: "6:30 PM",
        title: "Large-Group Chinatown Feast (KBBQ, Hot Pot, or Garlic Prawns)",
        type: "suggested",
        location: "Spring Mountain Rd Corridor (14 mins from The Cliffs at Peace Canyon)",
        note: "Chubby Cattle Wagyu Hot Pot, 888 Japanese BBQ, Lotus of Siam, or Chengdu Taste—followed by drinks at The Golden Tiki."
      }
    ]
  },
  {
    dayId: "day-5",
    date: "Sun, Nov 29",
    isoDate: "2026-11-29",
    title: "Sunday — Strip Highlights & Ethel M Cactus Garden Lights",
    theme: "Classic Vegas Sights + Farewell Group Dinner",
    items: [
      {
        id: "it-16",
        time: "11:00 AM",
        title: "Sunday Group Brunch at Summer House (Durango Resort) or Mon Ami Gabi",
        type: "suggested",
        location: "Durango Resort (7 mins away) or Paris Las Vegas",
        note: "Summer House Santa Monica at Durango has sun-drenched group tables & a famous cookie bar."
      },
      {
        id: "it-17",
        time: "2:00 PM",
        title: "Shark Reef Aquarium (Mandalay Bay) or High Roller Group Cabin",
        type: "suggested",
        location: "Las Vegas Strip",
        note: "Walk-through shark tunnel & sea turtles for the kids, or a 30-minute panoramic ride on the High Roller."
      },
      {
        id: "it-18",
        time: "5:30 PM",
        title: "Ethel M Chocolates 33rd Annual Holiday Cactus Garden Lights",
        type: "suggested",
        location: "2 Cactus Garden Dr, Henderson, NV",
        note: "Free admission! Stroll 3 acres of cacti lit with 1,000,000+ holiday lights with famous hot chocolate."
      }
    ]
  },
  {
    dayId: "day-6",
    date: "Mon, Nov 30",
    isoDate: "2026-11-30",
    title: "Departure Day — Checkout & Flight Home to SFO",
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
        title: "Early Farewell Brunch / Bagel Stop & Rental Car Return",
        type: "suggested",
        location: "Bagelmania / Sadelle's / Downtown Summerlin → LAS Rent-A-Car Center",
        note: "Allow 25 mins drive to LAS Rent-A-Car Center + shuttle to Terminal 3."
      },
      {
        id: "it-21",
        time: "12:30 PM (Cutoff 12:46 PM)",
        title: "United Bag Drop Cutoff (45m prior) at LAS Terminal 3",
        type: "confirmed",
        location: "LAS Terminal 3",
        note: "Conf #L29ERJ • Remember Basic Economy carry-on restriction (personal item 9\"x10\"x17\" only unless checking before security)."
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
    dates: "Open Nightly Nov 20 – Dec 27, 2026 (Including Nov 25–30)",
    venue: "Las Vegas Ballpark (Downtown Summerlin)",
    driveFromResort: "10 mins (4.7 mi)",
    category: "Holiday & Family",
    price: "$35–$48 Adult / Kids & Family Packs Available",
    tags: ["10 Mins from Resort", "All Ages", "Must-Do Holiday Event"],
    description: "Right in your backyard in Summerlin! The Las Vegas Ballpark transforms into the world's largest Christmas light maze ('The Great Search' 2026 story), complete with a real ice-skating trail, Santa's Landing, live music, and an artisan village.",
    url: "https://enchantchristmas.com/"
  },
  {
    id: "evt-sphere-oz",
    title: "The Wizard of Oz — Immersive Experience at Sphere",
    dates: "Daily Matinee & Early Evening Showtimes (Nov 25–30, 2026)",
    venue: "Sphere Las Vegas (255 Sands Ave)",
    driveFromResort: "20 mins (10.3 mi)",
    category: "Immersive & Family",
    price: "From $79–$149",
    tags: ["All Ages", "Sphere Tech", "Daytime Friendly"],
    description: "Experience the 160,000 sq ft 16K wraparound LED screen at Sphere with custom haptic seats, wind effects during the tornado, and synchronized scents.",
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
    dates: "Nightly Nov 6, 2026 – Jan 3, 2027 (Starts at Dusk)",
    venue: "Las Vegas Motor Speedway",
    driveFromResort: "32 mins",
    category: "Holiday & Family",
    price: "$39 per vehicle (Whole carload!)",
    tags: ["Stay in Warm Car", "Great with Infant/Toddler"],
    description: "Nevada's largest drive-thru holiday light show spanning 2.5+ miles with 5 million LED lights. Perfect if Kayden and Leo are sleepy—everyone stays cozy in the SUV/minivan!",
    url: "https://glitteringlightslasvegas.com/"
  },
  {
    id: "evt-cirque-mystere",
    title: "Cirque du Soleil: 'Mystère' (Treasure Island) or 'O' (Bellagio)",
    dates: "Evening Performances (7:00 PM & 9:30 PM)",
    venue: "Treasure Island / Bellagio",
    driveFromResort: "18 mins",
    category: "Strip Production",
    price: "From $69 (Mystère) / $129 ('O')",
    tags: ["Family Friendly", "Classic Vegas"],
    description: "Mystère is Cirque du Soleil's most family- and kid-friendly show with high-energy acrobatics and physical comedy, while 'O' at Bellagio is an aquatic masterpiece.",
    url: "https://www.cirquedusoleil.com/las-vegas"
  }
];

export const ACTIVITIES = [
  {
    id: "act-red-rock",
    title: "Red Rock Canyon National Conservation Area",
    zone: "West Vegas / Summerlin",
    driveFromResort: "15 mins (8.2 mi)",
    duration: "2–3 hours",
    bestFor: "Whole Group (Scenic Drive + Easy Trails)",
    kidFriendly: true,
    tags: ["15 Mins from Resort", "Must-Do Outdoors", "Stroller Friendly Visitor Center"],
    description: "Towering crimson Aztec sandstone cliffs right up the road from The Cliffs at Peace Canyon. Drive the 13-mile one-way Scenic Loop stopping at Calico Hills, High Point Overlook, and the Petroglyph Wall trail (flat 0.2-mile walk great for kids).",
    proTip: "Timed entry reservations are required between 8:00 AM and 5:00 PM (Oct 1 – May 31) on Recreation.gov ($2 reservation fee + $20/vehicle, or free with America the Beautiful Pass).",
    url: "https://www.recreation.gov/timed-entry/10075177"
  },
  {
    id: "act-downtown-summerlin",
    title: "Downtown Summerlin & Rock Rink Ice Skating",
    zone: "West Vegas / Summerlin",
    driveFromResort: "10 mins (4.7 mi)",
    duration: "2–4 hours",
    bestFor: "Shopping, Dining, Holiday Parade & Skating",
    kidFriendly: true,
    tags: ["10 Mins from Resort", "Stroller Friendly", "Holiday Parade"],
    description: "Open-air walkable lifestyle district featuring 125+ shops, Trader Joe's, outdoor fire pits, the seasonal Rock Rink outdoor ice skating pavilion, and a free Friday/Saturday evening Holiday Parade at 6:00 PM!",
    proTip: "Check out the free Holiday Parade on Friday & Saturday evenings—kids love the snow machines and floats!",
    url: "https://summerlin.com/downtown-summerlin/"
  },
  {
    id: "act-popstroke",
    title: "PopStroke Las Vegas at Town Square",
    zone: "South Strip / Airport",
    driveFromResort: "16 mins (4 mins from Homewood Suites!)",
    duration: "2 hours",
    bestFor: "All-Ages Group Competition + Thu Nov 26 Check-Out Gap",
    kidFriendly: true,
    tags: ["4 Mins from Night 1 Hotel", "Large Group Fun", "Kids Playground On-Site"],
    description: "Tiger Woods-backed two-course synthetic turf putting complex with an on-site open-air restaurant, craft beer/cocktail delivery right to the greens, an enclosed kids' playground, and gourmet ice cream.",
    proTip: "Located just 4 minutes from Homewood Suites Las Vegas Airport—the #1 way to spend Thursday, Nov 26 between 11:00 AM check-out and 4:00 PM check-in!",
    url: "https://popstroke.com/venues/las-vegas/"
  },
  {
    id: "act-area15",
    title: "AREA15 & Meow Wolf's Omega Mart",
    zone: "Off-Strip West",
    driveFromResort: "15 mins (8.1 mi)",
    duration: "2.5–3.5 hours",
    bestFor: "Immersive Art, Interactive Tech & Group Exploration",
    kidFriendly: true,
    tags: ["Indoor All-Weather", "All Ages Daytime", "Mind-Bending"],
    description: "Massive indoor experiential complex featuring Meow Wolf's Omega Mart (a surreal supermarket hiding secret slides and portals into alternate dimensions), Illuminarium, Wink World, and LIFTOFF panoramic ride.",
    proTip: "Go before 4:00 PM for the best family-friendly atmosphere; book Omega Mart tickets online in advance.",
    url: "https://area15.com/"
  },
  {
    id: "act-discovery-museum",
    title: "Discovery Children's Museum (Symphony Park)",
    zone: "Downtown / Symphony Park",
    driveFromResort: "18 mins (10.5 mi)",
    duration: "2–3 hours",
    bestFor: "Kayden & Leo + Parents/Grandparents",
    kidFriendly: true,
    tags: ["Best for Toddlers/Kids", "3 Floors Hands-On", "Indoor"],
    description: "58,000-square-foot, three-story interactive children's museum featuring a 70-foot climbing tower ('The Summit'), Water World splash zone (with waterproof smocks!), Toddler Town, and EcoCity.",
    proTip: "Located right next to Las Vegas North Premium Outlets if part of the group wants to shop Black Friday deals while the others take the kids to the museum!",
    url: "https://www.discoverykidslv.org/"
  },
  {
    id: "act-springs-preserve",
    title: "Springs Preserve & Nevada State Museum",
    zone: "West / Central Valley",
    driveFromResort: "15 mins (7.8 mi)",
    duration: "2–3 hours",
    bestFor: "Multi-Generational Stroll, Botanical Gardens & Train Rides",
    kidFriendly: true,
    tags: ["180 Acres", "Desert Wildlife", "Stroller Friendly"],
    description: "The birthplace of Las Vegas—180 acres of desert botanical gardens, live animal exhibits (foxes, gila monsters, tortoises), Boomtown 1905 historical streetscape, and interactive museum halls.",
    proTip: "Flat paved paths make it effortless with a stroller for Leo and plenty of space for Kayden to run.",
    url: "https://www.springspreserve.org/"
  },
  {
    id: "act-shark-reef",
    title: "Shark Reef Aquarium at Mandalay Bay",
    zone: "The Strip",
    driveFromResort: "19 mins (10.2 mi)",
    duration: "1.5 hours",
    bestFor: "All Ages Underwater Walk-Through Tunnel",
    kidFriendly: true,
    tags: ["Kid Favorite", "100+ Sharks & Rays", "Easy Strip Stop"],
    description: "1.3-million-gallon aquarium featuring a 360-degree acrylic shipwreck tunnel with sharks, giant sea turtles, sawfish, Komodo dragons, and a stingray touch pool.",
    proTip: "Timed-entry tickets include access to the Undersea Explorer VR theater.",
    url: "https://mandalaybay.mgmresorts.com/en/entertainment/shark-reef-aquarium.html"
  },
  {
    id: "act-topgolf",
    title: "Topgolf Las Vegas (Behind MGM Grand)",
    zone: "The Strip",
    driveFromResort: "20 mins (10.4 mi)",
    duration: "2 hours",
    bestFor: "Large Group Bay Rental (Adjacent Bays for 8–12+)",
    kidFriendly: true,
    tags: ["Heated Bays", "Food & Drinks at Bay", "All Skill Levels"],
    description: "Four-level entertainment venue with climate-controlled hitting bays, microchipped golf balls, giant HDTVs for Thanksgiving NFL games, and full food/beverage service.",
    proTip: "Reserve 2 adjacent bays in advance so up to 12 people in your group can play and hang out together.",
    url: "https://topgolf.com/us/las-vegas/"
  },
  {
    id: "act-neon-pinball",
    title: "Pinball Hall of Fame & Welcome to Fabulous Las Vegas Sign",
    zone: "South Strip",
    driveFromResort: "18 mins (9.6 mi)",
    duration: "1–1.5 hours",
    bestFor: "Nostalgic Quarter-Play & Group Photo Op",
    kidFriendly: true,
    tags: ["Free Entry", "Right Across from Vegas Sign", "Retro Fun"],
    description: "25,000-square-foot nonprofit museum housing hundreds of playable vintage and modern pinball & arcade machines from the 1950s to today (25¢–$1 per play), right across from the iconic Welcome to Las Vegas sign.",
    proTip: "Free admission and free parking—bring a roll of quarters or cash for the change machines!",
    url: "http://www.pinballhall.org/"
  }
];

export const DEFAULT_CHECKLIST = [
  {
    id: "chk-1",
    category: "Urgent Bookings",
    text: "Book Group Thanksgiving Dinner for Thursday, Nov 26 (Maggiano's Summerlin, Carmine's, STRIPSTEAK, or Summer House Durango)",
    done: false
  },
  {
    id: "chk-2",
    category: "Urgent Bookings",
    text: "Reserve Rental Car / Minivan / 3-Row SUV for Thu Nov 26 – Mon Nov 30 (The Cliffs at Peace Canyon is 25 mins west of the Strip/LAS)",
    done: false
  },
  {
    id: "chk-3",
    category: "Urgent Bookings",
    text: "Book Red Rock Canyon timed-entry vehicle pass on Recreation.gov ($2) for Friday, Nov 27 or Saturday, Nov 28",
    done: false
  },
  {
    id: "chk-4",
    category: "Flight Prep",
    text: "Set alarm for Tue, Nov 24 at 5:20 PM PST: Check in for Southwest Flight WN #2386 (Conf #CACD5X)",
    done: false
  },
  {
    id: "chk-5",
    category: "Flight Prep",
    text: "Verify Maria's seat assignment on United Flight UA 1799 (Conf #L29ERJ) next to Daniel (38C) & Kayden (38B)",
    done: false
  },
  {
    id: "chk-6",
    category: "Flight Prep",
    text: "Check United Basic Economy bag sizes for Mon Nov 30 return (9\"×10\"×17\" personal item rule; pre-pay checked bag if bringing roller bags)",
    done: false
  },
  {
    id: "chk-7",
    category: "Hotel & Resort",
    text: "Call Homewood Suites (702-407-0075) upon landing at LAS (Wed Nov 25, 6:55 PM) for complimentary airport shuttle",
    done: false
  },
  {
    id: "chk-8",
    category: "Hotel & Resort",
    text: "Bring physical credit card + photo ID for The Cliffs at Peace Canyon check-in (Thu Nov 26, 4:00 PM; $150 refundable deposit + $40 resort fee)",
    done: false
  },
  {
    id: "chk-9",
    category: "Kids & Packing",
    text: "Pack car seats + stroller for Kayden & Leo (plus digital birth certificate / lap-child verification for Leo)",
    done: false
  },
  {
    id: "chk-10",
    category: "Kids & Packing",
    text: "Pack warm jackets, beanies & layers for 42°F desert nights (Enchant Christmas / Ethel M Cactus Garden)",
    done: false
  }
];
