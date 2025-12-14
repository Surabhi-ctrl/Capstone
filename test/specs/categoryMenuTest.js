import categoriesPage from "../pageobjects/categoriesPage";
import basePage from '../pageobjects/basePage';


before(async function () {
    await basePage.openTargetWebsite();
});

describe('Category Menu Navigation Tests', () => {
    categoriesPage.menuOptions.forEach(option => {
        it(`should navigate to the ${option.name} page successfully`, async () => {
            await categoriesPage.openCategories();
            await categoriesPage.selectCategoryAndAssertTitle(
                option.name,
                option.title,
                option.explore
            );
        });
    });

    it('should open categories dropdown menu successfully', async () => {
        await categoriesPage.selectCategoryAndAssertDropdown();
    });
});
