//定义全局变量
let index = 0;
//循环次数
let dots = document.getElementsByTagName("span");
//显示第几张图片
function showCurrentImage() {
    for (var i = 0; i < dots.length; i++) {
        dots[i].className = ' ';
    }
    dots[index].className = "on";
}

let timer;

function autoPlay(wrap) {
    timer = setInterval(function() { nextImage(wrap); }, 1000);
}

//上一张图片
function prevImage(wrap) {
    index--;
    if (index < 0) {
        index = 4;
    }
    showCurrentImage();
    var newLeft;
    if (wrap.style.left === "0px") {
        newLeft = -2400;
    } else {
        newLeft = parseInt(wrap.style.left) + 600;
    }
    wrap.style.left = newLeft + "px";
}
//下一张图片
function nextImage(wrap) {
    index++;
    //首先限制循环
    if (index > 4) {
        index = 0;
    }
    showCurrentImage(wrap);
    //控制图片的移动
    var newLeft;
    if (wrap.style.left === "-3600px") {
        newLeft = -1200;
    } else {
        newLeft = parseInt(wrap.style.left) - 600;
    }
    wrap.style.left = newLeft + "px";
}

//自动播放函数


//获取对象
var wrap = document.querySelector('.wrap');
autoPlay(wrap);
var left = document.querySelector('.arrow_left');
left.onclick = function() {
    prevImage(wrap);
}

var right = document.querySelector('.arrow_right');
right.onclick = function() {
    nextImage(wrap);
}

var container = document.querySelector('.container');
container.onmouseover = function() {
    clearInterval(timer);
}

container.onmouseout = function() {
    autoPlay(wrap);
}