const fs = require('fs')
const path = require('path')
const yaml = require('js-yaml')

const cwd = process.cwd()

module.exports = () => {
  const data = {}

  try {
    const files = fs.readdirSync(path.join(cwd, 'src/data'))

    files.forEach(item => {
      const ext = path.extname(item)
      const key = path.basename(item, ext)
      const content = fs.readFileSync(path.join(cwd, 'src/data', item), 'utf8')

      switch (ext) {
        case '.js':
        case '.json':
          data[key] = JSON.parse(content)
          break
        case '.yml':
        case '.yaml':
          data[key] = yaml.load(content)
          break
      }
    })
  } catch (e) {}

  return data
}
