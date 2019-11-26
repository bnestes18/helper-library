let $ = (function() {
    'use strict'

    // Creates a constructor object where public methods will live
    let Constructor = function (selector) {
        this.selector = selector;
    }


    // FUNCTIONS
    /*
    Converts a NodeList into an array
    */
    Constructor.prototype.createArray = function(list) {
        return Array.prototype.slice.call(list);
    }
    /*
    Selects the first matching element in the DOM
    */
    Constructor.prototype.getFirstMatchingElem = function() {
        return document.querySelectorAll(this.selector)[0];
    }
    /*
    Selects the last matching element in the DOM
    */
   Constructor.prototype.getLastMatchingElem = function() {
       let length = document.querySelectorAll(this.selector).length;
       return document.querySelectorAll(this.selector)[length - 1];
    }
    /*
    Selects multiple matching elements in the DOM and 
    creates an array
    */
    Constructor.prototype.getAllMatchingElems = function() {
        return this.createArray(document.querySelectorAll(this.selector));
    }
    /*
    Selects an element in the DOM and adds a class to all elements
    */
    Constructor.prototype.addClass = function (className) {
        let elems = this.getAllMatchingElems()
        elems.forEach(elem => {
            return elem.classList.add(className);
        });
    }
    // /*
    // Selects an element in the DOM and removes a class from all elements
    // */
    Constructor.prototype.removeClass = function (className) {
        let elems = this.getAllMatchingElems()
        elems.forEach(elem => {
            return elem.classList.remove(className);
        });
    }

    return Constructor;

})()

