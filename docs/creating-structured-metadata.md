# 4. Completing the Metadata

Once all data and documentation materials have been assembled, organized, and verified, they should be documented in accordance with the relevant metadata standards: DDI Codebook (DDI-C) for datasets and Dublin Core Metadata Initiative (DCMI) standards for external resources. This process produces structured, machine-readable metadata that can be stored in XML (Extensible Markup Language) and JSON (JavaScript Object Notation) formats. Structured metadata supports the long-term preservation of data and documentation in repositories, enables metadata exchange and interoperability across catalogs, and enhances the discovery, access, and dissemination of data and related resources through searchable online platforms.

A thorough completion of the DDI-C and DCMI elements will significantly raise the value of the archiving work by providing users with the necessary information to put the study into its proper context and to understand its purpose.


## Completing the Study Documentation
The DDI-C metadata standard provides structured metadata for a dataset, capturing information on the identification, authorship, ownership, purpose, background methodologies, source information, provenance, quality control, access, physical file structures, variables/variable groupings, and related materials of a single dataset. Generating DDI-C compliant metadata requires the completion of this information organized into five key sections: Document Description, Study Description, File Description, Variable Description, Variable Groups, and External Resources.

The Metadata Editor is a specialized tool designed to create structured, machine-readable metadata that complies with internationally recognized metadata standards. This section introduces the key metadata elements required for creating comprehensive, structured metadata for microdata. It explains why such metadata is important and links to the Metadata Editor User Guide for detailed, step-by-step instructions for completing each section in the Metadata Editor.

### 4.1. Good Practices for Completing the Document Description
The Document Description section contains metadata about the XML or JSON metadata record itself rather than the study being documented. In other words, it describes the metadata document, its authorship, and its version history.

As a best practice, the Document Description should capture information such as:

- The metadata producer(s)
- Producer affiliation(s)
- Roles and responsibilities of the metadata contributors
- Date of metadata production
- Metadata version number
- DDI document identifier (DDI ID)
- Metadata creation and revision history

Maintaining this information supports version control, accountability, and traceability by clearly identifying who created the metadata, when it was produced, and which version of the metadata record is being used. This is particularly important when metadata are updated over time, maintained by multiple contributors, or exchanged between organizations. By documenting the metadata itself, users can assess its provenance, determine whether they are working with the most current version, and better understand how the metadata record has evolved over time. 

The table below shows how this information might be filled in in the Metadata Editor.

| Field | Description | Example |
|---------|-------------|---------|
| **Metadata Producer** | Name of the person(s), team(s), or organization(s) responsible for creating, updating, or maintaining the metadata documentation. Use the **Role** attribute to distinguish different types of contributions to the metadata production process, such as documentation, quality review, editing, or metadata management. | **Example**  <br>*Name:* Uganda Bureau of Statistics (UBOS)  <br>*Role:* Metadata documentation  <br><br>*Name:* IHSN  <br>*Role:* Metadata review |
| **Date of Production** | The date (ISO format YYYY-MM-DD) on which the metadata document was created or last updated. This refers to the production of the metadata document itself, not the date on which the data were collected, published, disseminated, or archived. | |
| **Metadata Document Version** | Metadata development is often an iterative process. As errors are corrected, documentation is enhanced, or new information becomes available, updates to the metadata may be required. This element is used to identify and describe the current version of the metadata document. It is good practice to include a version number, date, and a brief description of any significant changes from previous versions. | **Example:**  <br>*Version 02 (July 2026). This version is identical to Version 01, except that the Data Quality Assessment section has been updated and additional external resources have been documented.* |
| **Metadata Document ID Number (DDI ID)** | A metadata document should be assigned a unique identifier that distinguishes it from all other metadata records. Organizations should establish and consistently apply an identification scheme aligned with local repository, catalog, or archival practices. Where possible, the identifier should be linked to the collection's primary identifier. A recommended structure is:  <br><br>`PRODUCER_DDI_COUNTRY_YEAR_COLLECTION_VERSION`  <br><br>where:  <br>- *country* is the 3-letter ISO country code (where applicable)  <br>- *producer* is the abbreviation of the organization responsible for the metadata  <br>- *collection* is a short identifier for the dataset, census, administrative system, registry, transaction system, or other microdata collection  <br>- *year* is the reference year, reporting period, or collection start year  <br>- *version* is the metadata document version number | **Example:**  <br>*The metadata document for a Demographic and Health Survey prepared by the Uganda Bureau of Statistics in 2026 could be assigned the identifier:*  <br>`UBOS_DDI_UGA_2026_DHS_v01`  <br><br>*The metadata document for an Education Management Information System dataset could be assigned:*  <br>`MOE_DDI_KEN_2025_EMIS_v01` |

### 4.2. Good Practices for Completing the Study Description
A thorough completion of the DDI-C and DCMI elements will significantly raise the value of the archiving work by providing users with the necessary information to put the study into its proper context and to understand its purpose.

The DDI requires completion of the following sections: Document Description, Study Description, Datasets, Variables Groups, and External Resources. Recommendations for DDI-C fields included in the World Bank Group microdata template are provided below.

### Study Description

#### Title Statement

