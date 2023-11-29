$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:Feature/Customer.feature");
formatter.feature({
  "name": "Add customer",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Add new customer",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User launch the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefenition.user_launch_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter the url \"https://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefenition.user_enter_the_url(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User add the email as \"admin@yourstore.com\" and password as \"admin\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefenition.user_add_the_email_as_and_password_as(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefenition.user_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User view the dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefenition.user_view_the_dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click the customers menu",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefenition.user_click_the_customers_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click the customer menu item",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefenition.user_click_the_customer_menu_item()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click the add new item",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefenition.user_click_the_add_new_item()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click the custome info",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefenition.user_click_the_custome_info()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click the save button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefenition.user_click_the_save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verify the confirmation message \" The new customer has been added successfully\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefenition.user_verify_the_confirmation_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:Feature/Login.feature");
formatter.feature({
  "name": "User login with valid credentials",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "User login with valid credentials successfully",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User launch the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefenition.user_launch_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter the url \"https://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefenition.user_enter_the_url(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User add the email as \"admin@yourstore.com\" and password as \"admin\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefenition.user_add_the_email_as_and_password_as(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefenition.user_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User validate page should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefenition.user_validate_page_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click the logout button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefenition.user_click_the_logout_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User validate page should be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefenition.user_validate_page_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefenition.user_close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "User login with valid credentials successfully",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User launch the browser",
  "keyword": "Given "
});
formatter.step({
  "name": "User enter the url \"https://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.step({
  "name": "User add the credential email as \"\u003cemail\u003e\" and password as \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "User click the login button",
  "keyword": "And "
});
formatter.step({
  "name": "User validate page should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.step({
  "name": "User click the logout button",
  "keyword": "And "
});
formatter.step({
  "name": "User validate page should be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.step({
  "name": "User close the browser",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "admin@yourstore.com",
        "admin"
      ]
    },
    {
      "cells": [
        "admin@yourstore",
        "admin12345"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User login with valid credentials successfully",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User launch the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefenition.user_launch_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter the url \"https://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefenition.user_enter_the_url(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User add the credential email as \"admin@yourstore.com\" and password as \"admin\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefenition.user_add_the_credential_email_as_and_password_as(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefenition.user_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User validate page should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefenition.user_validate_page_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click the logout button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefenition.user_click_the_logout_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User validate page should be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefenition.user_validate_page_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefenition.user_close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User login with valid credentials successfully",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User launch the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefenition.user_launch_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter the url \"https://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefenition.user_enter_the_url(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User add the credential email as \"admin@yourstore\" and password as \"admin12345\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefenition.user_add_the_credential_email_as_and_password_as(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefenition.user_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User validate page should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefenition.user_validate_page_should_be(String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Your store. Logi]n\u003e but was:\u003c[Dashboard / nopCommerce administratio]n\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat org.stepdefiniton.LoginStepDefenition.user_validate_page_should_be(LoginStepDefenition.java:88)\r\n\tat ✽.User validate page should be \"Dashboard / nopCommerce administration\"(file:Feature/Login.feature:20)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User click the logout button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefenition.user_click_the_logout_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User validate page should be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefenition.user_validate_page_should_be(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefenition.user_close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:Feature/SearchCustomer.feature");
formatter.feature({
  "name": "search customer",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "search customer by email",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User launch the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefenition.user_launch_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter the url \"https://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefenition.user_enter_the_url(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User add the email as \"admin@yourstore.com\" and password as \"admin\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefenition.user_add_the_email_as_and_password_as(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefenition.user_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User view the dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefenition.user_view_the_dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click the customers menu",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefenition.user_click_the_customers_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click the customer menu item",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefenition.user_click_the_customer_menu_item()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user add the customer email",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefenition.user_add_the_customer_email()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click the search button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefenition.user_click_the_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validate the email in the search table",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefenition.user_validate_the_email_in_the_search_table()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//table[@id\u003d\u0027customers-grid\u0027]/tbody/tr[6]/td[2]\"}\n  (Session info: chrome\u003d114.0.5735.91)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-7F44H94\u0027, ip: \u0027192.168.29.182\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 114.0.5735.91, chrome: {chromedriverVersion: 114.0.5735.90 (386bc09e8f4f..., userDataDir: C:\\Users\\Thishiyan.S\\AppDat...}, goog:chromeOptions: {debuggerAddress: localhost:51370}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 7070893a71a8d9c7218e0f94866b9e81\n*** Element info: {Using\u003dxpath, value\u003d//table[@id\u003d\u0027customers-grid\u0027]/tbody/tr[6]/td[2]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.findElement(RemoteWebElement.java:185)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.findElementByXPath(RemoteWebElement.java:261)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.findElement(RemoteWebElement.java:181)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy19.findElement(Unknown Source)\r\n\tat org.pages.SearchCustomerPage.searchByCustomerEmail(SearchCustomerPage.java:101)\r\n\tat org.stepdefiniton.LoginStepDefenition.user_validate_the_email_in_the_search_table(LoginStepDefenition.java:212)\r\n\tat ✽.user validate the email in the search table(file:Feature/SearchCustomer.feature:12)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefenition.user_close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "search customer by name",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User launch the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefenition.user_launch_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter the url \"https://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefenition.user_enter_the_url(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User add the email as \"admin@yourstore.com\" and password as \"admin\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefenition.user_add_the_email_as_and_password_as(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefenition.user_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User view the dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefenition.user_view_the_dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click the customers menu",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefenition.user_click_the_customers_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click the customer menu item",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefenition.user_click_the_customer_menu_item()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user add the customer first name",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefenition.user_add_the_customer_first_name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user add the customer last name",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefenition.user_add_the_customer_last_name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click the search button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefenition.user_click_the_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validate the name in the search table",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefenition.user_validate_the_name_in_the_search_table()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//table[@id\u003d\u0027customers-grid\u0027]/tbody/tr[4]/td[3]\"}\n  (Session info: chrome\u003d114.0.5735.91)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-7F44H94\u0027, ip: \u0027192.168.29.182\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 114.0.5735.91, chrome: {chromedriverVersion: 114.0.5735.90 (386bc09e8f4f..., userDataDir: C:\\Users\\Thishiyan.S\\AppDat...}, goog:chromeOptions: {debuggerAddress: localhost:51408}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: e6746c1373c9b38100ef3a328d728dd6\n*** Element info: {Using\u003dxpath, value\u003d//table[@id\u003d\u0027customers-grid\u0027]/tbody/tr[4]/td[3]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.findElement(RemoteWebElement.java:185)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.findElementByXPath(RemoteWebElement.java:261)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.findElement(RemoteWebElement.java:181)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy19.findElement(Unknown Source)\r\n\tat org.pages.SearchCustomerPage.search_CustomerByName(SearchCustomerPage.java:122)\r\n\tat org.stepdefiniton.LoginStepDefenition.user_validate_the_name_in_the_search_table(LoginStepDefenition.java:237)\r\n\tat ✽.user validate the name in the search table(file:Feature/SearchCustomer.feature:27)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefenition.user_close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});