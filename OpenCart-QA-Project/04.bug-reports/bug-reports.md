
# BUG-001 — Incorrect Shipping Cost Applied

## Title:
Incorrect shipping cost applied after selecting Flat Rate shipping

## Severity:
Medium

## Priority:
High

## Type:
Functional / Calculation

---

## Environment:
- Browser: Brave (Chromium-based)
- OpenCart Demo

---

## Steps to Reproduce:
1. Add product to cart
2. Open Shipping Estimate
3. Enter valid location
4. Select Flat Rate ($8.00)
5. Click Apply Shipping

---

## Expected Result:
- Shipping cost should be $8.00
- Total price updated correctly

---

## Actual Result:
- Shipping cost applied as $5.00
- Total calculation incorrect

---

## Impact:
- Incorrect order total displayed
- Potential financial inconsistency