// default param.........................

function add(a=0,b=5){
    console.log(a+b)
}
add()


function add(a=0,b=5){
    console.log(a+b)
}
add(20)


// the default param is a if we not give the parameter it takes itself as 

add(20)
function add(a=0,b=5){
    console.log(a+b)
}


let add=(a=0,b=0)=>{
    console.log(a+b)
}
add(10,21)