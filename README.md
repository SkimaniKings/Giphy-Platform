# Giffinity – GIFs Without Limits

## Overview
Giffinity is a modern web platform that allows users to search, explore, share, favorite, and download GIFs seamlessly. Built using React with Vite and powered by the Giphy API, Giffinity delivers a fast, responsive, and interactive user experience.

The project demonstrates practical implementation of API integration, responsive UI design, and cloud-based deployment through Vercel.
Project Objectives
1. API Integration: Implement the Giphy API for retrieving and displaying trending and searchable GIFs.
2. User Interactivity: Provide features such as favorites, share options, and download redirects.
3. Performance: Leverage Vite for faster builds and hot module replacement (HMR).
4. Deployment: Host the project on Vercel for scalability and accessibility.
5. Learning: Demonstrate full-stack readiness for modern web applications.

### Features
- Search GIFs in real time using the Giphy API.
- Categories fetched directly from Giphy.
- Favorites: Save your favorite GIFs for quick access.
- Share: Multiple share options (social media, link copy).
- Download Redirect: Users are redirected to the Giphy source to download the original file.
- Responsive Design: Works across desktop and mobile screens.
### Tech Stack
- Frontend: React (Vite + JSX)
- Styling: TailwindCSS
- Icons: React Icons (Heroicons)
- API: Giphy Developer API
- State Management: React Context API
- Deployment: Vercel

## Installation & Setup
Prerequisites:
- Node.js v16+
- npm v8+
- Giphy API key (register at https://developers.giphy.com/)

### Steps:
1. Clone the Repository
   git clone https://github.com/your-username/giffinity.git
   cd giffinity

2. Install Dependencies
   npm install

3. Configure Environment Variables
   Create a .env file in the root directory and add:
   VITE_GIPHY_KEY=your_api_key_here

4. Run Development Server
   npm run dev

5. Build for Production
   npm run build

6. Preview Production Build
   npm run preview
## Deployment (Vercel)
1. Push project to GitHub.
2. Login to Vercel and import project.
3. Add the .env variable (VITE_GIPHY_KEY) under Project Settings → Environment Variables.
4. Deploy!
practices using Vercel.

## License
This project is licensed under the MIT License.
Author
#### Simon Kimani
- GitHub: https://github.com/SkimaniKings
- LinkedIn: [www.linkedin.com/in/simon-kimani-b78963196]

