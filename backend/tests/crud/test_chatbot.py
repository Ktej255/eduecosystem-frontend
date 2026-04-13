from sqlalchemy.orm import Session
from app.crud.chatbot import create_chat_session
from app.schemas.chatbot import ChatSessionCreate
from app.models.user import User
from app.models.course import Course

def test_create_chat_session_default(db: Session, test_user: User):
    """Test creating a chat session with default parameters"""
    session_in = ChatSessionCreate()

    chat_session = create_chat_session(db=db, session=session_in, user_id=test_user.id)

    assert chat_session is not None
    assert chat_session.id is not None
    assert chat_session.user_id == test_user.id
    assert chat_session.title == "New Chat"
    assert chat_session.context_type == "general"
    assert chat_session.course_id is None
    assert chat_session.context_id is None
    assert chat_session.is_active is True

def test_create_chat_session_with_course(db: Session, test_user: User, test_course: Course):
    """Test creating a chat session with specific course and custom parameters"""
    session_in = ChatSessionCreate(
        title="Physics Help",
        course_id=test_course.id,
        context_type="course",
        context_id=test_course.id
    )

    chat_session = create_chat_session(db=db, session=session_in, user_id=test_user.id)

    assert chat_session is not None
    assert chat_session.id is not None
    assert chat_session.user_id == test_user.id
    assert chat_session.title == "Physics Help"
    assert chat_session.context_type == "course"
    assert chat_session.course_id == test_course.id
    assert chat_session.context_id == test_course.id
    assert chat_session.is_active is True
