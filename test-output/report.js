$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/gayat/eclipse-workspace/FreeCRMBDDFramework/src/main/java/Features/Contacts.Feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Contacts feature",
  "description": "",
  "id": "free-crm-contacts-feature",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "User logs in to Free CRM",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User Enters \"gvg2512@gmail.com\" and \"Pass@1234\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User logs in",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactStepDefinition.user_is_already_on_Login_Page()"
});
formatter.result({
  "duration": 10728399000,
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
  "location": "ContactStepDefinition.user_Enters_and(String,String)"
});
formatter.result({
  "duration": 275967600,
  "status": "passed"
});
formatter.match({
  "location": "ContactStepDefinition.user_logs_in()"
});
formatter.result({
  "duration": 12736800,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Free CRM Test Contact Scenario",
  "description": "",
  "id": "free-crm-contacts-feature;free-crm-test-contact-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "User is on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User is on Contacts Page",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User creates contact",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 54087400,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\"main-nav\"]/div[3]/a/i\"}\n  (Session info: chrome\u003d107.0.5304.107)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.0\u0027, revision: \u00272ecb7d9a\u0027, time: \u00272018-10-31T20:09:30\u0027\nSystem info: host: \u0027DESKTOP-SRL21OD\u0027, ip: \u0027192.168.0.149\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002714.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 107.0.5304.107, chrome: {chromedriverVersion: 107.0.5304.62 (1eec40d3a576..., userDataDir: C:\\Users\\gayat\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:62310}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: f851991ff7debc79772c85c67b3c6b8a\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"main-nav\"]/div[3]/a/i}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat StepDefinitions.ContactStepDefinition.user_is_on_home_page(ContactStepDefinition.java:53)\r\n\tat ✽.Given User is on home page(C:/Users/gayat/eclipse-workspace/FreeCRMBDDFramework/src/main/java/Features/Contacts.Feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "ContactStepDefinition.user_is_on_Contacts_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ContactStepDefinition.user_creates_contact()"
});
formatter.result({
  "status": "skipped"
});
});