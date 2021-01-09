/*
  1. Go to your "Watch Later". (https://www.youtube.com/playlist?list=WL)
  2. Scroll down until the "Load more" button disappears.
  3. Copy the codes below and run in the console.
*/

const videos = document.querySelectorAll('#contents ytd-playlist-video-renderer.ytd-playlist-video-list-renderer')
const totalVideos = videos.length
const intervalSecond = 0.5
const totalSeconds = ((intervalSecond * 1000) * totalVideos) / 1000

if (window.confirm(`Remove ${totalVideos} videos in ${totalSeconds} seconds?`)) {
  for (let i = 0; i < totalVideos; i++) {
    setTimeout(j => {
      const video = videos[j]

      const openDropdownButton = video.querySelectorAll('.yt-icon-button')[0]
      openDropdownButton.click()

      const removeFromWatchLaterButton = document.querySelectorAll('ytd-menu-service-item-renderer.ytd-menu-popup-renderer')[2]
      removeFromWatchLaterButton.click()

      const left = totalVideos - j - 1
      console.log(`${left} left.`)

      if (left === 0) console.log('It\'s done.')
    }, (intervalSecond * 1000) * i, i)
  }
}
