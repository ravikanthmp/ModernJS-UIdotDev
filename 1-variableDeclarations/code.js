// var

function testVar(){
    console.log(a);
    var a = 12;
    for (var i = 0; i < 10; i++){

    }
    console.log(i);
}


function testVar2(){
    console.log(a);
    var a = 12;
    for (var i = 0; i < 10; i++){
        test();
    }

    function test(){
        console.log('a is ' + a);
        var z = 12;
    }
    console.log(i);
    // console.log("z is " + z);
}

testVar2()