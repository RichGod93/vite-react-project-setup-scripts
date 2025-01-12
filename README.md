# Vite Project Automation Scripts

Automate the setup of Vite + React projects with a fully customizable folder structure, essential dependencies, and Tailwind CSS configuration. This repository contains powerful scripts designed to save time and streamline the process of bootstrapping Vite projects, making it easier to focus on coding rather than configuration.

## 🚀 Features

- Automates project creation using Vite with the React template.
- Installs additional dependencies like `@nextui-org/react`, `antd`, and more.
- Sets up Tailwind CSS with pre-configured `tailwind.config.js` and `postcss.config.js`.
- Automatically creates a customizable folder structure:
  - `public/fonts`, `public/images`
  - `src/components` with subfolders (`common`, `layouts`, `ui`, `utils`)
  - `src/constants`, `src/lib`, `src/pages`
- Works in both Node.js and Bash environments for flexibility.

## 📖 Getting Started

### Prerequisites

- Bun installed on your system.
- Node.js installed if using the JavaScript version of the script.
- Basic understanding of Bash scripting if using the Bash version.

### Cloning the Repository

```sh
git clone https://github.com/your-username/vite-project-automation-scripts.git
cd vite-project-automation-scripts
```

### Using the Bash Script

Make the script executable:

```sh
chmod +x setup-vite-project.sh
```

Run the script:

```sh
./setup-vite-project.sh
```

Follow the prompts to enter the project name. The script will handle the rest.

### Using the Node.js Script

Run the script:

```sh
node setup-vite-project.jsx
```

Follow the prompts to enter the project name. The script will handle the rest.

## 🛠 Folder Structure

The scripts create the following folder structure in your project:

my-project/
├── public/
│ ├── fonts/
│ ├── images/
├── src/
│ ├── components/
│ │ ├── common/
│ │ ├── layouts/
│ │ ├── ui/
│ │ ├── utils/
│ ├── constants/
│ ├── lib/
│ ├── pages/

## 🌐 Article on Usage

For a detailed walkthrough of the scripting journey and how to use these scripts effectively, check out my article:
How Scripting Made Setting Up Vite + React Projects 100x Easier

## 🤝 Contributing

Contributions are welcome! If you have ideas for:

- Expanding the script to support other frameworks or templates.
- Adding features like CI/CD configuration, reusable components, or API integrations.
- Improving script performance or usability.

Feel free to fork the repository and submit a pull request.

### Steps to Contribute

- Fork the repository.
- Create a new branch:

```sh
git checkout -b feature-name
```

Commit your changes:

```sh
git commit -m "Add feature-name"
```

Push the branch:

```sh
git push origin feature-name
```

Open a pull request.

## 💡 Future Plans

- Support for additional templates and frameworks (e.g., Vue, Svelte).
- Automating CI/CD pipeline setup.
- Generating reusable component templates.
- Creating environment-specific configurations for testing and deployment.

## 📜 License

This project is licensed under the MIT License. See the LICENSE file for details.

With these scripts, setting up Vite projects is no longer a chore. Let’s build faster and smarter! 🚀
