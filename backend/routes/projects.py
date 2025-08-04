from fastapi import APIRouter, HTTPException, Query
from typing import List, Optional
from models import Project, ProjectCreate
from motor.motor_asyncio import AsyncIOMotorClient
import os

router = APIRouter(prefix="/projects", tags=["projects"])

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

@router.get("/", response_model=List[Project])
async def get_projects(category: Optional[str] = Query(None)):
    """Get all projects with optional category filter"""
    query = {}
    if category and category != "All":
        query["category"] = category
    
    projects_data = await db.projects.find(query, {"_id": 0}).to_list(100)
    
    if not projects_data:
        # Return default projects if none exist
        default_projects = [
            {
                "title": "EcoTracker Mobile App",
                "description": "A comprehensive mobile application for tracking personal carbon footprint with AI-powered suggestions for reducing environmental impact.",
                "technologies": ["React Native", "Node.js", "MongoDB", "AI/ML"],
                "features": [
                    "Real-time carbon footprint calculation",
                    "AI-powered eco-friendly suggestions",
                    "Social sharing and challenges",
                    "Data visualization dashboard"
                ],
                "screenshots": [
                    "https://images.unsplash.com/photo-1627542557169-5ed71c66ed85?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBtb2NrdXB8ZW58MHx8fHwxNzU0MzQyNDUyfDA&ixlib=rb-4.1.0&q=85",
                    "https://images.unsplash.com/photo-1644794472051-36d154dfe487?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwzfHxtb2JpbGUlMjBhcHAlMjBtb2NrdXB8ZW58MHx8fHwxNzU0MzQyNDUyfDA&ixlib=rb-4.1.0&q=85"
                ],
                "demo_video": "https://images.unsplash.com/photo-1594948506928-2d4cad88d0af?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwyfHxtb2JpbGUlMjBhcHAlMjBtb2NrdXB8ZW58MHx8fHwxNzU0MzQyNDUyfDA&ixlib=rb-4.1.0&q=85",
                "github_url": "#",
                "live_url": "#",
                "category": "Mobile App",
                "featured": True
            },
            {
                "title": "TaskFlow Web Application",
                "description": "A modern project management web application with real-time collaboration features and advanced analytics.",
                "technologies": ["React", "TypeScript", "FastAPI", "PostgreSQL"],
                "features": [
                    "Real-time collaborative editing",
                    "Advanced project analytics",
                    "Team management system",
                    "Integration with popular tools"
                ],
                "screenshots": [
                    "https://images.unsplash.com/photo-1566915896913-549d796d2166?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwyfHx3ZWIlMjBkYXNoYm9hcmR8ZW58MHx8fHwxNzU0MzQyNDU3fDA&ixlib=rb-4.1.0&q=85",
                    "https://images.unsplash.com/photo-1554098415-788601c80aef?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkYXNoYm9hcmR8ZW58MHx8fHwxNzU0MzQyNDU3fDA&ixlib=rb-4.1.0&q=85"
                ],
                "demo_video": "https://images.pexels.com/photos/106344/pexels-photo-106344.jpeg",
                "github_url": "#",
                "live_url": "#",
                "category": "Web App"
            },
            {
                "title": "Brand Showcase Video",
                "description": "A dynamic promotional video showcasing a tech startup's innovative products with motion graphics and compelling narrative.",
                "technologies": ["Premiere Pro", "After Effects", "Cinema 4D"],
                "features": [
                    "3D motion graphics",
                    "Color grading and correction",
                    "Sound design and mixing",
                    "Brand-consistent animation"
                ],
                "screenshots": [
                    "https://images.unsplash.com/photo-1603400938371-d030ad03505b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwyfHx2aWRlbyUyMGVkaXRpbmclMjB3b3Jrc3BhY2V8ZW58MHx8fHwxNzU0MzQyNDkwfDA&ixlib=rb-4.1.0&q=85",
                    "https://images.unsplash.com/photo-1502209877429-d7c6df9eb3f9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHw0fHx2aWRlbyUyMGVkaXRpbmclMjB3b3Jrc3BhY2V8ZW58MHx8fHwxNzU0MzQyNDkwfDA&ixlib=rb-4.1.0&q=85"
                ],
                "demo_video": "https://images.pexels.com/photos/1188751/pexels-photo-1188751.jpeg",
                "category": "Video Editing"
            },
            {
                "title": "CryptoWallet Mobile App",
                "description": "Secure cryptocurrency wallet app with multi-currency support and advanced security features.",
                "technologies": ["Flutter", "Blockchain API", "Biometric Auth"],
                "features": [
                    "Multi-currency support",
                    "Biometric authentication",
                    "Real-time price tracking",
                    "Secure transaction history"
                ],
                "screenshots": [
                    "https://images.pexels.com/photos/6279105/pexels-photo-6279105.jpeg",
                    "https://images.unsplash.com/photo-1633988354540-d3f4e97c67b5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwyfHxkZXZlbG9wZXIlMjBzZXR1cHxlbnwwfHx8fDE3NTQzNDI0OTV8MA&ixlib=rb-4.1.0&q=85"
                ],
                "demo_video": "https://images.unsplash.com/photo-1712628956639-638ad87c988e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwzfHxkZXZlbG9wZXIlMjBzZXR1cHxlbnwwfHx8fDE3NTQzNDI0OTV8MA&ixlib=rb-4.1.0&q=85",
                "github_url": "#",
                "category": "Mobile App"
            },
            {
                "title": "Developer Workspace Setup",
                "description": "Custom development environment with dual-monitor setup, optimized for full-stack development workflow and productivity.",
                "technologies": ["VS Code", "Docker", "Git", "Linux"],
                "features": [
                    "Dual-monitor configuration",
                    "Custom VS Code setup",
                    "Containerized development",
                    "Automated deployment pipeline"
                ],
                "screenshots": [
                    "https://images.unsplash.com/photo-1693773852578-65cf594b62dd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjBzZXR1cHxlbnwwfHx8fDE3NTQzNDI0OTV8MA&ixlib=rb-4.1.0&q=85",
                    "https://images.unsplash.com/photo-1633988354540-d3f4e97c67b5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwyfHxkZXZlbG9wZXIlMjBzZXR1cHxlbnwwfHx8fDE3NTQzNDI0OTV8MA&ixlib=rb-4.1.0&q=85"
                ],
                "category": "Web App"
            }
        ]
        
        # Insert default projects
        await db.projects.insert_many(default_projects)
        return [Project(**project) for project in default_projects]
    
    return [Project(**project) for project in sorted(projects_data, key=lambda x: x.get('created_at', ''), reverse=True)]

