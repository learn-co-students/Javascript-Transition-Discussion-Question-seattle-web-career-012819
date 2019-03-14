// $('#save_lincoln').click(()=>saveLincoln(parseInt($('#interval').val())))


const button = document.getElementById('save_lincoln')
const foreground = document.getElementById('foreground')

button.addEventListener('click', function(){
  let input = document.getElementById('interval').value
  saveLincoln(input)
})

function saveLincoln(interval) {
  if(isNaN(interval) || interval == "") {
    interval = 1000
  }
  // $('#foreground').fadeOut(interval);
  foreground.style.transition = `opacity ${interval}ms, transform ${interval}ms`
  foreground.style.opacity = "0"
  foreground.style.transform = "scale(3) "
  document.getElementById('hidden-message').style.display = ""
}
