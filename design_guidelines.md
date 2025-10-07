# Design Guidelines: 성수팝업 (Seongsu Popup)

## Design Approach
**Reference-Based Approach** - Drawing inspiration from Instagram's visual-first layout, Korean trendy platforms (29CM, Musinsa), and Airbnb's experience-focused design. The aesthetic targets Korean 20s demographic with clean, modern, and slightly playful visual language that reflects Seongsu's hip neighborhood culture.

## Core Design Principles
- **Visual-First Experience**: Popup stores are experiential - lead with striking imagery
- **Gen Z Korean Aesthetic**: Clean minimalism with playful accents, mobile-optimized
- **Trust & Energy**: Balance youthful energy with professional credibility for brand partnerships
- **Seamless Flow**: Guide users from discovery → inspiration → action

## Color Palette

### Light Mode
- **Primary**: 280 65% 55% (vibrant purple - trendy, youthful, distinctive)
- **Background**: 0 0% 100% (pure white - clean canvas for popup images)
- **Surface**: 240 10% 98% (subtle gray - card backgrounds)
- **Text Primary**: 240 15% 15% (near black - excellent readability)
- **Text Secondary**: 240 5% 45% (medium gray)
- **Accent**: 340 75% 58% (coral pink - playful CTA accents, sparingly used)

### Dark Mode
- **Primary**: 280 60% 65% (lighter purple for contrast)
- **Background**: 240 15% 8% (deep charcoal)
- **Surface**: 240 10% 12% (elevated surfaces)
- **Text Primary**: 0 0% 95% (off-white)
- **Text Secondary**: 240 5% 65%
- **Accent**: 340 70% 65%

## Typography
- **Primary Font**: 'Pretendard', sans-serif (modern Korean web font via CDN)
- **Display/Headings**: 'Pretendard', weight 700-800, tight letter spacing
- **Body**: 'Pretendard', weight 400-500
- **Hero Headline**: text-5xl md:text-7xl, font-bold
- **Section Titles**: text-3xl md:text-4xl, font-bold
- **Body Text**: text-base md:text-lg, leading-relaxed
- **Captions**: text-sm, tracking-wide

## Layout System
**Spacing Units**: Tailwind units of 4, 8, 12, 16, 20, 24 (e.g., p-4, py-12, gap-8, space-y-16)

### Vertical Rhythm
- Section padding: py-16 md:py-24 lg:py-32
- Content spacing: space-y-12 md:space-y-16
- Card/Component gaps: gap-6 md:gap-8

### Container Strategy
- Full-width hero: w-full with inner max-w-7xl
- Content sections: max-w-6xl mx-auto px-4
- Form sections: max-w-3xl mx-auto

## Component Library

### Hero Section (80vh minimum)
- Full-width background with gradient overlay (purple to transparent)
- Centered content with bold Korean headline
- Subheading explaining the Seongsu popup experience
- Primary CTA button (방문 신청하기) with accent color
- Scroll indicator icon

### Popup Grid Section
- 3-column grid on desktop (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
- Card design: Image (16:9 ratio), brand name (font-bold, text-xl), location icon + text, dates, description
- Hover effect: subtle scale and shadow increase
- Each card clickable/expandable feel

### Why Visit Section (Inspiration)
- 2-column layout: Large imagery left, emotional copy right
- Typography-focused with generous line height
- Pull quotes or highlighted text in accent color
- 3-4 short, punchy reasons in card format below

### Visit Booking Form
- Clean, spacious form design (max-w-2xl)
- Input fields: rounded-lg, p-4, border-2 focus states
- Date picker with calendar icon
- Dropdown for popup selection with custom styling
- Large, prominent submit button
- Success state with celebratory micro-message

### Partnership Form (Footer Area)
- Full-width background in surface color
- Split layout: Form left (md:w-2/3), contact info right (md:w-1/3)
- Professional but accessible tone
- Clear field labels and validation states

### Navigation
- Sticky header with blur backdrop (backdrop-blur-md bg-white/80 dark:bg-black/80)
- Logo left, minimal nav links center, language toggle right
- Mobile: hamburger menu with slide-in drawer

### Admin Page
- Clean dashboard with data tables
- Tab navigation between booking submissions and partnership inquiries
- Search and filter capabilities
- Export data option

## Images

### Hero Image
**Large hero image required**: Full-width hero featuring a vibrant, curated Seongsu popup scene - showing trendy installation art, colorful store front, or artistic popup experience. Image should convey energy, creativity, and youthful culture. Overlay with gradient (purple-to-transparent) for text legibility.

### Popup Grid Images
Each popup card features a 16:9 representative image showing the popup's aesthetic, products, or experience. Images should be high-quality, Instagram-worthy shots.

### Why Visit Section
Include 1-2 lifestyle images of young visitors enjoying popup experiences - authentic moments, not staged. Should reinforce the emotional appeal.

### Partnership Section
Optional: Subtle background pattern or texture, or logos of existing partner brands for credibility.

## Interaction Patterns
- Smooth scroll behavior between sections
- Form inputs with focus glow in primary color
- Button hover: slight scale (scale-105) and shadow increase
- Card hover: translate-y-1 with shadow-xl
- Loading states: skeleton screens in surface color
- Success animations: subtle scale bounce with checkmark

## Mobile Optimization
- Stack all multi-column layouts to single column
- Larger touch targets (min 44x44px)
- Bottom-fixed CTA on mobile for key actions
- Simplified navigation with priority on discovery

## Accessibility
- WCAG AA contrast ratios maintained
- Focus visible states on all interactive elements
- Semantic HTML structure
- Korean language attributes properly set
- Dark mode toggle respects system preferences