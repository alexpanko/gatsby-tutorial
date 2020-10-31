/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata:{
    title:"Gatsby Tutorial",
    description:'some randome description',
    author: '@jonedoe',
    data: ['item1', 'item2'],
    person: { name: "peter", age: 32}
  },
  plugins: [`gatsby-plugin-styled-components`],
}
