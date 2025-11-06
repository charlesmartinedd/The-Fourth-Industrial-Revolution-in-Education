#!/usr/bin/env node

/**
 * HTML Validation Test Script
 * Validates HTML files for common issues
 */

const fs = require('fs');
const path = require('path');

// Files to validate
const htmlFiles = [
    '../index.html',
    '../book-cover.html'
];

// Validation rules
const validationRules = [
    {
        name: 'DOCTYPE present',
        test: (html) => html.includes('<!DOCTYPE html>'),
        severity: 'error'
    },
    {
        name: 'lang attribute on html tag',
        test: (html) => /<html[^>]*lang=["'][^"']+["']/.test(html),
        severity: 'error'
    },
    {
        name: 'charset meta tag',
        test: (html) => html.includes('<meta charset="UTF-8">'),
        severity: 'error'
    },
    {
        name: 'viewport meta tag',
        test: (html) => html.includes('name="viewport"'),
        severity: 'error'
    },
    {
        name: 'title tag present',
        test: (html) => /<title>.*<\/title>/.test(html),
        severity: 'error'
    },
    {
        name: 'meta description',
        test: (html) => html.includes('name="description"'),
        severity: 'warning'
    },
    {
        name: 'no inline styles (use CSS classes)',
        test: (html) => !/<[^>]*style=["']/.test(html) || html.split('style="').length <= 10,
        severity: 'info'
    },
    {
        name: 'external links use rel="noopener"',
        test: (html) => {
            const externalLinks = html.match(/<a[^>]*target=["']_blank["'][^>]*>/g) || [];
            return externalLinks.every(link => link.includes('rel="noopener'));
        },
        severity: 'warning'
    },
    {
        name: 'ARIA labels on interactive elements',
        test: (html) => {
            const buttons = html.match(/<(button|a)[^>]*class=["']btn/g) || [];
            const withAria = html.match(/aria-label=/g) || [];
            return withAria.length >= buttons.length * 0.5; // At least 50% have ARIA
        },
        severity: 'info'
    },
    {
        name: 'Proper heading hierarchy',
        test: (html) => {
            const h1Count = (html.match(/<h1[^>]*>/g) || []).length;
            return h1Count === 1; // Exactly one h1
        },
        severity: 'warning'
    }
];

// Colors for terminal output
const colors = {
    reset: '\x1b[0m',
    red: '\x1b[31m',
    yellow: '\x1b[33m',
    green: '\x1b[32m',
    blue: '\x1b[34m',
    cyan: '\x1b[36m'
};

function validateFile(filePath) {
    console.log(`\n${colors.cyan}Validating: ${filePath}${colors.reset}`);
    console.log('─'.repeat(60));

    try {
        const fullPath = path.join(__dirname, filePath);
        const html = fs.readFileSync(fullPath, 'utf8');

        let errors = 0;
        let warnings = 0;
        let passed = 0;

        validationRules.forEach(rule => {
            const result = rule.test(html);
            const icon = result ? '✓' : '✗';
            const color = result
                ? colors.green
                : rule.severity === 'error'
                    ? colors.red
                    : rule.severity === 'warning'
                        ? colors.yellow
                        : colors.blue;

            console.log(`${color}${icon}${colors.reset} ${rule.name} (${rule.severity})`);

            if (!result) {
                if (rule.severity === 'error') errors++;
                else if (rule.severity === 'warning') warnings++;
            } else {
                passed++;
            }
        });

        console.log('─'.repeat(60));
        console.log(`${colors.green}Passed: ${passed}${colors.reset} | ${colors.yellow}Warnings: ${warnings}${colors.reset} | ${colors.red}Errors: ${errors}${colors.reset}`);

        return { errors, warnings, passed };
    } catch (err) {
        console.error(`${colors.red}Error reading file: ${err.message}${colors.reset}`);
        return { errors: 1, warnings: 0, passed: 0 };
    }
}

// Run validation
console.log(`${colors.cyan}═══════════════════════════════════════════════════════${colors.reset}`);
console.log(`${colors.cyan}         HTML Validation Test Suite${colors.reset}`);
console.log(`${colors.cyan}═══════════════════════════════════════════════════════${colors.reset}`);

let totalErrors = 0;
let totalWarnings = 0;
let totalPassed = 0;

htmlFiles.forEach(file => {
    const result = validateFile(file);
    totalErrors += result.errors;
    totalWarnings += result.warnings;
    totalPassed += result.passed;
});

console.log(`\n${colors.cyan}═══════════════════════════════════════════════════════${colors.reset}`);
console.log(`${colors.cyan}                  FINAL RESULTS${colors.reset}`);
console.log(`${colors.cyan}═══════════════════════════════════════════════════════${colors.reset}`);
console.log(`Total Tests: ${totalPassed + totalWarnings + totalErrors}`);
console.log(`${colors.green}Passed: ${totalPassed}${colors.reset}`);
console.log(`${colors.yellow}Warnings: ${totalWarnings}${colors.reset}`);
console.log(`${colors.red}Errors: ${totalErrors}${colors.reset}`);

// Exit with error code if errors found
if (totalErrors > 0) {
    console.log(`\n${colors.red}Validation failed with ${totalErrors} error(s)${colors.reset}`);
    process.exit(1);
} else {
    console.log(`\n${colors.green}All validation checks passed!${colors.reset}`);
    process.exit(0);
}
