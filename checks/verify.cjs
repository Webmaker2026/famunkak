const {chromium}=require('C:/Users/lakas/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
(async()=>{
const browser=await chromium.launch({executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',headless:true});
const errors=[];const results=[];
for(const width of [375,430,768,1024,1440,1920]){
const page=await browser.newPage({viewport:{width,height:width<500?844:1000},deviceScaleFactor:1});
page.on('pageerror',e=>errors.push(e.message));page.on('console',m=>{if(m.type()==='error')errors.push(m.text())});
await page.goto('http://127.0.0.1:4173');await page.waitForTimeout(1200);
for(let y=0;y<await page.evaluate(()=>document.body.scrollHeight);y+=650){await page.evaluate(y=>window.scrollTo(0,y),y);await page.waitForTimeout(90)}
await page.waitForTimeout(1000);
const check=await page.evaluate(()=>({width:innerWidth,scrollWidth:document.documentElement.scrollWidth,h1:document.querySelectorAll('h1').length,images:[...document.images].map(i=>({src:i.getAttribute('src'),loaded:i.complete&&i.naturalWidth>0})),badLinks:[...document.querySelectorAll('a[href^="#"]')].filter(a=>a.hash&&!document.querySelector(a.hash)).map(a=>a.hash),overflow:[...document.querySelectorAll('body *')].filter(e=>{const r=e.getBoundingClientRect();return r.width&& (r.right>innerWidth+1||r.left < -1)}).map(e=>e.className)}));
if(width===375){await page.evaluate(()=>window.scrollTo(0,0));await page.locator('.menu-toggle').click();check.menuOpen=await page.locator('dialog').evaluate(d=>d.open);await page.keyboard.press('Escape');check.menuEscape=await page.locator('dialog').evaluate(d=>!d.open);await page.locator('.menu-toggle').click();await page.locator('dialog a[href="#munkaink"]').click();check.menuLink=await page.locator('dialog').evaluate(d=>!d.open);}
await page.evaluate(()=>window.scrollTo(0,0));await page.waitForTimeout(900);
await page.screenshot({path:`checks/page-${width}.png`,fullPage:true});results.push(check);await page.close();}
const reduced=await browser.newPage({reducedMotion:'reduce'});await reduced.goto('http://127.0.0.1:4173');results.push({reducedMotion:await reduced.locator('.hero-image').evaluate(e=>getComputedStyle(e).animationName)});
require('fs').writeFileSync('checks/results.json',JSON.stringify({results,errors},null,2));console.log(JSON.stringify({results,errors},null,2));await browser.close();})();
