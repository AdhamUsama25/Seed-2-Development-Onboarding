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
    })

    socket.on('video-ready', (data) => {
        socket.to(data.room).emit('start-video', {
            src: data.src,
            status: data.status
        })
    })

    socket.on('play-video', (data) => {
        const status = data.status
        console.log('video is playing')

        socket.to(data.room).emit('play-video', {
            status: data.status,
            src: data.src
        })
    })

    socket.on('pause-video', (data) => {
        const status = data.status
        console.log(status)
        console.log(data.room)
        console.log('video is paused')
        socket.to(data.room).emit('pause-video', status)
    })
})


server.listen(5175, () => {
    console.log('SERVER IS RUNNING')
})