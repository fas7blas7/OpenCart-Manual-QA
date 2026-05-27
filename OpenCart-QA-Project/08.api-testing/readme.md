# 08 - API Testing (OpenCart QA Project)

This module contains API testing for the OpenCart QA Project using Postman and Newman.

---

## 📌 Objective
To validate API functionality, reliability, and error handling for authentication-related endpoints, including both positive and negative test scenarios.

---

## 🧰 Tools Used
- Postman (API design & manual execution)
- Newman (CLI test execution)
- Docker (optional execution environment)

---

## 📁 Structure

- `postman/collections/` → API test collections (requests & assertions)
- `postman/environments/` → environment variables (dev/test configs)
- `newman/` → execution commands and future reports

---

## 🧪 Scope of Testing

The following areas are covered:
- User login API validation
- Negative login scenarios
- Input validation testing
- Security checks (e.g. SQL injection attempts)
- Response status code validation

---

## ▶️ How to Run Tests

### Run via Postman
Import collection and environment files into Postman and execute manually.

---

### Run via Newman CLI

```bash
newman run postman/collections/opencart-login.collection.json \
-e postman/environments/opencart-dev.environment.json