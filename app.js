import {
  TRIP_META,
  CONFIRMED_BOOKINGS,
  EMAIL_COMMS,
  ITINERARY_DAYS,
  RESTAURANTS,
  EVENTS,
  ACTIVITIES,
  DEFAULT_CHECKLIST
} from "./data.js";

const STORAGE_KEYS = {
  favorites: "vegas2026_favorites_v1",
  checklist: "vegas2026_checklist_v1",
  customPlans: "vegas2026_custom_plans_v1",
  theme: "vegas2026_theme_v1"
};

let favorites = new Set(JSON.parse(localStorage.getItem(STORAGE_KEYS.favorites) || "[]"));
let checklist = JSON.parse(localStorage.getItem(STORAGE_KEYS.checklist) || "null") || structuredClone(DEFAULT_CHECKLIST);
let customPlans = JSON.parse(localStorage.getItem(STORAGE_KEYS.customPlans) || "{}");
let deferredInstallPrompt = null;

function saveFavorites() {
  localStorage.setItem(STORAGE_KEYS.favorites, JSON.stringify([...favorites]));
}

function saveChecklist() {
  localStorage.setItem(STORAGE_KEYS.checklist, JSON.stringify(checklist));
}

function saveCustomPlans() {
  localStorage.setItem(STORAGE_KEYS.customPlans, JSON.stringify(customPlans));
}

function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = message;
  toast.hidden = false;
  clearTimeout(showToast._timer);
  showToast._timer = setTimeout(() => {
    toast.hidden = true;
  }, 2600);
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str ?? "";
  return div.innerHTML;
}

/* --- Progressive Enhancement & Modern Web Guidance Fallbacks --- */
async function initModernWebEnhancements() {
  // 1. Focusgroup polyfill when native support is missing
  if (!Object.hasOwn(HTMLElement.prototype, "focusGroup")) {
    try {
      const { polyfill } = await import("https://esm.sh/@microsoft/focusgroup-polyfill");
      if (typeof polyfill === "function") polyfill();
    } catch {
      // Offline graceful degradation
    }
  }

  // 2. Scroll-driven animation fallback for tablist edge fades
  if (!CSS.supports("animation-timeline", "scroll()")) {
    for (const scroller of document.querySelectorAll(".tablist-scroller")) {
      const first = scroller.firstElementChild;
      const last = scroller.lastElementChild;
      if (!first || !last) continue;
      const observer = new IntersectionObserver(
        (entries) => {
          for (const { target, intersectionRatio } of entries) {
            scroller.classList.toggle(
              target === first ? "more-start" : "more-end",
              intersectionRatio < 1
            );
          }
        },
        { root: scroller, threshold: 1, rootMargin: "1px" }
      );
      observer.observe(first);
      observer.observe(last);
    }
  }

  // 3. Dialog closedby="any" light-dismiss fallback where native closedBy is missing
  if (!("closedBy" in HTMLDialogElement.prototype)) {
    const outside = (e, dialog) => {
      const r = dialog.getBoundingClientRect();
      return e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom;
    };
    for (const dialog of document.querySelectorAll('dialog[closedby="any"]')) {
      let pressedOutside = false;
      dialog.addEventListener("pointerdown", (e) => {
        pressedOutside = outside(e, dialog);
      });
      dialog.addEventListener("pointerup", (e) => {
        if (pressedOutside && outside(e, dialog)) dialog.close();
      });
    }
  }
}

