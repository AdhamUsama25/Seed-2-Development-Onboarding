const express = require('express')
const app = express()
const http = require('http')
const {Server} = require('socket.io')
const cors = require('cors')

const server = http.createServer(app)

const io = new Server(server, {
    cors: {
        origin: true,
    }
})

io.on('connection', (socket) => {
    console.log(`User ${socket.id} is online`)

    socket.on('join-room', (data) => {
        socket.join(data.roomId)

        console.log(data.roomId)
    })

    socket.on('play-video', (data) => {

        socket.to(data.room).emit('play')
    })

    socket.on('pause-video', (data) => {
        socket.to(data.room).emit('pause')
    })
})


server.listen(5175, () => {
    console.log('SERVER IS RUNNING')
})