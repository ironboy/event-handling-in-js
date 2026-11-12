import { addEvent } from './eventHandler.js';
import { formReader } from './formReader.js';

// Create a form element with the name answer
const form = document.createElement('form');
form.setAttribute('name', 'answer');
document.body.append(form);

// Create some content for the form 
form.innerHTML = `
  <label>
    <span>Förnamn:</span>
    <input name="firstName" type="text">
  </label>
  <label>
    <span>Efternamn:</span>
    <input name="lastName" type="text">
  </label>
  <label>
    <span>Mina åsikter</span>
    <textarea name="opinions"></textarea>
  </label>
  <label>
    <span>Din favoritfärg:</span>
    <select name="favoriteColor">
      <option>Röd</option>
      <option>Grön</option>
      <option>Blå</option>
    </select>
  </label>
  <div class="radios">
    <span>Din favoritmat:</span>
    <label>
      Kött
      <input name="favoriteFood" type="radio" value="Meat">
    </label>
    <label>
      Grönsaker
      <input name="favoriteFood" type="radio" value="Vegetables">
    </label>
    <label>
      Frukt
      <input name="favoriteFood" type="radio" value="Fruits">
    </label>
    <div>
      Favoritband (välj flera om du vill):
      <label>
        <input type="checkbox" name="favoriteBand" value="Beatles"> Beatles
      </label>
      <label>
        <input type="checkbox" name="favoriteBand" value="Rolling Stones"> Rolling Stones
      </label>
      <label>
        <input type="checkbox" name="favoriteBand" value="Pink Floyd"> Pink Floyd
      </label>
    </div>
  </div>
  <button type="submit">Skicka</button>
`;

// add an event handler for the answer form
addEvent('submit', 'form[name="answer"]', formReader((formData) => {
  if (formData.firstName === 'Thomas') {
    alert('Vilket vackert namn!');
  }
  else {
    alert(formData.firstName + ' är inte så tokigt som förnamn!');
  }
}));
