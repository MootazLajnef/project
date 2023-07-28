const product = [
    {
        id: 0,
        image: 'image/aa-1.jpg',
        title: 'Hoodie NFS MW',
        price: 69,
    },
    {
        id: 1,
        image: 'image/hh-2.jpg',
        title: 'Hoodie Heart Turbo',
        price: 42,
    },
    {
        id: 2,
        image: 'image/ee-3.jpg',
        title: 'T Shirt Samurai',
        price: 42,
    },
    {
        id: 3,
        image: 'image/gg-1.jpg',
        title: 'T Shirt E36',
        price: 42,
    },
    {
        id: 4,
        image: 'image/tt-1.jpg',
        title: 'T Shirt Motor',
        price: 42,
    },
    {
        id: 5,
        image: 'image/tt-2.jpg',
        title: 'T Shirt BBS',
        price: 42,
    },
    {
        id: 6,
        image: 'image/tt-3.jpg',
        title: 'T Shirt Supra Beast',
        price: 42,
    },
    {
        id: 7,
        image: 'image/tt-4.jpg',
        title: 'Hoodie BMW',
        price: 42,
    },
    {
        id: 8,
        image: 'image/tt-5.jpg',
        title: 'T Shirt Dinasour',
        price: 42,
    }
];
const categories = [...new Set(product.map((item) => {
    return item;
}))];

let i = 0;
document.getElementById('root').innerHTML = categories.map((item) => {
    var { image, title, price } = item;
    return (
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
            <div class='bottom'>
                <p style='color: #FF0000';>${title}</p>
                <h2>${price}.00 DT </h2>` +
        "<button onclick='addtocart(" + (i++) + ")'>Add to cart</button>" +
        `</div>
        </div>`
    );
}).join('');

var cart = [];

function addtocart(a) {
    cart.push({ ...categories[a] });
    displaycart();
}

function delElement(a) {
    cart.splice(a, 1);
    displaycart();
}

function displaycart() {
    let j = 0, total = 0;
    document.getElementById("count").innerHTML = cart.length;
    if (cart.length == 0) {
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "0.00 DT";
        document.getElementById("deliveryCost").innerHTML = "8.00 DT";
        document.getElementById("totalWithDelivery").innerHTML = "0.00 DT";
    } else {
        document.getElementById("cartItem").innerHTML = cart.map((items) => {
            var { image, title, price } = items;
            total = total + price;
            document.getElementById("total").innerHTML = total.toFixed(2) + " DT";
            let deliveryCost = 8;
            document.getElementById("deliveryCost").innerHTML = deliveryCost.toFixed(2) + " DT";
            let totalWithDelivery = total + deliveryCost;
            document.getElementById("totalWithDelivery").innerHTML = totalWithDelivery.toFixed(2) + " DT";
            return (
                `<div class='cart-item'>
                    <div class='row-img'>
                        <img class='rowimg' src=${image}>
                    </div>
                    <p style='font-size:12px;'>${title}</p>
                    <h2 style='font-size: 15px;'>${price}.00 DT</h2>` +
                "<i class='fa-solid fa-trash' onclick='delElement(" + (j++) + ")'></i></div>"
            );
        }).join('');
    }
}

// Call the displaycart() function initially to display the cart section with the default values
displaycart();