let $ = (function() {
    'use strict'

    // Creates a constructor object where public methods will live
    let Constructor = function (selector) {
        this.elems = document.querySelectorAll(selector);
    }


    // FUNCTIONS
    /*
    Converts a NodeList into an array
    */
    Constructor.prototype.getItems = function() {
        return Array.prototype.slice.call(this.elems);
    }
    /*
    Selects the first matching element in the DOM
    */
    Constructor.prototype.getFirstMatchingElem = function() {
        return this.elems[0];
    }
    /*
    Selects the last matching element in the DOM
    */
   Constructor.prototype.getLastMatchingElem = function() {
       let length = this.elems.length;
       return this.elems[length - 1];
    }
    /*
    Selects an element in the DOM and adds a class to all elements
    */
    Constructor.prototype.addClass = function (className) {
        let elems = this.getItems()
        elems.forEach(elem => {
            return elem.classList.add(className);
        });
    }
    // /*
    // Selects an element in the DOM and removes a class from all elements
    // */
    Constructor.prototype.removeClass = function (className) {
        let elems = this.getItems()
        elems.forEach(elem => {
            return elem.classList.remove(className);
        });
    }

    return Constructor;

})()

// Create new instances of buttons and list items 
let btns = new $('button');
let listItems = new $('li');

// Accessing public helper methods
let firstBtn = btns.getFirstMatchingElem()
let lastBtn = btns.getLastMatchingElem()
let purpleBtns = btns.addClass('btn-purple');
let blueBtns = btns.removeClass('btn-purple');


// Show all selected button elements, first button element and last button element in the console
console.log('buttons', btns.getItems())
console.log('firstBtn', firstBtn);
console.log('lastBtn', lastBtn);

// Show selected unordered list
console.log('listItems', listItems.getItems())


