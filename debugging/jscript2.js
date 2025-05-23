function BalanceDiet(breakfast,dinner="not specified"){
    return {breakfast:"corn",dinner:"roti"};

}
let diet=BalanceDiet("dosa");

document.write(diet);


setTimeout(function(){
    document.write("set time out is printing");
},2000);