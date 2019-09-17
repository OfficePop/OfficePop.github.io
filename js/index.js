var modal = document.getElementById('myModal');
var btn = document.getElementById('review');
var closeBtn = document.getElementById('closeBtn');

document.getElementById('menu').onmouseover = dropDown;
document.getElementById('subMenu').onmouseover = dropDown;

function dropDown(){
	
	document.getElementById('subMenu').style.cssText = 'Display: Block;';
	
}

document.getElementById('menu').onmouseout = hide;
document.getElementById('subMenu').onmouseout = hide;

function hide(){
	
	document.getElementById('subMenu').style.cssText = 'Display: None;';
	
}

document.getElementById('li').onmouseover = highlight;

function highlight(){
	
	document.getElementById('li').style.cssText = 'Background:#3f9bab;';
	document.getElementById('link').style.cssText = 'Color:white;';
}

document.getElementById('li').onmouseout = fade;

function fade (){
	
	document.getElementById('li').style.cssText = 'Background:white;';
	document.getElementById('link').style.cssText = 'Color:black;';
	
}

review.onclick = function() {
	
	modal.style.cssText = 'Display: Block;';
	
}

closeBtn.onclick = function() {
	
	modal.style.cssText = 'Display: None;';
}


