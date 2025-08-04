# Portfolio Backend Integration Contracts

## Overview
This document outlines the API contracts and data models needed to transition from mock data to a fully functional backend for the portfolio website.

## Current Frontend Implementation
- **Mock Data Location**: `/frontend/src/data/mock.js`
- **Components**: Hero, About, Skills, Projects, Contact, Footer
- **Features**: Contact form, project filtering, smooth navigation

## Backend Models Required

### 1. Portfolio Owner Profile
```python
class Profile(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    title: str
    email: str
    phone: str
    location: str
    description: str
    availability_status: str
    social_links: List[SocialLink]
    created_at: datetime = Field(default_factory=datetime.utcnow)

class SocialLink(BaseModel):
    name: str  # "GitHub", "LinkedIn", "Email"
    url: str
    icon: str
```

### 2. Skills Management
```python
class SkillCategory(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str  # "Frontend Development", "Backend Development", etc.
    skills: List[Skill]
    order: int = 0

class Skill(BaseModel):
    name: str
    level: int  # 0-100
```

### 3. Projects Portfolio
```python
class Project(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    title: str
    description: str
    technologies: List[str]
    features: List[str]
    screenshots: List[str]  # URLs
    demo_video: Optional[str]
    github_url: Optional[str]
    live_url: Optional[str]
    category: str  # "Mobile App", "Web App", "Video Editing"
    featured: bool = False
    created_at: datetime = Field(default_factory=datetime.utcnow)
```

### 4. Contact Messages
```python
class ContactMessage(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    subject: str
    message: str
    status: str = "unread"  # "unread", "read", "replied"
    created_at: datetime = Field(default_factory=datetime.utcnow)
```

### 5. Portfolio Stats
```python
class PortfolioStats(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    label: str  # "Years Experience", "Projects Completed", etc.
    value: str  # "5+", "50+", "100%"
    order: int = 0
```

## API Endpoints Required

### Profile Management
- `GET /api/profile` - Get portfolio owner profile
- `PUT /api/profile` - Update profile information

### Skills Management  
- `GET /api/skills` - Get all skill categories and skills
- `POST /api/skills/categories` - Create new skill category
- `PUT /api/skills/categories/{id}` - Update skill category
- `DELETE /api/skills/categories/{id}` - Delete skill category
- `POST /api/skills` - Add new skill to category
- `PUT /api/skills/{id}` - Update skill level/name
- `DELETE /api/skills/{id}` - Remove skill

### Projects Management
- `GET /api/projects` - Get all projects (with optional category filter)
- `GET /api/projects/{id}` - Get specific project details
- `POST /api/projects` - Create new project
- `PUT /api/projects/{id}` - Update project
- `DELETE /api/projects/{id}` - Delete project
- `GET /api/projects/categories` - Get unique project categories

### Contact Management
- `POST /api/contact` - Submit contact form
- `GET /api/contact/messages` - Get all contact messages (admin)
- `PUT /api/contact/messages/{id}` - Update message status
- `DELETE /api/contact/messages/{id}` - Delete message

### Stats Management
- `GET /api/stats` - Get portfolio statistics
- `POST /api/stats` - Create new stat
- `PUT /api/stats/{id}` - Update stat
- `DELETE /api/stats/{id}` - Delete stat

## Database Collections

### MongoDB Collections
1. **profiles** - Store portfolio owner information
2. **skill_categories** - Store skill categories and associated skills
3. **projects** - Store project portfolio items
4. **contact_messages** - Store contact form submissions
5. **portfolio_stats** - Store dashboard statistics

## Frontend Integration Points

### Mock Data Replacement Strategy
1. **Hero Section**: Replace `mockData.contact.name` with API call to `/api/profile`
2. **About Section**: Replace `mockData.about` with `/api/profile` and `/api/stats`
3. **Skills Section**: Replace `mockData.skills` with `/api/skills`
4. **Projects Section**: Replace `mockData.projects` with `/api/projects`
5. **Contact Form**: Replace mock submission with POST to `/api/contact`

### Environment Variables
- Add admin authentication tokens for protected endpoints
- Configure email service for contact form notifications

### API Integration Hooks
```javascript
// services/api.js
const API_BASE = process.env.REACT_APP_BACKEND_URL + '/api';

// Replace mock data imports with API calls
const portfolioAPI = {
  getProfile: () => axios.get(`${API_BASE}/profile`),
  getSkills: () => axios.get(`${API_BASE}/skills`),
  getProjects: (category = null) => axios.get(`${API_BASE}/projects${category ? `?category=${category}` : ''}`),
  getStats: () => axios.get(`${API_BASE}/stats`),
  submitContact: (data) => axios.post(`${API_BASE}/contact`, data)
};
```

## Data Migration Plan
1. **Seed Database**: Populate with current mock data
2. **Update Components**: Replace mock imports with API calls
3. **Add Loading States**: Implement skeleton loaders
4. **Error Handling**: Add error boundaries and fallbacks
5. **Admin Interface**: Optional admin panel for content management

## Security Considerations
- Implement rate limiting on contact form
- Add input validation and sanitization
- Use environment variables for sensitive data
- Implement CORS properly for production

## Testing Requirements
- Unit tests for all API endpoints
- Integration tests for frontend-backend communication
- Contact form email delivery testing
- Database connection and CRUD operations testing