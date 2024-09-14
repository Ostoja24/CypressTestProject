/// <reference types="cypress" />
import { register, Register } from "../../pages/Register"



describe('Register Page tests', () => {
  beforeEach(() => {
    cy.visit('https://demo.automationtesting.in/Register.html')
  })

  it('Fill in all fields', () => {
  register.typeIntoRegisterForm(register.firstName,register.firstNameValue);
  register.typeIntoRegisterForm(register.lastName,register.lastNameValue);
  register.chooseFromDropDownMenu(register.)
  })
  })
