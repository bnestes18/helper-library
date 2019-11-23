let helper = (function() {


    // Creates an object where public methods will live
    let methods = {};


    // FUNCTIONS
    /*
    Selects multiple elements and creates an array-like object (NodeList)
    */
    methods.createNodeList = function(selector) {
        return document.querySelectorAll(selector);
    }
    /*
    Selects the first matching element in the DOM
    */
    methods.getFirstMatchingElem = function(selector) {
        return document.querySelector(selector);
    }
    /*
    Selects multiple matching elements in the DOM and 
    creates an actual array
    */
    methods.getAllMatchingElems = function() {
        return Array.prototype.slice.call(this.createNodeList);
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

console.log(helper.removeClass('button', 'btn-purple'))