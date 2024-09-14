import { BasePage } from "./BasePage";


export class Register extends BasePage {

    readonly firstName:string = "//input[@placeholder='First Name']";
    readonly lastName:string = "//input[@placeholder='Last Name']";
    readonly address:string = "//textarea[@ng-model='Adress']";
    readonly email:string = "//input[@type='email']";
    readonly firstNameValue: string ="Tomasz";

    typeIntoRegisterForm(selector:string , value:string ):void {
        this.typeIntoField(selector,value);
    }
    chooseFromDropDownMenu(selector:string, picklistValue:string):void{
        this.chooseFromDropDownMenu(selector,picklistValue);
    }
}
export const register = new Register();