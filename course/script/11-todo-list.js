let todolist = [{
  name: 'make dinner',
  dueDate: '04-22-2023'
  }, 
  {
    name: 'wash dishes',
    dueDate: '05-12-2023'
  }];

renderTodoList();

function renderTodoList(){
  let todoListHTML = '';

  for(let i =0 ; i < todolist.length; i ++){
    //const todoObject = todolist[i];
    //const {name, dueDate} = todoObject;
    const {name, dueDate} = todolist[i];
    //const name = todoObject.name;
    //const dueDate = todoObject.dueDate;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button onclick="
        todolist.splice(${i}, 1);
        renderTodoList();
      " class ="delete-button">Delete</button>
    `;
    todoListHTML += html;
  }

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date');
  const dueDate = dateInputElement.value;

  todolist.push({
    //name,
    name: name,
    //dueDate
    dueDate: dueDate
  });

  ({inputElement,dateInputElement}).value = '';
  renderTodoList();
}