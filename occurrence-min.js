!function(n,e){"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?module.exports=e():n.occurrence=e()}(this,function(){/*!
     * Occurrence v0.1: Handle browser events.
     * (c) 2016 Erny Sans
     * 
     * http://github.com/ernysans/occurrence
     * http://erny.co
     * MIT License
     */
"use strict";function n(){}return n.test=function(){console.log("Hello human!.")},n.debounce=function(n,e,t){var r;return function(){var u=this,o=arguments,a=function(){r=null,t||n.apply(u,o)},i=t&&!r;clearTimeout(r),r=setTimeout(a,e),i&&n.apply(u,o)}},n.mergeArray=function(){for(var n=1;n<arguments.length;n++)for(var e in arguments[n])arguments[n].hasOwnProperty(e)&&(arguments[0][e]=arguments[n][e]);return arguments[0]},n});