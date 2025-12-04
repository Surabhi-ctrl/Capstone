import { browser } from '@wdio/globals'

class BasePage {

    async openTargetWebsite() {
        await browser.maximizeWindow();
        await browser.url('https://www.target.com/');
    }

}

export default new BasePage();
