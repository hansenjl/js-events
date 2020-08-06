// Event Bubbling & Capturing


//As a developer I want...

//a form to appear in place of the 'Add Emoji' button when the 'Add Emoji' button is clicked
//an emoji can be entered into the input, submitted, and added to the "Emoji Bank"
//an alert saying "Emoji Submitted!" whenever an emoji is submitted
//the form turns back into the 'Add Emoji' button once an emoji has been successfully submitted
//an emoji I click on turns into '🤪'

const btn = document.getElementById('add-button')
const emojiBank = document.getElementById('emoji-bank')
const emojiArea = document.getElementById('add-emoji-area')
document.addEventListener('DOMContentLoaded', (e) => {
    emojiArea.addEventListener('click', handleAreaClick)
    emojiBank.addEventListener('click', handleEmojiClick)
})

function handleEmojiClick(e){
    console.log(e.target)
    let li = e.target
    emojiBank.removeChild(li)

}


function handleAreaClick(e){
    e.preventDefault()
    console.log('area click')

    if (e.target.id === "add-button"){
        console.log("this is the add form button")
        addForm()
    } else if (e.target.id === "submit"){

        console.log('form submitted')
        addEmoji()
    }

}

function addEmoji(){
    let input = document.getElementById('emoji-input')
    let emoji = `<li class="emoji">${input.value}</li>`
    let emojiBank = document.querySelector('#emoji-bank')
    emojiBank.innerHTML += emoji
    input.value = ""
    removeForm()
}

function addForm(){
    let form = `<form><input id="emoji-input" type="text"></input><input id="submit" type="submit" value="Submit Emoji"></form>`
    emojiArea.innerHTML = form
}

function removeForm(){
    let addButton = `<button id="add-button">Add Emoji</button>`
    emojiArea.innerHTML = addButton
}

// document.addEventListener('load', (e) => {
//     console.log('load')
//     addButtonListener()
// })

// console.log('page')