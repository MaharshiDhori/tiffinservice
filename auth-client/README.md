# Tiffin Service

This project consists of a React frontend and a Node.js backend connected to MongoDB. The frontend allows users to interact with the service, and the backend handles API requests and stores data in MongoDB.

## Table of Contents
- [Frontend (React)](#frontend-react)
- [Backend (Node.js)](#backend-nodejs)
- [Running the Project Locally](#running-the-project-locally)
- [Technologies Used](#technologies-used)
- [Deployment](#deployment)

## Frontend (React)

The frontend is built using React and communicates with the backend API. It provides the user interface for the Tiffin Service, including registration, login, and other features.

### Available Scripts

In the project directory, you can run:

### `npm start`

Runs the frontend app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include hashes.\
Your app is ready to be deployed!

## Backend (Node.js)

The backend is built with Node.js and connected to MongoDB using the Mongoose library. It exposes APIs for the frontend to interact with, such as registering users, handling orders, and more.

### Available Backend Scripts

In the backend directory, you can run:

### `npm start`

Runs the backend server.\
The server will be available at [http://localhost:5000](http://localhost:5000).

### `npm run dev`

Runs the server with nodemon for automatic reloading during development.

## Running the Project Locally

To run the project locally, follow these steps:

### 1. Clone the repository:

```bash
git clone https://github.com/MaharshiDhori/tiffinservice.git