@router.get("/{project_id}", response_model=Project)
async def get_project(project_id: str):
    """Get specific project details"""
    project = await db.projects.find_one({"id": project_id}, {"_id": 0})
    if not project:
        raise HTTPException(status_code=404, detail="Project not found")
    
    return Project(**project)

@router.get("/categories/list", response_model=List[str])
async def get_project_categories():
    """Get unique project categories"""
    categories = await db.projects.distinct("category")
    return categories

@router.post("/", response_model=Project)
async def create_project(project: ProjectCreate):
    """Create new project"""
    project_dict = project.dict()
    await db.projects.insert_one(project_dict)
    return Project(**project_dict)

@router.put("/{project_id}", response_model=Project)
async def update_project(project_id: str, project: ProjectCreate):
    """Update project"""
    result = await db.projects.update_one(
        {"id": project_id},
        {"$set": project.dict()}
    )
    
    if result.matched_count == 0:
        raise HTTPException(status_code=404, detail="Project not found")
    
    updated_project = await db.projects.find_one({"id": project_id}, {"_id": 0})
    return Project(**updated_project)

@router.delete("/{project_id}")
async def delete_project(project_id: str):
    """Delete project"""
    result = await db.projects.delete_one({"id": project_id})
    
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Project not found")
    
    return {"message": "Project deleted successfully"}