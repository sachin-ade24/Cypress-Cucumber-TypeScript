export enum idPartialValues {
  EMAIL = "email_address",
  CONFIRM_PASSWORD = "password-confirmation",
  PASSWORD_STRENGTH_LABEL = "password-strength-meter-label",
  PASSWORD_ERROR_ID = "password-confirmation-error",

}

export class signUpPageData {
  get selectors() {
    return {
      MAIN_CONTENT: "#maincontent",
      CAA_TITLE: '[title="Create an Account"]',
      SUCCESS_MESSAGE: '[data-ui-id="message-success"]',
      MAGE_ERROR: '.mage-error'
    };
  }

  get strings() {
    return {
      JSON_PATH: `${Cypress.env("jsonPath")}`,
      FIRST_NAME: "First Name",
      LAST_NAME: "Last Name",
      PASSWORD: "Password",
      CREATE_ACCOUNT: "Create an Account",
      SUCCESS_MESSAGE_TEXT: "Thank you for registering with Main Website Store.",
      ENTER_SAME_VALUE_ERROR_MSG: 'Please enter the same value again.'
    };
  }
}

export const supd = new signUpPageData();
