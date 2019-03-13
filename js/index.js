/*$('#save_lincoln').click(()=>saveLincoln(parseInt($('#interval').val())))

function saveLincoln(interval) {
  if(isNaN(interval)) {
    interval = 10000
  }
  $('#foreground').fadeOut(interval);
}*/

const intervalInput = document.getElementById("interval");
const saveButton = document.getElementById("save_lincoln");
const zombieAbe = document.getElementById("foreground");

//Pure CSS Method
/*saveButton.addEventListener('click', function(){
  const seconds = intervalInput.value / 1000
  zombieAbe.style.transition = `opacity ${seconds}s ease`;
  zombieAbe.style.opacity = 0;
});*/

saveButton.addEventListener('click', function() {
  let milliseconds = parseInt(intervalInput.value);
  let startingValue = 1;
  let decrementAmount = startingValue/100; // milliseconds;
  let fadeOut = setInterval(function () {
        if (startingValue == 0){
            clearInterval(fadeOut);
        }
        zombieAbe.style.opacity = startingValue;
        startingValue -= decrementAmount;
    }, milliseconds*decrementAmount);
});
