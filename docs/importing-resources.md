# 6. Good practices for completing external resource metadata #
The External Resources section is used to document and describe materials that are related to the study but exist outside the primary dataset. These resources may include questionnaires, interviewer manuals, reports, publications, methodological documents, tabulations, maps, training materials, technical papers, and other supporting documentation that provides additional context for understanding and using the data.

External resources are typically documented using the Dublin Core Metadata Initiative (DCMI) standard, which provides a simple and widely adopted framework for describing digital resources. Key metadata elements include:
- The resource title
- Creator
- Publisher
- Date
- Description 
- Subject
- Language
- Format
- Access location or URL

**Why is this important?**
- Documenting external resources helps **preserve valuable contextual information that may not be captured within the dataset itself**. 
- It enables users to **locate** supporting materials more easily, **understand** the survey methodology and findings in greater depth, and **access** related publications and documentation from a single metadata record. 
- Comprehensive documentation of external resources also **improves discoverability** in data catalogs, **supports long-term preservation**, and **allows AI-powered tools and search systems to connect datasets with the documentation** needed for accurate interpretation and reuse.

## Importing external resources ##

When documenting external resources, you will need to organize your resources in your local folder by resource type following the folder structure described in *Organizing Your Files* section.

Some resources might be composed of more than one file (for example, the CSPro data entry application includes multiple files that should not be separated). In such cases, zip them into one single file, and import it as a single resource.

For documents available in multiple formats (for example, a questionnaire available in Excel and in PDF), you may create two separate resources, or zip the files into one single file. In such case, list the different formats available in the "Content/ Description" field.

::: tip Best Practices - **Naming Convention for External Resources**
- Use file names short, but self-explanatory about the content of
the document.
- Preferably, use lower cases.
- Avoid spaces to delimit words.
- Be consistent with your method of naming across all files. For
instance, if you use underscores to delimit words, keep it that
way in all files.
- Use only alphanumeric characters, underscores or dashes. Avoid
using special characters (!@#$%^&*()~) or any accented characters.
- If you intend to have an archive useable and downloadable across
multiple countries, use English names for your files.
:::

The Metadata Editor documentation provides guidelines under Documenting Data → Microdata → Import and Document the Dataset → [External resources](https://worldbank.github.io/metadata-editor-docs/documenting_microdata_import_document.html#external-resources) on how to import and document your resources in the Editor.