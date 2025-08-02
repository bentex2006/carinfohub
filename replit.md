# Overview

CarInfoHub is a professional automotive research platform that provides comprehensive car information, specifications, pricing analysis, and market insights. Built as an educational project, it demonstrates modern full-stack web development practices with a sleek, dark-themed interface. The application features advanced automotive data analysis, global pricing comparisons, and detailed technical specifications for any vehicle.

# User Preferences

Preferred communication style: Simple, everyday language.
UI Design: Modern, impressive, and attractive dark theme with glass morphism effects
Branding: Educational project by Bentex (GitHub: bentex2006)
Content: Remove traces of AI automation, present as human-developed code

# System Architecture

## Frontend Architecture

The frontend is built using React with TypeScript and follows a modern component-based architecture:

- **UI Framework**: React with TypeScript for type safety and better developer experience
- **Styling**: Tailwind CSS with custom CSS variables for theming, supporting both light and dark modes
- **Component Library**: Radix UI primitives with custom shadcn/ui components for consistent design
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Routing**: Wouter for lightweight client-side routing
- **Form Handling**: React Hook Form with Zod validation for type-safe form validation
- **Build Tool**: Vite for fast development and optimized production builds

## Backend Architecture

The backend uses Express.js with TypeScript in a RESTful API pattern:

- **Runtime**: Node.js with ES modules
- **Framework**: Express.js for HTTP server and middleware
- **API Integration**: OpenRouter API for AI-powered car information generation using DeepSeek chat model
- **Caching**: In-memory storage for car information to reduce API calls and improve response times
- **Request Logging**: Custom middleware for API request/response logging with timing information
- **Error Handling**: Centralized error handling middleware with proper HTTP status codes

## Data Storage Solutions

The application uses a hybrid storage approach:

- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations (configured but not yet implemented)
- **Temporary Storage**: In-memory caching system for storing AI-generated car information
- **Schema Validation**: Zod schemas shared between frontend and backend for consistent data validation

## Authentication and Authorization

Currently, the application does not implement authentication or authorization mechanisms. All endpoints are publicly accessible.

## External Service Integrations

- **Research Engine**: OpenRouter API integration for comprehensive automotive data analysis using DeepSeek models
- **Visual Assets**: High-resolution automotive imagery through various sources including Unsplash
- **Database Service**: Neon Database serverless PostgreSQL (configured for future expansion)

## Recent Changes

### UI Enhancement (January 2025)
- Implemented modern dark theme with glass morphism effects
- Added animated gradient backgrounds and neon border styling
- Enhanced search interface with advanced visual feedback
- Integrated developer branding (Bentex - GitHub: bentex2006)
- Created professional automotive research platform aesthetic

### Project Structure
- Added deployment automation scripts (deploy.sh, build.sh)
- Created comprehensive README.md documentation
- Established example.env configuration template
- Positioned as educational project with professional presentation

The platform delivers detailed automotive information including specifications, global pricing analysis (USA, China, India, Dubai), manufacturing details, competitive analysis, and historical data. Advanced caching system optimizes performance and reduces redundant data requests.