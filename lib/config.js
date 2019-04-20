const os = require('os')
const path = require('path')

const cwd = process.cwd()

let config

try {
  config = require(path.join(cwd, 'x-pages.config'))
} catch (e) {
  try {
    const projectPackage = require(path.join(cwd, 'package'))
    config = projectPackage['xPages'] || projectPackage['x-pages'] || {}
  } catch (e) {
    config = {}
  }
}

config.src = config.src || 'src'
config.dest = config.dest || 'dist'
config.public = config.public || 'public'
config.temp = config.temp || 'temp'

module.exports = config
