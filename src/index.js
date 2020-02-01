// ==UserScript==
// @name         accent words
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.tampermonkey.net/index.php?version=4.9&ext=dhdg&updated=true
// @grant        none
// ==/UserScript==

const converter = require('./converter');
const allNodesSelector = require('./allNodesSelector');

(function() {
    'use strict';
    allNodesSelector(converter);
})();