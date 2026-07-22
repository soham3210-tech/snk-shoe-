# Spectastyle — MERN E-Commerce App

A full-stack e-commerce web app for shoes and electronics built with React + Vite (frontend) and Node.js + Express + MongoDB (backend).

## Architecture

- **Frontend**: React 19 + Vite, MUI, React Router, Axios — runs on port 5000 (webview)
- **Backend**: Node.js + Express + Mongoose — runs on port 3001
- **Database**: MongoDB Atlas (cloud-hosted)
- **Proxy**: Vite dev server proxies `/ecommerce`, `/visitcount`, and `/checkout` requests to the backend at port 3001

## How to Run

Two workflows run automatically:

| Workflow | Command | Port |
|---|---|---|
| `Start application` | `cd frontend && npm run dev -- --port 5000 --host` | 5000 (webview) |
| `Backend API` | `cd backend && PORT=3001 node index.js` | 3001 (console) |

## Key Files

- `frontend/src/Pages/Product.jsx` — Products listing page
- `frontend/src/Components/ProductDetail.jsx` — Product details modal
- `frontend/vite.config.js` — Vite config with API proxy and `allowedHosts: true`
- `backend/index.js` — Express entry point
- `backend/Routes/` — API route definitions
- `backend/Controller/` — Route handlers
- `backend/Models/` — Mongoose schemas

## Environment Variables

Backend reads from `backend/.env`:
- `MONGO_URI` — MongoDB Atlas connection string
- `JWT_SECRET` — JWT signing secret
- `PORT` — overridden to 3001 by the workflow command

## API Routes (all prefixed `/ecommerce`)

- `GET /ecommerce/product` — all products
- `GET /ecommerce/product/products/:id` — single product by ID
- `POST /ecommerce/product/addProductToCart/:userId` — add to cart
- `GET /ecommerce/product/shopping-cart/:userId` — get cart
- `DELETE /ecommerce/product/shopping-cart/:userId/:productId` — remove from cart
- `POST /ecommerce/product/products/:productId/reviews/:userId` — add review
- `GET/POST /visitcount` — visit counter

## User Preferences

- Minimal changes policy: only modify files that need to change
- Do not restructure or migrate the project stack
