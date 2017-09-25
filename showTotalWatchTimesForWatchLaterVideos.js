/*
  1. Go to the "Watch Later" in order to learn total watch times. (https://www.youtube.com/playlist?list=WL&disable_polymer=true)
  2. Scroll down until the "Load more" button disappear.
  3. Copy the codes below and run in the console.
*/
var times = document.querySelectorAll('.pl-video-time .timestamp span')
var totalSeconds = 0
var date = new Date(null)
for (var i = 0; i < times.length; i++) {
  var split = times[i].innerHTML.split(':')
  var hours = 0
  var minutes = 0
  var seconds = 0
  if (split.length === 3) {
    hours = parseInt(split[0])
    minutes = parseInt(split[1])
    seconds = parseInt(split[2])
  } else {
    minutes = parseInt(split[0])
    seconds = parseInt(split[1])
  }
  totalSeconds += seconds + (minutes * 60) + (hours * 3600)
}
date.setSeconds(totalSeconds)
console.log(date.toISOString().substr(11, 8))
