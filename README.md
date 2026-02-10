# swas3301.tech

A modern, responsive portfolio website built with React and Tailwind CSS.

## 🌟 Features

- **Modern React Frontend**: Built with React 19, Tailwind CSS, and shadcn/ui components
- **Responsive Design**: Beautiful, responsive UI with dark mode aesthetics
- **Discord Integration**: Contact form submissions sent directly to Discord webhook
- **Custom Domain**: Hosted at [swas3301.tech](https://swas3301.tech)
- **Smooth Animations**: Framer Motion animations and Spline 3D graphics

## 🛠️ Technology Stack

- **Framework**: React 19
- **Styling**: Tailwind CSS with custom configuration
- **UI Components**: Radix UI primitives, shadcn/ui
- **Animations**: Framer Motion, Spline 3D
- **Build Tool**: Create React App with CRACO
- **Routing**: React Router DOM

## 📁 Project Structure

```
swas3301.tech/
├── src/
│   ├── components/    # React components
│   ├── hooks/         # Custom React hooks
│   ├── lib/           # Utility functions
│   └── data/          # Mock data
├── public/            # Static assets
├── plugins/           # Custom plugins
├── docs/              # Documentation
├── CNAME              # Custom domain configuration
└── package.json       # Dependencies
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v16 or higher) and npm/yarn
- **Discord Webhook URL** (for contact form)

### Installation

```bash
# Install dependencies
npm install
# or
yarn install

# Create environment file
cp .env.example .env
```

### Configuration

Edit `.env` and add your Discord webhook URL:

```env
REACT_APP_DISCORD_WEBHOOK_URL=https://discord.com/api/webhooks/YOUR_WEBHOOK_URL
```

**To create a Discord webhook:**
1. Go to your Discord server settings
2. Navigate to Integrations → Webhooks
3. Click "New Webhook"
4. Copy the webhook URL and paste it in your `.env` file

### Development

```bash
# Start development server
npm start
# or
yarn start
```

The app will open at [http://localhost:3000](http://localhost:3000).

## 📦 Building for Production

```bash
npm run build
# or
yarn build
```

This creates an optimized production build in the `build/` directory.

## 🌐 Deployment

This project is configured for **GitHub Pages** deployment.

The repository includes a GitHub Actions workflow that automatically deploys to GitHub Pages when you push to the `main` branch.

**Manual deployment:**
```bash
npm run deploy
# or
yarn deploy
```

### Custom Domain Setup

1. Add a `CNAME` file to the `public/` directory with your domain name
2. Configure your domain's DNS settings to point to GitHub Pages
3. Enable HTTPS in your repository settings

## 📚 Documentation

- [Deployment Guide](./docs/DEPLOYMENT.md) - Complete deployment instructions
- [Development Guide](./docs/DEVELOPMENT.md) - Development workflow and best practices

## 🤝 Contributing

This is a personal portfolio project, but suggestions and feedback are welcome! Feel free to open an issue or reach out.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🔗 Links

- **Live Site**: [swas3301.tech](https://swas3301.tech)
- **GitHub**: [github.com/swas3301](https://github.com/swas3301)

---

**Built with** ❤️ **using React and modern web technologies**
