# 4. Completing the Metadata

Once all data and documentation materials have been assembled, organized, and verified, they should be documented in accordance with the relevant metadata standards - DDI-C for the data, and DCMI for external resources. This ensures the creation of structured, machine-readable metadata documents that are saved in XML and JSON formats. Structured, machine-readable metadata facilitates preservation, discovery, and dissemination  of data and resources through online searchable catalogs. 

A thorough completion of the DDI-C and DCMI elements will significantly raise the value of the archiving work by providing users with the necessary information to put the study into its proper context and to understand its purpose.

## Completing the Study Documentation
The DDI-C metadata standard provides structured metadata for a dataset, capturing information on the identification, authorship, ownership, purpose, background methodologies, source information, provenance, quality control, access, physical file structures, variables/variable groupings, and related materials of a single dataset. Generating a DDI metadata codebook requires the completion of this information organized into five key sections: Document Description, Study Description, File Description, Variable Description, Variable Groups, and External Resources.

The Metadata Editor is a specialized tool designed to create structured, machine-readable metadata that complies with internationally recognized metadata standards. This section introduces the key metadata elements required for creating comprehensive, structured metadata for microdata. It explains why such metadata is important and links to the Metadata Editor User Guide for detailed, step-by-step instructions for completing each section in the Metadata Editor.

### 4.1. Good Practices for Completing the Document Description
Documenting a study using the DDI-Codebook (DDI-C) and Dublin Core (DCMI) metadata standards involves creating a structured metadata record that is stored in an XML (Extensible Markup Language) file as well as JSON. This metadata file serves as the machine-readable representation of the study metadata and can be used by data catalogs, repositories, and other systems to discover, display, exchange, and preserve metadata.

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
The Study Description section contains the metadata needed to describe the microdata/study or data production process as a whole. It provides the context necessary for users to understand why the data were collected, how the data was produced, and what populations, topics, locations, and time periods are covered. Following the DDI-C metadata standard, this section typically captures details including:
- Study identification
- Version
- Overview (objectives, kind of data, unit of analysis) 
- Series information
- Implementing and sponsoring organizations
- Study type
- Methodology (sampling, weighting, data processing etc.)
- Data collection methods and dates
- Spatial and temporal coverage
- Data quality assessment
- Access conditions

See the table below for the different fields
### Study Description

#### Title Statement

| Field | DDI Element | Description | Example |
|---------|---------|---------|---------|
| Title | `titl` | Full authoritative title for the work at the appropriate level: marked-up document; marked-up document source; study; other material(s) related to study description; other material(s) related to study. | Uganda National Household Survey 2024 |
| Identification No | `IDNo` | Unique string or number (producer's or archive's number). | UGA_2024_UNHS_v01_M |
| Sub-title | `subTitl` | A secondary title used to amplify or state certain limitations on the main title. | |
| Alternate Title | `altTitl` | A title by which the work is commonly referred, or an abbreviation of the title. | UNHS 2024 |
| Parallel Title | `parTitl` | Title translated into another language. | |

#### Authoring & Contributors

| Field | DDI Element | Description | Example |
|---------|---------|---------|---------|
| Authoring Entity | `AuthEnty` | The person, corporate body, or agency responsible for the work's substantive and intellectual content. | |
| Other Identifications / Acknowledgments | `othId` | Statements of responsibility not recorded in the title and statement of responsibility areas (collaborators). | |

#### Production Statement

| Field | DDI Element | Description | Example |
|---------|---------|---------|---------|
| Producer | `producer` | The producer is the person or organization with the financial or administrative responsibility for the physical processes whereby the document was brought into existence. | Uganda Bureau of Statistics |
| Copyright | `copyright` | Copyright statement for the work at the appropriate level. | |
| Production Date | `prodDate` | Date when the marked-up document, data collection, or related materials were produced. | |
| Production Place | `prodPlac` | Address of the archive or organization that produced the work. | |
| Funding Agency | `fundAg` | The source(s) of funds for production of the work including abbreviation and affiliation. | World Bank |
| Grant Number | `grantNo` | The grant/contract number of the project that sponsored the effort. | |

