// ==UserScript==
// @name         block yt ads
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       dacksokel
// @match        https://www.youtube.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    setInterval(()=>{
        if(document.querySelector('.style-scope.ytd-search-pyv-renderer') != null){
            document.querySelector('.style-scope.ytd-search-pyv-renderer').style.display="none";
        }
        if(document.querySelector('.style-scope.ytd-item-section-renderer') != null){
            document.querySelector('.style-scope.ytd-item-section-renderer').style.display="none";
        }
        if(document.querySelector('.style-scope.ytd-watch-next-secondary-results-renderer.GoogleActiveViewElement') != null){
            document.querySelector('.style-scope.ytd-watch-next-secondary-results-renderer.GoogleActiveViewElement').style.display="none";
        }
    },1000);
    // Your code here...
})();