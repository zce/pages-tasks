import test from 'ava'
import { build } from '..'

import path from 'path'

test.before(t => {
  process.chdir(path.join(__dirname, 'fixtures'))
})

test.serial('build', async t => {
  await build()
  t.pass()
})
