import newFeaturedPage from "../pageobjects/newFeatured.page";
import basePage from '../pageobjects/base.page';

const menuOptions = [
    // format: { description, trackingValue, expectedTitle }
    { desc: 'target new arrivals', tracking: 'Target New Arrivals ', title: 'Target New Arrivals' },
    { desc: 'target finds', tracking: 'Target Finds ', title: 'Finds' }, // Check the Find page selector for accurate title assertion
    { desc: 'target style', tracking: '#TargetStyle', title: '#TargetStyle' },
    { desc: 'Hanukkah', tracking: 'Hanukkah', title: 'Hanukkah' },
    { desc: 'store events', tracking: 'Store Events', title: 'Store Events' },
    { desc: 'asian owned brands', tracking: 'Asian-Owned Brands at Target', title: 'AAPI-Owned Brands at Target' },
    { desc: 'black owned brands', tracking: 'Black-Owned or Founded Brands at Target', title: 'Black-Owned page display check' }, // Use descriptive placeholder for display-only check
    { desc: 'latino owned brands', tracking: 'Latino-Owned Brands at Target', title: 'Latino-Owned Brands at Target' },
    { desc: 'women owned brands', tracking: 'Women-Owned Brands at Target', title: 'Women-Owned Brands at Target' },
    { desc: 'LGBTQIA page', tracking: 'LGBTQIA+ Shop', title: 'LGBTQIA+ Shop' },
];

before(async function () {
    await basePage.openTargetWebsite();
});

describe('New & Featured Menu Navigation', () => {

    it('should open and close New & Featured dropdown successfully', async () => {
        await newFeaturedPage.openNewFeaturedDropdown();
        await newFeaturedPage.newFeaturedHeader.click(); 
    });

    menuOptions.forEach(option => {
        
        it(`should navigate to the ${option.desc} page successfully`, async () => {
            
            await newFeaturedPage.openNewFeaturedDropdown(); 
            
            await newFeaturedPage.navigateAndAssertTitle(
                option.tracking,
                option.title
            );
        });
    });
});