import { HomePage } from "../../pages/HomePage";
/* PAGES - >
 Strona do testow automatycznych: https://automationexercise.com/ ;
Strony do automatyzacji: Signup/Login, Cart, Products
TC1: Wejdź w produkt, dodaj do koszyka i zamów
TC2: Test logowania
TC3: Szybko dodaj do koszyka produkt i go zamów
*/
describe('Home Page', () => {
  const homePage = new HomePage();
  beforeEach(() => {
    homePage.visitHomePage();
  })

  it('Add to Cart first item', () => {
    homePage.addtoCartItem("1");
    homePage.verifyIfPopupIsVisible();
    homePage.clickOnViewCartOnPopup();
  })
  })
