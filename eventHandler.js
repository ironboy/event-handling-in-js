/*
To use in your code
import {addEvent, removeEvent} from './eventHandler.js';

To add an event
addEvent(eventType, cssSelector, a function you want to run)

To remove an event you need a named function or variable that holds the function
function myFunc(){alert('Hi)}
addEvent('click','h2',myFunc)

then you can remove it later:
removeEvent(myFunc)
*/


// A log book of which events we have used so far
const eventTypesUsed = {};

// An array of events if want to listen to
let events = [];

// A generic listener function that helps us
// with event delegation
function genericListener(event) {
  for (let { type, selector, func } of events) {
    if (type === event.type && event.target.closest(selector)) {
      func(event);
    }
  }
}

// event - an object with three properties:
// * type - 'click', 'mouseup',
// * selector - a css selector to match
// * func - a function to run
export function addEvent(type, selector, func) {
  if (!eventTypesUsed[type]) {
    document.body.addEventListener(type, genericListener);
    eventTypesUsed[type] = true;
  }
  events.push({ type, selector, func });
}
// remove and event based on its function
export function removeEvent(func) {
  events = events.filter(event => event.func !== func);
}