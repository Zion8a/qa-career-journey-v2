# Requirement Review – Blekingetrafiken Travel Planner

## 1. Purpose

This document summarizes a requirement review for Blekingetrafiken's web-based travel planner.

The purpose is to identify assumed user requirements, assess whether they are testable, and highlight areas where requirements or acceptance criteria should be clarified.

The full project work is performed in Reqtest. This document is a portfolio-friendly summary of how requirement review can support test planning, test case design and bug reporting.

## 2. Test object

Blekingetrafiken travel planner:

```text
https://blekingetrafiken.se/reseinformation/sok-resa/
```

## 3. Review approach

Because the project group does not have access to formal requirement documentation, the review is based on observable functionality and expected user needs.

The review focuses on:

- What the user should be able to do
- Which functions appear business-critical
- Whether the expected behavior is clear
- Whether the behavior can be tested
- Where acceptance criteria should be more explicit
- Which unclear areas may lead to different interpretations during testing

## 4. Assumed user requirements

| Requirement ID | Assumed requirement | Testability | Comment |
|---|---|---|---|
| REQ-001 | The user should be able to search for a journey by entering origin and destination | High | Core user flow and easy to test manually |
| REQ-002 | The system should show relevant location suggestions while the user types | High | Testable by using known places and addresses |
| REQ-003 | The user should be able to select a suggested location | High | Important because the search depends on correct selection |
| REQ-004 | The user should be able to choose departure or arrival time | Medium | Testable, but expected behavior must be clearly defined |
| REQ-005 | The system should show relevant travel results for valid search input | High | Core result of the travel planner |
| REQ-006 | The system should give clear feedback when required fields are missing | High | Important validation requirement |
| REQ-007 | The user should be able to understand search results, including time, route and changes | Medium | Testable, but readability and clarity can be subjective |
| REQ-008 | The user should be able to access help or supporting information | Medium | Testable if help function is visible and available |
| REQ-009 | The user should be able to print or save journey information if a print function exists | Medium | Testable after search results are shown |
| REQ-010 | The system should remain stable when invalid, unusual or long input is entered | High | Important negative testing area |

## 5. Requirement quality observations

| Area | Observation | Possible risk |
|---|---|---|
| Search input | It must be clear what counts as valid input | Testers may interpret expected behavior differently |
| Location suggestions | It should be defined how suggestions are sorted or prioritized | A result may appear wrong even if the system works as designed |
| Error messages | Expected validation messages should be clear | Missing or vague messages may reduce usability |
| Date and time | Expected behavior for past times, current time and future trips should be defined | Edge cases may be missed |
| Search results | It should be clear what information must be shown in each result | Important travel information may be incomplete or unclear |
| Print function | It should be clear what content should be included when printing | Print output may be difficult to evaluate without criteria |
| Map/navigation support | It should be clear whether map information is required or only supporting functionality | Medium-risk functions may be over- or under-prioritized |

## 6. Suggested acceptance criteria

### AC-001 – Valid journey search

Given that the user is on the travel planner page  
When the user enters a valid origin and destination and starts a search  
Then the system should display relevant travel results.

### AC-002 – Required fields

Given that the user is on the travel planner page  
When the user tries to search without required travel information  
Then the system should prevent the search and display a clear message explaining what is missing.

### AC-003 – Location suggestions

Given that the user starts typing a known location  
When matching locations are available  
Then the system should display relevant suggestions that the user can select.

### AC-004 – Selected location

Given that the user selects a suggested location  
When the selection is made  
Then the selected location should be clearly registered in the correct field.

### AC-005 – Search result clarity

Given that a valid search has been performed  
When travel results are displayed  
Then the user should be able to understand departure time, arrival time, route and important changes.

### AC-006 – Invalid input

Given that the user enters invalid or unusual input  
When the input cannot be matched to a valid location  
Then the system should handle the input safely and guide the user without crashing or selecting an incorrect location automatically.

## 7. Areas needing clarification

| Area | Question to clarify | Why it matters |
|---|---|---|
| Search fields | Which input formats should be accepted? | Affects positive and negative test cases |
| Empty fields | What exact message should be shown? | Affects validation testing |
| Suggestions | How many suggestions should be shown and in what order? | Affects expected results |
| Date/time | Should past times be accepted, adjusted or blocked? | Important boundary and edge case |
| Result page | Which information is mandatory in each search result? | Affects result verification |
| Print | What should the printed version contain? | Affects print testing |
| Map | Should both departure and arrival locations always be shown? | Affects map-related tests |

## 8. Impact on test design

The requirement review helps the test group create better test cases by identifying what needs to be verified and where expected behavior is unclear.

The most important impact on test design is that the group should include:

- Positive tests for the main search flow
- Negative tests for missing or invalid input
- Tests for suggestions and selected locations
- Tests for date and time behavior
- Tests for result clarity
- Tests for supporting functions such as help, print and map

## 9. Reflection

Requirement review is important because unclear requirements often lead to unclear testing.

In this project, the group has to work with assumed requirements based on the visible behavior of the travel planner. This makes it especially important to document assumptions, expected results and test limitations clearly.

A clearer set of requirements and acceptance criteria would make it easier to decide whether a behavior is a defect, an improvement suggestion or expected behavior.
