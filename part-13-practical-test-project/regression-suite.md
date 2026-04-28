# Regression Test Suite – Blekingetrafiken Travel Planner

## 1. Purpose

This document describes a selected regression test suite for Blekingetrafiken's web-based travel planner.

The purpose of the regression test suite is to identify critical test cases that should be re-executed when changes are made to the travel planner, in order to make sure that important functionality still works as expected.

## 2. Test object

Blekingetrafiken travel planner:

```text
https://blekingetrafiken.se/reseinformation/sok-resa/
```

## 3. What is regression testing?

Regression testing means re-running selected tests after a change has been made to the system.

The goal is to verify that existing functionality has not been broken by new changes, bug fixes, updates or configuration changes.

## 4. Selection criteria

The regression test suite is based on test cases that are important for the main user flow or have higher risk.

Test cases are selected based on the following criteria:

| Criterion | Reason |
|---|---|
| Business-critical functionality | The function is central for planning a journey |
| High user impact | Many users are likely to use the function |
| High risk of failure | The function depends on input, validation or several system steps |
| Previous defects or uncertainty | Areas where bugs have been found or where behavior is unclear |
| Core navigation or result interpretation | Users must understand and trust the result |

## 5. Selected regression test cases

| Regression ID | Original Test Case | Area | Priority | Reason for inclusion |
|---|---|---|---|---|
| REG-001 | TC-001 – Free text address: valid address can be entered | Search fields | High | Core part of planning a journey |
| REG-002 | TC-002 – Free text address: empty field is handled correctly | Search fields | High | Important validation and user guidance |
| REG-003 | TC-006 – Select from list: suggestions are shown during input | Search fields | High | Important for users selecting correct locations |
| REG-004 | TC-007 – Select from list: selected option is registered correctly | Search fields | High | Search depends on correct location selection |
| REG-005 | TC-008 – Search button: search starts with valid values | Search fields | High | Main user flow must work |
| REG-006 | TC-012 – Print button can be opened | Other buttons and links | Medium | Useful function after search results are displayed |
| REG-007 | TC-014 – Navigation map: departure destination is shown | Other buttons and links | Medium | Supports user understanding of the trip |
| REG-008 | TC-015 – Navigation map: arrival destination is shown | Other buttons and links | Medium | Supports user understanding of the trip |

## 6. Regression suite execution

The regression test suite should be executed when:

- A bug fix has been made
- Search functionality has been changed
- Result page behavior has been changed
- Map or navigation-related functionality has been changed
- A new release or update is prepared
- The team wants a quick quality check before presenting results

## 7. Execution order

The regression suite should be executed in the following order:

1. Search field validation
2. Search suggestions and selected locations
3. Search execution
4. Search result-related functions
5. Supporting functions such as print and map

This order follows the user's natural journey through the travel planner.

## 8. Expected outcome

The regression test suite should give a quick indication of whether the most important parts of the travel planner still work.

If any regression test fails, the issue should be documented as a bug and the affected area should be retested after correction.

## 9. Limitations

This regression suite is intentionally limited.

It does not cover all test cases in the project. Instead, it focuses on a smaller selection of high-value test cases that are important for the main user flow.

The suite can be expanded later if more high-risk areas are identified.

## 10. Reflection

Creating a regression test suite helps the test group move from simply finding bugs to thinking about long-term quality.

It also supports better communication with developers and stakeholders because it shows which functions are considered most important to protect when changes are made.
