
# Website-Clone

Website-Clone is a modern web application built with Next.js, React, Material UI (MUI), and Tailwind CSS. It features a dashboard, general settings, billing management, staff management, reporting, ticketing, and more, with a modular and scalable architecture.

## Features

- **Dashboard**: Overview and analytics panels
- **General Settings**: Manage billing, staff, and organization settings
- **Billing Manager**: Formik-powered billing configuration with validation
- **Staff Manager**: Manage staff details
- **Reports**: View and generate reports
- **Ticketing**: Ticket management system
- **Monetization**: Revenue and payment management
- **Logs**: System and activity logs
- **Responsive UI**: Built with MUI and Tailwind CSS for a modern look
- **Sidebar & Navbar**: Persistent navigation with tabbed navigation

## Tech Stack

- [Next.js](https://nextjs.org/) 13+
- [React](https://react.dev/) 18+
- [Material UI (MUI)](https://mui.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Formik](https://formik.org/) & [Yup](https://github.com/jquense/yup) for forms
- [TypeScript](https://www.typescriptlang.org/)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
	```sh
	git clone https://github.com/your-username/website-clone.git
	cd website-clone
	```
2. Install dependencies:
	```sh
	npm install
	# or
	yarn install
	```

### Running the App

Start the development server:

```sh
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

### Build for Production

```sh
npm run build
npm start
# or
yarn build
yarn start
```

## Project Structure

- `app/` - Next.js app directory (routing, pages, layouts)
- `components/` - UI and layout components (Sidebar, Navbar, SecondaryNavbar, etc.)
- `components/ui/` - Custom UI primitives (button, card, dialog, etc.)
- `hooks/` - Custom React hooks
- `lib/` - Utility functions
- `public/` - Static assets

## Customization

- **Theme**: MUI theme is defined in `app/layout.tsx`.
- **Tailwind**: Configured in `tailwind.config.ts` and `app/globals.css`.
- **Aliases**: See `components.json` for import path aliases.

## License

This project is for educational and demonstration purposes.
