/*!
 * Occurrence v0.1: Handle browser events.
 * (c) 2016 Erny Sans
 * 
 * http://github.com/ernysans/occurrence
 * http://erny.co
 * MIT License
 */

'use strict';

// Global Function ======================================== //
function occurrence(){};

// ====================================================================================== //
// Test ================================================================================= //
// ====================================================================================== //
occurrence.test = function() {
    console.log('Hello human!.');
};

// ====================================================================================== //
// Debounce ============================================================================= //
// ====================================================================================== //
occurrence.debounce = function(func, wait, immediate){
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

// ====================================================================================== //
// Merge Array ================================================================================= //
// ====================================================================================== //
occurrence.mergeArray = function() {
    for(var i=1; i<arguments.length; i++)
    for(var key in arguments[i])
        if(arguments[i].hasOwnProperty(key))
            arguments[0][key] = arguments[i][key];
    return arguments[0];
};