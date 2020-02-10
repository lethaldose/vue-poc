class Template {
  constructor(template = {}) {
    this.id = template.id;
  }

  static fromList(templates = []) {
    return templates.map(t => new Template(t));
  }
}

export default Template;
