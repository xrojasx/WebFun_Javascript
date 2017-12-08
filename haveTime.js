var HOUR = 7;
var MINUTE = 15;
var PERIOD = "PM";

if (MINUTE >30 && PERIOD == "AM"){
    HOUR++;
    
    console.log("it's alsmost",HOUR, "in the morning");
}

else if(MINUTE<30 && PERIOD =="PM"){

    console.log ("it's just after ",HOUR," in the evening");
}

if (MINUTE == 15){
    console.log("It's a quarter after", HOUR);
}