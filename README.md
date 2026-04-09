# AngularJS + React Node.js Demo

A demonstration web application integrating both an AngularJS and a React frontend with a Node.js/Express backend. The Express server provides a simple `/api/message` endpoint, and both frontends fetch and display the greeting.

## Prerequisites

- [Node.js](https://nodejs.org/) (v16 or later recommended)
- npm

## Install Dependencies

```bash
npm install
cd react-app && npm install
```

## Development

### Start the Express Backend

```bash
npm start
```

The server runs at [http://localhost:3000](http://localhost:3000).

- AngularJS app: [http://localhost:3000](http://localhost:3000)
- API endpoint: [http://localhost:3000/api/message](http://localhost:3000/api/message)

### Start the React Dev Server (Vite)

In a separate terminal:

```bash
npm run dev:react
```

The React app runs at [http://localhost:5173](http://localhost:5173) with API requests proxied to the Express backend.

## Production Build (React)

Build the React app for production:

```bash
cd react-app && npm run build
```

Then start the Express server:

```bash
npm start
```

Access the React production build at [http://localhost:3000/react](http://localhost:3000/react).

## Project Structure

```
├── public/              # AngularJS frontend
│   ├── index.html
│   └── js/app.js
├── react-app/           # React frontend (Vite)
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
├── server.js            # Express backend
├── package.json         # Root package.json
└── .gitignore
```
