const btn = document.querySelector('button')


btn.addEventListener('click', (ev) => {
    let userId = prompt('Enter User ID')
    console.log('Cooking meal for userID: ' + userId)


    setTimeout(() => {
            const eve = new CustomEvent('Meal is ready', {
                detail: {
                    id: userId
                }
            })
            document.dispatchEvent(eve);
        },
        1500
    )
})


document.addEventListener('Meal is ready', (e) => {
    console.log('Serving a meal to client ' + e.detail.id)
})


