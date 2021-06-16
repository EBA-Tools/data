var i = document.getElementById('counter');
function countdown() {
  if (parseInt(i.innerHTML)=0) {
    countdownExe();
  }
  i.innerHTML = parseInt(i.innerHTML)-1;
}
setInterval(function(){ countdown(); },1000);
