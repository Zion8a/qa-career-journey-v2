# Test Summary Report – Blekingetrafiken Travel Planner

## 1. Purpose

This document summarizes the test execution, findings, risks and quality assessment from the practical test project for Blekingetrafiken's web-based travel planner.

The report is intended to communicate the outcome of the testing in a clear and structured way.

## 2. Test object

Blekingetrafiken travel planner:

```text
https://blekingetrafiken.se/reseinformation/sok-resa/
```

## 3. Test objective

The main objective of the testing was to identify serious problems that may affect users when searching for, planning and understanding a journey in the travel planner.

The testing focused on user-facing functionality in the web interface.

## 4. Scope of testing

The testing included the following areas:

- Search fields
- From and To location input
- Search suggestions
- Search button and validation
- Date and time selection
- Departure and arrival options
- Return trip functionality
- Search results
- Technical journey details
- Help function
- Print function
- Map and navigation-related functions
- Language selection
- Travel preferences

## 5. Out of scope

The following areas were not included in the test project:

- Backend testing
- API testing
- Load and performance testing
- Security testing
- Full accessibility audit
- Full cross-browser and cross-device testing
- Testing of all possible routes and travel combinations

## 6. Test approach

The testing was performed using a combination of:

- Area tour
- Manual functional testing
- Exploratory testing
- Structured test cases
- Negative testing
- Risk-based prioritization
- Regression test selection

Reqtest was used for test suites, test cases, test execution and bug reporting.

## 7. Test execution summary

> To be updated after test execution in Reqtest.

| Metric | Result |
|---|---|
| Total number of test cases created | To be added |
| Number of test cases executed | To be added |
| Passed | To be added |
| Failed | To be added |
| Blocked | To be added |
| Not run | To be added |
| Number of reported bugs | To be added |
| Number of regression tests selected | To be added |

## 8. Test results by area

> To be updated after test execution.

| Test area | Result | Notes |
|---|---|---|
| Search fields | To be added | To be added |
| Result page | To be added | To be added |
| Technical details | To be added | To be added |
| Departure/arrival and return trip | To be added | To be added |
| Language selection | To be added | To be added |
| Other buttons and links | To be added | To be added |
| Change travel preferences | To be added | To be added |

## 9. Bug summary

> To be updated when defects have been reported in Reqtest.

| Severity | Number of bugs | Comment |
|---|---|---|
| Critical | To be added | To be added |
| High | To be added | To be added |
| Medium | To be added | To be added |
| Low | To be added | To be added |

## 10. Main findings

> To be updated after test execution.

Examples of findings to document here:

- Important functionality that worked as expected
- Defects that affected the main user flow
- Areas where the system behaved inconsistently
- Usability issues or unclear feedback
- Areas that need further testing

## 11. Quality assessment

> To be completed after test execution.

Based on the executed tests, the quality of the travel planner should be assessed in relation to the main user flow:

1. Can the user enter origin and destination?
2. Can the user select valid suggestions?
3. Can the user start a search?
4. Are the results understandable?
5. Does the system give clear feedback when something goes wrong?

A final quality assessment should include whether the system appears stable enough for the tested user flows and which risks remain.

## 12. Regression test suite

A smaller regression test suite has been selected to cover the most important user flows.

The regression suite focuses on:

- Entering valid and invalid search input
- Selecting suggestions
- Starting a search
- Verifying result-related functions
- Checking supporting functions such as print and map

See:

```text
regression-suite.md
```

## 13. Risks and limitations

The test results should be interpreted with the following limitations in mind:

- Testing was limited to selected areas of the travel planner
- Testing was performed manually
- Not all browsers, devices or routes were tested
- Some results may depend on live data, timetable data or external services
- The project was limited by time and course scope

## 14. Recommended next steps

Recommended next steps for the website may include:

- Fix confirmed defects found during testing
- Retest fixed bugs
- Execute the regression test suite after changes
- Improve unclear validation or error messages
- Continue testing on additional browsers and mobile devices
- Perform more detailed accessibility testing
- Consider future automation of the most important regression tests

## 15. Lessons learned

> To be updated at the end of the project.

Examples of reflections to include:

- What the group learned about test planning
- What was difficult when writing test cases
- What was challenging during test execution
- How Reqtest supported or limited the work
- How the group improved communication and prioritization

## 16. Conclusion

> To be completed after test execution and bug reporting.

The final conclusion should summarize whether the tested parts of the travel planner appear to support the main user needs, what serious issues were found and what should be prioritized next.
