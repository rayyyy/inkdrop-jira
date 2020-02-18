'use babel';

import InkdropJiraMessageDialog from './inkdrop-jira-message-dialog';

module.exports = {

  activate() {
    inkdrop.components.registerClass(InkdropJiraMessageDialog);
    inkdrop.layouts.addComponentToLayout(
      'modal',
      'InkdropJiraMessageDialog'
    )
  },

  deactivate() {
    inkdrop.layouts.removeComponentFromLayout(
      'modal',
      'InkdropJiraMessageDialog'
    )
    inkdrop.components.deleteClass(InkdropJiraMessageDialog);
  },

  config: {
    jiraAPIToken: {
      title: 'Jira API Token',
      type: 'string',
      description: 'Jira API Token',
      default: ''
    }
  }
};
