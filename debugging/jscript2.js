function BalanceDiet(breakfast, dinner = "not specified") {
    return { breakfast: breakfast, dinner: dinner };
}

let diet=BalanceDiet("dosa");
document.write("Breakfast: " + diet.breakfast + "<br>");
document.write("Dinner: " + diet.dinner);

console.log(diet);


setTimeout(function(){
    document.write("set time out is printing");
},2000);

let object={
    kite:2,dance:4
};
document.write(object);