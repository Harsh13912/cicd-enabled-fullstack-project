# Deployment Information

## Live URLs
- Frontend: https://cicdfs.netlify.app
- Backend: https://task-manager-backend-47tp.onrender.com
- API Docs: https://task-manager-backend-47tp.onrender.com/api/tasks

## Accounts Used
- GitHub: Harsh13912
- Docker Hub: harsh13912
- Netlify: Connected to GitHub
- Render: Connected to Docker Hub

## CI/CD Pipeline
1. Push code to GitHub main branch
2. GitHub Actions builds backend
3. Docker image pushed to Docker Hub
4. Render auto-deploys from Docker Hub
5. Netlify auto-deploys frontend from GitHub

## Environment Variables
### Frontend (Netlify)
- VITE_API_URL: Backend URL

### Backend (Render)
- SPRING_PROFILES_ACTIVE: prod

## First Deployment
- Backend first deploy: April 10, 2026
- Frontend first deploy: April 10, 2026
- CI/CD activated: April 10, 2026