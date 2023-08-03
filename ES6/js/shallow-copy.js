// function copy(){
//     let a=[2,3,4,5];
//     let y=a;
//     a.push(10,9);
//     console.log(a,y)
// }
// copy()

// it is a shallow copy it change the original array also


// using some methods we change the shallow copy in to deep copy


// let a=[1,2,3,4]

// let c=Object.assign([],a)
// a.push(10)
// console.log(a,c)


// it is a deep copy it does not change the original 


// using stringify method we can change the shallow copy to deep copy

// let x={

//     name:"sathesh",
//     position:"vip"

// }

// let y={...x};
// x.age=20;

// x= JSON.stringify(x);
// y=JSON.stringify(y)

// console.log(x,y)


// object method shallow copy to deep copy


// let f={

//     name:"sathesh",
//     position:"vip"

// }

// let s=Object.assign({},x)
// f.age=20;

// f=JSON.stringify(f);
// y=JSON.stringify(s)

// console.log(f,s)


