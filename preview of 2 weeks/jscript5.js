let Voting=(age)=>{
    if(age==undefined|| age==null){
        console.log("Invallid input");
    }
    else{
    if (age>=18){
        console.log("you are eligible for voting");
    }
    else{
        console.log("You are not eligible for voting");
    }
}
    
}
Voting();
Voting(20);
Voting(17);

//switch
function switchToMonth(month){
switch (month.toLowerCase()){
    case "january":
        console.log("this month is january");
        
     case "march":
        console.log("this month is march" );
        break;
    case "december":
            console.log("this month is  ",month);

}
}
switchToMonth("march");
switchToMonth("January");