/* --- Tablist Selection & Find-in-Page Sync --- */
function initTabs() {
  const tablist = document.querySelector('[focusgroup~="tablist"]');
  if (!tablist) return;
  const tabs = [...tablist.querySelectorAll('button[type="button"]')];
  const panels = tabs.map((tab) => document.querySelector(`[aria-labelledby="${tab.id}"]`));

  function selectTab(selectedTab, scrollIntoView = true) {
    for (let i = 0; i < tabs.length; i++) {
      const tab = tabs[i];
      const panel = panels[i];
      const isSelected = tab === selectedTab;
      tab.ariaSelected = String(isSelected);
      tab.toggleAttribute("focusgroupstart", isSelected);
      if (panel) {
        if (isSelected) {
          panel.removeAttribute("hidden");
        } else {
          panel.setAttribute("hidden", "until-found");
        }
      }
    }
    if (scrollIntoView) {
      selectedTab.scrollIntoView({ block: "nearest", inline: "nearest", container: "nearest" });
    }
  }

  for (let i = 0; i < tabs.length; i++) {
    const tab = tabs[i];
    const panel = panels[i];
    tab.addEventListener("click", () => selectTab(tab));
    tab.addEventListener("focus", () => selectTab(tab));
    if (panel) {
      panel.addEventListener("beforematch", () => selectTab(tab, true));
    }
  }
}

/* --- Countdown Timer --- */
function updateCountdown() {
  const el = document.getElementById("countdown-value");
  const metaEl = document.getElementById("countdown-meta");
  if (!el || !metaEl) return;

  const now = new Date();
  const dep = new Date(TRIP_META.departureIso);
  const ret = new Date(TRIP_META.returnIso);

  if (now < dep) {
    const diffMs = dep - now;
    const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diffMs / (1000 * 60 * 60)) % 24);
    el.textContent = `${days}d ${hours}h until takeoff`;
    metaEl.textContent = "Southwest WN #2386 • Wed, Nov 25 @ 5:20 PM";
  } else if (now <= ret) {
    el.textContent = "Live in Las Vegas! 🎲";
    metaEl.textContent = "Enjoy Thanksgiving Week!";
  } else {
    el.textContent = "Trip Completed ✨";
    metaEl.textContent = "Nov 25 – Nov 30, 2026";
  }
}

/* --- Render Confirmed Bookings --- */
function renderBookings() {
  const container = document.getElementById("bookings-grid");
  if (!container) return;

  container.innerHTML = CONFIRMED_BOOKINGS.map((b) => {
    const badgeClass =
      b.type === "flight" ? "badge-teal" : b.type === "resort" ? "badge-accent" : "badge-emerald";

    const codeDisplay = b.isSecretPin
      ? `<span id="pin-val-${b.id}" data-pin="${escapeHtml(b.secondaryCode)}">••••</span>
         <button type="button" class="btn btn-sm" data-toggle-pin="${b.id}">Show PIN</button>`
      : `<span class="code-val">${escapeHtml(b.secondaryCode)}</span>`;

    return `
      <article class="card">
        <header>
          <div class="card-badges">
            <span class="badge ${badgeClass}">${escapeHtml(b.badge)}</span>
            <span class="badge badge-emerald">${escapeHtml(b.status)}</span>
          </div>
          <h3>${escapeHtml(b.title)}</h3>
          <p class="stat-meta">${escapeHtml(b.subtitle)}</p>
        </header>
        <div class="card-content">
          <div class="code-strip">
            <div class="code-block">
              <span class="code-label">Confirmation #</span>
              <span class="code-val">${escapeHtml(b.confirmationCode)}</span>
            </div>
            <div class="code-block">
              <span class="code-label">${escapeHtml(b.secondaryCodeLabel)}</span>
              ${codeDisplay}
            </div>
          </div>
          <p><strong>Location:</strong> ${escapeHtml(b.location)}</p>
          <p><strong>Payment / Rate:</strong> ${escapeHtml(b.priceSummary)}</p>
          <ul class="passenger-list">
            ${b.passengers
              .map(
                (p) =>
                  `<li><strong>${escapeHtml(p.name)}</strong> — ${escapeHtml(p.ticket)} (${escapeHtml(p.seat)})</li>`
              )
              .join("")}
          </ul>
          <ul class="highlight-list">
            ${b.highlights.map((h) => `<li>${escapeHtml(h)}</li>`).join("")}
          </ul>
        </div>
        <footer>
          <button type="button" class="btn btn-sm" data-copy="${escapeHtml(b.confirmationCode)}">
            📋 Copy #${escapeHtml(b.confirmationCode)}
          </button>
          <div style="display:flex; gap:0.4rem; flex-wrap:wrap;">
            ${
              b.mapsUrl
                ? `<a class="btn btn-sm" href="${escapeHtml(b.mapsUrl)}" target="_blank" rel="noopener">📍 Map</a>`
                : ""
            }
            <button type="button" class="btn btn-sm" data-ics="${escapeHtml(b.id)}">📅 Add to Calendar</button>
          </div>
        </footer>
      </article>
    `;
  }).join("");

  // Travelers Roster
  const rosterEl = document.getElementById("travelers-roster");
  if (rosterEl) {
    rosterEl.innerHTML = TRIP_META.travelers
      .map(
        (t) => `
      <article class="card">
        <header>
          <div class="card-badges">
            <span class="badge badge-accent">${escapeHtml(t.role)}</span>
          </div>
          <h3>${escapeHtml(t.name)}</h3>
        </header>
        <div class="card-content">
          ${t.email ? `<p class="stat-meta">✉️ ${escapeHtml(t.email)}</p>` : ""}
          <div class="card-badges">
            ${t.tags.map((tag) => `<span class="badge">${escapeHtml(tag)}</span>`).join("")}
          </div>
        </div>
      </article>
    `
      )
      .join("");
  }
}

