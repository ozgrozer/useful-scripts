const fs = require('fs')
const potrace = require('potrace')

const convertFolderPath = 'converts'
const files = [
  'file 1',
  'file 2'
]

const convertFile = file => {
  return new Promise((resolve, reject) => {
    potrace.trace(file, (err, svg) => {
      if (err) reject(err)
      const splitFilePath = file.split('/')
      const filename = splitFilePath[splitFilePath.length - 1]
      const splitFilename = filename.split('.')
      splitFilename[splitFilename.length - 1] = 'svg'
      const newFilename = splitFilename.join('.')
      const outputPath = `${convertFolderPath}/${newFilename}`
      fs.writeFileSync(outputPath, svg)
      resolve(true)
    })
  })
}

if (!fs.existsSync(convertFolderPath)) {
  fs.mkdirSync(convertFolderPath)
}

let convertedFiles = 0
files.forEach(async file => {
  await convertFile(file)
  convertedFiles++
  console.log(`${convertedFiles}/${files.length} converted`)
})
