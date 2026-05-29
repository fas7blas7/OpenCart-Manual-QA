# UI Automation Testing — OpenCart (Playwright)

## 📌 Overview

This folder contains UI automation testing work for the OpenCart QA Portfolio Project using:

* Playwright
* JavaScript
* Node.js

The goal of this module is to automate critical business flows and simulate real-world QA automation practices.

---

## 🎯 Current Automation Scope

### ✅ Implemented

* Playwright project initialization
* Browser automation setup
* Automated admin login testing
* Positive authentication validation
* Negative authentication validation
* Assertion handling
* HTML report generation

---

## 🧪 Automated Test Coverage

### Authentication Tests

#### TC-AUTO-001 — Successful Admin Login

Validates that an admin user can successfully authenticate and access the dashboard.

#### TC-AUTO-002 — Invalid Login Attempt

Validates that incorrect credentials trigger proper validation and error handling.

---

## 🧰 Tools & Technologies

* Playwright
* JavaScript
* Node.js
* Chromium Browser

---

## 📂 Current Structure

```text
09-automation-ui/
│
├── playwright/
│   ├── tests/
│   │   └── login.spec.js
│   │
│   ├── node_modules/
│   ├── package.json
│   ├── package-lock.json
│   ├── playwright.config.js
│   └── .gitignore
│
└── README.md
```

---

## ▶️ Running Tests

Execute all tests:

```bash
npx playwright test
```

Run tests with visible browser:

```bash
npx playwright test --headed
```

Run tests in slow motion (debugging):

```bash
npx playwright test --headed --slow-mo=1000
```

---

## 📊 Reporting

Playwright automatically generates execution reports after test execution.

Reports include:

* Passed tests
* Failed tests
* Execution duration
* Error details

---

## 🚀 Planned Improvements

Future automation coverage may include:

* Product creation automation
* Product edit/delete flows
* Cart & checkout validation
* Negative product validation scenarios
* Reusable login helpers
* Page Object Model structure
* CI/CD integration
* Automated regression suites

---

## 📌 Notes

This module complements the Manual QA section of the OpenCart project and demonstrates the transition from manual testing into UI automation engineering using Playwright.