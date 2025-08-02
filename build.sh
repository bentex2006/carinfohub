#!/bin/bash

# CarInfoHub Build Script
# Created by Bentex - Educational Project

echo "🔨 Building CarInfoHub..."

# Clean previous builds
echo "🧹 Cleaning previous builds..."
rm -rf dist/
rm -rf client/dist/

# Install dependencies
echo "📦 Installing dependencies..."
npm ci

# Run type checking
echo "🔍 Running type checks..."
npx tsc --noEmit

if [ $? -ne 0 ]; then
    echo "❌ TypeScript type checking failed"
    exit 1
fi

# Build client
echo "🎨 Building client application..."
npm run build:client

if [ $? -ne 0 ]; then
    echo "❌ Client build failed"
    exit 1
fi

# Build server
echo "🖥️  Building server application..."
npm run build:server

if [ $? -ne 0 ]; then
    echo "❌ Server build failed"
    exit 1
fi

echo "✅ Build completed successfully!"
echo "📁 Client build output: client/dist/"
echo "📁 Server build output: dist/"
echo ""
echo "To start the production server:"
echo "  npm start"