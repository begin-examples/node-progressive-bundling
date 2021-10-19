let test = require('tape')
let sandbox = require('@architect/sandbox')
let data = require('@begin/data')

test('Start the Sandbox', async t => {
  t.plan(1)
  let result = await sandbox.start()
  t.equal(result, 'Sandbox successfully started')
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

test('Shut down the Sandbox', async t => {
  t.plan(1)
  let result = await sandbox.end()
  t.equal(result, 'Sandbox successfully shut down')
})

