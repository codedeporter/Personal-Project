let menuEl = document.querySelector('.menu')
let listEl = document.querySelector('.list')

menuEl.addEventListener('click', () => {
    if(listEl.style.display=="none"){
        listEl.style.display="block"
    }else{
        listEl.style.display="none"
    }
})

let notes = document.querySelector(".notes")
let note = document.querySelector(".note")

function newNotes(){
    let newNote = notes.value
    let date = new Date
    note.innerHTML = `<div>
    <h3>${newNote}</h3>
    <p>${date.toDateString()}, ${date.
        toLocaleTimeString()}</p>
    <div>`
    
}

