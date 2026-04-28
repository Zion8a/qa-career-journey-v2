# Bug Reports – Blekingetrafiken Travel Planner

## 1. Purpose

This document describes how bug reports are structured during the practical test project for Blekingetrafiken's web-based travel planner.

The full bug reporting is performed in Reqtest. This document is a portfolio-friendly summary showing the structure used for reporting defects in a clear and reproducible way.

## 2. Test object

Blekingetrafiken travel planner:

```text
https://blekingetrafiken.se/reseinformation/sok-resa/
```

## 3. Bug report structure

Each bug report should be written so that another person can understand, reproduce and evaluate the issue.

A bug report should include:

| Field | Description |
|---|---|
| Bug ID | Unique identifier |
| Title | Short and clear summary of the problem |
| Description | Brief explanation of the issue |
| Steps to reproduce | Step-by-step instructions for reproducing the bug |
| Expected result | What should happen |
| Actual result | What actually happened |
| Severity | How serious the bug is for the user or system |
| Priority | How important it is to fix |
| Environment | Browser, operating system, device and date |
| Evidence | Screenshot, screen recording or other supporting information |
| Status | New, open, fixed, retest, closed or similar |

## 4. Severity levels

| Severity | Meaning |
|---|---|
| Critical | The main user flow is blocked or the system cannot be used |
| High | Important functionality does not work correctly |
| Medium | Functionality is affected, but there is a workaround |
| Low | Minor visual, text or usability issue |

## 5. Priority levels

| Priority | Meaning |
|---|---|
| High | Should be fixed as soon as possible |
| Medium | Should be fixed, but does not block the main flow |
| Low | Can be fixed later |

## 6. Bug report template

### BUG-001 – Add bug title here

| Field | Content |
|---|---|
| Area | Add functional area here |
| Severity | Add severity here |
| Priority | Add priority here |
| Environment | Add browser, OS, device and date here |
| Description | Add a short description of the problem here |
| Steps to reproduce | 1. Add step one<br>2. Add step two<br>3. Add step three |
| Expected result | Add expected result here |
| Actual result | Add actual result here |
| Evidence | Add screenshot or supporting information if available |
| Status | New |

---

## 7. Example bug report structure

### BUG-EXAMPLE – Search cannot be completed when required field is missing

| Field | Content |
|---|---|
| Area | Search fields |
| Severity | High |
| Priority | High |
| Environment | Microsoft Edge, Windows 11, desktop |
| Description | The user attempts to search without filling in all required travel fields. |
| Steps to reproduce | 1. Open the travel planner<br>2. Leave the From field empty<br>3. Enter a valid destination<br>4. Click the search button |
| Expected result | The system should prevent the search and display a clear validation message explaining what the user needs to fill in. |
| Actual result | To be completed during test execution. |
| Evidence | To be added if a defect is confirmed. |
| Status | Example only |

## 8. Notes

Real defects found during test execution should be documented in Reqtest first.

This document can later be updated with selected anonymized examples of bug reports from the project, if suitable for the portfolio.
