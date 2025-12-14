import { $, expect } from '@wdio/globals'

class NewFeaturedPage {

    get menuOptions() {
        return [
            { desc: 'target new arrivals', tracking: 'Target New Arrivals ', title: 'Target New Arrivals' },
            { desc: 'target finds', tracking: 'Target Finds ', title: 'Finds' },
            { desc: 'target style', tracking: '#TargetStyle', title: '#TargetStyle' },
            { desc: 'Hanukkah', tracking: 'Hanukkah', title: 'Hanukkah' },
            { desc: 'store events', tracking: 'Store Events', title: 'Store Events' },
            { desc: 'asian owned brands', tracking: 'Asian-Owned Brands at Target', title: 'AAPI-Owned Brands at Target' },
            { desc: 'black owned brands', tracking: 'Black-Owned or Founded Brands at Target', title: 'Black-Owned page display check' },
            { desc: 'latino owned brands', tracking: 'Latino-Owned Brands at Target', title: 'Latino-Owned Brands at Target' },
            { desc: 'women owned brands', tracking: 'Women-Owned Brands at Target', title: 'Women-Owned Brands at Target' },
            { desc: 'LGBTQIA page', tracking: 'LGBTQIA+ Shop', title: 'LGBTQIA+ Shop' },
        ];
    }


    get newFeaturedHeader() {
        return $('[aria-label="New & featured"]');
    }

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

        await expect(menuLink).toBeDisplayed();
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