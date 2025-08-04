from fastapi import APIRouter, HTTPException
from typing import List
from models import ContactMessage, ContactMessageCreate
from motor.motor_asyncio import AsyncIOMotorClient
import os

router = APIRouter(prefix="/contact", tags=["contact"])

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

@router.post("/", response_model=ContactMessage)
async def submit_contact_message(message: ContactMessageCreate):
    """Submit contact form"""
    message_dict = message.dict()
    contact_message = ContactMessage(**message_dict)
    
    await db.contact_messages.insert_one(contact_message.dict())
    
    # Here you could add email notification logic
    # For now, just return the created message
    return contact_message

@router.get("/messages", response_model=List[ContactMessage])
async def get_contact_messages():
    """Get all contact messages (admin endpoint)"""
    messages = await db.contact_messages.find({}, {"_id": 0}).sort("created_at", -1).to_list(1000)
    return [ContactMessage(**message) for message in messages]

@router.put("/messages/{message_id}")
async def update_message_status(message_id: str, status: str):
    """Update message status"""
    if status not in ["unread", "read", "replied"]:
        raise HTTPException(status_code=400, detail="Invalid status")
    
    result = await db.contact_messages.update_one(
        {"id": message_id},
        {"$set": {"status": status}}
    )
    
    if result.matched_count == 0:
        raise HTTPException(status_code=404, detail="Message not found")
    
    return {"message": "Message status updated successfully"}

@router.delete("/messages/{message_id}")
async def delete_contact_message(message_id: str):
    """Delete contact message"""
    result = await db.contact_messages.delete_one({"id": message_id})
    
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Message not found")
    
    return {"message": "Contact message deleted successfully"}