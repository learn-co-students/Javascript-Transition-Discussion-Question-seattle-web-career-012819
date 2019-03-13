// $('#save_lincoln').click(()=>saveLincoln(parseInt($('#interval').val())))
//
// function saveLincoln(interval) {
//   if(isNaN(interval)) {
//     interval = 10000
//   }
//   $('#foreground').fadeOut(interval);
// }

const intervalInput = document.getElementById('interval')
const saveButton = document.getElementById('save_lincoln')
const zombieAbe = document.getElementById('foreground')

saveButton.addEventListener('click', function(){
  const seconds = intervalInput.value / 1000
  zombieAbe.style.transition = `opacity ${seconds}s ease`;
  zombieAbe.style.opacity = 0;
});

// See Allans repo for the full maths and javascript approach.
//