#### Distribution Statement

| Field | DDI Element | Description | Example |
|---------|---------|---------|---------|
| Distribution Statement | `distStmt` | Distribution statement for the work at the appropriate level. | |
| Contact Information | `contact` | Names and addresses of individuals responsible for the work. | |
| Depositor | `depositr` | The name of the person (or institution) who provided this work to the archive storing it. | |
| Deposit Date | `depDate` | The date that the work was deposited with the archive that originally received it. | |

#### Series Statement

| Field | DDI Element | Description | Example |
|---------|---------|---------|---------|
| Series Name | `serName` | The name of the series to which the work belongs. | |
| Series Information | `serInfo` | Contains a history of the series and a summary of those features that apply to the series as a whole. | |
| Series Statement | `serStmt` | Series statement for the work at the appropriate level. | |

#### Version Statement

| Field | DDI Element | Description | Example |
|---------|---------|---------|---------|
| Version | `version` | Also known as release or edition. | |
| Version Statement | `verStmt` | Version statement for the work. | |
| Version Responsibility | `verResp` | The organization or person responsible for the version of the work. | |

#### Citation

| Field | DDI Element | Description | Example |
|---------|---------|---------|---------|
| Bibliographic Citation | `biblCit` | Complete bibliographic reference containing all of the standard elements of a citation. | |
| Citation | `citation` | Encodes the bibliographic information for the work. | |

#### Study Authorization

| Field | DDI Element | Description | Example |
|---------|---------|---------|---------|
| Authorizing Agency | `authorizingAgency` | Name of the agent or agency that authorized the study. | |
| Authorization Statement | `authorizationStatement` | The text of the authorization. | |

---

### Study Information

#### Overview & Coverage

| Field | DDI Element | Description | Example |
|---------|---------|---------|---------|
| Keywords | `keyword` | Words or phrases that describe salient aspects of a data collection's content. | |
| Topic Classification | `topcClas` | Broad substantive topic(s) covered by the data collection. | |
| Subject | `subject` | Subject information describing the data collection's intellectual content. | |
| Abstract | `abstract` | An unformatted summary describing the purpose, nature, and scope of the data collection. | National household survey measuring welfare and living conditions. |
| Time Period Covered | `timePrd` | The time period to which the data refer. | |
| Dates of Collection | `collDate` | Contains the date(s) when the data were collected. | 2024-01-15 to 2024-06-30 |
| Country | `nation` | Indicates the country or countries covered in the file. | Uganda |
| Geographic Coverage | `geogCover` | Information on the geographic coverage of the data. | |
| Geographic Unit | `geogUnit` | Lowest level of geographic aggregation covered by the data. | |
| Geographic Bounding Box | `geoBndBox` | The fundamental geometric description for any dataset that models geography. | |
| Geographic Boundary Polygon | `boundPoly` | Polygons used to describe the geographic area covered by the dataset. | |
| Unit of Analysis | `anlyUnit` | Basic unit of analysis or observation described by the file. | |
| Analysis Unit Details | `anlysUnit` | Provides additional information regarding whom or what the variable describes. | |
| Universe | `universe` | The population or elements to which analytical results refer. | All private households in Uganda |
| Kind of Data | `dataKind` | Type of data included in the file. | |
| Quality Statement | `qualityStatement` | Information on standards compliance and quality statements. | |
| Data Appraisal | `dataAppr` | Other issues pertaining to data appraisal. | |
| Analysis Information | `anlyInfo` | Information on data appraisal. | |

---

### Study Development

#### Development Activities

