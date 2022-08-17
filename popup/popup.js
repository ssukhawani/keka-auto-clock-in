
const clockInEl = document.getElementById("clock-in-out");

chrome.storage.sync.get(["name"], (res) => {
  clockInEl.textContent = res.name || "Clock In";
});

clockInEl.addEventListener("click", () => {
  chrome.storage.local.set({
    isClicked: true,
  });
  chrome.tabs.create({
    url: "https://coditation.keka.com/#/me/attendance/logs",
  });
});
