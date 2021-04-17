$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/TechFios_Login.feature");
formatter.feature({
  "line": 2,
  "name": "Validate Login Functionality",
  "description": "",
  "id": "validate-login-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.scenarioOutline({
  "line": 23,
  "name": "user should be able to login with valid credentials(Keeping variables and Placeholders separated)",
  "description": "",
  "id": "validate-login-functionality;user-should-be-able-to-login-with-valid-credentials(keeping-variables-and-placeholders-separated)",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 22,
      "name": "@Scenario3"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "user enters \"\u003cuserName\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "user click on Signin Button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "user should land on Dashboard Page",
  "keyword": "Then "
});
formatter.examples({
  "line": 27,
  "name": "",
  "description": "",
  "id": "validate-login-functionality;user-should-be-able-to-login-with-valid-credentials(keeping-variables-and-placeholders-separated);",
  "rows": [
    {
      "cells": [
        "userName",
        "password"
      ],
      "line": 28,
      "id": "validate-login-functionality;user-should-be-able-to-login-with-valid-credentials(keeping-variables-and-placeholders-separated);;1"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123"
      ],
      "line": 29,
      "id": "validate-login-functionality;user-should-be-able-to-login-with-valid-credentials(keeping-variables-and-placeholders-separated);;2"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc124"
      ],
      "line": 30,
      "id": "validate-login-functionality;user-should-be-able-to-login-with-valid-credentials(keeping-variables-and-placeholders-separated);;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1885293370,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "user is on the TechFios Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefs.user_is_on_the_TechFios_Login_Page()"
});
formatter.result({
  "duration": 1736809758,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "user should be able to login with valid credentials(Keeping variables and Placeholders separated)",
  "description": "",
  "id": "validate-login-functionality;user-should-be-able-to-login-with-valid-credentials(keeping-variables-and-placeholders-separated);;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    },
    {
      "line": 22,
      "name": "@Scenario3"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "user enters \"demo@techfios.com\" and \"abc123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "user click on Signin Button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "user should land on Dashboard Page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 13
    },
    {
      "val": "abc123",
      "offset": 37
    }
  ],
  "location": "StepDefs.user_enters_and(String,String)"
});
formatter.result({
  "duration": 250535784,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.user_click_on_Signin_Button()"
});
formatter.result({
  "duration": 2400122078,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.user_should_land_on_Dashboard_Page()"
});
formatter.result({
  "duration": 588739876,
  "status": "passed"
});
formatter.after({
  "duration": 119747185,
  "status": "passed"
});
formatter.before({
  "duration": 1117931220,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "user is on the TechFios Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefs.user_is_on_the_TechFios_Login_Page()"
});
formatter.result({
  "duration": 1500519098,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "user should be able to login with valid credentials(Keeping variables and Placeholders separated)",
  "description": "",
  "id": "validate-login-functionality;user-should-be-able-to-login-with-valid-credentials(keeping-variables-and-placeholders-separated);;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    },
    {
      "line": 22,
      "name": "@Scenario3"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "user enters \"demo@techfios.com\" and \"abc124\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "user click on Signin Button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "user should land on Dashboard Page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 13
    },
    {
      "val": "abc124",
      "offset": 37
    }
  ],
  "location": "StepDefs.user_enters_and(String,String)"
});
formatter.result({
  "duration": 254238437,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.user_click_on_Signin_Button()"
});
formatter.result({
  "duration": 1401795409,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.user_should_land_on_Dashboard_Page()"
});
formatter.result({
  "duration": 8901779,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Dashboard]- iBilling\u003e but was:\u003c[Login ]- iBilling\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:115)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat steps.StepDefs.user_should_land_on_Dashboard_Page(StepDefs.java:69)\n\tat ✽.Then user should land on Dashboard Page(features/TechFios_Login.feature:26)\n",
  "status": "failed"
});
formatter.after({
  "duration": 94152054,
  "status": "passed"
});
});