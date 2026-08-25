import { defineConfig } from 'vitepress'
// @ts-ignore
import footnote from 'markdown-it-footnote'

export default defineConfig({
  title: 'Guide for Data Archivists',
  description: 'Quick Reference Guide for Data Archivists',
  lang: 'en-US',
  cleanUrls: true,
  lastUpdated: true,
  ignoreDeadLinks: [
    '/media/microdata-documentation-quality-review-checklist-checkboxes.docx'
  ],

  markdown: {
    config: (md) => {
      md.use(footnote)
    }
  },

  themeConfig: {   
    logo: '/media/WBG_Horizontal-RGB-high.png',
    siteTitle: false,
    outline: false, // Disable the "On this page" sidebar

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/introduction' },
      { text: 'Appendix', link: '/appendix/stata-validation' },

    ],

    sidebar: [
      {
        text: 'Quick Reference Guide for Microdata Archivists',
        items: [
          { text: 'Acknowledgements', link: '/acknowledgements' },          
          { text: 'Introduction', link: '/introduction' },
          { text: '1. Organizing The Folder Structure', link: '/organizing-files' },
          {
            text: '2. Gathering and Preparing the Data Set',
            link: '/preparing-data',
            collapsed: true,
            items:[
{ text: '2.1. File Organization', link: '/preparing-data#_2-1-data-files-should-be-organized-in-a-hierarchical-format' },
{ text: '2.2. Check File Structure and Coverage', link: '/preparing-data#_2-2-check-file-structure-and-coverage' },
{ text: '2.3. Verify Record Counts', link: '/preparing-data#_2-3-verify-that-the-number-of-records-in-each-file-corresponds-to-what-is-expected' },
{ text: '2.4. Validate Unique Identifiers', link: '/preparing-data#_2-4-each-observation-in-every-file-must-have-a-unique-identifier' },
{ text: '2.5. Check for Duplicates', link: '/preparing-data#_2-5-identifying-duplicate-observations' },
{ text: '2.6. Verify File Relationships', link: '/preparing-data#_2-6-ensure-that-each-individual-dataset-can-be-combined-into-a-single-database' },
{ text: '2.7. Validate Data Types', link: '/preparing-data#_2-7-check-that-the-data-types-are-correct' },
{ text: '2.8. Check Variables with Missing Values', link: '/preparing-data#_2-8-check-for-variables-with-missing-values' },
{ text: '2.9. Validate Value Ranges', link: '/preparing-data#_2-9-check-improper-value-ranges' },
{ text: '2.10. Verify Weights and Strata', link: '/preparing-data#_2-10-verify-weights-and-strata' },
{ text: '2.11. Check Variable and Value Labels', link: '/preparing-data#_2-11-variables-and-codes-for-categorical-variables-must-be-labelled' },
{ text: '2.12. Assess Variable Relevance', link: '/preparing-data#_2-12-assess-variable-relevance' },
{ text: '2.13. Verify File Size', link: '/preparing-data#_2-13-compress-the-variables-to-reduce-the-file-size' },
{ text: '2.14. Protect Respondent Privacy', link: '/preparing-data#_2-14-protect-respondent-privacy' }
],
          },
          { text: '3. Gathering and Preparing the Documentation', link: '/preparing-documentation' },
          {
            text: '4. Documenting the Study, Data File(s) and Variables',
            link: '/creating-structured-metadata',
            collapsed: true,
            items: [
              { text: '4.1. Document Description', link: '/creating-structured-metadata#_4-1-good-practices-for-completing-the-document-description' },
              { text: '4.2. Study Description', link: '/creating-structured-metadata#_4-2-good-practices-for-completing-the-study-description' },
              { text: '4.3. File Description', link: '/creating-structured-metadata#_4-3-good-practices-for-completing-the-file-description' },
              { text: '4.4. Variable Description', link: '/creating-structured-metadata#_4-4-good-practices-for-completing-the-variable-description' },
              { text: '4.5. Variable Groups', link: '/creating-structured-metadata#_4-5-creating-variable-groups' },
            ],
          },
          { text: '5. Documenting External Resources', link: '/documenting-resources' },
          { text: '6. Quality Assessment', link: '/quality-review-checklist' },
          { text: '7. Generating the Output for Publication', link: '/generating-output' },
          { text: '8. Cataloging Data, Metadata and Resources', link: '/pushing-to-nada' },
          { text: 'Data Discoverability', link: '/discoverability' },
          { text: 'Conclusion', link: '/conclusion' },
        ],
      },
      {
        text: 'Appendix',
        items: [
          { text: 'Administrative Data Documentation', link: '/appendix/admin_data' },
          { text: 'Data Validations in Stata', link: '/appendix/stata-validation' },
          { text: 'Quality Assessment and Feedback Form', link: '/media/microdata-documentation-quality-review-checklist-checkboxes.docx' },
        ],
      }      
    ],

    footer: {
      message: 'The World Bank',
      copyright: 'Copyright © 2026',
    },

    search: {
      provider: 'local',
    },
  },
})
