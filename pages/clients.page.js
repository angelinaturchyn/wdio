import AppPage from "./app.page";
import ClientComponent from "../components/client.component";

class ClientsPage extends AppPage {
    clientCreation = ClientComponent;

    get createClient() { return $('//button[span[.="Create Client"]]') }

  async  deleteClient(email) {
        // await browser.execute((addr)=>{
        //     $x('//tr[.//a[.="${email}"]]//span[contains(@class, "ant-dropdown-trigger")]').click();
        // })
        // const options = $('//tr[.//a[.="${email}"]]//span[contains(@class, "ant-dropdown-trigger")]')
        // await options.waitForDisplayed();
        await browser.pause(3000);
        await options.click();
        const itemDelete = $('//span[@class="ant-dropdown-menu-title-content"][.="Delete"]');
        await itemDelete.click();
    }

    async getItemByEmail(email){
        return $('//tr[.//a[.="${email}"]]')
    }
}

export default new ClientsPage();