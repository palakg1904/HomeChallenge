    const { test, expect } = require("@playwright/test");

    exports.SearchPage = class SearchPage {
        constructor(page) {
            this.page = page;
            this.searchBtn = page.locator("button.btn-success");
            this.errorMessage = page.locator("div#toast-container");
            this.searchTxtField = page.locator("input#Value_1");
            this.highlightedText = page.locator("span.highlightedText");
            this.advanceSearch = page.locator(".advanced-search-link");
            this.fromDate = page.locator("//input[@placeholder='From']");
            this.toDate = page.locator("//input[@placeholder='To']");
            this.dateData= page.locator(".date-data");
            this.websitesTab = page.locator("//a[text()='Websites']");
            this.socialMediaTab = page.locator("//a[text()='Social Media']");
            this.globeSymbol = page.locator(".fa-globe");
            this.facebookSymbol = page.locator(".fa-facebook-square");
        }

    async navigate() {
        await this.page.goto("https://social.pagefreezer.com/openrecords/automation");
    }

    async pageTitle() {
        await expect(this.page).toHaveTitle("Social Accounts");
    }

    async searchButton(){
        this.searchBtn.waitFor();
        await this.searchBtn.click();
    }

    async errorMessageValidation(){
    await expect(this.errorMessage).toContainText("Please define a search criteria");
    }

    async enterTextToSearchField(text){
        this.searchTxtField.waitFor();
        await this.searchTxtField.fill(text);
    
    }

    async validateSearchText(text){
        await this.page.waitForLoadState('networkidle');
        const searchTextCount =  this.highlightedText.count();
        for(let index=0;index<searchTextCount;index++){
            await expect(highlightedText.nth(index)).toContainText(text);
        }
    
    }
    async validateAdvanceSearch(FromDate, ToDate, dateText){
        await this.advanceSearch.click(); 
        await this.fromDate.fill(FromDate);
        await this.toDate.fill(ToDate);
        await this.searchBtn.click();
        await this.page.waitForLoadState('networkidle');
        const dateTextCount =  this.dateData.count();
        for(let index=0;index<dateTextCount;index++){
            await expect(dateData.nth(index)).toContainText(dateText);
        }

    }

    async validateWebsitesTab(){
        await this.websitesTab.click();
        await this.page.waitForLoadState('networkidle');
        await expect(this.globeSymbol.last()).toBeVisible();
    }

    async validateSocialMediaTab(){
        await this.socialMediaTab.click();
        await this.page.waitForLoadState('networkidle');
        await expect(this.facebookSymbol.last()).toBeVisible();
    }

    };