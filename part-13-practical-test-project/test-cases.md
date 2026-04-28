# Test Cases – Blekingetrafiken Travel Planner

## 1. Purpose

This document summarizes selected test cases created during the practical test project for Blekingetrafiken's web-based travel planner.

The full test case management is performed in Reqtest. This document is a portfolio-friendly summary showing examples of how the test cases are structured and what areas are covered.

## 2. Test object

Blekingetrafiken travel planner:

```text
https://blekingetrafiken.se/reseinformation/sok-resa/
```

## 3. Test case structure

Each test case is written to be clear, reproducible and possible for another tester to execute.

The test cases follow this basic structure:

| Field | Description |
|---|---|
| Test Case ID | Unique identifier |
| Title | Short description of what is tested |
| Area | Functional area |
| Priority | High, Medium or Low |
| Preconditions | What must be true before the test starts |
| Test steps | Step-by-step instructions |
| Expected result | What should happen if the system works correctly |

## 4. Test suite overview

The project group divided the testing into functional test suites.

| Test suite | Purpose |
|---|---|
| Search fields | Verify input fields, search suggestions, selected locations and validation |
| Result page | Verify that search results are shown and can be interpreted |
| Technical details | Verify technical journey details and related information |
| Departure/arrival and return trip | Verify date, time, departure, arrival and return journey functionality |
| Language selection | Verify language-related functionality |
| Other buttons and links | Verify help, print, map and navigation-related functions |
| Change travel preferences | Verify that travel preferences can be changed |

## 5. Selected test cases – Search fields

### TC-001 – Free text address: valid address can be entered

| Field | Content |
|---|---|
| Area | Search fields |
| Priority | High |
| Preconditions | The travel planner page is open |
| Test steps | 1. Click in the From field<br>2. Enter a valid address<br>3. Select a suggested address from the list |
| Expected result | The selected address is entered correctly in the search field |

---

### TC-002 – Free text address: empty field is handled correctly

| Field | Content |
|---|---|
| Area | Search fields |
| Priority | High |
| Preconditions | The travel planner page is open |
| Test steps | 1. Leave the From field empty<br>2. Enter a valid destination<br>3. Try to search |
| Expected result | The system should not perform an invalid search and should guide the user with a clear message |

---

### TC-003 – Free text address: invalid text is handled safely

| Field | Content |
|---|---|
| Area | Search fields |
| Priority | Medium |
| Preconditions | The travel planner page is open |
| Test steps | 1. Click in the From field<br>2. Enter invalid or random text<br>3. Observe suggestions and validation |
| Expected result | The system should handle the input without crashing and should not select an incorrect location automatically |

---

### TC-004 – Free text address: special characters are handled

| Field | Content |
|---|---|
| Area | Search fields |
| Priority | Medium |
| Preconditions | The travel planner page is open |
| Test steps | 1. Enter special characters in the search field<br>2. Observe suggestions and validation |
| Expected result | The system should handle special characters in a stable way without visual or functional errors |

---

### TC-005 – Free text address: very long text is handled

| Field | Content |
|---|---|
| Area | Search fields |
| Priority | Medium |
| Preconditions | The travel planner page is open |
| Test steps | 1. Enter a very long text string in the search field<br>2. Observe how the input field and suggestions behave |
| Expected result | The system should remain stable and not break the layout or functionality |

---

### TC-006 – Select from list: suggestions are shown during input

| Field | Content |
|---|---|
| Area | Search fields |
| Priority | High |
| Preconditions | The travel planner page is open |
| Test steps | 1. Start typing a known place or address<br>2. Observe the suggestion list |
| Expected result | Relevant suggestions should be shown while typing |

---

### TC-007 – Select from list: selected option is registered correctly

| Field | Content |
|---|---|
| Area | Search fields |
| Priority | High |
| Preconditions | Suggestions are visible in the search field |
| Test steps | 1. Start typing a known place or address<br>2. Select one suggestion from the list<br>3. Check the field value |
| Expected result | The selected suggestion should be registered correctly in the field |

---

### TC-008 – Search button: search starts with valid values

| Field | Content |
|---|---|
| Area | Search fields |
| Priority | High |
| Preconditions | Valid origin and destination have been entered |
| Test steps | 1. Enter a valid From location<br>2. Enter a valid To location<br>3. Click the search button |
| Expected result | The system should perform the search and show relevant travel results |

---

## 6. Selected test cases – Other buttons and links

### TC-009 – Help button can be opened

| Field | Content |
|---|---|
| Area | Other buttons and links |
| Priority | High |
| Preconditions | The travel planner page is open |
| Test steps | 1. Locate the help button<br>2. Click the help button |
| Expected result | Help information should open or become visible to the user |

---

### TC-010 – Help button shows relevant content

| Field | Content |
|---|---|
| Area | Other buttons and links |
| Priority | Medium |
| Preconditions | Help information is open |
| Test steps | 1. Open the help function<br>2. Review the displayed help content |
| Expected result | The help content should be relevant to the travel planner and understandable for the user |

---

### TC-011 – Help button can be closed

| Field | Content |
|---|---|
| Area | Other buttons and links |
| Priority | Medium |
| Preconditions | Help information is open |
| Test steps | 1. Open the help function<br>2. Close the help information |
| Expected result | The help information should close without affecting the rest of the page |

---

### TC-012 – Print button can be opened

| Field | Content |
|---|---|
| Area | Other buttons and links |
| Priority | Medium |
| Preconditions | Search results are visible |
| Test steps | 1. Perform a valid search<br>2. Click the print button |
| Expected result | The browser print dialog or print view should open |

---

### TC-013 – Print function can be cancelled or closed

| Field | Content |
|---|---|
| Area | Other buttons and links |
| Priority | Medium |
| Preconditions | Print dialog or print view is open |
| Test steps | 1. Open the print function<br>2. Cancel or close the print function |
| Expected result | The user should return to the travel planner without losing search results |

---

### TC-014 – Navigation map: departure destination is shown

| Field | Content |
|---|---|
| Area | Other buttons and links |
| Priority | Medium |
| Preconditions | Search results are visible |
| Test steps | 1. Perform a valid search<br>2. Open the navigation map or map-related function<br>3. Check departure location |
| Expected result | The departure destination should be shown correctly on the map |

---

### TC-015 – Navigation map: arrival destination is shown

| Field | Content |
|---|---|
| Area | Other buttons and links |
| Priority | Medium |
| Preconditions | Search results are visible |
| Test steps | 1. Perform a valid search<br>2. Open the navigation map or map-related function<br>3. Check arrival location |
| Expected result | The arrival destination should be shown correctly on the map |

---

## 7. Prioritization

The highest priority test cases are related to the core user flow:

1. Enter origin and destination
2. Select valid suggestions
3. Start a search
4. Understand the search result
5. Receive clear feedback when something goes wrong

These areas are most important because they directly affect the user's ability to plan a journey.

## 8. Notes

The test cases in this document are selected examples from the project work. The full set of test cases is managed in Reqtest.
