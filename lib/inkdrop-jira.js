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
  }

};
