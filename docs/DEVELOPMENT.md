# Development Guide

This guide covers the development workflow and best practices for the swas3301.tech project.

## 🚀 Quick Start

### Initial Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/swas3301/swas3301.git
   cd swas3301
   ```

2. **Frontend setup**:
   ```bash
   cd frontend
   npm install
   cp .env.example .env
   # Edit .env with your configuration
   npm start
   ```

3. **Backend setup** (in a new terminal):
   ```bash
   cd backend
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   pip install -r requirements.txt
   cp .env.example .env
   # Edit .env with your MongoDB credentials
   uvicorn server:app --reload
   ```

## 🛠️ Development Workflow

### Daily Development

1. **Start backend**:
   ```bash
   cd backend
   source venv/bin/activate
   uvicorn server:app --reload
   ```

2. **Start frontend** (new terminal):
   ```bash
   cd frontend
   npm start
   ```

3. **Access the application**:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:8000
   - API Docs: http://localhost:8000/docs

### Making Changes

#### Frontend Changes

1. Edit components in `frontend/src/components/`
2. Changes auto-reload in browser
3. Check browser console for errors
4. Test responsiveness at different screen sizes

#### Backend Changes

1. Edit API endpoints in `backend/server.py`
2. Server auto-reloads with `--reload` flag
3. Test changes at http://localhost:8000/docs
4. Verify database updates in MongoDB

### Code Organization

#### Frontend Structure

```
frontend/src/
├── components/
│   ├── Header.jsx           # Navigation header
│   ├── HeroSection.jsx      # Hero with Spline 3D
│   ├── ContentSections.jsx  # About, Skills, Projects
│   ├── ContactFooter.jsx    # Contact form & footer
│   └── ui/                  # shadcn/ui components
├── hooks/                   # Custom React hooks
├── lib/                     # Utilities (cn, etc.)
├── data/                    # Static data/constants
├── App.js                   # Main app component
├── App.css                  # App-specific styles
├── index.js                 # Entry point
└── index.css                # Global styles & Tailwind
```

#### Backend Structure

```
backend/
├── server.py          # FastAPI app & routes
├── requirements.txt   # Python dependencies
├── .env              # Environment config (git-ignored)
└── .env.example      # Environment template
```

## 🎨 Styling Guide

### Using Tailwind CSS

The project uses Tailwind CSS for styling:

```jsx
// Utility classes
<div className="flex items-center justify-between p-4 bg-black">
  
// Responsive design
<div className="text-sm md:text-base lg:text-lg">

// Dark mode (always enabled)
<div className="bg-black text-white">
```

### Using shadcn/ui Components

Components are in `frontend/src/components/ui/`:

```jsx
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

function MyComponent() {
  return (
    <Card>
      <Button variant="outline">Click me</Button>
    </Card>
  );
}
```

### Custom Styles

- Global styles: `frontend/src/index.css`
- Component styles: Use Tailwind utilities
- CSS variables: Defined in `index.css` for theming

## 🔌 API Development

### Adding New Endpoints

1. **Define Pydantic models**:
   ```python
   from pydantic import BaseModel
   
   class Item(BaseModel):
       name: str
       description: str | None = None
       price: float
   ```

2. **Create route handler**:
   ```python
   @api_router.post("/items", response_model=Item)
   async def create_item(item: Item):
       # Add to database
       doc = item.model_dump()
       await db.items.insert_one(doc)
       return item
   ```

3. **Test in Swagger UI**:
   - Visit http://localhost:8000/docs
   - Find your endpoint
   - Try it out with test data

### Database Operations

Using Motor (async MongoDB driver):

```python
# Insert
await db.collection.insert_one(document)

# Find one
result = await db.collection.find_one({"_id": id})

# Find many
results = await db.collection.find({}).to_list(100)

# Update
await db.collection.update_one({"_id": id}, {"$set": update})

# Delete
await db.collection.delete_one({"_id": id})
```

## 🧪 Testing

### Frontend Testing

```bash
cd frontend

# Run tests
npm test

# Run tests with coverage
npm test -- --coverage

# Run specific test file
npm test -- Header.test.js
```

### Backend Testing

Create tests in `backend/tests/`:

```python
# test_api.py
import pytest
from httpx import AsyncClient
from server import app

@pytest.mark.asyncio
async def test_root():
    async with AsyncClient(app=app, base_url="http://test") as client:
        response = await client.get("/api/")
        assert response.status_code == 200
        assert response.json() == {"message": "Hello World"}
