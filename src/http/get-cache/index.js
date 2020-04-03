require = require('esm')(module)
const data = require('@begin/data')
const lookup = require('@architect/shared/cache-lookup.js')
const HTML = require('@architect/views/document/html.js').default
const renderToString = require('preact-render-to-string')
const { html } = require('@architect/views/modules/vendor/preact.js')
const Cache = require('@architect/views/modules/pages/cache.js').default

exports.handler = async function http(req) {
  let path = req.path || '/'
  // entry file for this page
  let name = 'entry/cache.js'
  // look to see if this file already exists in the cache
  let entry = await lookup({ name })
  let files = await data.get({ table: 'module-cache' })

  return {
    statusCode: 200,
    headers: { 'content-type': 'text/html; charset=utf8' },
    // HTML Document
    body: HTML({
        // Render the page into the HTML document
        children: renderToString(
          html`<${Cache} files=${files}><//>`
        ),
        state: {
          files
        },
        // Add a script tag to load the client side JavaScript
        scripts: [ entry ]
      }
    )
  }
}
