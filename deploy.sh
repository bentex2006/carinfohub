#!/bin/bash

# CarInfoHub Deployment Script
# Created by Bentex - Educational Project

echo "🚀 Starting CarInfoHub deployment..."

# Check if required environment variables are set
if [ -z "$OPENROUTER_API_KEY" ]; then
    echo "❌ Error: OPENROUTER_API_KEY environment variable is required"
    echo "Please set your OpenRouter API key:"
    echo "export OPENROUTER_API_KEY='your-api-key-here'"
    exit 1
fi

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Build the application
echo "🔨 Building the application..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build completed successfully!"
    
    # Start the production server
    echo "🌐 Starting production server..."
    NODE_ENV=production npm start
else
    echo "❌ Build failed. Please check the errors above."
    exit 1
fi