require = require('esm')(module)
const lookup = require('@architect/shared/cache-lookup.js')
const HTML = require('@architect/views/document/html.js').default
const renderToString = require('preact-render-to-string')
const { html } = require('@architect/views/modules/vendor/preact.js')
const About = require('@architect/views/modules/pages/about.js').default

exports.handler = async function http(req) {
  console.log('Request: ', req.path)
  // entry file for this page
  let name = 'entry/about.js'
  // look to see if this file already exists in the cache
  let entry = await lookup({ name })
  console.log('file: ', entry)

  return {
    statusCode: 200,
    headers: { 'content-type': 'text/html; charset=utf8' },
    // HTML Document
    body: HTML({
        // Render the page into the HTML document
        children: renderToString(
          html`<${About}><//>`
        ),
        // Add a script tag to load the client side JavaScript
        scripts: [ entry ]
      }
    )
  }
}

