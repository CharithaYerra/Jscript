let Speaker="sound";
document.write(Speaker);
debugger;

let Cpu="working";
document.write(Cpu);
debugger;
document.write("<br>");


function Call(){
    document.write("you are getting a call")
    function Contact(){
        document.write("the contacts are")
    }
    Contact();
}

let ResentCall="Aritel span call";
document.write("the resent call is "+ResentCall);

Call();

document.write("<br>");

let History={siri:"686451545",
    "aritel":87651468454};

function Noofcalls(number){
     document.write(number.airtel+"called 2 times");
}

Noofcalls(History);
document.write("<br>");



function Test(){
    let noQuestion="10";
    let sections=3;
    return (noQuestion,sections);
}

document.write(Test());
document.write("<br>");



function QuestionPaper(...no){
    return no;
}
document.write("<br>");

document.write(QuestionPaper("hindi","telugu","english"));


