"use strict";
var tests = function () { return console.log('hellow tsc'); };
var Book = /** @class */ (function () {
    function Book() {
    }
    Book.prototype.prints = function () {
        console.log('print');
    };
    return Book;
}());
