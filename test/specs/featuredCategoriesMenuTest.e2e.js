import { browser } from '@wdio/globals'
import categoriesPage from "../pageobjects/categories.page";
import newFeaturedPage from "../pageobjects/newFeatured.page";
import basePage from '../pageobjects/base.page';
import featuredCategoriesPage from '../pageobjects/featuredCategories.page';


const expectedCategoryNames = [
    'New Arrivals', 'Christmas', 'Hanukkah', 'Gift Ideas', 'Toys', 'Electronics',
    'Women’s', 'Men’s', 'Kids’', 'Baby', 'Home', 'Kitchen & Dining',
    'Apple', 'Beauty', 'Health', 'Grocery', 'Household Essentials', 'Clearance'
];

before(async function () {
    await basePage.open();
});

describe('Featured Categories Content and Usability Tests', () => {
    it('should able to see featured categories heading clearly', async () => {
        await featuredCategoriesPage.scrollToFeaturedCategories();
    })

    it('should able to see featured 18 categories to shop', async () => {
        await featuredCategoriesPage.checkFeaturedCategoriesList();
    })

    it('should verify all 18 Featured Category names are correct and present', async () => {
        await featuredCategoriesPage.verifyCategoryNames(expectedCategoryNames);
    });

    it('should verify all Featured Category icons are loaded and displayed', async () => {
        await featuredCategoriesPage.verifyCategoryImages();
    });
});


describe('open Shop All Menu', () => {
    it('should able to open shop all page successfully', async () => {
        await featuredCategoriesPage.openShopAllMenu();
    })
});