| Field | DDI Element | Description | Example |
|---------|---------|---------|---------|
| Development Activity | `developmentActivity` | Information on development activities, participants, resources, and outcomes. | |
| Study Development | `studyDevelopment` | Describe the process of study development as a series of development activities. | |
| Study Budget | `studyBudget` | Describe the budget of the project. | |

---

### Methodology

#### Methods

| Field | DDI Element | Description | Example |
|---------|---------|---------|---------|
| Time Method | `timeMeth` | The time method or time dimension of the data collection. | |
| Data Collector | `dataCollector` | Entity responsible for administering the questionnaire or compiling the data. | |
| Collector Training | `collectorTraining` | Training provided to data collectors. | |
| Frequency | `frequenc` | Frequency with which data were collected. | |
| Sampling Procedure | `sampProc` | Type of sample and sample design used. | Two-stage stratified sample design |
| Sample Frame | `sampleFrame` | Sampling frame used for identifying the population. | |
| Sample Frame Name | `sampleFrameName` | Name of the sample frame. | |
| Target Sample Size | `targetSampleSize` | Target sample size and calculation methodology. | |
| Sample Size | `sampleSize` | Targeted sample size. | |
| Sampling Deviations | `deviat` | Deviations between sampled units and population statistics. | |
| Mode of Collection | `collMode` | Method used to collect the data. | |
| Research Instrument | `resInstru` | Type of data collection instrument used. | |
| Instrument Development | `instrumentDevelopment` | Development work on the data collection instrument. | |
| Collection Situation | `collSitu` | Noteworthy aspects of the data collection situation. | |
| Actions to Minimize Loss | `actMin` | Actions taken to minimize data loss. | |
| Cleaning Operations | `cleanOps` | Data cleaning and consistency checking procedures. | |
| Weighting | `weight` | Weighting procedures used in the dataset. | Sampling weights provided in household file |
| Response Rate | `respRate` | Percentage of sample members who provided information. | |
| Sampling Error Estimates | `EstSmpErr` | Measure of sampling precision. | |
| Data Processing | `dataProcessing` | Data processing procedures such as recoding and tabulation. | |
| Coding Instructions | `codingInstructions` | Coding instructions used during processing. | |
---
### Data Access

#### Access & Use

| Field | DDI Element | Description | Example |
|---------|---------|---------|---------|
| Access Location | `accsPlac` | Location where the data collection is stored. | |
| Availability Status | `avlStatus` | Statement of collection availability. | |
| Dataset Availability | `setAvail` | Information on availability and storage of the collection. | |
| Collection Size | `collSize` | Summary of files and supplementary documentation. | |
| File Quantity | `fileQnty` | Total number of physical files in the collection. | |
| Confidentiality Declaration | `confDec` | Indicates whether a confidentiality declaration is required. | |
| Restrictions | `restrctn` | Restrictions on access or use of the collection. | |
| Citation Requirement | `citReq` | Citation requirements for users of the data. | |
| Deposit Requirement | `deposReq` | Requirements for citing or reporting use of the data. | |
| Conditions | `conditions` | Additional information about access and use conditions. | |
| License | `license` | Legal document granting permission to use the resource. | |
| Embargo | `embargo` | Information on content not currently available. | |
| Disclaimer | `disclaimer` | Disclaimer regarding use of the data. | |
| Data Access | `dataAccs` | Access conditions and terms of use for the dataset. | |
| Metadata Access | `metadataAccs` | Access conditions and terms of use for the metadata. | |
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

**Supports AI-Powered Discovery and Analysis**

As data catalogs increasingly incorporate AI-powered search and analytical tools, detailed study-level metadata becomes even more important. AI systems rely on information in the Study Description to understand the subject matter, population, methodology, and coverage of a dataset. This enables them to make relevant and meaningful recommendations, improve search results and dataset discovery.

**Example**

