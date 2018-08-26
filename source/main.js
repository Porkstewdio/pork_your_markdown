import {init} from './initializer';

/**
 * PUMD Pre-Initializer
 * 
 * PUMD depends on jquery, showdownjs. 
 * So these two libraries should be loaded before initialize PUMD.
 * When each scripts are loaded, make flag var true and call 'callInit()'.
 * If all libraries are loaded and DOM is also loaded as well, init() will begin.
 * If not, wait for other library/DOM is loaded.
 */

/** is jQuery loaded */
let jQueryLoaded = false;
/** is showdown.js loaded */
let showdownLoaded = false;
/** is DOM loaded */
let domLoaded = false;

// Check jquery
if(!window.jQuery) {
    // JQuery is not loaded. load it.
    let jq = document.createElement('script');
    jq.setAttribute("src","https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js");
    jq.onload = function() {
        jQueryLoaded = true;
        callInit();
    }
    document.head.appendChild(jq);
} else {
    // Jquery is loaded already. Just try to call init method.
    jQueryLoaded = true;
    callInit();
}

// Check showdown
if(!window.showdown) {
    // Showdown.js is not loaded. load it.
    let sd = document.createElement('script');
    sd.setAttribute("src","https://cdnjs.cloudflare.com/ajax/libs/showdown/1.8.6/showdown.min.js");
    sd.onload = function() {
        showdownLoaded = true;
        callInit();
    }
    document.head.appendChild(sd);
} else {
    // Showdown.js is loaded already. Just try to call init method.
    showdownLoaded = true;
    callInit();
}

// On Document is ready
document.addEventListener("DOMContentLoaded", function(evt) {
    domLoaded = true;
    callInit();
});

function callInit() {
    // Check three things are all loaded
    if(jQueryLoaded && showdownLoaded && domLoaded) {
        // Three things are all loaded. Call init().
        init();
    }
}