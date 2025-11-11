import { $, expect } from '@wdio/globals'

/**
 * sub page containing specific selectors and methods for a specific page
 */
class FeaturedCategoriesPage {
    /**
     * define selectors using getter methods
     */
    get featured_categories_Menu_Selector() {
        return $('[class="styles_ndsHeading__phw6r styles_fontSize1__OL7f3 styles_x2Margin__ZKMpf styles_heading__myXkA"]');
    }
    
    get shop_All_Menu_Selector() {
        return $('[href="/c/shop-all-categories/-/N-5xsxf?tag=ShopAll_CN"]');
    }
   
    get shop_All_Title_Selector() {
        return $('[data-test="page-title"]');
    }
    

    async scrollToFeaturedCategories() {
        await this.featured_categories_Menu_Selector.scrollIntoView();
        await expect(this.featured_categories_Menu_Selector).toHaveText('Featured categories');
    }

    async openShopAllMenu() {
        await this.shop_All_Menu_Selector.click();
        await expect(this.shop_All_Title_Selector).toHaveText('Shop All Categories');
    }

}

export default new FeaturedCategoriesPage();
