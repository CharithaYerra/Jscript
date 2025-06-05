let hasNetflixAccess = true;
if (hasNetflixAccess) {
    console.log("Netflix Account:");
    console.log("Username: user@example.com");
    console.log("Password: ******");
}

let hasInstagramAccess = false;
if (hasInstagramAccess) {
    console.log("Instagram Account:");
    console.log("Username: insta_user123");
    console.log("Password: ******");
}
else{
    console.log("you don't have the insagram account")
}




//else if
let hasHuluAccess = false;
let hasAppleTVAccess = true;
let hasHBOAccess = false;

if (hasHuluAccess) {
    console.log("%c Yes! I have Hulu Access", "color: purple");
} else if (hasAppleTVAccess) {
    console.log("%c Yes! I have Apple TV+ Access", "color: orange");
} else if (hasHBOAccess) {
    console.log("%c Yes! I have HBO Access", "color: darkred");
} else {
    console.log("No streaming platform access");
}




//switch
let platform = "Instagram";

switch (platform) {
    case "Netflix":
        console.log("Accessing Netflix...");
        console.log("Username: user@netflix.com");
        break;
    case "Instagram":
        console.log("Accessing Instagram...");
        console.log("Username: user_insta");
        break;
    case "YouTube":
        console.log("Accessing YouTube...");
        console.log("Username: user_yt");
        break;
    default:
        console.log("Unknown platform. Access denied.");
}


let isHavingamazonaccess=false;
let isHavingdisneyaccess=true;
if(isHavingamazonaccess){
    console.log("yes i am having amazon account");
}
else if(isHavingdisneyaccess){
    console.log("yes i am having disney account");
}
else{
    console.log("i dont have any access");
 
}


function stopwatch(seconds) {
  if (seconds > 0) {
    console.log(`Time left: ${seconds} seconds`);
    setTimeout(() => stopwatch(seconds - 1), 1000); // Call again after 1 second
  } else {
    console.log("Countdown completed.........");
  }
}

stopwatch(5);
