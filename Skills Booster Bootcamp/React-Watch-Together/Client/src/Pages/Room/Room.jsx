import styles from './room.module.css'
import {Link, useParams} from "react-router-dom";

const Room = props => {
    const params = useParams()
    const {room} = params


    return (
        <>
            <h1>Welcome to Room #{room}</h1>
            <p>You are a...</p>
            <div className={styles.actions}>
                <Link to={`/${room}/broadcaster`} className={styles.action}>
                    Broadcaster
                </Link>

                <Link to={`/${room}/watcher`} className={styles.action}>
                    Watcher
                </Link>
            </div>
        </>

    )
}

export default Room