function countdown() {
  var i = document.getElementById('counter');
  if (parseInt(i.innerHTML)=0) {
    countdownExe();
  }
  i.innerHTML = parseInt(i.innerHTML)-1;
  countdownSec();
}
function countdownSec() {
  var x = document.getElementById('sec');
  if (parseInt(i.innerHTML)=1) {
    x.innerHTML = 'second';
  } else {
    x.innerHTML = 'seconds';
  }
}
setInterval(function(){ countdown(); },1000);
