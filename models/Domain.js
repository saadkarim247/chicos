class Domain {
  constructor(name, id, actions) {
    this.name = name;
    this.id = id;
    this.actions = actions;
  }

  get_name() {
    return this.name || "";
  }

  get_id() {
    return this.id || "";
  }

  get_actions() {
    return this.actions || "";
  }
}