| Field | DDI Element | Description | Example |
|---|---|---|---|
| Title | `titl` | Full authoritative title for the work.<br><br>**Guidance:** Do not include survey acronym in the title. Use title case and include reference years where appropriate. | Synthetic Data for an Imaginary Country, Sample, 2023 |
| Identification No | `IDNo` | Unique string or number.<br><br>**Guidance:** Use a consistent ID scheme.| **WLD_2023_SYNTH-SVY-EN_v01_M** |
|Other Identifiers|`identifiers`|This metadata element is provided to store information on the other identifiers of the study (for example a Digital Object Identifier, or the study identifier in another data catalog). The `identifiers` (key) and is composed of two sub-elements (`type` and `identifier`). This is a repeateble field  that allows capturing multiple identifiers.|
| Sub-title | `subTitl` | Secondary title.<br><br>**Guidance:** Optional and rarely used. | A synthetic hierarchical dataset for simulation and training purposes |
| Alternate Title / Acronym | `altTitl` | Commonly used title or acronym.<br><br>**Guidance:** Use official abbreviation. | **SYNTH-SVY-EN 2023** for the synthetic file or **DHS 2015** for a 2015 DHS survey |
| Parallel / Translated Title | `parTitl` | Title translated into another language. | Données synthétiques pour un pays imaginaire, échantillon, 2023 |


#### Authoring & Contributors

| Field | DDI Element | Description | Example |
|---|---|---|---|
| Authoring Entity / Primary Investigator | `AuthEnty` | Person or agency responsible for substantive content.<br><br>**Guidance:** Include institution and affiliation. | National Statistics Office |
| Other Identifications / Acknowledgments | `othId` | Collaborators and contributors not otherwise recorded. | |

#### Production Statement

| Field | DDI Element | Description | Example |
|---|---|---|---|
| Producer | `producer` | Person or organization responsible for production. | Technical assistance in questionnaire design |
| Copyright | `copyright` | Usage rights for the resource. Provide copyright or usage rights when relevant.| © 2017, Popstan Central Statistics Agency |
| Production Date | `prodDate` | Date when the marked-up document/marked-up document source/data collection/other material(s) were produced (not distributed or archived).<br><br>Track production dates for all versions. Provide at least month and year in ISO format YYYY-MM or YYYY-MM-DD.| 2023-05-01 |
| Production Place | `prodPlac` | Production location. | World Bank |
| Funding Agency / Sponsor | `fundAg` |The source(s) of funds for production of the work including abbreviation and affiliation.<br><br>List organizations that contributed cash or in-kind financing. Include government funding sources where applicable. | UNHCR-World Bank Joint Data Center on Forced Displacement |
| Grant Number | `grantNo` | Grant or contract number. | KP-P174174-TF0B5124 |

#### Distribution Statement

| Field | DDI Element | Description | Example |
|---|---|---|---|
| Contact Persons | `contact` | Responsible contact persons. | dataproc@cso.org |
| Depositor | `depositr` | Institution depositing the collection. | World Bank |
| Date of Deposit | `depDate` | The date that the work was deposited with the archive that originally received it. Record the date the data collection was deposited with the receiving archive using ISO date format YYYY-MM-DD.| 2023-02-02 |

#### Series Statement

| Field | DDI Element | Description | Example |
|---|---|---|---|
| Series Name | `serName` | The name of the series to which the work belongs. | |
| Series Information | `serInfo` | Contains a history of the series and a summary of those features that apply to the series as a whole. | This dataset is part of a collection of fully synthetic data generated, for training and simulation purposes, for an imaginary middle-income country. The dataset is available in English and French. A full population dataset (~10 million individuals) is also available in English and French as a "synthetic census dataset". |

#### Version

| Field | DDI Element | Description | Example |
|---|---|---|---|
| Version | `version` | Also known as release or edition. Use a standard convention for dataset releases or editions. | v02 |
| Version Description | `verStmt` |Version statement for the work at the appropriate level: marked-up document; marked-up document source; study; study description, other material; other material for study.<br><br>Use a version number followed by a version label. Distinguish raw, edited internal-use, and edited dissemination versions where applicable. | v00: Basic raw data, obtained from data entry; v01: Edited data for internal use only; v02: Edited, anonymous dataset for public distribution|
| Version Responsibility | `verResp` | The organization or person responsible for the version of the work.| World Bank, Development Data Group |

#### Authorization

| Field | DDI Element | Description | Example |
|---|---|---|---|
| Authorizing Agency | `authorizingAgency` | Name of the agent or agency that authorized the study. | Office of Health Statistics |
| Authorization Statement | `authorizationStatement` | The text of the authorization. | Authorization received on 2010-11-04 |

---

### Study Information

#### Overview & Coverage

