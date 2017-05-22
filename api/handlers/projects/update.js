'use strict'

const path = require('path')
const glob = require('glob')
const fse = require('fs-extra')
const YAML = require('yamljs')
const Hoek = require('hoek')
const Boom = require('boom')

module.exports = {
  auth: false,
  handler (request, reply) {
    let data = request.payload
    data.updatedAt = new Date()
    const dirpath = path.resolve(__dirname, '../../../data/projects')
    const patternPath = dirpath + '/**/' + request.params.id + '.yml'
    const patternFiles = glob.sync(patternPath, {
      nodir: true,
      dot: true
    })
    if (patternFiles.length === 1) {
      let oldData = YAML.load(patternFiles[0])
      let newData = Hoek.applyToDefaults(oldData, data)
      const year = new Date(oldData.createdAt).getUTCFullYear()
      const month = new Date(oldData.createdAt).getUTCMonth()
      const day = new Date(oldData.createdAt).getUTCDate()
      const filepath = path.resolve(__dirname, '../../../data/projects', year.toString(), ('0' + (month + 1)).slice(-2), day.toString(), request.payload.id + '.yml')
      fse.ensureFileSync(filepath)
      fse.writeFileSync(filepath, YAML.stringify(data, 5))
      return reply(newData)
    } else {
      return reply(Boom.notFound('project not found.'))
    }
  }
}
