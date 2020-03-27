let test = require('tape')
let sandbox = require('@architect/sandbox')
let data = require('@begin/data')

test('before', async t => {
  await sandbox.start()
  t.end()
})

test('env', async t => {
  t.plan(1)
  let table = 'test-cache'
  let entry = { js: 'app.js', css: 'app.css' }
  let write = await data.set([{ table, key: entry.js }, { table, key: entry.css }])
  let read = await data.get([{ table, key: entry.js }, { table, key: entry.css }])
  let foo = await data.get([{table: 'aballs', key:'boo'}])
  t.ok(true, 'timed')
  console.log(write)
  console.log(read)
  console.log(foo)
})

test('after', async t => {
  await sandbox.end()
  t.end()
})