Consider a dataset titled *Household Survey 2025.* From the title alone, it is impossible to know what the survey was about, who was interviewed, where it was conducted, or when the data were collected. The Study Description provides this information by documenting the survey objectives, target population, geographic coverage, data collection methods, and reference period. This context enables users to correctly interpret the data and assess whether it is suitable for their research needs.

For detailed guidance on how to complete the Study Description, see the section on *Documenting microdata in the Metadata Editor*.

### 4.3. Good Practices for Completing the File Description
The File Description section captures metadata about the physical data file(s) that make up a dataset. This includes information such as:
- File name
- File producer
- Version 
- Number of cases 
- Number of variables
- Missing data conventions
- Data validation and quality checks
- Any notes required to understand and use the file correctly including how to merge with other datasets.

## File Description

| Field | DDI Element | Description | Example |
|---------|---------|---------|---------|
| File Description | `fileDscr` | Information about the data file(s) that comprise a collection. | |
| File Name | `fileName` | Short title used to distinguish a file from other files in the collection. | hh_data.dta |
| Producer | `producer` | Information on missing data conventions. | |
| File Type | `fileType` | Type of data file. | |
| File Structure | `fileStrc` | Type of file structure. | |
| Data Format | `format` | Physical format of the data file. | |
| Number of Cases | `caseQnty` | Number of cases or observations. | |
| Number of Variables | `varQnty` | Number of variables. | |
| Processing Status | `ProcStat` | Processing status of the file. | |
| Missing Data | `dataMsng` | Information on missing data conventions. | |
| Data Checks | `dataChck` | Data validation and quality checks. | |
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
- **Enable AI-powered search and analysis tools** to better understand the structure and characteristics of the data.

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
The DDI-Codebook Variable Description section captures detailed metadata about each variable in a dataset, including
- Variable name
- Variable type 
- Variable label
- Question text, response categories and codes, universe, instructions, derivation methods
- Any other information needed to understand and use the data correctly

The field descriptions are provided in the table below.

#### Variable Description

| Field | DDI Element | Description | Example |
|---------|---------|---------|---------|
| Variable | `var` | Describes all features of a single variable. | hhid |
| Variable Label | `labl` | Short descriptive label. | Household Identifier |
| Variable Format | `varFormat` | Technical format of the variable. | |
| Pre-question Text | `preQTxt` | Conditions under which a question may be asked. | |
| Question | `qstn` | Question element. | |
| Literal Question | `qstnLit` | Exact wording of the question. | |
| Post-question Text | `postQTxt` | Text describing what occurs after the question. | |
| Interviewer Instructions | `ivuInstr` | Instructions to the interviewer. | |
| Category | `catgry` | Description of a response category. | |
| Category Value | `catValu` | Explicit response option. | |
| Category Statistics | `catStat` | Statistics associated with a category. | |
| Category Level | `catLevel` | Level within a category hierarchy. | |
| Derivation | `derivation` | Description of how a derived variable was created. | |
| Coding Instructions | `codInstr` | Special coding instructions. | |
| Summary Statistics | `sumStat` | Statistical summaries associated with the variable. | |


Comprehensive variable documentation is essential because 
- It **provides the context required to accurately interpret, analyze, and reuse data**. Variable descriptions preserve the meaning, origin, and construction of each variable, ensuring that datasets remain understandable long after data collection has been completed. 
- They also **improve discoverability in data catalogs and support reproducible research** by documenting how variables were collected, coded, and, where applicable, derived. 
- Moreover, **modern AI-powered catalogs, search engines, and data assistants rely heavily on metadata** to find relevant datasets and variables. Without this information, AI may apply inappropriate analytical methods or draw incorrect conclusions.

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
- Enhance machine-readable metadata for AI-powered search and discovery tools

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

Comprehensive metadata also enables data catalogs, repositories, and AI-powered tools to more effectively locate, interpret, connect, and analyze data resources. The Metadata Editor streamlines this process by providing an efficient way to create standards-compliant, machine-readable metadata that can be shared, published, exchanged, and preserved over time.

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