# VISION.md - Ohqay Creative Services Website

## Core Concept
Ohqay.com will serve as the digital home for a multi-disciplinary creative services business. The website must function as both a portfolio showcase and a business development tool, presenting work across video editing, graphic design, and software development services. The site should feel like entering a carefully curated gallery where the minimalist environment enhances rather than competes with the creative work on display.

## Design Philosophy

### Aesthetic Direction
The website will embrace a unique blend of ultra-minimalism with subtle creative flourishes that set it apart from typical portfolio sites. This isn't minimalism for minimalism's sake—it's a deliberate choice to create maximum impact for the showcased work.

**Visual Language:**
- **Minimalist Foundation with Creative Touches**: While the overall structure remains clean and uncluttered, unexpected design elements will appear in transitions, hover states, and micro-interactions. Think of it as minimalism with personality—perhaps an image that subtly rotates in 3D space on hover, or navigation elements that have a unique physics-based animation.
- **Strictly Monochromatic Palette**: The entire website will use a sophisticated grayscale palette ranging from rich dark grays (#0A0A0A to #1A1A1A) for backgrounds. This is a deliberate constraint—absolutely no color will be introduced except in two specific cases:
  1. Critical UX feedback (error states, form validation warnings)
  2. The portfolio content itself, which will pop dramatically against the monochromatic backdrop
- **Paper-Tone Text Philosophy**: Instead of harsh pure white text that can strain eyes in dark mode, all text will use a carefully calibrated warm off-white. This will be achieved by starting with white and adding a very subtle orange-yellow tint—just enough warmth to feel like aged paper without being noticeably "colored." This creates a more comfortable reading experience during extended viewing.
- **Content as Hero**: Every design decision should amplify the portfolio pieces. The website design should feel like it's breathing—giving space and context to each piece of work without overwhelming it.

### Brand Presence Philosophy
The Ohqay brand should whisper, not shout. Visitors should remember the work first, the experience second, and the brand third. This creates an air of confidence—a brand secure enough to let its work take center stage.

**Implementation Details:**
- Logo appears small and understated, possibly in the navigation area
- No splash screens, loading animations with logos, or brand-heavy elements
- Brand presence increases slightly in footer and contact areas
- The memorability comes from the unique experience, not repeated brand exposure

### Navigation Design System
The navigation will be a standout feature that exemplifies the "minimalist with creative flair" philosophy. It needs to be both functionally superior and subtly delightful.

**Navigation Element Design:**
- **Form Factor**: A rounded, pill-shaped container that feels organic and modern
- **Positioning**: Intelligently positioned to never obstruct content while remaining easily accessible
- **Visual Treatment**: Subtle glassmorphism or soft shadows to create depth without heaviness

**Smart Scroll Behavior Logic:**
1. **Downward Scroll**: Navigation smoothly slides up and out of view to maximize content space
2. **Upward Scroll**: Navigation immediately reappears, anticipating user need to navigate
3. **Scroll Pause Detection**: After 2-3 seconds of no scrolling (user is reading/viewing), navigation subtly fades back in
4. **Top of Page**: Navigation is always visible when at the very top
5. **Smooth Transitions**: All show/hide behaviors use easing functions for fluid motion

**Service Differentiation Strategy:**
While maintaining complete visual unity, each service area will have subtle distinguishing features:
- **Iconography**: Minimalist, custom-designed icons for each service that appear in navigation and section headers
- **Layout Intelligence**: Each service section uses the optimal layout for its content type:
  - Design: Dynamic masonry that showcases various aspect ratios
  - Video: Player-friendly grids with preview capabilities
  - Development: Screenshot-focused layouts with interaction hints

## Services Structure

### Primary Services Deep Dive

#### 1. Video Editing Service
The video editing portfolio needs to showcase technical skill, creative vision, and storytelling ability without overwhelming the user's bandwidth or the site's performance.

**Content Strategy:**
- **Hosting Solution**: All video content will be hosted on YouTube as unlisted videos, then embedded into the site. This provides professional video delivery without the complexity and cost of self-hosting.
- **Layout Philosophy**: Videos need breathing room. The layout should never feel cramped or overwhelming. Consider load times and user attention spans.
- **Categorization Potential**: While starting simple, the system should be built to eventually support categories like commercial work, creative projects, music videos, or social media content.

**Technical Considerations:**
- Lazy loading for video embeds to maintain site performance
- Custom thumbnail system that loads before the YouTube player
- Smooth transitions between thumbnail and player states

#### 2. Graphic Design Service
This is where the modular, intelligent grid system becomes crucial. The design portfolio must handle everything from square logos to ultra-wide web designs, from simple icons to complex brand systems.

**Specialization Emphasis:**
- **Logo Design & Brand Identity**: This is highlighted as a core strength and should be prominently featured
- **Dynamic Layout Engine**: The system must intelligently decide how to display each piece:
  - Square logos might cluster in grids
  - Wide web designs might span full width
  - Tall mobile designs might create interesting vertical rhythms
  - The algorithm should create visual harmony from chaos

**Auto-Sizing Intelligence:**
The system needs to be smart enough to:
1. Analyze image aspect ratios
2. Determine optimal display size within the grid
3. Maintain visual balance across the entire page
4. Ensure no image is displayed too small to appreciate or too large to dominate

#### 3. Development Service
Software development portfolios face unique challenges—how do you make code visual? How do you showcase backend work? The approach here needs to be thoughtful and user-friendly.

**Service Subcategories:**
- **Web Development**: Full websites and web applications
- **iOS/macOS Applications**: Native Apple platform development
- **CLI Tools & Utilities**: Command-line interfaces and developer tools

**Presentation Strategy:**
- Screenshot-first approach with device frames where appropriate
- Code snippets only when they tell a story (beautiful algorithms, elegant solutions)
- Focus on the problem solved and user experience delivered
- Links to live demos, App Store pages, or GitHub repositories

### Portfolio Features - The Modular Dream

**The Drop-In Content Vision:**
Imagine a system so intelligent that adding new work is as simple as:
1. Drop an image/video file into a designated folder
2. Add minimal metadata (title, category, optional description)
3. The system handles everything else automatically

**What "Everything Else" Means:**
- **Automatic Layout Calculation**: Based on content type and dimensions
- **Responsive Scaling**: Every piece looks perfect from mobile to 4K displays
- **Loading Optimization**: Lazy loading, progressive images, performance first
- **Animation & Transitions**: Subtle enter animations, smooth hover states
- **Grid Reflow**: As content loads, the grid adjusts gracefully without jarring shifts

**The Zero-Configuration Promise:**
The system should have intelligent defaults for everything:
- Spacing between items
- Hover effects and transitions
- Mobile breakpoints and reflows
- Loading states and placeholders
- Error handling for missing images

## Advanced Features

### Case Study System - The Deep Dive Experience

The case study system transforms selected portfolio pieces into rich, immersive storytelling experiences. Each case study gets its own dedicated page, allowing for direct linking and sharing while maintaining the site's minimalist aesthetic.

**Full-Page Case Study Architecture:**

**URL Structure:**
- Clean, semantic URLs: ohqay.com/[service]/[project-name]
- Examples:
  - ohqay.com/design/blueprinter
  - ohqay.com/dev/typistry-website
  - ohqay.com/video/kaitlyn-tiktok-series
- Direct linkable for social media sharing and client presentations

**Content Management System:**
A hybrid approach combining the best of markdown simplicity with visual editing capabilities:

**Primary System - Markdown with Frontmatter:**
```markdown
---
title: "Blueprinter App Icon Design"
service: "design"
date: "2024-01-15"
featured: true
coverImage: "/images/blueprinter-hero.png"
summary: "Designing a distinctive icon for an AI-powered architecture app"
---

# The Challenge
[Markdown content here]
```

**Enhanced Visual Editing Layer:**
- Drag-and-drop image placement within the markdown editor
- Live preview showing how images will flow with text
- Automatic image optimization and responsive sizing
- Reordering capabilities for image galleries

**Modular Content Blocks System:**

The case study system supports flexible, modular content blocks that can be mixed and matched based on project needs:

**Available Block Types:**
1. **Hero Section**: Full-width image or video with overlay text
2. **Text Block**: Rich markdown content with smart typography
3. **Image Gallery**: Various layouts (grid, carousel, masonry)
4. **Before/After Slider**: Interactive comparison tool
5. **Process Timeline**: Visual representation of project phases
6. **Quote/Testimonial**: Styled client feedback
7. **Tech Stack**: For development projects
8. **Video Embed**: YouTube/Vimeo players
9. **Code Showcase**: Syntax-highlighted snippets (monochrome theme)
10. **Statistics/Metrics**: Results and impact numbers

**Block Arrangement:**
- Blocks can be added, removed, and reordered per case study
- Each block has configuration options (layout, size, alignment)
- Smart defaults ensure visual consistency
- Blocks automatically adapt to mobile layouts

**Image Presentation Options:**

The system supports multiple image display modes within case studies:

1. **Full-Width Bleeds**: Images that extend beyond the content container for impact
2. **Inline Images**: Flow with text, maintaining reading rhythm
3. **Gallery Sections**: 
   - Grid layouts for multiple related images
   - Lightbox viewing on click
   - Smooth transitions between images
4. **Floating Images**: For diagrams or supporting visuals alongside text
5. **Comparison Layouts**: Side-by-side for showing iterations

**Smart Navigation Sidebar:**

A sophisticated navigation system that enhances readability without overwhelming:

**Design Characteristics:**
- **Adaptive Visibility**: Fades in after user scrolls past hero section
- **Dynamic Structure**: Auto-generates based on content headings
- **Progress Indication**: Subtle highlight shows current section
- **Smooth Collapse**: Sections expand/collapse as user scrolls
- **Responsive Behavior**: Transforms to bottom sheet on mobile

**Interactive Features:**
- Click to jump to any section
- Current section highlighted with subtle animation
- Nested sections for complex case studies
- Reading time estimate at top

**Visual Design:**
- Integrates seamlessly with page design
- Uses same monochrome palette
- Subtle glassmorphism effect
- Minimal but functional

**Case Study Page Layout:**

**Structure Flow:**
1. **Hero Section**: 
   - Full-width feature image/video
   - Project title and summary
   - Key metadata (date, service type)
   
2. **Quick Stats Bar** (optional):
   - Project duration
   - Technologies used
   - Team size
   - Results metrics
   
3. **Main Content Area**:
   - Modular blocks as configured
   - Consistent spacing and rhythm
   - Smart image loading
   
4. **Footer Navigation**:
   - Related project suggestions
   - Link to other service work (if multi-disciplinary)
   - Back to portfolio button
   - Share functionality

**Mobile Optimization:**
- Single column layout
- Touch-optimized image galleries
- Collapsible sections for long content
- Bottom sheet navigation
- Maintained reading experience

**Performance Considerations:**
- Progressive loading of images
- Lazy loading for below-fold content
- Optimized hero images in multiple sizes
- Cached navigation between case studies
- Pre-loading of next suggested case study

**Real-World Example Flow - Blueprinter Case Study:**

```
URL: ohqay.com/design/blueprinter

1. Hero: Beautiful app icon showcase
2. Challenge: "Creating an icon that represents AI-powered architecture"
3. Process Timeline: Concept → Sketches → Iterations → Final
4. Image Gallery: Initial sketches and explorations
5. Design Decisions: Typography, color theory, symbolism
6. Before/After: Evolution from first concept to final
7. Application Gallery: Icon in various contexts
8. Results: App Store feature, download metrics
9. Footer: "See how this design came to life in code →" (links to dev case study)
```

This creates a rich, shareable, and memorable experience while maintaining the minimalist aesthetic and monochromatic discipline established for the site.

### Thoughts Section - Beyond a Traditional Blog

The "Thoughts" section (intentionally avoiding the term "blog") serves as a platform for sharing expertise, building authority, and engaging with the community. This naming choice reflects a more personal, contemplative approach to content sharing.

**URL Structure:**
- Base URL: ohqay.com/thoughts
- Individual posts: ohqay.com/thoughts/post-title
- Clean, memorable, and distinctive

**Homepage Layout - Card Grid System:**

Similar to the portfolio sections, the Thoughts homepage uses a sophisticated card-based grid that maintains visual consistency across the site:

**Card Design:**
- **Visual Hierarchy**: Featured image or custom graphic
- **Content Preview**: Title, date, reading time, excerpt
- **Tag Display**: Subtle tag pills showing topics
- **Hover State**: Gentle lift with shadow, similar to portfolio items
- **Fist Bump Counter**: Small icon with count in corner

**Grid Intelligence:**
- Responsive columns (1-3 based on viewport)
- Most recent posts first
- Featured posts can be slightly larger
- Smooth loading animations

**Content Organization - Flexible Tagging System:**

**Tag Philosophy:**
- No rigid categories, allowing content to evolve organically
- Multiple tags per post for cross-topic content
- Tags like: #AI, #Productivity, #Design, #Development, #Creativity, #Tutorials
- Tag pages aggregate all related content

**Tag Cloud/Filter:**
- Minimalist tag filter at top of Thoughts page
- Click tags to filter content
- Multiple tag selection for refined browsing
- Clear "reset" option

**The Fist Bump Reaction System:**

A unique, on-brand alternative to traditional likes or hearts that reflects the site's personality:

**Visual Design:**
- Minimalist fist bump icon (👊 simplified to line art)
- Small counter next to icon
- Subtle animation on click (bump motion)
- Stored locally to prevent multiple bumps

**Placement:**
- At the end of each post
- On card previews (smaller version)
- Non-intrusive but discoverable

**Technical Implementation:**
- Serverless function for count storage
- No user accounts required
- Anonymous and privacy-focused
- Real-time count updates

**Essential Features:**

**1. Social Sharing:**
- Minimal share buttons for Twitter/X, LinkedIn, Copy Link
- Positioned at post end and via floating button
- Pre-populated with post title and link
- Custom OG images for each post

**2. Related Posts:**
- "Further Thoughts" section at post end
- Algorithm based on shared tags
- Maximum 3 suggestions to avoid overwhelm
- Visual presentation matches card grid

**3. Newsletter Signup:**
- Subtle but persistent signup form
- "Get Thoughts Delivered" messaging
- Appears at post end and in sidebar
- Simple email-only field
- Integration with modern email service (ConvertKit, Buttondown)

**4. Search Functionality:**
- Prominent search bar on Thoughts homepage
- Real-time search across titles, content, and tags
- Keyboard shortcut (Cmd/Ctrl + K) for power users
- Results displayed in same card format

**Writing and Publishing Workflow:**

**Markdown-First Approach:**
- Write posts in any markdown editor
- Store in `/content/thoughts/` directory
- Filename becomes URL slug

**Frontmatter Structure:**
```markdown
---
title: "Designing for the Age of AI"
subtitle: "How machine learning is reshaping creative workflows and what it means for designers"
date: "2025-01-20"
tags: ["AI", "Design", "Future"]
excerpt: "Exploring how AI is reshaping the design process"
cover_image: "/images/thoughts/ai-design-hero.png"
reading_time: "5 min"
---
```

**Enhanced Article Structure:**
- **Headline**: Compelling, curiosity-inducing title
- **Subtitle**: Additional context and hook (displayed under headline)
- **Cover Image**: Required for every post, displays in cards and as hero
- **Body Content**: The actual article in markdown

**Publishing Process:**
1. Write post in personal markdown editor
2. Add frontmatter metadata
3. Place in content directory
4. Git commit triggers build
5. Post automatically appears on site

**Code Snippet Handling:**

**Syntax Highlighting Exception:**
While maintaining the monochromatic theme throughout, code blocks receive special treatment for accessibility and readability:

**Modern Libraries (2025 verified):**
- **Syntax Highlighter**: Shiki or Prism.js (both actively maintained)
- **Markdown Parser**: MDX 3.0 or markdown-it with plugins
- **Code Features**:
  - Muted, eye-friendly color theme (custom based on Gruvbox or Nord)
  - Colors only for syntax, maintaining dark gray background
  - Smooth integration with monochrome design

**Code Block Features:**
```javascript
// Example with all features
function calculateFistBumps(post) {
  return post.reactions.fistBumps || 0;
}
```
- **Line Numbers**: Optional, subtle gray
- **Language Badge**: Small indicator in top-right
- **Copy Button**: Appears on hover
- **Syntax Colors**: Muted pastels, never bright
- **Container**: Slightly darker background with subtle border

**Theme Customization:**
- Start with established low-contrast theme
- Adjust colors to be even more muted
- Ensure sufficient contrast for accessibility
- Test with different languages

**Typography for Reading:**

**Optimized for Long-Form:**
- Larger body text (18-20px)
- Comfortable line height (1.7-1.8)
- Maximum line length (65-75 characters)
- Clear heading hierarchy
- Pull quotes for emphasis

**Reading Experience:**
- Estimated reading time at top
- Progress indicator (subtle line)
- Smooth scrolling between sections
- Table of contents for longer posts

**Performance & SEO:**

**Technical Optimizations:**
- Static generation at build time
- Automatic sitemap generation
- RSS feed at /thoughts/feed.xml
- Open Graph images for each post
- Schema markup for articles

**SEO Features:**
- Meta descriptions from excerpts
- Canonical URLs
- Social media cards
- Fast page loads
- Mobile-first indexing ready

This creates a thought leadership platform that feels integral to the Ohqay brand while providing all the features expected of a modern blog in 2025.

## Contact Strategy - Frictionless Communication

### Email-First Approach

The contact system prioritizes simplicity and directness, avoiding unnecessary forms or barriers between potential clients and communication.

**Implementation:**
- **Contact CTA**: Clean button or link labeled "Let's Work Together" or "Get in Touch"
- **Mailto Link**: Cleverly crafted with pre-filled fields

**Example Implementation:**
```html
mailto:hello@ohqay.com?subject=Project%20Inquiry%3A%20%5BService%5D&body=Hi%20Tarek%2C%0A%0AI%20came%20across%20your%20%5Bservice%5D%20work%20and%20I%27m%20interested%20in%20discussing%20a%20potential%20project.%0A%0AProject%20Details%3A%0A-%20Type%3A%20%0A-%20Timeline%3A%20%0A-%20Budget%20Range%3A%20%0A%0ALooking%20forward%20to%20hearing%20from%20you!%0A%0ABest%2C%0A%5BName%5D
```

**Pre-filled Template Includes:**
- Subject line with service type placeholder
- Structured body with prompts for:
  - How they found your work
  - Project type
  - Timeline expectations
  - Budget range
  - Space for personal message

**Benefits:**
- No form to maintain or secure
- Works with user's preferred email client
- No spam or bot issues
- Immediate action, no waiting

**Placement:**
- Navigation bar (subtle but persistent)
- End of case studies
- Footer
- About page

## About Page - Personal Yet Professional

### Hybrid Approach: Story Meets Skills

The About page balances personal narrative with professional capabilities, giving visitors both the "who" and the "what" of Ohqay.

**URL:** ohqay.com/about

**Page Structure:**

**1. Hero Section:**
- Professional photo (optional) or creative graphic
- Brief tagline: "Multi-disciplinary creative turning ideas into reality"
- Immediate value proposition

**2. Bio Section:**
- **Opening**: Concise introduction (2-3 sentences)
- **Journey**: Brief creative journey narrative
- **Philosophy**: Your approach to creative work
- **Personal Touch**: What drives your creativity

**3. Skills Showcase:**
- **Visual Skill Bars**: Not percentage-based, but category-based
  - Design: Logo Design, Brand Identity, UI/UX
  - Development: Web, iOS/macOS, CLI Tools
  - Video: Editing, Motion Graphics, Color Grading
- **Tool Proficiency**: Subtle icon grid of software/languages
- **No percentages**: Avoid arbitrary skill percentages

**4. Process Overview:**
- Simple 3-4 step process visualization
- How you approach projects
- What clients can expect

**5. Call to Action:**
- Clear next step: "Ready to create something together?"
- Link to contact (mailto)

**Design Notes:**
- Maintain monochromatic theme
- Use same typography and spacing as portfolio
- Keep it scannable, not text-heavy
- Mobile-optimized layout

## Footer Design - Minimal but Functional

### Clean, Unobtrusive Footer

The footer provides necessary information without overwhelming the clean aesthetic of the site.

**Footer Contents:**
- **Left Side**: © 2025 Ohqay. Crafted with precision.
- **Right Side**: Social links (icons only)
  - Twitter/X
  - LinkedIn
  - GitHub
  - Email

**Design Characteristics:**
- Thin, elegant separator line above
- Ample padding to feel spacious
- Same paper-tone text color
- Social icons custom-designed in monochrome
- Hover states with subtle animations

**What's NOT in the Footer:**
- No sitemap (navigation is simple enough)
- No repeated navigation
- No newsletter signup (that's in Thoughts)
- No lengthy legal text

## SEO & Social Strategy

### Thoughtful SEO Without Compromise

SEO implementation that enhances discoverability without sacrificing content quality or user experience.

**Technical SEO Foundation:**
- **Clean URL Structure**: Already defined, semantic and memorable
- **Fast Performance**: Critical for SEO rankings
- **Mobile-First**: Responsive design prioritized
- **Semantic HTML**: Proper heading hierarchy, landmarks

**Content SEO:**
- **Natural Writing**: No keyword stuffing, write for humans
- **Rich Snippets**: Schema markup for:
  - Creative works (portfolio)
  - Articles (thoughts)
  - Person (about)
- **Meta Descriptions**: Crafted from excerpt or custom
- **Alt Text**: Descriptive for all images

**Social Sharing Optimization:**
- **Open Graph Tags**: Custom for each page type
- **Twitter Cards**: Large image cards for maximum impact
- **Custom OG Images**:
  - Portfolio: Automatically use featured work
  - Thoughts: Use cover image
  - Case Studies: Hero image
  - General pages: Branded OG image template

**Sitemap & Robots:**
- Auto-generated XML sitemap
- Robots.txt properly configured
- Submit to Google Search Console

## Animation Philosophy - Enhance, Don't Distract

### Subtle Motion Design

Animations should feel like a natural part of the interface, never calling attention to themselves but making the experience feel polished and responsive.

**Micro-Interactions (Always Active):**
- **Hover States**: All interactive elements respond
  - Buttons: Subtle scale (1.02) and shadow
  - Links: Smooth color transition
  - Cards: Gentle lift with shadow
  - Images: Slight zoom or parallax
- **Focus States**: Clear but elegant for accessibility
- **Loading States**: Smooth skeleton screens

**Scroll-Triggered Animations:**
- **Fade In Up**: Content enters viewport with subtle fade and rise
- **Stagger**: Multiple items animate in sequence
- **Parallax**: Very subtle on hero images
- **Progress Indicators**: Smooth fill animations

**Animation Principles:**
- **Duration**: 200-400ms for most transitions
- **Easing**: Ease-out for natural motion
- **Performance**: Use CSS transforms, not position
- **Accessibility**: Respect prefers-reduced-motion
- **Subtlety**: If you notice the animation itself, it's too much

**Navigation Animations:**
- Card deck smooth transitions
- Navigation pill hide/show
- Page transitions (optional, subtle fade)
- Smooth scroll for anchor links

**Things to Avoid:**
- Bouncing elements
- Spinning or rotating logos
- Excessive parallax
- Auto-playing animations
- Anything that repeats

## Summary - The Complete Vision

Ohqay.com will be a sophisticated, minimalist portfolio and thought leadership platform that showcases creative work across multiple disciplines. The monochromatic design philosophy ensures the work itself takes center stage, while thoughtful interactions and smart content organization create a memorable user experience.

The site balances creative flair with professional polish, using unique elements like the card deck homepage and fist bump reactions while maintaining fast performance and excellent usability. The modular architecture ensures easy content management and scalability as the portfolio grows.

Every decision—from the paper-tone text to the smart navigation to the case study system—reinforces the brand values of creativity, craftsmanship, and attention to detail. The result will be a distinctive web presence that converts visitors into clients while establishing thought leadership in the creative and tech spaces.

## Technical Architecture

### Technology Stack Decisions

**Core Technologies:**
- **Runtime**: Bun (absolutely no npm) - for its speed and modern JavaScript support
- **Framework**: React - for component modularity and ecosystem
- **Language**: TypeScript - for type safety and developer experience
- **Styling**: Tailwind CSS v4 - for utility-first styling with custom design system potential

### Architectural Principles

**Extreme Modularity - The Component Philosophy:**
Every visual element should be a self-contained, reusable component:
- Portfolio grid items
- Navigation elements
- Case study cards
- Blog post previews
- Interactive elements

**Benefits of This Approach:**
1. **Maintainability**: Change once, update everywhere
2. **Consistency**: Impossible to have mismatched styles
3. **Scalability**: Easy to add new content types
4. **Testing**: Components can be tested in isolation

**Smart Defaults - The Zero-Configuration Reality:**
The system should make intelligent decisions automatically:
- **Image Optimization**: Automatic format conversion, sizing, and compression
- **Layout Decisions**: Based on content analysis, not manual configuration
- **Performance**: Lazy loading, code splitting, and caching without setup
- **Accessibility**: ARIA labels, keyboard navigation, and screen reader support built-in

**Responsive Design - Beyond Breakpoints:**
- **Fluid Typography**: Scales smoothly between breakpoints
- **Container Queries**: Components respond to their container, not just viewport
- **Progressive Enhancement**: Core experience works everywhere, enhancements layer on

## Homepage & Navigation Structure

### The Card Deck Landing Experience

The homepage will feature an innovative card-based interface that immediately captures attention while maintaining minimalist principles. This isn't just a visual gimmick—it's a thoughtful interaction model that makes service selection intuitive and memorable.

**The Fanned Card Deck Concept:**
- **Visual Presentation**: Three cards (one for each service) arranged in a fanned-out formation, like a hand of playing cards
- **Card Design**: Each card maintains the monochromatic theme but has subtle textural differences or patterns that distinguish services while feeling cohesive
- **Positioning**: Cards overlap slightly, creating depth without clutter
- **Initial State**: All cards partially visible, inviting exploration

**Interactive Behavior:**
- **Hover/Touch Response**: When hovering over (or touching on mobile) a card, it slides upward smoothly, like being selected from a deck
- **Animation Details**: 
  - Smooth easing function (ease-out) for natural motion
  - Slight rotation for realism
  - Shadow intensifies as card lifts
  - Other cards subtly shift to accommodate the movement
- **Information Reveal**: As the card slides up, it reveals:
  - Service name in elegant typography
  - Brief tagline or description
  - Subtle CTA (e.g., "View Portfolio")

**Mobile Adaptation:**
- **Touch Gestures**: Tap to select/lift a card, swipe to browse between them
- **Responsive Scaling**: Cards resize intelligently based on viewport
- **Fallback**: On very small screens, cards stack vertically with the same lift interaction

### URL Structure & Service Separation

Each service will have its own dedicated URL path, creating a clean, shareable structure:
- **Homepage**: ohqay.com (card deck interface)
- **Video Editing**: ohqay.com/video
- **Graphic Design**: ohqay.com/design
- **Development**: ohqay.com/dev
- **Blog**: ohqay.com/blog
- **Individual Case Studies**: ohqay.com/design/typistry-brand (example)

This structure allows direct linking to specific services and improves SEO while maintaining a cohesive experience.

## Portfolio Organization & Display

### Graphic Design Portfolio - Intelligent Masonry

The design portfolio will use a Pinterest-inspired masonry layout that celebrates the diversity of design work while maintaining visual harmony.

**Layout Intelligence:**
- **Aspect Ratio Awareness**: The system analyzes each image and determines optimal display size
- **Visual Balance Algorithm**: Distributes images to create pleasing compositions, avoiding clusters of similar sizes
- **Responsive Columns**: Number of columns adjusts based on viewport (1-5 columns)

**Case Study Integration:**
For projects with deeper stories to tell, the masonry grid includes enhanced cards that subtly indicate additional content:
- **Visual Differentiation**: 
  - Slightly thicker border or subtle shadow
  - Small icon indicator (perhaps a '+' or expand symbol)
  - On hover: gentle pulse or glow effect
- **Information Display**:
  - Project name overlaid or below the image
  - Brief caption (1-2 lines max)
  - Subtle "View Case Study" text on hover
- **Prominence**: These cards can be slightly larger than standard portfolio pieces to draw attention

**Standard Portfolio Pieces:**
- Clean image presentation
- Title appears on hover
- Click to view full-size in lightbox
- No additional requirements for upload

### Video Editing Portfolio - Mixed Aspect Ratios

Recognizing the prevalence of vertical video content (TikToks, Reels, Shorts) alongside traditional horizontal videos, the video portfolio needs special consideration.

**Dual Approach System:**
1. **Hero Reel Section**: A featured compilation showcasing your best work across all formats
2. **Project Grid Below**: Individual videos displayed in an intelligent grid

**The Aspect Ratio Challenge Solution:**
- **Smart Grid Algorithm**: 
  - Groups videos by aspect ratio
  - Creates visually balanced rows mixing orientations
  - Vertical videos (9:16) display 2-3 per row
  - Horizontal videos (16:9) display 1-2 per row
  - Square videos (1:1) act as bridges between formats
- **Thumbnail System**: 
  - Custom thumbnails loaded first
  - Consistent treatment regardless of orientation
  - Play button overlay appears on hover

**Player Experience:**
- Click thumbnail to load YouTube embed in place
- Lightbox option for better viewing experience
- Smooth transitions between thumbnail and player states

### Development Portfolio - Visual Storytelling

Development projects need to tell their story visually while respecting that code isn't inherently visual.

**Presentation Hierarchy:**
1. **Primary Visual**: Device mockup or screenshot showcasing the UI/UX
   - iPhone frames for iOS apps
   - MacBook frames for web projects
   - Terminal windows for CLI tools
2. **Project Information Card**: Overlaid or adjacent, containing:
   - Project name and type
   - Brief description of problem solved
   - Technologies used (small icons)
   - Links to live demo/App Store/GitHub
3. **Case Study Integration**: For complex projects, the same subtle indication system showing more details are available

**Visual Consistency:**
- All device frames use the same style (flat, no unnecessary realism)
- Screenshots are high-quality and consistent in treatment
- Code snippets (when used) are syntax-highlighted in monochrome

### Cross-Service Project Connections

For projects spanning multiple services, an elegant connection system maintains user flow without duplication.

**The Funnel Approach:**
When a user reads a case study, natural connection points appear:

**Example Flow - Blueprint App:**
1. User browsing Design portfolio sees Blueprint app icon
2. Clicks to view design case study
3. Reads about icon design, color theory, brand decisions
4. At the end, sees: "Curious about how this design came to life? Explore the development process →"
5. Seamlessly transitions to the development case study

**Implementation Details:**
- **Non-Intrusive Placement**: Links appear in a dedicated section at case study end
- **Visual Design**: Styled as elegant cards, not just text links
- **Contextual Language**: Copy changes based on which service they're coming from
- **Bidirectional**: Works both ways (dev → design, design → dev)
- **Optional**: Only appears for projects with multiple components

**Benefits:**
- No duplicate content across service sections
- User controls their journey depth
- Natural upselling of your multi-disciplinary skills
- Clean URL structure maintained

## User Experience Goals

### The Visitor Journey

**First Impression (0-3 seconds):**
- Striking card deck interface immediately communicates creativity
- Clear understanding of three service offerings
- Smooth animations signal attention to detail
- Fast load with no layout shifts

**Service Selection (3-10 seconds):**
- Intuitive card interaction invites exploration
- Clear service differentiation through card design
- Smooth transition to selected service page
- Breadcrumb or navigation shows where they are

**Portfolio Exploration (10-60 seconds):**
- Service-appropriate layout (masonry for design, mixed grid for video)
- Quick scanning of work quality and variety
- Clear indicators for projects with case studies
- Smooth loading and scrolling performance

**Deep Engagement (60+ seconds):**
- Seamless entry into case studies
- Rich storytelling about process and decisions
- Natural flow between related projects
- Easy access to contact information when ready to hire

### Performance Targets

**Technical Metrics:**
- Initial load under 2 seconds on 4G
- Time to interactive under 3 seconds
- Lighthouse score of 95+ across all metrics
- Zero layout shift after initial render

**Perceived Performance:**
- Skeleton screens while content loads
- Progressive image loading (blur-up technique)
- Smooth animations that mask loading times
- Instant navigation between cached pages

### Accessibility Standards

**Non-Negotiable Requirements:**
- WCAG 2.1 AA compliance minimum
- Full keyboard navigation
- Screen reader optimized
- Sufficient color contrast (even with paper-tone text)
- Focus indicators that match the design aesthetic

---

*This document will continue to evolve as we refine the vision through our conversation, adding specific implementation details, content strategies, and technical specifications.*