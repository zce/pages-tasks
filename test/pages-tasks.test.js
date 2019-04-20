import test from 'ava'
import { clean, compile, serve, build, start, deploy } from '..'

test.beforeEach(t => {
  process.chdir('example')
})

test('clean', async t => {
  await clean()
})
