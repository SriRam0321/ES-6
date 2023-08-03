function check(){
    let b=121

    let x=palindrome(b);

    if(x==b){
        console.log("it is a pallindrome");
    }
    else{
        
        console.log("it is not a palindrome")
    
       
    }


}

check()

function palindrome(a){

     let sum=0
     while(a!=0)
     let rem=a%10;
     a=(a-rem)/10;
     sum=(sum*10)+rem
     return sum

}