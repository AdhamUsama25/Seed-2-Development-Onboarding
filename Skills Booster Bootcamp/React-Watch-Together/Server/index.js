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

    socket.on('seeked', (data) => {
        console.log(data)
        socket.to(data.room).emit('seek', {currentTime: data.currentTime})
    })


})


server.listen(5175, () => {
    console.log('SERVER IS RUNNING')
})