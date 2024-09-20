export class BasePage {


    protected typeIntoField(selector:string, value:string) {
        cy.xpath(selector).type(value);
    }
    protected chooseFromDropDownMenu(selector:string, picklistValue:string){
        cy.xpath(selector).type(picklistValue);
    }
    protected clickIntoElement(selector: string){
        cy.xpath(selector).click;
    }
    visit(path: string){
        const baseUrl = Cypress.env('baseUrl');
        cy.visit(`${baseUrl}/${path}`);
    }
    protected scrollOnList(selector:string){
        cy.xpath(selector).scrollIntoView();
    }
}

/* PAGES - >
 Strona do testow automatycznych: https://automationexercise.com/ ;
Strony do automatyzacji: Signup/Login, Cart, Products
TC1: Wejdź w produkt, dodaj do koszyka i zamów
TC2: Test logowania
TC3: Szybko dodaj do koszyka produkt i go zamów
*/


