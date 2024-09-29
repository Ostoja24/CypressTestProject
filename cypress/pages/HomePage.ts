import { BasePage } from "./BasePage";

export class HomePage extends BasePage {
    private readonly addToCartItemButton: string = "//div[@class='features_items']//div[@class='productinfo text-center']//a[@data-product-id='<index>']";
    private readonly productNameOnProductCard: string ="//div[@class='features_items']//div[@class='productinfo text-center']//p[<index>]";
    private readonly productImageOnProductCard: string ="//div[@class='features_items']//div[@class='productinfo text-center']//img[<index>]";
    private readonly productCardList: string ="//div[@class='features_items']//div[@class='productinfo text-center']";
    private readonly productPrice:string = "//div[@class='features_items']//div[@class='productinfo text-center']//h2[<index>]"
    private readonly carouselButton:string = "//div[@class='fa fa-angle-<direction>']";
    private readonly popupMessage: string = "//div[@class='modal-content']//div[@class='modal-body']";
    private readonly popupViewCart: string = "//u";
    private readonly carouselPoint: string = "//ol[@class='carousel-indicators']//li[@data-slide-to='<index>']";
    private readonly productImage: string = "//div[@class='productinfo text-center']//p[text()='<productName>']/preceding-sibling::img";
    constructor(){
        super()
    }
    addtoCartItem (index: string){
        const addToCartItemButtonChosen = this.addToCartItemButton.replace("<index>", index)
        cy.xpath(addToCartItemButtonChosen).click()
    }
    verifyIfProductNameIsVisible(index:string, expectedTitle: string){
        const productNameOnProductCardChosen = this.productNameOnProductCard.replace("<index>", index);
        return cy.xpath(productNameOnProductCardChosen).should('have.text',expectedTitle);
    }
    verifyIfProductImageIsVisible(index:string){
        const productImageOnProductCardChosen = this.productImageOnProductCard.replace("<index>", index);
        return cy.xpath(productImageOnProductCardChosen).should('be.visible');
    }
    verifyIfAllProductsAreVisible(numberOfProducts:string){
        return cy.xpath(this.productCardList).should('have.length',numberOfProducts);
    }
    verifyIfProductPriceIsVisible(index: string, expectedPrice: string ){
        const productPriceChosen = this.productPrice.replace("<index>", index)
        return cy.xpath(productPriceChosen).should('be.visible').should("have.text",expectedPrice);
    }
    clickOnCarousel(direction:string){
        switch (direction){
            case "right": {
                const carouselButtonChosen: string = this.carouselButton.replace('<direction>',direction)
                cy.xpath(carouselButtonChosen).click();
            }
            case "left": {
                const carouselButtonChosen: string = this.carouselButton.replace('<direction>',direction)
                cy.xpath(carouselButtonChosen).click();
            }
            default: {
                console.log(new Error("Direction not specified, Please specify - 'right' or 'left'"))
            }
        }
    }
    verifyTheCarouselPartSet(index: string){
        const carouselPointChosen:string = this.carouselPoint.replace('<index>',index) 
        cy.xpath(carouselPointChosen).invoke('attr','class').should('eq','active')
        }
    
    visitHomePage(){
        this.visit("/");
    }
    verifyIfPopupIsVisible() {
        cy.xpath(this.popupMessage).should((text) => {
            const textTrim = text.text().trim();
            expect(textTrim).to.match(/Your product has been added to cart\./);
        });
    }
    clickOnViewCartOnPopup(){
        return cy.xpath(this.popupViewCart).click();
    }
    setTheCarouselPartSet(index: string){
        const carouselPointChosen: string = this.carouselPoint.replace('<index>',index) 
        cy.xpath(carouselPointChosen).click()
    }
    verifyIfImageIsVisibleInCard(nameOfProduct: string){
        const productImageChosen = this.productImage.replace('<productName>',nameOfProduct);
        cy.xpath(productImageChosen).should('be.visible');
    }
}