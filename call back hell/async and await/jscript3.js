function order(item) {
    
    return new Promise((resolve, reject) => {
        console.log("we are processing your selection wait for some time")
        setTimeout(() => {
            console.log("You have selected " + item);
            resolve("It has been added to the cart");
        }, 2000);
    });
}


function packing(item) {
    return new Promise((resolve, reject) => {
        console.log("Product is going to be packed")
    console.time("time");
       setTimeout(() => {
            console.log(item + " is being packed");
            setTimeout(()=>{
                resolve("It is getting to be packed")
            },2000);
            
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




async function onlineShoping() {

    console.log(await order("tv"));
    
        

    await packing("tv");
        console.timeEnd("time");

    await delivery("tv");
    
}

onlineShoping();

// function order(item) {
//   return new Promise(resolve => {
//     console.log("We are processing your selection. Please wait...");
//     setTimeout(() => {
//       console.log("You have selected " + item);
//       resolve("✓ Added to cart");
//     }, 2000);           // 2 s
//   });
// }

// function packing(item) {
//   return new Promise(resolve => {
//     console.log("Product is going to be packed…");
//     setTimeout(() => {
//       console.log(item + " is now packed");
//       resolve("✓ Packed");
//     }, 3000);           // 3 s  (single timeout is enough)
//   });
// }

// function delivery(item) {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       console.log(item + " is being delivered");
//       resolve("✓ Out for delivery");
//     }, 4000);           // 4 s
//   });
// }

// async function onlineShopping() {
//   console.time("total");          // ⏱️ start total timer
//   try {
//     console.log(await order("TV"));
//     console.log(await packing("TV"));
//     console.log(await delivery("TV"));
//   } catch (err) {
//     console.error("Something failed:", err);
//   }
//   console.timeEnd("total");       // ⏱️ end total timer (~9 s)
// }

// onlineShopping();
