import styles from './Main.module.css'
import {useRef, useState} from "react";
import {Link} from "react-router-dom";
import Input from "../../UI/Input/Input.jsx";

const Main = (props) => {
    const [roomInput, setRoomInput] = useState('')

    const joinRoomHandler = () => {
        props.socket.emit('join-room', {
            roomId: roomInput
        })
    }

    return (
        <main>
            <h1>Join a Room</h1>

            <Input placeholder='Room ID' onChange={(event) => {
                setRoomInput(event.target.value)
            }}/>

            <div className={styles.actions}>
                    <Link className={styles.action} to={`/${roomInput}`} onClick={joinRoomHandler}>Join</Link>
            </div>
        </main>
    )
}

export default Main