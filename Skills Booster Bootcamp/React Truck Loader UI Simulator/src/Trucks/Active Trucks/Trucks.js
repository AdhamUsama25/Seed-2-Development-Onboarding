import styles from './Trucks.module.css'
import Truck from "../Truck/Truck";


const Trucks = props => {

    const activeTrucks = props.trucks.filter(truck => truck.load > 0)

    return (
        <div id='trucks' className={styles.trucks}>
            {
                activeTrucks.map(truck => <Truck truck={truck} key={truck.id}/>)
            }
        </div>
    )
}

export default Trucks