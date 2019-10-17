//Iteration 1
// When the user hits `Add Snack`, a card is created that has the munchie name and the description.
var list = document.querySelector('.grocery-list');
var button1 = document.querySelector('.button');
var input1 = document.querySelector('.input1');
var input2 = document.querySelector('.input2');
var deleteSnack = document.querySelector('.delete');
//Iteration 2
// Edit the HTML of the dynamic snack cards to include a DELETE button. When the user clicks the DELETE button, that specific CARD is removed from the DOM

button1.addEventListener('click', addCard);
list.addEventListener("click", deleteCard);


function addCard() {
  event.preventDefault();
  if(input1.value !== "" &&
    input2.value !== "") {
  list.innerHTML += `
    <div class="new-snack">
      <input class="input-color" value="${input1.value}"></input>
      <input class="input-color" value="${input2.value}"></input>
      <button class="delete-button">Delete</button>
    </div>
  `;
  event.preventDefault();
  }
}

function deleteCard(event) {
  if (event.target.classList.contains("delete-button")) {
   event.target.parentElement.remove()
    }
  if (event.target.classList.contains("new-snack")) {
    console.log(setRandomColor())
    event.target.style.background = setRandomColor();
    }
  }

//Iteration 3
//User can edit the name of the snack OR its description by clicking on the particular field on the CARD!

function setRandomColor() {
  var newColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
  return newColor;
}

//Iteration 4
// If there is no text in the item field OR the info field, the Add Snack button should be disabled


//Iteration 5
// When a user clicks the card, it will randomly select a new background color for the card
