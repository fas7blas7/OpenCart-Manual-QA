# Login Test Cases - OpenCart

## Common Preconditions
- User is registered
- Browser: Brave (Chromium-based)
- Application: https://demo.opencart.com

---

## TC-LOGIN-001 — Successful Login

**Priority:** High  
**Type:** Functional

### Steps:
1. Navigate to login page
2. Enter valid email
3. Enter valid password
4. Click Login

### Expected Result:
- User is successfully logged in
- Redirected to account page
- URL contains `/account/account`
- Session token is generated

---

## TC-LOGIN-002 — Login with Empty Fields

**Priority:** High  
**Type:** Validation

### Steps:
1. Leave email empty
2. Leave password empty
3. Click Login

### Expected Result:
- Login is rejected
- Warning displayed:
  "Warning: No match for E-Mail Address and/or Password."

### Note:
Current system uses generic authentication message instead of field-level validation.

---

## TC-LOGIN-003 — Login with Only Email

**Priority:** High  
**Type:** Validation

### Expected Result:
- Login rejected
- Same warning message displayed

---

## TC-LOGIN-004 — Login with Only Password

**Priority:** High  
**Type:** Validation

### Expected Result:
- Login rejected
- Same warning message displayed

---

## TC-LOGIN-005 — Password Field Masking

**Priority:** Medium  
**Type:** UI / Security

### Expected Result:
- Password is masked
- No visible plaintext characters