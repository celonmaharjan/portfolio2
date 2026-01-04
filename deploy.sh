#!/bin/bash

# Manual deployment script for GitHub Pages
echo "Building project..."
npm run build

echo "Deploying to gh-pages branch..."
npx gh-pages -d dist -b gh-pages

echo "Deployment complete!"
echo "Check https://celonmaharjan.github.io/portfolio2/"