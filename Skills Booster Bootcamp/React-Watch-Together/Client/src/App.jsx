import './App.css'
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import Main from "./Pages/Main/Main.jsx";
import Broadcaster from "./Pages/Users/Broadcaster/Broadcaster.jsx";
import Watcher from "./Pages/Users/Watcher/Watcher.jsx";
import io from 'socket.io-client'
import Room from "./Pages/Room/Room.jsx";

function App() {

    const socket = io.connect('http://localhost:5175')


    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Main socket={socket}/>}/>
                <Route path='/:room' element={<Room socket={socket}/>}/>
                <Route path='/:room/broadcaster' element={<Broadcaster socket={socket}/>}/>
                <Route path='/:room/watcher' element={<Watcher socket={socket}/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
