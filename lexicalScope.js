function demo1(){
    return new Promise(function(resolve,reject){
        console.log("Hi");
        setTimeout(function process(){
            console.log("task done");
            resolve("Students are the best");
        },3000);
        console.log("Bi");
    })
}

function demo2(val){
    return new Promise(function (resolve, reject){
        console.log("Start");
        setTimeout(function process(){
            console.log("Completed timer");
            if(val%2==0){
                resolve("Even");
            }else{
                reject("odd");
            }
        },10000);
        console.log("Somewhere");
    })
}


let x=demo2(4);

