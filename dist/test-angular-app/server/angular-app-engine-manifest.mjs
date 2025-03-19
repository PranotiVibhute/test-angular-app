
export default {
  basePath: 'https://PranotiVibhute.github.io/test-angular-app',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
