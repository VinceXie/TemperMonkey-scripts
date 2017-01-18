/**
 * Created by vincexie on 16/9/2.
 */
var postMobile = function () {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for( var i=0; i < 25; i++ )
  text += possible.charAt(Math.floor(Math.random() * possible.length));
  document.getElementById('fastpostmessage').value = text;

  var possible = ["乾坤一掷","巧取","乱射"];

  document.getElementsByName('secanswer')[0].value =possible[0];
  document.getElementById('fastpostsubmit').click();

  document.getElementsByName('secanswer')[0].value =possible[1];
  document.getElementById('fastpostsubmit').click();

  document.getElementsByName('secanswer')[0].value =possible[2];
  document.getElementById('fastpostsubmit').click();
}
var postPC = function () {
  console.log("post"+"-"+(new Date()).getHours()+":"+(new Date()).getMinutes()+":"+(new Date()).getSeconds());
  var text = "";
  var possible = "fdasfdasfadsfasdfasdfdasfsdafdsafasd";

  for( var i=0; i < 25; i++ )
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  document.getElementById('fastpostmessage').value = text;

  var possible = ["乾坤一掷","巧取","乱射"];
  try{
    document.getElementsByName('secanswer')[0].value =possible[0];
  }catch(err) {
    console.log(err);
  }

  document.getElementById('fastpostsubmit').click();

  try{
    document.getElementsByName('secanswer')[0].value =possible[1];
  }catch(err) {
    console.log(err);
  }
  document.getElementById('fastpostsubmit').click();

  try{
    document.getElementsByName('secanswer')[0].value =possible[2];
  }catch(err) {
    console.log(err);
  }
  document.getElementById('fastpostsubmit').click();
}

postPC();
// 200秒 差不多四分钟一次。
setInterval(function(){postPC();}, Math.random() * (100000 - 80000) + 200000);

