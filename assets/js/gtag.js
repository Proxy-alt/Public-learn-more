// Your GTM ID
const GTM_ID = "GTM-TMPRVF3B";

// Function to inject the <head> GTM script
(function injectHeadTag() {
    const gtmScript = document.createElement("script");
    gtmScript.async = true;
    gtmScript.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
    gtmScript.innerHTML = `
        (function(w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
            var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s),
                dl = l != 'dataLayer' ? '&l=' + l : '';
            j.async = true;
            j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
            f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', '${GTM_ID}');
    `;
    document.head.appendChild(gtmScript);
})();

// Function to inject the <body> GTM noscript iframe
(function injectBodyTag() {
    const gtmNoscript = document.createElement("noscript");
    gtmNoscript.innerHTML = `
        <iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}"
                height="0" width="0" style="display:none;visibility:hidden"></iframe>
    `;
    document.body.insertAdjacentElement("afterbegin", gtmNoscript);
})();
// Inject the Google AdSense script
(function injectAdSense() {
    const adsScript = document.createElement("script");
    adsScript.async = true;
    adsScript.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3346368939698584";
    adsScript.crossOrigin = "anonymous";
    document.head.appendChild(adsScript);
})();