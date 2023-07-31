const questions = [
  {
    name: "Title",
    message: "What is the Title of the project?",
    type: "input",
  },
  {
    name: "Description",
    message: "Describe the project.",
    type: "input",
  },
  {
    name: "Installation",
    message: "What are the installation instructions?",
    type: "input",
  },
  {
    name: "Usage",
    message: "Describe the usage of this project.",
    type: "input",
  },
  {
    name: "License",
    message: "What kind of license is the project using?",
    type: "list",
    choices: [
      "Apache License 2.0",
      "GNU General Public License v3.0",
      "MIT License",
      'BSD 2-Clause "Simplified" License',
    ],
  },
  {
    name: "Contributors",
    message: "How can collaborators contribute to this project?",
    type: "input",
  },
  {
    name: "Tests",
    message: "What tests were done on this project?",
    type: "input",
  },
  {
    name: "GitUserName",
    message: "What is your Github Username?",
    type: "input",
  },
  {
    name: "Email",
    message: "What is your contact email?",
    type: "input",
  },
];

module.exports = questions;
