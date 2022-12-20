import styles from './Card.module.css'
import {Link} from "react-router-dom";

const Card = props => {
    return <Link to={props.link} className={styles.card}>{props.text}</Link>
}

export default Card