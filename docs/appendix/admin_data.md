# Documenting Administrative Microdata Using DDI-Codebook


## Purpose

Administrative data consist of records collected and maintained by government agencies and other organizations as part of routine operations. When processed at the level of individuals, households, businesses, facilities, transactions, or events, these records constitute administrative microdata.

The goal of documentation is to enable users to:

- Understand the purpose and operational context of the data.
- Identify the populations, units, geographic areas, and periods represented.
- Understand source programs, systems, and data-capture processes.
- Interpret variables consistently and correctly.
- Assess data fitness for use.
- Understand quality limitations and processing history.
- Support discovery, preservation, interoperability, and reuse.

## Recommended Documentation Components

| DDI Element | Purpose | Example |
|-------------|---------|---------|
| abstract; purpose | Describe administrative program, provenance, and analytical context. | National cash transfer records prepared for research use. |
| producer; AuthEnty; dataColl/sources | Identify originating organizations and systems. | Ministry of Social Protection; National Cash Transfer MIS. |
| universe; anlyUnit; timePrd; geogCover | Define coverage. | Registered beneficiary households nationwide, 2020–2024. |
| sampProc; universe; notes | Document cohort selection rules. | Beneficiaries with at least one payment. |
| fileDscr elements | Describe data files. | One record per beneficiary. |
| var elements | Describe variables. | benefit_status: 0=No, 1=Yes. |
| location; varFormat | Document physical structure. | Position 21, width 8. |
| method; dataColl; notes | Describe quality and processing. | Linked using beneficiary ID. |
| setAvail; restrctn | Describe access conditions. | Licensed access. |
| otherMat; relMat | Document supporting resources. | Program manuals and scripts. |
| verStmt; version | Document versioning and lineage. | Version 2.0. |

---

# 1. Study Description

**Relevant DDI Area:** `stdyDscr`

The Study Description provides the context needed to understand why the records were created, how the documented data product was produced, and how it may be used.

| DDI Element | Purpose | Example |
|-------------|---------|---------|
| `titlStmt/titl` | Records the official title of the dataset or study. | National Social Assistance Beneficiaries Database, 2024 |
| `IDNo` | Unique identifier. | TZA_2024_MSP-NSAB_v01_M |
| `abstract` | Summarize the content, coverage, and context of the data product. | Administrative records documenting beneficiaries of the national cash transfer program. |
| `purpose` | Explain why the records were originally collected and why the documented dataset was created. | To administer social assistance payments and support program monitoring. |
| `dataKind` | Type of data. | Administrative records |
| `producer` | Identify the organization responsible for producing or maintaining the dataset. | Ministry of Social Protection |
| `version` | Document the version number and associated release information. | Version 1.0 (August 2026) |
| `citation` | Specify the recommended citation for users. | Official citation statement e.g. Ministry of Social Protection. National Social Assistance Beneficiaries Database 2024.| 
| `keyword`; `topcClas` | Provide keywords or topics to support discovery. | Social protection; poverty |
| `nation` | Document the geographic representation. | Tanzania|

---

# 2. Administrative Data Source Description

**Relevant DDI Areas:** `sumDscr`, `dataColl`, `citation/prodStmt`

Create a separate source description for every administrative system contributing data.

| DDI Element | Purpose | Example |
|-------------|---------|---------|
| `AuthEnty` | Identify the organization responsible for collecting or maintaining the source records. | Ministry of Social Protection |
| `dataColl/sources` | Identify the originating program, register, information system, claims database, or operational source. | National Cash Transfer Management Information System (MIS) |
| `collMode` | Describe how data enter the system.| Caseworker entry through a web-based management system |
| `software` | Document the system or platform used. | Social Protection MIS v4.2 |
| `timeMeth` | Document the recording method. | Continuous transaction recording |
| `frequenc` | Describe how often information is updated. | Monthly |
| `contact` | Identify the organization responsible for maintaining the source system. | Information Systems Unit |
| `notes` | Document any source-specific limitations. | Historical paper records migrated |

::: tip System Name vs Software
Use the source description to document the administrative program or information system. Use `software` to identify the application or platform when relevant.
:::

---

# 3. Coverage and Population Metadata

**Relevant DDI Elements:** `universe`, `anlyUnit`, `timePrd`, `geogCover`, `dataKind`

| DDI Element | Purpose | Example |
|-------------|---------|---------|
| `universe` | Define the population represented in the data. | Households receiving benefits, 2020–2024 |
| `anlyUnit` | Define the primary unit represented by each record. | Household |
| `timePrd` | Specify the reference period represented by the data.| January 2020–December 2024 |
| `geogCover` | Describe geographic areas included or excluded. | National coverage |
| `notes` | Document any coverage changes and extraction dates. | Expanded district coverage in 2021 |

