class Template {
  constructor(attributes = {}) {
    Object.assign(this, attributes)
  }

  static fromList(templates = []) {
    return templates.map((t) => new Template(t))
  }

  static randomList(templates, searchQuery = "") {
    if (searchQuery.length === 0) return Template.fromList(templates)

    const shuffled = templates.sort(() => 0.5 - Math.random())
    const itemsToPick = Math.floor(Math.random() * Math.floor(templates.length))
    return Template.fromList(shuffled.slice(0, itemsToPick))
  }
}

export default Template
