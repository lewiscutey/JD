$(function(){
			// 京东跑马灯动效
	var bannerpmd=$(".bannerpmd")[0];
	var pmdboxda=$(".pmdboxda")[0];
	var imgs=$(".pmdbox");
	var btnl=$("#btnl");
	var btnr=$("#btnr");
	btnr.onclick=function(){
		var first=getFirst(pmdboxda);
		animate(first,{marginLeft:-1004},function(){
			pmdboxda.appendChild(first);
			first.style.marginLeft="0";
		})
	}
	btnl.onclick=function(){
		var first=getFirst(pmdboxda);
		var last=getLast(pmdboxda);
		last.style.marginLeft="-1004px";
		pmdboxda.insertBefore(last,first)
		animate(last,{marginLeft:0});
	}
	bannerpmd.onmouseover=function(){
		btnl.style.display="block";
		btnr.style.display="block";
	}
	bannerpmd.onmouseout=function(){
		btnl.style.display="none";
		btnr.style.display="none";
	}

			// banner动效
	var boxda=$(".bannerimgbox")[0];
	var imgssbox=$(".bannerimg")[0];
	var imgss=$("img",imgssbox);
	var lis=$("li",$(".lunbo")[0]);
	var bbtnl=$("#bbtnl");
	var bbtnr=$("#bbtnr");
	var num=0;
	function bndx(type){
		type= type|| "right"
		if (type=="right") {
			num++;
			if (num>=imgss.length) {
				num=0;
			};
		}else if(type=="left"){
			num--;
			if (num<=-1) {
				num=imgss.length-1;
			};
		}
		for (var i = 0; i < imgss.length; i++) {
			imgss[i].style.opacity=0;
			lis[i].style.background="black";
		};
		animate(imgss[num],{opacity:1})
		lis[num].style.background="red";
	}
	var t = setInterval(bndx,2000)
	boxda.onmouseover=function(){
		clearInterval(t);
		bbtnl.style.display="block";
		bbtnr.style.display="block";
	}
	boxda.onmouseout=function(){
		t = setInterval(bndx,2000);
		bbtnl.style.display="none";
		bbtnr.style.display="none";
	}
	bbtnr.onclick=function(){
		bndx("right");
	}
	bbtnl.onclick=function(){
		bndx("left");
	}
	for (var j = 0; j < lis.length; j++) {
		lis[j].name=j;
		lis[j].onmouseover=function(){
			for (var k = 0; k < imgss.length; k++) {
				imgss[k].style.opacity=0;
				lis[k].style.background="black";
			};
			imgss[this.name].style.opacity=1;
			lis[this.name].style.background="red";
		}
	};



			// 一楼动效轮播
 var yilou=$("img",$(".imgs")[0]);
 var yljtl=$(".yljtl")[0];
 var yljtr=$(".yljtr")[0];
 var yldt=$(".yldt")[0];
 var yllis=$("li",$(".yllunbo")[0])
 for (var i = 1; i < yilou.length; i++) {
 	yilou[i].style.left="440px"
 };
 	var num1=0;
 	var next1=0;
 	function yllbdx(type){
 		type=type||"right";
 		if (type=="right") {
	 			next1++;
	 		if (next1>=yilou.length) {
	 			next1=0;
	 		};
	 		yilou[num1].style.left="0px";
	 		yilou[next1].style.left="440px";
	 		animate(yilou[num1],{left:-440})
	 		animate(yilou[next1],{left:0})
	 		yllis[num1].style.background="#666"
	 		yllis[next1].style.background="#B61B1F"
	 		num1=next1;
 		}else if (type=="left") {
 			next1--;
	 		if (next1<=-1) {
	 			next1=yilou.length-1;
	 		};
	 		yilou[num1].style.left="0px";
	 		yilou[next1].style.left="-440px";
	 		animate(yilou[num1],{left:440})
	 		animate(yilou[next1],{left:0})
	 		yllis[num1].style.background="#666"
	 		yllis[next1].style.background="#B61B1F"
	 		num1=next1;
 		};	
 	}
 	var t1=setInterval(yllbdx,2000)
 	yljtl.onclick=function(){
 			yllbdx("left")
 	}
 	yljtr.onclick=function(){
 			yllbdx("right");
 	}
 	yldt.onmouseover=function(){
 		clearInterval(t1);
 		yljtl.style.display="block";
 		yljtr.style.display="block";
 	}
 	yldt.onmouseout=function(){
 		t1=setInterval(yllbdx,2000)
 		yljtl.style.display="none";
 		yljtr.style.display="none"; 		
 	}
 	for (var i = 0; i < yllis.length; i++) {
 		yllis[i].name=i;
 		yllis[i].onclick=function(){
 			next1=this.name;
 			if (next1>num1) {
            yilou[num1].style.left="0px";
	 		yilou[next1].style.left="440px";
	 		animate(yilou[num1],{left:-440})
	 		animate(yilou[next1],{left:0})
	 		yllis[num1].style.background="#666"
	 		yllis[next1].style.background="#B61B1F"
	 		num1=next1;
 			}else if(next1<num1){
	 		yilou[num1].style.left="0px";
	 		yilou[next1].style.left="-440px";
	 		animate(yilou[num1],{left:440})
	 		animate(yilou[next1],{left:0})
	 		yllis[num1].style.background="#666"
	 		yllis[next1].style.background="#B61B1F"
	 		num1=next1;
 			}
 		}
 	};

 		// 一楼选项卡动效
function wzxxk(index2){
	var zxxkk=$(".zxxkk")[index2];
	var ylright=$(".zxxk",zxxkk);
	var ylxxk=$("a",$(".fzxbdh")[index2]);
	for (var i = 0; i < ylxxk.length; i++) {
		ylxxk[i].name=i;
		ylxxk[i].onmouseover=function(){
			for (var j = 0; j < ylright.length; j++) {
				ylright[j].style.display="none";
				ylxxk[j].className="";
			};
			ylright[this.name].style.display="block";
			ylxxk[this.name].className="dx";
		}
	};
}
for (var z = 0; z <11 ;z++) {
	wzxxk(z)
};


			// 二楼动效小banner
function elqbj(index1){
	var erllbk=$(".erllbk")[index1];
	var erimg=$(".erllb",erllbk);
	var erljtl=$(".erljtl",erllbk)[0];
	var erljtr=$(".erljtr",erllbk)[0];
	var erlis=$("li",$(".erlunbo")[index1]);
	for (var i = 1; i < erimg.length; i++) {
		erimg[i].style.left="340px";
	};
	var num2=0;
	var next2=0;
	function erxlb(type){
		type=type||"right"
		if (type=="right") {
				next2++;
			if (next2>=erimg.length) {
				next2=0;
			};
			erimg[num2].style.left="0px";
			erimg[next2].style.left="340px";
			animate(erimg[num2],{left:-340})
			animate(erimg[next2],{left:0})
			erlis[num2].style.background="#666"
		 	erlis[next2].style.background="#B61B1F"
			num2=next2;
		}else if (type=="left") {
			next2--;
		 		if (next2<=-1) {
		 			next2=erimg.length-1;
		 		};
		 		erimg[num2].style.left="0px";
		 		erimg[next2].style.left="-340px";
		 		animate(erimg[num2],{left:340})
		 		animate(erimg[next2],{left:0})
		 		erlis[num2].style.background="#666"
		 		erlis[next2].style.background="#B61B1F"
		 		num2=next2;
		};
	}
	var t2=setInterval(erxlb,2000)
	erllbk.onmouseover=function(){
		erljtl.style.display="block";
		erljtr.style.display="block";
		clearInterval(t2);
	}
	erllbk.onmouseout=function(){
		erljtl.style.display="none";
		erljtr.style.display="none";
		t2=setInterval(erxlb,2000);
	}
	erljtl.onclick=function(){
		erxlb("left");
	}
	erljtr.onclick=function(){
		erxlb("right");
	}
}
for (var l = 0; l < 5; l++) {
	elqbj(l);
};



			// 三楼小banner轮播
function ssw(index){
	var sanlb=$(".sanlb")[index];
	var sanlis=$("li",$(".sanlunbo")[index])
	var sanimg=$("img",$(".sanimg")[index]);
	var sanjtl=$(".sanljtl")[index];
	var sanjtr=$(".sanljtr")[index];
	for (var i = 1; i < sanimg.length; i++) {
		sanimg[i].style.left="439px"
	};
	var num3=0;
	var next3=0;
	function sanxlb(type){
		type=type||"right"
		if (type=="right") {
				next3++;
			if (next3>=sanimg.length) {
				next3=0;
			};
			sanimg[num3].style.left="0px";
			sanimg[next3].style.left="439px";
			animate(sanimg[num3],{left:-439})
			animate(sanimg[next3],{left:0})
			sanlis[num3].style.background="#666"
		 	sanlis[next3].style.background="#B61B1F"
			num3=next3;
		}else if (type=="left") {
			next3--;
		 		if (next3<=-1) {
		 			next3=sanimg.length-1;
		 		};
		 		sanimg[num3].style.left="0px";
		 		sanimg[next3].style.left="-439px";
		 		animate(sanimg[num3],{left:439})
		 		animate(sanimg[next3],{left:0})
		 		sanlis[num3].style.background="#666"
		 		sanlis[next3].style.background="#B61B1F"
		 		num3=next3;
		};
	}
	var t3=setInterval(sanxlb,2000)
	sanlb.onmouseover=function(){
		sanjtl.style.display="block";
		sanjtr.style.display="block";
		clearInterval(t3);
	}
	sanlb.onmouseout=function(){
		sanjtl.style.display="none";
		sanjtr.style.display="none";
		t3=setInterval(sanxlb,2000);
	}
	sanjtl.onclick=function(){
		sanxlb("left");
	}
	sanjtr.onclick=function(){
		sanxlb("right");
	}
}
	for (var i = 0; i < 4; i++) {
		ssw(i);
	};
      
         // 京东12楼轮播
function sehs(index3){
	var sellbx=$(".sellbx")[index3];
	var seimgs=$("img",sellbx);
	var seljtl=$(".seljtl")[index3];
	var seljtr=$(".seljtr")[index3];
	var selis=$("li",sellbx);
	var num4=0;
	var next4=0;
	for (var i = 1; i < seimgs.length; i++) {
		seimgs[i].style.left="395px";
	};
	function selb(type){
		type=type||"right";
		if (type=="right") {
			next4++;
			if (next4>=seimgs.length) {
				next4=0;
			};
			seimgs[num4].style.left="0px";
			seimgs[next4].style.left="395px";
			animate(seimgs[num4],{left:-395});
			animate(seimgs[next4],{left:0});
			selis[num4].style.background="#666";
			selis[next4].style.background="#B61B1F";
			num4=next4;
		}else if (type=="left") {
			next4--;
			if (next4<=-1) {
				next4=seimgs.length-1;
			}
			seimgs[num4].style.left="0px";
			seimgs[next4].style.left="-395px";
			animate(seimgs[num4],{left:395});
			animate(seimgs[next4],{left:0});
			selis[num4].style.background="#666";
			selis[next4].style.background="#B61B1F";
			num4=next4;
		};
	}
	var t4=setInterval(selb,2000);
		sellbx.onmouseover=function(){
			seljtl.style.display="block";
			seljtr.style.display="block";
			clearInterval(t4);
		}
		sellbx.onmouseout=function(){
			seljtl.style.display="none";
			seljtr.style.display="none";
			t4=setInterval(selb,2000);
		}
		seljtl.onclick=function(){
			selb("left");
		}
		seljtr.onclick=function(){
			selb("right");
		}
}
for (var i = 0; i < 2; i++) {
	sehs(i);
};

      // 楼层跳转
var baihuo=$(".dtlj")[0];
var floor=$(".floor");
var jump=$(".jump")[0];
var zlis=$("li",jump);
var jump_flo=$(".jump_flo");
var jump_flo1=$(".jump_flo1");
var now=0;
document.documentElement.scrollTop=1;
var obj=document.documentElement.scrollTop?document.documentElement:document.body;//解决监测谷歌和火狐滚动条位置时的兼容问题
window.onscroll=function(){
	//当滚动条的距上边的距离大于baihuo距上面的距离时显示
	if (obj.scrollTop>=baihuo.offsetTop) {
		jump.style.display="block";
	}else{
		jump.style.display="none";
	}
    
	for (var i = 0; i < floor.length; i++) {//遍历楼层
		if (obj.scrollTop+80>=floor[i].offsetTop) {//判断滚动条的top值是否大于对应楼层的top值
			now=i;
			for (var j = 0; j < zlis.length; j++) {//遍历li,给它附初始样式
        	jump_flo[j].style.display="block";
        	jump_flo1[j].style.display="none";
        };
			jump_flo1[i].style.display="block";
			jump_flo[i].style.display="none";
		};
	};
}

for (var i = 0; i < zlis.length; i++) {//遍历li
	zlis[i].aa=i;
	zlis[i].onclick=function(){//点击li动态到达对应的楼层
	// obj.scrollTop=floor[this.aa].offsetTop;
       animate(obj,{scrollTop:floor[this.aa].offsetTop})
	}

	zlis[i].onmouseover=function(){
		//鼠标移入li时变色
		jump_flo1[this.aa].style.display="block";
		jump_flo1[this.aa].style.color="#FFF";
		jump_flo1[this.aa].style.background="#C81623";
		jump_flo[this.aa].style.display="none";
	}
	zlis[i].onmouseout=function(){
		if (now!=this.aa) {
		jump_flo1[this.aa].style.display="none";
		jump_flo[this.aa].style.display="block";
		};
		jump_flo1[this.aa].style.color="#C81623";
		jump_flo1[this.aa].style.background="#FFF";	
	}
	zlis[i].onclick=function(){
		// obj.scrollTop=floor[this.aa].offsetTop;
		animate(obj,{scrollTop:floor[this.aa].offsetTop});
	}
	
};
					// 天天特价的动效
var ttdj1=$(".ttdj_img")[0];
var ttdj2=$(".ttdj_img2");
ttdj1.onmouseover=function(){
	animate(ttdj1,{marginLeft:-10});
}
ttdj1.onmouseout=function(){
	animate(ttdj1,{marginLeft:0});
}
for (var i = 0; i < ttdj2.length; i++) {
	ttdj2[i].aa=i;
	ttdj2[i].onmouseover=function(){
		animate(ttdj2[this.aa],{marginLeft:-10})
	}
	ttdj2[i].onmouseout=function(){
		animate(ttdj2[this.aa],{marginLeft:0})
	}
};

				// 天天特价跑马灯
var rmsd=$(".rmsd")[0];
function ttpmd(){
	var first5=getFirst(rmsd);
	var last5=getLast(rmsd);
	rmsd.insertBefore(first5,last5);
	animate(last5,{marginTop:50});
}
var t5=setInterval(ttpmd,2500)


				// 下拉列表
function xl(index4){
	var yiji=$(".yiji")[index4];
	var erji=$(".erji")[0];
	hover(yiji,function(){
		erji.style.display="block";
	},function(){
		erji.style.display="none";
	})
}
for (var i = 0; i < 15; i++) {
	xl(i);
};

				// 右侧
var ylb=$(".ylb");
var span=$("span",$(".youdhlb")[0]);
for (var i = 0; i < ylb.length; i++) {
	ylb[i].bb=i;
	ylb[i].onmouseover=function(){
		animate(span[this.bb],{width:62},300)
		span[this.bb].style.display="block";
	}
	ylb[i].onmouseout=function(){
		animate(span[this.bb],{width:0},300)
		span[this.bb].style.display="none";
	}
};

				// 猜你喜欢滚动线
var p=$("p",$(".gdx")[0])[0];
p.onmouseover=function(){
	var pl=getstyle(p,"right");
	p.style.right="845px"
	animate(p,{right:-1})
}

				// header动效
function txl(index5){
	var bj=$(".xlzt")[index5];
	var city=$(".dd")[index5];
		hover(bj,function(){
		city.style.display="block";
		},function(){
		city.style.display="none";
		})
}
for (var i = 0; i < 6; i++) {
	txl(i);
};











})