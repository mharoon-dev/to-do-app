let userInput = document.querySelector('#userInput')
let my_ul = document.querySelector('.my_ul')
let submitbtn = document.querySelector('.submitbtn')


// submitHandler
function submitHandler() {
    let val = userInput.value
    if (val === '' ) {
        alert("write and then click the button")
    } else {
        let li = `<li 
        id="${val}"
        style="margin-top:0.5rem; 
        display:flex; 
        justify-content:space-between; 
        align-items:center;">

        <h3 style="margin-right:0.5rem;">${val}</h3>
        <div>
        <button onclick="editHandler('${val}')" class="innerbtn">edit</button>
        <button onclick="deleteHandler('${val}')" class="innerbtn">delete</button>
        </div>
        </li>`
        
        my_ul.innerHTML += li
        userInput.value = ""
    }
}


// deleteHandler
function deleteHandler(val) {
    const li = document.getElementById(val);
    // console.log(li);
    li.remove();
    userInput.value = ''
    submitbtn.textContent = "submit"
}


// editHandler
function editHandler(val) {
    const li = document.getElementById(val)
    // console.log(li);
    userInput.value = li.children[0].textContent
    submitbtn.textContent = "update"
    submitbtn.setAttribute('onclick' , `newEditHandler('${val}')`)
}


// newEditHandler
function newEditHandler(val) {
    console.log(val);
    const li = document.getElementById(val)
    li.children[0].textContent = userInput.value
    submitbtn.textContent = "submit"
    submitbtn.setAttribute('onclick' , `submitHandler()`)
}









