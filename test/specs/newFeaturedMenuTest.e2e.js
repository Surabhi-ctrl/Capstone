import newFeaturedPage from "../pageobjects/newFeatured.page";

import basePage from '../pageobjects/base.page';


before(async function () {
    await basePage.openTargetWebsite();
});

describe('open New & Featured', () => {
    it('should open new & Featured dropdown menu successfully', async () => {
        await newFeaturedPage.openNewFeatured();
    })
    
    it('should open target new arrivals page successfully', async () => {
        await newFeaturedPage.openTargetNewArrivals();
    })

    it('should open target finds page successfully', async () => {
        await newFeaturedPage.openNewFeatured();
        await newFeaturedPage.openTargetFinds();
    })  

    it('should open target style page successfully', async () => {
        await newFeaturedPage.openNewFeatured();
        await newFeaturedPage.openTargetstyle();
    })  

    it('should open Hanukkah page successfully', async () => {
        await newFeaturedPage.openNewFeatured();
        await newFeaturedPage.openHanukkah();
    }) 

    it('should open store events page successfully', async () => {
        await newFeaturedPage.openNewFeatured();
        await newFeaturedPage.openStoreEvents();
    }) 

    it('should open asian owned brands page successfully', async () => {
        await newFeaturedPage.openNewFeatured();
        await newFeaturedPage.openAsianOwnedBrands();
    }) 

    it('should open black owned brands page successfully', async () => {
        await newFeaturedPage.openNewFeatured();
        await newFeaturedPage.openBlackOwnedBrands();
    }) 

    it('should open latino owned brands page successfully', async () => {
        await newFeaturedPage.openNewFeatured();
        await newFeaturedPage.openLatinoOwnedBrands();
    }) 

    it('should open women owned brands page successfully', async () => {
        await newFeaturedPage.openNewFeatured();
        await newFeaturedPage.openWomenOwnedBrands();
    }) 

     it('should open LGBTQIA page successfully', async () => {
        await newFeaturedPage.openNewFeatured();
        await newFeaturedPage.openLgbtqiaPage();
    }) 

    it('should open New & Featured dropdown menu successfully', async () => {
        await newFeaturedPage.selectCategoryAndAssertDropdown();
    });
});