```

Run tests:
```bash
cd backend
pytest
```

## 🔍 Debugging

### Frontend Debugging

1. **React DevTools**:
   - Install browser extension
   - Inspect component tree
   - View props and state

2. **Console logging**:
   ```javascript
   console.log('Debug info:', variable);
   ```

3. **Browser DevTools**:
   - Network tab: Check API requests
   - Console tab: View errors and logs
   - Elements tab: Inspect DOM

### Backend Debugging

1. **Print debugging**:
   ```python
   print(f"Debug: {variable}")
   logger.info(f"Info: {variable}")
   ```

2. **Python debugger**:
   ```python
   import pdb; pdb.set_trace()
   ```

3. **Check logs**:
   - Terminal output shows uvicorn logs
   - Look for stack traces on errors

## 📦 Dependencies

### Adding Frontend Dependencies

```bash
cd frontend

# Add package
npm install package-name

# Add dev dependency
npm install --save-dev package-name

# Update package
npm update package-name
```

### Adding Backend Dependencies

```bash
cd backend
source venv/bin/activate

# Install package
pip install package-name

# Update requirements.txt
pip freeze > requirements.txt
```

## 🌲 Git Workflow

### Branch Strategy

```bash
# Create feature branch
git checkout -b feature/your-feature-name

# Make changes and commit
git add .
git commit -m "Add: your feature description"

# Push to GitHub
git push origin feature/your-feature-name

# Create pull request on GitHub
```

### Commit Message Guidelines

Use conventional commits format:

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting)
- `refactor:` Code refactoring
- `test:` Adding tests
- `chore:` Maintenance tasks

Examples:
```bash
git commit -m "feat: add user profile page"
git commit -m "fix: resolve CORS issue in backend"
git commit -m "docs: update deployment guide"
```

## 🔧 Configuration Files

### Frontend Configuration

- **package.json**: Dependencies and scripts
- **craco.config.js**: Custom webpack config
- **tailwind.config.js**: Tailwind customization
- **postcss.config.js**: PostCSS plugins
- **jsconfig.json**: Path aliases
- **.env**: Environment variables

### Backend Configuration

- **requirements.txt**: Python dependencies
- **.env**: Environment variables (git-ignored)
- **.env.example**: Environment template

### Root Configuration

- **.gitignore**: Files to ignore in git
- **CNAME**: Custom domain for GitHub Pages
- **.github/workflows/**: GitHub Actions

## 🚨 Common Issues

### Frontend Issues

**Module not found:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Port 3000 already in use:**
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
```

**Build fails:**
```bash
# Check for TypeScript errors
# Update dependencies
npm update
```

### Backend Issues

**ModuleNotFoundError:**
```bash
# Activate venv
source venv/bin/activate
# Reinstall dependencies
pip install -r requirements.txt
```

**MongoDB connection error:**
- Check MONGO_URL in .env
- Verify MongoDB is running
- Check IP whitelist in MongoDB Atlas

**CORS errors:**
- Add frontend URL to CORS_ORIGINS in .env
- Include http:// or https://

## 🎯 Best Practices

### Frontend

- Use functional components with hooks
- Keep components small and focused
- Use Tailwind utilities over custom CSS
- Implement error boundaries
- Add loading states
- Handle edge cases

### Backend

- Use async/await for database operations
- Validate input with Pydantic models
- Use proper HTTP status codes
- Add error handling
- Log important operations
- Document API endpoints

### General

- Write meaningful commit messages
- Keep code DRY (Don't Repeat Yourself)
- Comment complex logic
- Use environment variables for config
- Never commit secrets or .env files
- Test before pushing

## 📚 Useful Commands

### Frontend
```bash
npm start          # Start dev server
npm run build      # Production build
npm test           # Run tests
npm run deploy     # Deploy to GitHub Pages
```

### Backend
```bash
uvicorn server:app --reload              # Dev server
uvicorn server:app --host 0.0.0.0        # Expose to network
python -m pytest                          # Run tests
pip freeze > requirements.txt             # Update dependencies
```

### Git
```bash
git status                    # Check status
git add .                     # Stage all changes
git commit -m "message"       # Commit with message
git push origin main          # Push to main branch
git pull origin main          # Pull latest changes
```

## 🔗 Resources

- [React Documentation](https://react.dev/)
- [FastAPI Documentation](https://fastapi.tiangolo.com/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com/)
- [MongoDB Documentation](https://www.mongodb.com/docs/)
- [Git Documentation](https://git-scm.com/doc)
