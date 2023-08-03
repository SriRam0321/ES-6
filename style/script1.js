   
   
	   let employee = [{name:"aaa",
	                    position: "Junior Developer"},
	                   
					   {name:"bbb", 
					   position: "Pro Developer"},
	                   
					   {name:"ccc",
					   position: "Senior Developer"},
					   
					   {name:"ddd",
					   position: "Noob Developer"},
					   
					   {name:"eee",
					   position: "Rookie Developer"}]
		 
		 var b=employee.map((value,index)=>{
		
              
			   return value.position==="Senior Developer" ? {...value,position:"Normal Developer"}:value
                 		
			 
		 })
		document.write("----------------This is the Terinary Operator and See The Console------------")
		 console.log(b)
