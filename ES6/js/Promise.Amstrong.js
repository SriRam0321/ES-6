
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
