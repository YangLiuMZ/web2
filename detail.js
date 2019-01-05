var smallImg = document.getElementsByClassName('box82')[0];
var bigImg = document.getElementsByClassName('xbig')[0];
var smallBottom = document.getElementsByClassName('box86');
var move = document.getElementsByClassName('box83')[0];
var pl = document.getElementsByClassName('box85')[0];
var nr = document.getElementsByClassName('box87')[0];
var add = document.getElementsByClassName('ic')[0];
var dc = document.getElementsByClassName('dc')[0];
var input = document.getElementsByClassName('ip')[0];
var sc = document.getElementsByClassName('sc')[0];
var one = document.getElementsByClassName('one')[0];
var two = document.getElementsByClassName('two')[0];
var burCar = document.getElementsByClassName('bt2')[0];
var mb = document.getElementsByClassName('box8c')[0];
var xcontinue = document.getElementsByClassName('xcontinue')[0];
var xjs = document.getElementsByClassName('xjs')[0];
var box8d = document.getElementsByClassName('box8d')[0];
var box8c = document.getElementsByClassName('box8c')[0];
var xclose = document.getElementsByClassName('xclose')[0]
var index = 0;
smallBottom[index].parentNode.style.border = '2px solid #FFA500';
smallImg.style.background = 'url("任务所需小图/img/pp'+index+'.jpeg")no-repeat';
smallImg.style.backgroundSize = 'contain';
smallImg.style.background = 'url("任务所需小图/img/pp'+index+'.jpeg")no-repeat';
smallImg.style.backgroundSize = 'contain';

for(var i = 0;i<smallBottom.length;i++){
	(function (i){
		smallBottom[i].onmouseover = function (){
			smallBottom[index].parentNode.style.border = 'none';
			index = i;
			smallBottom[index].parentNode.style.border = '2px solid #FFA500';
			smallImg.style.background = 'url("任务所需小图/img/pp'+index+'.jpeg")no-repeat';
			smallImg.style.backgroundSize = 'contain';
		}
	}(i))
}
pl.onclick = function (){
	smallBottom[index].parentNode.style.border = 'none';
	index--;
	if(index<0){
		index=1;
	}
	smallBottom[index].parentNode.style.border = '2px solid #FFA500';
	smallImg.style.background = 'url("任务所需小图/img/pp'+index+'.jpeg")no-repeat';
	smallImg.style.backgroundSize = 'contain';
}
nr.onclick = function (){
	smallBottom[index].parentNode.style.border = 'none';
	index++;
	if(index>1){
		index=0;
	}
	smallBottom[index].parentNode.style.border = '2px solid #FFA500';
	smallImg.style.background = 'url("任务所需小图/img/pp'+index+'.jpeg")no-repeat';
	smallImg.style.backgroundSize = 'contain';
}

smallImg.onmouseover = function (){
	move.style.display = 'inline-block';
	bigImg.style.display = 'block';
	bigImg.children[0].src='任务所需小图/img/pp'+index+'.jpeg';
	smallImg.onmousemove = function (e){
		var e = e||window.event;
		moveLeft = e.clientX - move.offsetWidth*0.5 -smallImg.offsetParent.offsetLeft-move.offsetParent.offsetLeft;
		moveTop = e.clientY - move.offsetHeight*0.5 - smallImg.offsetParent.offsetTop-move.offsetParent.offsetTop;
		if(moveLeft<0){
			moveLeft = 0;
		}else if(moveLeft>=smallImg.offsetWidth-move.offsetWidth){
			moveLeft=smallImg.offsetWidth-move.offsetWidth;
		}
		if(moveTop<0){
			moveTop = 0;
		}else if(moveTop>=smallImg.offsetHeight-move.offsetHeight){
			moveTop=smallImg.offsetHeight-move.offsetHeight;
		}
		move.style.left = moveLeft+'px';
		move.style.top = moveTop+'px';

		bigImg.children[0].style.left = -moveLeft/(smallImg.offsetWidth/bigImg.children[0].offsetWidth)+move.offsetWidth*1.5+'px';
		bigImg.children[0].style.top = -moveTop/(smallImg.offsetHeight/bigImg.children[0].offsetHeight)+move.offsetWidth*1.5+'px';
	}
	
}
smallImg.onmouseout = function (){
	move.style.display = 'none';
	bigImg.style.display = 'none';
}
dc.onmouseover = function (){
	if(parseInt(input.value)==1){
		dc.style.cursor = 'not-allowed';
	}else{
		dc.style.cursor = 'pointer';
	}
}
add.onmouseover = function (){
	if(parseInt(input.value)==5){
		add.style.cursor = 'not-allowed';
	}else{
		add.style.cursor = 'pointer';
	}
}
// 商品数目增减
add.onclick = function (){
	if(input.value<5){
		input.value=parseInt(input.value)+1;
	}else{
		add.style.cursor = 'not-allowed';
	}
	
}
dc.onclick = function (){
	if(input.value>1){
		input.value=parseInt(input.value)-1;
	}else{
		dc.style.cursor = 'not-allowed';
	}
}
// 显示选中的型号
sc.innerText = '"'+one.innerText+'"';
one.onclick = function (){
	sc.innerText = '"'+one.innerText+'"';
	one.style.background="url('任务所需小图/img/duigou.png')no-repeat";
	one.style.backgroundPosition="57px 17px";
	one.style.border='1px solid #FF1493';
	two.style.background="none";
	two.style.border = 'none';
}
two.onclick = function (){
	sc.innerText = '"'+two.innerText+'"';
	two.style.background="url('任务所需小图/img/duigou.png')no-repeat";
	two.style.backgroundPosition="57px 17px";
	one.style.background="none";
	two.style.border='1px solid #FF1493';
	one.style.border = 'none';
}
// 购物车蒙板效果
burCar.onclick = function (){
	mb.style.display = 'block';
	box8d.style.display='block'; 
}
// 取消蒙板效果
xcontinue.onclick = function (){
	box8c.style.display = 'none';
	box8d.style.display='none';

}
xjs.onclick = function (){
	box8c.style.display = 'none';
	box8d.style.display='none';
}
xclose.onclick = function (){
	box8c.style.display = 'none';
	box8d.style.display='none';
}