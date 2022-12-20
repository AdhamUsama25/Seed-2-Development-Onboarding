const getData = async () => {
    const response = await fetch("https://dummyjson.com/products")
    const data = await response.json()

    const dataArray = data.products

    const products = []

    for (const key in dataArray) {
        products.push({
            id: key,
            title: dataArray[key].title,
            description: dataArray[key].description,
            price: dataArray[key].price,
            discountPercentage: dataArray[key].discountPercentage,
            rating: dataArray[key].rating,
            stock: dataArray[key].stock,
            brand: dataArray[key].brand,
            category: dataArray[key].category,
            thumbnail: dataArray[key].thumbnail,
            images: dataArray[key].images
        });
    }
    console.log(products)

    products.map((product) => {
        newProduct(product)
    })
}

getData()


const newProduct = productDetails => {
    //create Card
    const card = document.createElement("div")
    card.className = "product"

    // Add thumbnail
    const thumbnail = document.createElement("img")
    thumbnail.src = productDetails.thumbnail
    thumbnail.alt = productDetails.title
    card.appendChild(thumbnail);

    //Add title
    const title = document.createElement("h2")
    title.innerText = productDetails.title
    card.appendChild(title)

    // Add Description
    const description = document.createElement("p")
    description.innerText = productDetails.description
    card.appendChild(description)

    // Add price
    const price = document.createElement("h1")
    price.innerText = `${productDetails.price} EGP`
    card.appendChild(price)

    // Add discount
    const discount = document.createElement("p")
    discount.innerText = `${productDetails.discountPercentage}% OFF`
    discount.className = "discount"
    card.appendChild(discount)


    // Add Product to page
    const main = document.querySelector("main")
    main.appendChild(card)
}

