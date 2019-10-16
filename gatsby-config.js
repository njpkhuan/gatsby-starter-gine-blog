module.exports = {
    plugins: [
        {
            resolve: `gatsby-theme-gine-blog`,
            options: {
                configTable: ""
            }
        },
        {
            resolve: `gatsby-source-notion-database`,
            options: {
                configTable: ""
            }
        }
    ],
}
