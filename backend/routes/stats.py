from fastapi import APIRouter, HTTPException
from typing import List
from models import PortfolioStat, PortfolioStatCreate
from motor.motor_asyncio import AsyncIOMotorClient
import os

router = APIRouter(prefix="/stats", tags=["stats"])

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

@router.get("/", response_model=List[PortfolioStat])
async def get_stats():
    """Get portfolio statistics"""
    stats_data = await db.portfolio_stats.find({}, {"_id": 0}).to_list(100)
    
    if not stats_data:
        # Return default stats if none exist
        default_stats = [
            {"label": "Years Experience", "value": "5+", "order": 0},
            {"label": "Projects Completed", "value": "50+", "order": 1},
            {"label": "Technologies Mastered", "value": "20+", "order": 2},
            {"label": "Client Satisfaction", "value": "100%", "order": 3}
        ]
        
        # Insert default stats
        await db.portfolio_stats.insert_many(default_stats)
        return [PortfolioStat(**stat) for stat in default_stats]
    
    return [PortfolioStat(**stat) for stat in sorted(stats_data, key=lambda x: x.get('order', 0))]

@router.post("/", response_model=PortfolioStat)
async def create_stat(stat: PortfolioStatCreate):
    """Create new portfolio stat"""
    stat_dict = stat.dict()
    portfolio_stat = PortfolioStat(**stat_dict)
    
    await db.portfolio_stats.insert_one(portfolio_stat.dict())
    return portfolio_stat

@router.put("/{stat_id}", response_model=PortfolioStat)
async def update_stat(stat_id: str, stat: PortfolioStatCreate):
    """Update portfolio stat"""
    result = await db.portfolio_stats.update_one(
        {"id": stat_id},
        {"$set": stat.dict()}
    )
    
    if result.matched_count == 0:
        raise HTTPException(status_code=404, detail="Stat not found")
    
    updated_stat = await db.portfolio_stats.find_one({"id": stat_id}, {"_id": 0})
    return PortfolioStat(**updated_stat)

@router.delete("/{stat_id}")
async def delete_stat(stat_id: str):
    """Delete portfolio stat"""
    result = await db.portfolio_stats.delete_one({"id": stat_id})
    
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Stat not found")
    
    return {"message": "Portfolio stat deleted successfully"}