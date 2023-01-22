// io.client.js

const PORT = 13555
import { io } from 'socket.io-client'

function connect() {
  const socket = io(`ws://localhost:${PORT}`)
}

setInterval(connect, 5000)
