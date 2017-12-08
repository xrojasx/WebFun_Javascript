function newArray(arr){
var newArr = [];
var arr=[3, "yoda", 46, "skywalker", -18];
    for ( var i = 0; i<arr.length; i++){
        if (typeof arr[i] === "number"){
            newArr.push(arr[i]);
            console.log(newArr);
            }
        }
    }
newArray()

    