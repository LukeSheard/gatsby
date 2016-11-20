import babelConfig from '../../lib/utils/babel-config'
import includes from 'lodash/includes'
import path from 'path'
import test from 'ava'

function programStub (fixture) {
  const directory = path.resolve('..', 'fixtures', fixture)
  return { directory }
}

test('it returns a default babel config for babel-loader query', t => {
  const program = programStub('site-without-babelrc')
  const config = babelConfig(program)

  t.true(typeof config === 'object')
  t.truthy(config.presets.length)
  t.truthy(config.plugins.length)
})

test('all plugins are absolute paths to avoid babel lookups', t => {
  const program = programStub('site-without-babelrc')
  const config = babelConfig(program)

  config.presets.forEach(preset => t.true(path.resolve(preset) === preset))
  config.plugins.forEach(plugin => t.true(path.resolve(plugin) === plugin))
})

test('fixture can resolve plugins in gatsby directory (crawling up)', t => {
  const program = programStub('site-with-valid-babelrc')

  const config = babelConfig(program)
  t.truthy(config.presets.length)
})

test('throws error when babelrc is not parseable', t => {
  const program = programStub('site-with-invalid-babelrc')

  t.throws(() => babelConfig(program))
})

test('can read babel from packagejson', t => {
  const program = programStub('site-with-valid-babelpackage')

  const config = babelConfig(program)
  t.truthy(config.presets.length)
})

test('throws when a plugin is not available', t => {
  const program = programStub('site-with-unresolvable-babelrc')
  t.throws(() => babelConfig(program))
})
