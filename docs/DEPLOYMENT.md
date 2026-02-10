# Deployment Guide

This guide covers deploying both the frontend and backend of the swas3301.tech application.

## 📋 Table of Contents

- [Frontend Deployment (GitHub Pages)](#frontend-deployment-github-pages)
- [Backend Deployment Options](#backend-deployment-options)
- [Custom Domain Setup](#custom-domain-setup)
- [Environment Configuration](#environment-configuration)

## 🌐 Frontend Deployment (GitHub Pages)

The frontend React application is configured for GitHub Pages deployment.

### Automatic Deployment (Recommended)

The repository includes a GitHub Actions workflow that automatically deploys to GitHub Pages when you push to the `main` branch.

**Setup:**

1. **Enable GitHub Pages** in repository settings:
   - Go to repository Settings → Pages
   - Source: "GitHub Actions"
   - Save

2. **Push to main branch**:
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

3. **Monitor deployment**:
   - Go to Actions tab in GitHub
   - Watch the deployment workflow run
   - Once complete, your site will be live!

### Manual Deployment

If you prefer manual deployment:

```bash
cd frontend

# Install dependencies (first time)
npm install

# Deploy
npm run deploy
```

This builds the app and pushes to the `gh-pages` branch automatically.

### Deployment Workflow Details

The GitHub Actions workflow (`.github/workflows/deploy.yml`):
1. Triggers on push to `main` branch
2. Checks out repository code
3. Sets up Node.js environment
4. Installs frontend dependencies
5. Builds production bundle
6. Deploys to GitHub Pages

### Verifying Deployment

After deployment:
- Visit: `https://swas3301.tech` (or your configured domain)
- Check GitHub Actions for any errors
- Verify all pages and routes work correctly

## 🔧 Backend Deployment Options

The FastAPI backend requires separate hosting. Here are the best options:

### Option 1: Railway (Recommended)

**Pros:** Easy setup, generous free tier, automatic deployments

**Steps:**
1. Sign up at [railway.app](https://railway.app)
2. Click "New Project" → "Deploy from GitHub repo"
3. Select your repository
4. Configure:
   - **Root Directory**: `backend`
   - **Start Command**: `uvicorn server:app --host 0.0.0.0 --port $PORT`
5. Add environment variables:
   - `MONGO_URL`
   - `DB_NAME`
   - `CORS_ORIGINS`
6. Deploy!

**Getting the backend URL:**
- Railway provides a URL like: `https://your-app.railway.app`
- Update frontend `.env` with: `REACT_APP_API_URL=https://your-app.railway.app/api`

### Option 2: Render

**Pros:** Free tier available, simple setup, good documentation

**Steps:**
1. Sign up at [render.com](https://render.com)
2. Click "New" → "Web Service"
3. Connect GitHub repository
4. Configure:
   - **Name**: your-backend-name
   - **Root Directory**: `backend`
   - **Environment**: Python 3
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `uvicorn server:app --host 0.0.0.0 --port $PORT`
5. Add environment variables
6. Create Web Service

**MongoDB Setup:**
- Use MongoDB Atlas (free tier)
- Or add MongoDB service in Render

### Option 3: Vercel (Serverless)

**Pros:** Serverless, automatic deployments, generous free tier

**Steps:**
1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Create `vercel.json` in backend directory:
   ```json
   {
     "version": 2,
     "builds": [
       {
         "src": "server.py",
         "use": "@vercel/python"
       }
     ],
     "routes": [
       {
         "src": "/(.*)",
         "dest": "server.py"
       }
     ]
   }
   ```

3. Deploy:
   ```bash
   cd backend
   vercel --prod
   ```

4. Add environment variables in Vercel dashboard

**Note:** Vercel has limitations with long-running connections.

### Option 4: Google Cloud Run

**Pros:** Very scalable, pay-per-use, containerized

**Steps:**
1. Create `Dockerfile` in backend directory:
   ```dockerfile
   FROM python:3.11-slim
   
   WORKDIR /app
   
   COPY requirements.txt .
   RUN pip install --no-cache-dir -r requirements.txt
   
   COPY . .
   
   CMD ["uvicorn", "server:app", "--host", "0.0.0.0", "--port", "8080"]
   ```

2. Build and deploy:
   ```bash
   gcloud builds submit --tag gcr.io/PROJECT_ID/backend
   gcloud run deploy backend \
     --image gcr.io/PROJECT_ID/backend \
     --platform managed \
     --region us-central1 \
     --allow-unauthenticated
   ```

3. Add environment variables in Cloud Run console

### Option 5: Heroku

**Pros:** Traditional hosting, well-documented

**Steps:**
1. Create `Procfile` in backend directory:
   ```
   web: uvicorn server:app --host 0.0.0.0 --port $PORT
   ```

2. Create `runtime.txt`:
   ```
   python-3.11.0
   ```

3. Deploy:
   ```bash
   heroku login
   heroku create your-app-name
   heroku config:set MONGO_URL=your-mongo-url
   heroku config:set DB_NAME=your-db-name
   heroku config:set CORS_ORIGINS=https://swas3301.tech
   git push heroku main
   ```

## 🗄️ Database Deployment

### MongoDB Atlas (Recommended)

1. Sign up at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster
3. Set up database user and password
4. Whitelist IP addresses (or allow all for development)
5. Get connection string
6. Update `MONGO_URL` in backend environment variables

**Connection String Format:**
```
mongodb+srv://username:password@cluster.mongodb.net/dbname?retryWrites=true&w=majority
```

## 🌍 Custom Domain Setup

### GitHub Pages Custom Domain

Your repository is already configured with `swas3301.tech`:

1. **DNS Configuration** (at your domain registrar):
   - Add A records:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - Or add CNAME record:
     ```
     CNAME: your-username.github.io
     ```

2. **GitHub Settings**:
   - Repository Settings → Pages
   - Custom domain: `swas3301.tech`
   - Enable "Enforce HTTPS"

3. **CNAME File**:
   - Already exists in repository root
   - Contains: `swas3301.tech`

### Backend Custom Domain

If you want a custom domain for your backend:

**Railway:**
- Settings → Domains → Add custom domain
- Follow DNS instructions

**Render:**
- Settings → Custom Domain → Add domain
- Update DNS records

**Vercel:**
- Project Settings → Domains → Add domain
- Follow Vercel's DNS instructions

## ⚙️ Environment Configuration

### Production Frontend Environment

Update frontend to use production backend:

**Option 1: Build-time environment**
```bash
# In frontend/.env.production
REACT_APP_API_URL=https://your-backend-url.com/api
```

**Option 2: Runtime configuration**
Create `frontend/public/config.js`:
```javascript
window.ENV = {
  API_URL: 'https://your-backend-url.com/api'
};
```

### Production Backend Environment

Required environment variables:
```bash
MONGO_URL=mongodb+srv://user:pass@cluster.mongodb.net/
DB_NAME=production_db
CORS_ORIGINS=https://swas3301.tech,https://www.swas3301.tech
```

## 🔍 Post-Deployment Checklist

- [ ] Frontend deployed and accessible at custom domain
- [ ] Backend deployed and API endpoints working
- [ ] Database connected and accessible
- [ ] CORS configured correctly (no errors in browser console)
- [ ] HTTPS enabled on both frontend and backend
- [ ] Environment variables set in production
- [ ] API calls from frontend to backend working
- [ ] Custom domain DNS propagated (may take 24-48 hours)
- [ ] GitHub Actions workflow running successfully

## 🐛 Troubleshooting

### Frontend Issues

**404 on page refresh:**
- GitHub Pages doesn't support client-side routing by default
- Add `404.html` that redirects to `index.html`
- Or use hash routing in React Router

**Assets not loading:**
- Verify `homepage` in `package.json` is correct
- Check browser console for path errors
- Ensure all asset paths are relative

### Backend Issues

**CORS errors:**
```python
# Update CORS_ORIGINS in .env
CORS_ORIGINS=https://swas3301.tech
```

**MongoDB connection fails:**
- Verify connection string
- Check IP whitelist in MongoDB Atlas
- Ensure database user has correct permissions

**API endpoint not found:**
- Check backend logs
- Verify deployment started successfully
- Test endpoints with `/docs` route

### DNS Issues

**Domain not resolving:**
- DNS propagation can take 24-48 hours
- Use [dnschecker.org](https://dnschecker.org) to verify
- Clear browser cache
- Try incognito/private browsing

## 📊 Monitoring

### GitHub Pages
- Check deployment status in Actions tab
- Monitor in repository Insights → Traffic

### Backend Monitoring
- **Railway**: Built-in metrics and logs
- **Render**: Logs and metrics in dashboard
- **Vercel**: Analytics and function logs

## 🔄 Continuous Deployment

With GitHub Actions configured:

1. Make changes to code
2. Commit and push to `main` branch
3. Automatic deployment triggers
4. Monitor in Actions tab
5. Site updates automatically

**For backend**, enable auto-deploy in your hosting platform:
- Connect GitHub repository
- Enable automatic deployments from `main` branch
- Backend updates on every push

## 📚 Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Railway Documentation](https://docs.railway.app/)
- [Render Documentation](https://render.com/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [MongoDB Atlas Guide](https://www.mongodb.com/docs/atlas/)
