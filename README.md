# CarInfoHub

A comprehensive automotive research platform that provides detailed car information, specifications, pricing analysis, and market insights. Built with modern web technologies for educational purposes.

![CarInfoHub](https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=1200&q=80)

## Features

### 🚗 Comprehensive Car Research
- **Smart Search**: Enter any car brand or model for instant information
- **Global Pricing**: Pricing data across USA, China, India, and Dubai markets
- **Technical Specifications**: Detailed engine, performance, and efficiency metrics
- **Manufacturing Details**: Production locations and technology partnerships

### 📊 Advanced Analytics
- **Market Comparison**: Competitive analysis with similar vehicles
- **Performance Ratings**: Multi-dimensional vehicle scoring system
- **Historical Data**: Key milestones and automotive achievements
- **Innovation Tracking**: Awards and recognition history

### 🎨 Modern Interface
- **Responsive Design**: Optimized for desktop and mobile devices
- **Dark Theme**: Professional automotive industry aesthetic
- **Smooth Animations**: Enhanced user experience with fluid transitions
- **Glass Morphism**: Modern UI design with backdrop blur effects

## Technology Stack

### Frontend
- **React 18** with TypeScript for type-safe component development
- **Tailwind CSS** with custom design system for styling
- **Wouter** for lightweight client-side routing
- **TanStack Query** for efficient server state management
- **React Hook Form** with Zod validation for form handling
- **Radix UI** primitives for accessible component foundation

### Backend
- **Node.js** with Express.js framework
- **TypeScript** for full-stack type safety
- **OpenRouter API** integration for automotive data analysis
- **In-memory caching** for improved performance
- **RESTful API** design with comprehensive error handling

### Development Tools
- **Vite** for fast development and optimized builds
- **ESBuild** for rapid TypeScript compilation
- **Drizzle ORM** for future database integration
- **Custom build scripts** for deployment automation

## Getting Started

### Prerequisites
- Node.js 18+ installed on your system
- OpenRouter API key ([Get one here](https://openrouter.ai/keys))

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/bentex2006/carinfohub.git
   cd carinfohub
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment**
   ```bash
   cp example.env .env
   # Edit .env and add your OpenRouter API key
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5000`

### Environment Variables

Create a `.env` file in the root directory:

```env
OPENROUTER_API_KEY=sk-or-v1-your-api-key-here
NODE_ENV=development
PORT=5000
```

## Usage

### Basic Search
1. Enter a car name in the search field (e.g., "Tesla Model S", "BMW M3")
2. Click "Research" to fetch comprehensive information
3. Browse through detailed sections including specs, pricing, and analysis

### Advanced Features
- **Brand Search**: Enter just a brand name for popular model suggestions
- **Model Comparison**: Use the competitor analysis for market insights
- **Global Pricing**: View pricing across multiple international markets
- **Technical Deep-dive**: Access detailed engineering specifications

## API Integration

The application integrates with OpenRouter's API to provide real-time automotive data analysis using advanced language models.

### Supported Models
- **DeepSeek Chat**: Primary model for automotive information processing
- **Comprehensive Analysis**: Multi-source data aggregation and validation
- **Real-time Processing**: Live data retrieval and analysis

## Deployment

### Production Build
```bash
# Build the application
./build.sh

# Deploy to production
./deploy.sh
```

### Manual Deployment
```bash
# Install production dependencies
npm ci --production

# Build client and server
npm run build

# Start production server
npm start
```

## Project Structure

```
carinfohub/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Application pages
│   │   ├── lib/            # Utility functions and configurations
│   │   └── hooks/          # Custom React hooks
├── server/                 # Backend Express application
│   ├── index.ts           # Server entry point
│   ├── routes.ts          # API route definitions
│   └── storage.ts         # Data management layer
├── shared/                # Shared TypeScript types and schemas
└── scripts/               # Build and deployment scripts
```

## Contributing

This is an educational project created for learning purposes. While not actively seeking contributions, feedback and suggestions are welcome.

### Development Guidelines
1. Follow TypeScript best practices
2. Maintain consistent code formatting
3. Write comprehensive tests for new features
4. Update documentation for significant changes

## Educational Purpose

This project was developed as a learning exercise to demonstrate:
- Modern full-stack web development practices
- API integration and data processing
- Responsive UI design and user experience
- TypeScript implementation across frontend and backend
- Professional deployment and documentation practices

## License

This project is created for educational purposes. Please respect the terms of service of integrated APIs and services.

## Contact

**Developer**: Bentex  
**GitHub**: [bentex2006](https://github.com/bentex2006)  
**Project**: Educational automotive research platform

---

*Built with passion for automotive technology and modern web development*