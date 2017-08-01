function $(id){
	return document.getElementById(id)||document.getElementsByClassName(id)[0];
}//指的是既可以获取id名也可以获取类名
//只有输入都正确才能提交
function checkInput(){
	if(checkPhone()&&checkPassword()&&checkPassword()&&checkUservfy()){
		alert("注册成功！");
		localStorage.setItem($("userphone").value,$("password").value);
	}else {
		alert("注册失败，请重新注册！");
		return false;
	}
}
//手机号码，11位，以数字1开头
function checkPhone(){
	var regPhone = /^1\d{10}$/;
	if(!regPhone.test($("userphone").value)){
		$("phoneInfo").innerHTML = "请输入正确的手机号码";
		$("phoneInfo").className = "error";
		return false;
	}else{
		if(localStorage.getItem($("userphone").value)){
		$("phoneInfo").innerHTML="用户名已被注册";
		$("phoneInfo").className= "error";
		return false;
		}else {
		$("phoneInfo").innerHTML="OK";
		$("phoneInfo").className="correct";
		// $("icon-shouji").style.color="#228B22";//手机图标变颜色
		// $("icon_1").style.border="1px solid #228B22";//边框颜色发生改变
		// $("userphone").style.border="1px solid #228B22";
		// $("userphone").style.borderLeft="none";
		return true;
		}
	}
}
//密码必须是由数字和字母组成，长度6-14
function checkPassword(){
	var regPassword = /^[\da-z]{6,14}$/i;
		if(!regPassword.test($("password").value)){
			$("pwdInfo").innerHTML = "密码必须是由数字和字母组成，长度6-14";
			$("pwdInfo").className = "error";
			// $("password").select();
			return false;
		}else{
			$("pwdInfo").innerHTML="OK!";
			$("pwdInfo").className="correct";
			return true;
		}
}
//两次输入的密码必须相同
function checkRepassword(){
	if($("rePass").value !== $("password").value){
		$("repwdInfo").innerHTML = "两次输入不一致";
		$("repwdInfo").className = "error";
		return false;
	}else{
		$("repwdInfo").innerHTML="OK!";
		$("repwdInfo").className="correct";
		return true;
	}
}
// 获取验证码(获取验证码的地方)btn绑定事件
 function getCodeText(){	
 	var str=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
 	var count="";
 	for(var i=0;i<4;i++){
 		//指的是找数组中每个索引的位置，Math.random的范围是0-1之间，乘以35指的是我上面的数组长度是36，但是索引是从0开始，所以最后一位数的所以就是35，所以代码说的是向下取整0-35之间的随机的四位数。
 		var index=Math.floor(Math.random()*62);
 		count+=str[index];
 	}
 	$("getCode").innerHTML=count;
 }
 //输入验证码
 function checkUservfy(){
 	var getValue=$("getCode").innerHTML;//将随机获取到的数字拿出来
 	if(getValue.toLowerCase()!=$("verify_input").value.toLowerCase()){//随机的数字是否等于输入文本框中的数字
 		$("codeInfo").innerHTML="验证码错误！";
 		$("codeInfo").className="error";
 		return false;
 	}else{
 		$("codeInfo").innerHTML="OK!";
 		$("codeInfo").className="correct";
 		$("icon_1").style.color="#228B22";
 		return true;
 	}
 }
 