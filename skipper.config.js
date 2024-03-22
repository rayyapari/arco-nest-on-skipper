const define = require('@tokopedia/skipper/cli/config/define-config');

module.exports = define({
  globalCSS: true,

  babel: {
    server: {
      plugins: [['@emotion/babel-plugin']],
      skipperPresetOptions: {
        importSource: '@emotion/react',
      },
    },
    client: {
      plugins: [['@emotion/babel-plugin']],
      skipperPresetOptions: {
        importSource: '@emotion/react',
      },
    },
  },
});
