let temperature = 15;

if (temperature > 30) {
  console.log("It's hot outside.");
} else {
  console.log("It's cool outside.");
}


function grade(marks){

if (marks >= 90) {
  console.log("Grade: A");
} else if (marks >= 75) {
  console.log("Grade: B");
} else if (marks >= 60) {
  console.log("Grade: C");
} else {
  console.log("Fail");
}

}

grade(45);



let username = "admin";
let password = "1234$kf%";

if (username === "admin") {
  if (password === "1234") {
    console.log("Login successful");
  } else {
    console.log("Incorrect password");
  }
} else {
  console.log("Invalid username");
}





function atm(balance,withdrawAmount){
if (withdrawAmount <= balance) {
  console.log("Transaction successful! Remaining balance is : " + (balance - withdrawAmount));
} else {
  console.log("Insufficient balance.");
}
}

atm(4000,2000);
