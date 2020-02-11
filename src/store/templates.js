import Template from "@/models/template"
import templateFixture from "@/data/template-fixture"

export default {
  namespaced: true,
  state: {
    templates: [],
    selectedTemplate: null,
  },
  getters: {
    getTemplateById: (state) => (templateId) => state.templates.find((t) => t.id === templateId),
  },
  mutations: {
    RESET_STATE(state) {
      state.selectedTemplate = null
    },
    UPDATE_TEMPLATES(state, templates) {
      state.templates = templates
    },
    SET_SELECTED_TEMPLATE(state, selectedTemplate) {
      state.selectedTemplate = selectedTemplate
    },
  },
  actions: {
    async resetState(context) {
      context.commit("RESET_STATE")
    },
    async getAllTemplates({commit}, searchQuery) {
      // make api call to get templates
      const templates = Template.randomList(templateFixture, searchQuery)
      commit("UPDATE_TEMPLATES", templates)
    },
    async setSelectedTemplate(context, selectedTemplate) {
      context.commit("SET_SELECTED_TEMPLATE", selectedTemplate)
    },
  },
}
