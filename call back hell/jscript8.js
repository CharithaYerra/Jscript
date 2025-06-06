function placeOrder(foodItem) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`✅order placed : ${foodItem}`);
            resolve(foodItem);
        }, 2000);

    }
    )
}
function processFood(processItem) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`${processItem}`);
            let process=`${processItem} is ready`;
            resolve(process);
        }, 5000);

    }
    )
}
function deliverFood(foodStatus) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`food is out for delivery🚚🚚🚚, ${foodStatus}`);
            resolve("Thank you.....visit again ");
        }, 7000);
    })
}

Promise.all([placeOrder("Dum Biryani"), processFood("food is getting ready.."), deliverFood("succesfully delivered ")])
    .then((results) => {
        console.log(results);
        console.log("THANK  YOU.....");
    });
