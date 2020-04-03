require = require('esm')(module)
const lookup = require('@architect/shared/cache-lookup.js')
const HTML = require('@architect/views/document/html.js').default
const renderToString = require('preact-render-to-string')
const { html } = require('@architect/views/modules/vendor/preact.js')
const Home = require('@architect/views/modules/pages/home.js').default

exports.handler = async function http(req) {
  // entry file for this page
  let name = 'entry/home.js'
  // look to see if this file already exists in the cache
  let entry = await lookup({ name })

  return {
    statusCode: 200,
    headers: { 'content-type': 'text/html; charset=utf8' },
    // HTML Document
    body: HTML({
        // Render the page into the HTML document
        children: renderToString(
          html`<${Home}><//>`
        ),
        // Add a script tag to load the client side JavaScript
        scripts: [ entry ]
      }
    )
  }
}
