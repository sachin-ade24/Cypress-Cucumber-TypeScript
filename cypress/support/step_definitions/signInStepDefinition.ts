import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { hpd } from "cypress/pages/homePage/homePageStringsSelectorsEnums";
import { hp } from "cypress/pages/homePage/hpFinctionsMethods";
import {
  completeTheSignIn,
  verifyTheAlertMessage
} from "cypress/pages/signInPage/siFunctionsMethods";
import {
  signIn,
  sipd
} from "cypress/pages/signInPage/siPageStringsSelectorsEnums";
import "cypress/support/commands.ts";
import "cypress/hooks/hooks";

Given("user is on homepage", () => {
  hp.verifyUrl(hpd.strings.HOME_PAGE_URL);
});

When("user clicks on sign in text link", () => {
  cy.getText("a", sipd.strings.SIGN_IN_BUTTON_TEXT).click({ force: true });
});

Then("user is on login page", () => {
  hp.verifyUrl(`/customer/account/login`);
});

When("user clicks on sign in button", () => {
  cy.getText("span", sipd.strings.SIGN_IN_BUTTON_TEXT).click({ force: true });
});

Then("user sees the error messages for email and password", () => {
  cy.getText(`#${signIn.EMAIL}-error`, sipd.strings.ERROR_MESSAGE_TEXT);
  cy.getText(`#${signIn.PASSWORD}-error`, sipd.strings.ERROR_MESSAGE_TEXT);
});

When("user enters unregistered email id", () => {
  completeTheSignIn("abc@def.com", `${Cypress.env("password")}`);
});

Then("user sees an alert message for email field", () => {
  verifyTheAlertMessage();
});

When("user enters invalid or wrong email id", () => {
  completeTheSignIn("email", `${Cypress.env("password")}`);
});

Then("user sees an error message for email field", () => {
  cy.getText(
    `#${signIn.EMAIL}-error`,
    sipd.strings.ENTER_VALID_EMAIL_WARNING
  ).and("have.css", "color", "rgb(224, 43, 39)");
});

When("user enters invalid or wrong password", () => {
  completeTheSignIn(
    `${Cypress.env("email")}`,
    `${Cypress.env("password")}_bgh45`
  );
});

Then("user sees an error message for password field", () => {
  verifyTheAlertMessage();
});

When(
  "user enters valid email {string} and password {string}",
  (email: string, password: string) => {
    completeTheSignIn(`${email}`, `${password}`);
  }
);

Then("user completes the sign process", () => {
  cy.get(".greet")
    .invoke("text")
    .then((text) => {
      if (text.includes("Welcome")) {
        cy.log("Test case status: PASSED");
        cy.getText("h1", sipd.strings.HP);
      } else {
        cy.log("Test case status: FAILED");
      }
    });
});
