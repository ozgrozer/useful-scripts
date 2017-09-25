/*
  1. Go to the "Videos" section which you want to add all videos of a channel to your "Watch Later" list. (https://www.youtube.com/user/GoProCamera/videos?sort=da&disable_polymer=true)
  2. Scroll down until the "Load more" button disappear.
  3. Copy the codes below and run in the console.
*/
var buttons = document.querySelectorAll('.addto-watch-later-button')
var buttonsLength = buttons.length
var interval = 250
var totalSeconds = (interval * buttonsLength) / 1000
if (window.confirm('Add ' + buttonsLength + ' videos in ' + totalSeconds + ' seconds?')) {
  for (var i = 0; i < buttonsLength; i++) {
    setTimeout(function (j) {
      var left = buttonsLength - j - 1
      buttons[j].click()
      console.log(left + ' left.')
      if (left === 0) console.log('Done.')
    }, interval * i, i)
  }
}
