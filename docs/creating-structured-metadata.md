# 5. Completing the Metadata

Once all data and documentation materials have been assembled, organized, and verified, they should be documented in accordance with the relevant metadata standards - DDI-C for the data, and DCMI for external resources. This ensures the creation of structured, machine-readable metadata documents that are saved in XML and JSON formats. Structured, machine-readable metadata facilitates preservation, discovery, and dissemination  of data and resources through online searchable catalogs. 

A thorough completion of the DDI-C and DCMI elements will significantly raise the value of the archiving work by providing users with the necessary information to put the study into its proper context and to understand its purpose.

## Completing the study documentation
The DDI-Codebook metadata standard requires the completion of five key sections: Document Description, Study Description, File Description, Variable Description, Variable Groups, and External Resources.

The Metadata Editor is a specialized tool designed to create structured, machine-readable metadata that complies with internationally recognized metadata standards. This section introduces the key metadata elements required for creating comprehensive, structured metadata for microdata. It explains why such metadata is important and links to the Metadata Editor User Guide for detailed, step-by-step instructions for completing each section in the Metadata Editor.

### 5.1. Good practices for completing the document description
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

| **Metadata Producer** | Name of the person(s) or organizations who documented the dataset. Use the "role" attribute to distinguish different stages of involvement in the production process. | **Example**<br>*Name:* Uganda Bureau of Statistics (UBOS)<br>*Role:* Documentation of the study<br><br>*Name:* IHSN<br>*Role:* Review of the metadata |
| --- | --- | --- |
| **Date of Production** | This is the date (in ISO format YYYY-MM-DD) the DDI document was produced (not distributed or archived). | |
| **DDI Document Version** | Documenting a dataset is not a trivial exercise. Producing "perfect" metadata is probably impossible. It may therefore happen that, having identified errors in a DDI document or having received suggestions for improvement, you decide to modify the Document even after a first version has been disseminated. This element is used to identify and describe the current version of the document. It is good practice to provide a version number (and date), and information on what distinguishes this version from the previous one(s) if relevant. | **Example:**<br>*Version 02 (July 2026). This version is identical to version 01, except for the section on Data Appraisal which was updated.* |
| **DDI Document ID Number** | The ID number of a DDI document is a unique number that is used to identify this DDI file. Define and use a consistent scheme to use, ideally consistent with the study's Primary ID. Such an ID could be constructed as follows:<br>PRODUCER_DDI_COUNTRY_YEAR_SURVEY_VERSION<br>where<br>- *country* is the 3-letter ISO country abbreviation<br>- *producer* is the abbreviation of the producing agency<br>- *survey* is the survey abbreviation<br>- *year* is the reference year (or the year the survey started)<br>- DDI document version number | **Example:**<br>*The DDI file related to the Demographic and Health Survey documented by staff from the Uganda Bureau of Statistics in 2026 would have the following ID:*<br>UBOS_DDI_UGA_2026_DHS_v01_M. <br>If documenting the PUF, the DDI ID could be<br>UBOS_DDI_UGA_2026_DHS_v01_M_v01_A_PUF. |

### 5.2. Good practices for completing the study description ###
The Study Description section contains the metadata needed to describe the survey or study as a whole. It provides the context necessary for users to understand why the data were collected, how the study was conducted, and what populations, topics, locations, and time periods are covered. Following the DDI-C metadata standard, this section typically captures details including:
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

Much of this information can be extracted from survey reports, technical documentation, methodological notes, project proposals, questionnaires, interviewer manuals, and other supporting materials produced during the survey lifecycle. 

**Why is this important?**

**The Study Description serves as the foundation of the metadata record.**
It helps users determine whether a dataset is relevant for their research, understand its strengths and limitations, and assess whether it is appropriate for a particular analytical purpose.

A well-documented Study Description captures above-mentioned metadata elements as well as information on data quality, comparability, and limitations. As a result, the comprehensive metadata supports discovery and evaluation of datasets in data catalogs and preserves institutional knowledge for future users.

**Supports Data Quality and Transparency**

The Study Description is also a critical component of data quality documentation. By describing how the survey was designed and implemented, it enables users to assess the reliability, coverage, and suitability of the data.

