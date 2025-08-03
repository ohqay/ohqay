# Ohqay - Creative Services Portfolio

A sophisticated, minimalist portfolio website showcasing multi-disciplinary creative services including graphic design, video editing, and software development.

## Features

- **Monochromatic Design**: Ultra-minimalist aesthetic with paper-tone text
- **Card Deck Homepage**: Unique interactive service selection interface
- **Smart Navigation**: Intelligent scroll-aware navigation system
- **Portfolio Grids**: 
  - Masonry layout for design work
  - Mixed aspect ratio grid for video content
  - Responsive grid with device frames for development projects
- **Case Study System**: Rich, markdown-based project deep-dives
- **Performance Optimized**: Built with modern web technologies

## Technology Stack

- **Runtime**: Bun (no npm)
- **Framework**: React 18+ with TypeScript
- **Styling**: Tailwind CSS v4 with custom monochromatic theme
- **Animation**: Framer Motion
- **Routing**: React Router v6
- **Build Tool**: Vite

## Getting Started

1. Install dependencies:
```bash
bun install
```

2. Start the development server:
```bash
bun dev
```

The app will be available at [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── components/        # Reusable UI components
│   ├── common/       # Navigation, Layout, Footer, etc.
│   ├── cards/        # Card components for homepage and grids
│   └── portfolio/    # Portfolio grid components
├── pages/            # Page components
├── content/          # Markdown content for case studies and blog
└── public/           # Static assets
```

## Scripts

- `bun dev` - Start the development server with hot reload
- `bun start` - Start the production server
- `bun run build` - Build for production

## Design System

The site uses a strict monochromatic palette:
- Background: #0A0A0A to #1A1A1A
- Text: #FAF8F5 (paper-tone) with secondary/tertiary variations
- Only color exception: Error states and syntax highlighting

This project was created using Bun v1.2.4. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
