class Catalog
{
	constructor()
	{
		this.books=
		[
			{id:1,name:"Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones",  code:"atomic",	 image:"images/atomic.png",	description:` The #1 New York Times bestseller. Over 10 million copies sold!

			Tiny Changes, Remarkable Results
			
			No matter your goals, Atomic Habits offers a proven framework for improving--every day. James Clear, one of the world's 
			leading experts on habit formation, reveals practical strategies that will teach you exactly how to form good habits, 
			break bad ones, and master the tiny behaviors that lead to remarkable results` ,price:15.99},
			{id:2,name:"Can't Hurt Me: Master Your Mind and Defy the Odds", code:"cant", image:"images/cant.png"	,description: `New York Times Best Seller

			Over 4 million copies sold
			
			For David Goggins, childhood was a nightmare -- poverty, prejudice, and physical abuse colored his days and haunted 
			his nights. But through self-discipline, mental toughness, and hard work, Goggins transformed himself from a depressed, 
			overweight young man with no future into a U.S. Armed Forces icon and one of the world's top endurance athletes. The 
			only man in history to complete elite training as a Navy SEAL, Army Ranger, and Air Force Tactical Air Controller, 
			he went on to set records in numerous endurance events, inspiring Outside magazine to name him "The Fittest (Real) Man in America."
			
			In Can't Hurt Me, he shares his astonishing life story and reveals that most of us tap into only 40% of our capabilities. 
			Goggins calls this The 40% Rule, and his story illuminates a path that anyone can follow to push past pain, demolish fear, 
			and reach their full potential.` ,price:9.99},
			{id:3,name:"The Catcher in the Rye", code:"therye", image:"images/therye.png"	,description: `The "brilliant, funny, meaningful novel" (The New Yorker) 
			that established J. D. Salinger as a leading voice in American literature--and 
			that has instilled in millions of readers around the world a lifelong love of books.` ,price:15.99},
			{id:4,name:"The 7 Habits of Highly Effective People",  code:"the7habits", image:"images/the7habits.png",	description:` *New York Times bestseller—over 40 million copies sold*
			*The #1 Most Influential Business Book of the Twentieth Century*
			
			One of the most inspiring and impactful books ever written, 
			The 7 Habits of Highly Effective People has captivated readers 
			for nearly three decades. It has transformed the lives of presidents and CEOs,
			educators and parents—millions of people of all ages and occupations. 
			Now, this 30th anniversary edition of the timeless classic commemorates 
			the wisdom of the 7 Habits with modern additions from Sean Covey.` ,price:30.00},
			{id:5,name:"Only the Dead", code:"onlythedead", image:"images/onlythedead.png"	,description: `A Thriller
			By Jack Carr.
			Navy SEAL James Reece faces a devastating global 
			conspiracy in this high-adrenaline thriller that 
			is ripped from the headlines—from the #1 New York 
			Times bestselling author and “one of the top writers 
			of political thrillers” (Bookreporter), Jack Carr.` ,price:29.99},
			{id:6,name:"THE HACKING OF THE AMERICAN MIND", code:"thehacking", image:"images/thehacking.png"	,description: `"Explores how industry has manipulated our most deep-seated 
			survival instincts."—David Perlmutter, MD, Author, #1 New York Times bestseller, Grain Brain and Brain Maker

			The New York Times–bestselling author of Fat Chance reveals the corporate scheme to sell pleasure, driving the
			international epidemic of addiction, depression, and chronic disease.` ,price:15.99},
			{id:7,name:"The Outsider", code:"theoutsider", image:"images/theoutsider.png"	,description: `Evil has many faces…maybe even yours in this #1 New York Times bestseller 
			from master storyteller Stephen King.` ,price:15.99},
			{id:8,name:"Your Money or Your Life: 9 Steps to Transforming Your Relationship with Money and Achieving Financial Independence", code:"yourmoney", image:"images/yourmoney.png"	,description: `A fully revised edition of one of the most influential books 
			ever written on personal finance with more than a million copies sold

			“The best book on money. Period.” –Grant Sabatier, founder of “Millennial Money,” on CNBC Make It
			
			"This is a wonderful book. It can really change your life." -Oprah` ,price:14.99},
			{id:9,name:"The Psychology of Money: Timeless lessons on wealth, greed, and happiness", code:"money", image:"images/money.png"	,description: `Doing well with money isn’t necessarily about 
			what you know. It’s about how you behave. And behavior is hard to teach, even to really smart people.

			Money - investing, personal finance, and business decisions - is typically taught as a math-based field, 
			where data and formulas tell us exactly what to do. But in the real world people don’t make financial decisions 
			on a spreadsheet. They make them at the dinner table, or in a meeting room, where personal history, your own unique 
			view of the world, ego, pride, marketing, and odd incentives are scrambled together.  
			
			In The Psychology of Money, award-winning author Morgan Housel shares 19 short stories exploring the strange ways 
			people think about money and teaches you how to make better sense of one of life’s most important topics.` ,price:9.99},
			{id:10,name:"Sapiens: A Brief History of Humankind", code:"sapiens", image:"images/sapiens.png"	,description: `New York Times Bestseller

			A Summer Reading Pick for President Barack Obama, Bill Gates, and Mark Zuckerberg
			
			From a renowned historian comes a groundbreaking narrative of humanitys creation 
			and evolution—a #1 international bestseller—that explores the ways in which biology 
			and history have defined us and enhanced our understanding of what it means to be “human.”` ,price:14.99}
		];
	}
	getBooks(){return this.books;} //only difference from the old catalog
	getItem(code)
	{
		 for (let i=0; i<this.books.length; i+=1)
		 {
			 if(this.books[i].code==code) return this.books[i];
		 } 
		 return null;
	}
	findItem(code)
	{
		for (let i=0; i<this.books.length; i+=1)
		{
			 if(this.books[i].code==code) return true;
		} 
		 return false;
	}
}

