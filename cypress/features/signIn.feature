Feature: Test login functionality for Magento

  Scenario Outline: Check login is successful with valid credentials
    Given user is on homepage
    When user clicks on sign in text link
    Then user is on login page
    When user clicks on sign in button
    Then user sees the error messages for email and password
    When user enters unregistered email id
    Then user sees an alert message for email field
    When user enters invalid or wrong email id
    Then user sees an error message for email field
    When user enters invalid or wrong password
    Then user sees an error message for password field
    When user enters valid email "<email>" and password "<password>"
    Then user completes the sign process

    Examples:
      | email            | password  |
      | xyza_123@xyz.com | @Bcd#143$ |
