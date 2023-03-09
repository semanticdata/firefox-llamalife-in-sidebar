const sidebarToggle = '_execute_sidebar_action';

function openPage() {
  browser.tabs.create({
    url: "https://developer.mozilla.org",
  });
}

browser.browserAction.onClicked.addListener(openPage);

// Update UI and set value of textbox
async function updateUI() {
  let commands = await browser.commands.getAll();
  for (command of commands) {
    if (command.name === sidebarToggle) {
      document.querySelector('#shortcut').value = command.shortcut;
    }
  }
}

browser.browserAction.onClicked.addListener(updateUI);

// Update UI on page load
document.addEventListener('DOMContentLoaded', updateUI);
