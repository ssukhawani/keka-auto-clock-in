function getWebClockInEl() {
  let interval = setInterval(() => {
    let webClockInEl = document.querySelectorAll("a.d-block.text-link.mb-4");
    let webClockOutEl = document.querySelectorAll("button.btn.btn-danger.mb-8");
    if (webClockInEl && webClockInEl.length > 0) {
      if (
        webClockOutEl &&
        webClockOutEl.length > 0 &&
        webClockInEl[0].innerText !== "Web Clock-In"
      ) {
        webClockOutEl[0].click();
        let clockOut = document.querySelectorAll("button.btn.btn-danger.mb-8");
        clockOut[0].click();
        chrome.storage.sync.set({ name: "Clock In" });
      } else {
        webClockInEl[0].click();
        chrome.storage.sync.set({ name: "Clock Out" });
      }
      chrome.storage.local.set({
        isClicked: false,
      });
      clearInterval(interval);
      setTimeout(()=>{
        closeCurrentTab()
      },4000)
    }
  }, 1000);
}

function closeCurrentTab() {
  chrome.runtime.sendMessage("CLOSE_CURRENT_TAB")
}

chrome.storage.local.get(["isClicked"], (res) => {
  if (res.isClicked) {
    getWebClockInEl();
  }
});
