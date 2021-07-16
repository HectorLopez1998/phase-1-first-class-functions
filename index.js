function saysHi(){
    console.log("hi")
}

function receivesAFunction(as){
   console.log(as());
}

const returnsANamedFunction = function(){
    return saysHi
}




function returnsAnAnonymousFunction(){
    return ()=> console.log("Hi")
}


