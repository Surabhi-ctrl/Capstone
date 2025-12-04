import { $, expect } from '@wdio/globals'

/**
 * sub page containing specific selectors and methods for a specific page
 */
class NewFeaturedPage {
    /**
     * define selectors using getter methods
     */
    get 
    new_Featured_Selector() {
        return $('[aria-label="New & featured"]');
    }
    
    get new_Arrivals_Selector() {
        return $('[data-tracking="Target New Arrivals "]');
    } 
    
    get target_Finds_Selector() {
        return $('[data-tracking="Target Finds "]');
    } 

    get target_Style_Selector() {
        return $('[data-tracking="#TargetStyle"]');
    } 

    get hanukkah_Selector() {
        return $('[data-tracking="Hanukkah"]');
    } 

    get store_Events_Selector() {
        return $('[data-test="/c/store-events/-/N-9x2nj?lnk=C_StoreEvents_WEB-435646_4"]');
    } 

    get finds_Selector() {
        return $('[class="styles_lastItem__ZlfLW"]');
    } 

    get style_Selector() {
        return $('[href="/finds/targetstyle"]');
    } 

    get hanukkahPage_Selector() {
        return $('[aria-current="page"]');
    } 

    get storeEventsPage_Selector() {
        return $('[aria-current="page"]');
    } 
    
    get asian_Owned_Selector() {
        return $('[data-tracking="Asian-Owned Brands at Target"]');
    }

    get asianOwned_page_Selector() {
        return $('[data-test="page-title"]');
    }

    get black_owned_Selector() {
        return $('[data-tracking="Black-Owned or Founded Brands at Target"]');
    }

    get blackOwned_page_Selector() {
        return $('[class="sc-448837bd-1 FcEMs storycard--text"]');
    }

    get latino_owned_Selector() {
        return $('[data-tracking="Latino-Owned Brands at Target"]');
    }

    get latinoOwned_page_Selector() {
        return $('[data-test="page-title"]');
    }

    get women_owned_Selector() {
        return $('[data-tracking="Women-Owned Brands at Target"]');
    }

    get womenOwned_page_Selector() {
        return $('[data-test="page-title"]');
    }

    get lgbtqia_Selector() {
        return $('[data-tracking="LGBTQIA+ Shop"]');
    }

    get lgbtqia_page_Selector() {
        return $('[data-test="page-title"]');
    }

    async selectCategoryAndAssertDropdown() {
        await expect(this.new_Featured_Selector).toHaveAttribute('aria-expanded','false');
        await this.new_Featured_Selector.click();
        await expect(this.new_Featured_Selector).toHaveAttribute('aria-expanded','true');
    }

    async openNewFeatured() {
        await this.new_Featured_Selector.click();
        await expect(this.new_Arrivals_Selector).toHaveText('Target New Arrivals');
        await expect(this.target_Finds_Selector).toHaveText('Target Finds');
        await expect(this.target_Style_Selector).toHaveText('#TargetStyle');
        await expect(this.hanukkah_Selector).toHaveText('Hanukkah');
        await expect(this.store_Events_Selector).toHaveText('Store Events');
    }

    async openTargetNewArrivals() {
        await this.new_Arrivals_Selector.click();
        await expect(this.storeEventsPage_Selector).toHaveText('Target New Arrivals');
    }

    async openTargetFinds() {
        await this.target_Finds_Selector.click();
        await expect(this.finds_Selector).toHaveText('Finds');
    }

    async openTargetstyle() {
        await this.target_Style_Selector.click();
        await expect(this.style_Selector).toHaveText('#TargetStyle');
    }


    async openHanukkah() {
        await this.hanukkah_Selector.click();
        await expect(this.hanukkahPage_Selector).toHaveText('Hanukkah');
    }

    
    async openStoreEvents() {
        await this.store_Events_Selector.click();
        await expect(this.storeEventsPage_Selector).toHaveText('Store Events');
    }

    async openAsianOwnedBrands() {
        await this.asian_Owned_Selector.click();
        await expect(this.asianOwned_page_Selector).toHaveText('AAPI-Owned Brands at Target');
    }


    async openBlackOwnedBrands() {
        await this.black_owned_Selector.click();
        await expect(this.blackOwned_page_Selector).toBeDisplayed();
    }


    async openLatinoOwnedBrands() {
        await this.latino_owned_Selector.click();
        await expect(this.latinoOwned_page_Selector).toHaveText('Latino-Owned Brands at Target');
    }

    async openWomenOwnedBrands() {
        await this.women_owned_Selector.click();
        await expect(this.womenOwned_page_Selector).toHaveText('Women-Owned Brands at Target');
    }

    async openLgbtqiaPage() {
        await this.lgbtqia_Selector.click();
        await expect(this.lgbtqia_page_Selector).toHaveText('LGBTQIA+ Shop');
    }
    
}

export default new NewFeaturedPage();
