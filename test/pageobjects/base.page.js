import { browser } from '@wdio/globals'

class BasePage {

    async open() {
        await browser.maximizeWindow();
        await browser.url('https://www.target.com/');
    }

}

export default new BasePage();
