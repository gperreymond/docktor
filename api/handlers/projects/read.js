'use strict'

const path = require('path')
const glob = require('glob')
const YAML = require('yamljs')

module.exports = {
  auth: false,
  handler (request, reply) {
    const dirpath = path.resolve(__dirname, '../../../data/projects')
    const patternPath = dirpath + '/**/' + request.params.id + '.yml'
    const patternFiles = glob.sync(patternPath, {
      nodir: true,
      dot: true
    })
    if (patternFiles.length === 1) {
      return reply(YAML.load(patternFiles[0]))
    } else {
      return reply({})
    }
  }
}
