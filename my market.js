let products = [

{ image : "iphone.webp",
    name: "Iphone 15",
    price: "₦250,000"
},

{
    image: "laptop.jpg",
    name: "Laptop",
    price: "₦400,000"
},

{
    image: "tv.jpg",
    name: "Smart TV",
    price: "₦500,000"
},

{
    image: "tv.jpg",
    name: "Smart TV",
    price: "₦500,000"
},

{
    image: "tv.jpg",
    name: "Smart TV",
    price: "₦500,000"
},
{
    image: "tv.jpg",
    name: "Smart TV",
    price: "₦500,000"
},
{
    image: "tv.jpg",
    name: "Smart TV",
    price: "₦500,000"
},
{
    image: "tv.jpg",
    name: "Smart TV",
    price: "₦500,000"
},
{
    image: "tv.jpg",
    name: "Smart TV",
    price: "₦500,000"
},
{
    image: "tv.jpg",
    name: "Smart TV",
    price: "₦500,000"
},
{
    image: "tv.jpg",
    name: "Smart TV",
    price: "₦500,000"
},
{
    image: "tv.jpg",
    name: "Smart TV",
    price: "₦500,000"
},
{
    image: "tv.jpg",
    name: "Smart TV",
    price: "₦500,000"
},
{
    image: "tv.jpg",
    name: "Smart TV",
    price: "₦500,000"
},
{
    image: "tv.jpg",
    name: "Smart TV",
    price: "₦500,000"
},
{
    image: "tv.jpg",
    name: "Smart TV",
    price: "₦500,000"
},
{
    image: "tv.jpg",
    name: "Smart TV",
    price: "₦500,000"
},





];

let container =
document.querySelector(".container");

for(let i = 0; i < products.length; i++){

    container.innerHTML += 
    `
    <div class="box">

        <img src="${products[i].image}">

        <h3>
            ${products[i].name}
        </h3>

        <p>
            ${products[i].price}
        </p>

    </div>
     
    `;
}