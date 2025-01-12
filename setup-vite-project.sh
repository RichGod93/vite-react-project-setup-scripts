#!/bin/bash

# Prompt for project name
read -p "Enter the name of your project: " projectName

if [ -z "$projectName" ]; then
  echo "Project name is required!"
  exit 1
fi

# Dependencies
dependencies=(
  "@nextui-org/react@^2.6.11"
  "antd@^5.23.0"
  "framer-motion@^11.16.0"
  "prop-types@^15.8.1"
  "react-icons@^5.4.0"
  "react-router@^7.1.1"
  "react-router-dom@^7.1.1"
)

devDependencies=(
  "eslint-plugin-react-refresh@^0.4.16"
  "tailwindcss@^3.4.17"
  "postcss@^8.4.49"
  "autoprefixer@^10.4.20"
)

folders=(
  "public/fonts"
  "public/images"
  "src/components/common"
  "src/components/layouts"
  "src/components/ui"
  "src/components/utils"
  "src/constants"
  "src/lib"
  "src/pages"
)

# Create Vite project
echo "Creating Vite project \"$projectName\" using bun..."
bun create vite "$projectName" --template react || { echo "Failed to create Vite project"; exit 1; }

# Navigate into project directory
cd "$projectName" || { echo "Failed to enter project directory"; exit 1; }

# Install dependencies
echo "Running bun install..."
bun install || { echo "Failed to install dependencies"; exit 1; }

echo "Installing additional dependencies..."
for dep in "${dependencies[@]}"; do
  bun add "$dep" || { echo "Failed to install dependency $dep"; exit 1; }
done

for devDep in "${devDependencies[@]}"; do
  bun add -d "$devDep" || { echo "Failed to install dev dependency $devDep"; exit 1; }
done

# Create folder structure
echo "Creating folder structure..."
for folder in "${folders[@]}"; do
  mkdir -p "$folder"
done

# Set up Tailwind CSS
echo "Setting up Tailwind CSS..."
bunx tailwindcss init || { echo "Failed to initialize Tailwind CSS"; exit 1; }

# Add content to tailwind.config.js
cat > tailwind.config.js << EOL
/** @type {import('tailwindcss').Config} */
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
EOL

# Create postcss.config.js
cat > postcss.config.js << EOL
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
EOL

echo "Project setup complete with Tailwind CSS configuration!"
