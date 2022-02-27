const promptUser = require("./utils/promptUser");

promptUser().then((data) => console.log(data.employees));
