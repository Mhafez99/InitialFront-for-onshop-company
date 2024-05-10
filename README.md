# OnShop Frontend Design

## Introduction

Welcome to ChawkBazar, the fastest e-commerce template built with cutting-edge technologies like React, Next.js, TypeScript, @tanstack/react-query, and Tailwind CSS. It's designed to be incredibly easy to use, allowing you to set up your API endpoints seamlessly. Your frontend team will love working with it!

## Requirements

Make sure you have the following installed:

- Node.js (version 18.17.0 or later)
- Yarn (version 1.22.19)
- Editor: Visual Studio Code (recommended)

## Technologies Used

Here are the technologies we've used in this template:

- [React](https://reactjs.org/)
- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [@tanstack/react-query](https://tanstack.com/query/latest)
- [Axios](https://axios-http.com/)
- [Tailwind CSS](https://tailwindcss.com/)

## Getting Started & Installation

Follow these steps to get started with ChawkBazar:

### Step 1: Configure your environment file

In the project directory, rename the `.env.local.template` file to `.env.local`. Ensure you replace the placeholder values with your actual API endpoint for production use.

### Step 2: Running the project

Navigate to the `chawkbazar` directory and run the following commands:

```bash
# Navigate to chawkbazar directory
$ yarn
$ yarn dev # Run the template for development
```

To test your production build locally, use these commands:

```bash
# Build for production
yarn build

# Start template in production mode
yarn start
```

## Folder Structure & Customization

Here's an overview of the folder structure and how you can customize the template:

- `src/settings/site-settings.ts`: Set up your site's basic information such as logo, site title, description, menus, etc.
- `tailwind.config.js`: Customize Tailwind CSS configuration.
- `/public`: Contains API data, favicon, and multi-language assets.
- `/src/components`: UI components for the template.
- `/src/containers`: Common sections-related components.
- `/src/contexts`: Necessary context for the template, e.g., cart, UI.
- `/src/framework`: Data fetching-related code.
- `/src/pages`: Pages created for Next.js routing.
- `/src/settings`: Site basic settings like privacy page, terms page, etc.
- `/src/styles`: Custom CSS and overrides.
- `/src/utils`: Hooks, routes, motion effects, etc.

## Multi-Language Support

ChawkBazar supports multiple languages using the next-i18next package. Add language-specific folders under `/public/locales` to add more languages.

## RTL Support

The RTL (Right-to-Left) layout is supported. Modify `/src/utils/get-direction.ts` according to your needs.


## Data Fetching

We've used @tanstack/react-query for data fetching. While we've provided basic REST API integration, you'll need to customize it for your actual API endpoints. Find more details in the documentation.

## Configuration & Deployment

### Deployment on Vercel

To host the template on Vercel:

- Navigate to `chawkbazar`.
- Set your API endpoint in `vercel.json`.
- Run the command `vercel`.

For more information on deploying with Vercel, visit [Vercel Documentation](https://vercel.com/docs/cli).

For other hosting providers, refer to the [Next.js Documentation](https://nextjs.org/docs/deployment).

Enjoy using ChawkBazar for your e-commerce project!

![image](https://github.com/Mhafez99/InitialFront-for-onshop-company/assets/76824315/86d16b4f-ce76-4593-bd2f-bd0086fd53a5)