| Field | DDI Element | Description | Example |
|---|---|---|---|
| Keywords | `keyword` | Words or phrases that describe salient aspects of a data collection's content. Use keywords to summarize content or subject matter. Prefer standard thesauri where available. | |
| Topic Classifications | `topcClas` | The classification field indicates the broad substantive topic(s) that the data cover. Select topics from a standard thesaurus where possible. Topic classifications support search and catalog discovery. | |
| Subjects / Scope | `subject` | Subject information describing the data collection's intellectual content. Describe the themes covered by the study. The scope should summarize modules or themes, not geographic coverage. | HOUSEHOLD: household characteristics, education, water and sanitation; WOMEN: maternal health, marriage, contraception; CHILDREN: birth registration, immunization, anthropometry. |
| Abstract | `abstract` | Provide a clear summary of the purpose, objectives, and content. Ideally written by a researcher or statistician familiar with the study. | The dataset is a relational dataset of 8,000 households households, representing a sample of the population of an imaginary middle-income country. The dataset contains two data files: one with variables at the household level, the other one with variables at the individual level. It includes variables that are typically collected in population censuses (demography, education, occupation, dwelling characteristics, fertility, mortality, and migration) and in household surveys (household expenditure, anthropometric data for children, assets ownership). The data only includes ordinary households (no community households). The dataset was created using REaLTabFormer, a model that leverages deep learning methods. The dataset was created for the purpose of training and simulation and is not intended to be representative of any specific country. |
| Time Period | `timePrd` | The time period to which the data refer. This differs from data collection dates. | |
| Dates of Data Collection | `collDate` | Contains the date(s) when the data were collected. Enter start and end dates in ISO format YYYY-MM-DD. If collection occurred in waves, enter each wave separately and identify the cycle. | 2006-09-02 to 2006-10-17 |
| Country | `nation` | Indicates the country or countries (or “economies”, or “territories”) covered in the study (but not the sub-national geographic areas). If the study covers more than one country, they will be entered separately. Consistent country names and spelling should be used across an organization (for example, if "Democratic Republic of Congo" is the recommended name for the organization, the information should should not be entered as "Congo, Democratic Republic", "Congo, Dem. Rep.", "DR Congo", or other option). In user templates, a controlled vocabulary can be set at the country name level, at the country code level, or at the combined name/code level.  | Uganda (UGA) |
| Geographic Coverage | `geogCover` | Geographic representativeness. Describe the geographic level at which the data are representative, not simply where data were collected. | National coverage |
| Geographic Unit | `geogUnit` | Lowest level of geographic aggregation covered by the data. Enter the lowest level of geographic aggregation covered by the data. | District |
| Geographic Bounding Box | `geoBndBox` | The fundamental geometric description for any dataset that models geography. Provide the minimum bounding box, using west/east longitudes and south/north latitudes. Required if a geographic bounding polygon is included. | |
| Geographic Bounding Polygon | `boundPoly` | This field allows the creation of multiple polygons to describe in a more detailed manner the geographic area covered by the dataset. Use polygons only to define outer boundaries of the covered area. This supports coordinate-based discovery and is not intended for detailed mapping.| Separate polygons may be used for non-contiguous areas such as islands or exclaves.|
| Unit of Analysis | `anlyUnit` | Basic unit of analysis or observation that the file describes: individuals, families/households, groups, institutions/organizations, administrative units, etc. | Enter standard units of analysis where applicable, such as household, person, enterprise, commodity, or plot of land. |
| Universe | `universe` | The universe is the group of persons (or other units of observations, like dwellings, facilities, or other) that are the object of the study and to which any analytic results refer. The universe will rarely cover the entire population of the country. Sample household surveys, for example, may not cover homeless, nomads, diplomats, community households. Population censuses do not cover diplomats. Facility surveys may be limited to facilities of a certain type (e.g., public schools). Try to provide the most detailed information possible on the population covered by the survey/census, focusing on excluded categories of the population.<br><br>For household surveys, age, nationality, and residence commonly help to delineate a given universe, but any of a number of factors may be involved, such as sex, race, income, veteran status, criminal convictions, etc. In general, it should be possible to tell from the description of the universe whether a given individual or element (hypothetical or real) is a member of the population under study. Describe the population of interest in detail, including covered and excluded groups. This is the study-level universe, not variable-level skip patterns. | All de jure household members |
| Kind of Data | `dataKind` | The type of data included in the file: survey data, census/enumeration data, aggregate data, clinical data, event/transaction data, program source code, machine-readable text, administrative records data, experimental data, psychological test, textual data, coded textual, coded documents, time budget diaries, observation data/ratings, process-produced data, etc. Select the broad classification of the data from the controlled vocabulary. | Sample survey data |

---

### Study Development

#### Development Activities

| Field | DDI Element | Description | Example |
|---|---|---|---|
| Development Activity | `developmentActivity` | Information on the development activity including a "description" of the activity, name of each "participant", each "resource" used, and each "outcome" of the activity. | |
| Study Development | `studyDevelopment` | Describe the process of study development as a series of development activities. | |
| Study Budget | `studyBudget` | Describe the project budget in as much detail as needed. Include budget line ID, label, amount, currency, and source of funding where available. | |

---

### Methodology

#### Methods

