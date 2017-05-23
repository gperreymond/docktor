'use strict'

const path = require('path')
const uuid = require('uuid')
const fse = require('fs-extra')
const YAML = require('yamljs')

module.exports = {
  auth: false,
  handler (request, reply) {
    let data = request.payload
    data.createdAt = new Date()
    data.updatedAt = new Date()
    data.triggers = []
    data.triggers.push({
      id: uuid.v4(),
      name: 1
    })
    const year = new Date(data.createdAt).getUTCFullYear()
    const month = new Date(data.createdAt).getUTCMonth()
    const day = new Date(data.createdAt).getUTCDate()
    const filepath = path.resolve(__dirname, '../../../data/projects', year.toString(), ('0' + (month + 1)).slice(-2), day.toString(), request.payload.id + '.yml')
    fse.ensureFileSync(filepath)
    fse.writeFileSync(filepath, YAML.stringify(data, 5))
    return reply(data)
  }
}
