const app = require('./app')
const http = require('http')
const config = require('./utils/config')
const logger = require('./utils/logger')

const server = http.createServer(app)

// start server on specified port and pass below message as param to info function in logger file
server.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`)
})