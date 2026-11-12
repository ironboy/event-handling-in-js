// by letting formReader receive a function to run
// once it has read the form
// we can make it easy to react differently on different values
// form in the main program
export function formReader(functionToRunAfterReadingForm) {
  // return a function that in turn will be called on form submit
  return (event) => {
    // stop the default web browser behavior for forms 
    // (page reload and add query parts in the url)
    event.preventDefault();
    // formValues an object we will add all the user input values to
    const formValues = {};
    // read input values from the form that was actually submitted
    // (event.target), so formReader works for any form - not just one
    const form = event.target;
    for (let { type, name, value, checked } of form.elements) {
      if (type === 'submit') { continue; }
      // handle radiobuttons only consider the checked one
      if ((type === "radio" || type === "checkbox") && !checked) { continue; }
      // if the same name appears more than once (e.g. several checkboxes),
      // collect the values in an array instead of overwriting
      if (name in formValues) {
        // turn it into an array the second time we see the name
        if (!Array.isArray(formValues[name])) {
          formValues[name] = [formValues[name]];
        }
        formValues[name].push(value);
      } else {
        formValues[name] = value;
      }
    }
    functionToRunAfterReadingForm(formValues);
  };
};