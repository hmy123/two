$(function(){
	var swiper=new Swiper(".swiper-container",{
		pagination:".swiper-pagination",
		paginationClickable:true,
		direction:"vertical",
		mousewheelControl:true,//鼠标控制
		keyboardControl:true,//键盘控制
		onInit:function(swiper){
			swiperAnimateCache(swiper); //隐藏动画元素 
   			swiperAnimate(swiper); //初始化完成开始动画
		},
		//导航栏渐变
		onSlideChangeEnd: function(swiper){ 
	    	swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
			switch(swiper.activeIndex){
				case 0:
				$(".nav").css({
					"background":"#d7dade",
					"color":"black",
				});
				$(".nav").hide();
				$(".nav").slideDown(500);
				break;
				case 1:
				$(".nav").hide();
				$(".nav").css({
					"background":"rgba(0,0,0,0.5)",
					"color":"white",
				});
				$(".nav").slideDown(500);
				break;
				case 2:
				$(".nav").hide();
				$(".nav").slideDown(500);
				break;
				case 3:
				$(".nav").hide();
				$(".nav").slideDown(500);
				break;
				case 4:
				$(".nav").hide();
				$(".nav").slideDown(500);
				break;
			}
		}
	});
	var username=localStorage.getItem("hhhh");
	console.log(username);
	if(username!=$("username").value){//如果存储的数据不等于输入的数值
		$(".enter").hide();//登录、注册隐藏
		$(".line").hide();
		$(".register").hide();
		$(".show").html(username);//页面显示存储的数据
		$("#exit").click(function(){
			localStorage.removeItem("hhhh");//点击退出时，清除存储的数据
			$(".enter").show();//将登录、注册显示
			$(".register").show();
			$("#exit").hide();//将退出和获取存储的数据隐藏
			$(".show").html(username).hide();
		});
	}else{
		$("#exit").hide();//退出隐藏
	}
});
