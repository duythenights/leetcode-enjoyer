#!/usr/bin/env node

/**
 * Test runner script for LeetCode problems
 * Usage: node test-runner.js <problem-id>
 * Example: node test-runner.js 1
 *
 * Or use npm script: npm run t 1
 */

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const args = process.argv.slice(2);

if (args.length === 0) {
  console.log("❌ Please provide a problem ID");
  console.log("Usage: node test-runner.js <problem-id>");
  console.log("Example: node test-runner.js 1");
  process.exit(1);
}

const problemId = args[0];

// Find the exact test file for this problem ID
const difficulties = ["easy", "medium", "hard"];
let testFile = null;

for (const difficulty of difficulties) {
  const difficultyPath = path.join(__dirname, difficulty);
  if (fs.existsSync(difficultyPath)) {
    const files = fs.readdirSync(difficultyPath);
    // Look for exact match: {problemId}-*.test.js
    const matchedFile = files.find((file) => {
      const match = file.match(/^(\d+)-.+\.test\.js$/);
      return match && match[1] === problemId;
    });

    if (matchedFile) {
      testFile = path.join(difficulty, matchedFile);
      break;
    }
  }
}

if (!testFile) {
  console.log(`\n❌ No test file found for problem #${problemId}`);
  console.log(
    `\nMake sure you have a file like: easy/${problemId}-problem-name.test.js\n`
  );
  process.exit(1);
}

console.log(`\n🧪 Running tests for problem #${problemId}...\n`);
console.log(`📁 Test file: ${testFile}\n`);

try {
  // Run jest on the specific file only
  execSync(`npx jest "${testFile}"`, { stdio: "inherit" });
} catch (error) {
  console.log(`\n❌ Tests failed for problem #${problemId}\n`);
  process.exit(1);
}
