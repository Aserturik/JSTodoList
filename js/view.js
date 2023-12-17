export default class View {
  constructor() {
    this.model = null;
    this.table = document.getElementById("table");
    const btn = document.getElementById("add");
    btn.onclick = () => {
      this.addTodo("Titulo", "Descripcion");
    };
  }

  setModel(model) {
    this.model = model;
  }

  addTodo(title, description) {
    this.model.addTodo(title, description);
  }
}
