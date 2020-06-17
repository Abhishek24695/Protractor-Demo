describe("protractor Demo test",function()
{
    it('search test',function(){
        browser.ignoreSynchronization = true;
        browser.manage().window().maximize();
        browser.get('https://findadentist.ada.org/').then(function(){
            console.log("This is my first step");
            })
            element(by.xpath('//input[@title="Address or ZIP Code"]')).sendKeys('751024');
            element(by.xpath('//button[text()="Search"]')).click().then(function(){
                browser.sleep(2000);
            });

    })

    it('search test',function(){
        // browser.ignoreSynchronization = true;
        // browser.manage().window().maximize();
        // browser.get('https://findadentist.ada.org/').then(function(){
        //     console.log("This is my first step");
        //     })
            element(by.xpath('//a[text()="About"]')).click().then(function(){
            browser.sleep(2000);
            browser.getAllWindowHandles().then(function(handles){
                browser.switchTo().window(handles[1]);
                browser.sleep(2000);
                browser.close();
                browser.switchTo().window(handles[0]);
            })
            });

    })
    
})