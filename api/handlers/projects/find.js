'use strict'

const path = require('path')
const glob = require('glob')
const YAML = require('yamljs')
const map = require('lodash').map

module.exports = {
  auth: false,
  handler (request, reply) {
    const dirpath = path.resolve(__dirname, '../../data/projects')
    const patternPath = dirpath + '/**/*.yml'
    const patternFiles = glob.sync(patternPath, {
      nodir: true,
      dot: true
    })
    return reply({
      total_rows: patternFiles.length,
      rows: map(patternFiles, (file) => {
        return YAML.load(file)
      })
    })
  }
}
