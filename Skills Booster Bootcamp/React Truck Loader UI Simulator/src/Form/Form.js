import styles from './Form.module.css'
import {useRef, useState} from "react";
import Log from "../Log/Log";

const Form = props => {

    const [logFile, setLogFile] = useState([])

    const id = useRef(null)
    const load = useRef(0)
    const unitWeight = useRef(0)

    const addParcels = (event) => {
        event.preventDefault()
        const target = props.trucks.find(truck => truck.id === Number(id.current.value))

        if (target) {
            target.load += Number(load.current.value)
            target.weight += Number(load.current.value) * Number(unitWeight.current.value)

            const editedTrucks = [...props.trucks]

            props.refresher(editedTrucks)
        } else {

            const newTruck = {
                id: Number(id.current.value),
                load: Number(load.current.value),
                weight: Number(load.current.value) * Number(unitWeight.current.value)
            }

            const newTrucks = [...props.trucks, newTruck]
            props.refresher(newTrucks)

        }

        const d = new Date()
        const day = d.getUTCDate()
        const month = d.getUTCMonth() + 1
        const year = d.getUTCFullYear()
        const hour = d.getUTCHours()
        const minutes = d.getUTCMinutes()
        const seconds = d.getUTCSeconds()

        const fallDate = `${day}-${month}-${year} at ${hour}:${minutes}:${seconds}`

        const logData = `On ${fallDate} Truck No ${id.current.value} loaded +${load.current.value} Parcels and added ${Number(load.current.value) * Number(unitWeight.current.value)} kg weight.`
        setLogFile([...logFile, logData])

    }


    const removeParcels = (event) => {
        event.preventDefault()
        const target = props.trucks.find(truck => truck.id === Number(id.current.value))

        try {
            if (target) {

                if (target.load > 0) {
                    if (Number(load.current.value) <= target.load && Number(load.current.value) * Number(unitWeight.current.value) <= target.weight) {

                        target.load -= Number(load.current.value)
                        target.weight -= Number(load.current.value) * Number(unitWeight.current.value)

                        const editedTrucks = [...props.trucks]
                        props.refresher(editedTrucks)

                    } else {
                        throw Error('Wrong Values')
                    }

                    const d = new Date()
                    const day = d.getUTCDate()
                    const month = d.getUTCMonth() + 1
                    const year = d.getUTCFullYear()
                    const hour = d.getUTCHours()
                    const minutes = d.getUTCMinutes()
                    const seconds = d.getUTCSeconds()

                    const fallDate = `${day}-${month}-${year} at ${hour}:${minutes}:${seconds}`

                    const logData = `On ${fallDate} Truck No ${id.current.value} loaded -${load.current.value} Parcels and lost ${Number(load.current.value) * Number(unitWeight.current.value)} kg weight.`
                    setLogFile([...logFile, logData])

                } else {
                    target.load = 0
                    target.weight = 0
                    throw Error("Truck is Empty")
                }
            } else {
                throw Error("Truck Not Found")
            }

        } catch (err) {
            console.log(err.message)
        }
    }

    return (
        <>
            <div className={styles.actions}>

                <h2>Edit Trucks< /h2>

                <form>
                    <div className={styles.inputs}>
                        <label htmlFor="truck-id">Truck ID</label>
                        <input id="truck-id" placeholder="Enter Truck ID" ref={id}/>

                        <label htmlFor="parcel-no">Number of parcels</label>
                        <input id="parcel-no" placeholder="Enter the number of parcels" type="number" ref={load}/>

                        <label htmlFor="parcel-weight">Wight of a parcel</label>
                        <input id="parcel-weight" placeholder="Enter the weight of each parcel" type="number"
                               ref={unitWeight}/>
                    </div>

                    <div className={styles.btns}>
                        <button id="add" onClick={addParcels}>Add</button>
                        <button id="remove" onClick={removeParcels}>Remove</button>
                    </div>
                </form>
                <Log log={logFile}/>
            </div>

        </>
    )
}

export default Form