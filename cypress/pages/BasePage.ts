

class BasePage {

    typeIntoField(selector:string, value:string):void {
        cy.xpath(selector).type(value);
    }
    chooseFromDropDownMenu(selector:string, picklistValue:string){
        cy.xpath(selector).type(picklistValue);
    }
}

export {BasePage};