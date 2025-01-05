import {
  idPartialValues,
  supd
} from "cypress/pages/sigUpPage/suPageStringsSelectorsEnums";
import { sipd } from "../signInPage/siPageStringsSelectorsEnums";

//For the data verification - data driven approach
export const verifiesData = () => {
  // Load the JSON data
  cy.fixture(supd.strings.JSON_PATH).then((jsonData) => {
    jsonData.forEach((element: any) => {
      Object.keys(element).forEach((field) => {
        Object.keys(element[field]).forEach((subElement) => {
          cy.contains("span", element[field][subElement])
            .scrollIntoView()
            .should("be.visible");
        });
      });
    });
  });
};

export const typeThePassword = () => {
  sum
    .getInputTextbox(supd.strings.PASSWORD)
    .clear({ timeout: 2000 })
    .type(`${Cypress.env("password")}`, { force: true });
};

export const passwordStrengthScenarios = () => {
  cy.get(`#${idPartialValues.PASSWORD_STRENGTH_LABEL}`)
    .invoke("text")
    .then((text) => {
      switch (text) {
        case "Weak":
          cy.log("Password strength is weak. Please change it.");
          typeThePassword();
          break;
        case "Medium":
          cy.log("Password strength is medium. Please change it.");
          typeThePassword();
          break;
        case "Strong":
          cy.log("Password strength is strong.");
          break;
      }
    });
};

export const clickOnTheButton = (selector: string, text: string) => {
  cy.getText(selector, text).click({ force: true });
};

export const checkErrorMessage = (attrValue: string) => {
  cy.getText(`#${attrValue}-error`, sipd.strings.ERROR_MESSAGE_TEXT);
};

export const checkErrorMessages = () => {
  checkErrorMessage("firstname");
  checkErrorMessage("lastname");
  checkErrorMessage("email_address");
  checkErrorMessage("password");
  checkErrorMessage("password-confirmation");
};

export class signupMethods {
  getInputTextbox(idPartialValue: string) {
    return cy
      .get(`#${idPartialValue}`.toLowerCase().replace(" ", ""))
      .clear({ force: true });
  }
}

export const sum = new signupMethods();