---

# 4. Cohort Definition and Selection Rules

**Relevant DDI Elements:** `universe`, `sampProc`, `notes`
note: some elements are already included in the table above but included to emphasize the content in relation to the section

| DDI Element | Purpose | Example |
|-------------|---------|---------|
| `sampProc` | Describe selection criteria or operational rules used to create the cohort. | Selected beneficiaries with at least one payment transaction during the reference period |
|`weight` *(If applicable. See 'Weights in Administrative Data')*|Describe any weight variables or adjustment factors included in the dataset. State explicitly when weights are not required because the file represents a complete administrative universe.|The dataset contains all beneficiaries registered in the program during the reference period; no sampling weights were applied.|
| `notes` | Document inclusion/exclusion criteria, administrative codes, and cohort assignment logic. | Records with inactive status codes were excluded from the analytical cohort |

---
::: info Weights in Administrative Data

Administrative datasets often represent a **complete administrative universe** rather than a sample. Examples include:

- All registered beneficiaries in a program.
- All tax returns filed during a specified period.
- All hospital admissions recorded in an administrative system.
- All registered businesses included in a business registry.

In these situations, there is typically **no sampling weight variable**, because all units in the target population are represented in the dataset. As a result, administrative data documentation generally places greater emphasis on **coverage**, **cohort definition**, **record linkage**, and **data quality** than on sample design and weighting. 

However, weights may be required in certain circumstances:

- **A sample is drawn from the administrative system**
  - Example: a 10% sample of tax records is selected for analysis.
  - In such cases, sampling weights may be required to support population-level inference.

- **Administrative and survey data are combined**
  - Example: survey respondents are linked to social protection records.
  - Survey weights are often retained and used in subsequent analyses.

- **Administrative records are adjusted to represent a broader population**
  - Example: calibration factors or adjustment weights are applied to compensate for known undercoverage or reporting gaps.

- **The administrative source is incomplete**
  - Researchers may construct analytical weights to account for selection bias, incomplete reporting, or differential coverage across population groups.

When weights are present, documentation should clearly describe:

- Why the weights were created.
- The population represented by the weights.
- The methodology used to calculate the weights.
- Any assumptions, limitations, or adjustment procedures applied.

When no weights are used, it is helpful to state this explicitly, for example:

> **Weighting:** Not applicable. The dataset represents the full administrative population recorded in the source system during the reference period.

:::

# 5. File Description

**Relevant DDI Area:** `fileDscr`

| DDI Element | Purpose | Example |
|-------------|---------|---------|
| `fileName` | Record the file name and identifier.| beneficiary_demographics_2024.csv |
| `fileType` | Identify the file format. | CSV |
| `fileCont` | Summarize the contents of the file. | Demographic information on registered beneficiaries |
| `fileKey`  | Identify key variables and record identifiers.|beneficiary_id |
| `caseQnty` | Record the number of observations or records. | 58,742 |
| `varQnty` | Record the number of variables. | 45 |
| `notes` | Document the record structure. | One record per beneficiary |
| `notes` | Document related files and linkage relationships. | Linked to payment_history.csv via beneficiary_id |
| `notes` | Document file-specific notes and caveats including missing-value conventions,  | Contains only active beneficiaries. -9 = Not reported |
| `version` | Document the records version information. | Version 1.0 |
| `fileDerivation` | Document transformations or processes used to create the file. | Derived by extracting active records from the operational database and removing duplicate entries |
| `notes` | Document any file-specific guidance. | UTF-8 encoded |

---

# 6. Variable Description

**Relevant DDI Area:** `dataDscr`

| DDI Element | Purpose | Example |
|-------------|---------|---------|
| `@ID` | Unique identifier for the variable metadata. | V15 |
| `@name` | Document the variable name in the data file. | benefit_status |
| `labl` | Provide the human-readable variable label. | Benefit receipt status |
| `concept` | Document the concept measured by the variable. | Program participation |
| `qstn` or `sources` | Describe the originating question or administrative field. | Current benefit status recorded by the beneficiary management system |
| `universe` | Indicate which records are eligible for the variable | Registered beneficiaries |
| `varFormat` | Specify the data type and format. | Numeric |
| `catgry` | Document coded values and categories. | 0 = No, 1 = Yes |
| `invalrng` | Define missing, invalid, or suppressed values. | -9 = Not reported |
| `location` | Specify physical position in fixed-width files. | Position 21, width 8 |
| `sumStat` | Provide summary statistics where appropriate. | Mean age = 42.6 years|
| `notes` | Document special considerations and interpretation guidance. | Definition changed in 2023 following policy reform |
| `derivation` | Document any variable construction rules. | Derived from payment records |
| `security` or `notes` | Docyment variable restrictions. | Restricted geography variable |

