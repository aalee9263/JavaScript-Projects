const item = document.querySelector("#item")
const toDoBox = document.querySelector("#to-do-box")
const saveItems = () => {
    const notes = document.querySelectorAll("item");
    console.log(notes)
    const data = [];
    notes.forEach(
        (note) => {
            data.push(note.value)
        }
    )
    // console.log(data)
if (data.length === 0) {
    localStorage.removeItem("notes")
}   else {
    localStorage.setItem("notes", JSON.stringify(data))
}

    
}

item.addEventListener(
    "keyup",
    function(event){
        if (event.key == "Enter"){
            // console.log(this.value)
            addToDo(this.value)
            this.value = ""; // Clear the input value
        }
    }
)

const addToDo = (item) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
        ${item}
    <i class="fa-solid fa-xmark"></i>
    `;

    listItem.addEventListener(
        "click",
        function(){
            this.classList.toggle("done");
        }
    )
    
    listItem.querySelector("i").addEventListener(
        "click",
        function(){
            listItem.remove()
        }
        
    )

    toDoBox.appendChild(listItem)
}