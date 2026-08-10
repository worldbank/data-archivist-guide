# 7. Generating the Output for Publication

When you have completed the necessary checks and addressed quality issues, the next step is to export the metadata for publication in NADA or other platforms, archiving and sharing as needed. The Metadata Editor is equipped with the functionality to export metadata to machine readable formats, generating the DDI Codebook in XML and JSON for microdata, and RDF for external resource metadata. These files are machine and human-readable, and can be ingested into online cataloging systems line NADA, DataVerse etc. Users can also export the metadata to a PDF report formatted for human readability and easy navigation across the metadata sections. Generating the PDF document is optional, and the file can also be distributed along with the data as an external resource. Note that whenever the metadata is updated, these files need to be re-generated to capture the revisions.


::: warning
The PDF report will include a list of all external resources
related to the study. This list should include this PDF report
itself. **Before** you generate it, make sure you create one entry
in the External Resources for documenting this report. Immediately
after you generate the PDF report, import it in the Editor.
:::

One thing to keep in mind is that in a dataset with a large number of variables may produce a document that is very long. If the report is in excess of 300 or 350 pages, you may want to split this report (e.g., produce one report with the study metadata, and one with the files and variables metadata), or change the content options (e.g., not including a frequency table for all variables).

If your agency has a website, you may upload this PDF directly to the web server. [The IHSN](https://ihsn.org/about) recommends the use of a proper DDI-C compliant cataloguing system, such as the one provided by its National Data Archive (NADA) application. NADA is an open source package, available free of charge at [ihsn.org](https://nada.ihsn.org/).

The Metadata Editor also facilitates exporting all the data, resources and metadata to a project level .ZIP that can be pushed to a catalog, shared or re-imported into the Metadata Editor. The next section covers cataloging data and and metadata. 