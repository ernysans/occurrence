// =========================================== //
// Occurence -- by Erny Sans ================== //
// =========================================== //

'use strict';

// Export Module ======================================== //
module.exports = {

    test: function() {
        return "HELLO";
    },

    // ====================================================================================== //
    // Debounce ============================================================================= //
    // ====================================================================================== //
    debounce: function(func, wait, immediate) {
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
    },

    // ====================================================================================== //
    // Dom Change ======================================================================= //
    // ====================================================================================== //
    domChange: function() {

        var last = +new Date();
        var delay = 100; // default delay

        // Manage event queue
        var stack = [];

        function callback()
            var now = +new Date();
            if (now - last > delay) {
                for (var i = 0; i < stack.length; i++) {
                    stack[i]();
                }
                last = now;
        }

        // Public interface
        var onDomChange = function (fn, newdelay) {
            if (newdelay) delay = newdelay;
            stack.push(fn);
        };

        // Naive approach for compatibility
        function naive() {

            var last = document.getElementsByTagName('*');
            var lastlen = last.length;
            var timer = setTimeout(function check() {

                // get current state of the document
                var current = document.getElementsByTagName('*');
                var len = current.length;

                // if the length is different
                // it's fairly obvious
                if (len != lastlen)
                    last = []; // just make sure the loop finishes early

                // go check every element in order
                for (var i = 0; i < len; i++) {
                    if (current[i] !== last[i])
                        callback();
                        last = current;
                        lastlen = len;
                        break;
                }

                // over, and over, and over again
                setTimeout(check, delay);

            }, delay);
        }

        //
        //  Check for mutation events support
        //
        var support = {};

        var el = document.documentElement;
        var remain = 3;

        // callback for the tests
        function decide() {
            if (support.DOMNodeInserted)
                window.addEventListener("DOMContentLoaded", function () {
                    if (support.DOMSubtreeModified)
                        // for FF 3+, Chrome
                        el.addEventListener('DOMSubtreeModified', callback, false);
                    else
                        // for FF 2, Safari, Opera 9.6+
                        el.addEventListener('DOMNodeInserted', callback, false);
                        el.addEventListener('DOMNodeRemoved', callback, false);
                }, false);
            else if (document.onpropertychange) document.onpropertychange = callback; // for IE 5.5+
            else naive(); // fallback
                
                
        }

        // checks a particular event
        function test(event) {
            el.addEventListener(event, function fn() {
                support[event] = true;
                el.removeEventListener(event, fn, false);
                if (--remain === 0) decide();
            }, false);
        }

        // attach test events
        if (window.addEventListener)
            test('DOMSubtreeModified');
            test('DOMNodeInserted');
            test('DOMNodeRemoved');
        else decide();
       
        // do the dummy test
        var dummy = document.createElement("div");
        el.appendChild(dummy);
        el.removeChild(dummy);
        
        // call interface
        return onDomChange;
    },

};