// Using jQuery
// $('#save_lincoln').click(()=>saveLincoln(parseInt($('#interval').val())))
//
// function saveLincoln(interval) {
//   if(isNaN(interval)) {
//     interval = 10000
//   }
//   $('#foreground').fadeOut(interval);
// }

const button = document.getElementById('save_lincoln')
const foreground = document.getElementById('foreground')
const hiddenMessage = document.getElementById('hidden-message')


button.addEventListener('click', function(){
  fade(foreground)
  hiddenMessage.style.display = 'inline'
});

function fade(element) {
  const interval = document.getElementById('interval').value
  var op = 1;  // initial opacity
  var timer = setInterval(function () {
      if (op <= 0.1){
          clearInterval(timer);
          element.style.display = 'none';
      }
      element.style.opacity = op;
      element.style.filter = 'alpha(opacity=' + op * 100 + ")";
      op -= op * 0.1;
  }, interval);
}
