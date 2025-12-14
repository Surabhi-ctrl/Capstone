import newFeaturedPage from "../pageobjects/newFeaturedPage";
import basePage from '../pageobjects/basePage';

before(async function () {
    await basePage.openTargetWebsite();
});

describe('New & Featured Menu Navigation', () => {

    it('should open and close New & Featured dropdown successfully', async () => {
        await newFeaturedPage.openNewFeaturedDropdown();
        await newFeaturedPage.newFeaturedHeader.click();
    });

    newFeaturedPage.menuOptions.forEach(option => {

        it(`should navigate to the ${option.desc} page successfully`, async () => {

            await newFeaturedPage.openNewFeaturedDropdown();

            await newFeaturedPage.navigateAndAssertTitle(
                option.tracking,
                option.title
            );
        });
    });
});