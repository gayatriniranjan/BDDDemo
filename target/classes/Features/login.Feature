Feature: Free CRM Login Feature

#Without Examples keyword
#Scenario: Free CRM Login Test Scenario

#Given user is already on Login Page
#When title of login page is Free CRM
#Then user enters "gvg2512@gmail.com" and "Pass@1234"
#Then user clicks on login button
#Then user is on home page

#With Examples keyword
Scenario Outline: Free CRM Login Test Scenario

Given user is already on Login Page
When title of login page is Free CRM
Then user enters "<username>" and "<password>"
Then user clicks on login button
Then user is on home page
Examples:
|username|password|
|gvg2512@gmail.com|Pass@1234|
|tom|test|