---

# 7. Physical Data Structure

**Relevant DDI Elements:** `location`, `varFormat`

| DDI Element | Purpose | Example |
|-------------|---------|---------|
| `var/@name` | Variable identifier. | beneficiary_age |
| `location/@StartPos` | Specify the starting position within a fixed-width record. | 21 |
| `location/@width` | Specify field width. | 8 |
| `varFormat/@type` | Specify variable data type. | Numeric |
| `varFormat`; `notes` | Document storage formats, decimals, dates, encoding, or display conventions. | YYYY-MM-DD |
| `fileDscr`; `notes` | Document file encoding and layout. | UTF-8 CSV |

---

## 8. Data Quality, Processing, and Linkage

**Relevant DDI Areas:** `method`, `dataColl`, `fileDerivation`, `derivation`, `invalrng`, `notes`

Administrative records are created for operational purposes, and their quality characteristics may differ from those of data collected specifically for research. Consolidate broad quality information at the study, source, or file level and document variable-specific limitations only when they materially affect interpretation of a particular field.

## Study-Level Quality

**Relevant DDI Area:** `stdyDscr/method`

Study-level quality metadata describe issues that affect the dataset as a whole, including source-system processes, coverage limitations, data cleaning activities, linkage methodology, and comparability over time.

| DDI Element | Purpose | Example |
|-------------|---------|---------|
| `dataColl` | Describe data-capture procedures and validation controls applied during data collection or entry. | Applications are entered through a web-based portal with mandatory-field validation and range checks. |
| `collMode` | Describe how information enters the source system. | Caseworker entry and electronic reporting by local offices. |
| `dataEdit` | Document editing, verification, correction, and validation procedures applied to source records. | Automated checks identify duplicate beneficiary IDs and invalid dates. |
| `cleanOps` | Describe data cleaning, standardization, and quality-improvement procedures. | District names were standardized and malformed dates corrected prior to dissemination. |
| `notes` | Document coverage gaps, undercoverage, duplication, delayed reporting, and other known quality limitations. | Three districts began reporting electronically in 2021, resulting in lower coverage before that year. |
| `notes` | Document record-linkage methods, linkage keys, and treatment of uncertain links. | Deterministic linkage using encrypted national identification numbers; uncertain matches were flagged for review. |
| `notes` | Document linkage outcomes, including match rates and unmatched records. | 92.4% of eligible records matched successfully; 7.6% remained unmatched. |
| `notes` | Describe reliability, consistency, and comparability issues affecting the dataset. | Benefit status is not directly comparable before and after the 2023 system migration. |
| `notes` | Record extraction, processing, and quality-assurance dates. | Data extracted on 15 January 2025 and quality review completed on 28 February 2025. |

::: tip
Use study-level quality metadata for issues that affect the dataset as a whole.
:::
## File-Level Quality

**Relevant DDI Area:** `fileDscr`

File-level quality metadata describe issues affecting a specific file, including derivation processes, file transformations, file-level missingness, and known limitations.

| DDI Element | Purpose | Example |
|-------------|---------|---------|
| `fileDerivation` | Document how the file was created from one or more source files. | Analytical file created by merging beneficiary and payment records. |
| `fileDerivation` | Describe recoding, aggregation, standardization, and transformation procedures applied to the file. | Date fields were standardized to ISO 8601 format during processing. |
| `notes` | Document file-specific missing-data conventions. | Values coded as `-9` indicate not reported. |
| `notes` | Describe file-level exclusions or coverage limitations. | Records from three pilot districts were excluded from dissemination. |
| `notes` | Document known file-specific quality concerns. | Occupation codes are incomplete prior to 2021. |
| `notes` | Describe relationships with other files and linkage dependencies. | Payment records are linked to beneficiary records using `beneficiary_id`. |
| `notes` | Record file-specific processing dates, refresh cycles, or version history. | File generated on 15 January 2025 from the January production extract. |

::: tip
Use file-level quality metadata when a limitation affects only a specific file.
:::

## Variable-Level Quality

**Relevant DDI Area:** `dataDscr/var`

