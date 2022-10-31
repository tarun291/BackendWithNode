function fun(name) {
    setTimeout(function a() {
        return function b() {
            console.log(name);
        }
    }, 1000)

}
// var x=fun("Tarun");
// x();

var x = function d() {
    console.log("HI");
}
x();


// for (var i = 1; i <= 3; i++) {
//     setTimeout(function print() {
//         console.log(`i: ${i}`);
//     }, i * 1000);
// }


for (let i = 1; i <= 3; i++) {
    setTimeout(function print() {
        console.log(`i: ${i}`);
    }, i * 1000);
}




