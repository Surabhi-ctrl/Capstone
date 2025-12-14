import { $, expect } from '@wdio/globals'

class CategoriesPage {


    get menuOptions() {
        return [
            { name: 'New Arrivals', title: 'Target New Arrivals', explore: false },
            { name: 'Holiday Hosting & Entertaining', title: 'Holiday Hosting & Entertaining', explore: false },
            { name: 'Christmas', title: 'Christmas', explore: true },
            { name: 'Gift Ideas', title: 'Gift Ideas', explore: true },
            { name: 'Clothing, Shoes & Accessories', title: 'Clothing, Shoes & Accessories', explore: true },
            { name: 'Toys', title: 'Toys', explore: true },
            { name: 'Electronics', title: 'Electronics', explore: true },
            { name: 'Beauty', title: 'Beauty', explore: true },
            { name: 'Gift Cards', title: 'Gift Cards', explore: true },
            { name: 'Home', title: 'Home', explore: true },
            { name: 'Furniture', title: 'Furniture', explore: true },
            { name: 'Character Shop', title: 'Character Shop', explore: true },
            { name: 'Baby', title: 'Baby', explore: true },
            { name: 'Kitchen & Dining', title: 'Kitchen & Dining', explore: true },
            { name: 'Grocery', title: 'Grocery', explore: true },
            { name: 'Household Essentials', title: 'Household Essentials', explore: true },
            { name: 'School & Office Supplies', title: 'School & Office Supplies', explore: true },
            { name: 'Video Games', title: 'Video Games', explore: true },
            { name: 'Movies, Music & Books', title: 'Movies, Music & Books', explore: true },
            { name: 'Sports & Outdoors', title: 'Sports & Outdoors', explore: true },
            { name: 'Backpacks & Luggage', title: 'Luggage', explore: false },
            { name: 'Personal Care', title: 'Personal Care', explore: true },
            { name: 'Health', title: 'Health', explore: true },
            { name: 'Pets', title: 'Pets', explore: true },
            { name: 'Party Supplies', title: 'Party Supplies', explore: true },
            { name: 'Clearance', title: 'Clearance', explore: true },
            { name: 'Ulta Beauty at Target', title: 'Ulta Beauty at Target', explore: true },
            { name: 'Target Optical', title: 'Target Optical', explore: false },
        ];
    }

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
        await expect(this.categoriesHeaderSelector).toHaveAttribute('aria-expanded', 'false');
        await this.categoriesHeaderSelector.click();
        await expect(this.categoriesHeaderSelector).toHaveAttribute('aria-expanded', 'true');
    }

    async selectCategoryAndAssertTitle(categoryMenuName, expectedPageTitle, requiresExplore = false) {
        const categoryLink = await $(`//div[@data-test="@web/CategoryMenu"]//a/div/span[text()='${categoryMenuName}']`);

        await expect(categoryLink).toBeExisting({ message: `Category menu item "${categoryMenuName}" was not found.` });
        await categoryLink.click();

        if (requiresExplore) {
            await this.exploreAll.click();
        }
        await expect(this.pageHeaderTitle).toBeDisplayed();
        await expect(this.pageHeaderTitle).toHaveText(expectedPageTitle);
    }
}

export default new CategoriesPage();
