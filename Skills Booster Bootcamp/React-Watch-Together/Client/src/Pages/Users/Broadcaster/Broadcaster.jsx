import styles from './Broadcaster.module.css'
import {useParams} from "react-router-dom";
import {useRef, useState} from "react";
import theVideo from '../../../assets/👈 شاهد ركلات الترجيح بين الأرجنتين وفرنسا في نهائي كأس العالم.mp4'

const Broadcaster = props => {

    // const myVideo = useRef()


    const params = useParams()
    const {room} = params

    const source = theVideo


    const onPlayHandler = () => {
        props.socket.emit('play-video', {
            room: room
        })
    }

    const onPauseHandler = () => {
        props.socket.emit('pause-video', {
            room: room
        })
    }
    // const seeker = (event) => {
    //     props.socket.emit('seeked', {
    //         room: room,
    //         currentTime: myVideo.current.time
    //     })
    // }


    return (
        <div className={styles.container}>
            <h1>Show The World</h1>

            <video
                // ref={myVideo}
                // onSeeked={seeker}
                onPlay={onPlayHandler}
                onPause={onPauseHandler}
                src={source}
                controls={true}
            >
            </video>

        </div>
    )
}

export default Broadcaster