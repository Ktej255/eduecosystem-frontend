# Core Models
from app.models.user import User
from app.models.task import Task
from app.models.group import Group
from app.models.meditation import MeditationSession
from app.models.activity_log import ActivityLog
from app.models.admin_log import AdminLog
from app.models.submission import HandwritingSubmission
from app.models.reward import UserReward
from app.models.lesson_progress import LessonProgress
from app.models.lesson_drip import LessonDripSetting
from app.models.course_review import CourseReview, ReviewHelpful
from app.models.course_payment import CoursePayment
from app.models.certificate import Certificate
from app.models.category import Category, Tag
from app.models.assignment import Assignment, Submission
from app.models.lms import (
    LMSAssignment,
    StudentSubmission,
    AIEvaluationLog,
    LMSQuestion,
    LMSOption,
)
from app.models.discussion import (
    DiscussionCategory,
    DiscussionThread,
    DiscussionPost,
    PostVote,
)
from app.models.announcement import CourseAnnouncement, AnnouncementRead
from app.models.student_notes import LessonNote, LessonBookmark, CourseBookmark
from app.models.question_bank import QuestionBank, BankQuestion, QuizQuestionPool
from app.models.peer_review import PeerReview, PeerReviewAssignment
from app.models.live_class import LiveClass, LiveClassAttendance
from app.models.live_class_interactive import (
    LiveClassPoll,
    LiveClassPollResponse,
    LiveClassQuestion,
    LiveClassReaction,
    LiveClassChatMessage,
)
from app.models.learning_path import LearningPath, PathCourse, PathEnrollment
from app.models.certificate_template import CertificateTemplate
from app.models.bundle import CourseBundle, BundleEnrollment
from app.models.course import Course
from app.models.module import Module
from app.models.lesson import Lesson
from app.models.enrollment import Enrollment
from app.models.quiz import (
    Quiz,
    Question,
    QuestionOption,
    QuizAttempt,
    StudentAnswer,
    QuizFeedback,
    QuizAttemptAnalytics,
    AssessmentRubric,
    AIGradingResult,
)
from app.models.mood import MoodEntry
from app.models.exam import ExamSession
from app.models.shadow_mode import ShadowModeSession
from app.models.study_room import StudyRoom
from app.models.study_group import StudyGroup
from app.models.learning_group import (
    LearningGroup,
    GroupMembership,
    GroupPost,
    GroupPostComment,
)
from app.models.collaborative_project import (
    CollaborativeProject,
    ProjectTeam,
    ProjectTeamMember,
    ProjectMilestone,
    ProjectSubmission,
)

# Chatbot and Recommendations
from app.models.chat import RealtimeChatMessage, RealtimeUserPresence
from app.models.chatbot import ChatSession, ChatMessage, ChatFeedback
from app.models.recommendations import (
    UserActivity,
    CourseRecommendation,
    UserPreference,
)
from app.models.ai_conversation import AIConversation

# Permissions (RBAC)
from app.models.permissions import Role, Permission, role_permissions, user_roles

# Notifications
from app.models.notification import Notification

# Email Notifications
from app.models.email_notification import (
    UserEmailPreference,
    EmailTemplate,
    EmailLog,
    NotificationType,
    EmailStatus,
)

# Coupons
from app.models.coupon import Coupon, CouponUsage

# Shopping Cart
from app.models.cart import ShoppingCart, CartItem

# Orders
from app.models.nudge import StudentNudgeWorkflow, NudgeHistory
from app.models.development import DailySummary
from app.models.order import Order, OrderItem, OrderStatus

# Invoices
from app.models.invoice import Invoice

# Analytics
from app.models.analytics import (
    InstructorAnalytics,
    StudentAnalytics,
    PlatformAnalytics,
    AnalyticsEvent,
)
from app.models.sentiment import BatchSentiment

# Translation/i18n
from app.models.translation import (
    Language,
    Translation,
    ContentTranslation,
    UserLanguagePreference,
)

# Marketplace
from app.models.marketplace import (
    RevenueShare,
    InstructorPayout,
    InstructorPaymentInfo,
    MarketplaceListing,
    RevenueTransaction,
)

# Subscriptions
from app.models.subscription import (
    SubscriptionPlan,
    UserSubscription,
    SubscriptionInvoice,
    SubscriptionCoupon,
)

