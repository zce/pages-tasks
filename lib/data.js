const fs = require('fs')
const path = require('path')
const yaml = require('js-yaml')

const js = filename => {
  delete require.cache[filename]
  return require(filename)
}

const yaml = filename => yaml.load(fs.readFileSync(filename, 'utf8'))

const parsers = {
  '.json': js,
  '.js': js,
  '.yml': yaml,
  '.yaml': yaml
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
