import { browser } from '@wdio/globals'

class BasePage {

    get alertIframeSelector() {
        return $('#kampyleInvite');
    }

    get alertNoThanksButton() {
        return $('#kplDeclineButton');
    }

    get closeSignInPopup() {
        return $('//button[@aria-label="close"]');
    }

    async openTargetWebsite() {
        await browser.maximizeWindow();
        await browser.url('https://www.target.com/');
    }

    async handleSignInPopup() {

        await this.closeSignInPopup.waitForDisplayed({ timeout: 2000 });
        await this.closeSignInPopup.click();
    }

    async handleSurveyAlert() {
        const quickCheckTimeout = 500;

        if (this.alertDismissed) {
            return;
        }

        try {
            await this.alertIframeSelector.waitForExist({
                timeout: quickCheckTimeout,
                timeoutMsg: 'Quick check timeout.'
            });

            await browser.switchToFrame(await this.alertIframeSelector);
            await this.alertDeclineButton.waitForDisplayed({ timeout: 2000 });
            await this.alertDeclineButton.click();
            this.alertDismissed = true;

            console.log('--- Successfully dismissed the dynamic survey alert. ---');

        } catch (error) {
            if (!error.message.includes('Quick check timeout.')) {
                throw error;
            }
        } finally {
            await browser.switchToParentFrame();
        }
    }
}

export default new BasePage();
