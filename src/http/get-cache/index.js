const data = require('@begin/data')

exports.handler = async function http(req) {

  let files = await data.get({ table: 'module-cache' })
  let fmt = f=> `<li>${ f.key } &rarr; ${ f.file }</li>`
  let form = `<form method=post action=/cache><button>clear cache</button></form>`
  let doc = `<div>${ form }</div><ul>${ files.map(fmt).join('') }</ul>`

  return {
    headers: {
      'content-type': 'text/html; charset=utf8'
    },
    body: `<!doctype html><html><body>${ doc }</body></html>`
  }
}
