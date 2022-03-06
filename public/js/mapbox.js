var map = L.map("map").setView([54.4612129, 17.0047514], 15);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.marker([54.4612129, 17.0047514])
  .addTo(map)
  .bindPopup("Zespół Szkół Społecznych w Słupsku")
  .openPopup();
