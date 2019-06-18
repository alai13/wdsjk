
// ajax封装 start
function ajax(method,url,data,success){
  var xmlhttp;
  if (window.XMLHttpRequest)
  {
      //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
      xmlhttp=new XMLHttpRequest();
  }
  else
  {
      // IE6, IE5 浏览器执行代码
      xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  } 
  if(method == 'GET' && data){
    url = url + '?' + data;
  }
  xmlhttp.open(method,url,true);
  if(method == 'GET'){
    xmlhttp.send(null);
  }else{
    xmlhttp.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    xmlhttp.send(data);
  }
  xmlhttp.onreadystatechange = function(){
    if(xmlhttp.readyState==4 && xmlhttp.status==200){
      success(xmlhttp.responseText);
    }else{
      success('0');
    }
  }
}
// ajax封装 end 20190618_173149
