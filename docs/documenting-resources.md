# 5. Documenting External Resources
## Good Practices for Completing External Resource Metadata

The External Resources section is used to document and describe materials that are related to a dataset, study, project, or data collection but exist outside the primary data files. These resources may include questionnaires, data collection instruments, interviewer or field manuals, reports, publications, methodological documents, technical papers, tabulations, maps, training materials, codebooks, data processing guidelines, and other supporting documentation that provides additional context for understanding and using the data.

External resources are typically documented using the Dublin Core Metadata Initiative (DCMI) standard, which provides a simple and widely adopted framework for describing digital resources. Key metadata elements include:

- Resource title
- Creator
- Publisher
- Date
- Description
- Subject
- Language
- Format
- Access location or URL

### Why Is This Important?

- Documenting external resources helps **preserve valuable contextual information that may not be captured within the data files themselves**.
- It enables users to **locate**, **access**, and **understand** supporting materials that provide important information about the data, its production, methodology, processing, quality, and intended use.
- Comprehensive documentation of external resources improves the **discoverability** of data and related materials in catalogs and repositories.
- It supports **long-term preservation** by ensuring that critical documentation and supporting resources remain linked to the data over time.
- Well-documented external resources also enable **AI-powered tools, search systems, and metadata platforms to connect datasets with the documentation required for accurate interpretation, analysis, reproducibility, and reuse**.

## Importing External Resources

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

Once the data and external resources have been documented, it is essential to conduct a quality assessment before the metadata are stored, published, or shared. Metadata quality review helps ensure that the documentation is complete, consistent, accurate, and compliant with applicable metadata standards, thereby improving discoverability, interoperability, and long-term usability.

The next section explores metadata quality assessment and presents some recommended approaches, tools, and techniques that can be used to evaluate and improve metadata quality.
