# 2. Before you start: organize your files

Documenting a dataset is significantly easier and more efficient when data files, metadata, documentation, scripts, and supporting resources are organized in a clear and consistent manner from the outset. A well-structured file organization system helps ensure that:

- **Files are easy to identify, locate, and understand**, reducing the time spent searching for information and helping collaborators navigate project resources efficiently.
- **Important files are protected from accidental overwriting, duplication, or loss**, preserving the integrity of the dataset and its associated documentation throughout the project lifecycle.
- **Sensitive or restricted content is kept separate from materials intended for sharing or public dissemination**, supporting compliance with data protection requirements and reducing the risk of unintended disclosure.
- **Documentation activities can be completed more quickly and accurately**, as all relevant materials are readily available and clearly categorized.
- **Collaboration is improved**, enabling team members to work with a common understanding of where files are stored and which versions should be used.
- **Data preservation and long-term reuse are enhanced**, making it easier to archive, locate archived versions, transfer, and maintain datasets over time.

## Recommended Folder Structure

The following folder structure separates original data, working files, dissemination packages, documentation, programs, analytical outputs, and archived materials. This organization helps ensure that files are easy to locate, prevents accidental overwriting, and clearly distinguishes sensitive working files from materials intended for dissemination. We recommend that, before anything else, you create the necessary directories as follows:

| Folder Structure | Purpose |
|------------------|---------|
| 📁 **UGA_2026_DHS** | **Root Directory** – Create a directory for the survey. We suggest you name it using the country, survey's year and the abbreviated name, e.g. **UGA_2026_DHS** for a "Demographic and Health Survey" of Uganda collected in 2026. This is the base directory that holds everything related to the survey. Avoid spaces in the folder name.  |
| ├── 📁 **UGA_2026_DHS_v01_M** | Create sub-directories to hold different versions of the data. The original version of the data will always be designated as the Main file. In this example, the first version (v01) of the **M**ain data would be stored in the folder named **UGA_2026_DHS_v01_M.** Avoid spaces in the folder name. |
| ├──├── 📁 **Data** | The Data sub-directory contains datasets throughout their lifecycle, from acquisition to dissemination (if applicable). Data files are organized in marked sub-folders to minimize risk of overwriting and sharing of restricted information. |
| ├──├──├── 📁 **Original**<br>↳ Raw, Backup | Store source data exactly as received from the producer. These files should be preserved and remain unchanged. |
| ├──├──└── 📁 **Edited** | Store edited data separate from the raw data. |
| ├──├──├── 📁 **Working**<br>↳ Data Entry, Cleaning, Harmonization, Quality Assurance, Anonymization | This folder can hold intermediate files used during processing, validation, transformation, and anonymization. |
| ├──├──└── 📁 **Dissemination**<br>↳ v01_A_PUF, v02_A_PUF, v01_A_LUF | If data is being disseminated, create this dissemination sub-folder to separately store final approved datasets organized by release version and access type. In this example, the files prepared for dissemination are considered adaptations of the main data, so the folder names include the adaptation version information and end with _A_PUF, _A_SUF etc. |
| ├──├── 📁 **Documentation** | Create documentation sub-directories to hold materials that describe, support, or govern the study and its data. As needed, materials can be further organized into separate sub-directories as shown below. |
| ├──├──├── 📁 **Administrative**<br>↳ Acquisition, Agreements, Correspondence, Permissions | Store administrative records related to dataset acquisition, licensing, and governance. |
| ├──├──├── 📁 **Survey Materials**<br>↳ Questionnaires, Manuals | Store data collection instruments and fieldwork guidance. |
| ├──├──├── 📁 **Reports**<br>↳ Survey Reports, Methodology, Sampling Reports, Evaluations | Store reports describing survey implementation, methodology, and findings. |
| ├──├──├── 📁 **Technical**<br>↳ Codebooks, Data Dictionaries, Sample Design, Geospatial material, data processing and quality assurance documents etc. | Store documentation required to understand and use the data. |
| ├──├──└── 📁 **Photos**<br>↳ Fieldwork, Instruments, Maps | Store photographs and visual resources associated with the study. |
| ├──├── 📁 **Programs** | Create sub-directories for scripts and code used to process, validate, anonymize, tabulate, and analyze data as needed. |
| ├──├──├── 📁 **Data Management**<br>↳ Data Entry, Cleaning, Anonymization, QA | Store programs used to prepare dissemination-ready datasets. |
| ├──├──└── 📁 **Analysis**<br>↳ Tabulation, Indicators, Research | Store statistical and analytical programs used to produce outputs. |
| ├──├── 📁 **Outputs**<br>↳ Tables, Figures, Maps, Publications | Store products generated from the data, including statistical outputs and publications. |
| └──└── 📁 **Archive**<br>↳ Previous Releases, Superseded Files, Deposits | Store historical versions and archived materials retained for preservation and audit purposes. |

## Example: Dissemination Folder Structure
The dissemination folder contains the dissemination package, i.e. data approved for dissemination, and may contain documentation to help users understand, interpret and use the data as well as programs to replicate analysis (if applicable). Not all documentation and programs in the main survey folder gets disseminated, as some documents may contain sensitive information.
```text
📁 Dissemination
│
├── 📁 UGA_2026_DHS_v01_M_v01_A_PUF
│   ├── 📁 Data
│   ├── 📁 Documentation
│   ├── 📁 Programs
│   └── 📄 Release_Notes.txt
│
├── 📁 UGA_2026_DHS_v01_M_v02_A_PUF
│   ├── 📁 Data
│   ├── 📁 Documentation
│   ├── 📁 Programs
│   └── 📄 Release_Notes.txt
│
├── 📁 UGA_2026_DHS_v01_M_v01_A_LUF
│   ├── 📁 Data
│   ├── 📁 Documentation
│   ├── 📁 Programs
│   └── 📄 Release_Notes.txt


```

## Dissemination Version Naming Convention

| Folder Name | Description |
|-------------|-------------|
| 📁 `v01_A_PUF` | First release of the Public Use File package |
| 📁 `v02_A_PUF` | Second release of the Public Use File package |
| 📁 `v01_A_LUF` | First release of the Licensed Use File package |
| 📁 `v01_A_CUF` | First release of the Confidential Use File package |
| 📄 `Release_Notes.txt` | Documents changes introduced in the release |

::: tip Best Practice
Store each dissemination release as a complete, self-contained package containing the distributed data, documentation, programs, and release notes. This ensures that previous releases remain reproducible and that users can clearly identify which version of the data was used.

When creating structured metadata for a dataset, use the dataset folder name as the Primary ID whenever possible. This ensures a clear and traceable link between the metadata record and the corresponding data files.

For example, when documenting the main dataset, the Primary ID should be **UGA_2026_DHS_v01_M**. If you are documenting Version 2 of the Public Use File, the Primary ID should be **UGA_2026_DHS_v01_M_v02_A_PUF**.

Using a consistent naming convention helps maintain traceability, supports version control, and makes it easier to manage and identify related metadata and data assets over time.
:::

<!-- | ![image](/media/Page2.png) | - Create a directory for the survey.<br>We suggest you name it using the<br>country, survey’s year and the<br>abbreviated name, e.g. “UGA_2018_HIES”<br>for “Household Income and Expenditure<br>Survey” of Uganda collected in 2018. |
| --- | --- |
|  | - Create various sub-directories for the.<br>data files (and for the various versions<br>of the dataset if relevant)<br>- Create sub-directories for the<br>documentation and for the program files<br>if relevant (see example). | -->
