import { HomePage } from "../../pages/HomePage";

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
