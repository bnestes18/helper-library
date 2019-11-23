let helper = (function() {
    'Use strict'

    // Creates an object where public methods will live
    let methods = {};


    // FUNCTIONS
    /*
    Selects multiple elements as a NodeList and converts the NodeList into an array
    */
    methods.createArray = function(list) {
        return Array.prototype.slice.call(list);
    }
    /*
    Selects the first matching element in the DOM
    */
    methods.getFirstMatchingElem = function(selector) {
        return document.querySelector(selector);
    }
    /*
    Selects multiple matching elements in the DOM and 
    creates an array
    */
    methods.getAllMatchingElems = function(selector) {
        return this.createArray(document.querySelectorAll(selector));
    }
    /*
    Selects an element in the DOM and adds a class to the element
    */
    methods.addClass = function (selector, className) {
        let element = this.getFirstMatchingElem(selector);
        return element.classList.add(className);
    }
    /*
    Selects an element in the DOM and removes a class from the element
    */
    methods.removeClass = function (selector, className) {
        let element = this.getFirstMatchingElem(selector);
        return element.classList.remove(className);
    }

    return methods;

})()

console.log(helper.getAllMatchingElems('button'))