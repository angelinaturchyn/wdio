import LoginPage from '../pages/login.page';
import ProfilePage from "../pages/profile.page";
import ClientsPage from "../pages/clients.page";

const {userDetails} = require('../components/data')


    describe('Client', function(){
        before(async function(){
           await LoginPage.open();
           await LoginPage.login(process.env.LOGIN,process.env.PASSWORD);
           await ProfilePage.navbar.clients.click();
        })

        it('creation', async function(){
           await ClientsPage.createClient.click();
           await ClientsPage.clientCreation.firstName.setValue(userDetails.firstName)
            await ClientsPage.clientCreation.lastName.setValue(userDetails.lastName)
            await ClientsPage.clientCreation.email.setValue(userDetails.email)
            await ClientsPage.clientCreation.buttonSave.click()
            await browser.pause()
        });

        // it('deletion', async function(){
        //     await ClientsPage.deleteClient(email);
        //     await expect(ClientsPage.getItemByEmail(email)).not.toBeExisting()
        // })

    });




