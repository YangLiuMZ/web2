var img = document.getElementsByClassName('l');
var box5f=document.getElementsByClassName('box5f')[0];
var box2 = document.getElementsByClassName('box2')[0];
var box3 = document.getElementsByClassName('box3')[0];
var box5e = document.getElementsByClassName('box5e')[0];
var div = document.getElementsByClassName('box58')[0];
var sel = document.getElementsByTagName('select')[0];
var opt = document.getElementsByTagName('option');
var lr = document.getElementsByClassName('box59')[0];
var dot=document.getElementsByClassName('dot')[0];
var box5j = document.getElementsByClassName('box5j')[0];
var cha = document.getElementsByClassName('box5i')[0];
var ew = document.getElementsByClassName('erw')[0];
var pic = document.getElementsByClassName('picture');
var allC = document.getElementsByClassName('box1')[0].children[0].children;
var Inow = 0;

for(var d=0;d<img.length;d++){
	var dot_m = document.createElement('div');
	dot_m.className='dot_m';
	dot_m.innerText = d+1;
	dot.appendChild(dot_m);
}

//右悬浮窗
for(var xf = 0; xf<allC.length; xf++){
	(function (xf){

		allC[xf].onmouseover = function (){
			buffer(allC[xf],{right:-20});
			if(xf==2){
				ew.src = '任务所需小图/img/erwei.png';
			}
		}
		allC[xf].onmouseout = function (){
			buffer(allC[xf],{right:-95});
			if(xf==2){
				ew.src = '任务所需小图/img/serwei.png';
			}
		}

	}(xf))
}

//跳zhuan
for(pc = 0;pc<pic.length;pc++){
	pic[pc].onclick = function (){
		location.href = 'detail.html';
	}
}

//悬浮
window.onscroll = function (){
	if(window.scrollY>=100){
		box3.style.position = 'fixed';
		box3.style.width = '100%';
		box2.style.display = 'block';
	}else if(window.scrollY<100){
		box3.style.position = 'relative';
		box3.style.width = '1180px';
		box2.style.display = 'none';
	}
}

cha.onclick = function (){
	box5j.innerText = '¥'+sel.value;
}

newli = box5f.cloneNode(true);
newli.style.top = '373px';
box5e.appendChild(newli);

var newliUl = document.getElementsByClassName("box5f")[1];

//公告栏滚动
var timergg;
timergg  = setInterval(function (){
	box5f.style.top =parseInt(getCSS(box5f,'top'))-5+'px'; 
	newliUl.style.top = parseInt(getCSS(newliUl,'top'))-5+'px';
	if(parseInt(getCSS(box5f,'top'))<=-373){
		box5f.style.top = '373px';
	}
	if(parseInt(getCSS(newliUl,'top'))<=-373){
		newliUl.style.top = '373px';
	}
},200)
box5e.onmouseover = function (){
	clearInterval(timergg);
}
box5e.onmouseout = function (){
	timergg  = setInterval(function (){
	box5f.style.top =parseInt(getCSS(box5f,'top'))-5+'px'; 
	newliUl.style.top = parseInt(getCSS(newliUl,'top'))-5+'px';
	if(parseInt(getCSS(box5f,'top'))<=-373){
		box5f.style.top = '373px';
	}
	if(parseInt(getCSS(newliUl,'top'))<=-373){
		newliUl.style.top = '373px';
	}
},200)
}

var dot_m = document.getElementsByClassName('dot_m');

for(var j = 1;j<img.length;j++){
	img[j].style.left = '730px';
}

clickDot()

//轮播
var timeAuto = setInterval(function (){
	buffer(img[Inow],{"left":-730})
	Inow++;
	if(Inow>=img.length){
		Inow=0;
	}
	img[Inow].style.left = '730px';
	buffer(img[Inow],{"left":0});
	for(var t = 0;t<dot_m.length;t++){
		dot_m[t].id = '';
	}
	dot_m[Inow].id = 'current';
},3000)

div.onmouseover=function (){
	clearInterval(timeAuto);
	lr.style.display = 'flex';
}

div.onmouseout=function (){
		lr.style.display = 'none';
		timeAuto = setInterval(function (){
		buffer(img[Inow],{"left":-730})
		Inow++;
		if(Inow>=img.length){
			Inow=0;
		}
		img[Inow].style.left = '730px';
		buffer(img[Inow],{"left":0});
		for(var t = 0;t<dot_m.length;t++){
			dot_m[t].id = '';
		}
		dot_m[Inow].id = 'current';
},3000)
}

function clickDot(){
	for(var i = 0;i<dot_m.length;i++){
	dot_m[Inow].id = 'current';
	(function (i){
		dot_m[i].onclick = function (){

			if(i>Inow){
				buffer(img[Inow],{left:-730});
				Inow=i;
				if(Inow>=img.length){
					Inow = 0;
				}
				img[Inow].style.left='730px';
			}else if(i<Inow){
				buffer(img[Inow],{left:730});
				Inow=i;
				if(Inow<0){
					Inow = img.length-1;
				}
				img[Inow].style.left='-730px';
			}
			buffer(img[Inow],{left:0});
			for(var t = 0;t<dot_m.length;t++){
				dot_m[t].id = '';
			}
			dot_m[Inow].id = 'current';
		}

	}(i))
}
}

// 轮播图左右
lr.children[0].onclick = function (){
	buffer(img[Inow],{left:730});
	Inow--;
	if(Inow<0){
		Inow = img.length-1;
	}
	img[Inow].style.left='-730px';
	buffer(img[Inow],{left:0});
	for(var t = 0;t<dot_m.length;t++){
		dot_m[t].id = '';
	}
	dot_m[Inow].id = 'current';
}
lr.children[1].onclick = function (){
	buffer(img[Inow],{left:-730});
	Inow++;
	if(Inow>=img.length){
		Inow = 0;
	}
	img[Inow].style.left='730px';
	buffer(img[Inow],{left:0});
	for(var t = 0;t<dot_m.length;t++){
		dot_m[t].id = '';
	}
	dot_m[Inow].id = 'current';
}

function buffer(obj,json,fn){
	clearInterval(obj.timer);
	obj.timer=setInterval(function (){
		var flag = true;
		for(var i in json){
			if(i === 'opacity'){
				var target = parseInt(parseFloat(json[i])*100);
				var loc = parseInt(parseFloat(getCSS(obj,i))*100)||100;
			}else if(i ==='scrollTop'){
				loc = Math.ceil(obj.scrollTop);
				target = parseInt(json[i]);

			}else{
				var target = json[i];
				var loc = parseInt(getCSS(obj,i))||0;
			}
			var speed = (target-loc)*0.2;
			speed = (target>=loc)?Math.ceil(speed):Math.floor(speed);

			if(i === 'opacity'){
				obj.style.opacity = (loc+speed)/100;
				obj.style.filter="alpha(opacity:"+(loc+speed)+")";
			}else{
				obj.style[i] =loc+speed+'px';
			}
			if(loc!==target){
				flag = false;
			}
		}

		if(flag){
			clearInterval(obj.timer);
			if(fn){
				fn();
			}
		}
	},20);
}

function getCSS(obj,attr){
	 if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return window.getComputedStyle(obj,null)[attr];
	}
}