# Target.com Navigation Test Plan

## Index
1. [Overview](#overview)
2. [Test Objectives](#test-objectives)
3. [Components Covered](#components-covered)
4. [Test Strategy](#test-strategy)
5. [Test Scenarios Summary](#test-scenarios-summary)
6. [Test Environment](#test-environment)
7. [Jira Test Case Mapping](#jira-test-case-mapping)
8. [Repository](#repository)
9. [Author](#author)

---

## Overview
This repository documents manual testing performed on key navigation components of the **Target.com** website.  
The goal is to validate **UI accuracy**, **functional correctness**, and **user navigation flow** across desktop browsers.

This project demonstrates structured QA documentation, test planning, and traceability using Jira.

---

## Test Objectives
- Verify navigation menus open and close correctly
- Ensure all links navigate to the correct destination pages
- Validate UI layout, labels, and visual consistency
- Ensure a smooth desktop user experience

---

## Components Covered

### 1. Categories Dropdown
- Dropdown trigger (click/hover)
- Category list visibility
- Link navigation
- Dropdown dismissal behavior

### 2. New & Featured Dropdown
- Dropdown trigger
- Link visibility and correctness
- Navigation validation
- Dismissal behavior

### 3. Featured Categories Section
- UI layout and grid structure
- Category icons and labels
- **Shop all** link functionality
- Navigation and length validation

---

## Test Strategy

### Manual Functional Testing
- Validate all navigation links and dropdown interactions
- Verify correct routing to landing pages
- Confirm UI consistency across interactions

---

## Test Scenarios Summary

### Categories Dropdown
- Verify dropdown appears on interaction
- Validate all expected categories are displayed
- Confirm each link navigates correctly
- Ensure dropdown closes when clicking outside

### New & Featured Dropdown
- Verify dropdown trigger
- Validate all featured links are present
- Confirm correct navigation
- Verify dropdown dismissal

### Featured Categories Section
- Verify section visibility on homepage
- Validate grid layout (3 rows x 6 columns)
- Confirm **Shop all** link behavior
- Validate navigation for each category

---

## Test Environment

- **Browser**: Chrome (142.0.7444.135)
- **Devices**: Desktop
  - Windows 10 / 11
  - macOS
- **Tools Used**:
  - Browser Developer Tools
  - Jira (test case management & defect tracking)

---

## Jira Test Case Mapping

### Categories
- MTQA-3946
- MTQA-3947
- MTQA-3948
- MTQA-3949
- MTQA-3950

### New & Featured
- MTQA-3980
- MTQA-3981
- MTQA-3982
- MTQA-3983

### Featured Categories
- MTQA-4020
- MTQA-4021
- MTQA-4022

---

## Repository
GitHub Repository:  
https://github.com/Surabhi-ctrl/Capstone.git

---

## Author
**Surabhi**  
QA Engineer | Manual Testing | Test Planning | Jira
