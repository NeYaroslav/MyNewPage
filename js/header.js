const burger = document.querySelector(".header__burger")
const header = document.querySelector("header")

burger.addEventListener("click", ()=>{
	document.querySelector("body").classList.toggle("show_menu")
	if(scrollY != 0) {
		header.classList.add('scrolled')
	}
})

function getBodyScrollTop(){
return self.pageYOffset || (document.documentElement && document.documentElement.scrollTop) || (document.body && document.body.scrollTop);}

window.addEventListener("scroll", function(){
	if(getBodyScrollTop()!=0 && !header.classList.contains('scrolled')){
		header.classList.add('scrolled')
	} else if(getBodyScrollTop()==0 && header.classList.contains('scrolled')) {
		header.classList.remove('scrolled')
	}
})

// window.scrollTo({
// 			top: 1000,
// 			behavior: "smooth"
// 		});

// 	if(this.scrollTop != 0 && (!header.contains('scrolled'))){
	// 	header.classList.add('scrolled')
	// 	// wrapperBlock1.classList.add('scrolled')
	// }
	// else if(this.scrollTop == 0 && header.contains('scrolled')){
	// 	header.classList.remove('scrolled')
	// 	// wrapperBlock1.classList.remove('scrolled')
		
	// }