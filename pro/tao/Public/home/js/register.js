/*-----------------------用户验证-----------------------------*/
function ch_username(){
 var username = /^[a-zA-Z0-9]{4,20}[a-zA-Z0-9]+$/;
 var obj = $("#username");
 var obj_error = $("#username").parent().children().eq(2);
 var is_exist = false;
 if(obj.val()==''){
  obj_error.html("用户名不能为空");
  return false;
 }else if(!username.test(obj.val())){
  obj_error.html("请输入5-20个非特殊字符");
  return false;
 }
 obj_error.html("<font color='#000000'>检测用户名中...</font>");
 $.ajax({type:"POST",
		 async:false,
		 dataType:"json",
         url:host+'/IsExistUsername',
         data:"username="+obj.val(),
         success:function(data){
             if(data.is_exist==1){
			   is_exist = true;
			 }else{
			   is_exist = false;
			 }
         }});
 if(is_exist){
  obj_error.html("用户名已经存在");
  return false;
 }else{
  obj_error.html('').append("<img src='"+src+"/home/images/pass.png' width='20' height='20'/>");
  return true;
 }
}
/*-----------------------密码验证-----------------------------*/
function ch_passwd(){
 var obj = $("#password");
 var obj_error = $("#password").parent().children().eq(2);
 if(obj.val()==''){
   obj_error.html("密码不能为空");
   return false;
 }else if(obj.val().length>15 || obj.val().length<5){
   obj_error.html("密码长度5-15");
   return false;
 }else if($("#pwd").val()==''){
   $("#pwd").parent().children().eq(2).html("请再次输入密码");
   return false;
 }else if(obj.val()!=$("#pwd").val()){
   $("#pwd").parent().children().eq(2).html("俩次密码不一致");
   return false;
 }else{
   obj_error.html('').append("<img src='"+src+"/home/images/pass.png' width='20' height='20'/>");
   $("#pwd").parent().children().eq(2).html('').append("<img src='"+src+"/home/images/pass.png' width='20' height='20'/>");
   return true;
 }
}
/*-----------------------邮箱验证-----------------------------*/
function ch_email(){
 var obj = $("#email");
 var obj_error = $("#email").parent().children().eq(2);
 var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
 if(obj.val()==''){
   obj_error.html("电子邮箱不能为空");
   return false;
 }else if(!myreg.test(obj.val())){
    obj_error.html("电子邮箱格式不正确");
    return false;
 }else{
    obj_error.html('').append("<img src='"+src+"/home/images/pass.png' width='20' height='20'/>");
    return true;
 }
}
/*-----------------------电话验证----------------------------*/
function ch_phone(){
 var obj=$("#phone");
 var obj_error=$("#phone").parent().children().eq(2);
 var mobile=/^1+\d{10}$/;
 if(obj.val()==''){
    obj_error.html("电话不能为空");
    return false;
 }else if(!mobile.test(obj.val())){
	obj_error.html("请输入正确手机号");
    return false;
 }else{
	obj_error.html('').append("<img src='"+src+"/home/images/pass.png' width='20' height='20'/>");
    return true;
 }
}
/*--------------------验证码----------------------*/
function ch_yzm(){
 var obj=$("#yzm");
 var obj_error=$("#yzm").parent().children().eq(2);
 var is_equal=false;
 if(obj.val()==''){
  obj_error.html("请输入验证码");
  return false;
 }
 $.ajax({type:"POST",
		 async:false,
         url:host+'/EqualVerify',
         data:"yzm="+obj.val(),
		 dataType:"json",
         success:function(mes){
           if(mes.info==1){
		     is_equal=true;
		   }else{
		     is_equal=false;
		   }
		 }
		});
 if(is_equal){
	obj_error.html('').append("<img src='"+src+"/home/images/pass.png' width='20' height='20'/>");
    return true;
 }else{
	obj_error.html("验证码不一致");
 }
}
/*----------注册表单验证----------------*/
function ch(){
 if(!ch_username()){//用户名验证
  return false;
 }else if(!ch_passwd()){  //密码验证
  return false;
 }else if(!ch_email()){   //邮箱验证
  return false;
 }else if(!ch_phone()){   //电话验证
  return false;	 
 }else if(!ch_yzm()){     //验证码
  return false;
 }
}

$(function(){
    $("#username").blur(function(){
     return ch_username();
    });

	$("#password,#pwd").blur(function(){//密码
	 return ch_passwd();
	});

	$("#email").blur(function(){//电子邮箱
	 return ch_email();
	});

	$("#phone").blur(function(){//手机号
	 return ch_phone();
	});

	$("#yzm").keyup(function(){  //验证码
	 $(this).val($(this).val().substr(0,4));
	 return ch_yzm();
	});
});