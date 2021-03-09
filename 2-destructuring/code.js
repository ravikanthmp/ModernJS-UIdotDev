//object destructuring

const obj1 = {
    "name" : "Ravi",
    "address" : "9301 Avondale Rd NE Redmond WA 98052",
    "tel" : "111-111-0000"
}

const {name , address, tel} = obj1;
console.log(name)
console.log(address)
console.log(tel)

//array destructuring
const arr = ["Ravi", 32, 1988];
const [name2, age, year] = arr;
console.log(name2)
console.log(age)
console.log(year)

// array destructuring!
let arr2 = [1, 2, 3]
let [a,b ,c ] = arr2;
console.log(a,b , c)