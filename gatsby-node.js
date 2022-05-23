const fs = require("fs-extra")
const path = require("path")

// exports.createPages = async ({ actions }) => {
// const { createPage } = actions
// createPage({
//   path: "/using-dsg",
//   component: require.resolve("./src/templates/using-dsg.js"),
//   context: {},
//   defer: true,
// })
// }

exports.onPostBuild = () => {
  console.log("Copying locales")
  fs.copySync(
    path.join(__dirname, "/locales"),
    path.join(__dirname, "/public/locales")
  )
}
