
// Please refer to the "Required Tasks in the assignments PDF"

// html for the add cheep create function
/*
  <div class="col">
    <div class="card shadow-sm">
      <img class="bd-placeholder-img card-img-top" src="ALBUM IMAGE SELECTION HERE"/>
      <div class="card-body">
        <h5 class="card-title">ALBUM DESCRIPTION HERE</h5>
        <p class="card-text">ALBUM TITLE HERE</p>
      </div>
    </div>
  </div>
*/
const newOrderForm = document.querySelector('#album-form');
newOrderForm.elements['album-title-input'].focus();

newOrderForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const albumTitle = event.target.elements['album-title-input'].value;
  const albumDescription = event.target.elements['album-description-input'].value;
  const albumArt = event.target.elements['albume-art-input'].value;

  let isArtValid = true;
  let isDescriptionValid = true;
  let isTitleValid = true;

  // is  less than 60 chars and not empty, 
  if (isValueNotEmpty(albumTitle) && LengthisLessThanChosenValue(albumTitle, 60)) {
    event.target.elements['album-title-input'].classList.remove('is-invalid');
  } else {
    event.target.elements['album-title-input'].classList.add('is-invalid');
    isTitleValid = false;
  }

  // is less than 255, and is not empty
  if (isValueNotEmpty(albumDescription) && LengthisLessThanChosenValue(albumDescription, 255)) {
    event.target.elements['album-description-input'].classList.remove('is-invalid');
  } else {
    event.target.elements['album-description-input'].classList.add('is-invalid');
    isDescriptionValid = false;
  }

  //ensures a jpg is selected and not empty 
  if (isValueNotEmpty(albumArt)&& albumArt.toLowerCase().endsWith('.jpg')) {
    event.target.elements['albume-art-input'].classList.remove('is-invalid');
  } else {
    event.target.elements['albume-art-input'].classList.add('is-invalid');
    isArtValid = false;
  }
  
    // create albumm cover if valid, reset form if valid, refocus
  if (isFormValid(isTitleValid,isDescriptionValid, isArtValid)){
    addAlbumCard(albumTitle, albumDescription, albumArt);
    newOrderForm.reset();
    newOrderForm.elements['album-title-input'].focus();
  }
});

// Change the html to include entered title and descpritions and to update any changes
const addAlbumCard = (title, description, art) =>{
  const albumContainer = document.querySelector('#all-albums-list');
  albumContainer.innerHTML = `
    <div class="col">
      <div class="card shadow-sm">
        <img class="bd-placeholder-img card-img-top" src="${art}" alt="Album Art">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class="card-text">${description}</p>
        </div>
      </div>
    </div>
  ` + albumContainer.innerHTML; 
}


const isFormValid = (validTitle, validDescription, validArt) => {
  return validTitle && validDescription && validArt
}
/**
 *
 * Checks if a given value is greater than zero.
 * @param {number} value - The value to be checked.
 * @returns {boolean} - True if the value is greater than zero, otherwise false.
 */

/**
 * Checks if a value is not empty.
 *
 * @param {any} value - The value to check.
 * @returns {boolean} - Returns true if the value is not empty, false otherwise.
 */
const isValueNotEmpty = (value) => {
  if (value !== "") {
      return true
  }
  return false
}
const LengthisLessThanChosenValue = (value, chosenValue) => {
  return value.length < chosenValue;
}


