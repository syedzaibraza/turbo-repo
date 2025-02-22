const { execSync } = require("child_process");

const appName = process.argv[2] || "order-x";

execSync(`turbo run dev --filter=${appName}`, { stdio: "inherit" });
