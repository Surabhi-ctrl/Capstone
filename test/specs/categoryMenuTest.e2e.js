import categoriesPage from "../pageobjects/categories.page";
import basePage from '../pageobjects/base.page';


const menuOptions = [
    { name: 'New Arrivals', title: 'Target New Arrivals', explore: false },
    { name: 'Holiday Hosting & Entertaining', title: 'Holiday Hosting & Entertaining', explore: false },
    { name: 'Christmas', title: 'Christmas', explore: true },
    { name: 'Gift Ideas', title: 'Gift Ideas', explore: true },
    { name: 'Clothing, Shoes & Accessories', title: 'Clothing, Shoes & Accessories', explore: true },
    { name: 'Toys', title: 'Toys', explore: true },
    { name: 'Electronics', title: 'Electronics', explore: true },
    { name: 'Beauty', title: 'Beauty', explore: true },
    { name: 'Gift Cards', title: 'Gift Cards', explore: true },
    { name: 'Home', title: 'Home', explore: true },
    { name: 'Furniture', title: 'Furniture', explore: true },
    { name: 'Character Shop', title: 'Character Shop', explore: true },
    { name: 'Baby', title: 'Baby', explore: true },
    { name: 'Kitchen & Dining', title: 'Kitchen & Dining', explore: true },
    { name: 'Grocery', title: 'Grocery', explore: true },
    { name: 'Household Essentials', title: 'Household Essentials', explore: true },
    { name: 'School & Office Supplies', title: 'School & Office Supplies', explore: true },
    { name: 'Video Games', title: 'Video Games', explore: true },
    { name: 'Movies, Music & Books', title: 'Movies, Music & Books', explore: true },
    { name: 'Sports & Outdoors', title: 'Sports & Outdoors', explore: true },
    { name: 'Backpacks & Luggage', title: 'Luggage', explore: false },
    { name: 'Personal Care', title: 'Personal Care', explore: true },
    { name: 'Health', title: 'Health', explore: true },
    { name: 'Pets', title: 'Pets', explore: true },
    { name: 'Party Supplies', title: 'Party Supplies', explore: true },
    { name: 'Clearance', title: 'Clearance', explore: true },
    { name: 'Ulta Beauty at Target', title: 'Ulta Beauty at Target', explore: true },
    { name: 'Target Optical', title: 'Target Optical', explore: false },
];

before(async function () {
    await basePage.openTargetWebsite(); 
});

describe('Category Menu Navigation Tests', () => {
    menuOptions.forEach(option => {
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
