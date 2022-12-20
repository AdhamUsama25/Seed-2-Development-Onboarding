import Video from "../../../components/Video.jsx";
import {useEffect, useState} from "react";

const Watcher = props => {
    const [status, setStatus] = useState('pause')
    const [source, setSource] = useState()

    useEffect(() => {
        props.socket.on('start-video', (data) => {
            // setStatus(data.status)
            // setSource(data.src)

        })

        props.socket.on('play-video', (data) => {
            setSource(data.src)
            setStatus(data.status)
        })

        props.socket.on('pause-video', status => {
            // setStatus(status)
            // console.log(status)
        })
    }, [props.socket,source])




    return (
        <>
            <h1>Have Fun</h1>
            <Video
                src={source}
                controls={false}
            />
        </>)
}

export default Watcher