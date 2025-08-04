from pydantic import BaseModel, Field
from typing import List, Optional
from datetime import datetime
import uuid

# Profile Models
class SocialLink(BaseModel):
    name: str
    url: str
    icon: str

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

class ProfileUpdate(BaseModel):
    name: Optional[str] = None
    title: Optional[str] = None
    email: Optional[str] = None
    phone: Optional[str] = None
    location: Optional[str] = None
    description: Optional[str] = None
    availability_status: Optional[str] = None
    social_links: Optional[List[SocialLink]] = None

# Skills Models
class Skill(BaseModel):
    name: str
    level: int

class SkillCategory(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    skills: List[Skill]
    order: int = 0

class SkillCategoryCreate(BaseModel):
    name: str
    skills: List[Skill]
    order: int = 0

# Projects Models
class Project(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    title: str
    description: str
    technologies: List[str]
    features: List[str]
    screenshots: List[str]
    demo_video: Optional[str] = None
    github_url: Optional[str] = None
    live_url: Optional[str] = None
    category: str
    featured: bool = False
    created_at: datetime = Field(default_factory=datetime.utcnow)

class ProjectCreate(BaseModel):
    title: str
    description: str
    technologies: List[str]
    features: List[str]
    screenshots: List[str]
    demo_video: Optional[str] = None
    github_url: Optional[str] = None
    live_url: Optional[str] = None
    category: str
    featured: bool = False

# Contact Models
class ContactMessage(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    subject: str
    message: str
    status: str = "unread"
    created_at: datetime = Field(default_factory=datetime.utcnow)

class ContactMessageCreate(BaseModel):
    name: str
    email: str
    subject: str
    message: str

# Stats Models
class PortfolioStat(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    label: str
    value: str
    order: int = 0

class PortfolioStatCreate(BaseModel):
    label: str
    value: str
    order: int = 0