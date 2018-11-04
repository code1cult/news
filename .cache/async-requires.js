// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-page-js": () => import("/home/ilovetraffic/news/src/pages/page.js" /* webpackChunkName: "component---src-pages-page-js" */),
  "component---cache-dev-404-page-js": () => import("/home/ilovetraffic/news/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-index-js": () => import("/home/ilovetraffic/news/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */)
}

exports.data = () => import("/home/ilovetraffic/news/.cache/data.json")

