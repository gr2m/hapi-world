const Hapi = require('hapi')

// Create a server with a host and port
const server = new Hapi.Server()
server.connection({
  address: '0.0.0.0',
  port: 8000
})

// Add the route
server.route({
  method: 'GET',
  path: '/',
  handler: function (request, reply) {
    return reply('hapi world! Check 1, 2')
  }
})

// Start the server
server.start((error) => {
  if (error) throw error
  console.log('Server running at:', server.info.uri)
})
