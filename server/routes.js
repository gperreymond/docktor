'use strict'

exports.endpoints = [

  { method: 'GET', path: '/api/alive', config: require('./handlers/alive') },

  { method: 'GET', path: '/api/projects', config: require('./handlers/projects/find') },
  { method: 'POST', path: '/api/projects', config: require('./handlers/projects/create') },
  { method: 'GET', path: '/api/projects/{id}', config: require('./handlers/projects/read') },
  { method: 'PATCH', path: '/api/projects/{id}', config: require('./handlers/projects/update') }

]
