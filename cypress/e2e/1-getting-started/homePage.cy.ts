import { HomePage } from "../../pages/HomePage";
import { CartPage } from "../../pages/CartPage";
/* PAGES - >
 Strona do testow automatycznych: https://automationexercise.com/ ;
Strony do automatyzacji: Signup/Login, Cart, Products
*/
describe('Home Page', () => {
  const homePage = new HomePage();
  const cartPage = new CartPage();
  beforeEach(() => {
    homePage.visitHomePage();
  })

  it('Add to Cart first item', () => {
    homePage.addtoCartItem("1");
    homePage.verifyIfPopupIsVisible();
    homePage.clickOnViewCartOnPopup();
    cartPage.verifyIfItemImageIsVisible('1');
    cartPage.verifyIfDescriptionIsVisible('Blue Top','Women > Tops');
    cartPage.verifyItemPrice('1','500');
    cartPage.verifyItemQuantity('1','1');
    cartPage.verifyItemTotal('1','500')
  })

  it('All products are visible within HomePage', () => {
    homePage.verifyIfAllProductsAreVisible('34')
  })
  it('The Carousel check if goes to set part by User', () => {
    homePage.setTheCarouselPartSet('2');
    homePage.verifyTheCarouselPartSet('2');
  })
  it('Verify if Product has image visible', () => {
    homePage.verifyIfImageIsVisibleInCard('Regular Fit Straight Jeans')
  })
})

