# swas3301.tech

A full-stack portfolio and web application showcasing modern web development with React and FastAPI.

## 🌟 Features

- **Modern React Frontend**: Built with React 19, Tailwind CSS, and shadcn/ui components
- **FastAPI Backend**: High-performance Python backend with MongoDB integration
- **Responsive Design**: Beautiful, responsive UI with dark mode support
- **Custom Domain**: Hosted at [swas3301.tech](https://swas3301.tech)

## 🛠️ Technology Stack

### Frontend
- **Framework**: React 19
- **Styling**: Tailwind CSS with custom configuration
- **UI Components**: Radix UI primitives, shadcn/ui
- **Animations**: Framer Motion, Spline 3D
- **Build Tool**: Create React App with CRACO
- **Routing**: React Router DOM

### Backend
- **Framework**: FastAPI
- **Database**: MongoDB with Motor (async driver)
- **CORS**: Configured for cross-origin requests
- **Environment**: Python with dotenv for configuration

## 📁 Project Structure

```
swas3301/
├── frontend/               # React application
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── hooks/         # Custom React hooks
│   │   └── lib/           # Utility functions
│   ├── public/            # Static assets
│   └── package.json       # Frontend dependencies
├── backend/               # FastAPI application
│   ├── server.py          # Main server file
│   └── requirements.txt   # Python dependencies
├── docs/                  # Documentation
├── CNAME                  # Custom domain configuration
└── README.md              # This file
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v16 or higher) and npm/yarn
- **Python** (v3.8 or higher)
- **MongoDB** instance (local or cloud)

### Frontend Setup

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install
# or
yarn install

# Create environment file
cp .env.example .env
# Edit .env with your API endpoint

# Start development server
npm start
# or
yarn start
```

The app will open at [http://localhost:3000](http://localhost:3000).

### Backend Setup

```bash
# Navigate to backend directory
cd backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
# On Linux/Mac:
source venv/bin/activate
# On Windows:
venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Create environment file
cp .env.example .env
# Edit .env with your MongoDB credentials

# Start the server
uvicorn server:app --reload
```

The API will be available at [http://localhost:8000](http://localhost:8000).

## 📦 Building for Production

### Frontend

```bash
cd frontend
npm run build
# or
yarn build
```

This creates an optimized production build in the `build/` directory.

### Backend

The backend is production-ready and can be deployed to any Python hosting service:
- **Railway**: One-click Python deployment
- **Render**: Free tier available
- **Vercel**: Serverless Python functions
- **Heroku**: Traditional hosting
- **Google Cloud Run**: Containerized deployment

## 🌐 Deployment

This project is configured for **GitHub Pages** (frontend) with a separate backend deployment.

### Frontend Deployment (GitHub Pages)

The repository includes a GitHub Actions workflow that automatically deploys the frontend to GitHub Pages when you push to the `main` branch.

**Manual deployment**:
```bash
cd frontend
npm run deploy
# or
yarn deploy
```

See [docs/DEPLOYMENT.md](./docs/DEPLOYMENT.md) for detailed deployment instructions.

### Backend Deployment

See [backend/README.md](./backend/README.md) for backend-specific deployment options and configurations.

## 📚 Documentation

- [Development Guide](./docs/DEVELOPMENT.md) - Development workflow and best practices
- [Deployment Guide](./docs/DEPLOYMENT.md) - Complete deployment instructions
- [Backend Documentation](./backend/README.md) - Backend API and setup details

## 🤝 Contributing

This is a personal portfolio project, but suggestions and feedback are welcome! Feel free to open an issue or reach out.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🔗 Links

- **Live Site**: [swas3301.tech](https://swas3301.tech)
- **GitHub**: [github.com/swas3301](https://github.com/swas3301)

---

**Built with** ❤️ **using React, FastAPI, and modern web technologies**
