# UI Automation Testing — OpenCart (Playwright)

## 📌 Overview

This module contains UI automation tests for the OpenCart QA Portfolio Project using:

- Playwright
- JavaScript (Node.js)

The goal is to automate real-world QA workflows and demonstrate end-to-end testing skills including authentication, product management, and UI validation.

---

## 🎯 Current Automation Scope

### ✅ Implemented Features

- Playwright project setup and configuration
- Browser automation setup
- Admin authentication (positive & negative scenarios)
- Product CRUD automation (Create, Read/Search, Update, Delete)
- Dynamic test data generation
- UI assertions and validation
- Table filtering and verification
- Browser dialog handling (confirm popups)
- HTML reporting

---

## 🧪 Automated Test Coverage

### 🔐 Authentication Tests

- TC-AUTO-001 — Successful Admin Login
- TC-AUTO-002 — Invalid Login Attempt

### 📦 Product Management Tests

- TC-AUTO-003 — Create Product
- TC-AUTO-004 — Edit Product
- TC-AUTO-005 — Delete Product
- TC-AUTO-006 — Product Search / Filter Validation

---

## 🧰 Tools & Technologies

- Playwright
- JavaScript (Node.js)
- Chromium browser automation

---

## 📂 Project Structure

09-automation-ui/
│
├── playwright/
│   ├── tests/
│   │   ├── login.spec.js
│   │   ├── products.spec.js
│   │
│   ├── playwright.config.js
│   ├── package.json
│   ├── package-lock.json
│   ├── .gitignore
│
└── README.md

---

## ▶️ Running Tests

npx playwright test

npx playwright test --headed

npx playwright test tests/products.spec.js --headed

npx playwright test --debug

---

## 📊 Reporting

- Passed / failed tests
- Execution time
- Error logs
- Trace viewer

Open report:

npx playwright show-report

---

## 🚀 Planned Improvements

- Page Object Model (POM)
- Reusable authentication helper
- Better selector strategy (data-testid)
- Remove global state between tests
- Screenshots on failure
- CI/CD integration
- Parallel execution optimization

---

## 🧠 QA Skills Demonstrated

- End-to-end workflow testing
- CRUD lifecycle validation
- UI automation with dynamic data
- DOM inspection and selector strategy
- Browser dialog handling
- Assertion design
- Debugging and stabilization

---

## 📌 Notes

Transition from manual QA to UI automation engineering with real e-commerce workflows.