chrome.tabs.onCreated.addListener(newTab => chrome.tabs.move(newTab.id, { 'index': -1 }))
