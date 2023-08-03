let	student=[{name:"surya",rollnumber:"1",gender:"male"},
														{name:"akila",rollnumber:"3",gender:"female"},
														{name:"trisha",rollnumber:"5",gender:"female"},
														{name:"reka",rollnumber:"4",gender:"female"},
														{name:"karthika",rollnumber:"7",gender:"female"},
														{name:"vijay",rollnumber:"6",gender:"male"},
														{name:"ajith",rollnumber:"2",gender:"male"},
														{name:"selvam",rollnumber:"8",gender:"male"}]

			
			
			localStorage.setItem("student",JSON.stringify(student))
			let a=JSON.parse(localStorage.getItem("student"))
			let b=a.map((i)=>{
				
				return i.name=="trisha"?{...i,name:"samantha",rollnumber:"33"}:i
				
			})
	      
		  
		  
		  console.log(b)
			
			
		    
			
			
let arr=[1,1,2,2,3,3]

			localStorage.setItem("arr",JSON.stringify(arr))
	        let c=JSON.parse(localStorage.getItem("arr"))
	        
	        c[c.length]="sathesh"

	        console.log(c);		
	
			
let	employee=[{name:"surya",rollnumber:"1",gender:"male"},
														{name:"akila",rollnumber:"3",gender:"female"},
														{name:"trisha",rollnumber:"5",gender:"female"},
														{name:"reka",rollnumber:"4",gender:"female"},
														{name:"karthika",rollnumber:"7",gender:"female"},
														{name:"vijay",rollnumber:"6",gender:"male"},
														{name:"ajith",rollnumber:"2",gender:"male"},
														{name:"selvam",rollnumber:"8",gender:"male"}]

sessionStorage.setItem("employee",JSON.stringify(employee))
			let m=JSON.parse(sessionStorage.getItem("employee"))
			let n=m.map((i)=>{
				
				return i.name=="trisha"?{...i,name:"samantha",rollnumber:"33"}:i
				
			})
	      
		  
		  
		  console.log(n)