# Affiliate Program
from app.models.affiliate import (
    AffiliatePartner,
    AffiliateClick,
    AffiliateReferral,
    AffiliateCommission,
    AffiliatePayout,
)

# AI Features
from app.models.ai_features import (
    ContentEmbedding,
    PlagiarismCheck,
    AIGeneratedQuiz,
    ContentDifficultyAnalysis,
    AIUsageLog,
)

# Enterprise SSO
from app.models.sso import (
    Organization,
    SSOConfig,
    SSOSession,
    SSOAuditLog,
    SSOProviderType,
)

# Two-Factor Authentication
from app.models.two_factor import TwoFactorAuth, TwoFactorBackupCode
from app.models.security import GhostLoginAlert

# Gamification
from app.models.achievement import UserAchievement, Achievement
from app.models.challenge import UserChallenge, Challenge
from app.models.coin_transaction import CoinTransaction

# UPSC Platform
from app.models.upsc import (
    UPSCBatch,
    UPSCStudentProfile,
    UPSCPlan,
    UPSCQuestion,
    UPSCContent,
    UPSCDrill,
    UPSCStudentProgress,
    UPSCAttempt,
    UPSCReport,
    UPSCTimerConfig,
    UPSCRubric,
)
from app.models.ras_planner import RASTopicProgress
from app.models.study_session import StudySession

# UPSC Synapse Engine
from app.models.upsc_synapse import (
    UPSCCognitiveProfile,
    UPSCGapAnalysis,
    UPSCUnlockTransaction
)

# Lead Management
from app.models.lead import Lead

# User Management
from app.models.user_management import DataMaskingConfig, UserPermission, UserSession

# Marketing Automation
from app.models.marketing_automation import (
    CommunicationTemplate,
    MarketingWorkflow,
    WorkflowStep,
    WorkflowExecution,
    MessageLog,
    AutomationAnalytics,
)

# Graphotherapy
from app.models.graphotherapy import (
    GraphotherapyProgress,
    GraphotherapyDayCompletion
)

# Meditation
from app.models.meditation import (
    MeditationProgress,
    MeditationDayCompletion,
    MeditationProcess,
    MeditationProcessCompletion
)

# Attendance
from app.models.attendance import Attendance

# Development History and Daily Reports (Admin Portal)
from app.models.development_history import (
    DevelopmentLog,
    DailyDevReport,
    AIPlanningSession,
)

# Daily Actions (Tasks, Habits, Reflections)
from app.models.daily_action import (
    DailyTask,
    Habit,
    HabitLog,
    DailyReflection,
)

# Universal Sync
from app.models.universal_progress import UniversalProgress

# Holistic & 36 Skills
from app.models.holistic import Skill, StudentSkillProgress

# Geography Atlas Progress
from app.models.geography_progress import GeographyProgress

# ── MISSING MODELS (required by User relationships) ───────────────────────────

# AI Avatars — required by User.ai_avatars relationship
from app.models.ai_avatar import AIAvatar

# Student Reports — required by User.student_reports relationship
from app.models.student_report import StudentReport

# Retention / FSRS — required by User.topic_logs relationship
from app.models.retention import UserTopicLog

# MeditationExperience is in meditation.py — add it to the existing import block
from app.models.meditation import MeditationExperience

# Drill System — required by drill endpoints
try:
    from app.models.drill import DrillSession, DrillDailySummary
except ImportError:
    pass

# AI Portal Conversations — required by AI Tutor endpoint
try:
    from app.models.ai_portal import AIPortalConversation
except ImportError:
    pass

# ── Mobile CRM Models (required by User relationships) ────────────────────────
from app.models.field_activity import FieldActivity
from app.models.call_log import CallLog
from app.models.voice_note import VoiceNote

# ── Guided Learning Portal ─────────────────────────────────────────────────────
from app.models.guided_clip import GuidedClip
from app.models.concept_node import ConceptNode
from app.models.concept_relationship import ConceptRelationship
from app.models.concept_signal import ConceptSignal
from app.models.student_concept_mastery import StudentConceptMastery
from app.models.student_activity_log import StudentActivityLog

# Focused Portal
from app.models.focused_portal import FocusedPortalEnrollment, FocusedSubjectGate, FocusedStudySession, FocusedTestReport, FocusedQuestion, FocusedClusterProgress

