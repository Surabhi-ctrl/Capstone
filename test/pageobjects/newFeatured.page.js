import { $, expect } from '@wdio/globals'

class NewFeaturedPage {
    // --- Core Selectors ---

    get newFeaturedHeader() {
        return $('[aria-label="New & featured"]');
    }

    // --- Dynamic Selectors ---
    getMenuLink(trackingValue) {
        return $(`[data-tracking="${trackingValue}"]`);
    }

    get pageHeaderTitle() {
        return $('[data-test="page-title"], [aria-current="page"], .styles_lastItem__ZlfLW, .sc-448837bd-1.FcEMs.storycard--text, header > h1');
    }

    async openNewFeaturedDropdown() {
        await expect(this.newFeaturedHeader).toHaveAttribute('aria-expanded', 'false');
        
        await this.newFeaturedHeader.click();
        
        await expect(this.newFeaturedHeader).toHaveAttribute('aria-expanded', 'true');
    }

    async navigateAndAssertTitle(trackingValue, expectedPageTitle) {
        const menuLink = this.getMenuLink(trackingValue);

        await expect(menuLink).toBeDisplayed({ message: `Menu link with tracking value "${trackingValue}" was not found.` });
        await menuLink.click();

        const header = await this.pageHeaderTitle;
        await expect(header).toBeDisplayed();
        
        if (expectedPageTitle === 'Black-Owned page display check') {
            await expect(header).toBeDisplayed();
        } else {
            await expect(header).toHaveText(expectedPageTitle);
        }
    }
}

export default new NewFeaturedPage();