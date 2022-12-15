const randomAdd = (num) => {
    return new Promise((resolve, reject) => {
        const result = Math.round(num * (Math.random() * 100) + 1)
        setTimeout(() => {
            if (result < 50) {
                reject(Error(`failed ${result}`))
            } else {
                resolve(`Success ${result}`)
            }
        }, 2000)

    })
}

const calling = async (number) => {

    try {
        console.log(await randomAdd(number))
    } catch (err) {
        console.log(err.message)
    }

}
calling(1)