For example, this Study Description may document the following elements that would shed light on quality:
- Sampling methods and sample size.
- Response rates and known sources of error.
- Data collection procedures and fieldwork protocols.
- Quality control and validation procedures.
- Changes from previous survey rounds.
- Limitations that should be considered when interpreting results.

Without this information, users may incorrectly compare datasets, misunderstand survey estimates, or draw conclusions that are not supported by the study design.

**Supports AI-Powered Discovery and Analysis**

As data catalogs increasingly incorporate AI-powered search and analytical tools, detailed study-level metadata becomes even more important. AI systems rely on information in the Study Description to understand the subject matter, population, methodology, and coverage of a dataset. This enables them to make relevant and meaningful recommendations, improve search results and dataset discovery.

**Example**

Consider a dataset titled *Household Survey 2025.* From the title alone, it is impossible to know what the survey was about, who was interviewed, where it was conducted, or when the data were collected. The Study Description provides this information by documenting the survey objectives, target population, geographic coverage, data collection methods, and reference period. This context enables users to correctly interpret the data and assess whether it is suitable for their research needs.

For detailed guidance on how to complete the Study Description, see the section on *Documenting microdata in the Metadata Editor*.

### 5.3. Good practices for completing the file description ###
The File Description section captures metadata about the physical data file(s) that make up a dataset. This includes information such as:
- File name
- File producer
- Version 
- Number of cases 
- Number of variables
- Missing data conventions
- Data validation and quality checks
- Any notes required to understand and use the file correctly including how to merge with other datasets.

Some of this information e.g. file name, number of cases and variables, can be extracted automatically from the data file itself when using the Metadata Editor. However, other details, such as quality control procedures, data cleaning activities, validation checks, and missing data treatments, may need to be sourced from data processing documentation, technical reports, or discussions with the survey team.

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

### 5.4. Good practices for completing the variable description ###
The DDI-Codebook Variable Description section captures detailed metadata about each variable in a dataset, including:
- Variable name
- Variable type
- Variable label
- Question text, response categories and codes, universe, instructions, derivation methods
- Any other information needed to understand and use the data correctly.

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

> **Note:**When using a tool such as the Metadata Editor, metadata elements including variable names, variable labels, category labels, data types, field lengths, and widths are automatically extracted from the dataset during import.<br>The remaining variable metadata, such as question text, variable definitions, universe statements, instructions to interviewers, and descriptions of derived variables, should be completed using the survey questionnaire, field manuals, and any documentation that describes the methodology and processing steps used to create the dataset and any derived variables.<br>To improve the quality and usability of the documentation, ensure that variables and response categories are assigned clear, meaningful labels and that variable names follow established naming conventions. Variable names should be concise, descriptive, and free of special or unsupported characters that may not be accepted by commonly used statistical and data analysis software. Well-structured variable names and labels make datasets easier to understand, analyze, and maintain over time. <br>While variable metadata can be updated in the Metadata Editor, we recommend variable labeling and naming to be done before importing to the editor. See the section on Gathering and preparing the data set for more information.


### 5.5. Creating variable groups ###
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

Note that If you are documenting a population census and have very large data files, it is recommended to split the files by geographic area. Typically, you will have a file at individual level, one at the household level, and possibly one at the community level, for each State or Province. In such case, import all files for one State or Province only. You will import the other data files after you complete the documentation of the files. This will considerably reduce the time needed to save your files. The Metadata Editor will allow you to replicate the metadata from the documented files to all other data files that you will import later.

For detailed guidance on how to document a study in the Metadata Editor, see the [Documenting Microdata](https://worldbank.github.io/metadata-editor-docs/documenting_microdata.html) section of the Metadata Editor User Guide.

Detailed information and examples on how to import data are provided in the Metadata Editor guide - see Documenting Data → Microdata → Import and Document the Dataset → [Data Files](https://worldbank.github.io/metadata-editor-docs/documenting_microdata_import_document.html#data-files).
:::

<!-- ::: tip Checking invalid codes
It is good practice to quickly browse all variables in all data files to visually check the frequencies. This will allow you to easily spot some outliers or invalid codes, which will require recoding (which can be done in the Editor or in the source data files which will then have to be re-imported).
::: 

![image](/media/check_categories.png) -->