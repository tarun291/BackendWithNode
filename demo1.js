function dummyPromise(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log("Inside dummy function");
            resolve("Timer1 promise"); 
        },0);
    })
}


console.log("Start of the file");

setTimeout(function timre1(){
    console.log("time1 is done");
    let y=dummyPromise()
    y.then(function promiseY(value){
        console.log("Whose promise?", value);
    });
},0);

let x=Promise.resolve("Tarun's promise");
x.then(function processPromise(value){
    console.log("Whose promise?",value);
});

setTimeout(function timre2(){
    console.log("time2 is done");
},0)

console.log("end of the file");