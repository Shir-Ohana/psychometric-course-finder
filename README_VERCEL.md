# Vercel Deployment Guide

This project is configured to be deployed on Vercel as a full-stack application.

## Project Structure for Vercel

- **Frontend**: Built using Vite and served as a Single Page Application (SPA).
- **Backend API**: Serverless functions located in the `api/` directory.
- **Routing**: Managed by `vercel.json` to ensure both API and frontend routes work correctly.

## Deployment Steps

1.  **Connect to GitHub**: Push this project to a GitHub repository.
2.  **Import to Vercel**: Go to [Vercel](https://vercel.com) and import your repository.
3.  **Configure Build Settings**:
    - **Framework Preset**: Vite
    - **Build Command**: `npm run build`
    - **Output Directory**: `dist`
4.  **Environment Variables**:
    - Add `COURSES_CSV_URL` if you want to use a custom Google Sheets CSV URL.
5.  **Deploy**: Click "Deploy".

## Local Development vs. Production

- **Local Development**: Run `npm run dev` to start the Express + Vite server (uses `server.ts`).
- **Production (Vercel)**: Vercel serves the `dist` folder and executes serverless functions in `api/`.
