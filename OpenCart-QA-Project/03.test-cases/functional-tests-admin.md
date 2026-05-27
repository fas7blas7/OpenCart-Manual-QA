MODULE 1 — Authentication & Session

TC-FUNC-001 — Valid Admin Login

Type: Functional
Priority: High

Steps:
Open admin login page
Enter valid username and password
Click Login

Expected Result:
User is logged in successfully
Dashboard is displayed

Result - Pass

TC-FUNC-002 — Invalid Login Credentials

Type: Negative
Priority: High

Steps:
Enter invalid username/password
Click Login

Expected Result:
Login is rejected
Error message is displayed

Result - Pass

TC-FUNC-003 — Session Persistence

Type: Functional
Priority: Medium

Steps:
Login to admin
Refresh page

Expected Result:
User remains logged in

Result - Pass

MODULE 2 — Catalog (Core ecommerce functionality)

TC-FUNC-004 — Open Products List

Type: Functional
Priority: High

Steps:
Login to admin
Navigate to Catalog → Products

Expected Result:
Product list loads successfully

Result - Pass

TC-FUNC-005 — Add New Product (UI check only for now)

Type: Functional
Priority: High

Steps:
Go to Catalog → Products
Click “Add New” button

Expected Result:
Product creation form opens

Result - Pass

TC-FUNC-006 — Product Form Validation (Empty Submit)

Type: Negative
Priority: High

Steps:
Open Add Product form
Click Save without filling fields

Expected Result:
Validation errors are displayed
Product is NOT created

Result - Pass

MODULE 3 — Navigation & UI Stability

TC-FUNC-007 — Main Menu Navigation

Type: Functional
Priority: Medium

Steps:
Click through all main menu items
Dashboard
Catalog
Extensions
System

Expected Result:
All pages load without errors

Result - Pass

TC-FUNC-008 — Page Reload Stability

Type: Stability
Priority: Low

Steps:
Open any admin page
Refresh browser multiple times

Expected Result:
No crashes or broken UI

Result - Pass

MODULE 4 — Logout & Security

TC-FUNC-009 — Logout Functionality

Type: Functional
Priority: High

Steps:
Click Logout

Expected Result:
User is redirected to login page

Result - Pass

TC-FUNC-010 — Direct URL Access After Logout

Type: Security / Negative
Priority: High

Steps:
Logout
Try accessing admin URL directly (http://localhost:8080/opencart/upload/adminqa/index.php?route=common/dashboard&user_token=d930a2dd7d8805ce01381f52f808c8e1)

Expected Result:
User is redirected to login page
Invalid token session error message is displayed.

Result - Pass