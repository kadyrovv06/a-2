var API_PRODUCTS = "https://dummyjson.com/products"

var box = document.querySelector(".box")

async function getProducts() {
    try {
        const res = await fetch(API_PRODUCTS)
        const data = await res.json()
        console.log(data);
        showProduct(data.products)
    } catch (error) {
        console.log(error);
    }
}
getProducts()

function showProduct(products) {
    box.innerHTML = products.map((item) => {

        return ` <div>
            <p>${item.title}</p>
            <img src="${item.thumbnail}"/>
        </div> `
    })
}