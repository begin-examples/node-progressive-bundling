module.exports = function error(err) {
  console.log(err)
  return {
    //statusCode: 500,
    headers: {
      'content-type': 'text/javascript'
    }, 
    body: `console.error('500 ssr render error: ', "${err.message}")`
  }
}
