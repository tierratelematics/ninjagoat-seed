module.exports = {
    "projectType": "frontend",
    "preBuild": () => require("smild-extra").ViewsImport()
};