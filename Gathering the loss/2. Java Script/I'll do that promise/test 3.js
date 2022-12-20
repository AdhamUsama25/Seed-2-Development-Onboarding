const randomAdd = (num) => {
    return new Promise((resolve) => {
        const result = Math.round(num * (Math.random() * 100) + 1)

        setTimeout(() => {
            resolve(result)
        }, 2000)

    })
}
//
// const caller = async (num) => {
//     const result = await randomAdd(num)
//     console.log(result)
//
// }
//
// caller(1)
// //

const arrSum = async (anArr) => {
    return await anArr.reduce((sum, x) => sum + x)
}

const myArr = [1, 2, 3, 4, 5]

const caller = async (anArr) => {

    const result = Promise.all(anArr.map(async (element) =>
        await randomAdd(element)
    ))

    console.log(await result)

    const sum = await arrSum(await result)

    console.log(await sum)


}

caller(myArr)