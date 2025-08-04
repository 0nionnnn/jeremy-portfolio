from fastapi import APIRouter, HTTPException
from typing import List
from models import SkillCategory, SkillCategoryCreate, Skill
from motor.motor_asyncio import AsyncIOMotorClient
import os

router = APIRouter(prefix="/skills", tags=["skills"])

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

@router.get("/", response_model=List[SkillCategory])
async def get_skills():
    """Get all skill categories and skills"""
    skills_data = await db.skill_categories.find({}, {"_id": 0}).to_list(100)
    
    if not skills_data:
        # Return default skills if none exist
        default_skills = [
            {
                "name": "Frontend Development",
                "skills": [
                    {"name": "React.js", "level": 95},
                    {"name": "Next.js", "level": 90},
                    {"name": "TypeScript", "level": 88},
                    {"name": "Tailwind CSS", "level": 92},
                    {"name": "JavaScript (ES6+)", "level": 95}
                ],
                "order": 0
            },
            {
                "name": "Backend Development",
                "skills": [
                    {"name": "Node.js", "level": 85},
                    {"name": "Python", "level": 80},
                    {"name": "Express.js", "level": 85},
                    {"name": "FastAPI", "level": 78},
                    {"name": "MongoDB", "level": 82}
                ],
                "order": 1
            },
            {
                "name": "Mobile Development",
                "skills": [
                    {"name": "React Native", "level": 88},
                    {"name": "Flutter", "level": 75},
                    {"name": "iOS Development", "level": 70},
                    {"name": "Android Development", "level": 72}
                ],
                "order": 2
            },
            {
                "name": "Creative Tools",
                "skills": [
                    {"name": "Adobe Premiere Pro", "level": 92},
                    {"name": "After Effects", "level": 85},
                    {"name": "Figma", "level": 88},
                    {"name": "DaVinci Resolve", "level": 80}
                ],
                "order": 3
            }
        ]
        
        # Insert default skills
        await db.skill_categories.insert_many(default_skills)
        return [SkillCategory(**skill) for skill in default_skills]
    
    return [SkillCategory(**skill) for skill in sorted(skills_data, key=lambda x: x.get('order', 0))]

@router.post("/categories", response_model=SkillCategory)
async def create_skill_category(category: SkillCategoryCreate):
    """Create new skill category"""
    category_dict = category.dict()
    await db.skill_categories.insert_one(category_dict)
    return SkillCategory(**category_dict)

@router.put("/categories/{category_id}", response_model=SkillCategory)
async def update_skill_category(category_id: str, category: SkillCategoryCreate):
    """Update skill category"""
    result = await db.skill_categories.update_one(
        {"id": category_id},
        {"$set": category.dict()}
    )
    
    if result.matched_count == 0:
        raise HTTPException(status_code=404, detail="Skill category not found")
    
    updated_category = await db.skill_categories.find_one({"id": category_id}, {"_id": 0})
    return SkillCategory(**updated_category)

@router.delete("/categories/{category_id}")
async def delete_skill_category(category_id: str):
    """Delete skill category"""
    result = await db.skill_categories.delete_one({"id": category_id})
    
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Skill category not found")
    
    return {"message": "Skill category deleted successfully"}