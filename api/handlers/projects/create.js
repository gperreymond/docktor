'use strict'

const path = require('path')
const fse = require('fs-extra')
const YAML = require('yamljs')

module.exports = {
  auth: false,
  handler (request, reply) {
    const data = YAML.stringify(request.payload, 4)
    const year = new Date(request.payload.createdAt).getUTCFullYear()
    const month = new Date(request.payload.createdAt).getUTCMonth()
    const day = new Date(request.payload.createdAt).getUTCDate()
    const filepath = path.resolve(__dirname, '../../data/projects', year.toString(), ('0' + (month + 1)).slice(-2), day.toString(), request.payload.id + '.yml')
    console.log(filepath)
    fse.ensureFileSync(filepath)
    fse.writeFileSync(filepath, data)
    return reply({ created: true })
  }
}
