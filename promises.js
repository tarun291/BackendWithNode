function fetchData(url){
    return new Promise(function (resolve,reject){
        console.log("Going to start the download");
        setTimeout(function process(){
            let data="Dummy download data";
            console.log("Download Completed");
            resolve(123);
            resolve("Tarun");
        },1000)
        console.log("Timer to mimic download started");
    })
}
console.log("Starting the program");
console.log("We are expecting to  mimic a downloader");
let x=fetchData("www.google.com");
console.log("new promise object created successfully but downloading still going on");
setTimeout(function(){
    console.log(x);
},2000)
