const path = require('path');
const fs = require('fs');

const withDefaults = require('../../../util/options');

module.exports = ({ store, reporter }, themeOptions) => {
  const { configPath, docsPath } = withDefaults(themeOptions);

  const { program } = store.getState();
  const dirs = [
    path.join(program.directory, configPath),
    path.join(program.directory, docsPath),
  ];

  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      reporter.success(`Intialized the ${dir} directory`);
      fs.mkdirSync(dir);
    }
  });
};
