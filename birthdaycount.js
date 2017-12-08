for (var days =60; days >=0; days--){
    if (days > 30){
        console.log ("This sucks, my birthdays is still "+days+" days away");
    }
    if (days <= 30 && days>5){
        console.log("Oh boy, my birthday is only "+days+ " days away");
    }
    if (days <= 5 && days>0 ){
        console.log("HECK YEAH, only "+days+" days till my b-day");
    }
    if (days == 0){
        console.log("HAPPY BIRTHDAY TO ME");
    }
}


 