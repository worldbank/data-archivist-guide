# Completing metadata

The Metadata Editor makes use of the Data Documentation Initiative Codebook (DDI-C), the Dublin Core (DCMI version X) metadata standards and ISO 19139 for geospatial information.

The table below provides an overview of the different metadata standards as related to the project. Each metadata standard is integrated into the template that will define the project.

![image](/media/Page23.png)

A thorough completion of the DDI-C and DCMI elements will significantly raise the value of the archiving work by providing users with the necessary information to put the study into its proper context and to understand its purpose.

The DDI-C metadata standard requires completion of the following sections: Document Description, Study Description, Datasets, Variables Groups, and External Resources.

## Good practices for completing the study documentation

### Document Description
Documenting a study using the DDI-C and DCMI metadata standards consists of generating a metadata file which will be saved in XML format in what is called an *XML Document*. The *Document Description* is a description of that XML file. It is good practice to document the metadata producer, affiliation and role, date of production, ddi document version and DDI ID.

| Metadata Producer | Name of the person(s) or<br>organization(s) who documented<br>the dataset. Use the "role"<br>attribute to distinguish<br>different stages of involvement<br>in the production process.<br>Example:<br>*Name*<br>*National<br>Statistics<br>Office<br>(NSO)*<br>*International<br>Household<br>Survey<br>Network<br>(IHSN)* | *Role*<br>*Documentation<br>of the<br>study*<br>*Review of<br>the<br>metadata* |
| --- | --- | --- |
| Date of Production | This is the date (in ISO format<br>YYYY-MM-DD) the DDI document was<br>produced (not distributed or<br>archived). This date will be<br>automatically imputed when you<br>save the file. |  |
| DDI Document Version | Documenting a dataset is not a<br>trivial exercise. Producing<br>“perfect” metadata is probably<br>impossible. It may therefore<br>happen that, having identified<br>errors in a DDI document or<br>having received suggestions for<br>improvement, you decide to modify<br>the Document even after a first<br>version has been disseminated.<br>This element is used to identify<br>and describe the current version<br>of the document. It is good<br>practice to provide a version<br>number (and date), and<br>information on what distinguishes<br>this version from the previous<br>one(s) if relevant.<br>Example:<br>*Version 02 (July 2017). This<br>version is identical to version<br>01, except for the section on<br>Data Appraisal which was<br>updated.* |  |
| DDI Document ID Number | The ID number of a DDI document<br>is a unique number that is used<br>to identify this DDI file. Define<br>and use a consistent scheme to<br>use. Such an ID could be<br>constructed as follows:<br>DDI_COUNTRY_PRODUCER_SURVEY_YEAR<br>where<br>-  *country* is the 3-letter ISO<br>country abbreviation<br>-  *producer* is the abbreviation<br>of the producing agency<br>-  *survey* is the survey<br>abbreviation<br>-  *year* is the reference year<br>(or the year the survey<br>started)<br>- DDI document version number<br>Example:<br>*The DDI file related to the<br>Demographic and Health Survey<br>documented by staff from the<br>Uganda Bureau of Statistics in<br>2005 would have the following<br>ID:<br>DDI_UGA_UBOS_DHS_2005_v01. If<br>the same survey is documented by<br>a staff from the IHSN, this<br>would be<br>DDI_UGA_IHSN_DHS_205_v01.* |  |


### Study Description

In the DDI-C standard, the Study Description is the section that contains all elements needed to describe the study itself (investigators, dates and methods, quality, scope and coverage, etc.)

Follow the guidance provided in the Documenting Data → Microdata → Import and document the dataset → [Study description](https://worldbank.github.io/metadata-editor-docs/documenting_microdata_import_document.html#study-description) section for detailed guidance and best practice on adding study description metadata.

**Overall recommendations:**

- As an archivist, you may need to seek assistance from key experts involved in some of the technical aspects of the survey.
- As a general rule, avoid using ALL CAPS when you fill DDI-C fields. Also, check the spelling of all entries. The Editor does not provide (yet) an automatic spell checker.
- The examples provided in the referenced guidance present an optimal documentation of some fields. In many cases, for past surveys, you will not find such detailed information. Try to provide as much detail as possible. For future surveys, the information should be compiled and provided during the whole life cycle of the survey. This will ensure that the best possible documentation is available at completion of that survey.