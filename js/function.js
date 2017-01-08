/*************************************************/
//1.解决类名的兼容问题
function getClass(classname,father){
	//判断浏览器		
	father= father || document;
	if (father.getElementsByClassName){
	return	father.getElementsByClassName(classname);
	}else{
		var all=father.getElementsByTagName('*');
		//所有标签
		var newarr=[];
		for (var i = 0; i < all.length; i++) {
			if (check(classname,all[i].className)) {
				newarr.push(all[i]);
			};
		};
	}
	return newarr;
}
function check(val,string){
	var arr =string.split(" ");
	for(var i in arr){
		if (val==arr[i]) {
			return true;
		};
	}
	return false;
}

/***********************************************/
//获取样式的值的兼容问题
function getstyle(obj,attr){
	if (obj.currentStyle) {//IE
		return parseInt(obj.currentStyle[attr]);
	}else{
		return parseInt(getComputedStyle(obj,null)[attr]);
	}
}
/********************************************/
//获取元素的兼容函数（可支持标签，ID，class）
function $(selector,father){
	father = father || document;
	if (typeof selector=="string") {
		selector=selector.replace(/^\s*|\s*$/g,"")
		if (selector.charAt(0)==".") {
			return getClass(selector.substring(1),father);
		}else if (selector.charAt(0)=="#") {
			return document.getElementById(selector.substring(1));
		}else if (/^[a-z][1-6a-z]*/g.test(selector)) {
			return father.getElementsByTagName(selector);
		};
	}else if (typeof selector== "function") {
		// window.onload=function(){
		// 	selector();
		// }
		addEvent(window,"load",function(){
			selector();
		})
	};
}

/***************************************************/
		// 获取所有的子节点函数
		// father:指定父节点
		// type:"a"只有元素节点
		// 		"b" 元素节点加文本节点
function getChild(father,type){
	type = type || "a";
	var all=father.childNodes;//遍历所有子节点
	var newarr=[];//定义一个新的空数组用来存储
	for (var i = 0; i < all.length; i++) {
			if (type=="a") {//判断子节点的类型
					if (all[i].nodeType==1) {//如果为为元素节点
					newarr.push(all[i]);
			};
		}else if (type=="b") {//如果为文本和元素节点(文本节点中包含空白节点)
			if (all[i].nodeType==1 ||(all[i].nodeType==3 && all[i].nodeValue.replace(/^\s*|\s*$/g,""))) {//把元素节点和文本节点中的空白节点删除后添加的新数组中
				newarr.push(all[i]);
			};
		};
	};
	return newarr;
}
      // 获取第一个子节点
function getFirst(father){
	return getChild(father)[0];
}
	// 获取最后一个子节点
function getLast(father){
	return getChild(father)[getChild(father).length-1]
}
	//获取指定位置的子节点
function getNum(father,xiabiao){
	return getChild(father)[xiabiao];
}	
	//获取下一个兄弟元素的子节点
function getNext(obj){
	var next = obj.nextSibling;
	if (!next) {
		return false;
	}
	while(next.nodeType==3 || next.nodeType==8){
		next=next.nextSibling;
			if (!next) {
			return false;
		}
	}
	return next;
}

		//获取上一个兄弟元素的子节点
function getUp(obj){
	var up= obj.previousSibling;
	if (!up) {
		return false;
	}
	while(up.nodeType==3 || up.nodeType==8){
		up=up.previousSibling;
			if (!up) {
			return false;
		}
	}
	return up;
}

/*******************************************/
          // 解决事件绑定的兼容问题
function addEvent(obj,event,fun){
	obj[fun]=function(){
			fun.call(obj);
		}
	if (obj.attachEvent) {
		obj.attachEvent("on"+event,obj[fun]);
	}else{
		obj.addEventListener(event,fun,false);
	}
}

/************************************/
function removeEvent(obj,event,fun){
	if (obj.detachEvent) {
		obj.detachEvent("on"+event,obj[fun]);
	}else{
		obj.removeEventListener(event,obj[fun],false)
	}
}


/************************************************/
			// 解决鼠标滚轮事件的兼容问题
function mouseWheel(obj,up,down){
	if (obj.attachEvent) {
		obj.attachEvent("onmousewheel",scrollFn);
		//IE、opera
	}else if(obj.addEventListener){
		obj.addEventListener("mousewheel",scrollFn,false);
		//chrome,safari -webkit-
		obj.addEventListener("DOMMouseScroll",scrollFn,false);
		//firefox -moz-
	}
		function scrollFn(e){
		e=e||window.event;
		if (e.preventDefault) {
			e.preventDefault;
		}else{
			e.returnValue=false;
		}
		var f=e.wheelDelta||e.detail;
		if (f==-3||f==120) {
			if (up) {
				up();
			};
		}else if (f==-120||f==3) {
			if (down) {
				down();
			};
		};
	}
}

/****************************************/
//hover
//判断某个元素是否包含有另外一个元素
 function contains (parent,child) {
  if(parent.contains){
     return parent.contains(child) && parent!=child;
  }else{
    return (parent.compareDocumentPosition(child)===20);
  }
 }

//判断鼠标是否真正的从外部移入，或者是真正的移出到外部；
  function checkHover (e,target) {
   if(getEvent(e).type=="mouseover"){
      return !contains(target,getEvent(e).relatedTarget || getEvent(e).fromElement)&&
    !((getEvent(e).relatedTarget || getEvent(e).fromElement)===target)
   }else{
    return !contains(target,getEvent(e).relatedTarget || getEvent(e).toElement)&&
    !((getEvent(e).relatedTarget || getEvent(e).toElement)===target)
    }
  }
//鼠标移入移出事件
/*
  obj   要操作的对象
  overfun   鼠标移入需要处理的函数
  outfun     鼠标移除需要处理的函数
*/
function hover (obj,overfun,outfun) {
    if(overfun){
      obj.onmouseover=function  (e) {
        if(checkHover(e,obj)){
           overfun.call(obj,[e]);
        }
      }
    }
    if(outfun){
      obj.onmouseout=function  (e) {
        if(checkHover(e,obj)){
           outfun.call(obj,[e]);
        }
      }
    }
}
 function getEvent (e) {
      return e||window.event;
 }