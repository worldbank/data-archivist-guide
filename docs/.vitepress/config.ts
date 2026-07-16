import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Guide for Data Archivists',
  description: 'Quick Reference Guide for Data Archivists',
  lang: 'en-US',
  cleanUrls: true,
  lastUpdated: true,

  themeConfig: {   
    siteTitle: 'Data Archivist Guide',

    nav: [
      { text: 'Guide', link: '/introduction' },
      { text: 'Appendix', link: '/appendix/stata-validation' },
    ],

    sidebar: [
      {
        text: 'Quick Reference Guide',
        items: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'Organizing Your Files', link: '/organizing-files' },
          { text: 'Preparing the Data Set', link: '/preparing-data' },
          { text: 'Preparing the Documentation', link: '/preparing-documentation' },
          { text: 'Importing Data', link: '/importing-data' },
          { text: 'Importing External Resources', link: '/importing-resources' },
          { text: 'Adding Metadata', link: '/adding-metadata' },
          { text: 'Creating Variable Groups', link: '/creating-variable-groups' },
          { text: 'Running Diagnostics', link: '/validation' },
          { text: 'Generating PDF Documentation', link: '/pdf-documentation' },
          { text: 'Quality Assessment', link: '/quality-review' },
        ],
      },
      {
        text: 'Appendix',
        items: [
          { text: 'Data Validations in Stata', link: '/appendix/stata-validation' },
          { text: 'DDI Reviewers\' Feedback Form', link: '/appendix/reviewer-feedback-form' },
        ],
      },
    ],

    footer: {
      message: 'World Bank',
      copyright: 'Copyright © 2018 Olivier Dupriez, Diana Marcela Sanchez Castro, Matthew Welch',
    },

    search: {
      provider: 'local',
    },
  },
})
