# GIVA

GIVA is a mobile-first personal finance app designed to help people see and plan their money in one place.

**Status:** Early development; active project. The current app is a UI prototype with sample data. Transactions are not saved, and backend services are not connected.

## Tech stack

- React Native
- Expo
- TypeScript
- Expo Router

## Current features

- Three-screen onboarding flow
- Welcome and account form screens (presentation only; no authentication)
- Initial balance setup screen
- Home dashboard with sample balance, spending, goal, upcoming item, and transaction information
- Activity, Plans, and Insights sections with empty states
- Add transaction preview with expense, income, and transfer selection

## Planned features

- Save and manage transactions
- Complete activity history, spending plans, and financial insights
- Persistent storage and backend integration
- Secure account creation and sign-in

## Getting started

Install [Node.js](https://nodejs.org/) and npm, then install the project dependencies:

```sh
npm install
```

Start the Expo development server:

```sh
npm start
```

To run the app with Expo Go, install Expo Go on your iOS or Android device, connect the device and development computer to the same network, then scan the QR code shown by the Expo development server. Follow the Expo Go prompt to open GIVA.

This project is under active development. Features and project structure may change as work continues.
