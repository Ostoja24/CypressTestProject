import { BasePage } from "./BasePage";

class Widgets extends BasePage{
    private expandableSection: string = "//div[@class='panel-body'][index]";
    private sectionTitle: string = "//b[index]";
    private accordionUrl:string = "Accordion.html";
    private autoCompleteUrl: string = "AutoComplete.html";
    private sliderUrl: string = "Slider.html"

    chooseTheSectionTitle(sectionNumber: string){
        return this.sectionTitle.replace("index",sectionNumber);
    }

    expandTheSection(sectionNumber: string){
        this.clickIntoElement(this.chooseTheSectionTitle(sectionNumber));
    }
}