import basePage from '../pageobjects/basePage';
import featuredCategoriesPage from '../pageobjects/featuredCategoriesPage';

before(async function () {
    await basePage.openTargetWebsite();
    await basePage.handleSignInPopup();
});

describe('Featured Categories Content and Usability Tests', () => {
    it('should able to see featured categories heading clearly', async () => {
        await featuredCategoriesPage.scrollToFeaturedCategories();
    })

    it('should able to see featured 15 categories to shop', async () => {
        await featuredCategoriesPage.checkFeaturedCategoriesList();
    })

    it('should verify all 15 Featured Category names are correct and present', async () => {
        await featuredCategoriesPage.verifyCategoryNames(featuredCategoriesPage.expectedCategoryNames);
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

