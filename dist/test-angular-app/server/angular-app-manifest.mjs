
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://PranotiVibhute.github.io/test-angular-app/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/test-angular-app"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 547, hash: '98f62fe51710b9a4325c6d3e51550decd7407783ca6385b9ad4c09561df553de', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1060, hash: 'aeabeb2be41f08328a268821e78a73b4fba26f44bffad90907322b01ec972a47', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 747, hash: 'cdd7cee09d6680f2837e2ed386a000244a9d907f133b1e4ea1184153f977a5a4', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
