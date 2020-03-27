const { get } = require('@begin/data')

module.exports = async function lookup(name) {
  let debug = process.env.DEBUG
  let module = `/modules/${name}`
  let entry
  if (!debug) {
    let table = 'module-cache'
    let theModule = c => c.key === name
    // query the cache
    let cache = await get([{ table, key:name }])
    let cached = cache.length
      ? cache.find(theModule).file
      : ''
    entry = cached
      ? `/_static/${ cached }`
      : module
  } else {
    entry = module
  }
  return entry
}
