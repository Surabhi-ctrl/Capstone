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
    
});
