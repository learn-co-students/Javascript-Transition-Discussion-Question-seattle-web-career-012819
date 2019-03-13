/*
$('#save_lincoln').click(()=>saveLincoln(parseInt($('#interval').val())))

function saveLincoln(interval) {
  if(isNaN(interval)) {
    interval = 10000
  }
  $('#foreground').fadeOut(interval);
}
*/

const intervalInput = document.getElementById("interval");
const saveButton = document.getElementById("save_lincoln");
const zombieAbe = document.getElementById("foreground");

saveButton.addEventListener('click', function() {
  // how much to decrease opacity over length of time requested
  let milliseconds = parseInt(intervalInput.value);
  let startingValue = parseInt(zombieAbe.style.opacity);
  let decrementAmount = 1 / 100;
  console.log(decrementAmount);
  let fadeOut = setInterval(function() {
    if (startingValue <= 0) {
      clearInterval(fadeOut)
    }
    zombieAbe.style.opacity = startingValue;
    startingValue -= decrementAmount;
  }, milliseconds * decrementAmount);
});