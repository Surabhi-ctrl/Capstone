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

    get pageHeaderTitle() {
        return $('[class="sc-ee6898d4-0 ihqHAP"]');
    }

    async openCategories() {
        await this.categoriesHeaderSelector.click();
        await expect(this.all_categories_title_Selector).toHaveText('All Categories');
    }

    async selectCategoryAndAssertDropdown() {
        await expect(this.categoriesHeaderSelector).toHaveAttribute('aria-expanded','false');
        await this.categoriesHeaderSelector.click();
        await expect(this.categoriesHeaderSelector).toHaveAttribute('aria-expanded','true');
    }

    async selectCategoryAndAssertTitle(categoryMenuName, expectedPageTitle, requiresExplore = false) {
        const categoryLink = await $(`//div[@data-test="@web/CategoryMenu"]//a/div/span[text()='${categoryMenuName}']`);
        
        await expect(categoryLink).toBeExisting({message: `Category menu item "${categoryMenuName}" was not found.`});
        await categoryLink.click();
        
        if (requiresExplore) {
            await this.exploreAll.click();
        }
        await expect(this.pageHeaderTitle).toBeDisplayed();
        await expect(this.pageHeaderTitle).toHaveText(expectedPageTitle);
    }
}

export default new CategoriesPage();
