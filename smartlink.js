/* Bengtson-Fu!!!

created by Jason Bengtson, MLIS, MA : Available under Creative Commons non-commercial share alike open source license
and under the MIT license . . . pick your favorite terms!!!
originally built under a CC license for UNM HSLIC
*/

$(document).ready(function(){
$("a.mobilev").click(function(e){
e.preventDefault();
var linkit=$(this).attr("rel");
var reglink=$(this).attr("href");
mobileswitch(linkit, reglink);
});
function mobileswitch(linkit, reglink)
{
if ((screen.width <= 799)||(navigator.userAgent.indexOf('Mobile') != -1))
{
window.location = linkit;
}
else
{
window.location = reglink;
}
}
});
