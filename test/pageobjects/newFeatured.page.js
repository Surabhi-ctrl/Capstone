import { $, expect } from '@wdio/globals'

/**
 * sub page containing specific selectors and methods for a specific page
 */
class NewFeaturedPage {
    /**
     * define selectors using getter methods
     */
    get new_Featured_Selector() {
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
        return $('[data-tracking="Store Events"]');
    } 

    async openNewFeatured() {
        await this.new_Featured_Selector.click();
        await expect(this.new_Arrivals_Selector).toHaveText('Target New Arrivals');
        await expect(this.target_Finds_Selector).toHaveText('Target Finds');
        await expect(this.target_Style_Selector).toHaveText('#TargetStyle');
        await expect(this.hanukkah_Selector).toHaveText('Hanukkah');
        await expect(this.store_Events_Selector).toHaveText('Store Events');


}}

export default new NewFeaturedPage();
