import { browser } from '@wdio/globals'
import categoriesPage from "../pageobjects/categories.page";
import newFeaturedPage from "../pageobjects/newFeatured.page";

import basePage from '../pageobjects/base.page';


before(async function () {
    await basePage.open();
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



});
