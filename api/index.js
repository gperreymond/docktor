const Hapi = require('hapi')
const Routes = require('./routes')

let server = new Hapi.Server({
  debug: false,
  connections: {
    routes: {
      cors: true
    }
  }
})

server.connection({
  host: 'localhost',
  port: '4000'
})

server.route(Routes.endpoints)

server.start((error) => {
  if (error) {
    console.log(error)
    process.exit(1)
  }
  console.log('Server running at:', server.info.uri)
})
