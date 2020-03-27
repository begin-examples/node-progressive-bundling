module.exports = function notfound(file) {
  return {
    //statusCode: 404,
    headers: {
      'content-type': 'text/javascript'
    }, 
    body: `console.error('404 not found: ', "${ file }")`
  }
}
