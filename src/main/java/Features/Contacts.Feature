Feature: Free CRM Contacts feature

Background: User logs in to Free CRM
Given User is already on Login Page
When User Enters "gvg2512@gmail.com" and "Pass@1234"
Then User logs in

Scenario: Free CRM Test Contact Scenario
Given User is on home page
When User is on Contacts Page
Then User creates contact