| Field | DDI Element | Description | Example |
|---|---|---|---|
| Time Method | `timeMeth` | The time method or time dimension of the data collection. | |
| Data Collectors | `dataCollector` | The entity (individual, agency, or institution) responsible for administering the questionnaire or interview or compiling the data. Record agencies or persons responsible for data collection. Include name, abbreviation, affiliation, and role. Usually record the agency rather than individual interviewers. | Name: CSO; Affiliation: Ministry of Planning; Role: Planner |
| Collector Training | `collectorTraining` | Describe interviewer training, process testing, and standards compliance. Use type to distinguish training aspects when needed. | Two-week interviewer training |
| Frequency of Data Collection | `frequenc` | For data collected at more than one point in time, the frequency with which the data were collected. Describe the frequency of repeated data collection; use controlled vocabulary where available. | annual |
| Sampling Procedure | `sampProc` |The type of sample and sample design used to select the survey respondents to represent the population. Include sample size, selection process, stratification, stages of selection, design omissions, level of representation, non-response strategy, sample frame, and variables identifying strata and PSU where relevant. Reference detailed sampling documents provided as external resources. | 8000 households selected |
| Sample Frame | `sampleFrame` |Sample frame describes the sampling frame used for identifying the population from which the sample was taken. Describe the sample frame, including the listing exercise, validity period, custodian, update procedure, frame unit, reference period, and use statement where available. | |
| Sample Frame Name | `sampleFrameName` | Provide the name of the sample frame used to identify the population from which the sample was drawn. | WLD_2023_SYNTH-CENS-EN_v01_M |
| Target Sample Size | `targetSampleSize` | Provides both the target size of the sample (this is the number in the original sample, not the number of respondents) as well as the formula used for determining the sample size. Include the formula used to determine the sample size where available. | |
| Sample Size | `sampleSize` | Provide planned and actual sample sizes with the unit and number. | 8000 households |
| Deviation from Sample Design | `deviat` | Sometimes the reality of the field requires a deviation from the sampling design (for example due to difficulty to access to zones due to weather problems, political instability, etc). If for any reason, the sample design has deviated, this can be reported here. This element will provide information indicating the correspondence as well as the possible discrepancies between the sampled units (obtained) and available statistics for the population (age, sex-ratio, marital status, etc.) as a whole.<br><br>Report deviations from sample design caused by field constraints or other implementation realities. | |
| Mode of Data Collection | `collMode` | The method used to collect the data; instrumentation characteristics. Select the manner in which information was gathered from a controlled vocabulary when available. | Face-to-face interview |
| Research Instrument / Questionnaires | `resInstru` | The type of data collection instrument used. Describe questionnaires or instruments used. List each instrument, language, design process, stakeholder review, pretest, and reference external resources. | Household, women, and children questionnaires were adapted from MICS3 model questionnaires and translated into local languages. |
| Instrument Development | `instrumentDevelopment` | Describe any development work on the data collection instrument. Describe development work, review processes, pilots, testing, and agencies or persons consulted. | |
| Notes on Data Collection | `collSitu` | Description of noteworthy aspects of the data collection situation. Document noteworthy events, pilot/pre-test details, interview duration, field arrangements, languages used, and corrective actions during collection. | The pre-test took place from August 15-25, 2006 and included 14 interviewers who later became supervisors. |
| Actions to Minimize Losses | `actMin` | Document actions taken to minimize data loss. | |
| Weighting | `weight` | This field only applies to sample surveys. The use of sampling procedures may make it necessary to apply weights to produce accurate statistical results. Describe here the criteria for using weights in analysis of a collection, and provide a list of variables used as weighting coefficient. If more than one variable is a weighting variable, describe how these variables differ from each other and what the purpose of each one of them is. List weighting variables and explain how they differ and how each should be used. Describe calculation, non-response adjustment, and normalization where available. | HHWEIGHT |
| Data Processing | `dataProcessing` | Describe data entry, editing, verification, recoding, tabulation, software, double entry, structural checks, and analysis processing. Reference processing guidelines or programs as external resources. | Describes various data processing procedures not captured elsewhere in the documentation, such as topcoding, recoding, suppression, tabulation, etc. Document data editing included office editing and coding, data entry, structure checking, verification entry, secondary editing, export to SPSS, recoding, adding weights, and data quality tabulations. |
| Coding Instructions | `codingInstructions` | Describe specific coding instructions used in data processing, cleaning, acquisition, or tabulation. Provide human-readable coding instructions and command code where relevant; identify formal language for commands. | RECODE V1 TO V100 (10 THROUGH HIGH = 0).|

---

### Quality Assessment

#### Quality Statement

| Field | DDI Element | Description | Example |
|---|---|---|---|
| Quality Statement | `qualityStatement` |This structure consists of two parts, "standardsCompliance" and "otherQualityStatements". List standards followed during study execution. Include standard name, producer, and how the study complied. Use Other Quality Statement for additional quality notes. | Study complied with specified survey methodology and data documentation standards. |
| Standards Compliance | `qualityStatement.standards` | List the standard name, producer, and how the study complied with it. | Standard: DHS Program Methodological Standards; Producer: DHS Program|
| Other Quality Statement | `qualityStatement.otherQualityStatement` | Use for quality explanations that do not fit standards compliance. Data collection followed documented supervision, editing, and validation procedures. | |

#### Data Appraisal

| Field | DDI Element | Description | Example |
|---|---|---|---|
| Other Forms of Data Appraisal | `dataAppr` |Document other issues pertaining to data appraisal. Describe other actions taken to assess reliability or quality, including post-enumeration surveys, comparisons with other sources, and data quality tables. Document both the procedures that were planned and any important deviations in implementation. Explain known limitations and their implications so users can judge whether the data are suitable for their intended analysis.| Data quality tables reviewed age distributions, missing values, sex ratios at birth, population pyramids, and anthropometry scatter plots. |
| Response Rate | `respRate` | The percentage of sample members who provided information. <br><br>Report household or unit response rates based on the original sample. Provide rates by stratum when possible and ensure consistency with sample size and records in the data. | Household response rate: 96.3%; women response rate: 96.0%; children response rate: 97.7%. This is a synthetic dataset; the "response rate" is 100%. |
| Estimate of Sampling Error | `EstSmpErr` | Measure of how precisely one can estimate a population value from a given sample. For sample surveys, describe sampling error calculations, indicators, software, methods, and reports or programs provided as external resources. | Sampling errors were calculated using the SPSS Complex Samples module and Taylor linearization method. |

