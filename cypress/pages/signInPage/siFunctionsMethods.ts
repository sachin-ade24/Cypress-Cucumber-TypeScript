import { sum } from "cypress/pages/sigUpPage/suFunctionsMethods";
import {
  signIn,
  sipd
} from "cypress/pages/signInPage/siPageStringsSelectorsEnums";

export const completeTheSignIn = (email: string, password: string) => {
  sum.getInputTextbox(signIn.EMAIL).clear({ force: true }).type(email);
  sum.getInputTextbox(signIn.PASSWORD).clear({ force: true }).type(password);
  cy.getText("span", sipd.strings.SIGN_IN_BUTTON_TEXT).click({ force: true });
};

export const verifyTheAlertMessage = () => {
  cy.getText(sipd.selectors.ALERT, sipd.strings.ALERT_MESSAGE).and(
    "have.css",
    "background-color"
  );
};

export const signOff = () => {
  cy.get(sipd.selectors.CUSTOMER_NAME)
    .first()
    .find(sipd.selectors.DD_BUTTON)
    .click({ force: true });
  cy.getText("a", sipd.strings.SIGN_OUT).click();
  cy.getText("span", sipd.strings.SIGN_OUT_MESSAGE);
  cy.getText("span", sipd.strings.HP);
};
