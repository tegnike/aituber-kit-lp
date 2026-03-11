import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto('http://localhost:5180/', { waitUntil: 'networkidle' });
await page.waitForTimeout(2000);

// Full page screenshot
await page.screenshot({ path: '/tmp/lp-full.png', fullPage: true });

// Hero section
await page.screenshot({ path: '/tmp/lp-hero.png', clip: { x: 0, y: 0, width: 1440, height: 900 } });

// Scroll to use cases
await page.evaluate(() => window.scrollTo(0, 900));
await page.waitForTimeout(1000);
await page.screenshot({ path: '/tmp/lp-usecases.png' });

// Scroll more
await page.evaluate(() => window.scrollTo(0, 2000));
await page.waitForTimeout(1000);
await page.screenshot({ path: '/tmp/lp-middle.png' });

// Scroll more
await page.evaluate(() => window.scrollTo(0, 3500));
await page.waitForTimeout(1000);
await page.screenshot({ path: '/tmp/lp-specs.png' });

// Scroll to bottom
await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
await page.waitForTimeout(1000);
await page.screenshot({ path: '/tmp/lp-footer.png' });

// Mobile view
await page.setViewportSize({ width: 375, height: 812 });
await page.evaluate(() => window.scrollTo(0, 0));
await page.waitForTimeout(1000);
await page.screenshot({ path: '/tmp/lp-mobile-hero.png' });

await page.evaluate(() => window.scrollTo(0, 800));
await page.waitForTimeout(1000);
await page.screenshot({ path: '/tmp/lp-mobile-usecases.png' });

await browser.close();
console.log('Screenshots saved');
