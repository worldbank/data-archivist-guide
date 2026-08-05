import { defineConfig } from 'vitepress'
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
    },
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
          { text: '1. Introduction', link: '/introduction' },
          { text: '2. Before you start - organize your files', link: '/organizing-files' },
          {
            text: '3. Gathering and preparing the data set',
            link: '/preparing-data',
            collapsed: true,
            items:[
{ text: '3.1. File organization', link: '/preparing-data#_3-1-data-files-should-be-organized-in-a-hierarchical-format' },
{ text: '3.2. Check file structure and coverage', link: '/preparing-data#_3-2-check-file-structure-and-coverage' },
{ text: '3.3. Verify record counts', link: '/preparing-data#_3-3-verify-that-the-number-of-records-in-each-file-corresponds-to-what-is-expected' },
{ text: '3.4. Validate unique identifiers', link: '/preparing-data#_3-4-each-observation-in-every-file-must-have-a-unique-identifier' },
{ text: '3.5. Check for duplicates', link: '/preparing-data#_3-5-identifying-duplicate-observations' },
{ text: '3.6. Verify file relationships', link: '/preparing-data#_3-6-ensure-that-each-individual-dataset-can-be-combined-into-a-single-database' },
{ text: '3.7. Validate data types', link: '/preparing-data#_3-7-check-that-the-data-types-are-correct' },
{ text: '3.8. Check variables with missing values', link: '/preparing-data#_3-8-check-for-variables-with-missing-values' },
{ text: '3.9. Validate value ranges', link: '/preparing-data#_3-9-check-improper-value-ranges' },
{ text: '3.10. Verify weights and strata', link: '/preparing-data#_3-10-verify-weights-and-strata' },
{ text: '3.11. Check variable and value labels', link: '/preparing-data#_3-11-variables-and-codes-for-categorical-variables-must-be-labelled' },
{ text: '3.12. Assess variable relevance', link: '/preparing-data#_3-12-assess-variable-relevance' },
{ text: '3.13. Verify file size', link: '/preparing-data#_3-13-compress-the-variables-to-reduce-the-file-size' },
{ text: '3.14. Protect respondent privacy', link: '/preparing-data#_3-14-protect-respondent-privacy' }
],
          },
          { text: '4. Gathering and preparing the documentation', link: '/preparing-documentation' },
          {
            text: '5. Creating structured metadata',
            link: '/creating-structured-metadata',
            collapsed: true,
            items: [
              { text: '5.1. Document description', link: '/creating-structured-metadata#_5-1-good-practices-for-completing-the-document-description' },
              { text: '5.2. Study description', link: '/creating-structured-metadata#_5-2-good-practices-for-completing-the-study-description' },
              { text: '5.3. File description', link: '/creating-structured-metadata#_5-3-good-practices-for-completing-the-file-description' },
              { text: '5.4. Variable description', link: '/creating-structured-metadata#_5-4-good-practices-for-completing-the-variable-description' },
              { text: '5.5. Variable groups', link: '/creating-structured-metadata#_5-5-creating-variable-groups' },
            ],
          },
          { text: '6. Creating external resource metadata', link: '/importing-resources' },    
          { text: '7. Quality assessment', link: '/quality-review-checklist' },
          { text: '8. Generating the survey documentation in PDF', link: '/pdf-documentation' },
          { text: '9. Cataloging data, metadata and resources', link: '/pushing-to-nada' },
        ],
      },
      {
        text: 'Appendix',
        items: [
          { text: 'Data validations in stata', link: '/appendix/stata-validation' },
          { text: 'Quality assessment and feedback form', link: '/media/microdata-documentation-quality-review-checklist-checkboxes.docx' },
        ],
      },
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
