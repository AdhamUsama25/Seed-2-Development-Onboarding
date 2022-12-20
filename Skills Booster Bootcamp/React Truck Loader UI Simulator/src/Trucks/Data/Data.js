import styles from './Data.module.css'

const Data = props => {
    const truck = props.truck
    return (
        <ul className={styles.data} onClick={props.onClick}>
            <li>{`ID: ${truck.id}`}</li>
            <li>{`Load: ${truck.load} Parcels`}</li>
            <li>{`Weight: ${truck.weight} Kg`}</li>
        </ul>
    )
}

export default Data