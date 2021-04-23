$(function() {
	let step1 = document.getElementById('step1');
	let step2 = document.getElementById('step2');
	let step3 = document.getElementById('step3');
	let arr=[{
		STEP1:'Put the oil in the pot,and then put the com kernels into the pot.',
		STEP2:'Pour out the corn kernels.Put sugar water and butter in the pot.',
		STEP3:'Finally,pour the popcorn into the pot and stir fry.'
	},{
		STEP1:'Put chocolate chips,suger,cocoa powder,ice cubes and milk into the juicer.',
		STEP2:'Stir and mix with a blender.',
		STEP3:'Coat the rim of the cup with chocolate surup,then pour the stirred liquid into the cup.'
	},{
		STEP1:'Cut potatoes into strips',
		STEP2:'Coat the potatoes with starch',
		STEP3:'Fried potatoes in oil'
	}]
	let item = arr[0]
	document.getElementById('formula1').innerHTML=formula('Popcorn','Butter:20g','Sugar:100g','Corn:300g','Water:50g')
	document.getElementById('formula2').innerHTML=formula('Chocolate Smoothie','Chocolate chips:2tbsp','Sugar:2tsp','Cocoa powder:1.5tsp','Milk:200ml')
	document.getElementById('formula3').innerHTML=formula('French Fries','Potato chips','Farina','Ketchup','')
	render(item)
	function formula(title,name1,name2,name3,name4){
		let titleStr = '<h3>'+title+'</h3>'
		return titleStr+'<p>'+name1+'<br/>'+name2+'<br/>'+name3+'<br/>'+name4+'</p>'
	}
	function render(item){
		document.querySelector("#view1").innerHTML = '<div><h2>STEP'+1+'</h2></div><p>'+item.STEP1+'</p>';
		document.querySelector("#view2").innerHTML = '<div><h2>STEP'+2+'</h2></div><p>'+item.STEP2+'</p>';
		document.querySelector("#view3").innerHTML = '<div><h2>STEP'+3+'</h2></div><p>'+item.STEP3+'</p>';
	}
	step1.onclick=()=>{
		$("#viewsWrapper").animate({marginLeft: 0},1500)
	}
	step2.onclick=()=>{
		$("#viewsWrapper").animate({marginLeft: '-300px'},1500)
	}
	step3.onclick=()=>{
		$("#viewsWrapper").animate({marginLeft: '-600px'},1500)
	}
	let img1 = document.querySelector('.eat-item1 .img-box')
	let img2 = document.querySelector('.eat-item2 .img-box')
	let img3 = document.querySelector('.eat-item3 .img-box')
	img1.onclick=(e)=>{
		let eat = document.querySelector('.eat-item1 .eat-formula')
		eat.style.visibility="initial"
		render(arr[0]);
	}
	img2.onclick=(e)=>{
		let eat = document.querySelector('.eat-item2 .eat-formula')
		eat.style.visibility="initial"
		render(arr[1]);
	}
	img3.onclick=(e)=>{
		let eat = document.querySelector('.eat-item3 .eat-formula')
		eat.style.visibility="initial"
		render(arr[2]);
	}
})