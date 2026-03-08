# Alfredo Salzillo's Personal Website

This is my personal website, built with modern web technologies and hosted on GitHub Pages. You can visit it at [alfredosalzillo.me](https://alfredosalzillo.me).

## 🚀 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **UI Library:** [Material UI (MUI)](https://mui.com/)
- **Linter/Formatter:** [Biome](https://biomejs.dev/)
- **API Integrations:** [GitHub](https://github.com/) (GraphQL API), [Google Analytics](https://analytics.google.com/)
- **Hosting:** [GitHub Pages](https://pages.github.com/)

## 🛠️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 25.6.0 or higher recommended, managed by Volta)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/alfredosalzillo/alfredosalzillo.github.io.git
   cd alfredosalzillo.github.io
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Run the development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📜 Available Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm run start`: Starts the production server.
- `npm run lint`: Runs Biome to check for linting issues.
- `npm run lint:fix`: Automatically fixes linting issues.
- `npm run format`: Formats the code using Biome.
- `npm run generate`: Generates GraphQL types using GraphQL Codegen.
- `npm run generate:tada`: Generates GraphQL types using gql.tada.
- `npm run generate:favicon`: Generates favicon from logo.

## ✨ Features

- **Project Showcase:** Displays pinned GitHub repositories dynamically using GraphQL.
- **Responsive Design:** Optimized for various screen sizes using Material UI.
- **Type Safety:** Comprehensive TypeScript integration and GraphQL type generation with `gql.tada`.
- **Analytics:** Integrated Google Analytics for tracking visitor engagement.

