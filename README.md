# The Wild Oasis - Luxury Cabin Booking Platform

A modern, full-stack web application for managing luxury cabin reservations in the Italian Dolomites. Built with Next.js 16, featuring real-time availability, secure authentication, and a responsive user interface.

🔗 **Live Demo:** [https://the-wild-oasis-website-entouns-projects.vercel.app](https://the-wild-oasis-website-entouns-projects.vercel.app)

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)
- [Key Learnings](#key-learnings)

## ✨ Features

### User-Facing Features
- **Cabin Browsing & Filtering** - Dynamic filtering by capacity (small, medium, large)
- **Real-time Availability** - Interactive date picker showing available booking slots
- **Secure Authentication** - Google OAuth integration via NextAuth.js
- **User Dashboard** - Manage profile, view and edit reservations
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Dynamic Routing** - Server-side rendered cabin detail pages

### Technical Features
- **Server Components** - Leveraging React Server Components for optimal performance
- **Server Actions** - Form submissions and mutations using Next.js Server Actions
- **Optimistic UI Updates** - Smooth user experience with React hooks
- **Image Optimization** - Next.js Image component with remote pattern configuration
- **Type Safety** - Full TypeScript implementation with strict typing
- **Error Handling** - Graceful error boundaries and user-friendly error messages

## 🛠️ Tech Stack

### Frontend
- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **UI Components:** Custom React components with Heroicons
- **Date Handling:** date-fns, react-day-picker

### Backend & Database
- **Database:** Supabase (PostgreSQL)
- **Authentication:** NextAuth.js v5 with Google Provider
- **API:** Next.js API Routes & Server Actions

### Deployment & Tooling
- **Hosting:** Vercel
- **Version Control:** Git & GitHub
- **Package Manager:** npm
- **Linting:** ESLint with Next.js config

## 🏗️ Architecture

### Project Structure
```
app/
├── _components/          # Reusable React components
├── _lib/                 # Utilities and data services
│   ├── actions.ts        # Server Actions for mutations
│   ├── auth.ts          # NextAuth configuration
│   ├── data-service.ts  # Supabase queries
│   └── supabase.ts      # Supabase client
├── account/             # User dashboard pages
├── cabins/              # Cabin listing and details
├── api/                 # API routes
└── layout.tsx           # Root layout with providers

types/
└── index.ts             # TypeScript type definitions
```

### Key Technical Decisions

1. **Next.js 16 Async Params Pattern**
   - Implemented proper `await` for `params` and `searchParams` as per Next.js 16 requirements
   - Ensures compatibility with latest Next.js features

2. **Server Components First**
   - Maximized use of Server Components for better performance
   - Client Components only where interactivity is needed

3. **Type-Safe Database Queries**
   - Custom TypeScript interfaces for all database entities
   - Type-safe Supabase queries with proper error handling

4. **Authentication Flow**
   - Automatic guest creation on first sign-in
   - Session management with guest ID injection
   - Protected routes using NextAuth middleware

## 🚀 Getting Started

### Prerequisites
- Node.js 20.x or higher
- npm or yarn
- Supabase account
- Google OAuth credentials

### Installation

1. Clone the repository
```bash
git clone https://github.com/entoun8/the-wild-oasis-next-js.git
cd the-wild-oasis-next-js
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables (see [Environment Variables](#environment-variables))

4. Run the development server
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

## 🔐 Environment Variables

Create a `.env.local` file in the root directory:

```env
# Supabase
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_anon_key

# NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret

# Google OAuth
AUTH_GOOGLE_ID=your_google_client_id
AUTH_GOOGLE_SECRET=your_google_client_secret
```

### Setting Up Services

#### Supabase Setup
1. Create a new project at [supabase.com](https://supabase.com)
2. Set up the following tables: `cabins`, `guests`, `bookings`, `settings`
3. Copy your project URL and anon key

#### Google OAuth Setup
1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create OAuth 2.0 credentials
3. Add authorized redirect URIs:
   - `http://localhost:3000/api/auth/callback/google`
   - `https://your-domain.vercel.app/api/auth/callback/google`

## 📦 Deployment

This project is configured for seamless deployment on Vercel:

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

**Production Considerations:**
- Update `NEXTAUTH_URL` to your production domain
- Add production callback URL to Google OAuth settings
- Ensure Supabase RLS policies are properly configured

## 💡 Key Learnings

### Technical Challenges Solved

1. **Next.js 16 Migration**
   - Adapted to async `params` and `searchParams` pattern
   - Resolved build issues with proper TypeScript typing

2. **Authentication Edge Cases**
   - Implemented automatic guest creation for new users
   - Handled session management across server/client boundary

3. **Real-time Date Selection**
   - Built custom date picker with blocked dates from database
   - Calculated availability in real-time

4. **Form Handling with Server Actions**
   - Implemented type-safe form mutations
   - Added proper validation and error handling

### Performance Optimizations

- Server Components for static content rendering
- Image optimization with Next.js Image component
- Efficient database queries with selective field fetching
- Proper use of `revalidatePath` for cache management

---

Built with Next.js and deployed on Vercel
