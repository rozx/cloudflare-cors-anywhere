#!/usr/bin/env node
/**
 * Auto-generate version.js from package.json
 * This ensures DEFAULT_VERSION always matches package.json version
 */
const fs = require('fs');
const path = require('path');

const packageJsonPath = path.join(__dirname, '..', 'package.json');
const versionJsPath = path.join(__dirname, '..', 'version.js');

const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
const version = packageJson.version;

const versionJsContent = `// This file is auto-generated from package.json
// Do not edit manually - run 'npm run update-version' or it will be updated during deployment
export const VERSION = "${version}";
`;

fs.writeFileSync(versionJsPath, versionJsContent, 'utf8');
console.log(`✅ Updated version.js to version ${version}`);

