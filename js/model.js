export default class Model {
  constructor() {
    this.view = null;
    this.todos = [];
    this.currentId = 0;
  }

  setView(view) {
    this.view = view;
  }

  getTodos() {
    return this.todos;
  }

  addTodo(title, description) {
    const todo = {
      id: this.currentId++,
      title,
      description,
      completed: false,
    };
    console.log(todo);

    this.todos.push(todo);
    console.log(this.todos);
    //return Object.assign({}, todo);
    return { ...todo };
  }
}
