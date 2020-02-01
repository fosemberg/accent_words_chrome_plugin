// ==UserScript==
// @name         accent words
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.tampermonkey.net/index.php?version=4.9&ext=dhdg&updated=true
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const TEXT_NODE = 3;
    document.querySelectorAll('blockquote,summary,b,th,code,ul,li,button,pre,em,div,p,td,a,h1,h2,h3,h4,h5,h6,cite,nobr,span').forEach(el => {
        if (el.childElementCount === 0) {
            const {innerText} = el;
            if (innerText) el.style.color = 'red';
        } else {
            el.childNodes.forEach(child => {
                if (child.nodeType === TEXT_NODE) {
                    child.textContent = `[${child.textContent}]`;
                }
            })
        }
    })
})();