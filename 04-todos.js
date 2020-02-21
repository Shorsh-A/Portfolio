//CRUD
// C = creat
// R = read , retrieve
// U = update
// D = delet

let todos = [
  { id: 1, text: 'Learn JavaScript', completed: true },
  { id: 2, text: 'Seek for a job', completed: false },
  { id: 3, text: 'Forget everything' }
];

function render() {
  // 1. loop over all the todos
  // 2. for every todo:
  //      1. creat '<li>{todo.text}</li>'
  //      2. concatenate to the html

  document.querySelector('ul').innerHTML = todos
    .map(
      todo => `<li ${todo.completed ? 'class = "done"' : ''}>${todo.text} </li>`
    )
    .join('');
}

render();

document.querySelector('form').onsubmit = function() {
  event.preventDefault();

  let todo = { id: generateId(), text: 'Eat your vegetables' };
  todos.push(todo);
  render();
};

function generateId() {
  if (todos.length === 0) {
    return 1;
  } else {
    return todos[todos.length - 1].id + 1;
  }
}

// OR
function generateId() {
  return !todos.length ? 1 : todos[todos.length - 1].id + 1;
}
