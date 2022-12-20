import styles from './Broadcaster.module.css'
import Input from "../../../UI/Input/Input.jsx";
import {useState} from "react";
import Video from "../../../components/Video.jsx";

const Broadcaster = () => {
    const [url, setUrl] = useState(null)
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    return (
        <div className={styles.container}>
            <h1>Show The World</h1>

            <Input placeholder='Video URL' onChange={(event) => {
                const watchUrl = event.target.value
                try {
                    if (watchUrl.includes('watch')) {
                        const embedUrl = watchUrl.replace('watch?v=', '/embed/')
                        setUrl(embedUrl)
                    } else if (watchUrl.includes('youtu.be')) {
                        const embedUrl = watchUrl.replace('https://youtu.be/', 'https://www.youtube.com/embed/')
                        setUrl(embedUrl)
                    } else {
                        throw Error('Video Not Found')
                    }
                    setError(false)
                } catch (err) {
                    setError(true)
                    setErrorMessage(err.message)
                }


            }}/>

            {error ? <p>{errorMessage}</p> : <Video
                width="1200" height="600"
                src={url}
                frameBorder="0"
                >
                </Video>}
        </div>
    )
}

export default Broadcaster