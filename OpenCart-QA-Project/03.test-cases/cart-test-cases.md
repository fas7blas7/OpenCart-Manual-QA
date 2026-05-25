
# Cart Test Cases - OpenCart

## TC-CART-001 — Add Single Product

**Type:** Functional  
**Priority:** High

### Steps:
1. Open product page
2. Click Add to Cart

### Expected Result:
- Success message displayed
- Product added to cart
- Cart count increases

---

## TC-CART-002 — Add Multiple Different Products

### Steps:
1. Add MacBook
2. Add iPhone

### Expected Result:
- Both products added successfully
- Cart updates correctly

---

## TC-CART-003 — Quantity = 0 Edge Case

### Steps:
1. Open product page
2. Set quantity to 0
3. Add to cart

### Expected Result:
- Product should NOT be added
- OR system should enforce minimum quantity = 1

---

## TC-CART-004 — Cart Persistence After Refresh

### Expected Result:
- Cart remains unchanged after refresh