#### Post-Evaluation Procedures

| Field | DDI Element | Description | Example |
|---|---|---|---|
| Evaluator | `ex_post_evaluation.evaluator` | The "Evaluator" element identifies the person(s) and/or organization(s) involved in the ex-post evaluation. Include name, affiliation, abbreviation, and role. | Affiliation: United Nations; Abbr.: UNSD; Role: Consultant |
| Evaluation Process | `ex_post_evaluation.evaluation_process` | A description of the ex-post evaluation process. This may include information on the period when the evaluation was conducted, cost/budget, relevance, institutional or legal arrangements, etc. Describe the post-evaluation process, especially when the study is repeated or ongoing. | Independent review after completion of field operations. |
| Evaluation Outcomes | `ex_post_evaluation.outcomes` | A description of the outcomes of the ex-post evaluation. It may include a reference to an evaluation report. Summarize evaluation findings and recommendations. | Recommendations were adopted for the next survey round. |

#### Data Quality Controls

| Field | DDI Element | Description | Example |
|---|---|---|---|
| Cleaning / Control Operations | `cleanOps` | Methods used to "clean" the data collection, e.g., consistency checking, wild code checking, etc. Describe data cleaning methods such as consistency checks, wild-code checks, supervision, field controls, and corrective actions. | Field editors reviewed questionnaires daily for missed questions, skip errors, and inconsistencies. |
| Processing Checks | `ProcStat` | Processing status of the data collection. Document file-specific checks such as consistency checking and wild-code checking. Reference external resources with check specifications where available. | Range checks and consistency checks applied to file-level variables. |
| Missing Data | `dataMsng` | This element can be used to give general information about missing data, e.g., that missing data have been standardized across the collection, missing data are present because of merging, etc. Document missing data conventions. Missing values should be coded and distinguished from not applicable and zero values. | Codes 98 = Do not know; 99 = Missing. |
| Imputation | `imputation` | Imputation or replacement techniques used to correct inconsistent or unreasonable data. Summarize imputation methods and reference external resources where available. | Random imputation was used for missing dates within calculated constraints. |

#### Fieldwork Quality Assurance

| Field | DDI Element | Description | Example |
|---|---|---|---|
| Supervision | `control_operations` | This element contains information on the oversight of the data collection, i.e. on methods implemented to facilitate data control usually performed by the primary investigator. Describe team structure, supervisor roles, field editor responsibilities, central office visits, and corrective actions. | Interviewing teams included supervisors and field editors; central staff conducted periodic field visits. |
| Compliance with Data Collection Standards | `qualityStatement.standards` | Compliance with relevant data collection standards. Describe whether the study complied with international survey recommendations or institutional fieldwork standards. | Survey procedures complied with documented international recommendations. |

---

### Data Access
This section describes access conditions and terms of use for the data collection.
#### Access & Use

| Field | DDI Element | Description | Example |
|---|---|---|---|
| Location of Data Collection | `accsPlac` | Storage location. Provide the location where the data are stored and a URL or address if available. | |
| Availability Status | `avlStatus` | Availability statement. Indicate availability status such as unavailable, embargoed, superseded, or new edition imminent where relevant. | |
| Confidentiality Declaration | `confDec` | This element is used to determine if signing of a confidentiality declaration is needed to access a resource. <br><br> **Guidance:** Indicate confidentiality declarations required for access when relevant. Leave blank if no confidentiality issue applies. | Users agree not to attempt to identify any person, establishment, or sampling unit. |
| Citation Requirement | `citReq` | Text of requirement that a data collection should be cited properly in articles or other publications that are based on analysis of the data. <br><br> **Guidance:** Provide the citation users must use. Include primary investigator, dataset name and abbreviation, reference year, version, and official access URL where available. | World Bank. (2023). *Synthetic Data for an Imaginary Country, Sample*, 2023 [Dataset]. World Bank, Development Data Group. https://doi.org/10.48529/MC1F-QH23. |
| Deposit Requirement | `deposReq` | User reporting requirements. | |
| Access Conditions | `conditions` | Conditions of use. <br><br>**Guidance:**  Indicates any additional information that will assist the user in understanding the access and use conditions of the data collection. Note that if this information is subject to change, it should not be captured in the study metadata but provided in a data catalog page. | Public Use Dataset |
| License | `license` | License information. A legal document giving official permission to something with the resource. | |
| Embargo | `embargo` | Embargo information. Provides information on variables/nCubes which are not currently available because of policies established by the principal investigators and/or data producers. | |
| Disclaimer | `disclaimer` | Disclaimer statement.<br><br> **Guidance:** A disclaimer limits the liability that the data producer or data custodian has regarding the use of the data. A standard legal statement should be used for all datasets from a same agency. | The following formulation could be used:<br><br> The user of the data acknowledges that the original collector of the data, the authorized distributor of the data, and the relevant funding agency bear no responsibility for use of the data or for interpretations or inferences based upon such uses. |
| Metadata Access | `metadataAccs` | Metadata access conditions.<br><br>**Guidance:** This section describes access conditions and terms of use for the metadata. | |

---

