const fs = require("fs");

fs.writeFileSync("./.env", "API=${PROCESS.ENV.api}\n")