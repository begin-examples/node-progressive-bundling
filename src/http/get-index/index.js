require = require('esm')(module)
const lookup = require('@architect/shared/entry-lookup.js')
const HTML = require('@architect/views/document/html.js').default
const renderToString = require('preact-render-to-string')
const { html } = require('@architect/views/modules/vendor/preact.js')
const Home = require('@architect/views/modules/pages/home.js').default

/** plain 'ol lambda function */
exports.handler = async function http(req) {
  let name = 'entry/home.js'
  let entry = await lookup(name)

  return {
    statusCode: 200,
    headers: { 'content-type': 'text/html; charset=utf8' },
    body: HTML({
        children: renderToString(
          html`<${Home}><//>`
        ),
        scripts: [ entry ]
      }
    )
  }
}
