function slot(q){

    while(q > 0 && q <200){
        var chance = Math.floor((Math.random() * 100) + 1);

        if (chance == 34){
            q = q + Math.floor((Math.random()*50) + 50);
        }
        else{
            q = q -1;
        }
        
        if (q == 0){
            console.log("You are SOL no more money")
        }
        if (q >=200){
            console.log("You are a winner ")
        }
    }
    console.log(q);
}

slot(150)

