# Activity Planner  
### A Full-Stack Location-Based Activity Platform

Activity Planner is a full-stack web application that enables users to create, discover, manage, and explore activities enriched with images, categories, locations, and interactive map visualizations.

The project was built with the explicit goal of simulating **real-world product development**: realistic data models, clear architectural decisions, external services, authentication, and a polished user experience.

## Team

This project was developed collaboratively by:

- Efstathios Tsanidis  
- Elisa Linnenmannstöns  
- Anna Colberg  
- Rafael Lugo  


## Vision & Concept

Activity Planner was not designed as a minimal demo application.

The intention was to build a platform that mirrors real product requirements:
- structured data instead of hardcoded values
- scalable models instead of overfitted schemas
- clear separation of concerns
- UI decisions driven by usability, not shortcuts

Activities are treated as rich, location-aware entities that can grow over time without architectural changes.


## Tech Stack

### Frontend
- Next.js (Pages Router)
- React
- Styled Components
- SWR
- React Leaflet

### Backend
- Next.js API Routes
- MongoDB
- Mongoose
- NextAuth.js

### External Services & APIs
- Cloudinary (image storage & management)
- OpenStreetMap (map tiles)
- Nominatim (geocoding)
- GitHub OAuth (authentication)


## React Hooks Used

- useState
- useEffect
- useRef
- useRouter (Next.js)
- useSession (NextAuth)


## Core Features

### Activity Management
- Create activities with title, description, category, and location
- Upload images with preview and loading feedback
- Inline editing of activity fields
- Safe deletion with confirmation dialog
- Automatic cleanup of replaced or deleted images (Cloudinary)

### Discovery & Interaction
- Card-based activity overview
- Search and filter by title, category, and country
- Mark and unmark favorite activities
- Dedicated favorites page

### Map Integration
- Interactive map view using React Leaflet
- Automatic geocoding on activity creation
- Markers shown only for valid coordinates
- Direct navigation from map markers to activity details

### Authentication & Access Control
- GitHub OAuth login via NextAuth
- Session-based authentication
- Activity creation restricted to authenticated users
- Login success feedback for improved UX


## Pages

- `/`  
  Activity overview with search and favorites

- `/activities/[id]`  
  Activity detail page with inline editing and deletion

- `/createactivity`  
  Create a new activity (authentication required)

- `/favorite`  
  Overview of favorited activities

- `/mapview`  
  Interactive map showing all activities

- `/login`  
  GitHub authentication


## Data Modeling & Design Decisions

### Activity Model

The Activity model represents a real-world entity and is intentionally rich.

Fields like location, image metadata, and category references allow the platform to grow without schema changes.

- title (required)
- imageUrl  
  - url  
  - width  
  - height  
  - public_id
- categories (references Category)
- description
- area
- country
- latitude
- longitude

### Category Model – Why only a name?

The Category model currently contains a single field:

- name

This is **intentional**, not lazy.

Categories are modeled as a separate collection to:
- avoid hardcoded strings
- allow reuse across activities
- enable future extensions (icons, colors, descriptions, translations)
- support relational queries and filtering
- keep the Activity model clean and flexible

The structure is designed for scalability, not premature complexity.


## API Architecture

### /api/activities
- GET  
  Fetch all activities (categories populated)

- POST  
  Create a new activity  
  Automatically geocodes area and country using OpenStreetMap Nominatim

- PUT  
  Update stored coordinates

  ### /api/activities/[id]
- GET  
  Fetch a single activity

- PUT  
  Update activity data  
  Deletes old Cloudinary image if replaced

- DELETE  
  Delete activity and associated image

### /api/categories
- GET  
  Fetch all categories

- POST  
  Create a category

### /api/upload
- POST  
  Upload image using Formidable  
  Store image in Cloudinary  
  Return metadata for database persistence

### /api/auth/[...nextauth]
- GitHub OAuth authentication via NextAuth

## State & Data Management

- SWR for data fetching and cache revalidation
- Client-side state for favorites
- Controlled forms for inline editing
- Clear separation between UI state and server data

## Styling & UI

- Fully custom styling using styled-components
- Global design tokens via CSS variables
- Component-scoped styles
- Mobile-first, responsive layout
- No UI libraries or component frameworks used


## Folder Structure

```
├── components
│   ├── Activity-Details
│   │   ├── BackButton
│   │   │   ├── BackButton.js
│   │   │   └── StyledBackButton.js
│   │   ├── DeleteButton
│   │   │   ├── DeleteButton.js
│   │   │   └── StyledDeleteButton.js
│   │   ├── ActivityDetails.js
│   │   ├── ImageLoadingPlaceholder.js
│   │   └── StyledActivityDetails.js
│   │
│   ├── Activitylist
│   │   ├── ActivityCard.js
│   │   └── ActivityList.js
│   │
│   ├── CreateActivity
│   │   └── CreateActivityForm.js
│   │
│   ├── FavoriteButton
│   │   └── index.js
│   │
│   ├── Header
│   │   ├── index.js
│   │   └── styledHeader.js
│   │
│   ├── Login
│   │   ├── LoginComponent.js
│   │   ├── StyledLogin.js
│   │   ├── StyledMessages.js
│   │   ├── StyledTopRightLogin.js
│   │   └── TopRightLogin.js
│   │
│   ├── Map
│   │   └── MapViewInner.js
│   │
│   ├── Navigation
│   │   ├── Navigation.js
│   │   └── StyledNavigation.js
│   │
│   ├── Searchbar
│   │   └── Searchbar.js
│   │
│   ├── UploadImage
│   │   ├── ImageUpload.js
│   │   └── StyledImageUpload.js
│   │
│   └── Style-General.js
│
├── db
│   ├── connect.js
│   └── models
│       ├── Activity.js
│       └── Category.js
│
├── pages
│   ├── api
│   │   ├── activities
│   │   │   ├── index.js
│   │   │   └── [id].js
│   │   ├── auth
│   │   │   └── [...nextauth].js
│   │   ├── categories
│   │   │   └── index.js
│   │   └── upload
│   │       └── index.js
│   │
│   ├── activities
│   │   └── [id].js
│   ├── _app.js
│   ├── createactivity.js
│   ├── favorite.js
│   ├── index.js
│   ├── login.js
│   └── mapview.js
│
├── public
│   ├── icons
│   ├── leaflet
│   └── githubLogo.png
│
├── styles.js
├── .env.local
├── package.json
└── README.md
```

## NPM Packages Used

- next
- react
- react-dom
- styled-components
- swr
- mongoose
- next-auth
- formidable
- cloudinary
- react-leaflet
- leaflet
- world-countries

## Running the Project

npm install
npm run dev

Open http://localhost:3000

## Final Note

Activity Planner demonstrates real-world full-stack development:
authentication, data modeling, media handling, geolocation, and a clean, scalable UI — built collaboratively as a team project with long-term architecture in mind.
