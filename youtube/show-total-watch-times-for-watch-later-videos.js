/*
  1. Go to the "Watch Later". (https://www.youtube.com/playlist?list=WL)
  2. Scroll down until the "Load more" button disappear.
  3. Copy the codes below and run in the console.
*/

const times = document.querySelectorAll('#contents ytd-playlist-video-renderer.ytd-playlist-video-list-renderer span.ytd-thumbnail-overlay-time-status-renderer')
let totalSeconds = 0
const date = new Date(null)

for (let i = 0; i < times.length; i++) {
  const time = times[i]
  const split = time.innerHTML.split(':')
  let hours = 0
  let minutes = 0
  let seconds = 0

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
