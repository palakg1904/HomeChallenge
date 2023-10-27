  // @ts-check
  const { test, expect } = require('@playwright/test');
  const { SearchPage } = require("./page-objects/SearchPage");

    
    test.beforeEach(async({page}) => {
      const searchPage = new SearchPage(page);
      await searchPage.navigate();
      while(page.url().includes('beta')){
        await searchPage.navigate();
        if (page.url().includes('beta')){
          continue;
        }
        else{
          break;
        }
      }
    });

    test.afterEach(async({context})=> {
      await context.close();
    });
    
    test("Verify search page is accessible", async({ page }) =>{
      const searchPage = new SearchPage(page);
      await searchPage.navigate();
      await searchPage.pageTitle();
    });

    test("Verify search and advance search criteria",async ({page}) =>{
      const searchPage = new SearchPage(page);
      await searchPage.enterTextToSearchField("Raasi");
      await searchPage.searchButton();
      await searchPage.validateSearchText("Raasi");
      await searchPage.validateAdvanceSearch("10/17/2023","10/19/2023", "October");
    });

    test("Validate error message when search criteria is not defined", async({ page }) =>{
      const searchPage = new SearchPage(page);
      await searchPage.searchButton();
      await searchPage.errorMessageValidation();
    });

    test("Validate Social Media and Websites Tab",async ({page})=>{
      const searchPage = new SearchPage(page);
      await searchPage.validateWebsitesTab();
      await  searchPage.validateSocialMediaTab();
    });
    



