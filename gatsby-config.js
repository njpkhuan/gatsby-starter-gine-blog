module.exports = {
    plugins: [
        {
            resolve: `gatsby-theme-gine-blog`,
            options: {
                configTable: "https://www.notion.so/zhuyongsheng/65712152f31740a2a048136a35dd3a43?v=28d8880f98dd4aaa971689f2c705a1c2"
            }
        },
        {
            resolve: `gatsby-source-notion-database`,
            options: {
                configTable: "https://www.notion.so/zhuyongsheng/fc82846982724ebeb246dcece8b31f66?v=f83300f1e403448b80d1e1c76dd8d9dd"
            }
        }
    ],
}
