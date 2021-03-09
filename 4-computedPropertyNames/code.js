

// old :  create a property whose name we dont know beforehand
function objectifyOld(key, value){
    let o = {};
    o[key] = value;
    return o;
}

// new
function objectifyNew(key, value){
    return  {
        [key] : value
    }
}

console.log(objectifyOld("name", "Ravikanth"))
console.log(objectifyNew("name", "Ravikanth"))