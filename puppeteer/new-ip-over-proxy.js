const puppeteer = require('puppeteer')
const https = require('https')

const time = () => {
  const today = new Date()
  const getHours = today.getHours().toString()
  const getMinutes = today.getMinutes().toString()
  const getSeconds = today.getSeconds().toString()
  const hours = getHours.length === 1 ? '0' + getHours : getHours
  const minutes = getMinutes.length === 1 ? '0' + getMinutes : getMinutes
  const seconds = getSeconds.length === 1 ? '0' + getSeconds : getSeconds
  const time = hours + ':' + minutes + ':' + seconds
  return time
}

const readUrl = (url) => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = ''

      res.on('data', (chunk) => {
        data += chunk
      })

      res.on('end', () => {
        resolve(data)
      })
    })
  })
}

const run = async () => {
  try {
    console.log(time() + ' | 1. finding a random proxy')
    const _readUrl = await readUrl('https://api.getproxylist.com/proxy')
    const jsonParse = JSON.parse(_readUrl)

    if (jsonParse.protocol) {
      const proxyAddress = `${jsonParse.protocol}://${jsonParse.ip}:${jsonParse.port}`
      console.log(time() + ' | 2. proxy found: ' + proxyAddress + ' (' + jsonParse.country + ') ')

      console.log(time() + ' | 3. browser is launching')
      const browser = await puppeteer.launch({
        headless: true,
        args: ['--proxy-server=' + proxyAddress]
      })
      const page = await browser.newPage()

      console.log(time() + ' | 4. connecting to the address over proxy')
      await page.goto('https://api.ipify.org', {
        waitUntil: 'networkidle2',
        timeout: 60000000
      })
      await page.setViewport({
        width: 1395,
        height: 780
      })

      const body = await page.evaluate(() => document.body.innerText)
      console.log(time() + ' | 5. page source: ' + body)

      console.log(time() + ' | 6. browser is closing')
      await browser.close()
    } else {
      console.log(time() + ' | 2. proxy couldn\'t find')
    }
  } catch (err) {
    console.log(err)
  }
}

run()
