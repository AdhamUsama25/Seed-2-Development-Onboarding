const salute = name => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`Hello ${name}`)
        }, 2000)
    })

};


const calling = async (name) => {
    salute(name).then(
        (resolved) => {
            console.log(resolved)
        }
    )
}

calling('Adham')