/* --- Render Day-by-Day Itinerary --- */
function renderItinerary() {
  const container = document.getElementById("itinerary-container");
  if (!container) return;

  container.innerHTML = ITINERARY_DAYS.map((day) => {
    const extraItems = customPlans[day.dayId] || [];
    const allItems = [...day.items, ...extraItems];

    return `
      <section class="day-card" aria-labelledby="heading-${day.dayId}">
        <div class="day-header">
          <div>
            <span class="badge badge-accent">${escapeHtml(day.date)}</span>
            <h3 id="heading-${day.dayId}" style="margin-top:0.3rem;">${escapeHtml(day.title)}</h3>
            <p class="stat-meta" style="margin:0.15rem 0 0;">${escapeHtml(day.theme)}</p>
          </div>
          <button type="button" class="btn btn-sm" data-add-plan="${escapeHtml(day.dayId)}">
            + Add Plan to ${escapeHtml(day.date)}
          </button>
        </div>
        <ul class="timeline-list">
          ${allItems
            .map(
              (item) => `
            <li class="timeline-item" data-type="${escapeHtml(item.type)}">
              <div class="timeline-time">${escapeHtml(item.time)}</div>
              <div>
                <strong>${escapeHtml(item.title)}</strong>
                <div class="stat-meta">📍 ${escapeHtml(item.location)}</div>
                <p style="margin:0.25rem 0 0; font-size:0.88rem;">${escapeHtml(item.note)}</p>
              </div>
              <div style="display:flex; gap:0.35rem; align-items:center;">
                <span class="badge ${
                  item.type === "confirmed"
                    ? "badge-emerald"
                    : item.type === "custom"
                      ? "badge-teal"
                      : "badge-accent"
                }">
                  ${item.type === "confirmed" ? "Booked" : item.type === "custom" ? "Group Plan" : "Suggested"}
                </span>
                ${
                  item.type === "custom"
                    ? `<button type="button" class="btn btn-sm" data-delete-plan="${escapeHtml(day.dayId)}:${escapeHtml(item.id)}" aria-label="Remove plan">✕</button>`
                    : ""
                }
              </div>
            </li>
          `
            )
            .join("")}
        </ul>
      </section>
    `;
  }).join("");
}

/* --- Render Restaurants Explorer --- */
let restFilterZone = "all";
let restOnlyThanksgiving = false;
let restOnlyKidFriendly = false;
let restOnlyFavorites = false;
let restSearchQuery = "";

