import { $, expect } from '@wdio/globals'

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CategoriesPage {
    /**
     * define selectors using getter methods
     */
    get categoriesHeaderSelector() {
        return $('[aria-label="Categories"]');
    }

    get all_categories_title_Selector() {
        return $('[class="styles_textSpan__9GiHt"]');
    }

    get exploreAll() {
        return $('//a[text()="Explore all"]');
    }

    get target_new_arrivals_Selector() {
        return $('[class="sc-ee6898d4-0 ihqHAP"]');
    }

    async openCategories() {
        await this.categoriesHeaderSelector.click();
        await expect(this.all_categories_title_Selector).toHaveText('All Categories');
    }

    async categoryMenu(categoryMenuNumber,expectedPageTitle) {
        await $(`[data-test="@web/CategoryMenu"] > div > a:nth-child(${categoryMenuNumber})`).click();
        await expect(this.target_new_arrivals_Selector).toHaveText(expectedPageTitle);
    }

        async categoryMenuWithExplore(categoryMenuNumber,expectedPageTitle) {
        await $(`[data-test="@web/CategoryMenu"] > div > a:nth-child(${categoryMenuNumber})`).click();
        await this.exploreAll.click();
        await expect(this.target_new_arrivals_Selector).toHaveText(expectedPageTitle);
    }
}

export default new CategoriesPage();
