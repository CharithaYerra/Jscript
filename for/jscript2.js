let appInfo={
    name:"instagram",
    launched:2010,
    installdata:"95mb"
}

for(detail in appInfo){
    console.log(detail);

    console.log(detail +" : " +appInfo[detail]);
}

          
let appsInfo={first: {
    name:"instagram",
    launched:2010,
    installdata:"95mb"
}  , second:{
    name:"facebook",
    launched:2008,
    installdata:"350mb"
}   }


for(app in appsInfo){
    for(detail in appsInfo[app]){
    console.log(detail +" : " +appsInfo[app][detail]);


    }
}

let classNames={firstclass:["siri","sai"],secondclass:["tarun","trisha"]};

for(section in classNames){
    for(names of classNames[section]){
        console.log(`${section} : ${names}`);
    }

}