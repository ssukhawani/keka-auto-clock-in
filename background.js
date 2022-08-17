chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message === "CLOSE_CURRENT_TAB") {
    console.log({ message, sender, sendResponse });
    chrome.tabs.remove(sender.tab.id)
  }
});
