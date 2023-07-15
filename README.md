# The website is hosted on the cloud at : https://platform-ui.thepineslab.net/

# fe-template-react

This project is an React-based frontend template leveraging React 18.2.0. Our focus is on code quality. We utilize OpenAPI specifications to generate the models and services required for a smooth frontend-to-backend communication.

## 🚀 Getting Started

### 📋 Prerequisites

- Node.js and npm (Download and install from the [official Node.js website](https://nodejs.org/en/download/))
- Git (Download and install from the [official Git website](https://git-scm.com/downloads))

### ⬇ Clone and Install Dependencies

First, clone the repository to your local machine with submodules:

```shell
git clone --recurse-submodules git@ssh.dev.azure.com:v3/cleverpine/CP%20Internship%2007-2023/platform-ui
cd fe-template-react
```

Next, install the dependencies:

```shell
npm install
```

### 🏗 Generate Services for API requests

Generate the services using the OpenAPI specifications:

```shell
npm run generate-all
```

## 🛠 Development server

For the dev server, run:

```shell
npm run start
```

Navigate to `http://localhost:3000/`. The app will automatically reload if you change any of the source files.

## 📦 Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

To watch for changes and rebuild automatically, use:

```shell
npm run watch
```

## ✨ Code Quality

We use ESLint for linting and Prettier for code formatting.

- Run the linter with `npm run lint` and
- Run the prettier with `npm run prettier`.
- To automatically fix issues found by the linter, use `npm run lint:fix`.
- To run both scripts, use `npm run prebuild`.

## 🧬 Dependencies

This project uses React

16.2.0 framework and several supporting libraries, including:

- React Material for UI components
- virava for authentication
- openapi-gen to generate services from OpenAPI specs
