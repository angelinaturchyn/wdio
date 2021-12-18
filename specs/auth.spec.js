import LoginPage from '../pages/login.page';
import  ProfilePage from '../pages/profile.page'

describe('Auth',function(){
    beforeEach(async function(){
        await LoginPage.open();
    })
    it('Successful log in', async function () {
        await LoginPage.open();
        await expect (LoginPage.buttonSubmit)
            .toBeDisabled();
        await LoginPage.login('samsmith@gmail.com','Aa123123');
        await expect (ProfilePage.iconUser)
            .toBeDisplayed();
       // await browser.pause('3000');
        //samsmith@gmail.com
        //Aa123123
    });
});