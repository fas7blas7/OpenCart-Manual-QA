# 🧪 OpenCart QA Portfolio Project

## 📌 Overview

This project demonstrates my Manual QA practice using the OpenCart e-commerce application. It simulates a real-world QA workflow including requirement analysis, test design, execution, exploratory testing, and defect reporting.

The project evolved from basic functional testing into full end-to-end QA coverage of both **admin panel and storefront behavior**, including real defect discovery and validation.

---

## 🎯 Project Scope

### ✔ In Scope

* Admin Panel (Product Management)
* Product creation, editing, deletion
* Input validation testing (positive & negative)
* Storefront behavior (product visibility, cart operations)
* Login functionality (admin + basic validation scenarios)
* Cart and basic checkout flow simulation
* Exploratory testing sessions

### ❌ Out of Scope

* Real payment gateway processing
* Production deployment testing
* Performance / load testing
* External integrations (shipping providers, payment APIs)

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

---

## 🐞 Defect Management

During testing, multiple functional and business-rule defects were identified and documented, including:

* Product creation validation issues
* Duplicate product handling inconsistencies
* Missing category visibility behavior
* Cart and stock validation issues
* UX issues (unsaved changes warning)

All defects are documented in the `/04-bug-reports` directory.

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
│   ├── BUG-002-product-allows-zero-price-and-quantity.md
│   ├── BUG-005-product-without-category-not-visible.md
│   ├── BUG-006-duplicate-product-names-allowed.md
│   ├── BUG-007-duplicate-product-model-names.md
│   ├── BUG-008-no-unsaved-changes-warning.md
│   ├── BUG-009-out-of-stock-add-to-cart.md
│
├── 05-test-data/
├── 06-exploratory-testing/
├── 07-environment/
│
├── 08-api-tests/
│   ├── postman/
│   ├── newman/
│   ├── collections/
│   ├── environments/
│
├── 09-automation-ui/
├── 10-ci-cd/
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

## 🚀 API Testing (OpenCart / Demo APIs)

API testing is included as a supporting layer of the QA project.

### Tools Used

* Postman
* Newman CLI

### Scope

* Basic API validation flows
* Response code validation
* Negative test scenarios
* Collection-based test execution

### Execution Example

```bash
newman run postman/collections/opencart.collection.json -e postman/environments/local.environment.json
```

### Output

* CLI test results
* Optional HTML reports (future enhancement)

---

## 🧠 Key Skills Demonstrated

* Test case design from requirements
* Exploratory testing in real application
* Identification of functional and UX defects
* Writing structured bug reports
* Understanding business rules and validation logic
* API testing basics with Postman/Newman
* Building a structured QA project repository

---

## 📊 Key Achievements

* Built and tested full OpenCart local environment
* Identified multiple real functional defects
* Designed structured test cases for product module
* Executed exploratory testing sessions
* Created reusable QA project structure suitable for portfolio use

---

## 📌 Conclusion

This project simulates a real QA workflow from setup and test design to execution and defect reporting. It demonstrates practical manual QA skills, structured thinking, and the ability to identify real-world functional issues in an e-commerce system.

It also serves as a foundation for future automation and API testing expansion.