const fs = require('fs')
const path = require('path')
const yaml = require('js-yaml')

const parsers = {
  '.json': filename => JSON.parse(fs.readFileSync(filename, 'utf8')),
  '.js': filename => {
    delete require.cache[filename]
    return require(filename)
  },
  '.yml': filename => yaml.load(fs.readFileSync(filename, 'utf8')),
  '.yaml': filename => yaml.load(fs.readFileSync(filename, 'utf8'))
}

const loadData = dir => {
  dir = path.resolve(dir)
  const data = {}
  try {
    fs.readdirSync(dir).forEach(item => {
      const ext = path.extname(item)
      const key = path.basename(item, ext)
      const itemPath = path.join(dir, item)
      if (fs.statSync(itemPath).isFile()) {
        if (!parsers[ext]) return
        data[key] = parsers[ext](path.join(dir, item))
      } else {
        data[key] = loadData(itemPath)
      }
    })
  } catch (e) {}
  return data
}

module.exports = loadData
