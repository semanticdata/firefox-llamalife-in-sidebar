function openPage() {
  browser.tabs.create({
    url: "https://developer.mozilla.org",
  });
}

// Update UI and set value of textbox
async function updateUI() {
  let commands = await browser.commands.getAll();
  for (command of commands) {
    if (command.name === sidebarToggle) {
      document.querySelector('#shortcut').value = command.shortcut;
    }
  }
}

browser.browserAction.onClicked.addListener(openPage);
browser.browserAction.onClicked.addListener(updateUI);
