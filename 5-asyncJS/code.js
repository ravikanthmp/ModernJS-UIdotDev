// Promises

// 1-> the big blockign code is in the main thread. so the sire is unresponsive

// const startTime = Date.now();
//
// let pr = (str) => () => console.log(str)
//
// let log = (fn) => {
//     fn();
//     console.log(`Time elasped is ${(Date.now() - startTime) / 1000}`)
// };
//
// let loop = () => {
//     for (let i = 0; i < 1000000000; i++) {
//
//     }
// }
//
// log(pr("abc"))
//
// log(loop)
//
// log(pr("xyz"))

// 2-> TRY to move the promise ot==to promise queue
// But promise creation is still happening i the main thread
// const startTime = Date.now();
//
// let pr = (str) => () => console.log(str)
//
// let log = (fn) => {
//     fn();
//     console.log(`Time elasped is ${(Date.now() - startTime) / 1000}`)
// };
//
// let promise1 = new Promise(((resolve, reject) => {
//
//     for (let i = 0; i < 10000000000; i++) {
//
//     }
//
//     resolve();
// }))
//
// log(pr("abc"))
//
// promise1.then(log(pr("done")))
//
//
// log(pr("xyz"))

// 3
const startTime = Date.now();

let pr = (str) => () => console.log(str)

let log = (fn) => {
    fn();
    console.log(`Time elasped is ${(Date.now() - startTime) / 1000}`)
};


log(pr("abc"))

Promise.resolve().then( v => {
    for (let i = 0; i < 10000000000; i++) {

    }

    return "done";
} ).then(v => log(pr("done")))


log(pr("xyz"))



