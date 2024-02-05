const myCart = {
    ShippingDetails: {
        CustomerName: "Durga",
        village: "kunderu",
        pinCode: 521245,
        phoneNumber: 2334242352
    },
    productDetails: [{
        pid: 101,
        Name: "shirt",
        price: 2200,
        quantity: 3
    }, {
        pid: 102,
        Name: "tshirt",
        price: 2200,
        quantity: 3
    }, {
        pid: 103,
        Name: "pant",
        price: 2200,
        quantity: 3
    }],
    priceDetails: {
        price: 39099,
        Discount: 10000,
        DeliveryCharges: 30
    }
};
console.log(myCart.productDetails);
console.log(myCart.ShippingDetails);
console.log(myCart.priceDetails);