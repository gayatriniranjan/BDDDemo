$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/gayat/eclipse-workspace/FreeCRMBDDFramework/src/main/java/Features/login.Feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Login Feature",
  "description": "",
  "id": "free-crm-login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "#Without Examples keyword"
    },
    {
      "line": 4,
      "value": "#Scenario: Free CRM Login Test Scenario"
    },
    {
      "line": 6,
      "value": "#Given user is already on Login Page"
    },
    {
      "line": 7,
      "value": "#When title of login page is Free CRM"
    },
    {
      "line": 8,
      "value": "#Then user enters \"gvg2512@gmail.com\" and \"Pass@1234\""
    },
    {
      "line": 9,
      "value": "#Then user clicks on login button"
    },
    {
      "line": 10,
      "value": "#Then user is on home page"
    },
    {
      "line": 12,
      "value": "#With Examples keyword"
    }
  ],
  "line": 13,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 21,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;1"
    },
    {
      "cells": [
        "gvg2512@gmail.com",
        "Pass@1234"
      ],
      "line": 22,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;2"
    },
    {
      "cells": [
        "tom",
        "test"
      ],
      "line": 23,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 22,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "user enters \"gvg2512@gmail.com\" and \"Pass@1234\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "loginStepDefinition.user_is_already_on_Login_Page()"
});
formatter.result({
  "duration": 9885258300,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 6558299300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "gvg2512@gmail.com",
      "offset": 13
    },
    {
      "val": "Pass@1234",
      "offset": 37
    }
  ],
  "location": "loginStepDefinition.user_enters_and(String,String)"
});
formatter.result({
  "duration": 775245900,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 129972200,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 42300,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "user enters \"tom\" and \"test\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "loginStepDefinition.user_is_already_on_Login_Page()"
});
formatter.result({
  "duration": 11767583400,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 8472377800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tom",
      "offset": 13
    },
    {
      "val": "test",
      "offset": 23
    }
  ],
  "location": "loginStepDefinition.user_enters_and(String,String)"
});
formatter.result({
  "duration": 271685800,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 96611500,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 38500,
  "status": "passed"
});
});