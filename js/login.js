function $(id){
	return document.getElementById(id);
}
//当满足一些条件则跳转
function checkInput(){
	if(checkUservfy()&&checkUsername()&&checkPassword()){
		localStorage.setItem($("username").value,$("password").value);
		localStorage.setItem("hhhh",$("username").value);
		return true;
	}else{
		alert("信息不正确，请重新填写");
		return false;
	}
}
//验证码
var index;
var number;
//绑定事件
function getPic(){	
	var imgArray=["images/1_03.png","images/2_05.png","images/3_07.png"];
	var numArray=["DZr2","kWdk","t73Y"];
	index=Math.floor(Math.random()*3);
	//alert(index);弹出来是随机的索引（指的就是随机获取的图片）
	$("arrPic").src=imgArray[index];//将图片引到页面中
	number=numArray[index];//将获取到的随机图片对应的值赋值给number
	//alert(number);随机图片对应的数字	
}
function checkUservfy(){
	if(number!=$("verify_input").value){//判断数组与文本框中的数值
		$("verifyInfo").innerHTML="验证码错误！";
		$("verifyInfo").className="error";
		return false;
	}else{
		$("verifyInfo").innerHTML="OK!";
		$("verifyInfo").className="correct";
		return true;
	}
}
//用户名（为手机号）
function checkUsername(){
	var regName = /^[1]\d{10}$/;
	if(!regName.test($("username").value)){
		$("uesrnameInfo").innerHTML = "用户名有误";
		$("uesrnameInfo").className = "error";
		return false;
	}else{
		if(localStorage.getItem($("username").value) == null){
			$("uesrnameInfo").innerHTML = "该号码没有被注册";
			$("uesrnameInfo").className = "error";
		}else{
			$("uesrnameInfo").innerHTML = "OK!";
			$("uesrnameInfo").className="correct";
			return true;
		}
	}
}
//密码由数字和字母组成，长度6-14
function checkPassword(){
	var regPassword = /^[\da-z]{6,14}$/i;
	if(!regPassword.test($("password").value)){
		$("pwdInfo").innerHTML="密码必须是由数字和字母组成,长度6-14";
		$("pwdInfo").className="error";
		$("password").select();
		return false;
	}else{
		if(localStorage.getItem($("username").value)!==$("password").value){
			$("pwdInfo").innerHTML="密码有误";
			$("pwdInfo").className="error";
			return false;
		}else{
			$("pwdInfo").innerHTML="OK!";
			$("pwdInfo").className="correct";
		return true;
		}
	}
}