from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class Course(BaseModel):
    id: int
    code: str
    name: str

@app.get("/health")
def get_health():
    return {"status": "ok"}

@app.get("/courses", response_model=list[Course])
def get_courses():
    return[Course(id=1, code="CS101", name="Introduction to Computer Science"), Course(id=2, code="ENG101", name="English Composition")]