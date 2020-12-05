const fs = require('fs')
const https = require('https')

const downloadFolderPath = 'downloads'
const urls = [
  'url 1',
  'url 2'
]

const downloadFile = url => {
  return new Promise((resolve, reject) => {
    const splitUrl = url.split('/')
    const filename = splitUrl[splitUrl.length - 1]
    const outputPath = `${downloadFolderPath}/${filename}`
    const file = fs.createWriteStream(outputPath)

    https.get(url, res => {
      if (res.statusCode === 200) {
        res.pipe(file).on('close', resolve)
      } else {
        reject(res.statusCode)
      }
    })
  })
}

if (!fs.existsSync(downloadFolderPath)) {
  fs.mkdirSync(downloadFolderPath)
}

let downloadedFiles = 0
urls.forEach(async url => {
  await downloadFile(url)
  downloadedFiles++
  console.log(`${downloadedFiles}/${urls.length} downloaded`)
})
