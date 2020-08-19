import { toMatchImageSnapshot } from 'jest-image-snapshot'
import puppeteer from 'puppeteer'

expect.extend({ toMatchImageSnapshot })

describe('jest-image-snapshot usage with an image received from puppeteer', () => {
  let browser
  let page

  beforeAll(async () => {
    browser = await puppeteer.launch({
      args: ['--no-sandbox', '--no-zygote', '--single-process'],
    })
    page = await browser.newPage()

    await page.goto('http://localhost:3000')
  })

  it('works', async () => {
    const image = await page.screenshot()
    expect(image).toMatchImageSnapshot()
  })

  afterAll(async () => {
    await browser.close()
  })
})
