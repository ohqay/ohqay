# PLAN.md - Ohqay Website Development Architecture

## Overall Architecture Strategy

### Core Technology Stack Implementation
- **Runtime**: Bun (no npm usage at any point)
- **Framework**: React 18+ with TypeScript for strict type safety
- **Styling**: Tailwind CSS v4 with custom configuration for monochromatic theme
- **Build Tool**: Vite for fast development and optimized production builds
- **Content Management**: File-based using markdown with frontmatter
- **State Management**: React Context for global state, local state for components
- **Routing**: React Router v6 for client-side navigation
- **Image Optimization**: Sharp for automatic image processing
- **Animation**: Framer Motion for complex animations, CSS for micro-interactions

### Project Structure
```
ohqay/
├── src/
│   ├── components/           # Reusable UI components
│   │   ├── common/          # Shared components (Navigation, Footer, etc.)
│   │   ├── cards/           # Card components for homepage and grids
│   │   ├── portfolio/       # Portfolio-specific components
│   │   ├── case-study/      # Case study building blocks
│   │   └── thoughts/        # Blog/thoughts components
│   ├── pages/               # Page components
│   │   ├── Home.tsx         # Homepage with card deck
│   │   ├── Design.tsx       # Design portfolio
│   │   ├── Video.tsx        # Video portfolio
│   │   ├── Dev.tsx          # Development portfolio
│   │   ├── Thoughts.tsx     # Blog section
│   │   ├── About.tsx        # About page
│   │   └── CaseStudy.tsx    # Dynamic case study page
│   ├── hooks/               # Custom React hooks
│   ├── utils/               # Utility functions
│   ├── types/               # TypeScript type definitions
│   ├── styles/              # Global styles and Tailwind config
│   ├── lib/                 # Third-party integrations
│   └── content/             # Markdown content
│       ├── case-studies/    # Case study markdown files
│       ├── thoughts/        # Blog post markdown files
│       └── portfolio/       # Portfolio metadata
├── public/
│   ├── images/              # Static images
│   │   ├── portfolio/       # Portfolio images
│   │   ├── thoughts/        # Blog images
│   │   └── case-studies/    # Case study images
│   └── assets/              # Other static assets
├── scripts/                 # Build and utility scripts
└── tests/                   # Test files
```

### Design System Implementation

The design system will be the foundation of the entire site, ensuring consistency and maintainability.

#### Color Palette Configuration
```typescript
// Monochromatic scale with paper-tone text
const colors = {
  background: {
    primary: '#0A0A0A',
    secondary: '#141414',
    tertiary: '#1A1A1A',
  },
  text: {
    primary: '#FAF8F5',    // Paper-tone warm white
    secondary: '#E8E6E3',   // Slightly dimmer
    tertiary: '#D1CFCC',    // Even dimmer for subtle text
  },
  border: {
    subtle: '#2A2A2A',
    medium: '#3A3A3A',
  },
  syntax: {
    // Muted colors only for code blocks
    keyword: '#C792EA',
    string: '#A3BE8C',
    comment: '#616E88',
    function: '#82AAFF',
  }
};
```

#### Typography System
```typescript
const typography = {
  fonts: {
    sans: ['Inter', 'system-ui', 'sans-serif'],
    mono: ['JetBrains Mono', 'monospace'],
  },
  sizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
  },
  lineHeights: {
    tight: '1.25',
    normal: '1.5',
    relaxed: '1.75',
    loose: '2',
  },
};
```

#### Spacing and Layout System
```typescript
const spacing = {
  grid: {
    gap: '1.5rem',
    columnGap: '2rem',
    rowGap: '3rem',
  },
  section: {
    mobile: '3rem',
    tablet: '4rem',
    desktop: '6rem',
  },
  component: {
    padding: '1.5rem',
    margin: '2rem',
  },
};
```

### Component Architecture

#### Base Component Structure
Every component will follow this pattern for consistency:

