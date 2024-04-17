
function carregar(){
var morningTime = window.document.getElementById("morning-mensage");
var img = window.document.getElementById("dayTimePicture");
var date = new Date();
var hour =date.getHours();
morningTime.innerHTML = `The time is ${hour} o'clok.`

if (hour >= 0 && hour < 12) {
  img.src="pexels-aphiwat-chuangchoem-437716.png"
  document.body.style.background='#EDC891'
} else if (hour >= 12 && hour < 18) {
  img.src = "pexels-pixabay-36744.png"
  document.body.style.background='#AC3B11'
} else {
  img.src ="pexels-brenoanp-1136575.png"
document.body.style.background='#12262A'}
}