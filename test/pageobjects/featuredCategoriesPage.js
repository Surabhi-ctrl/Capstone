import { $, expect } from '@wdio/globals'

class FeaturedCategoriesPage {

    get expectedCategoryNames() {
        return [
            'Women\'s', 'Men\'s', 'Kids\'', 'Baby', , 'Home', 'Shoes',
            'Furniture', 'Kitchen', 'Toys', 'Electronics', 'Beauty',
            'Grocery', 'Household Essentials', 'Top Deals', 'Clearance'
        ];
    }

    get featured_categories_Menu_Selector() {
        return $('[class="styles_ndsHeading__phw6r styles_fontSize1__OL7f3 styles_x2Margin__ZKMpf styles_heading__myXkA"]');
    }

    get shop_All_Menu_Selector() {
        return $('[href="/c/shop-all-categories/-/N-5xsxf"]');
    }

    get shop_All_Title_Selector() {
        return $('[data-test="page-title"]');
    }

    get featuredCategoriesContainer() {
        return $('ul[data-test="pictureNavigation-featured"]');
    }


    async getGridItems() {
        return this.featuredCategoriesContainer.$$('li');
    }


    async scrollToFeaturedCategories() {
        await this.featured_categories_Menu_Selector.scrollIntoView();
        await expect(this.featured_categories_Menu_Selector).toHaveText('Featured categories');
    }

    async openShopAllMenu() {
        await this.shop_All_Menu_Selector.click();
        await expect(this.shop_All_Title_Selector).toHaveText('Shop All Categories');
    }

    async checkFeaturedCategoriesList() {
        await this.scrollToFeaturedCategories();
        const gridItems = await this.getGridItems();
        await expect(gridItems).toHaveLength(15);
    }

    async verifyCategoryNames(expectedNames) {
        await this.scrollToFeaturedCategories();
        const gridItems = await this.getGridItems();

        const actualNames = [];
        for (const item of gridItems) {
            const nameElement = await item.$('span');
            actualNames.push(await nameElement.getText());
        }
        await expect(actualNames.sort()).toEqual(expectedNames.sort());
    }

    async verifyCategoryImages() {
        await this.scrollToFeaturedCategories();
        const gridItems = await this.getGridItems();

        for (let i = 0; i < gridItems.length; i++) {
            const item = gridItems[i];

            const imageElement = await item.$('img');
            await expect(imageElement).toBeDisplayed({ message: `Image for item #${i + 1} is not displayed.` });

            const imageSrc = await imageElement.getAttribute('src');
            await expect(imageSrc.length).toBeGreaterThan(0, { message: `Image for item #${i + 1} has an empty 'src' attribute.` });
        }
    }

}

export default new FeaturedCategoriesPage();
