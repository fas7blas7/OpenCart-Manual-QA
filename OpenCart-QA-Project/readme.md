# 🧪 OpenCart QA Portfolio Project

## 📌 Overview

This project demonstrates my Manual QA practice using the OpenCart e-commerce application. It simulates a real-world QA workflow including requirement analysis, test design, execution, exploratory testing, and defect reporting.

The project covers both **backend (admin panel)** and **frontend (storefront)** testing, including real defect identification and structured QA documentation.

---

## 🎯 Project Scope

### ✔ In Scope

* Admin Panel (Product Management)
* Product creation, editing, deletion
* Input validation (positive & negative testing)
* Storefront behavior (product visibility, cart functionality)
* Login validation scenarios (admin + storefront behavior)
* Exploratory testing sessions
* Bug reporting and defect tracking

---

### ❌ Out of Scope

* Real payment gateway processing
* Production deployment testing
* Performance / load testing
* External third-party integrations (payment/shipping providers)

---

## 🧪 Testing Types Performed

* Functional Testing
* Negative Testing
* Validation Testing
* UI / UX Testing
* Exploratory Testing
* Boundary Testing
* Data Integrity Testing
* Business Rule Validation
* UI Automation Testing
* End-to-End Testing

---

## 🐞 Defect Management

During testing, multiple functional and business-rule defects were identified and documented, including:

* Product validation issues (empty / invalid fields)
* Duplicate product handling inconsistencies
* Category assignment and visibility issues
* Stock and cart behavior issues
* UX issues (missing warnings, navigation behavior)

All defects are documented in the `/04-bug-reports` directory.

---

## 🐞 Bug Summary Overview

| ID      | Title                                              | Severity | Priority | Status |
| ------- | -------------------------------------------------- | -------- | -------- | ------ |
| BUG-001 | Login form allows empty password submission        | Medium   | Medium   | Open   |
| BUG-002 | Incorrect flat shipping rate applied               | Medium   | High     | Open   |
| BUG-003 | Missing category images                            | Medium   | Medium   | Open   |
| BUG-004 | Product allows zero price and quantity             | High     | High     | Open   |
| BUG-005 | Product without category not visible in storefront | High     | Medium   | Open   |
| BUG-006 | Duplicate product names allowed                    | Medium   | Medium   | Open   |
| BUG-007 | Duplicate product model names allowed              | Medium   | Medium   | Open   |
| BUG-008 | No unsaved changes warning in edit form            | Medium   | Medium   | Open   |
| BUG-009 | Out-of-stock product can be added to cart          | Medium   | High     | Open   |
| BUG-010 | Product created without category assignment        | Medium   | Medium   | Open   |

---

## 🧩 Project Structure

```
OpenCart-QA-Project/
│
├── README.md
│
├── 01-requirements/
├── 02-test-plan/
├── 03-test-cases/
├── 04-bug-reports/
│   ├── BUG-001-login-form-allows-empty-password.md
│   ├── BUG-002-incorrect-flat-shipping-rate.md
│   ├──	BUG-003-missing-category-images.md
│   ├──	BUG-004-product-add-allows-zero-price-and-quantity.md
│   ├── BUG-005-inconsistent-product-models.md
│   ├── BUG-006-duplicate-product-names-allowed.md
│   ├── BUG-007-duplicate-product-model-names.md
│   ├── BUG-008-no-unsaved-changes-warning.md
│   ├── BUG-009-out-of-stock-add-to-cart.md
│   ├── BUG-010-product-without-category.md
│   ├── ft-execution-001.md
│   ├── smoke-report-001.md
│
├── 05-test-data/
├── 06-exploratory-testing/
├── 07-environment/
│
├── 08-api-testing/ (Planned)
│   └── newman/
│   └── postman/
│       ├── collections/
│       └── environments/
│
├── 09-automation-ui/
│   ├── playwright/
│   ├── reports/
│   ├── screenshots/
│   └── README.md
├── 10-ci-cd/           (Planned)
├── docs/
└── screenshots/
```

---

## 🔧 Tools Used

* OpenCart (local installation via XAMPP)
* Postman (API testing)
* Newman (CLI test execution)
* XAMPP (local server environment)
* Git & GitHub (version control)

---

## API Testing (OpenCart / Demo APIs)

* For dedicated API automation testing, see my separate Dockerized-API-QA project.

---

## 🚧 Planned Improvements (Future Work)

This project is designed as a growing QA portfolio. The following improvements are planned:

### 08 — API Testing Expansion

Overview

This folder is reserved for future API testing integration related to the OpenCart QA project.

At the current stage, the primary focus of this repository is Manual QA, exploratory testing, functional validation, and defect reporting.

Planned API Scope

Future API testing may include:

* Authentication API testing
* Product endpoint validation
* Cart and checkout API flows
* Negative API scenarios
* API response validation
* Newman CLI execution
* API automation integration
* Current Status

Planned / Structure only
---

### 09 — UI Automation Testing

* Introduction of UI automation framework
* Possible tools: Selenium / Cypress
* Basic test automation for:

  * Login
  * Product creation
  * Cart flow
* Regression test automation suite

---

### 10 — CI/CD Integration

* GitHub Actions pipeline setup
* Automated test execution on push/PR
* Newman CLI integration into CI
* Future integration of UI automation into pipeline

---

## 📸 Screenshots

This section provides visual evidence of the testing process, environment setup, and defects discovered during Manual QA testing of OpenCart.

---

### 🖥️ OpenCart Admin Dashboard

Main admin interface used for product management, configuration, and testing.

> Add image: `screenshots/admin-dashboard.png`

---

### 📦 Product Creation Page

Used for functional and negative testing of product validation rules.

> Add image: `screenshots/product-create.png`

---

### 🐞 Example Bug Evidence

Shows a real defect found during testing (e.g. duplicate products, missing validation, or category issues).

> Add image: `screenshots/bug-example.png`

---

### 🛒 Storefront View

Displays how products appear to end users and highlights visibility or catalog issues.

> Add image: `screenshots/storefront.png`

---


## 🧠 Key Skills Demonstrated

* Test case design from requirements
* Exploratory testing in real application
* Functional and negative test execution
* Defect identification and reporting
* Understanding business rules and validation logic
* API testing basics (Postman + Newman)
* Structured QA project organization
* Playwright automation
* UI automation testing
* Automated assertions
* Test execution/reporting

---

## 📊 Key Achievements

* Built and tested full OpenCart local environment
* Identified multiple real functional defects
* Designed structured test suite for product module
* Executed exploratory testing sessions
* Created scalable QA project structure
* Implemented API testing foundation

---

## 📌 Conclusion

This project demonstrates a complete Manual QA workflow from setup and test design to execution and defect reporting.

It reflects real-world QA practices including structured testing, defect tracking, and exploratory analysis of an e-commerce system.
Transition into automation QA.
Playwright implementation.

The project will continue to evolve with planned API expansion, UI automation, and CI/CD integration.

