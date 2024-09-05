// vetur.config.js
/** @type {import('vls').VeturConfig} */
module.exports = {
  // **optional** default: `{}`
  // override vscode settings
  // Notice: It only affects the settings used by Vetur.
  settings: {
    'vetur.useWorkspaceDependencies': true,
    'vetur.experimental.templateInterpolationService': true,
  },
  // **optional** default: `[{ root: './' }]`
  // support monorepos
  projects: [
    './net_ninja/vue3_tutorial/modal-project', // Shorthand for specifying only the project root location
    './net_ninja/vue3_tutorial/reaction-timer',
  ],
};
