function order(item) {
    console.time("start");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("You have selected " + item);
            resolve("It has been added to the cart");
        }, 2000);
    });
}
function packing(item) {
    return new Promise((resolve, reject) => {


        setTimeout(() => {
            console.log(item + " is being packed");
            resolve("It is getting to be packed");
        }, 5000);
    });
}

function delivery(item) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(item + " is being delivered");
            resolve("It is getting to be delivered");
        }, 4000);
    });

}

// order("tv").then((msg) => {
//     console.log(msg);
//     return packing("tv");
// }).then((msg) => {
//     console.log(msg);
//     return delivery("tv");

// }).then((msg) => {
//     console.log(msg);
//     (setTimeout(() => {

//         console.log("item delivered");
//         console.timeEnd("start");
//     }, 2000));


// });


Promise.all([order("tv"),packing("tv"),delivery("tv")]).then((result)=>{
    console.log(result);
    setTimeout(()=>{
        console.log("the item has been delivered");
    console.timeEnd("start");

    });
})


