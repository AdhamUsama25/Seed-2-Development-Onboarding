import styles from './Truck.module.css'
import {useState} from "react";
import Data from "../Data/Data";

const Truck = props => {
    const [showData, setShowData] = useState(false)

    const truck = props.truck

    const toggleShowData = () => {
        setShowData(!showData)
    }

    if (!showData) {
        return <div className={styles.label} id={truck.id} onClick={toggleShowData}>
            <h3>{truck.id}</h3>
        </div>
    } else {
        return <Data truck={truck} onClick={toggleShowData}/>
    }

}

export default Truck