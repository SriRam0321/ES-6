
			class Details{
				constructor(name,batch,city){
					this.a=name,
					this.b=batch,
					this.c=city
				}
				getDetails(){
					return`${this.name},${this.batch},${this.city}`
				}
			}


			let f=new Details("SriRam","Fed-12","Alangulam");
			console.log(f)
			
			
		class Parent{
			constructor(name){
				this.num=name;
			}
		    }
		class Child extends Parent{
			constructor(num){
				super()
				this.num=num;
			}
			
		}
		let ans=new Child("sri")
		console.log(ans)