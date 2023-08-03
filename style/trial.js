

// function a(){

// return new promise((e,f){
// set timeout((){
//   e("timeout")
// },5000)


// })

// }
// a().then(console.log)
// a().catch(console.log)

// let c=new Promise((resolve,rejected)=>{
//   resolve("success")
//   rejected("failed")

// })
// c.then(console.log)
// c.catch(console.log)

  //   function a(){

  //     return new Promise((a,b)=>{
  //     setTimeout(()=>{
  //       a("1")
  //     },3000)
    
  //   })
  //   }

      
  //   function b(){

  //     return new Promise((e,f)=>{
  //     setTimeout(()=>{
  //       f("err")
  //     },1000)
    
  //   })
  //   }
    
  //   function c(){

  //     return new Promise((q,r)=>{
  //     setTimeout(()=>{
  //       q("3")
  //     },1000)
    
  //   })
  //   }

  //   async function hello(){
  // try{
  //     let d=await a();
  //     console.log(d)
  //     let e=await b();
  //     console.log(e)   
  //     let f=await c();
  //  console.log(f)
  //   }
  // catch(error){
  //   console.log(error)
  // }
  //   }
  // hello();

//   let x=5;
//   let y="";
//   for(i=0; i<x; i++){
//  for(j=0; j<=i; j++){
//    y+=" * "
//    console.log(y)

//   }
//  y+="\n"
// }
  
  //  a().then((x)=>{
  //   setTimeout(()=>{
  //     a("1")
  //   },3000)
  //  })
  //  a().then(console.log)
  
  
  //  b  ().then((y)=>{
  //   setTimeout(()=>{
  //     e("1")
  //   },3000)
  //  })
  //  b().then(console.log)
  

  //  Promise.all([a(),b(),c()])
  //  .then(console.log)
  //  .catch(console.log)
   


// function check(n){

//   return new Promise((resolve, rejected) => {
//     let sum=0;
//     let m=n
//     while(n!=0){
//   let rem= n % 10;
//         n= (n-rem)/10;
//       sum=(sum*10)+rem
// }
// if(sum===m){
//   resolve(m)
// }
// else{
//   rejected(m)
// }
//   })
// }

// check(1211).then((x)=>{
//   console.log(`${x} is Palindrome Number`)
// })

// .catch((y)=>{
//   console.log(`${y} is Not a Palindrome Number`)
// })

function check(n){

  return new Promise((resolve, rejected) => {
    sum=0;
    count=0;
    let e=n
    let t=n
    while(n!=0){
  let rem= n % 10;
        n= (n-rem)/10;
       count++;
}
while(e!=0){
     let rem= e%10;
           e= (e-rem)/10;
           sum+=rem**count
}
371

if(sum===t){
  resolve(t)
}
else{
  rejected(t)
}
  })
}

check().then((x)=>{
  console.log(`${x} is Amstrong Number`)
})

.catch((y)=>{
  console.log(`${y} is Not a Amstrong Number`)
})
