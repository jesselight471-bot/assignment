// let products = [

// { image : "beagle.webp",
//     name: "beagle",
//     price: "₦250,000"
// },

// {
//     image: "bitbull.webp",
//     name: "pitbull",
//     price: "₦400,000"
// },

// {
//     image: "dachshund.webp",
//     name: "dachsund",
//     price: "₦500,000"
// },

// {
//     image: "german shepherd.webp",
//     name: "german shepherd",
//     price: "₦500,000"
// },

// {
//     image: "golden retriver.webp",
//     name: "golden retriver",
//     price: "₦500,000"
// },
// {
//     image: "maltipoo.webp",
//     name: "maltipoo",
//     price: "₦500,000"
// },
// {
//     image: "pomeranian.webp",
//     name: "pomeranian",
//     price: "₦500,000"
// },
// {
//     image: "OIP(1).webp",
//     name: "dog",
//     price: "₦500,000"
// },
// {
//     image: "dd.webp",
//     name: "Smart TV",
//     price: "₦500,000"
// },
// {
//     image: "tv.jpg",
//     name: "Smart TV",
//     price: "₦500,000"
// },
// {
//     image: "tv.jpg",
//     name: "Smart TV",
//     price: "₦500,000"
// },
// {
//     image: "tv.jpg",
//     name: "Smart TV",
//     price: "₦500,000"
// },
// {
//     image: "tv.jpg",
//     name: "Smart TV",
//     price: "₦500,000"
// },
// {
//     image: "tv.jpg",
//     name: "Smart TV",
//     price: "₦500,000"
// },
// {
//     image: "tv.jpg",
//     name: "Smart TV",
//     price: "₦500,000"
// },
// {
//     image: "tv.jpg",
//     name: "Smart TV",
//     price: "₦500,000"
// },
// {
//     image: "tv.jpg",
//     name: "Smart TV",
//     price: "₦500,000"
// },





// ];

// let container =
// document.querySelector(".container");
// let search= document.querySelector("#search");

// for(let i = 0; i < products.length; i++){

//     container.innerHTML += 
//     `
//     <div class="box">

//         <img src="${products[i].image}">

//         <h3>
//             ${products[i].name}
//         </h3>

//         <p>
//             ${products[i].price}
//         </p>

//        <button class="btn">
//             Add To Cart 🛒
//         </button> 

//     </div>
     
//     `;
// }

let products = [

{
    image : "beagle.webp",
    name: "Beagle",
    price: "₦250,000"
},

{
    image: "bitbull.webp",
    name: "Pitbull",
    price: "₦400,000"
},

{
    image: "dachshund.webp",
    name: "Dachshund",
    price: "₦500,000"
},

{
    image: "golden retriver.webp",
    name: "Golden retriver",
    price: "₦500,000"
},
{
    image: "maltipoo.webp",
    name: "Maltipoo",
    price: "₦500,000"
},
{
    image: "pomeranian.webp",
    name: "Pomeranian",
    price: "₦500,000"
},

{
    image: "download.webp",
    name: "Worthwriler",
    price: "₦500,000"
},

{
    image: "yorkie.webp",
    name: "Yorkie",
    price: "₦500,000"
},



];

let container = document.querySelector(".container");
let search = document.querySelector("#search");

function showProducts(items){

    container.innerHTML = "";

    for(let i = 0; i < items.length; i++){

        container.innerHTML += `
        
        <div class="box">

            <img src="${items[i].image}">

            <h3>${items[i].name}</h3>

            <p>${items[i].price}</p>

            <button class="btn">
                Add To Cart 🛒
            </button>

        </div>
        
        `;
    }
}

showProducts(products);

search.addEventListener("input", function(){

    let searchValue =
    search.value.toLowerCase();

    let filteredProducts = [];

    for(let i = 0; i < products.length; i++){

        if(
            products[i].name
            .toLowerCase()
            .includes(searchValue)
        ){

            filteredProducts.push(products[i]);
        }
    }

    showProducts(filteredProducts);

});

let hamburger =
document.querySelector("#hamburger");

let links =
document.querySelector(".links");

hamburger.addEventListener(
"click",

function(){

    links.classList.toggle(
        "active"
    );

});