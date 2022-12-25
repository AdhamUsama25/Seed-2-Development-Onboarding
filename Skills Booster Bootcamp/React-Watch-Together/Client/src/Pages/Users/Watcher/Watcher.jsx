import theVideo from '../../../assets/👈 شاهد ركلات الترجيح بين الأرجنتين وفرنسا في نهائي كأس العالم.mp4'
import {useEffect, useRef} from "react";

const Watcher = props => {
    const myVideo = useRef(null)


    const source = theVideo

    useEffect(() => {
        props.socket.on('play', () => {
            myVideo.current.play()
        })

        props.socket.on('pause', () => {
            myVideo.current.pause()

        })

        props.socket.on('seek', (data) => {
            console.log(data)
            myVideo.current.currentTime = data.currentTime
        })
    }, [props.socket])


    return (
        <>
            <h1>Have Fun</h1>
            <video
                ref={myVideo}
                width='1200'
                height='600'
                src={source}
                controls={false}
            >
            </video>
        </>)
}

export default Watcher