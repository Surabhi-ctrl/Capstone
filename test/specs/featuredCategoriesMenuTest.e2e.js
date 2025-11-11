import { browser } from '@wdio/globals'
import categoriesPage from "../pageobjects/categories.page";
import newFeaturedPage from "../pageobjects/newFeatured.page";
import basePage from '../pageobjects/base.page';
import featuredCategoriesPage from '../pageobjects/featuredCategories.page';


before(async function () {
    await basePage.open();
});

describe('verify if Featured Categories heading is visible', () => {
    it('should able to see featured categories heading clearly', async () => {
        await featuredCategoriesPage.scrollToFeaturedCategories();
    })
});

describe('open Shop All Menu', () => {
    it('should able to open shop all page successfully', async () => {
        await featuredCategoriesPage.openShopAllMenu();
    })
});