module.exports = {
    plugins: [
        {
            resolve: `gatsby-theme-gine-blog`,
            options: {
                configTable: "https://www.notion.so/zhuyongsheng/c61134e46e0946eca1b6fa2211983c5b?v=44c5f60e68334b718b1a5794d98128f9"
            }
        },
        {
            resolve: `gatsby-source-notion-database`,
            options: {
                configTable: "https://www.notion.so/zhuyongsheng/d9cc1cc8308b4e09b6d06798bfe1eca8?v=db5ce5c951d0498a8be00a33949ed52d"
            }
        }
    ],
}
