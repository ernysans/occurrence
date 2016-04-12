!function(e,n){"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?module.exports=n():e.occurrence=n()}(this,function(){/*!
     * Occurrence v0.1: Handle browser events.
     * (c) 2016 Erny Sans
     * 
     * http://github.com/ernysans/occurrence
     * http://erny.co
     * MIT License
     */
"use strict";function e(){}return e.test=function(){console.log("Hello human!.")},e.debounce=function(e,n,t){var o;return function(){var u=this,c=arguments,i=function(){o=null,t||e.apply(u,c)},f=t&&!o;clearTimeout(o),o=setTimeout(i,n),f&&e.apply(u,c)}},e});