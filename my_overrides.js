/****************************************************************************
 * START: MY OVERRIDES                                                  	*
****************************************************************************/

/** SETUP ON FIRST INSTALLATION ***/
user_pref("network.trr.uri", "https://dns.nextdns.io/4672dc/Zach's%20MacBook%20Pro"); // TRR/DoH

/** FASTFOX ***/
user_pref("browser.sessionstore.restore_pinned_tabs_on_demand", true);
user_pref("browser.sessionhistory.max_total_viewers", 4); // only remember # of pages in Back-Forward cache
user_pref("browser.cache.disk.enable", false); // disable disk cache

/** SECUREFOX ***/
user_pref("browser.contentblocking.category", "custom"); // enable custom
user_pref("network.cookie.cookieBehavior", 1); // block all third-party cookies; default=5
user_pref("signon.firefoxRelay.feature", ""); // unselect suggestions from Firefox Relay for clean UI
user_pref("browser.safebrowsing.downloads.enabled", false); // deny SB to scan downloads to identify suspicious files; local checks only
user_pref("browser.safebrowsing.downloads.remote.url", ""); // enforce no remote checks for downloads by SB
user_pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", false); // clean up UI; not needed in user.js if remote downloads are disabled
user_pref("browser.safebrowsing.downloads.remote.block_uncommon", false); // clean up UI; not needed in user.js if remote downloads are disabled
user_pref("browser.safebrowsing.allowOverride", false); // do not allow user to override SB
user_pref("network.trr.confirmationNS", "skip"); // skip TRR confirmation request
user_pref("extensions.webextensions.restrictedDomains", ""); // remove Mozilla domains so adblocker works on pages
user_pref("browser.firefox-view.feature-tour", "{\"screen\":\"\",\"complete\":true}"); // disable the Firefox View tour from popping up for new profiles
user_pref("signon.autofillForms", false); // unselect "Autofill logins and passwords" for clean UI
user_pref("signon.management.page.breach-alerts.enabled", false); // extra hardening

/** PESKYFOX ***/
user_pref("browser.download.useDownloadDir", true); // one-click downloads
user_pref("browser.download.folderList", 1); // 0=desktop, 1=downloads, 2=last used
user_pref("browser.toolbars.bookmarks.visibility", "newtab"); // only show bookmark bar on new tab
user_pref("widget.non-native-theme.scrollbar.style", 3); // thin scrollbar; default=0
user_pref("reader.parse-on-load.enabled", false); // disable reader mode
user_pref("pdfjs.sidebarViewOnLoad", 2); // force showing of Table of Contents in sidebar for PDFs (if available)
user_pref("general.autoScroll", false); // disable unintentional behavior for middle click

/** DELETE IF NOT macOS LAPTOP ***/
user_pref("network.trr.mode", 2); // enable TRR/DoH (with System fallback)
user_pref("network.trr.max-fails", 5); // lower max attempts to use DoH
user_pref("geo.provider.use_corelocation", false); // geolocation [MAC]
user_pref("pdfjs.defaultZoomValue", "page-width"); // PDF zoom level
user_pref("app.update.auto", false); // disable auto-installing Firefox updates [NON-WINDOWS]
user_pref("font.name.monospace.x-western", "SF Mono"); // monospace font

/*** MaterialFox ***/
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true); // required; default is false
user_pref("svg.context-properties.content.enabled", true); // required; default is false
user_pref("browser.tabs.tabClipWidth", 83); // Replicate Chrome behaviour for clipped tabs; default=140
user_pref("security.insecure_connection_text.enabled", true); // Replicate Chrome's "Not Secure" text on HTTP

/****************************************************************************
 * SECTION: SMOOTHFOX                                                       *
****************************************************************************/
// visit https://github.com/yokoffing/Betterfox/blob/main/Smoothfox.js
// Enter your scrolling overrides below this line:

/*** Sharpen Scrolling ***/
// credit: https://github.com/black7375/Firefox-UI-Fix
user_pref("apz.overscroll.enabled", true); // DEFAULT NON-LINUX
user_pref("general.smoothScroll", true); // DEFAULT
user_pref("mousewheel.min_line_scroll_amount", 10); // 10-40; adjust this number to your liking; default=5
user_pref("general.smoothScroll.mouseWheel.durationMinMS", 80); // default=50
user_pref("general.smoothScroll.currentVelocityWeighting", "0.15"); // default=.25
user_pref("general.smoothScroll.stopDecelerationWeighting", "0.6"); // default=.4

/****************************************************************************
 * END: BETTERFOX                                                       	*
****************************************************************************/
