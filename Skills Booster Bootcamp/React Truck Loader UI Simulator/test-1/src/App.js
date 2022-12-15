import styles from './App.module.css'
import Trucks from "./Trucks/Active Trucks/Trucks";
import Form from "./Form/Form";
import {useState} from "react";

const trucks = []

function App() {

    for (let i = 0; i < 10; i++) {

        const id = Math.round(Math.random() * 1000)
        const load = Math.round(Math.random() * 1000)

        const same = trucks.find(truck => truck.id === id)

        if(!same) {
            trucks.push({
                id: id,
                load: load,
                weight: Math.round(load * Math.random()) * 1000
            })
        }
    }

    const [myTrucks, setMyTrucks] = useState(trucks)


    return (
        <>
            <h1 className={styles.head}>Trucks</h1>
            <Trucks trucks={myTrucks}/>
            <Form trucks={myTrucks} refresher={setMyTrucks}/>
        </>
    );
}

export default App;
