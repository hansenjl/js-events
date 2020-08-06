// Event Bubbling & Capturing


//As a developer I want...

//a form to appear in place of the 'Add Emoji' button when the 'Add Emoji' button is clicked
//an emoji can be entered into the input, submitted, and added to the "Emoji Bank"
//an alert saying "Emoji Submitted!" whenever an emoji is submitted
//the form turns back into the 'Add Emoji' button once an emoji has been successfully submitted
//an emoji I click on turns into '🤪'



// Select the element that we want to add an event listener to
const button = document.getElementById('add-button')
const emojiArea = document.querySelector('#add-emoji-area')
const emojiBank = document.querySelector('#emoji-bank')
// add the event listener


function handleAreaClick(e){

    if(e.target.id === "add-button"){
        handleButtonClick()
    }else if (e.target.id === "submit"){
        e.preventDefault()
        handleFormSubmit(e)
    }
}

function handleButtonClick() {
    // remove or hide the add emoji button
    // display a form that has a submit button and a text field
    const form = `<form id="emoji-form"><input type="text" name="emoji"><input type="submit" value="Submit Emoji" id="submit"></form>`
    emojiArea.innerHTML = form
    //const formElement = document.getElementById('emoji-form')
    //formElement.addEventListener('submit', handleFormSubmit)
}

function handleFormSubmit(e){
    let input = e.target.previousElementSibling.value
    e.target.previousElementSibling.value = ""
    let li = document.createElement('li')
    li.setAttribute("class", "emoji")
    li.innerText = input
    emojiBank.appendChild(li)

    console.log('in handle form submit')
    // add the stuff in the text box to the page
    // add the button back to the page in place of the form
    addButtonToPage()
}

function addButtonToPage() {
    let button = `<button id="add-button">Add Emoji</button>`
    emojiArea.innerHTML = button
}

document.addEventListener('DOMContentLoaded', (e) => {
    emojiArea.addEventListener('click', handleAreaClick)
})
