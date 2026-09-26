// Täytä vain Mummon Tuvan omistajan vahvistamat tiedot.
// Päivämäärä muodossa YYYY-MM-DD; kellonaika tavallisena tekstinä.
const content = {
  phone: "",
  openingHours: "",
  priceListUrl: "",
  events: [
    // { date: "2026-10-04", time: "15.00–21.00", title: "Super Sunday Jamit", detail: "Vapaa pääsy · avoin lava" }
  ]
};

const events = document.getElementById("event-list");
if (content.events.length) {
  events.hidden = false;
  for (const event of content.events) {
    const card = document.createElement("article");
    card.className = "event-card";
    const date = document.createElement("div");
    date.className = "event-date";
    const parsed = new Date(`${event.date}T12:00:00`);
    date.textContent = `${new Intl.DateTimeFormat("fi-FI", { day: "numeric", month: "long", year: "numeric" }).format(parsed)} · ${event.time}`;
    const title = document.createElement("h3");
    title.textContent = event.title;
    const detail = document.createElement("p");
    detail.textContent = event.detail || "";
    card.append(date, title, detail);
    events.append(card);
  }
}

const details = document.getElementById("verified-details");
if (content.phone) {
  const p = document.createElement("p");
  const a = document.createElement("a");
  a.href = `tel:${content.phone.replace(/[^+\d]/g, "")}`;
  a.textContent = content.phone;
  p.append("Puhelin: ", a);
  details.append(p);
}
if (content.openingHours) {
  const p = document.createElement("p");
  p.textContent = `Aukioloajat: ${content.openingHours}`;
  details.append(p);
}
if (content.priceListUrl) {
  const link = document.getElementById("price-list");
  link.href = content.priceListUrl;
  link.hidden = false;
}
