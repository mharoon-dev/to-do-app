let userInput = document.querySelector('#userInput')
let my_ul = document.querySelector('.my_ul')

function submitHandler() {
    let li = `<li>
                ${userInput.value}
                <button class="innerbtn">
                    edit
                </button>
                <button class="innerbtn">
                    delete
                </button>
            </li>`

my_ul.innerHTML = li
}


