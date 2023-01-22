//  io.server.js

const PORT = 13555
const port = process.env.PORT || PORT

const options = {
  cors: {
    origin: 'http://localhost:5500'
  }
}

const io = require('socket.io')(port, options)
.on('connection', socket => {
  console.log(`new client connected ${socket.id}`)
})
