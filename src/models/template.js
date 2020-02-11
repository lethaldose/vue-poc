class Template {
  constructor(attributes = {}) {
    Object.assign(this, attributes)
  }

  static fromList(templates = []) {
    return templates.map((t) => new Template(t))
  }
}

export default Template
