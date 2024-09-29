import { BasePage } from "./BasePage";

export class CartPage extends BasePage{
    private readonly itemImage: string = "//td//img[index]";
    private readonly itemPrice: string = "//td[@class='cart_price'][index]";
    private readonly itemQuantity: string = "//td[@class='cart_quantity']//button[index]";
    private readonly itemTotal: string = "//td[@class='cart_total']//p[index]";
    constructor(){
        super()
    }

    verifyIfItemImageIsVisible(index:string){
        const itemImageChosen = this.itemImage.replace('index',index)
        cy.xpath(itemImageChosen).should('be.visible');
    }
    verifyIfDescriptionIsVisible(productName: string, categoryName: string){
        this.chooseDescriptionPart('1')?.should('have.text',productName);
        this.chooseDescriptionPart('2')?.should('have.text',categoryName);
    }
    chooseDescriptionPart(descriptionPart: string){
        switch (descriptionPart) {
            case '1':
            return cy.xpath("//td[@class='cart_description']//h4//a");
            case '2':
            return cy.xpath("//td[@class='cart_description']//p");
        }
    }
    verifyItemPrice(index:string, expectedPrice: string){
        const itemPriceChosen = this.itemPrice.replace('index',index);
        cy.xpath(itemPriceChosen).should((text) => {
            const textTrim = text.text().trim();
            expect(textTrim).to.match(new RegExp(`Rs\\.\\s?${expectedPrice}`));
        })
    }
    
    verifyItemQuantity(index:string, expectedQuantity: string){
        const itemQuantityChosen = this.itemQuantity.replace('index',index);
        cy.xpath(itemQuantityChosen).should('have.text',expectedQuantity);
        }
    verifyItemTotal(index:string, expectedTotal: string){
        const itemTotalChosen = this.itemTotal.replace('index',index);
        cy.xpath(itemTotalChosen).should('have.text','Rs. '+ expectedTotal);
        }
}