```typescript
interface ComponentProps {
  className?: string;
  children?: React.ReactNode;
  // Component-specific props
}

export const Component: React.FC<ComponentProps> = ({ 
  className = '', 
  children,
  ...props 
}) => {
  return (
    <div className={cn('base-styles', className)} {...props}>
      {children}
    </div>
  );
};
```

#### Core Components to Build

1. **Navigation Component**
   - Smart scroll behavior implementation
   - Service icons integration
   - Pill-shaped container with glassmorphism
   - Mobile responsive drawer

2. **Card Components**
   - BaseCard for shared functionality
   - ServiceCard for homepage deck
   - PortfolioCard for grid items
   - ThoughtCard for blog posts
   - CaseStudyCard for featured projects

3. **Grid Components**
   - MasonryGrid for design portfolio
   - MixedGrid for video portfolio
   - ResponsiveGrid for development portfolio
   - CardGrid for thoughts section

4. **Content Components**
   - MarkdownRenderer with syntax highlighting
   - ImageGallery with lightbox
   - VideoEmbed with lazy loading
   - CodeBlock with copy functionality

5. **Interactive Components**
   - FistBumpButton with animation
   - SmoothScroll for navigation
   - ProgressIndicator for reading
   - ShareButtons for social media

### Page-Specific Implementation Plans

#### Homepage (/)
The homepage will be the most unique page, featuring the card deck interface.

**Implementation Details:**
1. Create three ServiceCard components with unique textures/patterns
2. Implement card deck layout using CSS Grid and transforms
3. Add hover animations with Framer Motion
4. Create smooth transitions to service pages
5. Ensure mobile responsiveness with vertical stacking

**Key Features:**
- Animated card deck on load
- Hover effects revealing service details
- Click/tap to navigate to services
- Responsive scaling for all viewports
- Fast initial load with no layout shift

#### Design Portfolio (/design)
The design portfolio showcases graphic design work with intelligent layout.

**Implementation Details:**
1. Build MasonryGrid component with aspect ratio analysis
2. Implement portfolio item hover states
3. Create lightbox for full-size viewing
4. Add case study indicators for featured projects
5. Build filtering system for future categories

**Key Features:**
- Pinterest-style masonry layout
- Automatic image optimization
- Smooth loading animations
- Case study integration
- Mobile-optimized single column

#### Video Portfolio (/video)
The video portfolio handles mixed aspect ratios elegantly.

**Implementation Details:**
1. Create MixedGrid component for various video formats
2. Build custom video thumbnail system
3. Implement YouTube embed lazy loading
4. Add lightbox player option
5. Create hero reel section

**Key Features:**
- Smart grid algorithm for aspect ratios
- Custom thumbnail loading
- Smooth player transitions
- Mobile-friendly video display
- Performance-optimized embeds

#### Development Portfolio (/dev)
The development portfolio makes code visual through screenshots and device frames.

**Implementation Details:**
1. Build DeviceFrame components (iPhone, MacBook, Terminal)
2. Create project information cards
3. Implement technology icon system
4. Add links to live demos/repos
5. Integrate case study system

**Key Features:**
- Consistent device frame styling
- High-quality screenshot display
- Technology stack visualization
- External link integration
- Mobile-responsive frames

#### Case Study System (/[service]/[project-name])
Individual case studies provide deep dives into projects.

**Implementation Details:**
1. Create markdown-based content system
2. Build modular content block components
3. Implement smart navigation sidebar
4. Add image gallery functionality
5. Create related project suggestions

**Key Features:**
- Rich markdown content
- Modular block system
- Progressive image loading
- Smart TOC navigation
- Cross-service connections

#### Thoughts Section (/thoughts)
The blog section with unique fist bump reactions.

**Implementation Details:**
1. Build thought card grid system
2. Implement fist bump reaction component
3. Create tag filtering system
4. Add search functionality
5. Build individual post pages

