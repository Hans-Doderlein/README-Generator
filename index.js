const inquirer = require("inquirer");
const fs = require("fs");
const questions = require("./questions");
const createReadmeContent = require("./template");

inquirer.prompt(questions).then((response) => {
  // write file
  fs.writeFileSync("README.md", createReadmeContent(response), {
    encoding: "utf-8",
  });
});
