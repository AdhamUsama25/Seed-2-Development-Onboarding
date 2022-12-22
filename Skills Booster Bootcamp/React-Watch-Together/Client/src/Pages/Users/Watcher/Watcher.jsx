import theVideo from '../../../assets/👈 شاهد ركلات الترجيح بين الأرجنتين وفرنسا في نهائي كأس العالم.mp4'
// import {useRef} from "react";

const Watcher = props => {
    // const myVideo = useRef()


    const source = theVideo

    props.socket.on('play', () => {
        document.querySelector('video').play()
    })

    props.socket.on('pause', () => {
        document.querySelector('video').pause()

    })

    // props.socket.on('seek', (data) => {
    //     myVideo.current.currentTime = data.currentTime
    // })

    return (
        <>
            <h1>Have Fun</h1>
            <video
                // ref={myVideo}
                width='1200'
                height='600'
                src={source}
                controls={false}
            >
            </video>
        </>)
}

export default Watcher