**Key Features:**
- Card-based post grid
- Fist bump reactions
- Tag-based filtering
- Real-time search
- Newsletter integration

#### About Page (/about)
Personal yet professional presentation of skills and process.

**Implementation Details:**
1. Create hero section with tagline
2. Build skills showcase visualization
3. Implement process timeline
4. Add tool proficiency grid
5. Create clear CTA section

**Key Features:**
- Balanced personal/professional content
- Visual skill representation
- Process visualization
- Mobile-optimized layout
- Direct contact integration

### Performance Optimization Strategy

1. **Image Optimization**
   - Automatic WebP conversion
   - Multiple size generation
   - Lazy loading implementation
   - Blur-up placeholders
   - Progressive enhancement

2. **Code Splitting**
   - Route-based splitting
   - Component lazy loading
   - Dynamic imports for heavy features
   - Vendor bundle optimization
   - Tree shaking configuration

3. **Caching Strategy**
   - Service worker implementation
   - Static asset caching
   - API response caching
   - Image cache management
   - Offline capability

4. **Loading Performance**
   - Skeleton screens for all components
   - Progressive content loading
   - Priority resource hints
   - Font loading optimization
   - Critical CSS inlining

### Animation Implementation

1. **Micro-interactions**
   - CSS transitions for hover states
   - Transform-based animations
   - Smooth color transitions
   - Scale and shadow effects
   - Focus state animations

2. **Scroll Animations**
   - Intersection Observer API usage
   - Fade in up effects
   - Staggered animations
   - Parallax effects (subtle)
   - Progress indicators

3. **Page Transitions**
   - Route transition animations
   - Content morphing effects
   - Smooth scrolling behavior
   - Loading state transitions
   - Exit animations

### Content Management System

1. **Markdown Processing**
   - Frontmatter parsing
   - MDX support for components
   - Syntax highlighting with Shiki
   - Image optimization pipeline
   - Automatic excerpt generation

2. **File Structure**
   ```
   content/
   ├── case-studies/
   │   ├── design/
   │   │   └── blueprinter.md
   │   ├── dev/
   │   │   └── typistry-website.md
   │   └── video/
   │       └── kaitlyn-series.md
   └── thoughts/
       ├── designing-for-ai.md
       └── productivity-tips.md
   ```

3. **Build-time Processing**
   - Static generation of pages
   - Sitemap generation
   - RSS feed creation
   - OG image generation
   - Search index building

### SEO and Social Implementation

1. **Technical SEO**
   - Semantic HTML structure
   - Schema markup implementation
   - Meta tag management
   - Canonical URL handling
   - XML sitemap generation

2. **Social Sharing**
   - Open Graph tags
   - Twitter Card implementation
   - Custom OG image generation
   - Share button functionality
   - Social media integration

3. **Performance SEO**
   - Core Web Vitals optimization
   - Mobile-first implementation
   - Fast page load times
   - Accessibility compliance
   - Structured data markup

### Development Workflow

1. **Local Development**
   - Bun dev server setup
   - Hot module replacement
   - TypeScript watching
   - Tailwind JIT mode
   - Component development isolation

2. **Build Process**
   - Production optimization
   - Asset minification
   - Image processing
   - Static generation
   - Deployment preparation

3. **Testing Strategy**
   - Component unit tests
   - Integration testing
   - Accessibility testing
   - Performance testing
   - Visual regression testing

### Deployment Strategy

1. **Hosting Setup**
   - Static site deployment
   - CDN configuration
   - Domain setup
   - SSL certificate
   - Performance monitoring

2. **Continuous Deployment**
   - Git-based deployment
   - Build automation
   - Environment variables
   - Preview deployments
   - Rollback capability

This comprehensive plan provides a clear roadmap for building the ohqay.com website, ensuring all features from the VISION.md are implemented systematically while maintaining high code quality and performance standards.