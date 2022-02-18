[English version / sivu englanniksi](#new-tabs-last)

# Uusi välilehti viimeiseksi

Selainlisäosa Chromium-pohjaisiin selaimiin. Lisäosa pyrkii avaamaan uuden välilehden aina viimeiseksi.

Lisäosan koko lähdekoodi on tässä - yksi rivi:

```javascript
chrome.tabs.onCreated.addListener(newTab => chrome.tabs.move(newTab.id, { 'index': -1 }))
```

Manifest-tiedosto on version 3 mukainen, eikä lisäosa tarvitse mitään erityisiä oikeuksia.

---

# New tabs last

Browser extension for Chromium based browsers. This extension tries to place newly opened tabs at the end.

The full source code for the extension is here - one line:

```javascript
chrome.tabs.onCreated.addListener(newTab => chrome.tabs.move(newTab.id, { 'index': -1 }))
```

The manifest file for the extension is version 3. No special permissions needed.
