const product = {
        pName: "car",
        pColor: "green",
        brand: "BMW",
        cost: 2000000
    }
    // console.log(product.brand);
    // console.log(product['pName']);
for (names in product) {
    console.log(product[names]);
}
Object.keys(product).forEach(function(key) {

    console.log(product[key]);
});
Object.values(product).forEach((value) => {
    console.log(value);
});
Object.entries(product).forEach((value) => {
    console.log(value);
});