from sqlalchemy import Column, Integer, String, Boolean, DateTime, ForeignKey, UniqueConstraint, text
from sqlalchemy.orm import relationship
from app.db.session import Base


class GeographyProgress(Base):
    """
    Tracks a user's 'Mastered' status for individual geography features
    (rivers, national parks, Ramsar sites, etc.) on the India Interactive Atlas.
    """
    __tablename__ = "geography_progress"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(
        Integer,
        ForeignKey("users.id", ondelete="CASCADE"),
        nullable=False,
        index=True,
    )
    location_id = Column(
        String,
        nullable=False,
        index=True,
        comment="Matches the 'id' field in INDIA_GEO_DATA (e.g., 'ramsar-chilika', 'riv-ganga')",
    )
    is_mastered = Column(Boolean, default=False, nullable=False)
    updated_at = Column(
        DateTime(timezone=True),
        server_default=text("CURRENT_TIMESTAMP"),
        onupdate=text("CURRENT_TIMESTAMP"),
    )

    # Unique constraint: one progress record per user per location
    __table_args__ = (
        UniqueConstraint("user_id", "location_id", name="uq_user_location"),
    )

    user = relationship("User", backref="geography_progress")

    def __repr__(self):
        return f"<GeographyProgress user={self.user_id} loc={self.location_id} mastered={self.is_mastered}>"
