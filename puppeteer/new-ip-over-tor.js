// install tor
// https://wildcardcorp.com/blogs/tor-torify-torsocks

const puppeteer = require('puppeteer')
const { spawn } = require('child_process')

const _spawnTor = spawn('tor')
const spawnTor = () => {
  return new Promise((resolve, reject) => {
    _spawnTor.stdout.on('data', data => {
      if (data.indexOf('100%') !== -1) {
        resolve(true)
      }
    })

    _spawnTor.stderr.on('data', data => {
      console.log(`stderr: ${data}`)
    })
  })
}

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

const run = async () => {
  try {
    console.log(time() + ' | 1. tor is spawning')
    await spawnTor()

    console.log(time() + ' | 2. browser is launching')
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--proxy-server=socks5://127.0.0.1:9050']
    })
    const page = await browser.newPage()

    console.log(time() + ' | 3. connecting to the address over tor')
    await page.goto('https://api.ipify.org', {
      waitUntil: 'networkidle2',
      timeout: 60000000
    })
    await page.setViewport({
      width: 1395,
      height: 780
    })

    const body = await page.evaluate(() => document.body.innerText)
    console.log(time() + ' | 4. page source: ' + body)

    console.log(time() + ' | 5. browser and tor is closing')
    await browser.close()
    _spawnTor.kill()
  } catch (err) {
    console.log(err)
  }
}

run()
