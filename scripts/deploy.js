#!/usr/bin/env node
/**
 * Cross-platform deploy script
 * Reads version from package.json and passes it to wrangler deploy
 */
const { execSync } = require("child_process");
const path = require("path");

const packageJsonPath = path.join(__dirname, "..", "package.json");
const { version } = require(packageJsonPath);

console.log(`🚀 Deploying version ${version}...`);

execSync(`wrangler deploy --var VERSION:${version}`, {
    stdio: "inherit",
    cwd: path.join(__dirname, "..")
});
