import { browser } from '@wdio/globals'
import categoriesPage from "../pageobjects/categories.page";
import basePage from '../pageobjects/base.page';


before(async function () {
    await basePage.open();
});

describe('open Categories', () => {
    it('should open categories dropdown menu successfully', async () => {
        await categoriesPage.openCategories();
    })

    it('should open New Arrivals page successfully', async () => {
        await categoriesPage.categoryMenu('3', 'Target New Arrivals');
    })

    it('should open Holiday page successfully', async () => {
        await categoriesPage.openCategories();
        await categoriesPage.categoryMenu('4', 'Holiday Hosting & Entertaining');
    })

    it('should open Christmas page successfully', async () => {
        await categoriesPage.openCategories();
        await categoriesPage.categoryMenuWithExplore('5', 'Christmas');
    })
    
    it('should open Christmas page successfully', async () => {
        await categoriesPage.openCategories();
        await categoriesPage.categoryMenuWithExplore('6', 'Gift Ideas');
    })

    it('should open UltaBeuty page successfully', async () => {
        await categoriesPage.openCategories();
        await categoriesPage.categoryMenuWithExplore('28', 'Ulta Beauty at Target');
    })

        it('should open UltaBeuty page successfully', async () => {
        await categoriesPage.openCategories();
        await categoriesPage.categoryMenu('29', 'Target Optical');
    })
});