function renderRestaurants() {
  const container = document.getElementById("restaurants-grid");
  if (!container) return;

  const filtered = RESTAURANTS.filter((r) => {
    if (restFilterZone !== "all" && r.zone !== restFilterZone) return false;
    if (restOnlyThanksgiving && !r.thanksgivingOpen) return false;
    if (restOnlyKidFriendly && !r.kidFriendly) return false;
    if (restOnlyFavorites && !favorites.has(r.id)) return false;
    if (restSearchQuery) {
      const q = restSearchQuery.toLowerCase();
      const hay = `${r.name} ${r.cuisine} ${r.zone} ${r.description} ${r.mustOrder} ${r.tags.join(" ")}`.toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });

  if (filtered.length === 0) {
    container.innerHTML = `<p class="stat-meta">No restaurants match the current filters. Try clearing a filter chip above.</p>`;
    return;
  }

  container.innerHTML = filtered
    .map((r) => {
      const isFav = favorites.has(r.id);
      return `
      <article class="card">
        <header>
          <div class="card-badges">
            <span class="badge badge-accent">${escapeHtml(r.zone)}</span>
            <span class="badge badge-teal">🚗 ${escapeHtml(r.driveFromResort)}</span>
            <span class="badge">${escapeHtml(r.price)}</span>
            ${r.thanksgivingOpen ? `<span class="badge badge-emerald">🦃 Thanksgiving Open</span>` : ""}
          </div>
          <h3>${escapeHtml(r.name)}</h3>
          <p class="stat-meta">${escapeHtml(r.cuisine)}</p>
        </header>
        <div class="card-content">
          <p>${escapeHtml(r.description)}</p>
          <p><strong>👥 Group Seating:</strong> ${escapeHtml(r.groupCapacity)}</p>
          <p><strong>🍽️ Must-Order:</strong> ${escapeHtml(r.mustOrder)}</p>
          <p><strong>💡 Pro Tip:</strong> ${escapeHtml(r.bookingTip)}</p>
        </div>
        <footer>
          <button type="button" class="btn btn-sm" data-fav="${escapeHtml(r.id)}" aria-pressed="${isFav}">
            ${isFav ? "★ Saved for Group" : "☆ Save for Group"}
          </button>
          <a class="btn btn-sm" href="${escapeHtml(r.url)}" target="_blank" rel="noopener">
            Website / Menu ↗
          </a>
        </footer>
      </article>
    `;
    })
    .join("");
}

/* --- Render Events & Activities --- */
let eventCategoryFilter = "all";

function renderEventsAndActivities() {
  const eventsGrid = document.getElementById("events-grid");
  const activitiesGrid = document.getElementById("activities-grid");

  if (eventsGrid) {
    const filteredEvents = EVENTS.filter(
      (e) => eventCategoryFilter === "all" || e.category === eventCategoryFilter
    );
    eventsGrid.innerHTML = filteredEvents
      .map((e) => {
        const isFav = favorites.has(e.id);
        return `
        <article class="card">
          <header>
            <div class="card-badges">
              <span class="badge badge-accent">${escapeHtml(e.category)}</span>
              <span class="badge badge-teal">🚗 ${escapeHtml(e.driveFromResort)}</span>
            </div>
            <h3>${escapeHtml(e.title)}</h3>
            <p class="stat-meta">🗓️ ${escapeHtml(e.dates)} • 📍 ${escapeHtml(e.venue)}</p>
          </header>
          <div class="card-content">
            <p>${escapeHtml(e.description)}</p>
            <p><strong>🎟️ Tickets / Pricing:</strong> ${escapeHtml(e.price)}</p>
            <div class="card-badges">
              ${e.tags.map((t) => `<span class="badge">${escapeHtml(t)}</span>`).join("")}
            </div>
          </div>
          <footer>
            <button type="button" class="btn btn-sm" data-fav="${escapeHtml(e.id)}" aria-pressed="${isFav}">
              ${isFav ? "★ Saved" : "☆ Save"}
            </button>
            <a class="btn btn-sm" href="${escapeHtml(e.url)}" target="_blank" rel="noopener">
              Event Info ↗
            </a>
          </footer>
        </article>
      `;
      })
      .join("");
  }

  if (activitiesGrid) {
    activitiesGrid.innerHTML = ACTIVITIES.map((a) => {
      const isFav = favorites.has(a.id);
      return `
        <article class="card">
          <header>
            <div class="card-badges">
              <span class="badge badge-emerald">${escapeHtml(a.zone)}</span>
              <span class="badge badge-teal">🚗 ${escapeHtml(a.driveFromResort)}</span>
              <span class="badge">⏱️ ${escapeHtml(a.duration)}</span>
            </div>
            <h3>${escapeHtml(a.title)}</h3>
            <p class="stat-meta">Best for: ${escapeHtml(a.bestFor)}</p>
          </header>
          <div class="card-content">
            <p>${escapeHtml(a.description)}</p>
            <p><strong>💡 Group Tip:</strong> ${escapeHtml(a.proTip)}</p>
          </div>
          <footer>
            <button type="button" class="btn btn-sm" data-fav="${escapeHtml(a.id)}" aria-pressed="${isFav}">
              ${isFav ? "★ Saved" : "☆ Save"}
            </button>
            <a class="btn btn-sm" href="${escapeHtml(a.url)}" target="_blank" rel="noopener">
              Explore ↗
            </a>
          </footer>
        </article>
      `;
    }).join("");
  }
}

/* --- Render Checklist --- */
function renderChecklist() {
  const container = document.getElementById("checklist-container");
  const progressEl = document.getElementById("checklist-progress");
  if (!container) return;

  const doneCount = checklist.filter((c) => c.done).length;
  if (progressEl) {
    progressEl.textContent = `${doneCount} of ${checklist.length} completed`;
  }

  container.innerHTML = checklist
    .map(
      (item) => `
      <label class="check-item">
        <input type="checkbox" data-check-id="${escapeHtml(item.id)}" ${item.done ? "checked" : ""}>
        <div>
          <span class="badge badge-accent" style="margin-bottom:0.25rem;">${escapeHtml(item.category)}</span>
          <div class="check-text">${escapeHtml(item.text)}</div>
        </div>
      </label>
    `
    )
    .join("");
}

/* --- Render Email Audit Log --- */
function renderEmailLog() {
  const container = document.getElementById("emails-grid");
  if (!container) return;

  container.innerHTML = EMAIL_COMMS.map(
    (m) => `
    <article class="card">
      <header>
        <div class="card-badges">
          <span class="badge badge-teal">${escapeHtml(m.category)}</span>
          <span class="badge">${escapeHtml(m.date)}</span>
        </div>
        <h3>${escapeHtml(m.subject)}</h3>
        <p class="stat-meta">From: ${escapeHtml(m.from)} → To: ${escapeHtml(m.to)}</p>
      </header>
      <div class="card-content">
        <p>${escapeHtml(m.summary)}</p>
      </div>
      <footer>
        <span class="stat-meta" style="font-family:var(--font-mono);">Gmail ID: ${escapeHtml(m.id)}</span>
        <button type="button" class="btn btn-sm" data-copy="${escapeHtml(m.id)}">Copy ID</button>
      </footer>
    </article>
  `
  ).join("");
}

/* --- Calendar (.ics) Export --- */
function downloadIcs(events, filename = "vegas-thanksgiving-2026.ics") {
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Geri Family Vegas 2026 PWA//EN",
    "CALSCALE:GREGORIAN"
  ];

  for (const ev of events) {
    lines.push(
      "BEGIN:VEVENT",
      `UID:${ev.start}-${Math.random().toString(36).slice(2)}@vegas2026`,
      `DTSTAMP:20261111T150000Z`,
      `DTSTART;TZID=America/Los_Angeles:${ev.start}`,
      `DTEND;TZID=America/Los_Angeles:${ev.end}`,
      `SUMMARY:${ev.title}`,
      `LOCATION:${ev.location}`,
      `DESCRIPTION:${ev.description}`,
      "END:VEVENT"
    );
  }

  lines.push("END:VCALENDAR");
  const blob = new Blob([lines.join("\r\n")], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
  showToast(`Downloaded ${filename}`);
}

/* --- Global Event Delegation --- */
function setupInteractions() {
  document.addEventListener("click", async (e) => {
    const copyBtn = e.target.closest("[data-copy]");
    if (copyBtn) {
      const text = copyBtn.getAttribute("data-copy");
      try {
        await navigator.clipboard.writeText(text);
        showToast(`Copied "${text}" to clipboard`);
      } catch {
        showToast(`Code: ${text}`);
      }
      return;
    }

    const pinBtn = e.target.closest("[data-toggle-pin]");
    if (pinBtn) {
      const id = pinBtn.getAttribute("data-toggle-pin");
      const valEl = document.getElementById(`pin-val-${id}`);
      if (valEl) {
        const revealed = valEl.textContent !== "••••";
        valEl.textContent = revealed ? "••••" : valEl.getAttribute("data-pin");
        pinBtn.textContent = revealed ? "Show PIN" : "Hide PIN";
      }
      return;
    }

    const icsBtn = e.target.closest("[data-ics]");
    if (icsBtn) {
      const id = icsBtn.getAttribute("data-ics");
      const booking = CONFIRMED_BOOKINGS.find((b) => b.id === id);
      if (booking?.icsEvent) {
        downloadIcs([booking.icsEvent], `${booking.id}.ics`);
      }
      return;
    }

    const favBtn = e.target.closest("[data-fav]");
    if (favBtn) {
      const id = favBtn.getAttribute("data-fav");
      if (favorites.has(id)) {
        favorites.delete(id);
        showToast("Removed from saved group picks");
      } else {
        favorites.add(id);
        showToast("Saved to group picks ★");
      }
      saveFavorites();
      renderRestaurants();
      renderEventsAndActivities();
      return;
    }

    const addPlanBtn = e.target.closest("[data-add-plan]");
    if (addPlanBtn) {
      const dayId = addPlanBtn.getAttribute("data-add-plan");
      const dialog = document.getElementById("add-plan-dialog");
      const daySelect = document.getElementById("plan-day-input");
      if (daySelect) daySelect.value = dayId;
      if (dialog) dialog.showModal();
      return;
    }

    const delPlanBtn = e.target.closest("[data-delete-plan]");
    if (delPlanBtn) {
      const [dayId, itemId] = delPlanBtn.getAttribute("data-delete-plan").split(":");
      if (customPlans[dayId]) {
        customPlans[dayId] = customPlans[dayId].filter((x) => x.id !== itemId);
        saveCustomPlans();
        renderItinerary();
        showToast("Removed custom plan");
      }
      return;
    }
  });

  // Checklist toggle
  document.addEventListener("change", (e) => {
    const chk = e.target.closest("[data-check-id]");
    if (chk) {
      const id = chk.getAttribute("data-check-id");
      const item = checklist.find((c) => c.id === id);
      if (item) {
        item.done = chk.checked;
        saveChecklist();
        renderChecklist();
      }
    }
  });

  // Restaurant filter controls
  const zoneSelect = document.getElementById("rest-zone-select");
  if (zoneSelect) {
    zoneSelect.addEventListener("change", () => {
      restFilterZone = zoneSelect.value;
      renderRestaurants();
    });
  }

  const searchInput = document.getElementById("rest-search-input");
  if (searchInput) {
    searchInput.addEventListener("input", () => {
      restSearchQuery = searchInput.value.trim();
      renderRestaurants();
    });
  }

  for (const chipId of ["chip-thanksgiving", "chip-kids", "chip-favs"]) {
    const chip = document.getElementById(chipId);
    if (!chip) continue;
    chip.addEventListener("click", () => {
      const next = chip.getAttribute("aria-pressed") !== "true";
      chip.setAttribute("aria-pressed", String(next));
      if (chipId === "chip-thanksgiving") restOnlyThanksgiving = next;
      if (chipId === "chip-kids") restOnlyKidFriendly = next;
      if (chipId === "chip-favs") restOnlyFavorites = next;
      renderRestaurants();
    });
  }

  // Event category filter
  const evtSelect = document.getElementById("event-cat-select");
  if (evtSelect) {
    evtSelect.addEventListener("change", () => {
      eventCategoryFilter = evtSelect.value;
      renderEventsAndActivities();
    });
  }

  // Export all bookings to Calendar
  const exportAllBtn = document.getElementById("export-all-ics-btn");
  if (exportAllBtn) {
    exportAllBtn.addEventListener("click", () => {
      const events = CONFIRMED_BOOKINGS.map((b) => b.icsEvent).filter(Boolean);
      downloadIcs(events, "vegas-thanksgiving-2026-all.ics");
    });
  }

  // Add Custom Itinerary Plan Form
  const addPlanForm = document.getElementById("add-plan-form");
  const addPlanDialog = document.getElementById("add-plan-dialog");
  if (addPlanForm && addPlanDialog) {
    addPlanForm.addEventListener("submit", (e) => {
      const submitter = e.submitter;
      if (submitter && submitter.value === "cancel") return;
      const dayId = document.getElementById("plan-day-input").value;
      const time = document.getElementById("plan-time-input").value.trim() || "TBD";
      const title = document.getElementById("plan-title-input").value.trim();
      const location = document.getElementById("plan-loc-input").value.trim() || "Las Vegas";
      const note = document.getElementById("plan-note-input").value.trim();
      if (!title) return;
      if (!customPlans[dayId]) customPlans[dayId] = [];
      customPlans[dayId].push({
        id: `cust-${Date.now()}`,
        time,
        title,
        location,
        note,
        type: "custom"
      });
      saveCustomPlans();
      renderItinerary();
      addPlanForm.reset();
      showToast("Added to group itinerary!");
    });
    addPlanDialog.addEventListener("close", () => {
      addPlanDialog.returnValue = "";
    });
  }

  // Add Custom Checklist Task
  const addCheckForm = document.getElementById("add-check-form");
  if (addCheckForm) {
    addCheckForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = document.getElementById("new-check-input");
      const text = input?.value.trim();
      if (!text) return;
      checklist.unshift({
        id: `chk-${Date.now()}`,
        category: "Custom Task",
        text,
        done: false
      });
      saveChecklist();
      renderChecklist();
      input.value = "";
      showToast("Added task to checklist");
    });
  }

  // Theme Toggle
  const themeBtn = document.getElementById("theme-toggle-btn");
  const savedTheme = localStorage.getItem(STORAGE_KEYS.theme) || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme") || "dark";
      const next = current === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem(STORAGE_KEYS.theme, next);
    });
  }

  // PWA Install Prompt
  const installBtn = document.getElementById("install-pwa-btn");
  const installDialog = document.getElementById("install-help-dialog");
  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredInstallPrompt = e;
    if (installBtn) installBtn.hidden = false;
  });

  if (installBtn) {
    installBtn.addEventListener("click", async () => {
      if (deferredInstallPrompt) {
        deferredInstallPrompt.prompt();
        await deferredInstallPrompt.userChoice;
        deferredInstallPrompt = null;
      } else if (installDialog) {
        installDialog.showModal();
      }
    });
  }
}

/* --- Service Worker Registration --- */
function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("./sw.js").catch(() => {});
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initTabs();
  initModernWebEnhancements();
  updateCountdown();
  setInterval(updateCountdown, 60000);
  renderBookings();
  renderItinerary();
  renderRestaurants();
  renderEventsAndActivities();
  renderChecklist();
  renderEmailLog();
  setupInteractions();
  registerServiceWorker();
});
