function check(n){

  return new Promise((resolve, rejected) => {
    let sum=0;
    let m=n
    while(n!=0){
  let rem= n % 10;
        n= (n-rem)/10;
      sum=(sum*10)+rem
}
if(sum===m){
  resolve(m)
}
else{
  rejected(m)
}
  })
}

check(1211).then((x)=>{
  console.log(`${x} is Palindrome Number`)
})

.catch((y)=>{
  console.log(`${y} is Not a Palindrome Number`)
})
