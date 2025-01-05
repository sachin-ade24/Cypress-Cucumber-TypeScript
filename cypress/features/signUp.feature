Feature: Test sign up functionality for new user

  Scenario Outline: Check sign up by creating a user account
    Given user reaches homepage
    When user clicks on create an account text link
    Then user is on create account page
    When user clicks on create account button without filling the various fields
    Then user will see error messages
    When user sees the text content associated with various fields
    Then user enters first name "<first name>" and last name "<last name>"
    When user enters an invalid email
    And clicks on create an account button
    Then user sees an error message for email field while signing up
    And user enters valid email "<email>" this time
    When user enters the password
    And if the password strength is weak or medium, user enters password again
    When user password strength is strong
    Then user confirms password by clicking on create account button
    When both fields have different passwords
    Then user re-enter the password "<password>"
    And user re-confirms the password "<password>"
    When user clicks on create account button
    Then user sees the success message

    Examples:
      | first name | last name | email            | password  |
      | Sachin     | Ade       | xyza_123@xyz.com | @Bcd#143$ |