For a full list of DDI-C fields, see the [DDI XML Schema](https://docs.ddialliance.org/DDI-Codebook/2.6/xmlschema/schemas/codebook_xsd/schema-overview.html) and the [Metadata Editor Documentation](https://worldbank.github.io/metadata-editor-docs/). Field level examples are also provided in the Metadata Editor.

Much of this information can be obtained from reports, technical documentation, methodological notes, project proposals, data collection instruments, user and operational manuals, system specifications, data dictionaries, and other supporting materials created throughout the lifecycle of the microdata collection. These resources often contain the information needed to accurately document the data, its production process, and its intended use.

**Why is this important?**

**The Study Description serves as the foundation of the metadata record.**
It helps users determine whether a dataset is relevant for their research, understand its strengths and limitations, and assess whether it is appropriate for a particular analytical purpose.

A well-documented Study Description captures above-mentioned metadata elements as well as information on data quality, comparability, and limitations. As a result, the comprehensive metadata supports discovery and evaluation of datasets in data catalogs and preserves institutional knowledge for future users.

**Supports Data Quality and Transparency**

The Study Description is also a critical component of data quality documentation. By describing how the microdata were collected, acquired, processed and managed, it enables users to assess the reliability, coverage, and suitability of the data for their intended purposes.

For example, the Study Description may document the following elements that would shed light on quality:
- Data sources, collection methods, or data acquisition processes
- Coverage, scope, target population, or units of observation
- Sampling methods, sample size, or selection procedures (where applicable)
- Response rates, completeness measures, and known sources of error or bias
- Data collection, extraction, integration, or processing procedures
- Quality assurance, validation, and data verification processes
- Data transformations, harmonization, imputation, or adjustment methodologies
- Changes from previous versions, collection cycles, or releases
- Limitations, constraints, and considerations for data interpretation and use

Without adequate documentation, users may incorrectly interpret findings, make invalid comparisons, or draw conclusions that are inconsistent with the data's scope, context, and methodological limitations.

**Supports Automated Discovery and Analysis**

As data catalogs increasingly incorporate automated search and analytical tools, detailed study-level metadata becomes even more important. Automated systems rely on information in the Study Description to understand the subject matter, population, methodology, and coverage of a dataset. This enables them to make relevant and meaningful recommendations, improve search results and dataset discovery.

**Example**

Consider a dataset titled *Household Survey 2025.* From the title alone, it is impossible to know what the survey was about, who was interviewed, where it was conducted, or when the data were collected. The Study Description provides this information by documenting the survey objectives, target population, geographic coverage, data collection methods, and reference period. This context enables users to correctly interpret the data and assess whether it is suitable for their research needs.

For detailed guidance on how to complete the Study Description, see the section on *Documenting microdata in the Metadata Editor*.

### 4.3. Good Practices for Completing the File Description
The File Description section captures metadata about the physical data file(s) that make up a dataset. Recommendations for completing the file description metadata are provided in the table below.

## File Description

| Field | DDI Element | Description | Example |
|---------|---------|---------|---------|
| File Description | `fileDscr` | This section stores metadata about the physical data files that make up a research collection.| |
| File Name | `fileName` | The official name of the data file.| hh_data.dta |
| File Contents | `fileCont` |Details what the data file contains, including its nature and any special characteristics. | Synthetic data, household-level variables, sample of 8,000 households |
| Missing Data | `dataMsng` | Information on missing data conventions. | |
| Data Check | `dataChck`| A global element used at the file level to document the extent of processing checks and data cleaning operations performed on a data file| Consistency checks were performed by Data Producer.|
| File Type | `fileType` | The technical format of the file (e.g., SAS, SPSS, Stata, CSV). | |
| Version statement | `verStmt` | Records the specific version/edition of the physical data file being described. Version statement captures information onversion number `version`, version date `versionDate`, and `notes`.| |
|Dimensions|`dimensns`|Physical dimensions of the file, such as the total number of cases/rows `caseQnty` and columns `varQnty`.| |
| Processing Status |`procStat`|Information regarding the processing status of the data file (e.g., whether it has been cleaned or weighted).||
| Notes | `notes` | Any notes required to understand and use the file correctly including how to merge with other datasets. | |
---


Some information, such as file names, record counts, variable counts, and basic file characteristics, may be extracted automatically from the data files when using the Metadata Editor. However, other details, including quality assurance procedures, data processing and transformation activities, validation checks, and the treatment of missing or inconsistent data, may need to be obtained from technical documentation, methodological reports, project records, or consultations with data producers and subject matter experts.

**Why is this important?**

File-level metadata provides essential context about how a dataset was created, processed, and structured. It helps users understand the contents and quality of the data files and supports the correct interpretation and use of the data.

Well-documented file descriptions:

- **Help users identify the correct data file and version** for their analysis.
- Provide **transparency** about data processing, validation, quality assurance procedures, known limitations, exclusions, or caveats.
- Document **how missing values, inconsistencies, and errors were handled**.
- **Support reproducibility** by recording details that may not be apparent from the data alone.
- Facilitate **long-term preservation and reuse** of the dataset.
- Improve **discoverability and usability** in data catalogs and repositories.
- **Enable automated search and analysis tools** to better understand the structure and characteristics of the data.

The File Description section is also an important component of data quality documentation. Information about missing data, validation rules, consistency checks, editing procedures, and quality assessments **helps users evaluate the reliability and limitations** of the dataset.

Without this information, users may incorrectly assume that the data are complete or error-free, potentially leading to inaccurate analyses and conclusions.

**Example**

A dataset contains 10,000 records and 250 variables. The file description may indicate that:
- Records with duplicate identifiers were removed during processing.
- Age values outside the valid range were reviewed and corrected.
- Missing income values were coded as -99.
- Consistency checks were performed between household and individual records.
- The file represents the second corrected release of the dataset.

This information provides important context that cannot be determined simply by looking at the data file itself and helps ensure that users understand how the final dataset was produced and what limitations should be considered during analysis.

### 4.4. Good Practices for Completing the Variable Description
The DDI-Codebook Variable Description section captures detailed metadata about each variable in a dataset. The table below provides some recommendations for completing variable metadata. when using the Metadata Editor, variable information like name, type, intrvl, label, value labels, width and summary statistics are automatically extracted from the data.

#### Variable Description

| Field | DDI Element | Description | Example |
|---|---|---|---|
| Variable| `var` | Identifies and documents a single variable in a data file. The variable element contains information about the variable's name, label, format, location, question text, valid values, categories, summary statistics, and other variable-level metadata used to describe and interpret the data. See the data preparation section for guidance on variable naming. | `name`: hhid `varFormat type`: character <br> `intrvl`: discrete<br><br>`name`: hhinc <br> `varFormat type`: numeric <br>`intrvl`: continuous|
| Variable Label | `labl` | All variables should have a label that provides a short but clear indication of what the variable contains. Ideally, all variables in a data file will have a unique label. File formats like Stata or SPSS often contain variable labels. Variable labels should identify the questionnaire item, clearly describe the content, and indicate whether variables are constructed. Avoid ALL CAPS and duplicate labels. | Annual per capita real expenditure in local currency |
| Variable Format / Data Type | `varFormat` | Data type. | Numeric |
| Pre-question Text | `preQTxt` | The pre-question texts are the instructions provided to the interviewers and printed in the questionnaire before the literal question. This does not apply to all variables. Do not confuse this with instructions provided in the interviewer’s manual. Copy the text printed in the questionnaire before the literal question, not interviewer manual instructions.| Check age |
| Literal Question | `qstnLit` | Copy the exact question wording as asked during the interview. | Does (name) attend any organized learning or early childhood education programme? |
| Post-question Text | `postQTxt` | Text describing what occurs after the literal question has been asked.| Go to next module |
| Interviewer Instruction | `ivuInstr` | Specific instructions to the individual conducting an interview. Copy interviewer manual instructions. Repeat instructions across variables when the same guidance applies to multiple variables. | |
| Categories | `catgry` | A description of the categories (codes with labels) that apply to the variable, for categorical variables. The element also includes summary statistics at the category level.| 1=Male;2=Female |
| Category Value | `catValu` | The explicit response option for a category. | |
| Category Statistics | `catStat` | May include frequencies, percentages, or crosstabulation results. | |
| Category Level | `catLevel` |Used to describe the levels of the category hierarchy.| |
| Recoding and Derivation | `derivation` | Used only in the case of a derived variable, this element provides both a description of how the derivation was performed and the command used to generate the derived variable, as well as a specification of the other variables in the study used to generate the derivation. For derived variables, document source variables, transformations, assumptions, and reference programs or reports when calculations are complex. | AGE_GRP was obtained by recoding S1Q3 age in years into age groups 0-4, 5-9, etc. |
| Coding Instructions | `codInstr` | Any special instructions to those who converted information from one form to another for a particular variable. Record special coding instructions associated with a variable. | Due to a system error, value 27 for NBWFBPC should be recoded as invalid value 99. |
| Summary Statistics | `sumStat` | One or more statistical measures that describe the responses to a particular variable and may include one or more standard summaries, e.g., minimum and maximum values, median, mode, etc. Select appropriate statistics based on measure. Avoid frequencies for ID variables and avoid means/standard deviations for nominal codes. | Minimum, maximum, mean, standard deviation, frequency|

Comprehensive variable documentation is essential because 
- It **provides the context required to accurately interpret, analyze, and reuse data**. Variable descriptions preserve the meaning, origin, and construction of each variable, ensuring that datasets remain understandable long after data collection has been completed. 
- They also **improve discoverability in data catalogs and support reproducible research** by documenting how variables were collected, coded, and, where applicable, derived. 
- Moreover, **modern automated catalogs, search engines, and data assistants rely heavily on metadata** to find relevant datasets and variables. Without this information, automated techniques may apply inappropriate analytical methods or draw incorrect conclusions.

Beyond supporting interpretation and reuse, **documenting variables contributes to data quality**. The process of reviewing and describing variables often helps identify inconsistencies, coding errors, undocumented transformations, unclear labels, and discrepancies between the questionnaire and the dataset. As a result, variable documentation serves as an important quality assurance step, improving the accuracy, reliability, and usability of the data.

Variable descriptions help explain:

- what the variable measures
- how the information was collected
- the population to which the question applies
- any instructions provided to interviewers or respondents
- how response categories and codes should be interpreted
- how derived or calculated variables were constructed.

**Example**

A variable named *AGE* may appear straightforward, but the accompanying description may clarify whether it refers to age at the time of the interview, age at last birthday, age at first marriage, or age at a specific reference date. Without this additional context, users may incorrectly interpret the data and produce misleading results.

> **Note:** When using a tool such as the Metadata Editor, metadata elements including variable names, variable labels, category labels, data types, field lengths, and field widths can be automatically extracted from a dataset during import.<br>Additional metadata, such as field definitions, descriptions, permissible values, coverage statements, data collection or processing notes, usage instructions, and information about derived or calculated variables, should be completed using available documentation, including questionnaires, data dictionaries, technical reports, methodological documentation, field manuals, processing specifications, or other materials that describe how the data were collected, managed, transformed, and produced.<br>To improve the quality and usability of the documentation, ensure that variables and response categories are assigned clear, meaningful labels and that variable names follow established naming conventions. Variable names should be concise, descriptive, and free of special or unsupported characters that may not be accepted by commonly used statistical and data analysis software. Well-structured variable names and labels make datasets easier to understand, analyze, and maintain over time.<br>While variable metadata can be updated in the Metadata Editor, we recommend applying variable naming and labeling standards before importing the dataset whenever possible. See the section on Gathering and Preparing the Dataset for additional guidance.


### 4.5. Creating Variable Groups
The Variable Groups section is optional and is used to organize variables into logical, thematic, or hierarchical groupings without altering the underlying data files. These groups are virtual, they exist only within the metadata and do not affect the structure or content of the dataset itself.

Variable groups help organize large and complex datasets into meaningful sections, making them easier for both humans and systems to navigate, understand, and discover. By grouping related variables together, users can quickly identify relevant content without having to review hundreds or thousands of individual variables.

**Why is this important?**

Variable groups improve the usability and discoverability of a dataset by providing a structured view of its contents. They help users understand how variables relate to one another and make it easier to locate information on specific topics.

Well-designed variable groups can:

- Improve navigation of large datasets
- Help users quickly identify variables relevant to their research
- Support thematic browsing and searching in data catalogs
- Provide additional context about the organization of the questionnaire or study
- Enhance machine-readable metadata for automated search and discovery tools

**Example**

Variable groups may mirror the structure of the questionnaire or be organized around key analytical themes. For example, variables could be grouped into categories such as:

- Demographics
- Education and Literacy
- Employment and Income
- Health and Nutrition
- Information and Communication Technology (ICT)
- Internet Use
- Housing Characteristics
- Agriculture
- Household Assets

Variable groups make metadata easier to explore. Datasets become more accessible to users, and data catalogs can provide a richer and more intuitive discovery experience.


**In a Nutshell**

Together, the Document Description, Study Description, File Description, Variable Description, and Variable Groups sections provide a comprehensive and structured description of a dataset and its supporting documentation. Following metadata standards when capturing information about the study, data files, individual variables, and the relationships between them, promotes greater interoperability, comparability, and consistency across datasets, systems, and repositories.

These metadata elements improve data quality by encouraging a systematic review of the data and its documentation, while also supporting long-term preservation, discoverability, and reuse. Rich metadata ensures that datasets remain understandable and usable long after the original project team is no longer available, preserving valuable institutional knowledge and context.

Comprehensive metadata also enables data catalogs, repositories, and automated tools to more effectively locate, interpret, connect, and analyze data resources. The Metadata Editor streamlines this process by providing an efficient way to create standards-compliant, machine-readable metadata that can be shared, published, exchanged, and preserved over time.

::: tip Documenting microdata in the Metadata Editor
To generate structured metadata for datasets using the Metadata Editor, you will need to:

- ✓ create a Metadata Editor Project
- ✓ complete the Document Description metadata 
- ✓ complete the Study Description metadata
- ✓ import the prepared data file(s) to your project
- ✓ complete the File Description for each imported file
- ✓ complete the Variable Description metadata and (optional) create Variable Groups
- ✓ complete the External Resource metadata for each resource
- ✓ review and export the machine-readable metadata (ready for sharing/publication in online catalogs).

Detailed instructions on how to create a project in the Metadata Editor are provided [here](https://worldbank.github.io/metadata-editor-docs/documenting_general_instructions.html).

Note that if you are documenting a population census and have very large data files, it is recommended to split the files by geographic area. Typically, you will have a file at individual level, one at the household level, and possibly one at the community level, for each State or Province. In such case, import all files for one State or Province only. You will import the other data files after you complete the documentation of the files. This will considerably reduce the time needed to save your files. The Metadata Editor will allow you to replicate the metadata from the documented files to all other data files that you will import later.

For detailed guidance on how to document a study in the Metadata Editor, see the [Documenting Microdata](https://worldbank.github.io/metadata-editor-docs/documenting_microdata.html) section of the Metadata Editor User Guide.

Detailed information and examples on how to import data are provided in the Metadata Editor guide - see Documenting Data → Microdata → Import and Document the Dataset → [Data Files](https://worldbank.github.io/metadata-editor-docs/documenting_microdata_import_document.html#data-files).
:::

It is equally important to document the supporting documents and resources that enable data users to better understand the data, replicate analyses, and correctly interpret results. These supporting materials, often referred to as external resources, are documented using the Dublin Core Metadata Initiative (DCMI) standard. Documenting these resources alongside the data helps organizations to improve transparency, reproducibility, and the long-term usability of the micro-dataset collection.

The next section explains how to document external resources using the DCMI standard and describes the metadata elements used to capture and manage these materials.