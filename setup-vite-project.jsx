#!/usr/bin/env node

const fs = require('fs');
const { execSync } = require('child_process');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Helper function to prompt user input
const prompt = (query) =>
  new Promise((resolve) => rl.question(query, resolve));

(async () => {
  try {
    // Prompt for project name
    const projectName = await prompt('Enter the name of your project: ');

    if (!projectName) {
      console.log('Project name is required!');
      rl.close();
      return;
    }

    const dependencies = {
      "@nextui-org/react": "^2.6.11",
      "antd": "^5.23.0",
      "framer-motion": "^11.16.0",
      "prop-types": "^15.8.1",
      "react-icons": "^5.4.0",
      "react-router": "^7.1.1",
      "react-router-dom": "^7.1.1"
    };
    const devDependencies = {
      "eslint-plugin-react-refresh": "^0.4.16",
      "tailwindcss": "^3.4.17",
      "postcss": "^8.4.49",
      "autoprefixer": "^10.4.20"
    };
    const folders = [
      'public/fonts',
      'public/images',
      'src/components/common',
      'src/components/layouts',
      'src/components/ui',
      'src/components/utils',
      'src/constants',
      'src/lib',
      'src/pages'
    ];

    console.log(`Creating Vite project "${projectName}" using bun...`);
    execSync(
      `bun create vite ${projectName} --template react`,
      { stdio: 'inherit' }
    );

    process.chdir(projectName);

    console.log('Running bun install...');
    execSync('bun install', { stdio: 'inherit' });

    console.log('Installing additional dependencies...');
    Object.entries(dependencies).forEach(([dep, version]) => {
      execSync(`bun add ${dep}@${version}`, { stdio: 'inherit' });
    });
    Object.entries(devDependencies).forEach(([dep, version]) => {
      execSync(`bun add -d ${dep}@${version}`, { stdio: 'inherit' });
    });

    console.log('Creating folder structure...');
    folders.forEach((folder) => {
      fs.mkdirSync(folder, { recursive: true });
    });

    console.log('Setting up Tailwind CSS...');
    // Run Tailwind CSS init command
    execSync('bunx tailwindcss init', { stdio: 'inherit' });

    // Add content to tailwind.config.js
    fs.writeFileSync(
      'tailwind.config.js',
      `/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {},
      colors: {
        brand: {},
      },
    },
  },
  plugins: [nextui()],
};
`,
      'utf8'
    );

    // Create postcss.config.js
    fs.writeFileSync(
      'postcss.config.js',
      `export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
`,
      'utf8'
    );

    console.log('Project setup complete with Tailwind CSS configuration!');
  } catch (err) {
    console.error('Error during project setup:', err.message);
  } finally {
    rl.close();
  }
})();
