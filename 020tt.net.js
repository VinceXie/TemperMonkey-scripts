/**
 * Created by vincexie on 16/9/2.
 */
setInterval(function ()
{
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for( var i=0; i < 25; i++ )
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  document.getElementById('fastpostmessage').value =text;
  document.getElementById('fastpostsubmit').click();
}, Math.random() * (100000 - 80000) + 80000);

//随机中文
var str='';
for(var i=0;i<100;i++){
  eval( "var word=" +  '"\\u' + (Math.round(Math.random() * 20901) + 19968).toString(16)+'"');
  str+=word;
}