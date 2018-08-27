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
let isJQueryLoaded = false;
/** is showdown.js loaded */
let isShowdownLoaded = false;
/** is DOM loaded */
let isDomLoaded = false;

// Check jquery
if(!window.jQuery) {
    // JQuery is not loaded. load it.
    const jQueryScript = document.createElement('script');
    jQueryScript.setAttribute("src","https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js");
    jQueryScript.onload = function() {
        isJQueryLoaded = true;
        callInit();
    }
    document.head.appendChild(jQueryScript);
} else {
    // Jquery is loaded already. Just try to call init method.
    isJQueryLoaded = true;
    callInit();
}

// Check showdown
if(!window.showdown) {
    // Showdown.js is not loaded. load it.
    const showDownScript = document.createElement('script');
    showDownScript.setAttribute("src","https://cdnjs.cloudflare.com/ajax/libs/showdown/1.8.6/showdown.min.js");
    showDownScript.onload = function() {
        isShowdownLoaded = true;
        callInit();
    }
    document.head.appendChild(showDownScript);
} else {
    // Showdown.js is loaded already. Just try to call init method.
    isShowdownLoaded = true;
    callInit();
}

// On Document is ready
document.addEventListener("DOMContentLoaded", function(evt) {
    isDomLoaded = true;
    callInit();
});

function callInit() {
    // Check three things are all loaded
    if(isJQueryLoaded && isShowdownLoaded && isDomLoaded) {
        // Three things are all loaded. Call init().
        init();
    }
}