describe('WebdriverIO methods', function(){
   describe('scrolling', async function() {
       beforeEach(async function(){
           await browser.url('https://bormando.github.io/pagescrolling/');
       });

       it('to top', async function(){
      const elem = $('button');
      const header = $('.navbar.top');
      await elem.scrollIntoView(false);
      await browser.execute((elem,header) =>{
      window.scrollTo(
          0,
          elem.arguments[0].offsetTop - header.arguments[1].offsetHeight
          )
      }, elem, header);
           await elem.click();
       });

       it('to bottom', async function(){
           const elem = $('button');
           const footer = await $('.navbar.bottom');
           await elem.scrollIntoView(false);
           await browser.execute((footer) =>{
               window.scrollBy(0,footer.offsetHeight)
           }, footer);
           await elem.click();

       });
   });
});
