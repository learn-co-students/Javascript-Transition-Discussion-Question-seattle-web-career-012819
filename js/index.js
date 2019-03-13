// J query approach $('#save_lincoln').click(()=>saveLincoln(parseInt($('#interval').val())))
//
// function saveLincoln(interval) {
//   if(isNaN(interval)) {
//     interval = 10000
//   }
//   $('#foreground').fadeOut(interval);
// }

//  Simple approach
const intervalInput = document.getElementById('interval')
const saveButton = document.getElementById('save_lincoln')
const zombieAbe = document.getElementById('foreground')

saveButton.addEventListener('click', function(){
  const seconds = intervalInput.value / 1000
  zombieAbe.style.transition = `opacity ${seconds}s ease`;
  zombieAbe.style.opacity = 0;
});

// Long approach

// saveButton.addEventListener('click', function() {
//   let milliseconds = parseInt(intervalInput.value);
//   let startingValue = parseInt(zombieAbe.style.opacity);
//   let decrementAmount = 1 / 100;
//   console.log(decrementAmount);
//   let fadeOut = setInterval(function() {
//     if (startingValue <= 0) {
//       clearInterval(fadeOut)
//     }
//     zombieAbe.style.opacity = startingValue;
//     startingValue -= decrementAmount;
//   }, milliseconds * decrementAmount);
// });
