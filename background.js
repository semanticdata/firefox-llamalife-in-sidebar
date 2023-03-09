const sidebarToggle = '_execute_sidebar_action';

function openPage() {
  browser.tabs.create({
    url: "https://developer.mozilla.org",
  });
}

browser.browserAction.onClicked.addListener(openPage);

function openSidebar() {
  sidebarAction.toggle();
}

browser.browserAction.onClicked.addListener(openSidebar);
