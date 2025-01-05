import { hp } from "cypress/pages/homePage/hpFinctionsMethods";
import { hpd } from "cypress/pages/homePage/homePageStringsSelectorsEnums";
import {
  checkErrorMessages,
  clickOnTheButton,
  passwordStrengthScenarios,
  sum,
  verifiesData
} from "cypress/pages/sigUpPage/suFunctionsMethods";
import {
  idPartialValues,
  supd
} from "cypress/pages/sigUpPage/suPageStringsSelectorsEnums";
import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

import "cypress/support/commands.ts";

import "cypress/hooks/hooks";
import { sipd } from "cypress/pages/signInPage/siPageStringsSelectorsEnums";

Given("user reaches homepage", () => {
  hp.verifyUrl(`${hpd.strings.HOME_PAGE_URL}/`);
  hp.verifyTitle(hpd.strings.HOME_PAGE_TITLE);
});

When("user clicks on create an account text link", () => {
  clickOnTheButton("a", hpd.strings.CREATE_ACCOUNT);
});

Then("user is on create account page", () => {
  hp.verifyUrl(`${hpd.strings.HOME_PAGE_URL}/customer/account/create/`);
  cy.get(supd.selectors.MAIN_CONTENT).within(() => {
    cy.getText("h1", hpd.strings.H1_HEADER);
  });
});

When(
  "user clicks on create account button without filling the various fields",
  () => {
    clickOnTheButton(supd.selectors.CAA_TITLE, supd.strings.CREATE_ACCOUNT);
  }
);

Then("user will see error messages", () => {
  checkErrorMessages();
});

When("user sees the text content associated with various fields", () => {
  verifiesData();
  cy.scrollTo("top");
});

Then(
  "user enters first name {string} and last name {string}",
  (firstName: string, lastName: string) => {
    sum
      .getInputTextbox(supd.strings.FIRST_NAME)
      .type(firstName, { force: true });
    sum.getInputTextbox(supd.strings.LAST_NAME).type(lastName, { force: true });
  }
);

When("user enters an invalid email", () => {
  sum
    .getInputTextbox(idPartialValues.EMAIL)
    .type("xyz_143@xyz", { force: true });
});

Then("clicks on create an account button", () => {
  clickOnTheButton(supd.selectors.CAA_TITLE, supd.strings.CREATE_ACCOUNT);
});

Then("user sees an error message for email field while signing up", () => {
  cy.getText(
    `#${idPartialValues.EMAIL}-error`,
    sipd.strings.ENTER_VALID_EMAIL_WARNING
  );
});

Then("user enters valid email {string} this time", (email: string) => {
  sum.getInputTextbox(idPartialValues.EMAIL).type(email, { force: true });
});

When("user enters the password", () => {
  sum.getInputTextbox(supd.strings.PASSWORD).type("Sac");
});

Then(
  "if the password strength is weak or medium, user enters password again",
  () => {
    passwordStrengthScenarios();
  }
);

When("user password strength is strong", () => {
  cy.log("Password strength is strong.");
});

Then("user confirms password by clicking on create account button", () => {
  sum
    .getInputTextbox(idPartialValues.CONFIRM_PASSWORD)
    .type(`${Cypress.env("password")}01a`, { force: true });
  cy.getText(supd.selectors.CAA_TITLE, supd.strings.CREATE_ACCOUNT)
    .and("have.css", "background-color", "rgb(25, 121, 195)")
    .click({ force: true });
});

When("both fields have different passwords", () => {
  cy.getText(
    `#${idPartialValues.PASSWORD_ERROR_ID}`,
    supd.strings.ENTER_SAME_VALUE_ERROR_MSG
  );
});

Then("user re-enter the password {string}", (newPassword: string) => {
  sum
    .getInputTextbox(supd.strings.PASSWORD)
    .clear({ force: true })
    .type(newPassword, { force: true });
});

Then("user re-confirms the password {string}", (newPassword: string) => {
  sum
    .getInputTextbox(idPartialValues.CONFIRM_PASSWORD)
    .clear({ force: true })
    .type(newPassword, { force: true });
});

When("user clicks on create account button", () => {
  clickOnTheButton(supd.selectors.CAA_TITLE, supd.strings.CREATE_ACCOUNT);
});

Then("user sees the success message", () => {
  cy.getText(
    supd.selectors.SUCCESS_MESSAGE,
    supd.strings.SUCCESS_MESSAGE_TEXT
  ).and("have.css", "color", "rgb(0, 100, 0)");
});
