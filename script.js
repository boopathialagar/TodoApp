

const array = ['home', 'business'];
const date = ['2025-10-07', '2025-10-23'];
renderTodolist()
function renderTodolist() {
    let todolist = '';
    for (let i = 0; i < array.length; i++) {
        const html = `
                <p>${array[i]} </p>
                <p>${date[i]} </p>
                <button class="del-btn" onclick ="array.splice(${i},1)
                renderTodolist()">
                    Delete
                </button>`
            ;
        todolist += html;
    }
    document.querySelector('.result').innerHTML = todolist;
}

function displayValue() {
    const textInput = document.querySelector('.text-input');
    const dateInput = document.querySelector('.date-input');
    if (!(textInput.value == '') && !(dateInput.value == '')) {
        array.push(textInput.value);
        date.push(dateInput.value);
    }
    renderTodolist();
    textInput.value = '';
}