Variable-level quality metadata describe issues that affect interpretation of individual variables.

| DDI Element | Purpose | Example |
|-------------|---------|---------|
| `invalrng` | Document missing, invalid, suppressed, and not applicable values. | `-9 = Not reported`; `-8 = Not applicable`. |
| `sumStat` | Provide summary statistics useful for assessing variable quality. | Missing values represent 4.3% of observations. |
| `catgry` | Document code values and category definitions. | `0 = No`; `1 = Yes`. |
| `universe` | Describe applicability restrictions for the variable. | Applicable only to active beneficiaries. |
| `notes` | Describe variable-specific comparability issues. | Household income definition changed in 2023. |
| `derivation` | Document how derived variables were constructed. | Poverty status calculated from income and household size variables. |
| `notes` | Describe known quality concerns affecting interpretation. | Occupation is self-reported and contains inconsistent text values. |
| `notes` | Document confidentiality treatments applied to the variable. | Detailed geographic codes were recoded to broader administrative regions. |

::: tip
Only document quality issues at the variable level when they materially affect interpretation of the specific variable.
:::
---

# 9. Disclosure Risk, Data Privacy, and Access

**Relevant DDI Areas:** `setAvail`, `useStmt`, `restrctn`, `contact`

| DDI Element | Purpose | Example |
|-------------|---------|---------|
| `setAvail` | Availability status. | Licensed access |
| `useStmt` | Terms of use. | Data Use Agreement required |
| `restrctn` | Usage restrictions. | No redistribution |
| `notes` | Disclosure controls. | Direct identifiers removed |
| `contact` | Access contact point. | Data Access Committee |
| `security` or `notes` | Restricted variables. | Detailed geography restricted |

---

# 10. Related Materials

**Relevant DDI Elements:** `otherMat`, `relMat`

| DDI Element | Purpose | Example |
|-------------|---------|---------|
| `otherMat` | Supporting resources. | Program manual |
| `relMat` | Related publications. | Technical linkage report |
| `otherMat` or `relMat` | Resource metadata. | Technical Note PDF |
---

::: tip
External resources are also documented using the Dublin Core metadata standard. For more information, see [Documenting Resources](../documenting-resources.md).
:::
# 11. Versioning and Lineage

**Relevant DDI Areas:** `verStmt`, `version`, `fileDerivation`, `notes`

| DDI Element | Purpose | Example |
|-------------|---------|---------|
| `version` | Dataset release. | Version 2.0 |
| `versionResponsibility` | Responsible organization. | Statistics Directorate |
| `versionDate` | Release date. | 2026-08-01 |
| `fileDerivation` | Lineage and derivation. | Linked to revised source data |
| `notes` | Change log. | Geographic codes updated |
| `IDNo` or `notes` | Stable identifiers. | MSP-NSAB-2024-v02 |

---

# Administrative Data Dissemination Package

If disseminating the administrative data, a minimum dissemination package should include:

- Data files.
- Study-level metadata.
- Source-system documentation.
- Coverage metadata.
- Cohort definitions.
- File-level metadata.
- Variable-level metadata.
- Physical structure documentation.
- Data quality and linkage documentation.
- Access and disclosure-control information.
- Related materials.
- Citation, version, and lineage information.
- Terms of use and contact information.

## Key Principle

The objective is not merely to produce a narrative document. The objective is to create structured, machine-readable metadata that support discovery, interpretation, interoperability, preservation, responsible access, and reuse throughout the data lifecycle.

::: info Documentation in the Metadata Editor
When using a metadata generation tool like the Metadata Editor, some file level and variable metadata are automatically populated e.g. file ID, variable ID. Information on the physical data structure, variable labels, category lables, missing counts and summary statistics is automatically included in the metadata when the file is loaded to the Metadata Editor. 
:::

## References

1. DDI Alliance. (2024). *DDI-Codebook v2.6*. Retrieved from https://ddialliance.org/ddi-codebook_v2.6

2. DDI Alliance. (2024). *DDI-Codebook 2.6 XML Schema Documentation*. Retrieved from https://docs.ddialliance.org/DDI-Codebook/2.6/xmlschema/

3. U.S. Department of Health and Human Services. *Administrative Data Documentation Guidance*. Retrieved from https://aspe.hhs.gov/sites/default/files/migrated_legacy_files/134606/ch_3.pdf

4. United Nations Statistics Division. (2026, July). *Guidance on Metadata*. Retrieved from https://unstats.un.org/UNSDWebsite/resourceCatalog/documents/Guidance-on-metadata-July2026.pdf
