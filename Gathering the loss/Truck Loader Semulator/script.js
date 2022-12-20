const trucks = [{id: 1, load: 50, weight: 500}, {id: 2, load: 50, weight: 500}, {id: 3, load: 50, weight: 500}]

let log = ""

const addTruck = (truck) => {

    const container = document.querySelector('#trucks')

    const newTruck = document.createElement('div')
    newTruck.className = 'truck'
    container.appendChild(newTruck)


    const label = document.createElement('div')
    label.className = 'label'
    label.id = `${truck.id}`
    if(truck.load === 0){
        label.style.backgroundColor = "#ccc"
    }
    newTruck.appendChild(label)

    const id = document.createElement('h3')
    id.innerText = truck.id
    label.appendChild(id)

    const data = document.createElement("ul")
    data.className = 'data'
    newTruck.appendChild(data)

    const load = document.createElement('li')
    load.innerText = `${truck.load} Parcels`
    data.appendChild(load)

    const weight = document.createElement('li')
    weight.innerText = `${truck.weight} Kg`
    data.appendChild(weight)
}


const loader = () => {


    trucks.forEach((truck => 
        addTruck(truck)
    ))

    logUpdate()

}


const logUpdate = () =>{
    const logger = document.querySelector("#log")
    const aLog = document.createElement('p')
    aLog.innerHTML = `${log}`
    logger.appendChild(aLog)
}


loader()

const addParcels = (event) => {
    event.preventDefault()


    const truckID = document.querySelector("#truck-id")
    const parcels = document.querySelector("#parcel-no")
    const weight = document.querySelector("#parcel-weight")

    let found = false

    const truck = trucks.find(truck => truck.id === Number(truckID.value))

    if (truck) {
        found = true
        truck.load += Number(parcels.value)
        truck.weight += Number(parcels.value) * Number(weight.value)

        const old = document.querySelector('#trucks')
        for (let i = 0; i < trucks.length; i++) {
            old.removeChild(document.querySelector('.truck'))
        }

        const d = new Date()
        const day = d.getUTCDate()
        const month = d.getUTCMonth() + 1
        const year = d.getUTCFullYear()
        const hour = d.getUTCHours()
        const menutes = d.getUTCMinutes()
        const seconds = d.getUTCSeconds()

        const logData = `On ${day}-${month}-${year} at ${hour}:${menutes}:${seconds} Truck No ${truck.id} loaded +${parcels.value} Parcels and added ${Number(parcels.value) * Number(weight.value)} kg weight.\n`
        log = logData

        loader()
    }


    if (!found) {

        const newTruck = {
            id: Number(truckID.value),
            load: parcels.value,
            weight: weight.value
        }

        trucks.push(newTruck)
        addTruck(newTruck)
    }


}
const removeParcels = (event) => {
    event.preventDefault()

    const truckID = document.querySelector("#truck-id")
    const parcels = document.querySelector("#parcel-no")
    const weight = document.querySelector("#parcel-weight")

    let found = false

    const truck = trucks.find(truck => truck.id === Number(truckID.value))
    
    if (truck) {
        found = true

        if(truck.load != 0)
        {
            truck.load -= Number(parcels.value)
        truck.weight -= Number(parcels.value) * Number(weight.value)

        if (truck.load === 0){truck.weight = 0}

        const old = document.querySelector('#trucks')

        for (let i = 0; i < trucks.length; i++) {
            old.removeChild(document.querySelector('.truck'))
        }

        const d = new Date()
        const day = d.getUTCDate()
        const month = d.getUTCMonth() + 1
        const year = d.getUTCFullYear()
        const hour = d.getUTCHours()
        const menutes = d.getUTCMinutes()
        const seconds = d.getUTCSeconds()

        const logData = `On ${day}-${month}-${year} at ${hour}:${menutes}:${seconds} Truck No ${truck.id} loaded -${parcels.value} Parcels and lost ${Number(parcels.value) * Number(weight.value)} kg weight.`
        log = logData
        

        loader()
    }else{
        throw Error (`Truck ${truckID.value} is empty`)
    }
    }
    

    if (!found) {
        throw Error(`Truck ${truckID.value} not found`)
    }
}

const add = document.querySelector("#add")
const remove = document.querySelector("#remove")

add.addEventListener('click', addParcels)
remove.addEventListener('click', removeParcels)




