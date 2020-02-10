import _ from 'lodash';
import { get } from './http';
import Template from '@/models/template';

const templateEndPoint = "";

export default {
  namespaced: true,
  state: {
    templates: [],
    selectedTemplate: null,
  },
  getters: {
    getTemplateById: state => templateId => state.templates.find(t => t.id === templateId),
  },
  mutations: {
    RESET_STATE(state) {
      state.selectedTemplate = null;
    },
    UPDATE_TEMPLATES(state, templates) {
      state.templates = templates;
    },
    SET_SELECTED_TEMPLATE(state, selectedTemplate) {
      state.selectedTemplate = selectedTemplate;
    },
  },
  actions: {
    async resetState(context) {
      context.commit('RESET_STATE');
    },
    async getAllTemplates({ state, commit }) {
      const response = await get(templateEndPoint);
      const templates = Template.fromList(response.data.items);
      commit('UPDATE_TEMPLATES', templates);
    },
    async setSelectedTemplate(context, selectedTemplate) {
      context.commit('SET_SELECTED_TEMPLATE', selectedTemplate);
    },
  },
};
