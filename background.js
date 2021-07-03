chrome.browserAction.onClicked.addListener(buttonClicked);

var state = 0

function buttonClicked(tab) {
    chrome.tabs.sendMessage(tab.id, state);
    state++;
  }