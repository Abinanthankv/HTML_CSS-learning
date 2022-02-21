	let scrollbefore=0;
     header = document.getElementsByClassName('header1');
	window.addEventListener('scroll',()=>{
		const scrollable=document.documentElement.scrollHeight -window.innerHeight;
		let currentpos=window.scrollY;
				if (currentpos>scrollbefore)
				{
            	header[0].style.top="-80px";		
				}
				else{
            	header[0].style.top="0";	
				}
		scrollbefore=currentpos;
        
		if (scrollable==currentpos) {
			alert("you reached the bottom")
		} 
		
	
	});