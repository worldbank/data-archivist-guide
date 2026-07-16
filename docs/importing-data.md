# Importing and documenting data

After all data and documentation files are gathered and checked, import the data files in the Editor. In the Metadata Editor, order the files in a logical fashion (e.g., sequentially through sections).

::: note
If you are documenting a population census and have very large data files, it is recommended to split the files by geographic area. Typically, you will have a file at individual level, one at the household level, and possibly one at the community level, for each State or Province. In such case, import all files for one State or Province only. You will import the other data files after you complete the documentation of the files. This will considerably reduce the time needed to save your files. The Metadata Editor will allow you to replicate the metadata from the documented files to all other data files that you will import later.
:::

After all files are imported and ordered in a proper sequence, define the key variables for each data file. The base key variable(s) in a data file is (are) the variable(s) that provide the unique identifier of each record in that specific data file.

Detailed information and examples on how to import data are provided in the Metadata Editor guide - see Documenting Data → Microdata → Import and Document the Dataset → [Data Files](https://worldbank.github.io/metadata-editor-docs/documenting_microdata_import_document.html#data-files).

::: tip Checking invalid codes
It is good practice to quickly browse all variables in all data files to visually check the frequencies. This will allow you to easily spot some outliers or invalid codes, which will require recoding (which can be done in the Editor or in the source data files which will then have to be re-imported).
::: 

![image](/media/check_categories.png)

When you have imported and documented the data, save the project. The Editor enables you to export the structured metadata, download the metadata or the full package, or conveniently push the metadata to a linked NADA catalog.
