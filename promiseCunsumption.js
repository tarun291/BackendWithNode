function fetchData(url){
    return new Promise(function(resolve, reject){
        console.log("Started downloading from", url);
        setTimeout(function process(){
            let data="Dummy data";
            console.log("Download completed");
            resolve(data);
        },2000);
    })
}

function writeFile(data){
    return new Promise(function(resolve,reject){
        console.log("Started writing", data,"in a file");
        setTimeout(function process(){
            let fileName="result.txt";
            console.log("File written Sucecssfully");
            resolve(fileName);
        },4000);
    })
}



function uploadData(file,url){
    return new Promise(function(resolve,reject){
        console.log("Upload started on url",url,"file name is", file);
        setTimeout(function process(){
            let result="SUCCESS";
            console.log("uploading done");
            resolve(result);
        },6000);
    })
}


// let downloadPromise=fetchData("www.google.com");
// downloadPromise
// .then(function processDownload(value){
//     console.log("Downloading done with following value",value);
//     return value;
// })
// .then(function processWrite(value){
//     return writeFile(value);
// })

// .then(function processUpload(value){
//     return uploadData(value,"www.drive.google.com");
// })

// .then(function done(){
//     console.log("process Done");
// })

async function processing(){
    let downloadData=await fetchData("www.google.com");
    let file=await writeFile(downloadData);
    let uploadResponse=await uploadData(file,"www.google.drive.com");
    console.log("Task is done");
    return false;
}
console.log("start");
processing();
console.log("end");