from fastapi import APIRouter, HTTPException
from models import Profile, ProfileUpdate
from motor.motor_asyncio import AsyncIOMotorClient
import os

router = APIRouter(prefix="/profile", tags=["profile"])

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

@router.get("/", response_model=Profile)
async def get_profile():
    """Get portfolio owner profile"""
    profile = await db.profiles.find_one({}, {"_id": 0})
    if not profile:
        # Return default profile if none exists
        default_profile = {
            "name": "Jeremy Aliermo",
            "title": "Full-Stack Developer & Video Editor",
            "email": "jeremyaliermo11@gmail.com",
            "phone": "+63-962-1834-168",
            "location": "Philippines, Luzon",
            "description": "I'm a passionate Computer Engineer with 3+ years of experience in full-stack development, specializing in front-end technologies. My journey began with a fascination for creating seamless user experiences and has evolved into expertise across the entire development stack. When I'm not coding, I channel my creativity through video editing, bringing stories to life through visual narratives. This unique combination of technical precision and creative vision allows me to approach problems from multiple angles and deliver comprehensive solutions.",
            "availability_status": "Available for freelance and part-time opportunities",
            "social_links": [
                {"name": "GitHub", "url": "#", "icon": "Github"},
                {"name": "LinkedIn", "url": "#", "icon": "Linkedin"},
                {"name": "Email", "url": "#", "icon": "Mail"}
            ]
        }
        # Insert default profile
        await db.profiles.insert_one(default_profile)
        return Profile(**default_profile)
    
    return Profile(**profile)

@router.put("/", response_model=Profile)
async def update_profile(profile_update: ProfileUpdate):
    """Update profile information"""
    profile = await db.profiles.find_one({}, {"_id": 0})
    if not profile:
        raise HTTPException(status_code=404, detail="Profile not found")
    
    # Update only provided fields
    update_data = {k: v for k, v in profile_update.dict().items() if v is not None}
    
    await db.profiles.update_one({}, {"$set": update_data})
    
    # Return updated profile
    updated_profile = await db.profiles.find_one({}, {"_id": 0})
    return Profile(**updated_profile)
