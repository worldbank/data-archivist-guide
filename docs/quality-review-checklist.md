---
title: Microdata Documentation Quality Review Checklist
description: A practical checklist for reviewing the completeness, consistency, quality, and usability of microdata metadata and supporting documentation.
---
# 7. Independent quality review

An independent review of the data and metadata is highly recommended prior to publishing the final output. There are two recommended methods to conduct a review.

### I. Metadata Editor Assessment Tool

The Metadata Editor is equipped with a built-in AI assisted metadata assessment tool to assess and improve project metadata when review is initiated. More information on the metadata review can be found in the documentation - see [Metadata reviewer.](https://worldbank.github.io/metadata-editor-docs/assess_metadata.html)


### II. Microdata Documentation Quality Review Checklist and Feedback Form

This checklist is designed to support the review of survey microdata documentation before publication, dissemination, or long-term preservation. It can be used to assess whether metadata prepared using the DDI-Codebook (DDI-C) and Dublin Core Metadata Initiative (DCMI) standards is complete, consistent, clear, and usable by data users, data catalogs, repositories, and AI-enabled discovery tools.

The checklist is organized around the main metadata sections commonly used to document microdata: **Document Description**, **Study Description**, **Data Files**, **Variables**, **Variable Groups**, and **External Resources**. A final section is included for reviewing the dataset landing page or repository record before publication. A downloadable, editable version is available [here](/media/microdata-documentation-quality-review-checklist-checkboxes.docx). 

### How to Use This Checklist

Use this checklist during metadata review to identify missing information, inconsistencies, unclear descriptions, formatting issues, and areas where additional documentation is needed. For each item, reviewers may indicate whether the required information is provided, partially provided, not provided, or not applicable, and may record comments and recommended actions.

Suggested review values:

- **Provided**: The information is complete and clear.
- **Partially provided**: Some information is available, but it is incomplete or unclear.
- **Not provided**: The information is missing.
- **Not applicable**: The item does not apply to the dataset or study being reviewed.

Suggested action values:

- **None**: No action is required.
- **Add**: Missing information should be added.
- **Fix**: Existing information should be corrected.
- **Check**: The information should be verified before publication.

---

#### Review Information

| Field | Details |
|---|---|
| Country |  |
| Language |  |
| Study title |  |
| Dataset ID |  |
| Dataset version |  |
| Submitted by |  |
| Date submitted |  |
| Metadata format provided | ☐ DDI XML  ☐ JSON/XML export  ☐ Metadata Editor project package  ☐ Other: |
| Data files provided | ☐ Yes  ☐ No |
| Supporting documentation provided | ☐ Yes  ☐ No |
| External resources provided | ☐ Yes  ☐ No |
| Reviewed by |  |
| Review date |  |
| Metadata standard(s) used | ☐ DDI-C  ☐ DCMI  ☐ Other: |
| Standard template used | ☐ Yes  ☐ No  ☐ Not applicable |
| New or revised metadata produced by reviewer | ☐ Yes  ☐ No |
| Name of revised metadata file, if applicable |  |

---

#### 1. Document Description

The **Document Description** section describes the metadata record itself. It should identify who produced the metadata, when it was created, the metadata version, and the unique identifier assigned to the metadata document.

| DDI element | Expected review criteria | Status | Reviewer comments | Action |
|---|---|---|---|---|
| Study title | Title is complete, correctly formatted, and consistent with the Study Description. | ☐ Provided ☐ Partially provided ☐ Not provided |  | ☐ None ☐ Add ☐ Fix ☐ Check |
| Metadata producer | Name and affiliation of the person or organization that produced the metadata are provided. | ☐ Provided ☐ Partially provided ☐ Not provided |  | ☐ None ☐ Add ☐ Fix ☐ Check |
| Date of production | Date is provided in a consistent format, preferably ISO format. | ☐ Provided ☐ Partially provided ☐ Not provided |  | ☐ None ☐ Add ☐ Fix ☐ Check |
| DDI document version | Metadata version is provided and follows the agreed versioning convention. | ☐ Provided ☐ Partially provided ☐ Not provided |  | ☐ None ☐ Add ☐ Fix ☐ Check |
| DDI document ID | Identifier is provided and is consistent with the Study Description ID, where applicable. | ☐ Provided ☐ Partially provided ☐ Not provided |  | ☐ None ☐ Add ☐ Fix ☐ Check |
| Revision history | Major changes to the metadata record are documented, where relevant. | ☐ Provided ☐ Partially provided ☐ Not provided ☐ Not applicable |  | ☐ None ☐ Add ☐ Fix ☐ Check |

---

#### 2. Study Description

The **Study Description** section captures information about the study as a whole, including its purpose, scope, methodology, coverage, producers, sponsors, data collection, data processing, data quality, access conditions, and citation requirements.

##### 2.1 Identification

| DDI element | Expected review criteria | Status | Reviewer comments | Action |
|---|---|---|---|---|
| Title | Full study title is provided, including reference year(s), and is written consistently. | ☐ Provided ☐ Partially provided ☐ Not provided |  | ☐ None ☐ Add ☐ Fix ☐ Check |
| Subtitle | Subtitle is provided only where needed and adds meaningful context. | ☐ Provided ☐ Partially provided ☐ Not provided ☐ Not applicable |  | ☐ None ☐ Add ☐ Fix ☐ Check |
| Abbreviation | Abbreviation is clear, standardized, and includes the reference year where appropriate. | ☐ Provided ☐ Partially provided ☐ Not provided ☐ Not applicable |  | ☐ None ☐ Add ☐ Fix ☐ Check |
| Study type | Study type is selected from a standard or controlled vocabulary, where available. | ☐ Provided ☐ Partially provided ☐ Not provided |  | ☐ None ☐ Add ☐ Fix ☐ Check |
| Series information | Series description explains objectives, ownership, scope, coverage, periodicity, and related rounds where applicable. | ☐ Provided ☐ Partially provided ☐ Not provided ☐ Not applicable |  | ☐ None ☐ Add ☐ Fix ☐ Check |
| Translated title | Translated title is included where relevant and special characters display correctly. | ☐ Provided ☐ Partially provided ☐ Not provided ☐ Not applicable |  | ☐ None ☐ Add ☐ Fix ☐ Check |
| ID number | Study ID is clear, unique, and follows the agreed naming convention. | ☐ Provided ☐ Partially provided ☐ Not provided |  | ☐ None ☐ Add ☐ Fix ☐ Check |

##### 2.2 Version

| DDI element | Expected review criteria | Status | Reviewer comments | Action |
|---|---|---|---|---|
| Version description | Dataset version is clearly described and follows a standard naming convention. | ☐ Provided ☐ Partially provided ☐ Not provided |  | ☐ None ☐ Add ☐ Fix ☐ Check |
| Production date | Production date is provided in a consistent format, preferably ISO format. | ☐ Provided ☐ Partially provided ☐ Not provided |  | ☐ None ☐ Add ☐ Fix ☐ Check |
| Version notes | Notes explain what distinguishes this version from previous or future versions. | ☐ Provided ☐ Partially provided ☐ Not provided ☐ Not applicable |  | ☐ None ☐ Add ☐ Fix ☐ Check |

##### 2.3 Overview and Scope

| DDI element | Expected review criteria | Status | Reviewer comments | Action |
|---|---|---|---|---|
| Abstract | Abstract clearly summarizes study objectives, scope, coverage, methodology, and key context. | ☐ Provided ☐ Partially provided ☐ Not provided |  | ☐ None ☐ Add ☐ Fix ☐ Check |
| Kind of data | Kind of data is selected from a standard or controlled vocabulary, where available. | ☐ Provided ☐ Partially provided ☐ Not provided |  | ☐ None ☐ Add ☐ Fix ☐ Check |
| Unit of analysis | Unit(s) of analysis are clearly stated, such as household, person, enterprise, school, facility, or plot. | ☐ Provided ☐ Partially provided ☐ Not provided |  | ☐ None ☐ Add ☐ Fix ☐ Check |
| Description of scope | Main topics, questionnaire modules, and analytical coverage are clearly described. | ☐ Provided ☐ Partially provided ☐ Not provided |  | ☐ None ☐ Add ☐ Fix ☐ Check |
| Keywords | Keywords are relevant, consistently formatted, and preferably based on a controlled vocabulary. | ☐ Provided ☐ Partially provided ☐ Not provided |  | ☐ None ☐ Add ☐ Fix ☐ Check |
| Topics classification | Topic classifications are relevant and preferably based on a controlled vocabulary. | ☐ Provided ☐ Partially provided ☐ Not provided |  | ☐ None ☐ Add ☐ Fix ☐ Check |

##### 2.4 Coverage

| DDI element | Expected review criteria | Status | Reviewer comments | Action |
|---|---|---|---|---|
| Country | Country name is provided in full and is consistently formatted. | ☐ Provided ☐ Partially provided ☐ Not provided |  | ☐ None ☐ Add ☐ Fix ☐ Check |
| Geographic coverage | Geographic coverage is clear and states any exclusions or limitations. | ☐ Provided ☐ Partially provided ☐ Not provided |  | ☐ None ☐ Add ☐ Fix ☐ Check |
| Universe | Target population is clearly described and does not rely on overly broad terms unless accurate. | ☐ Provided ☐ Partially provided ☐ Not provided |  | ☐ None ☐ Add ☐ Fix ☐ Check |
| Temporal coverage | Reference period or time period covered by the data is documented where relevant. | ☐ Provided ☐ Partially provided ☐ Not provided ☐ Not applicable |  | ☐ None ☐ Add ☐ Fix ☐ Check |

##### 2.5 Producers and Sponsors

| DDI element | Expected review criteria | Status | Reviewer comments | Action |
|---|---|---|---|---|
| Primary investigator | Main agency or organization responsible for the study is identified. | ☐ Provided ☐ Partially provided ☐ Not provided |  | ☐ None ☐ Add ☐ Fix ☐ Check |
| Other producers | Co-producers or implementing partners are identified where applicable. | ☐ Provided ☐ Partially provided ☐ Not provided ☐ Not applicable |  | ☐ None ☐ Add ☐ Fix ☐ Check |
| Funding | Funding agencies, donors, and in-kind contributors are documented where applicable. | ☐ Provided ☐ Partially provided ☐ Not provided ☐ Not applicable |  | ☐ None ☐ Add ☐ Fix ☐ Check |
| Acknowledgments | Technical contributors, advisory groups, or other important contributors are acknowledged where appropriate. | ☐ Provided ☐ Partially provided ☐ Not provided ☐ Not applicable |  | ☐ None ☐ Add ☐ Fix ☐ Check |

##### 2.6 Sampling

| DDI element | Expected review criteria | Status | Reviewer comments | Action |
|---|---|---|---|---|
| Sampling procedure | Sampling design, sample size, stratification, sample frame, replacement policy, and key sample variables are described. | ☐ Provided ☐ Partially provided ☐ Not provided ☐ Not applicable |  | ☐ None ☐ Add ☐ Fix ☐ Check |
| Deviation from sample design | Differences between planned and actual sample design are documented. | ☐ Provided ☐ Partially provided ☐ Not provided ☐ Not applicable |  | ☐ None ☐ Add ☐ Fix ☐ Check |
| Response rates | Response rates are documented clearly and disaggregated where relevant. | ☐ Provided ☐ Partially provided ☐ Not provided ☐ Not applicable |  | ☐ None ☐ Add ☐ Fix ☐ Check |
| Weighting | Weight variables and weighting methodology are described, or self-weighting is explicitly stated. | ☐ Provided ☐ Partially provided ☐ Not provided ☐ Not applicable |  | ☐ None ☐ Add ☐ Fix ☐ Check |

##### 2.7 Data Collection

| DDI element | Expected review criteria | Status | Reviewer comments | Action |
|---|---|---|---|---|
| Dates of data collection | Data collection dates are provided in a consistent format, preferably ISO format. | ☐ Provided ☐ Partially provided ☐ Not provided |  | ☐ None ☐ Add ☐ Fix ☐ Check |
| Time periods | Time periods covered by the data are documented where relevant. | ☐ Provided ☐ Partially provided ☐ Not provided ☐ Not applicable |  | ☐ None ☐ Add ☐ Fix ☐ Check |
| Mode of data collection | Data collection mode is clearly identified, such as face-to-face, telephone, web, CAPI, CATI, CAWI, or mixed mode. | ☐ Provided ☐ Partially provided ☐ Not provided |  | ☐ None ☐ Add ☐ Fix ☐ Check |
| Notes on data collection | Fieldwork organization, training, supervision, and notable implementation issues are documented. | ☐ Provided ☐ Partially provided ☐ Not provided |  | ☐ None ☐ Add ☐ Fix ☐ Check |
| Questionnaires | Questionnaire titles, versions, languages, and content are documented. | ☐ Provided ☐ Partially provided ☐ Not provided |  | ☐ None ☐ Add ☐ Fix ☐ Check |
| Data collectors | Organizations responsible for data collection are identified where relevant. | ☐ Provided ☐ Partially provided ☐ Not provided ☐ Not applicable |  | ☐ None ☐ Add ☐ Fix ☐ Check |
| Supervision | Field supervision structure and quality control mechanisms are described. | ☐ Provided ☐ Partially provided ☐ Not provided ☐ Not applicable |  | ☐ None ☐ Add ☐ Fix ☐ Check |

##### 2.8 Data Processing and Appraisal

| DDI element | Expected review criteria | Status | Reviewer comments | Action |
|---|---|---|---|---|
| Data editing | Data editing methods, software, checks, and related documentation are described. | ☐ Provided ☐ Partially provided ☐ Not provided ☐ Not applicable |  | ☐ None ☐ Add ☐ Fix ☐ Check |
| Other processing | Data entry, cleaning, anonymization, tabulation, analysis, and processing workflows are documented where relevant. | ☐ Provided ☐ Partially provided ☐ Not provided ☐ Not applicable |  | ☐ None ☐ Add ☐ Fix ☐ Check |
| Sampling errors | Sampling error estimates, variance estimation methods, and related documentation are described where applicable. | ☐ Provided ☐ Partially provided ☐ Not provided ☐ Not applicable |  | ☐ None ☐ Add ☐ Fix ☐ Check |
| Other data appraisal | Other data quality assessments, validation checks, limitations, and known issues are documented. | ☐ Provided ☐ Partially provided ☐ Not provided ☐ Not applicable |  | ☐ None ☐ Add ☐ Fix ☐ Check |

##### 2.9 Data Access, Rights, and Contacts

| DDI element | Expected review criteria | Status | Reviewer comments | Action |
|---|---|---|---|---|
| Access authority | Organization or role responsible for granting data access is identified. | ☐ Provided ☐ Partially provided ☐ Not provided |  | ☐ None ☐ Add ☐ Fix ☐ Check |
| Confidentiality | Confidentiality statement is provided and is appropriate for the access level and sensitivity of the data. | ☐ Provided ☐ Partially provided ☐ Not provided |  | ☐ None ☐ Add ☐ Fix ☐ Check |
| Access conditions | Terms of access are clearly stated, such as public use, licensed use, restricted access, or confidential. | ☐ Provided ☐ Partially provided ☐ Not provided |  | ☐ None ☐ Add ☐ Fix ☐ Check |
| Citation requirements | Recommended citation includes study title, producer, country, reference year, version, and access location where applicable. | ☐ Provided ☐ Partially provided ☐ Not provided |  | ☐ None ☐ Add ☐ Fix ☐ Check |
| Disclaimer | Disclaimer is provided where appropriate and is consistent with organizational requirements. | ☐ Provided ☐ Partially provided ☐ Not provided ☐ Not applicable |  | ☐ None ☐ Add ☐ Fix ☐ Check |
| Copyright | Copyright or rights statement is provided where appropriate. | ☐ Provided ☐ Partially provided ☐ Not provided ☐ Not applicable |  | ☐ None ☐ Add ☐ Fix ☐ Check |
| Contact persons | Contact role, unit, or organization is provided for questions about the study or access process. | ☐ Provided ☐ Partially provided ☐ Not provided ☐ Not applicable |  | ☐ None ☐ Add ☐ Fix ☐ Check |

---

#### 3. Data Files

The **Data Files** section reviews the physical data files included in the dataset. It checks whether file-level metadata is complete, whether files are listed logically, and whether relationships between files are documented and validated.

##### 3.1 File Checks

| Item | Expected review criteria | Status | Reviewer comments | Action |
|---|---|---|---|---|
| Order of appearance | Data files are listed in a logical order, such as household before individual files or questionnaire section order. | ☐ Yes ☐ No ☐ Not applicable |  | ☐ None ☐ Fix ☐ Check |
| File relationships | Key variables and relationships between files are documented and validated using statistical software, data processing tools, or metadata validation tools. | ☐ Yes ☐ No ☐ Not applicable |  | ☐ None ☐ Add ☐ Fix ☐ Check |
| Completeness | Data files are available for all relevant questionnaire sections and derived datasets. | ☐ Yes ☐ No ☐ Not applicable |  | ☐ None ☐ Fix ☐ Check |
| File structure | Record counts, variable counts, file format, and structure are documented where relevant. | ☐ Yes ☐ No ☐ Not applicable |  | ☐ None ☐ Add ☐ Fix ☐ Check |
| File naming | File names are clear, stable, and consistent with agreed naming conventions. | ☐ Yes ☐ No ☐ Not applicable |  | ☐ None ☐ Fix ☐ Check |

##### 3.2 File Description

| DDI element | Expected review criteria | Status | Reviewer comments | Action |
|---|---|---|---|---|
| Name | File name matches the data file and should not be changed unless necessary. | ☐ All ☐ Some ☐ None |  | ☐ None ☐ Fix ☐ Check |
| Content | Short description explains what the file contains and links it to questionnaire sections where applicable. | ☐ All ☐ Some ☐ None |  | ☐ None ☐ Add ☐ Fix ☐ Check |
| Producer | File producer is identified, typically the same as the study producer unless otherwise specified. | ☐ All ☐ Some ☐ None |  | ☐ None ☐ Add ☐ Fix ☐ Check |
| Version | File version is documented where file-level versioning is used. | ☐ All ☐ Some ☐ None ☐ Not applicable |  | ☐ None ☐ Add ☐ Fix ☐ Check |
| Processing checks | File-level editing, validation, consistency checks, and quality review procedures are documented where relevant. | ☐ All ☐ Some ☐ None ☐ Not applicable |  | ☐ None ☐ Add ☐ Fix ☐ Check |
| Missing data | File-level missing data conventions are documented where relevant. | ☐ All ☐ Some ☐ None ☐ Not applicable |  | ☐ None ☐ Add ☐ Fix ☐ Check |
| Notes | File-specific notes, limitations, caveats, or special handling instructions are provided where relevant. | ☐ All ☐ Some ☐ None ☐ Not applicable |  | ☐ None ☐ Add ☐ Fix ☐ Check |

---

#### 4. Variables

The **Variables** section reviews variable-level metadata, including variable names, labels, categories, question text, universe statements, missing values, derivation logic, and data quality indicators.

##### 4.1 Variable Checks

| Item | Expected review criteria | Status | Reviewer comments | Action |
|---|---|---|---|---|
| Variable names | Variable names are stable, clear, and do not contain unsupported characters. | ☐ All ☐ Some ☐ None |  | ☐ None ☐ Fix ☐ Check |
| Variable labels | All variables have unique, clear, and descriptive labels. | ☐ All ☐ Some ☐ None |  | ☐ None ☐ Add ☐ Fix ☐ Check |
| Categories | Categorical variables have complete and clear value labels. | ☐ All ☐ Some ☐ None ☐ Not applicable |  | ☐ None ☐ Add ☐ Fix ☐ Check |
| Statistics options | Summary statistics are appropriate for the variable type and do not produce unnecessary outputs for IDs or other non-analytical variables. | ☐ All ☐ Some ☐ None ☐ Not applicable |  | ☐ None ☐ Add ☐ Fix ☐ Check |
| Weights | Appropriate weights are applied or documented where relevant. | ☐ All ☐ Some ☐ None ☐ Not applicable |  | ☐ None ☐ Add ☐ Fix ☐ Check |
| Data type | Data types are correct and appropriate for the values stored in each variable. | ☐ All ☐ Some ☐ None |  | ☐ None ☐ Fix ☐ Check |
| Measure | Measurement level is appropriate, such as nominal, ordinal, interval, or ratio. | ☐ All ☐ Some ☐ None |  | ☐ None ☐ Add ☐ Fix ☐ Check |
| Time variable | Time variables are correctly identified where applicable. | ☐ All ☐ Some ☐ None ☐ Not applicable |  | ☐ None ☐ Add ☐ Fix ☐ Check |
| Min and max values | Minimum and maximum values are documented and checked for out-of-range values where data are available. | ☐ All ☐ Some ☐ None ☐ Not applicable |  | ☐ None ☐ Add ☐ Fix ☐ Check |
| Decimals | Decimal settings are appropriate and consistent with the data. | ☐ All ☐ Some ☐ None ☐ Not applicable |  | ☐ None ☐ Add ☐ Fix ☐ Check |
| Missing data | Missing values are documented consistently and are not confused with valid response categories. | ☐ All ☐ Some ☐ None ☐ Not applicable |  | ☐ None ☐ Add ☐ Fix ☐ Check |

##### 4.2 Variable Description

| DDI element | Expected review criteria | Status | Reviewer comments | Action |
|---|---|---|---|---|
| Definition | Definitions are provided for key concepts, derived variables, and variables that require clarification. | ☐ All ☐ Some ☐ None ☐ Not applicable |  | ☐ None ☐ Add ☐ Fix ☐ Check |
| Universe | Universe is specified for variables where the population or skip pattern is restricted. | ☐ All ☐ Some ☐ None ☐ Not applicable |  | ☐ None ☐ Add ☐ Fix ☐ Check |
| Source of information | Source is documented where relevant, such as respondent, household head, administrative record, or derived source. | ☐ All ☐ Some ☐ None ☐ Not applicable |  | ☐ None ☐ Add ☐ Fix ☐ Check |
| Concepts | Concepts are documented where defined in questionnaires, manuals, or methodological documents. | ☐ All ☐ Some ☐ None ☐ Not applicable |  | ☐ None ☐ Add ☐ Fix ☐ Check |

##### 4.3 Questions and Instructions

| DDI element | Expected review criteria | Status | Reviewer comments | Action |
|---|---|---|---|---|
| Pre-question text | Instructions appearing before the question are captured where applicable. | ☐ All ☐ Some ☐ None ☐ Not applicable |  | ☐ None ☐ Add ☐ Fix ☐ Check |
| Literal question | Exact question text is attached to the corresponding variable where available. | ☐ All ☐ Some ☐ None ☐ Not applicable |  | ☐ None ☐ Add ☐ Fix ☐ Check |
| Post-question text | Instructions appearing after the question, including skip instructions, are captured where applicable. | ☐ All ☐ Some ☐ None ☐ Not applicable |  | ☐ None ☐ Add ☐ Fix ☐ Check |
| Interviewer instructions | Relevant interviewer instructions from questionnaires or manuals are documented. | ☐ All ☐ Some ☐ None ☐ Not applicable |  | ☐ None ☐ Add ☐ Fix ☐ Check |

##### 4.4 Imputation, Derivation, Security, and Notes

| DDI element | Expected review criteria | Status | Reviewer comments | Action |
|---|---|---|---|---|
| Imputation | Imputation methods are documented for variables where values were imputed. | ☐ All ☐ Some ☐ None ☐ Not applicable |  | ☐ None ☐ Add ☐ Fix ☐ Check |
| Recoding and derivation | Recoding and derivation logic is documented for calculated or transformed variables. | ☐ All ☐ Some ☐ None ☐ Not applicable |  | ☐ None ☐ Add ☐ Fix ☐ Check |
| Security | Confidentiality or sensitivity indicators are documented where relevant. | ☐ All ☐ Some ☐ None ☐ Not applicable |  | ☐ None ☐ Add ☐ Fix ☐ Check |
| Notes | Variable-specific notes provide useful clarification, caveats, or known limitations. | ☐ All ☐ Some ☐ None ☐ Not applicable |  | ☐ None ☐ Add ☐ Fix ☐ Check |

---

#### 5. Variable Groups

The **Variable Groups** section is optional and is used to organize variables into logical, thematic, or hierarchical groups without changing the underlying data files.

| Item | Expected review criteria | Status | Reviewer comments | Action |
|---|---|---|---|---|
| Variable groups | Variable groups are provided where useful for navigation, discovery, or thematic organization. | ☐ Provided ☐ Partially provided ☐ Not provided ☐ Not applicable |  | ☐ None ☐ Add ☐ Fix ☐ Check |
| Coverage | Groups cover all relevant variables or clearly indicate why only selected variables are grouped. | ☐ Provided ☐ Partially provided ☐ Not provided ☐ Not applicable |  | ☐ None ☐ Add ☐ Fix ☐ Check |
| Group labels | Group labels are clear, concise, and meaningful to data users. | ☐ Provided ☐ Partially provided ☐ Not provided ☐ Not applicable |  | ☐ None ☐ Add ☐ Fix ☐ Check |
| Group structure | Hierarchical or thematic structures are logical and consistent. | ☐ Provided ☐ Partially provided ☐ Not provided ☐ Not applicable |  | ☐ None ☐ Add ☐ Fix ☐ Check |

---

#### 6. External Resources

The **External Resources** section reviews supporting documentation and related materials described using DCMI metadata elements. External resources may include questionnaires, manuals, reports, scripts, maps, presentations, publications, methodological documents, anonymization reports, and other materials that help users understand and use the data.

##### 6.1 External Resource Checks

| Item | Expected review criteria | Status | Reviewer comments | Action |
|---|---|---|---|---|
| Questionnaires | All questionnaire versions are provided in PDF and, where available, original editable formats. | ☐ Yes ☐ No ☐ Not applicable |  | ☐ None ☐ Add ☐ Fix ☐ Check |
| Supporting documentation | Relevant technical, methodological, administrative, and analytical documentation is provided. | ☐ Yes ☐ No ☐ Not applicable |  | ☐ None ☐ Add ☐ Fix ☐ Check |
| Programs and scripts | Data entry, editing, anonymization, tabulation, and analysis scripts are preserved where available. | ☐ All ☐ Some ☐ None ☐ Not applicable |  | ☐ None ☐ Add ☐ Fix ☐ Check |
| Survey reports | Survey reports and key analytical outputs are provided in PDF and, where available, original editable formats. | ☐ Yes ☐ No ☐ Not applicable |  | ☐ None ☐ Add ☐ Fix ☐ Check |
| Links | All links to external resources are valid and use stable or relative paths where appropriate. | ☐ All ☐ Some ☐ None ☐ Not applicable |  | ☐ None ☐ Add ☐ Fix ☐ Check |
| Resource labels | Each external resource has a short, explicit, and user-friendly label. | ☐ All ☐ Some ☐ None |  | ☐ None ☐ Add ☐ Fix ☐ Check |
| File formats | Preservation and access formats are appropriate, readable, and documented. | ☐ All ☐ Some ☐ None |  | ☐ None ☐ Add ☐ Fix ☐ Check |

##### 6.2 Identification

| DCMI element | Expected review criteria | Status | Reviewer comments | Action |
|---|---|---|---|---|
| Type | Resource type is indicated using a standard or controlled vocabulary where available. | ☐ All ☐ Some ☐ None |  | ☐ None ☐ Add ☐ Fix ☐ Check |
| Title | Resource title matches the cover page or clearly describes the content. | ☐ All ☐ Some ☐ None |  | ☐ None ☐ Add ☐ Fix ☐ Check |
| Subtitle | Subtitle is included where applicable and matches the resource. | ☐ All ☐ Some ☐ None ☐ Not applicable |  | ☐ None ☐ Add ☐ Fix ☐ Check |
| Author or creator | Person, agency, or organization responsible for creating the resource is identified. | ☐ All ☐ Some ☐ None |  | ☐ None ☐ Add ☐ Fix ☐ Check |
| Date | Date is provided at least to month and year where available. | ☐ All ☐ Some ☐ None |  | ☐ None ☐ Add ☐ Fix ☐ Check |
| Country | Country or geographic relevance is documented where applicable. | ☐ All ☐ Some ☐ None ☐ Not applicable |  | ☐ None ☐ Add ☐ Fix ☐ Check |
| Language | Language is documented for documents and other language-dependent resources. | ☐ All ☐ Some ☐ None ☐ Not applicable |  | ☐ None ☐ Add ☐ Fix ☐ Check |
| Format | File format is documented, such as PDF, DOCX, XLSX, CSV, DO, R, PY, JPG, PNG, or ZIP. | ☐ All ☐ Some ☐ None |  | ☐ None ☐ Add ☐ Fix ☐ Check |
| Identifier | Resource identifier is provided where available or needed for traceability. | ☐ All ☐ Some ☐ None ☐ Not applicable |  | ☐ None ☐ Add ☐ Fix ☐ Check |

##### 6.3 Contributors and Rights

| DCMI element | Expected review criteria | Status | Reviewer comments | Action |
|---|---|---|---|---|
| Contributors | Contributors are documented where relevant. | ☐ All ☐ Some ☐ None ☐ Not applicable |  | ☐ None ☐ Add ☐ Fix ☐ Check |
| Publisher | Publisher or issuing organization is documented where relevant. | ☐ All ☐ Some ☐ None ☐ Not applicable |  | ☐ None ☐ Add ☐ Fix ☐ Check |
| Rights | Rights, license, use conditions, or access restrictions are documented where relevant. | ☐ All ☐ Some ☐ None ☐ Not applicable |  | ☐ None ☐ Add ☐ Fix ☐ Check |

##### 6.4 Content

| DCMI element | Expected review criteria | Status | Reviewer comments | Action |
|---|---|---|---|---|
| Description | Resource description clearly explains the content and purpose of the resource. | ☐ All ☐ Some ☐ None |  | ☐ None ☐ Add ☐ Fix ☐ Check |
| Abstract | Abstract is provided for documents where useful. | ☐ All ☐ Some ☐ None ☐ Not applicable |  | ☐ None ☐ Add ☐ Fix ☐ Check |
| Table of contents | Table of contents is provided where useful and does not need to include page numbers. | ☐ All ☐ Some ☐ None ☐ Not applicable |  | ☐ None ☐ Add ☐ Fix ☐ Check |
| Subjects | Subjects or keywords are relevant and preferably based on a controlled vocabulary. | ☐ All ☐ Some ☐ None ☐ Not applicable |  | ☐ None ☐ Add ☐ Fix ☐ Check |

---

#### 7. Data Catalog / Repository Review

This section replaces legacy media-focused checks and supports review of the online dataset landing page, repository record, or catalog display before publication.

| Item | Expected review criteria | Status | Reviewer comments | Action |
|---|---|---|---|---|
| Dataset landing page | Landing page displays the study title, abstract, citation, access information, and key metadata clearly. | ☐ Yes ☐ No ☐ Not applicable |  | ☐ None ☐ Add ☐ Fix ☐ Check |
| Branding and ownership | Responsible organization or publisher is clearly identified. | ☐ Yes ☐ No ☐ Not applicable |  | ☐ None ☐ Fix ☐ Check |
| Metadata display | Metadata displays correctly and special characters render properly. | ☐ Yes ☐ No ☐ Not applicable |  | ☐ None ☐ Fix ☐ Check |
| Downloads and access links | Data, documentation, and external resource links are functional and point to the correct files. | ☐ All ☐ Some ☐ None ☐ Not applicable |  | ☐ None ☐ Add ☐ Fix ☐ Check |
| Searchability | Dataset can be discovered using title, country, year, topics, keywords, and other relevant metadata. | ☐ Yes ☐ No ☐ Not applicable |  | ☐ None ☐ Add ☐ Fix ☐ Check |
| Persistent links | Stable URLs, persistent identifiers, or catalog links are provided where applicable. | ☐ Yes ☐ No ☐ Not applicable |  | ☐ None ☐ Add ☐ Fix ☐ Check |
| Accessibility | Documents and catalog pages are readable, accessible, and usable by intended audiences. | ☐ Yes ☐ No ☐ Not applicable |  | ☐ None ☐ Fix ☐ Check |
| AI readiness | Metadata is sufficiently descriptive and structured to support machine indexing, search, and AI-enabled discovery. | ☐ Yes ☐ No ☐ Not applicable |  | ☐ None ☐ Add ☐ Fix ☐ Check |

---

#### 8. Overall Metadata Quality Review

Use this section to summarize cross-cutting quality issues that may affect the usability, interoperability, preservation, or dissemination of the dataset.

| Quality dimension | Review question | Assessment | Reviewer comments | Action |
|---|---|---|---|---|
| Completeness | Are the required metadata sections sufficiently completed? | ☐ Good ☐ Partial ☐ Needs work |  | ☐ None ☐ Add ☐ Fix ☐ Check |
| Consistency | Are titles, IDs, dates, versions, producers, and access statements consistent across sections? | ☐ Good ☐ Partial ☐ Needs work |  | ☐ None ☐ Add ☐ Fix ☐ Check |
| Clarity | Is the metadata clear, understandable, and useful to data users? | ☐ Good ☐ Partial ☐ Needs work |  | ☐ None ☐ Add ☐ Fix ☐ Check |
| Data quality documentation | Are processing, validation, missing data, and data appraisal information adequately documented? | ☐ Good ☐ Partial ☐ Needs work |  | ☐ None ☐ Add ☐ Fix ☐ Check |
| Reproducibility | Are derivations, transformations, scripts, and processing steps documented in enough detail to support reproducibility? | ☐ Good ☐ Partial ☐ Needs work |  | ☐ None ☐ Add ☐ Fix ☐ Check |
| Interoperability | Does the metadata follow relevant DDI-C and DCMI conventions consistently? | ☐ Good ☐ Partial ☐ Needs work |  | ☐ None ☐ Add ☐ Fix ☐ Check |
| Preservation | Are original files, preservation formats, and supporting documentation sufficiently retained? | ☐ Good ☐ Partial ☐ Needs work |  | ☐ None ☐ Add ☐ Fix ☐ Check |
| Discoverability | Can users and systems find the dataset using meaningful topics, keywords, coverage, and descriptions? | ☐ Good ☐ Partial ☐ Needs work |  | ☐ None ☐ Add ☐ Fix ☐ Check |

---

#### Reviewer Summary and Recommendations <br><br>

##### Overall Assessment

☐ Ready for publication  
☐ Ready after minor corrections  
☐ Requires substantial revision before publication  
☐ Not ready for publication  

##### Summary of Main Issues <br><br>

<!-- Add a concise summary of the main documentation issues identified during review. -->


##### Required Corrections <br><br>

<!-- List corrections that must be completed before publication. -->


##### Recommended Improvements <br><br>

<!-- List improvements that would strengthen documentation quality but are not blockers. -->


##### Reviewer Notes <br><br>

<!-- Add any additional notes, observations, or follow-up recommendations. -->


---

### Optional Reviewer Sign-off

| Field | Details |
|---|---|
| Reviewer name |  |
| Reviewer role/unit |  |
| Review completed on |  |
| Final recommendation |  |
| Follow-up required | ☐ Yes  ☐ No |
| Follow-up owner |  |