class ItemOrder 
{
	constructor(item) {this.item=item;this.numItems=1;}
	getItem(){return this.item;}
	setItem(item){this.item = item;}
	getNumItems(){return this.numItems;}
	setNumItems(n){this.numItems = n;}
	getItemId(){return((this.getItem()).id);}
	getItemCode(){return((this.getItem()).code);}
	getItemName(){return((this.getItem()).name);}
	getItemImage(){return ((this.getItem()).image); }
	getDescription(){return((this.getItem()).description);}
	getUnitCost(){return((this.getItem()).price).toFixed(2);}
	incrementNumItems(){this.setNumItems(parseInt(this.getNumItems()) + 1);}
	cancelOrder(){this.setNumItems(0);}
	getTotalCost(){return(parseInt(this.getNumItems()) * parseFloat(this.getUnitCost())).toFixed(2);} 
}

class ShoppingCart
{
	constructor(userid) 
	{
		this.userid=userid;
		this.itemsOrdered=[];
		this.loadCart();
	}
	getItemImage(id)
	{
		alert("In getItemImage:"+this.itemsOrdered.length);
		for (let i=0; i<this.itemsOrdered.length;++i) 
		{
			let item=this.itemsOrdered[i];
			alert(item.getItemId());
			if(item.getItemId()==id)
			{
				alert("Found Item:");
				return (this.itemsOrdered[i]).getItemImage();
			}
		}
		return '';
	}
	getItemsOrdered() {return this.itemsOrdered ;}
	printShoppingCart()
	{
		for (let i=0; i<this.itemsOrdered.length;++i) 
		{
			let item=this.itemsOrdered[i];
			alert("id="+item.getItemId()+ ": desc="+item.getDescription()+" qty="+item.getNumItems());
		}
	}
	addItem(itemCode) 
	{
		for (let i=0; i<this.itemsOrdered.length;++i) 
		{
			let item=this.itemsOrdered[i];
			if(item.getItemCode()==itemCode)
			{
				(this.itemsOrdered[i]).incrementNumItems();
				this.storeCart();
				return;
			}
		}	
		let catalog=new Catalog();
		let newOrder = new ItemOrder(catalog.getItem(itemCode));
		this.itemsOrdered.push(newOrder);
		this.storeCart();
	}
	setNumOrdered(itemCode,numOrdered) 
	{ 
		for (let i=0; i<this.itemsOrdered.length;++i) 
		{
			let item=this.itemsOrdered[i];
			if(item.getItemCode()==itemCode)
			{
				if(numOrdered<=0)
				{
					this.itemsOrdered.splice(i,1);
					this.storeCart();
					return;
				}
				else
				{
					(this.itemsOrdered[i]).setNumItems(numOrdered);
					this.storeCart();
					return;
				}
			}
		}
		let catalog=new Catalog();
		let newOrder = new ItemOrder(catalog.getItem(itemCode));
		newOrder.setNumItems(numOrdered);
		this.itemsOrdered.push(newOrder);
		this.storeCart();
	}
	getTotalCost()
	{
		let total=0;
		for (let i=0; i<this.itemsOrdered.length;++i) 
		{
			let item=this.itemsOrdered[i];
			total+=parseFloat(item.getTotalCost());
		}
		return total.toFixed(2);
	}
	addTax()
	{
		let total=parseFloat(this.getTotalCost());
		return (total*.1+total).toFixed(2);
	}

	addShipping(shipcost=0)
	{
	  return(parseFloat(this.addTax())+parseFloat(shipcost)).toFixed(2);
	}
	
	emptyShoppingCart()
	{
	    this.itemsOrdered=[];
	    var usercart=this.userid+"cart";  
	    setCookie(usercart,"",-1);
	}
	storeCart()
	{
		var usercart=this.userid+"cart";
		var cart="";
		var atleastone=false;
		let items=this.getItemsOrdered();
		for(let i=0;i<items.length;i++)
		{
			var qty=parseInt(items[i].getNumItems());
			if(qty>=1)
			{
				cart=cart+(items[i].getItemCode()+":"+qty+"@");
				atleastone=true;
			}
		}
		if(atleastone)
		{
			cart=cart.substring(0,cart.length-1);
			setCookie(usercart,cart,30);
		}
		else setCookie(usercart,"",-1);
	}
	loadCart()
	{
		let cartname=this.userid+"cart";
		let cart=getCookie(cartname);
		if(cart != null)
		{
			var str=cart.split("@");
			for(var i=0;i<str.length;i++)
			{
				var item=str[i].split(":");
				var cookiename=item[0];
				var cookievalue=item[1];
				this.setNumOrdered(cookiename,cookievalue);
			}		
		}
	}
}









