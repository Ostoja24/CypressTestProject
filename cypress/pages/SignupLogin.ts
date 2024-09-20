import { BasePage } from "./BasePage";


export class Register extends BasePage {
    readonly registerUrl: string = "Register.html";
    readonly firstName:string = "//input[@placeholder='First Name']";
    readonly lastName:string = "//input[@placeholder='Last Name']";
    readonly address:string = "//textarea[@ng-model='Adress']";
    readonly email:string = "//input[@type='email']";
    readonly phone: string = "//input[@type='tel']";
    readonly firstNameValue: string ="Tomasz";
    readonly lastNameValue:string = "Tester";
    readonly addressValue: string = "ul. Pocztowa 1, 00-000 Warszawa";
    readonly emailAddressValue: string = "test@example.com";
    readonly phoneValue: string = "123456789";
    chooseOption: string = "//input[@value='<option>']";
    readonly skillsElement: string ="//select[@id='Skills']";
    skillDropdownOptionElement: string = "//option[@value='<option>']";
    readonly selectCountryField: string = "//span[@class='select2 select2-container select2-container--default select2-container--below select2-container--focus']";
    readonly searchSelectCountry: string = "//input[@type='search']";
    readonly listOptionSelectCountry: string = "//li[@class='select2-results__option select2-results__option--highlighted']";
    selectDateField: string = "//select[@placeholder='<element>']";
    selectYearOption: string = "//option[@value='<option>']";
    passwordField: string = "//input[@ng-model='Password']";
    confirmationPasswordField: string = "//input[@ng-model='CPassword']";
    submitButton: string = "//button[@type='submit']";
    refreshButton: string = "//button[@value='Refresh']";

    constructor(){
        super()
    }

    typeIntoRegisterForm(selector: string , value: string ):void {
        this.typeIntoField(selector,value);
    }
    chooseFromDropDownMenu(selector: string, picklistValue: string):void{
        this.chooseFromDropDownMenu(selector,picklistValue);
    }
    chooseFromOptionButton(option: string){
        cy.xpath(this.chooseOption.replace("<option>",option)).click();
    }
    clickOnSkillsDropDownList(option: string){
        this.clickIntoElement(this.skillsElement);
        this.scrollOnList(this.skillDropdownOptionElement.replace("<option>",option));
    }
    clickOnSelectCountryDropDownList(option: string){
        this.clickIntoElement(this.selectCountryField);
        this.typeIntoField(this.searchSelectCountry,option);
        this.clickIntoElement(this.listOptionSelectCountry);
    }
    clickOnSelectDate(elementOfDate: string, option: string){
        let chosenElementOfDate: string = this.selectDateField.replace("<element>",elementOfDate);
        let chosenYear: string = this.selectYearOption.replace("<option>",option);
        this.clickIntoElement(chosenElementOfDate);
        this.scrollOnList(chosenYear);
        this.clickIntoElement(chosenYear);
    }
    inputPassword(password: string){
        this.typeIntoField(this.passwordField, password);
    }
    inputConfirmationPassword(password: string){
        this.typeIntoField(this.confirmationPasswordField, password);
    }
    clickOnSubmitButton(){
        this.clickIntoElement(this.submitButton);
    }
    clickOnRefreshButton(){
        this.clickIntoElement(this.refreshButton);
    }
    visitRegisterPage(){
        super.visit(this.registerUrl);
    }

}
export const register = new Register();