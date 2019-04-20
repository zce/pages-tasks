import test from 'ava'
import { clean, compile, build } from '..'

import path from 'path'

test.beforeEach(t => {
  process.chdir(path.join(__dirname, '../example'))
})

test.serial('clean', async t => {
  await clean()
  t.pass()
})

test.serial('compile', async t => {
  await compile()
  t.pass()
})

test.serial('build', async t => {
  await build()
  t.pass()
})
