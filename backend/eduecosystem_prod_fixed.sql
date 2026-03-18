--
-- PostgreSQL database dump
--

\restrict jEOGfPLklacaRF6m2rmLCrnm16bLIas8sZjdMQ99rtraXgTpoQqVIdZdeYxh4Yx

-- Dumped from database version 17.6
-- Dumped by pg_dump version 17.9 (Debian 17.9-1.pgdg13+1)

-- Started on 2026-03-17 10:05:02 UTC

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 1331 (class 1247 OID 18242)
-- Name: achievementcategory; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.achievementcategory AS ENUM (
    'LEARNING',
    'MASTERY',
    'SOCIAL',
    'STREAK',
    'EXPLORER',
    'DEDICATED',
    'SPECIAL'
);


ALTER TYPE public.achievementcategory OWNER TO postgres;

--
-- TOC entry 1334 (class 1247 OID 18258)
-- Name: achievementrarity; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.achievementrarity AS ENUM (
    'COMMON',
    'RARE',
    'EPIC',
    'LEGENDARY'
);


ALTER TYPE public.achievementrarity OWNER TO postgres;

--
-- TOC entry 1337 (class 1247 OID 18268)
-- Name: challengetype; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.challengetype AS ENUM (
    'DAILY',
    'WEEKLY',
    'SPECIAL'
);


ALTER TYPE public.challengetype OWNER TO postgres;

--
-- TOC entry 1289 (class 1247 OID 18070)
-- Name: courselevel; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.courselevel AS ENUM (
    'BEGINNER',
    'INTERMEDIATE',
    'ADVANCED'
);


ALTER TYPE public.courselevel OWNER TO postgres;

--
-- TOC entry 1322 (class 1247 OID 18210)
-- Name: emailstatus; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.emailstatus AS ENUM (
    'PENDING',
    'SENT',
    'FAILED',
    'BOUNCED'
);


ALTER TYPE public.emailstatus OWNER TO postgres;

--
-- TOC entry 1295 (class 1247 OID 18094)
-- Name: enrollmentstatus; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.enrollmentstatus AS ENUM (
    'ACTIVE',
    'COMPLETED',
    'DROPPED',
    'EXPIRED'
);


ALTER TYPE public.enrollmentstatus OWNER TO postgres;

--
-- TOC entry 1343 (class 1247 OID 18286)
-- Name: friendshipstatus; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.friendshipstatus AS ENUM (
    'PENDING',
    'ACCEPTED',
    'REJECTED',
    'BLOCKED'
);


ALTER TYPE public.friendshipstatus OWNER TO postgres;

--
-- TOC entry 1940 (class 1247 OID 22064)
-- Name: granularitytype; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.granularitytype AS ENUM (
    'SUBJECT',
    'TOPIC',
    'NANO_POINT'
);


ALTER TYPE public.granularitytype OWNER TO postgres;

--
-- TOC entry 1301 (class 1247 OID 18114)
-- Name: groupprivacy; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.groupprivacy AS ENUM (
    'PUBLIC',
    'PRIVATE',
    'INVITE_ONLY'
);


ALTER TYPE public.groupprivacy OWNER TO postgres;

--
-- TOC entry 1298 (class 1247 OID 18104)
-- Name: grouptype; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.grouptype AS ENUM (
    'STUDY',
    'PROJECT',
    'DISCUSSION',
    'PEER_SUPPORT'
);


ALTER TYPE public.grouptype OWNER TO postgres;

--
-- TOC entry 1964 (class 1247 OID 22182)
-- Name: housetype; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.housetype AS ENUM (
    'ALPHA',
    'BETA',
    'GAMMA',
    'DELTA'
);


ALTER TYPE public.housetype OWNER TO postgres;

--
-- TOC entry 1292 (class 1247 OID 18078)
-- Name: lessontype; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.lessontype AS ENUM (
    'VIDEO',
    'TEXT',
    'QUIZ',
    'ASSIGNMENT',
    'INTERACTIVE',
    'LIVE_CLASS',
    'DOWNLOAD'
);


ALTER TYPE public.lessontype OWNER TO postgres;

--
-- TOC entry 1283 (class 1247 OID 18052)
-- Name: liveclassstatus; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.liveclassstatus AS ENUM (
    'SCHEDULED',
    'LIVE',
    'COMPLETED',
    'CANCELLED'
);


ALTER TYPE public.liveclassstatus OWNER TO postgres;

--
-- TOC entry 1952 (class 1247 OID 22110)
-- Name: masterystatus; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.masterystatus AS ENUM (
    'RED',
    'YELLOW',
    'GREEN'
);


ALTER TYPE public.masterystatus OWNER TO postgres;

--
-- TOC entry 1304 (class 1247 OID 18122)
-- Name: memberrole; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.memberrole AS ENUM (
    'ADMIN',
    'MODERATOR',
    'MEMBER'
);


ALTER TYPE public.memberrole OWNER TO postgres;

--
-- TOC entry 1313 (class 1247 OID 18148)
-- Name: messagetype; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.messagetype AS ENUM (
    'TEXT',
    'IMAGE',
    'FILE',
    'SYSTEM'
);


ALTER TYPE public.messagetype OWNER TO postgres;

--
-- TOC entry 1319 (class 1247 OID 18200)
-- Name: notificationpriority; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.notificationpriority AS ENUM (
    'LOW',
    'NORMAL',
    'HIGH',
    'URGENT'
);


ALTER TYPE public.notificationpriority OWNER TO postgres;

--
-- TOC entry 1316 (class 1247 OID 18158)
-- Name: notificationtype; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.notificationtype AS ENUM (
    'COURSE_ENROLLED',
    'ASSIGNMENT_CREATED',
    'ASSIGNMENT_GRADED',
    'CERTIFICATE_ISSUED',
    'ACHIEVEMENT_UNLOCKED',
    'STUDENT_ENROLLED',
    'ASSIGNMENT_SUBMITTED',
    'COURSE_REVIEW',
    'DISCUSSION_REPLY',
    'FRIEND_REQUEST',
    'GROUP_INVITATION',
    'MENTION',
    'SYSTEM_ANNOUNCEMENT',
    'LIVE_CLASS_STARTING',
    'DIRECT_MESSAGE',
    'COMMENT_REPLY',
    'BADGE_EARNED',
    'UPSC_PLAN_GENERATED',
    'UPSC_REPORT_READY',
    'UPSC_DRILL_REMINDER'
);


ALTER TYPE public.notificationtype OWNER TO postgres;

--
-- TOC entry 1325 (class 1247 OID 18220)
-- Name: orderstatus; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.orderstatus AS ENUM (
    'PENDING',
    'PROCESSING',
    'COMPLETED',
    'FAILED',
    'REFUNDED',
    'CANCELLED'
);


ALTER TYPE public.orderstatus OWNER TO postgres;

--
-- TOC entry 1346 (class 1247 OID 18296)
-- Name: paymentgateway; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.paymentgateway AS ENUM (
    'STRIPE',
    'PAYPAL',
    'RAZORPAY',
    'INSTAMOJO'
);


ALTER TYPE public.paymentgateway OWNER TO postgres;

--
-- TOC entry 1349 (class 1247 OID 18306)
-- Name: paymentmethodtype; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.paymentmethodtype AS ENUM (
    'CARD',
    'PAYPAL',
    'BANK_ACCOUNT',
    'UPI',
    'WALLET'
);


ALTER TYPE public.paymentmethodtype OWNER TO postgres;

--
-- TOC entry 1286 (class 1247 OID 18062)
-- Name: pollstatus; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.pollstatus AS ENUM (
    'CREATED',
    'ACTIVE',
    'ENDED'
);


ALTER TYPE public.pollstatus OWNER TO postgres;

--
-- TOC entry 1280 (class 1247 OID 18045)
-- Name: progressstatus; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.progressstatus AS ENUM (
    'NOT_STARTED',
    'IN_PROGRESS',
    'COMPLETED'
);


ALTER TYPE public.progressstatus OWNER TO postgres;

--
-- TOC entry 1310 (class 1247 OID 18142)
-- Name: projectrole; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.projectrole AS ENUM (
    'LEADER',
    'MEMBER'
);


ALTER TYPE public.projectrole OWNER TO postgres;

--
-- TOC entry 1307 (class 1247 OID 18130)
-- Name: projectstatus; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.projectstatus AS ENUM (
    'PLANNING',
    'IN_PROGRESS',
    'SUBMITTED',
    'GRADED',
    'COMPLETED'
);


ALTER TYPE public.projectstatus OWNER TO postgres;

--
-- TOC entry 1328 (class 1247 OID 18234)
-- Name: ssoprovidertype; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.ssoprovidertype AS ENUM (
    'SAML',
    'OIDC',
    'OAUTH'
);


ALTER TYPE public.ssoprovidertype OWNER TO postgres;

--
-- TOC entry 1340 (class 1247 OID 18276)
-- Name: transactiontype; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.transactiontype AS ENUM (
    'EARNED',
    'SPENT',
    'ADMIN_ADJUSTMENT',
    'REFUND'
);


ALTER TYPE public.transactiontype OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 262 (class 1259 OID 18586)
-- Name: achievements; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.achievements (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    description text NOT NULL,
    category public.achievementcategory NOT NULL,
    rarity public.achievementrarity,
    icon character varying(50),
    coin_reward integer,
    unlock_condition json NOT NULL,
    is_hidden boolean,
    is_active boolean,
    display_order integer,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone
);


ALTER TABLE public.achievements OWNER TO postgres;

--
-- TOC entry 261 (class 1259 OID 18585)
-- Name: achievements_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.achievements_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.achievements_id_seq OWNER TO postgres;

--
-- TOC entry 7668 (class 0 OID 0)
-- Dependencies: 261
-- Name: achievements_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.achievements_id_seq OWNED BY public.achievements.id;


--
-- TOC entry 287 (class 1259 OID 18808)
-- Name: activity_logs; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.activity_logs (
    id integer NOT NULL,
    user_id integer,
    action character varying,
    details character varying,
    "timestamp" timestamp without time zone,
    ip_address character varying,
    user_agent character varying
);


ALTER TABLE public.activity_logs OWNER TO postgres;

--
-- TOC entry 286 (class 1259 OID 18807)
-- Name: activity_logs_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.activity_logs_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.activity_logs_id_seq OWNER TO postgres;

--
-- TOC entry 7669 (class 0 OID 0)
-- Dependencies: 286
-- Name: activity_logs_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.activity_logs_id_seq OWNED BY public.activity_logs.id;


--
-- TOC entry 359 (class 1259 OID 19464)
-- Name: admin_logs; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.admin_logs (
    id integer NOT NULL,
    admin_id integer,
    action character varying NOT NULL,
    target_type character varying,
    target_id integer,
    details text,
    ip_address character varying,
    created_at timestamp without time zone
);


ALTER TABLE public.admin_logs OWNER TO postgres;

--
-- TOC entry 358 (class 1259 OID 19463)
-- Name: admin_logs_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.admin_logs_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.admin_logs_id_seq OWNER TO postgres;

--
-- TOC entry 7670 (class 0 OID 0)
-- Dependencies: 358
-- Name: admin_logs_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.admin_logs_id_seq OWNED BY public.admin_logs.id;


--
-- TOC entry 457 (class 1259 OID 20487)
-- Name: affiliate_clicks; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.affiliate_clicks (
    id integer NOT NULL,
    affiliate_id integer NOT NULL,
    referral_code character varying(50) NOT NULL,
    ip_address character varying(45),
    user_agent text,
    referrer_url character varying(500),
    landing_url character varying(500),
    tracking_cookie character varying(100),
    cookie_expires_at timestamp with time zone,
    converted boolean,
    converted_at timestamp with time zone,
    conversion_value numeric(10,2),
    country character varying(2),
    city character varying(100),
    created_at timestamp with time zone DEFAULT now()
);


ALTER TABLE public.affiliate_clicks OWNER TO postgres;

--
-- TOC entry 456 (class 1259 OID 20486)
-- Name: affiliate_clicks_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.affiliate_clicks_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.affiliate_clicks_id_seq OWNER TO postgres;

--
-- TOC entry 7671 (class 0 OID 0)
-- Dependencies: 456
-- Name: affiliate_clicks_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.affiliate_clicks_id_seq OWNED BY public.affiliate_clicks.id;


--
-- TOC entry 521 (class 1259 OID 21233)
-- Name: affiliate_commissions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.affiliate_commissions (
    id integer NOT NULL,
    affiliate_id integer NOT NULL,
    referral_id integer,
    amount numeric(10,2) NOT NULL,
    currency character varying(3),
    commission_type character varying(20) NOT NULL,
    status character varying(20) NOT NULL,
    payout_id integer,
    paid_at timestamp with time zone,
    description text,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone
);


ALTER TABLE public.affiliate_commissions OWNER TO postgres;

--
-- TOC entry 520 (class 1259 OID 21232)
-- Name: affiliate_commissions_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.affiliate_commissions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.affiliate_commissions_id_seq OWNER TO postgres;

--
-- TOC entry 7672 (class 0 OID 0)
-- Dependencies: 520
-- Name: affiliate_commissions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.affiliate_commissions_id_seq OWNED BY public.affiliate_commissions.id;


--
-- TOC entry 343 (class 1259 OID 19298)
-- Name: affiliate_partners; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.affiliate_partners (
    id integer NOT NULL,
    user_id integer NOT NULL,
    referral_code character varying(50) NOT NULL,
    custom_slug character varying(100),
    commission_percentage numeric(5,2),
    commission_tier character varying(20),
    total_earnings numeric(10,2),
    pending_earnings numeric(10,2),
    paid_earnings numeric(10,2),
    total_clicks integer,
    total_conversions integer,
    conversion_rate numeric(5,2),
    status character varying(20),
    is_verified boolean,
    minimum_payout numeric(10,2),
    payout_method character varying(20),
    payout_email character varying(255),
    last_click_date timestamp with time zone,
    last_conversion_date timestamp with time zone,
    last_payout_date timestamp with time zone,
    notes text,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone
);


ALTER TABLE public.affiliate_partners OWNER TO postgres;

--
-- TOC entry 342 (class 1259 OID 19297)
-- Name: affiliate_partners_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.affiliate_partners_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.affiliate_partners_id_seq OWNER TO postgres;

--
-- TOC entry 7673 (class 0 OID 0)
-- Dependencies: 342
-- Name: affiliate_partners_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.affiliate_partners_id_seq OWNED BY public.affiliate_partners.id;


--
-- TOC entry 461 (class 1259 OID 20528)
-- Name: affiliate_payouts; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.affiliate_payouts (
    id integer NOT NULL,
    affiliate_id integer NOT NULL,
    amount numeric(10,2) NOT NULL,
    currency character varying(3),
    payment_method character varying(20) NOT NULL,
    payment_details text,
    status character varying(20) NOT NULL,
    paypal_transaction_id character varying(100),
    transaction_id character varying(100),
    requested_at timestamp with time zone DEFAULT now(),
    processed_at timestamp with time zone,
    completed_at timestamp with time zone,
    admin_notes text,
    failure_reason text,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone,
    cashfree_transfer_id character varying(100)
);


ALTER TABLE public.affiliate_payouts OWNER TO postgres;

--
-- TOC entry 460 (class 1259 OID 20527)
-- Name: affiliate_payouts_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.affiliate_payouts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.affiliate_payouts_id_seq OWNER TO postgres;

--
-- TOC entry 7674 (class 0 OID 0)
-- Dependencies: 460
-- Name: affiliate_payouts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.affiliate_payouts_id_seq OWNED BY public.affiliate_payouts.id;


--
-- TOC entry 459 (class 1259 OID 20506)
-- Name: affiliate_referrals; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.affiliate_referrals (
    id integer NOT NULL,
    affiliate_id integer NOT NULL,
    referred_user_id integer NOT NULL,
    referral_code character varying(50) NOT NULL,
    tracking_cookie character varying(100),
    purchase_type character varying(20) NOT NULL,
    purchase_id integer NOT NULL,
    purchase_amount numeric(10,2) NOT NULL,
    commission_percentage numeric(5,2) NOT NULL,
    commission_amount numeric(10,2) NOT NULL,
    commission_status character varying(20),
    payment_id character varying(100),
    first_click_date timestamp with time zone,
    conversion_date timestamp with time zone DEFAULT now(),
    is_refunded boolean,
    refunded_at timestamp with time zone,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone
);


ALTER TABLE public.affiliate_referrals OWNER TO postgres;

--
-- TOC entry 458 (class 1259 OID 20505)
-- Name: affiliate_referrals_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.affiliate_referrals_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.affiliate_referrals_id_seq OWNER TO postgres;

--
-- TOC entry 7675 (class 0 OID 0)
-- Dependencies: 458
-- Name: affiliate_referrals_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.affiliate_referrals_id_seq OWNED BY public.affiliate_referrals.id;


--
-- TOC entry 361 (class 1259 OID 19482)
-- Name: ai_avatars; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.ai_avatars (
    id integer NOT NULL,
    user_id integer NOT NULL,
    name character varying(100) NOT NULL,
    description text,
    purpose character varying(50) NOT NULL,
    personality text,
    tone character varying(50),
    response_style character varying(50),
    knowledge_base json,
    is_active boolean,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone
);


ALTER TABLE public.ai_avatars OWNER TO postgres;

--
-- TOC entry 360 (class 1259 OID 19481)
-- Name: ai_avatars_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.ai_avatars_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.ai_avatars_id_seq OWNER TO postgres;

--
-- TOC entry 7676 (class 0 OID 0)
-- Dependencies: 360
-- Name: ai_avatars_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.ai_avatars_id_seq OWNED BY public.ai_avatars.id;


--
-- TOC entry 614 (class 1259 OID 22354)
-- Name: ai_coaching_sessions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.ai_coaching_sessions (
    id integer NOT NULL,
    user_id integer NOT NULL,
    topic character varying NOT NULL,
    context_data json,
    messages json,
    status character varying,
    created_at timestamp without time zone,
    updated_at timestamp without time zone
);


ALTER TABLE public.ai_coaching_sessions OWNER TO postgres;

--
-- TOC entry 613 (class 1259 OID 22353)
-- Name: ai_coaching_sessions_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.ai_coaching_sessions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.ai_coaching_sessions_id_seq OWNER TO postgres;

--
-- TOC entry 7677 (class 0 OID 0)
-- Dependencies: 613
-- Name: ai_coaching_sessions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.ai_coaching_sessions_id_seq OWNED BY public.ai_coaching_sessions.id;


--
-- TOC entry 327 (class 1259 OID 19156)
-- Name: ai_conversations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.ai_conversations (
    id integer NOT NULL,
    user_id integer NOT NULL,
    title character varying,
    context character varying,
    messages json,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);


ALTER TABLE public.ai_conversations OWNER TO postgres;

--
-- TOC entry 326 (class 1259 OID 19155)
-- Name: ai_conversations_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.ai_conversations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.ai_conversations_id_seq OWNER TO postgres;

--
-- TOC entry 7678 (class 0 OID 0)
-- Dependencies: 326
-- Name: ai_conversations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.ai_conversations_id_seq OWNED BY public.ai_conversations.id;


--
-- TOC entry 386 (class 1259 OID 19719)
-- Name: ai_debug_logs; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.ai_debug_logs (
    id uuid NOT NULL,
    session_id character varying(100) NOT NULL,
    student_id integer,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    step_number integer NOT NULL,
    step_name character varying(100) NOT NULL,
    step_description character varying(500),
    input_summary text,
    input_full text,
    output_summary text,
    output_full text,
    model_used character varying(50),
    provider character varying(50),
    tokens_used integer,
    estimated_cost double precision,
    duration_ms integer,
    success boolean,
    is_fallback boolean,
    error_message text,
    context_type character varying(50),
    related_entity_id character varying(100)
);


ALTER TABLE public.ai_debug_logs OWNER TO postgres;

--
-- TOC entry 387 (class 1259 OID 19733)
-- Name: ai_debug_sessions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.ai_debug_sessions (
    id uuid NOT NULL,
    session_id character varying(100) NOT NULL,
    student_id integer,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    completed_at timestamp with time zone,
    operation_type character varying(50),
    operation_status character varying(50),
    total_steps integer,
    total_tokens integer,
    total_duration_ms integer,
    total_cost double precision,
    final_result_summary text,
    had_errors boolean,
    had_fallbacks boolean
);


ALTER TABLE public.ai_debug_sessions OWNER TO postgres;

--
-- TOC entry 645 (class 1259 OID 27914)
-- Name: ai_evaluation_logs; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.ai_evaluation_logs (
    id uuid NOT NULL,
    submission_id uuid,
    ai_score double precision,
    ai_feedback_json json,
    teacher_approved_score double precision,
    status character varying,
    evaluated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.ai_evaluation_logs OWNER TO postgres;

--
-- TOC entry 463 (class 1259 OID 20546)
-- Name: ai_generated_quizzes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.ai_generated_quizzes (
    id integer NOT NULL,
    course_id integer NOT NULL,
    lesson_id integer,
    quiz_id integer,
    source_content text NOT NULL,
    difficulty_level character varying(20),
    num_questions integer NOT NULL,
    question_types json,
    questions json NOT NULL,
    quality_score double precision,
    instructor_rating integer,
    used_in_course boolean,
    review_notes text,
    model_used character varying(50),
    generation_cost double precision,
    generation_time double precision,
    created_by integer NOT NULL,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone
);


ALTER TABLE public.ai_generated_quizzes OWNER TO postgres;

--
-- TOC entry 462 (class 1259 OID 20545)
-- Name: ai_generated_quizzes_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.ai_generated_quizzes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.ai_generated_quizzes_id_seq OWNER TO postgres;

--
-- TOC entry 7679 (class 0 OID 0)
-- Dependencies: 462
-- Name: ai_generated_quizzes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.ai_generated_quizzes_id_seq OWNED BY public.ai_generated_quizzes.id;


--
-- TOC entry 509 (class 1259 OID 21106)
-- Name: ai_grading_results; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.ai_grading_results (
    id integer NOT NULL,
    student_answer_id integer,
    ai_score double precision,
    ai_feedback text,
    confidence double precision,
    rubric_scores text,
    needs_manual_review boolean,
    instructor_override_score double precision,
    instructor_feedback text,
    reviewed_by_instructor boolean,
    model_used character varying,
    grading_time_seconds double precision,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone
);


ALTER TABLE public.ai_grading_results OWNER TO postgres;

--
-- TOC entry 508 (class 1259 OID 21105)
-- Name: ai_grading_results_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.ai_grading_results_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.ai_grading_results_id_seq OWNER TO postgres;

--
-- TOC entry 7680 (class 0 OID 0)
-- Dependencies: 508
-- Name: ai_grading_results_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.ai_grading_results_id_seq OWNED BY public.ai_grading_results.id;


--
-- TOC entry 608 (class 1259 OID 22314)
-- Name: ai_planning_sessions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.ai_planning_sessions (
    id integer NOT NULL,
    days_analyzed integer,
    plan_items json,
    insights json,
    request_params json,
    generated_by integer,
    created_at timestamp without time zone
);


ALTER TABLE public.ai_planning_sessions OWNER TO postgres;

--
-- TOC entry 607 (class 1259 OID 22313)
-- Name: ai_planning_sessions_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.ai_planning_sessions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.ai_planning_sessions_id_seq OWNER TO postgres;

--
-- TOC entry 7681 (class 0 OID 0)
-- Dependencies: 607
-- Name: ai_planning_sessions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.ai_planning_sessions_id_seq OWNED BY public.ai_planning_sessions.id;


--
-- TOC entry 345 (class 1259 OID 19318)
-- Name: ai_usage_logs; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.ai_usage_logs (
    id integer NOT NULL,
    user_id integer NOT NULL,
    feature character varying(50) NOT NULL,
    model_used character varying(50) NOT NULL,
    tokens_used integer NOT NULL,
    estimated_cost double precision NOT NULL,
    request_data json,
    response_time double precision,
    success boolean,
    error_message text,
    created_at timestamp with time zone DEFAULT now()
);


ALTER TABLE public.ai_usage_logs OWNER TO postgres;

--
-- TOC entry 344 (class 1259 OID 19317)
-- Name: ai_usage_logs_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.ai_usage_logs_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.ai_usage_logs_id_seq OWNER TO postgres;

--
-- TOC entry 7682 (class 0 OID 0)
-- Dependencies: 344
-- Name: ai_usage_logs_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.ai_usage_logs_id_seq OWNED BY public.ai_usage_logs.id;


--
-- TOC entry 575 (class 1259 OID 22005)
-- Name: alembic_version; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.alembic_version (
    version_num character varying(32) NOT NULL
);


ALTER TABLE public.alembic_version OWNER TO postgres;

--
-- TOC entry 447 (class 1259 OID 20372)
-- Name: analytics_events; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.analytics_events (
    id integer NOT NULL,
    event_type character varying(50) NOT NULL,
    user_id integer,
    course_id integer,
    event_data text,
    session_id character varying(100),
    ip_address character varying(45),
    user_agent character varying(500),
    "timestamp" timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.analytics_events OWNER TO postgres;

--
-- TOC entry 446 (class 1259 OID 20371)
-- Name: analytics_events_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.analytics_events_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.analytics_events_id_seq OWNER TO postgres;

--
-- TOC entry 7683 (class 0 OID 0)
-- Dependencies: 446
-- Name: analytics_events_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.analytics_events_id_seq OWNED BY public.analytics_events.id;


--
-- TOC entry 494 (class 1259 OID 20954)
-- Name: announcement_reads; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.announcement_reads (
    id integer NOT NULL,
    announcement_id integer NOT NULL,
    user_id integer NOT NULL,
    read_at timestamp with time zone DEFAULT now()
);


ALTER TABLE public.announcement_reads OWNER TO postgres;

--
-- TOC entry 493 (class 1259 OID 20953)
-- Name: announcement_reads_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.announcement_reads_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.announcement_reads_id_seq OWNER TO postgres;

--
-- TOC entry 7684 (class 0 OID 0)
-- Dependencies: 493
-- Name: announcement_reads_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.announcement_reads_id_seq OWNED BY public.announcement_reads.id;


--
-- TOC entry 313 (class 1259 OID 19045)
-- Name: assessment_rubrics; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.assessment_rubrics (
    id integer NOT NULL,
    question_id integer NOT NULL,
    criteria_name character varying NOT NULL,
    max_points integer NOT NULL,
    description text,
    order_index integer,
    levels text,
    created_at timestamp with time zone DEFAULT now()
);


ALTER TABLE public.assessment_rubrics OWNER TO postgres;

--
-- TOC entry 312 (class 1259 OID 19044)
-- Name: assessment_rubrics_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.assessment_rubrics_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.assessment_rubrics_id_seq OWNER TO postgres;

--
-- TOC entry 7685 (class 0 OID 0)
-- Dependencies: 312
-- Name: assessment_rubrics_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.assessment_rubrics_id_seq OWNED BY public.assessment_rubrics.id;


--
-- TOC entry 363 (class 1259 OID 19498)
-- Name: assets; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.assets (
    id integer NOT NULL,
    filename character varying NOT NULL,
    original_name character varying NOT NULL,
    file_type character varying NOT NULL,
    url character varying NOT NULL,
    size integer,
    mime_type character varying,
    user_id integer NOT NULL,
    created_at timestamp with time zone DEFAULT now()
);


ALTER TABLE public.assets OWNER TO postgres;

--
-- TOC entry 362 (class 1259 OID 19497)
-- Name: assets_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.assets_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.assets_id_seq OWNER TO postgres;

--
-- TOC entry 7686 (class 0 OID 0)
-- Dependencies: 362
-- Name: assets_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.assets_id_seq OWNED BY public.assets.id;


--
-- TOC entry 407 (class 1259 OID 19925)
-- Name: assignments; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.assignments (
    id integer NOT NULL,
    title character varying NOT NULL,
    description text,
    course_id integer,
    lesson_id integer,
    max_points double precision,
    due_date timestamp without time zone,
    allow_late_submission boolean,
    late_penalty_per_day double precision,
    is_published boolean,
    file_upload_required boolean,
    allowed_file_types json,
    max_file_size_mb integer,
    created_at timestamp without time zone DEFAULT now(),
    updated_at timestamp without time zone
);


ALTER TABLE public.assignments OWNER TO postgres;

--
-- TOC entry 406 (class 1259 OID 19924)
-- Name: assignments_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.assignments_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.assignments_id_seq OWNER TO postgres;

--
-- TOC entry 7687 (class 0 OID 0)
-- Dependencies: 406
-- Name: assignments_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.assignments_id_seq OWNED BY public.assignments.id;


--
-- TOC entry 602 (class 1259 OID 22268)
-- Name: attendance; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.attendance (
    id integer NOT NULL,
    user_id integer,
    session_type character varying,
    "timestamp" timestamp without time zone,
    is_present boolean,
    mode character varying
);


ALTER TABLE public.attendance OWNER TO postgres;

--
-- TOC entry 601 (class 1259 OID 22267)
-- Name: attendance_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.attendance_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.attendance_id_seq OWNER TO postgres;

--
-- TOC entry 7688 (class 0 OID 0)
-- Dependencies: 601
-- Name: attendance_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.attendance_id_seq OWNED BY public.attendance.id;


--
-- TOC entry 476 (class 1259 OID 20704)
-- Name: automation_analytics; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.automation_analytics (
    id integer NOT NULL,
    date timestamp without time zone NOT NULL,
    workflow_id integer,
    emails_sent integer,
    emails_delivered integer,
    emails_opened integer,
    emails_clicked integer,
    sms_sent integer,
    sms_delivered integer,
    whatsapp_sent integer,
    whatsapp_delivered integer,
    whatsapp_read integer,
    push_sent integer,
    push_clicked integer,
    workflow_enrollments integer,
    workflow_completions integer,
    conversions integer,
    created_at timestamp with time zone DEFAULT now()
);


ALTER TABLE public.automation_analytics OWNER TO postgres;

--
-- TOC entry 475 (class 1259 OID 20703)
-- Name: automation_analytics_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.automation_analytics_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.automation_analytics_id_seq OWNER TO postgres;

--
-- TOC entry 7689 (class 0 OID 0)
-- Dependencies: 475
-- Name: automation_analytics_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.automation_analytics_id_seq OWNED BY public.automation_analytics.id;


--
-- TOC entry 297 (class 1259 OID 18904)
-- Name: bank_questions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.bank_questions (
    id integer NOT NULL,
    instructor_id integer NOT NULL,
    text text NOT NULL,
    type character varying(50) NOT NULL,
    points integer,
    difficulty character varying(20),
    options text,
    correct_answer text,
    explanation text,
    tags text,
    usage_count integer,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone
);


ALTER TABLE public.bank_questions OWNER TO postgres;

--
-- TOC entry 296 (class 1259 OID 18903)
-- Name: bank_questions_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.bank_questions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.bank_questions_id_seq OWNER TO postgres;

--
-- TOC entry 7690 (class 0 OID 0)
-- Dependencies: 296
-- Name: bank_questions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.bank_questions_id_seq OWNED BY public.bank_questions.id;


--
-- TOC entry 612 (class 1259 OID 22341)
-- Name: batch1_segments; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.batch1_segments (
    id integer NOT NULL,
    cycle_id integer NOT NULL,
    day_number integer NOT NULL,
    part_number integer NOT NULL,
    segment_number integer NOT NULL,
    segment_key character varying NOT NULL,
    title character varying NOT NULL,
    content_type character varying,
    video_url character varying,
    youtube_url character varying,
    pdf_files character varying,
    transcription_text character varying,
    pdf_data character varying,
    key_points character varying,
    duration character varying,
    is_processed boolean,
    created_at timestamp without time zone
);


ALTER TABLE public.batch1_segments OWNER TO postgres;

--
-- TOC entry 611 (class 1259 OID 22340)
-- Name: batch1_segments_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.batch1_segments_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.batch1_segments_id_seq OWNER TO postgres;

--
-- TOC entry 7691 (class 0 OID 0)
-- Dependencies: 611
-- Name: batch1_segments_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.batch1_segments_id_seq OWNED BY public.batch1_segments.id;


--
-- TOC entry 579 (class 1259 OID 22028)
-- Name: batch1_test_results; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.batch1_test_results (
    id integer NOT NULL,
    user_id integer NOT NULL,
    cycle_id integer NOT NULL,
    day_number integer NOT NULL,
    score double precision NOT NULL,
    total_questions integer NOT NULL,
    correct_count integer NOT NULL,
    incorrect_count integer NOT NULL,
    unanswered_count integer NOT NULL,
    answers_json text,
    "timestamp" timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.batch1_test_results OWNER TO postgres;

--
-- TOC entry 578 (class 1259 OID 22027)
-- Name: batch1_test_results_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.batch1_test_results_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.batch1_test_results_id_seq OWNER TO postgres;

--
-- TOC entry 7692 (class 0 OID 0)
-- Dependencies: 578
-- Name: batch1_test_results_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.batch1_test_results_id_seq OWNED BY public.batch1_test_results.id;


--
-- TOC entry 595 (class 1259 OID 22216)
-- Name: batch_sentiments; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.batch_sentiments (
    id integer NOT NULL,
    batch_name character varying,
    date date,
    focused_score double precision,
    anxious_score double precision,
    tired_score double precision,
    inspired_score double precision,
    dominant_vibe character varying,
    sample_size integer,
    top_keywords character varying,
    created_at timestamp without time zone
);


ALTER TABLE public.batch_sentiments OWNER TO postgres;

--
-- TOC entry 594 (class 1259 OID 22215)
-- Name: batch_sentiments_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.batch_sentiments_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.batch_sentiments_id_seq OWNER TO postgres;

--
-- TOC entry 7693 (class 0 OID 0)
-- Dependencies: 594
-- Name: batch_sentiments_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.batch_sentiments_id_seq OWNED BY public.batch_sentiments.id;


--
-- TOC entry 264 (class 1259 OID 18599)
-- Name: blockchain_blocks; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.blockchain_blocks (
    id integer NOT NULL,
    index integer NOT NULL,
    "timestamp" timestamp without time zone NOT NULL,
    data json NOT NULL,
    previous_hash character varying NOT NULL,
    hash character varying NOT NULL,
    nonce integer NOT NULL
);


ALTER TABLE public.blockchain_blocks OWNER TO postgres;

--
-- TOC entry 263 (class 1259 OID 18598)
-- Name: blockchain_blocks_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.blockchain_blocks_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.blockchain_blocks_id_seq OWNER TO postgres;

--
-- TOC entry 7694 (class 0 OID 0)
-- Dependencies: 263
-- Name: blockchain_blocks_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.blockchain_blocks_id_seq OWNED BY public.blockchain_blocks.id;


--
-- TOC entry 424 (class 1259 OID 20117)
-- Name: bundle_enrollments; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.bundle_enrollments (
    id integer NOT NULL,
    user_id integer NOT NULL,
    bundle_id integer NOT NULL,
    enrolled_at timestamp with time zone DEFAULT now(),
    price_paid numeric(10,2) NOT NULL,
    currency character varying(3),
    payment_id character varying(100),
    payment_status character varying(20),
    coupon_code character varying(50),
    discount_applied numeric(10,2),
    courses_completed integer,
    completion_percentage numeric(5,2),
    completed_at timestamp with time zone,
    status character varying(20),
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone
);


ALTER TABLE public.bundle_enrollments OWNER TO postgres;

--
-- TOC entry 423 (class 1259 OID 20116)
-- Name: bundle_enrollments_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.bundle_enrollments_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.bundle_enrollments_id_seq OWNER TO postgres;

--
-- TOC entry 7695 (class 0 OID 0)
-- Dependencies: 423
-- Name: bundle_enrollments_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.bundle_enrollments_id_seq OWNED BY public.bundle_enrollments.id;


--
-- TOC entry 624 (class 1259 OID 22439)
-- Name: call_logs; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.call_logs (
    id integer NOT NULL,
    user_id integer NOT NULL,
    lead_id integer NOT NULL,
    call_type character varying(20) NOT NULL,
    phone_number character varying(20),
    duration_seconds integer,
    outcome character varying(50),
    notes text,
    call_started_at timestamp with time zone,
    call_ended_at timestamp with time zone,
    created_at timestamp with time zone DEFAULT now()
);


ALTER TABLE public.call_logs OWNER TO postgres;

--
-- TOC entry 623 (class 1259 OID 22438)
-- Name: call_logs_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.call_logs_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.call_logs_id_seq OWNER TO postgres;

--
-- TOC entry 7696 (class 0 OID 0)
-- Dependencies: 623
-- Name: call_logs_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.call_logs_id_seq OWNED BY public.call_logs.id;


--
-- TOC entry 519 (class 1259 OID 21203)
-- Name: cart_items; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cart_items (
    id integer NOT NULL,
    cart_id integer NOT NULL,
    course_id integer,
    bundle_id integer,
    quantity integer NOT NULL,
    unit_price double precision NOT NULL,
    coupon_id integer,
    discount_amount double precision,
    added_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone
);


ALTER TABLE public.cart_items OWNER TO postgres;

--
-- TOC entry 518 (class 1259 OID 21202)
-- Name: cart_items_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.cart_items_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.cart_items_id_seq OWNER TO postgres;

--
-- TOC entry 7697 (class 0 OID 0)
-- Dependencies: 518
-- Name: cart_items_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.cart_items_id_seq OWNED BY public.cart_items.id;


--
-- TOC entry 228 (class 1259 OID 18378)
-- Name: categories; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.categories (
    id integer NOT NULL,
    name character varying NOT NULL,
    slug character varying NOT NULL,
    description text,
    icon character varying
);


ALTER TABLE public.categories OWNER TO postgres;

--
-- TOC entry 227 (class 1259 OID 18377)
-- Name: categories_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.categories_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.categories_id_seq OWNER TO postgres;

--
-- TOC entry 7698 (class 0 OID 0)
-- Dependencies: 227
-- Name: categories_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.categories_id_seq OWNED BY public.categories.id;


--
-- TOC entry 301 (class 1259 OID 18937)
-- Name: certificate_templates; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.certificate_templates (
    id integer NOT NULL,
    name character varying NOT NULL,
    description text,
    background_url character varying,
    background_color character varying,
    layout json,
    title_font character varying,
    title_font_size integer,
    title_color character varying,
    body_font character varying,
    body_font_size integer,
    body_color character varying,
    border_style character varying,
    border_color character varying,
    logo_url character varying,
    signature_url character varying,
    is_default boolean,
    is_public boolean,
    creator_id integer NOT NULL,
    created_at timestamp without time zone,
    updated_at timestamp without time zone
);


ALTER TABLE public.certificate_templates OWNER TO postgres;

--
-- TOC entry 300 (class 1259 OID 18936)
-- Name: certificate_templates_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.certificate_templates_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.certificate_templates_id_seq OWNER TO postgres;

--
-- TOC entry 7699 (class 0 OID 0)
-- Dependencies: 300
-- Name: certificate_templates_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.certificate_templates_id_seq OWNED BY public.certificate_templates.id;


--
-- TOC entry 488 (class 1259 OID 20871)
-- Name: certificates; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.certificates (
    id integer NOT NULL,
    user_id integer NOT NULL,
    course_id integer NOT NULL,
    enrollment_id integer NOT NULL,
    certificate_number character varying NOT NULL,
    issued_at timestamp without time zone NOT NULL,
    student_name character varying NOT NULL,
    student_email character varying NOT NULL,
    course_title character varying NOT NULL,
    instructor_name character varying NOT NULL,
    pdf_url character varying,
    completion_percentage double precision,
    total_lessons_completed integer,
    time_spent_hours double precision,
    template_id integer
);


ALTER TABLE public.certificates OWNER TO postgres;

--
-- TOC entry 487 (class 1259 OID 20870)
-- Name: certificates_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.certificates_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.certificates_id_seq OWNER TO postgres;

--
-- TOC entry 7700 (class 0 OID 0)
-- Dependencies: 487
-- Name: certificates_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.certificates_id_seq OWNED BY public.certificates.id;


--
-- TOC entry 278 (class 1259 OID 18727)
-- Name: challenges; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.challenges (
    id integer NOT NULL,
    title character varying(200) NOT NULL,
    description text NOT NULL,
    type public.challengetype NOT NULL,
    start_date date NOT NULL,
    end_date date NOT NULL,
    requirement json NOT NULL,
    reward_coins integer,
    reward_achievement_id integer,
    is_active boolean,
    difficulty integer,
    created_at timestamp with time zone DEFAULT now()
);


ALTER TABLE public.challenges OWNER TO postgres;

--
-- TOC entry 277 (class 1259 OID 18726)
-- Name: challenges_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.challenges_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.challenges_id_seq OWNER TO postgres;

--
-- TOC entry 7701 (class 0 OID 0)
-- Dependencies: 277
-- Name: challenges_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.challenges_id_seq OWNED BY public.challenges.id;


--
-- TOC entry 545 (class 1259 OID 21562)
-- Name: chat_feedback; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.chat_feedback (
    id integer NOT NULL,
    message_id integer NOT NULL,
    user_id integer NOT NULL,
    rating integer,
    is_helpful boolean,
    feedback_text text,
    created_at timestamp without time zone
);


ALTER TABLE public.chat_feedback OWNER TO postgres;

--
-- TOC entry 544 (class 1259 OID 21561)
-- Name: chat_feedback_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.chat_feedback_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.chat_feedback_id_seq OWNER TO postgres;

--
-- TOC entry 7702 (class 0 OID 0)
-- Dependencies: 544
-- Name: chat_feedback_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.chat_feedback_id_seq OWNED BY public.chat_feedback.id;


--
-- TOC entry 435 (class 1259 OID 20243)
-- Name: chat_sessions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.chat_sessions (
    id integer NOT NULL,
    user_id integer NOT NULL,
    course_id integer,
    title character varying,
    context_type character varying,
    context_id integer,
    is_active boolean,
    created_at timestamp without time zone,
    updated_at timestamp without time zone
);


ALTER TABLE public.chat_sessions OWNER TO postgres;

--
-- TOC entry 434 (class 1259 OID 20242)
-- Name: chat_sessions_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.chat_sessions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.chat_sessions_id_seq OWNER TO postgres;

--
-- TOC entry 7703 (class 0 OID 0)
-- Dependencies: 434
-- Name: chat_sessions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.chat_sessions_id_seq OWNED BY public.chat_sessions.id;


--
-- TOC entry 517 (class 1259 OID 21188)
-- Name: chatbot_messages; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.chatbot_messages (
    id integer NOT NULL,
    session_id integer NOT NULL,
    role character varying NOT NULL,
    content text NOT NULL,
    meta_data json,
    tokens_used integer,
    created_at timestamp without time zone
);


ALTER TABLE public.chatbot_messages OWNER TO postgres;

--
-- TOC entry 516 (class 1259 OID 21187)
-- Name: chatbot_messages_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.chatbot_messages_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.chatbot_messages_id_seq OWNER TO postgres;

--
-- TOC entry 7704 (class 0 OID 0)
-- Dependencies: 516
-- Name: chatbot_messages_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.chatbot_messages_id_seq OWNED BY public.chatbot_messages.id;


--
-- TOC entry 357 (class 1259 OID 19445)
-- Name: coin_transactions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.coin_transactions (
    id integer NOT NULL,
    user_id integer NOT NULL,
    amount integer NOT NULL,
    type public.transactiontype NOT NULL,
    reason character varying(200) NOT NULL,
    description text,
    reference_type character varying(50),
    reference_id integer,
    balance_after integer NOT NULL,
    created_at timestamp with time zone DEFAULT now()
);


ALTER TABLE public.coin_transactions OWNER TO postgres;

--
-- TOC entry 356 (class 1259 OID 19444)
-- Name: coin_transactions_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.coin_transactions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.coin_transactions_id_seq OWNER TO postgres;

--
-- TOC entry 7705 (class 0 OID 0)
-- Dependencies: 356
-- Name: coin_transactions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.coin_transactions_id_seq OWNED BY public.coin_transactions.id;


--
-- TOC entry 515 (class 1259 OID 21162)
-- Name: collaborative_projects; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.collaborative_projects (
    id integer NOT NULL,
    title character varying(200) NOT NULL,
    description text,
    course_id integer,
    group_id integer,
    deadline timestamp with time zone,
    status public.projectstatus NOT NULL,
    max_team_size integer,
    created_by integer,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone
);


ALTER TABLE public.collaborative_projects OWNER TO postgres;

--
-- TOC entry 514 (class 1259 OID 21161)
-- Name: collaborative_projects_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.collaborative_projects_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.collaborative_projects_id_seq OWNER TO postgres;

--
-- TOC entry 7706 (class 0 OID 0)
-- Dependencies: 514
-- Name: collaborative_projects_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.collaborative_projects_id_seq OWNED BY public.collaborative_projects.id;


--
-- TOC entry 397 (class 1259 OID 19822)
-- Name: communication_templates; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.communication_templates (
    id integer NOT NULL,
    name character varying NOT NULL,
    channel character varying NOT NULL,
    subject character varying,
    body text NOT NULL,
    html_body text,
    available_tokens json,
    media_url character varying,
    media_type character varying,
    category character varying,
    is_active boolean,
    created_by integer,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone
);


ALTER TABLE public.communication_templates OWNER TO postgres;

--
-- TOC entry 396 (class 1259 OID 19821)
-- Name: communication_templates_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.communication_templates_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.communication_templates_id_seq OWNER TO postgres;

--
-- TOC entry 7707 (class 0 OID 0)
-- Dependencies: 396
-- Name: communication_templates_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.communication_templates_id_seq OWNED BY public.communication_templates.id;


--
-- TOC entry 583 (class 1259 OID 22076)
-- Name: concept_dependencies; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.concept_dependencies (
    parent_concept_id character varying(36) NOT NULL,
    child_concept_id character varying(36) NOT NULL,
    strength double precision
);


ALTER TABLE public.concept_dependencies OWNER TO postgres;

--
-- TOC entry 582 (class 1259 OID 22071)
-- Name: concepts; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.concepts (
    id character varying(36) NOT NULL,
    title character varying(255) NOT NULL,
    subject character varying(50) NOT NULL,
    difficulty_level integer,
    granularity_type public.granularitytype
);


ALTER TABLE public.concepts OWNER TO postgres;

--
-- TOC entry 258 (class 1259 OID 18560)
-- Name: content_difficulty_analyses; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.content_difficulty_analyses (
    id integer NOT NULL,
    content_id integer NOT NULL,
    content_type character varying(50) NOT NULL,
    flesch_reading_ease double precision,
    flesch_kincaid_grade double precision,
    gunning_fog_index double precision,
    smog_index double precision,
    avg_sentence_length double precision,
    avg_word_length double precision,
    vocabulary_complexity double precision,
    concept_density double precision,
    recommended_level character varying(50),
    target_audience character varying(100),
    estimated_reading_time integer,
    simplification_suggestions json,
    difficult_terms json,
    analyzed_at timestamp with time zone DEFAULT now(),
    created_at timestamp with time zone DEFAULT now()
);


ALTER TABLE public.content_difficulty_analyses OWNER TO postgres;

--
-- TOC entry 257 (class 1259 OID 18559)
-- Name: content_difficulty_analyses_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.content_difficulty_analyses_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.content_difficulty_analyses_id_seq OWNER TO postgres;

--
-- TOC entry 7708 (class 0 OID 0)
-- Dependencies: 257
-- Name: content_difficulty_analyses_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.content_difficulty_analyses_id_seq OWNED BY public.content_difficulty_analyses.id;


--
-- TOC entry 256 (class 1259 OID 18547)
-- Name: content_embeddings; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.content_embeddings (
    id integer NOT NULL,
    content_id integer NOT NULL,
    content_type character varying(50) NOT NULL,
    embedding_model character varying(50),
    embedding_dimension integer,
    embedding_vector json NOT NULL,
    content_title character varying(500),
    content_excerpt text,
    last_updated timestamp with time zone DEFAULT now(),
    created_at timestamp with time zone DEFAULT now()
);


ALTER TABLE public.content_embeddings OWNER TO postgres;

--
-- TOC entry 255 (class 1259 OID 18546)
-- Name: content_embeddings_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.content_embeddings_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.content_embeddings_id_seq OWNER TO postgres;

--
-- TOC entry 7709 (class 0 OID 0)
-- Dependencies: 255
-- Name: content_embeddings_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.content_embeddings_id_seq OWNED BY public.content_embeddings.id;


--
-- TOC entry 248 (class 1259 OID 18495)
-- Name: content_translations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.content_translations (
    id integer NOT NULL,
    content_type character varying(50) NOT NULL,
    content_id integer NOT NULL,
    field_name character varying(100) NOT NULL,
    language_code character varying(10) NOT NULL,
    translated_value text NOT NULL,
    is_machine_translated boolean,
    translator_notes text,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone
);


ALTER TABLE public.content_translations OWNER TO postgres;

--
-- TOC entry 247 (class 1259 OID 18494)
-- Name: content_translations_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.content_translations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.content_translations_id_seq OWNER TO postgres;

--
-- TOC entry 7710 (class 0 OID 0)
-- Dependencies: 247
-- Name: content_translations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.content_translations_id_seq OWNED BY public.content_translations.id;


--
-- TOC entry 547 (class 1259 OID 21582)
-- Name: coupon_usages; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.coupon_usages (
    id integer NOT NULL,
    coupon_id integer NOT NULL,
    user_id integer NOT NULL,
    payment_id integer,
    original_price double precision NOT NULL,
    discount_amount double precision NOT NULL,
    final_price double precision NOT NULL,
    used_at timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.coupon_usages OWNER TO postgres;

--
-- TOC entry 546 (class 1259 OID 21581)
-- Name: coupon_usages_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.coupon_usages_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.coupon_usages_id_seq OWNER TO postgres;

--
-- TOC entry 7711 (class 0 OID 0)
-- Dependencies: 546
-- Name: coupon_usages_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.coupon_usages_id_seq OWNED BY public.coupon_usages.id;


--
-- TOC entry 441 (class 1259 OID 20306)
-- Name: coupons; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.coupons (
    id integer NOT NULL,
    code character varying NOT NULL,
    description text,
    discount_type character varying NOT NULL,
    discount_value double precision NOT NULL,
    min_purchase_amount double precision,
    max_discount_amount double precision,
    course_id integer,
    category_id integer,
    instructor_id integer NOT NULL,
    usage_limit integer,
    usage_count integer NOT NULL,
    usage_per_user_limit integer NOT NULL,
    valid_from timestamp with time zone NOT NULL,
    valid_until timestamp with time zone,
    is_active boolean NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone
);


ALTER TABLE public.coupons OWNER TO postgres;

--
-- TOC entry 440 (class 1259 OID 20305)
-- Name: coupons_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.coupons_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.coupons_id_seq OWNER TO postgres;

--
-- TOC entry 7712 (class 0 OID 0)
-- Dependencies: 440
-- Name: coupons_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.coupons_id_seq OWNED BY public.coupons.id;


--
-- TOC entry 411 (class 1259 OID 19963)
-- Name: course_announcements; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.course_announcements (
    id integer NOT NULL,
    course_id integer NOT NULL,
    instructor_id integer NOT NULL,
    title character varying(200) NOT NULL,
    content text NOT NULL,
    is_pinned boolean,
    is_published boolean,
    send_notification boolean,
    send_email boolean,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone,
    published_at timestamp with time zone
);


ALTER TABLE public.course_announcements OWNER TO postgres;

--
-- TOC entry 410 (class 1259 OID 19962)
-- Name: course_announcements_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.course_announcements_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.course_announcements_id_seq OWNER TO postgres;

--
-- TOC entry 7713 (class 0 OID 0)
-- Dependencies: 410
-- Name: course_announcements_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.course_announcements_id_seq OWNED BY public.course_announcements.id;


--
-- TOC entry 415 (class 1259 OID 20010)
-- Name: course_bookmarks; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.course_bookmarks (
    id integer NOT NULL,
    course_id integer NOT NULL,
    user_id integer NOT NULL,
    note text,
    created_at timestamp with time zone DEFAULT now()
);


ALTER TABLE public.course_bookmarks OWNER TO postgres;

--
-- TOC entry 414 (class 1259 OID 20009)
-- Name: course_bookmarks_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.course_bookmarks_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.course_bookmarks_id_seq OWNER TO postgres;

--
-- TOC entry 7714 (class 0 OID 0)
-- Dependencies: 414
-- Name: course_bookmarks_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.course_bookmarks_id_seq OWNED BY public.course_bookmarks.id;


--
-- TOC entry 422 (class 1259 OID 20101)
-- Name: course_bundle_items; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.course_bundle_items (
    bundle_id integer NOT NULL,
    course_id integer NOT NULL
);


ALTER TABLE public.course_bundle_items OWNER TO postgres;

--
-- TOC entry 303 (class 1259 OID 18952)
-- Name: course_bundles; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.course_bundles (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    slug character varying(255),
    description text,
    short_description character varying(500),
    price numeric(10,2) NOT NULL,
    original_price numeric(10,2),
    discount_percentage numeric(5,2),
    currency character varying(3),
    thumbnail_url character varying(500),
    banner_url character varying(500),
    is_published boolean,
    is_active boolean,
    is_featured boolean,
    instructor_id integer NOT NULL,
    total_enrollments integer,
    total_revenue numeric(10,2),
    view_count integer,
    valid_from timestamp with time zone,
    valid_until timestamp with time zone,
    meta_title character varying(255),
    meta_description text,
    meta_keywords character varying(500),
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone
);


ALTER TABLE public.course_bundles OWNER TO postgres;

--
-- TOC entry 302 (class 1259 OID 18951)
-- Name: course_bundles_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.course_bundles_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.course_bundles_id_seq OWNER TO postgres;

--
-- TOC entry 7715 (class 0 OID 0)
-- Dependencies: 302
-- Name: course_bundles_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.course_bundles_id_seq OWNED BY public.course_bundles.id;


--
-- TOC entry 486 (class 1259 OID 20838)
-- Name: course_payments; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.course_payments (
    id integer NOT NULL,
    user_id integer NOT NULL,
    course_id integer,
    enrollment_id integer,
    amount double precision NOT NULL,
    currency character varying,
    status character varying NOT NULL,
    payment_method character varying,
    failure_reason text,
    refund_reason text,
    refunded_at timestamp with time zone,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    succeeded_at timestamp with time zone,
    gateway character varying NOT NULL,
    cashfree_order_id character varying,
    cashfree_payment_id character varying,
    invoice_url character varying
);


ALTER TABLE public.course_payments OWNER TO postgres;

--
-- TOC entry 485 (class 1259 OID 20837)
-- Name: course_payments_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.course_payments_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.course_payments_id_seq OWNER TO postgres;

--
-- TOC entry 7716 (class 0 OID 0)
-- Dependencies: 485
-- Name: course_payments_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.course_payments_id_seq OWNED BY public.course_payments.id;


--
-- TOC entry 437 (class 1259 OID 20263)
-- Name: course_recommendations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.course_recommendations (
    id integer NOT NULL,
    user_id integer NOT NULL,
    course_id integer NOT NULL,
    score double precision NOT NULL,
    reason character varying,
    algorithm character varying NOT NULL,
    meta_data json,
    created_at timestamp without time zone,
    clicked timestamp without time zone,
    enrolled timestamp without time zone
);


ALTER TABLE public.course_recommendations OWNER TO postgres;

--
-- TOC entry 436 (class 1259 OID 20262)
-- Name: course_recommendations_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.course_recommendations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.course_recommendations_id_seq OWNER TO postgres;

--
-- TOC entry 7717 (class 0 OID 0)
-- Dependencies: 436
-- Name: course_recommendations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.course_recommendations_id_seq OWNED BY public.course_recommendations.id;


--
-- TOC entry 404 (class 1259 OID 19888)
-- Name: course_reviews; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.course_reviews (
    id integer NOT NULL,
    course_id integer NOT NULL,
    user_id integer NOT NULL,
    rating double precision NOT NULL,
    title character varying,
    review_text text,
    helpful_count integer,
    created_at timestamp without time zone,
    updated_at timestamp without time zone,
    is_approved integer
);


ALTER TABLE public.course_reviews OWNER TO postgres;

--
-- TOC entry 403 (class 1259 OID 19887)
-- Name: course_reviews_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.course_reviews_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.course_reviews_id_seq OWNER TO postgres;

--
-- TOC entry 7718 (class 0 OID 0)
-- Dependencies: 403
-- Name: course_reviews_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.course_reviews_id_seq OWNED BY public.course_reviews.id;


--
-- TOC entry 405 (class 1259 OID 19909)
-- Name: course_tags; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.course_tags (
    course_id integer NOT NULL,
    tag_id integer NOT NULL
);


ALTER TABLE public.course_tags OWNER TO postgres;

--
-- TOC entry 305 (class 1259 OID 18970)
-- Name: courses; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.courses (
    id integer NOT NULL,
    title character varying NOT NULL,
    slug character varying NOT NULL,
    description text,
    long_description text,
    thumbnail_url character varying,
    preview_video_url character varying,
    instructor_id integer NOT NULL,
    category_id integer,
    level public.courselevel,
    prerequisites json,
    is_published boolean,
    is_featured boolean,
    is_password_protected boolean,
    password_hash character varying,
    price double precision,
    currency character varying,
    created_at timestamp without time zone,
    updated_at timestamp without time zone,
    published_at timestamp without time zone,
    total_enrollments integer,
    average_rating double precision,
    total_reviews integer,
    total_duration_minutes integer
);


ALTER TABLE public.courses OWNER TO postgres;

--
-- TOC entry 304 (class 1259 OID 18969)
-- Name: courses_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.courses_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.courses_id_seq OWNER TO postgres;

--
-- TOC entry 7719 (class 0 OID 0)
-- Dependencies: 304
-- Name: courses_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.courses_id_seq OWNED BY public.courses.id;


--
-- TOC entry 267 (class 1259 OID 18623)
-- Name: curriculum_insights; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.curriculum_insights (
    id character varying(36) NOT NULL,
    date date NOT NULL,
    gs_paper character varying(10),
    total_students integer,
    average_score double precision,
    common_challenges json,
    high_performing_topics json,
    low_performing_topics json,
    ai_recommendations json,
    created_at timestamp without time zone
);


ALTER TABLE public.curriculum_insights OWNER TO postgres;

--
-- TOC entry 606 (class 1259 OID 22302)
-- Name: daily_dev_reports; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.daily_dev_reports (
    id integer NOT NULL,
    date date NOT NULL,
    batch character varying(100),
    summary text,
    actions json,
    files_changed integer,
    lines_added integer,
    lines_removed integer,
    tests_run integer,
    tests_passed integer,
    created_at timestamp without time zone,
    updated_at timestamp without time zone
);


ALTER TABLE public.daily_dev_reports OWNER TO postgres;

--
-- TOC entry 605 (class 1259 OID 22301)
-- Name: daily_dev_reports_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.daily_dev_reports_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.daily_dev_reports_id_seq OWNER TO postgres;

--
-- TOC entry 7720 (class 0 OID 0)
-- Dependencies: 605
-- Name: daily_dev_reports_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.daily_dev_reports_id_seq OWNED BY public.daily_dev_reports.id;


--
-- TOC entry 383 (class 1259 OID 19675)
-- Name: daily_reflections; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.daily_reflections (
    id integer NOT NULL,
    user_id integer NOT NULL,
    date date NOT NULL,
    content text NOT NULL,
    created_at timestamp without time zone,
    updated_at timestamp without time zone
);


ALTER TABLE public.daily_reflections OWNER TO postgres;

--
-- TOC entry 382 (class 1259 OID 19674)
-- Name: daily_reflections_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.daily_reflections_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.daily_reflections_id_seq OWNER TO postgres;

--
-- TOC entry 7721 (class 0 OID 0)
-- Dependencies: 382
-- Name: daily_reflections_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.daily_reflections_id_seq OWNED BY public.daily_reflections.id;


--
-- TOC entry 593 (class 1259 OID 22203)
-- Name: daily_summaries; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.daily_summaries (
    id integer NOT NULL,
    date timestamp without time zone DEFAULT now(),
    active_students integer,
    total_study_minutes integer,
    avg_sentiment_score double precision,
    security_alerts_count integer,
    portal_health json,
    created_at timestamp with time zone DEFAULT now()
);


ALTER TABLE public.daily_summaries OWNER TO postgres;

--
-- TOC entry 592 (class 1259 OID 22202)
-- Name: daily_summaries_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.daily_summaries_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.daily_summaries_id_seq OWNER TO postgres;

--
-- TOC entry 7722 (class 0 OID 0)
-- Dependencies: 592
-- Name: daily_summaries_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.daily_summaries_id_seq OWNED BY public.daily_summaries.id;


--
-- TOC entry 379 (class 1259 OID 19646)
-- Name: daily_tasks; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.daily_tasks (
    id integer NOT NULL,
    user_id integer NOT NULL,
    date date NOT NULL,
    title character varying(255) NOT NULL,
    completed boolean,
    created_at timestamp without time zone,
    updated_at timestamp without time zone
);


ALTER TABLE public.daily_tasks OWNER TO postgres;

--
-- TOC entry 378 (class 1259 OID 19645)
-- Name: daily_tasks_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.daily_tasks_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.daily_tasks_id_seq OWNER TO postgres;

--
-- TOC entry 7723 (class 0 OID 0)
-- Dependencies: 378
-- Name: daily_tasks_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.daily_tasks_id_seq OWNED BY public.daily_tasks.id;


--
-- TOC entry 391 (class 1259 OID 19768)
-- Name: data_masking_configs; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.data_masking_configs (
    id integer NOT NULL,
    role character varying,
    user_id integer,
    mask_email boolean,
    mask_phone boolean,
    mask_address boolean,
    mask_financial boolean,
    custom_masked_fields json,
    masking_pattern character varying,
    is_active boolean,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone
);


ALTER TABLE public.data_masking_configs OWNER TO postgres;

--
-- TOC entry 390 (class 1259 OID 19767)
-- Name: data_masking_configs_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.data_masking_configs_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.data_masking_configs_id_seq OWNER TO postgres;

--
-- TOC entry 7724 (class 0 OID 0)
-- Dependencies: 390
-- Name: data_masking_configs_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.data_masking_configs_id_seq OWNED BY public.data_masking_configs.id;


--
-- TOC entry 604 (class 1259 OID 22285)
-- Name: development_logs; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.development_logs (
    id integer NOT NULL,
    date date NOT NULL,
    title character varying(500) NOT NULL,
    description text,
    batch character varying(100),
    features json,
    challenges json,
    created_by integer,
    created_at timestamp without time zone,
    updated_at timestamp without time zone
);


ALTER TABLE public.development_logs OWNER TO postgres;

--
-- TOC entry 603 (class 1259 OID 22284)
-- Name: development_logs_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.development_logs_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.development_logs_id_seq OWNER TO postgres;

--
-- TOC entry 7725 (class 0 OID 0)
-- Dependencies: 603
-- Name: development_logs_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.development_logs_id_seq OWNED BY public.development_logs.id;


--
-- TOC entry 365 (class 1259 OID 19515)
-- Name: digital_products; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.digital_products (
    id integer NOT NULL,
    title character varying NOT NULL,
    description text,
    price numeric(10,2) NOT NULL,
    file_url character varying NOT NULL,
    file_type character varying,
    is_active boolean,
    sales_count integer,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone,
    instructor_id integer NOT NULL
);


ALTER TABLE public.digital_products OWNER TO postgres;

--
-- TOC entry 364 (class 1259 OID 19514)
-- Name: digital_products_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.digital_products_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.digital_products_id_seq OWNER TO postgres;

--
-- TOC entry 7726 (class 0 OID 0)
-- Dependencies: 364
-- Name: digital_products_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.digital_products_id_seq OWNED BY public.digital_products.id;


--
-- TOC entry 367 (class 1259 OID 19532)
-- Name: direct_messages; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.direct_messages (
    id integer NOT NULL,
    sender_id integer NOT NULL,
    receiver_id integer NOT NULL,
    message text NOT NULL,
    is_read boolean,
    read_at timestamp without time zone,
    created_at timestamp without time zone NOT NULL
);


ALTER TABLE public.direct_messages OWNER TO postgres;

--
-- TOC entry 366 (class 1259 OID 19531)
-- Name: direct_messages_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.direct_messages_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.direct_messages_id_seq OWNER TO postgres;

--
-- TOC entry 7727 (class 0 OID 0)
-- Dependencies: 366
-- Name: direct_messages_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.direct_messages_id_seq OWNED BY public.direct_messages.id;


--
-- TOC entry 409 (class 1259 OID 19947)
-- Name: discussion_categories; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.discussion_categories (
    id integer NOT NULL,
    course_id integer NOT NULL,
    name character varying(100) NOT NULL,
    description text,
    order_index integer,
    is_active boolean,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone
);


ALTER TABLE public.discussion_categories OWNER TO postgres;

--
-- TOC entry 408 (class 1259 OID 19946)
-- Name: discussion_categories_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.discussion_categories_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.discussion_categories_id_seq OWNER TO postgres;

--
-- TOC entry 7728 (class 0 OID 0)
-- Dependencies: 408
-- Name: discussion_categories_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.discussion_categories_id_seq OWNED BY public.discussion_categories.id;


--
-- TOC entry 529 (class 1259 OID 21370)
-- Name: discussion_posts; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.discussion_posts (
    id integer NOT NULL,
    thread_id integer NOT NULL,
    user_id integer NOT NULL,
    parent_post_id integer,
    content text NOT NULL,
    is_answer boolean,
    is_edited boolean,
    upvotes integer,
    downvotes integer,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone
);


ALTER TABLE public.discussion_posts OWNER TO postgres;

--
-- TOC entry 528 (class 1259 OID 21369)
-- Name: discussion_posts_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.discussion_posts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.discussion_posts_id_seq OWNER TO postgres;

--
-- TOC entry 7729 (class 0 OID 0)
-- Dependencies: 528
-- Name: discussion_posts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.discussion_posts_id_seq OWNED BY public.discussion_posts.id;


--
-- TOC entry 492 (class 1259 OID 20926)
-- Name: discussion_threads; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.discussion_threads (
    id integer NOT NULL,
    category_id integer NOT NULL,
    course_id integer NOT NULL,
    user_id integer NOT NULL,
    title character varying(200) NOT NULL,
    content text NOT NULL,
    is_pinned boolean,
    is_locked boolean,
    is_resolved boolean,
    view_count integer,
    reply_count integer,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone,
    last_activity_at timestamp with time zone DEFAULT now(),
    is_featured boolean DEFAULT false,
    upvotes integer DEFAULT 0
);


ALTER TABLE public.discussion_threads OWNER TO postgres;

--
-- TOC entry 491 (class 1259 OID 20925)
-- Name: discussion_threads_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.discussion_threads_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.discussion_threads_id_seq OWNER TO postgres;

--
-- TOC entry 7730 (class 0 OID 0)
-- Dependencies: 491
-- Name: discussion_threads_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.discussion_threads_id_seq OWNED BY public.discussion_threads.id;


--
-- TOC entry 470 (class 1259 OID 20629)
-- Name: drill_content; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.drill_content (
    id character varying(36) NOT NULL,
    question_id character varying(36),
    title character varying(255) NOT NULL,
    sections json NOT NULL,
    estimated_reading_time integer,
    created_at timestamp without time zone,
    updated_at timestamp without time zone
);


ALTER TABLE public.drill_content OWNER TO postgres;

--
-- TOC entry 385 (class 1259 OID 19705)
-- Name: drill_daily_summaries; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.drill_daily_summaries (
    id character varying(36) NOT NULL,
    student_id integer NOT NULL,
    date date NOT NULL,
    overall_score integer,
    average_improvement integer,
    total_time_spent integer,
    question_scores json,
    comparison_data json,
    strengths json,
    challenges json,
    recommendations json,
    insights text,
    created_at timestamp without time zone
);


ALTER TABLE public.drill_daily_summaries OWNER TO postgres;

--
-- TOC entry 471 (class 1259 OID 20643)
-- Name: drill_model_answers; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.drill_model_answers (
    id character varying(36) NOT NULL,
    question_id character varying(36),
    title character varying(255) NOT NULL,
    answer_text text NOT NULL,
    key_points json,
    word_count integer,
    created_at timestamp without time zone,
    updated_at timestamp without time zone
);


ALTER TABLE public.drill_model_answers OWNER TO postgres;

--
-- TOC entry 384 (class 1259 OID 19691)
-- Name: drill_questions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.drill_questions (
    id character varying(36) NOT NULL,
    gs_paper character varying(10) NOT NULL,
    topic character varying(255) NOT NULL,
    sub_topic character varying(255),
    question_text text NOT NULL,
    key_points json,
    difficulty character varying(20),
    created_by integer,
    created_at timestamp without time zone,
    updated_at timestamp without time zone
);


ALTER TABLE public.drill_questions OWNER TO postgres;

--
-- TOC entry 472 (class 1259 OID 20657)
-- Name: drill_sessions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.drill_sessions (
    id character varying(36) NOT NULL,
    student_id integer NOT NULL,
    date date NOT NULL,
    question_id character varying(36) NOT NULL,
    question_number integer NOT NULL,
    before_answer_text text,
    before_answer_image_url character varying(500),
    after_answer_text text,
    after_answer_image_url character varying(500),
    question_read_time integer,
    before_writing_time integer,
    content_reading_time integer,
    after_writing_time integer,
    model_answer_time integer,
    before_score integer,
    after_score integer,
    improvement integer,
    overall_score integer,
    report_data json,
    completed_at timestamp without time zone,
    created_at timestamp without time zone
);


ALTER TABLE public.drill_sessions OWNER TO postgres;

--
-- TOC entry 439 (class 1259 OID 20283)
-- Name: email_logs; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.email_logs (
    id integer NOT NULL,
    user_id integer NOT NULL,
    template_id integer,
    recipient_email character varying NOT NULL,
    subject character varying NOT NULL,
    status public.emailstatus,
    sent_at timestamp without time zone,
    error_message text,
    body_html text,
    body_text text,
    created_at timestamp without time zone
);


ALTER TABLE public.email_logs OWNER TO postgres;

--
-- TOC entry 438 (class 1259 OID 20282)
-- Name: email_logs_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.email_logs_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.email_logs_id_seq OWNER TO postgres;

--
-- TOC entry 7731 (class 0 OID 0)
-- Dependencies: 438
-- Name: email_logs_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.email_logs_id_seq OWNED BY public.email_logs.id;


--
-- TOC entry 333 (class 1259 OID 19207)
-- Name: email_templates; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.email_templates (
    id integer NOT NULL,
    name character varying NOT NULL,
    display_name character varying NOT NULL,
    subject character varying NOT NULL,
    body_html text NOT NULL,
    body_text text,
    variables json,
    is_system boolean,
    notification_type public.notificationtype NOT NULL,
    created_by integer,
    created_at timestamp without time zone,
    updated_at timestamp without time zone
);


ALTER TABLE public.email_templates OWNER TO postgres;

--
-- TOC entry 332 (class 1259 OID 19206)
-- Name: email_templates_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.email_templates_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.email_templates_id_seq OWNER TO postgres;

--
-- TOC entry 7732 (class 0 OID 0)
-- Dependencies: 332
-- Name: email_templates_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.email_templates_id_seq OWNED BY public.email_templates.id;


--
-- TOC entry 369 (class 1259 OID 19554)
-- Name: enquiries; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.enquiries (
    id integer NOT NULL,
    name character varying,
    email character varying NOT NULL,
    subject character varying NOT NULL,
    message text NOT NULL,
    status character varying,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone,
    user_id integer
);


ALTER TABLE public.enquiries OWNER TO postgres;

--
-- TOC entry 368 (class 1259 OID 19553)
-- Name: enquiries_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.enquiries_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.enquiries_id_seq OWNER TO postgres;

--
-- TOC entry 7733 (class 0 OID 0)
-- Dependencies: 368
-- Name: enquiries_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.enquiries_id_seq OWNED BY public.enquiries.id;


--
-- TOC entry 426 (class 1259 OID 20139)
-- Name: enrollments; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.enrollments (
    id integer NOT NULL,
    user_id integer NOT NULL,
    course_id integer NOT NULL,
    status public.enrollmentstatus,
    progress_percentage double precision,
    last_accessed_lesson_id integer,
    enrolled_at timestamp without time zone,
    completed_at timestamp without time zone,
    expires_at timestamp without time zone,
    last_accessed_at timestamp without time zone,
    payment_id integer,
    price_paid double precision,
    certificate_issued boolean,
    certificate_issued_at timestamp without time zone
);


ALTER TABLE public.enrollments OWNER TO postgres;

--
-- TOC entry 425 (class 1259 OID 20138)
-- Name: enrollments_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.enrollments_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.enrollments_id_seq OWNER TO postgres;

--
-- TOC entry 7734 (class 0 OID 0)
-- Dependencies: 425
-- Name: enrollments_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.enrollments_id_seq OWNED BY public.enrollments.id;


--
-- TOC entry 317 (class 1259 OID 19076)
-- Name: exam_sessions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.exam_sessions (
    id integer NOT NULL,
    user_id integer,
    exam_name character varying,
    start_time timestamp without time zone,
    end_time timestamp without time zone,
    is_active boolean,
    violations integer
);


ALTER TABLE public.exam_sessions OWNER TO postgres;

--
-- TOC entry 316 (class 1259 OID 19075)
-- Name: exam_sessions_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.exam_sessions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.exam_sessions_id_seq OWNER TO postgres;

--
-- TOC entry 7735 (class 0 OID 0)
-- Dependencies: 316
-- Name: exam_sessions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.exam_sessions_id_seq OWNED BY public.exam_sessions.id;


--
-- TOC entry 622 (class 1259 OID 22415)
-- Name: field_activities; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.field_activities (
    id integer NOT NULL,
    user_id integer NOT NULL,
    activity_type character varying(50) NOT NULL,
    latitude double precision,
    longitude double precision,
    address text,
    lead_id integer,
    title character varying(255),
    notes text,
    photos json,
    duration_minutes integer,
    route_distance_km double precision,
    started_at timestamp with time zone,
    ended_at timestamp with time zone,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone
);


ALTER TABLE public.field_activities OWNER TO postgres;

--
-- TOC entry 621 (class 1259 OID 22414)
-- Name: field_activities_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.field_activities_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.field_activities_id_seq OWNER TO postgres;

--
-- TOC entry 7736 (class 0 OID 0)
-- Dependencies: 621
-- Name: field_activities_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.field_activities_id_seq OWNED BY public.field_activities.id;


--
-- TOC entry 636 (class 1259 OID 22554)
-- Name: flashcard_progress; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.flashcard_progress (
    id integer NOT NULL,
    user_id integer NOT NULL,
    flashcard_id integer NOT NULL,
    stability double precision,
    difficulty double precision,
    last_review_date timestamp with time zone,
    next_due_date timestamp with time zone,
    reps integer,
    lapses integer,
    status character varying(20),
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone
);


ALTER TABLE public.flashcard_progress OWNER TO postgres;

--
-- TOC entry 635 (class 1259 OID 22553)
-- Name: flashcard_progress_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.flashcard_progress_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.flashcard_progress_id_seq OWNER TO postgres;

--
-- TOC entry 7737 (class 0 OID 0)
-- Dependencies: 635
-- Name: flashcard_progress_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.flashcard_progress_id_seq OWNED BY public.flashcard_progress.id;


--
-- TOC entry 616 (class 1259 OID 22369)
-- Name: flashcards; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.flashcards (
    id integer NOT NULL,
    lesson_id integer,
    batch1_segment_key character varying(100),
    question text NOT NULL,
    answer text NOT NULL,
    explanation text,
    difficulty double precision,
    source_type character varying(50),
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone
);


ALTER TABLE public.flashcards OWNER TO postgres;

--
-- TOC entry 615 (class 1259 OID 22368)
-- Name: flashcards_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.flashcards_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.flashcards_id_seq OWNER TO postgres;

--
-- TOC entry 7738 (class 0 OID 0)
-- Dependencies: 615
-- Name: flashcards_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.flashcards_id_seq OWNED BY public.flashcards.id;


--
-- TOC entry 371 (class 1259 OID 19572)
-- Name: friendships; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.friendships (
    id integer NOT NULL,
    user_id integer NOT NULL,
    friend_id integer NOT NULL,
    status public.friendshipstatus NOT NULL,
    created_at timestamp without time zone NOT NULL,
    accepted_at timestamp without time zone
);


ALTER TABLE public.friendships OWNER TO postgres;

--
-- TOC entry 370 (class 1259 OID 19571)
-- Name: friendships_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.friendships_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.friendships_id_seq OWNER TO postgres;

--
-- TOC entry 7739 (class 0 OID 0)
-- Dependencies: 370
-- Name: friendships_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.friendships_id_seq OWNED BY public.friendships.id;


--
-- TOC entry 597 (class 1259 OID 22228)
-- Name: ghost_login_alerts; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.ghost_login_alerts (
    id integer NOT NULL,
    user_id integer,
    login_a_ip character varying,
    login_a_time timestamp without time zone,
    login_b_ip character varying,
    login_b_time timestamp without time zone,
    estimated_distance_km double precision,
    time_difference_minutes double precision,
    risk_score integer,
    is_resolved boolean,
    resolved_at timestamp without time zone,
    admin_notes character varying,
    created_at timestamp without time zone
);


ALTER TABLE public.ghost_login_alerts OWNER TO postgres;

--
-- TOC entry 596 (class 1259 OID 22227)
-- Name: ghost_login_alerts_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.ghost_login_alerts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.ghost_login_alerts_id_seq OWNER TO postgres;

--
-- TOC entry 7740 (class 0 OID 0)
-- Dependencies: 596
-- Name: ghost_login_alerts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.ghost_login_alerts_id_seq OWNED BY public.ghost_login_alerts.id;


--
-- TOC entry 600 (class 1259 OID 22257)
-- Name: grapho_books; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.grapho_books (
    id integer NOT NULL,
    title character varying,
    level integer,
    total_days integer,
    pdf_url character varying,
    cover_image_url character varying,
    is_published boolean,
    created_at timestamp without time zone
);


ALTER TABLE public.grapho_books OWNER TO postgres;

--
-- TOC entry 599 (class 1259 OID 22256)
-- Name: grapho_books_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.grapho_books_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.grapho_books_id_seq OWNER TO postgres;

--
-- TOC entry 7741 (class 0 OID 0)
-- Dependencies: 599
-- Name: grapho_books_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.grapho_books_id_seq OWNED BY public.grapho_books.id;


--
-- TOC entry 632 (class 1259 OID 22519)
-- Name: grapho_pages; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.grapho_pages (
    id integer NOT NULL,
    book_id integer,
    day integer,
    page_number integer,
    reference_image_url character varying,
    focus_points json
);


ALTER TABLE public.grapho_pages OWNER TO postgres;

--
-- TOC entry 631 (class 1259 OID 22518)
-- Name: grapho_pages_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.grapho_pages_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.grapho_pages_id_seq OWNER TO postgres;

--
-- TOC entry 7742 (class 0 OID 0)
-- Dependencies: 631
-- Name: grapho_pages_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.grapho_pages_id_seq OWNED BY public.grapho_pages.id;


--
-- TOC entry 634 (class 1259 OID 22534)
-- Name: grapho_submissions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.grapho_submissions (
    id integer NOT NULL,
    user_id integer,
    book_id integer,
    day integer,
    image_url character varying NOT NULL,
    status character varying,
    verification_score integer,
    analysis_result json,
    started_at timestamp without time zone,
    completed_at timestamp without time zone,
    duration_seconds integer
);


ALTER TABLE public.grapho_submissions OWNER TO postgres;

--
-- TOC entry 633 (class 1259 OID 22533)
-- Name: grapho_submissions_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.grapho_submissions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.grapho_submissions_id_seq OWNER TO postgres;

--
-- TOC entry 7743 (class 0 OID 0)
-- Dependencies: 633
-- Name: grapho_submissions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.grapho_submissions_id_seq OWNED BY public.grapho_submissions.id;


--
-- TOC entry 467 (class 1259 OID 20599)
-- Name: graphotherapy_day_completions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.graphotherapy_day_completions (
    id integer NOT NULL,
    progress_id integer NOT NULL,
    level integer NOT NULL,
    day_number integer NOT NULL,
    completed_at timestamp with time zone DEFAULT now(),
    upload_url character varying(500),
    upload_filename character varying(255),
    notes text
);


ALTER TABLE public.graphotherapy_day_completions OWNER TO postgres;

--
-- TOC entry 466 (class 1259 OID 20598)
-- Name: graphotherapy_day_completions_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.graphotherapy_day_completions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.graphotherapy_day_completions_id_seq OWNER TO postgres;

--
-- TOC entry 7744 (class 0 OID 0)
-- Dependencies: 466
-- Name: graphotherapy_day_completions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.graphotherapy_day_completions_id_seq OWNED BY public.graphotherapy_day_completions.id;


--
-- TOC entry 373 (class 1259 OID 19592)
-- Name: graphotherapy_progress; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.graphotherapy_progress (
    id integer NOT NULL,
    user_id integer NOT NULL,
    current_level integer,
    current_day integer,
    total_streak integer,
    last_practice_date timestamp with time zone,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone
);


ALTER TABLE public.graphotherapy_progress OWNER TO postgres;

--
-- TOC entry 372 (class 1259 OID 19591)
-- Name: graphotherapy_progress_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.graphotherapy_progress_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.graphotherapy_progress_id_seq OWNER TO postgres;

--
-- TOC entry 7745 (class 0 OID 0)
-- Dependencies: 372
-- Name: graphotherapy_progress_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.graphotherapy_progress_id_seq OWNED BY public.graphotherapy_progress.id;


--
-- TOC entry 431 (class 1259 OID 20207)
-- Name: group_members; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.group_members (
    group_id integer NOT NULL,
    user_id integer NOT NULL,
    joined_at timestamp without time zone
);


ALTER TABLE public.group_members OWNER TO postgres;

--
-- TOC entry 511 (class 1259 OID 21124)
-- Name: group_memberships; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.group_memberships (
    id integer NOT NULL,
    group_id integer NOT NULL,
    user_id integer NOT NULL,
    role public.memberrole,
    joined_at timestamp without time zone
);


ALTER TABLE public.group_memberships OWNER TO postgres;

--
-- TOC entry 510 (class 1259 OID 21123)
-- Name: group_memberships_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.group_memberships_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.group_memberships_id_seq OWNER TO postgres;

--
-- TOC entry 7746 (class 0 OID 0)
-- Dependencies: 510
-- Name: group_memberships_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.group_memberships_id_seq OWNED BY public.group_memberships.id;


--
-- TOC entry 537 (class 1259 OID 21476)
-- Name: group_post_comments; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.group_post_comments (
    id integer NOT NULL,
    post_id integer NOT NULL,
    user_id integer NOT NULL,
    content text NOT NULL,
    created_at timestamp without time zone
);


ALTER TABLE public.group_post_comments OWNER TO postgres;

--
-- TOC entry 536 (class 1259 OID 21475)
-- Name: group_post_comments_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.group_post_comments_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.group_post_comments_id_seq OWNER TO postgres;

--
-- TOC entry 7747 (class 0 OID 0)
-- Dependencies: 536
-- Name: group_post_comments_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.group_post_comments_id_seq OWNED BY public.group_post_comments.id;


--
-- TOC entry 513 (class 1259 OID 21142)
-- Name: group_posts; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.group_posts (
    id integer NOT NULL,
    group_id integer NOT NULL,
    user_id integer NOT NULL,
    content text NOT NULL,
    is_pinned boolean,
    likes_count integer,
    created_at timestamp without time zone,
    updated_at timestamp without time zone
);


ALTER TABLE public.group_posts OWNER TO postgres;

--
-- TOC entry 512 (class 1259 OID 21141)
-- Name: group_posts_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.group_posts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.group_posts_id_seq OWNER TO postgres;

--
-- TOC entry 7748 (class 0 OID 0)
-- Dependencies: 512
-- Name: group_posts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.group_posts_id_seq OWNED BY public.group_posts.id;


--
-- TOC entry 222 (class 1259 OID 18345)
-- Name: groups; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.groups (
    id integer NOT NULL,
    name character varying,
    description character varying,
    avatar_url character varying
);


ALTER TABLE public.groups OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 18344)
-- Name: groups_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.groups_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.groups_id_seq OWNER TO postgres;

--
-- TOC entry 7749 (class 0 OID 0)
-- Dependencies: 221
-- Name: groups_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.groups_id_seq OWNED BY public.groups.id;


--
-- TOC entry 469 (class 1259 OID 20615)
-- Name: habit_logs; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.habit_logs (
    id integer NOT NULL,
    habit_id integer NOT NULL,
    date date NOT NULL,
    completed boolean,
    created_at timestamp without time zone,
    updated_at timestamp without time zone
);


ALTER TABLE public.habit_logs OWNER TO postgres;

--
-- TOC entry 468 (class 1259 OID 20614)
-- Name: habit_logs_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.habit_logs_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.habit_logs_id_seq OWNER TO postgres;

--
-- TOC entry 7750 (class 0 OID 0)
-- Dependencies: 468
-- Name: habit_logs_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.habit_logs_id_seq OWNED BY public.habit_logs.id;


--
-- TOC entry 381 (class 1259 OID 19661)
-- Name: habits; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.habits (
    id integer NOT NULL,
    user_id integer NOT NULL,
    name character varying(255) NOT NULL,
    is_active boolean,
    created_at timestamp without time zone,
    updated_at timestamp without time zone
);


ALTER TABLE public.habits OWNER TO postgres;

--
-- TOC entry 380 (class 1259 OID 19660)
-- Name: habits_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.habits_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.habits_id_seq OWNER TO postgres;

--
-- TOC entry 7751 (class 0 OID 0)
-- Dependencies: 380
-- Name: habits_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.habits_id_seq OWNED BY public.habits.id;


--
-- TOC entry 289 (class 1259 OID 18825)
-- Name: handwriting_submissions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.handwriting_submissions (
    id integer NOT NULL,
    user_id integer,
    image_url character varying NOT NULL,
    quiz_data text,
    report_content text,
    report_level integer,
    created_at timestamp with time zone DEFAULT now()
);


ALTER TABLE public.handwriting_submissions OWNER TO postgres;

--
-- TOC entry 288 (class 1259 OID 18824)
-- Name: handwriting_submissions_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.handwriting_submissions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.handwriting_submissions_id_seq OWNER TO postgres;

--
-- TOC entry 7752 (class 0 OID 0)
-- Dependencies: 288
-- Name: handwriting_submissions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.handwriting_submissions_id_seq OWNED BY public.handwriting_submissions.id;


--
-- TOC entry 443 (class 1259 OID 20333)
-- Name: instructor_analytics; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.instructor_analytics (
    id integer NOT NULL,
    instructor_id integer NOT NULL,
    course_id integer NOT NULL,
    date date NOT NULL,
    total_students integer,
    active_students integer,
    new_enrollments integer,
    completions integer,
    avg_progress double precision,
    avg_quiz_score double precision,
    quiz_attempts integer,
    assignments_submitted integer,
    avg_assignment_score double precision,
    total_revenue double precision,
    new_revenue double precision,
    refunds integer,
    refund_amount double precision,
    total_time_spent integer,
    avg_session_duration double precision,
    discussion_posts integer,
    questions_asked integer,
    peer_reviews_completed integer,
    avg_rating double precision,
    new_reviews integer,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone
);


ALTER TABLE public.instructor_analytics OWNER TO postgres;

--
-- TOC entry 442 (class 1259 OID 20332)
-- Name: instructor_analytics_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.instructor_analytics_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.instructor_analytics_id_seq OWNER TO postgres;

--
-- TOC entry 7753 (class 0 OID 0)
-- Dependencies: 442
-- Name: instructor_analytics_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.instructor_analytics_id_seq OWNED BY public.instructor_analytics.id;


--
-- TOC entry 339 (class 1259 OID 19258)
-- Name: instructor_payment_info; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.instructor_payment_info (
    id integer NOT NULL,
    instructor_id integer NOT NULL,
    stripe_account_id character varying(100),
    paypal_email character varying(255),
    bank_account_encrypted text,
    tax_country character varying(2),
    tax_id character varying(50),
    tax_form_type character varying(20),
    tax_form_submitted boolean,
    tax_form_verified boolean,
    minimum_payout_amount numeric(10,2),
    payout_frequency character varying(20),
    verified boolean,
    verified_at timestamp with time zone,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone
);


ALTER TABLE public.instructor_payment_info OWNER TO postgres;

--
-- TOC entry 338 (class 1259 OID 19257)
-- Name: instructor_payment_info_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.instructor_payment_info_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.instructor_payment_info_id_seq OWNER TO postgres;

--
-- TOC entry 7754 (class 0 OID 0)
-- Dependencies: 338
-- Name: instructor_payment_info_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.instructor_payment_info_id_seq OWNED BY public.instructor_payment_info.id;


--
-- TOC entry 337 (class 1259 OID 19240)
-- Name: instructor_payouts; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.instructor_payouts (
    id integer NOT NULL,
    instructor_id integer NOT NULL,
    amount numeric(10,2) NOT NULL,
    currency character varying(3) NOT NULL,
    status character varying(20) NOT NULL,
    payment_method character varying(20) NOT NULL,
    payment_details text,
    transaction_id character varying(100),
    requested_at timestamp with time zone DEFAULT now(),
    processed_at timestamp with time zone,
    completed_at timestamp with time zone,
    admin_notes text,
    failure_reason text,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone,
    cashfree_transfer_id character varying(100)
);


ALTER TABLE public.instructor_payouts OWNER TO postgres;

--
-- TOC entry 336 (class 1259 OID 19239)
-- Name: instructor_payouts_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.instructor_payouts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.instructor_payouts_id_seq OWNER TO postgres;

--
-- TOC entry 7755 (class 0 OID 0)
-- Dependencies: 336
-- Name: instructor_payouts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.instructor_payouts_id_seq OWNED BY public.instructor_payouts.id;


--
-- TOC entry 584 (class 1259 OID 22091)
-- Name: interaction_logs; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.interaction_logs (
    id character varying(36) NOT NULL,
    user_id integer NOT NULL,
    question_id character varying,
    associated_concept_id character varying(36),
    is_correct boolean,
    time_taken_ms integer,
    hesitation_detected boolean,
    backspaces_count integer,
    created_at timestamp without time zone
);


ALTER TABLE public.interaction_logs OWNER TO postgres;

--
-- TOC entry 567 (class 1259 OID 21838)
-- Name: invoices; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.invoices (
    id integer NOT NULL,
    order_id integer NOT NULL,
    invoice_number character varying(50) NOT NULL,
    issued_date timestamp with time zone DEFAULT now() NOT NULL,
    due_date timestamp with time zone,
    pdf_url character varying(500),
    pdf_generated integer,
    status character varying(20) NOT NULL,
    billing_name character varying(255),
    billing_email character varying(255),
    billing_address text,
    items_json text,
    subtotal double precision NOT NULL,
    discount double precision NOT NULL,
    tax double precision NOT NULL,
    total double precision NOT NULL,
    currency character varying(3) NOT NULL,
    notes text,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone,
    sent_at timestamp with time zone,
    paid_at timestamp with time zone
);


ALTER TABLE public.invoices OWNER TO postgres;

--
-- TOC entry 566 (class 1259 OID 21837)
-- Name: invoices_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.invoices_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.invoices_id_seq OWNER TO postgres;

--
-- TOC entry 7756 (class 0 OID 0)
-- Dependencies: 566
-- Name: invoices_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.invoices_id_seq OWNED BY public.invoices.id;


--
-- TOC entry 244 (class 1259 OID 18469)
-- Name: languages; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.languages (
    id integer NOT NULL,
    code character varying(10) NOT NULL,
    name character varying(100) NOT NULL,
    native_name character varying(100) NOT NULL,
    is_rtl boolean NOT NULL,
    is_active boolean NOT NULL,
    flag_emoji character varying(10),
    sort_order integer,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone
);


ALTER TABLE public.languages OWNER TO postgres;

--
-- TOC entry 243 (class 1259 OID 18468)
-- Name: languages_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.languages_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.languages_id_seq OWNER TO postgres;

--
-- TOC entry 7757 (class 0 OID 0)
-- Dependencies: 243
-- Name: languages_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.languages_id_seq OWNED BY public.languages.id;


--
-- TOC entry 389 (class 1259 OID 19748)
-- Name: leads; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.leads (
    id integer NOT NULL,
    name character varying NOT NULL,
    email character varying NOT NULL,
    phone character varying,
    status character varying,
    source_primary character varying,
    source_secondary character varying,
    source_tertiary character varying,
    assigned_to_id integer,
    is_verified boolean,
    verification_method character varying,
    intent_score double precision,
    location_latitude double precision,
    location_longitude double precision,
    location_address character varying,
    notes text,
    last_activity timestamp with time zone,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone,
    drip_day_sent integer
);


ALTER TABLE public.leads OWNER TO postgres;

--
-- TOC entry 388 (class 1259 OID 19747)
-- Name: leads_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.leads_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.leads_id_seq OWNER TO postgres;

--
-- TOC entry 7758 (class 0 OID 0)
-- Dependencies: 388
-- Name: leads_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.leads_id_seq OWNED BY public.leads.id;


--
-- TOC entry 433 (class 1259 OID 20223)
-- Name: learning_groups; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.learning_groups (
    id integer NOT NULL,
    name character varying(200) NOT NULL,
    description text,
    group_type public.grouptype,
    privacy public.groupprivacy,
    course_id integer,
    max_members integer,
    is_active boolean,
    created_by integer,
    created_at timestamp without time zone,
    updated_at timestamp without time zone
);


ALTER TABLE public.learning_groups OWNER TO postgres;

--
-- TOC entry 432 (class 1259 OID 20222)
-- Name: learning_groups_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.learning_groups_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.learning_groups_id_seq OWNER TO postgres;

--
-- TOC entry 7759 (class 0 OID 0)
-- Dependencies: 432
-- Name: learning_groups_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.learning_groups_id_seq OWNED BY public.learning_groups.id;


--
-- TOC entry 299 (class 1259 OID 18920)
-- Name: learning_paths; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.learning_paths (
    id integer NOT NULL,
    title character varying NOT NULL,
    description text,
    slug character varying,
    thumbnail_url character varying,
    cover_image_url character varying,
    difficulty_level character varying,
    estimated_duration_hours integer,
    price double precision,
    is_published boolean,
    creator_id integer NOT NULL,
    created_at timestamp without time zone,
    updated_at timestamp without time zone
);


ALTER TABLE public.learning_paths OWNER TO postgres;

--
-- TOC entry 298 (class 1259 OID 18919)
-- Name: learning_paths_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.learning_paths_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.learning_paths_id_seq OWNER TO postgres;

--
-- TOC entry 7760 (class 0 OID 0)
-- Dependencies: 298
-- Name: learning_paths_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.learning_paths_id_seq OWNED BY public.learning_paths.id;


--
-- TOC entry 413 (class 1259 OID 19984)
-- Name: lesson_bookmarks; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.lesson_bookmarks (
    id integer NOT NULL,
    lesson_id integer NOT NULL,
    user_id integer NOT NULL,
    course_id integer NOT NULL,
    note text,
    created_at timestamp with time zone DEFAULT now()
);


ALTER TABLE public.lesson_bookmarks OWNER TO postgres;

--
-- TOC entry 412 (class 1259 OID 19983)
-- Name: lesson_bookmarks_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.lesson_bookmarks_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.lesson_bookmarks_id_seq OWNER TO postgres;

--
-- TOC entry 7761 (class 0 OID 0)
-- Dependencies: 412
-- Name: lesson_bookmarks_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.lesson_bookmarks_id_seq OWNED BY public.lesson_bookmarks.id;


--
-- TOC entry 272 (class 1259 OID 18676)
-- Name: lesson_drip_settings; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.lesson_drip_settings (
    id integer NOT NULL,
    lesson_id integer NOT NULL,
    unlock_type character varying(20) NOT NULL,
    unlock_date timestamp without time zone,
    unlock_after_days integer,
    prerequisite_lesson_id integer,
    is_active boolean,
    created_at timestamp without time zone,
    updated_at timestamp without time zone
);


ALTER TABLE public.lesson_drip_settings OWNER TO postgres;

--
-- TOC entry 271 (class 1259 OID 18675)
-- Name: lesson_drip_settings_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.lesson_drip_settings_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.lesson_drip_settings_id_seq OWNER TO postgres;

--
-- TOC entry 7762 (class 0 OID 0)
-- Dependencies: 271
-- Name: lesson_drip_settings_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.lesson_drip_settings_id_seq OWNED BY public.lesson_drip_settings.id;


--
-- TOC entry 295 (class 1259 OID 18883)
-- Name: lesson_notes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.lesson_notes (
    id integer NOT NULL,
    lesson_id integer NOT NULL,
    user_id integer NOT NULL,
    title character varying(200),
    content text NOT NULL,
    "timestamp" integer,
    is_private boolean,
    color character varying(20),
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone
);


ALTER TABLE public.lesson_notes OWNER TO postgres;

--
-- TOC entry 294 (class 1259 OID 18882)
-- Name: lesson_notes_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.lesson_notes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.lesson_notes_id_seq OWNER TO postgres;

--
-- TOC entry 7763 (class 0 OID 0)
-- Dependencies: 294
-- Name: lesson_notes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.lesson_notes_id_seq OWNED BY public.lesson_notes.id;


--
-- TOC entry 293 (class 1259 OID 18860)
-- Name: lesson_progress; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.lesson_progress (
    id integer NOT NULL,
    user_id integer NOT NULL,
    lesson_id integer NOT NULL,
    status public.progressstatus,
    time_spent_seconds integer,
    first_accessed_at timestamp without time zone,
    last_accessed_at timestamp without time zone,
    completed_at timestamp without time zone,
    video_progress_seconds integer,
    video_completed_percentage double precision,
    result_data json
);


ALTER TABLE public.lesson_progress OWNER TO postgres;

--
-- TOC entry 292 (class 1259 OID 18859)
-- Name: lesson_progress_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.lesson_progress_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.lesson_progress_id_seq OWNER TO postgres;

--
-- TOC entry 7764 (class 0 OID 0)
-- Dependencies: 292
-- Name: lesson_progress_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.lesson_progress_id_seq OWNED BY public.lesson_progress.id;


--
-- TOC entry 234 (class 1259 OID 18414)
-- Name: lessons; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.lessons (
    id integer NOT NULL,
    module_id integer NOT NULL,
    title character varying NOT NULL,
    description text,
    type public.lessontype,
    content json,
    video_url character varying,
    video_duration_seconds integer,
    video_provider character varying,
    video_id character varying,
    video_thumbnail_url character varying,
    video_status character varying,
    video_uploaded_at timestamp without time zone,
    attachments json,
    order_index integer,
    is_preview boolean,
    available_after_days integer,
    prerequisite_lesson_ids json,
    duration_minutes integer,
    created_at timestamp without time zone,
    updated_at timestamp without time zone
);


ALTER TABLE public.lessons OWNER TO postgres;

--
-- TOC entry 233 (class 1259 OID 18413)
-- Name: lessons_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.lessons_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.lessons_id_seq OWNER TO postgres;

--
-- TOC entry 7765 (class 0 OID 0)
-- Dependencies: 233
-- Name: lessons_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.lessons_id_seq OWNED BY public.lessons.id;


--
-- TOC entry 499 (class 1259 OID 21007)
-- Name: live_class_attendance; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.live_class_attendance (
    id integer NOT NULL,
    live_class_id integer NOT NULL,
    student_id integer NOT NULL,
    joined_at timestamp without time zone NOT NULL,
    left_at timestamp without time zone,
    duration_minutes integer,
    asked_questions integer,
    reactions_count integer,
    created_at timestamp without time zone
);


ALTER TABLE public.live_class_attendance OWNER TO postgres;

--
-- TOC entry 498 (class 1259 OID 21006)
-- Name: live_class_attendance_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.live_class_attendance_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.live_class_attendance_id_seq OWNER TO postgres;

--
-- TOC entry 7766 (class 0 OID 0)
-- Dependencies: 498
-- Name: live_class_attendance_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.live_class_attendance_id_seq OWNED BY public.live_class_attendance.id;


--
-- TOC entry 507 (class 1259 OID 21085)
-- Name: live_class_chat_messages; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.live_class_chat_messages (
    id integer NOT NULL,
    live_class_id integer NOT NULL,
    user_id integer NOT NULL,
    message text NOT NULL,
    is_instructor boolean,
    created_at timestamp without time zone
);


ALTER TABLE public.live_class_chat_messages OWNER TO postgres;

--
-- TOC entry 506 (class 1259 OID 21084)
-- Name: live_class_chat_messages_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.live_class_chat_messages_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.live_class_chat_messages_id_seq OWNER TO postgres;

--
-- TOC entry 7767 (class 0 OID 0)
-- Dependencies: 506
-- Name: live_class_chat_messages_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.live_class_chat_messages_id_seq OWNED BY public.live_class_chat_messages.id;


--
-- TOC entry 533 (class 1259 OID 21427)
-- Name: live_class_poll_responses; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.live_class_poll_responses (
    id integer NOT NULL,
    poll_id integer NOT NULL,
    student_id integer NOT NULL,
    selected_option_index integer NOT NULL,
    responded_at timestamp without time zone
);


ALTER TABLE public.live_class_poll_responses OWNER TO postgres;

--
-- TOC entry 532 (class 1259 OID 21426)
-- Name: live_class_poll_responses_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.live_class_poll_responses_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.live_class_poll_responses_id_seq OWNER TO postgres;

--
-- TOC entry 7768 (class 0 OID 0)
-- Dependencies: 532
-- Name: live_class_poll_responses_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.live_class_poll_responses_id_seq OWNED BY public.live_class_poll_responses.id;


--
-- TOC entry 501 (class 1259 OID 21027)
-- Name: live_class_polls; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.live_class_polls (
    id integer NOT NULL,
    live_class_id integer NOT NULL,
    question character varying NOT NULL,
    options json NOT NULL,
    correct_option_index integer,
    status public.pollstatus,
    created_at timestamp without time zone,
    ended_at timestamp without time zone
);


ALTER TABLE public.live_class_polls OWNER TO postgres;

--
-- TOC entry 500 (class 1259 OID 21026)
-- Name: live_class_polls_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.live_class_polls_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.live_class_polls_id_seq OWNER TO postgres;

--
-- TOC entry 7769 (class 0 OID 0)
-- Dependencies: 500
-- Name: live_class_polls_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.live_class_polls_id_seq OWNED BY public.live_class_polls.id;


--
-- TOC entry 503 (class 1259 OID 21043)
-- Name: live_class_questions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.live_class_questions (
    id integer NOT NULL,
    live_class_id integer NOT NULL,
    student_id integer NOT NULL,
    question_text text NOT NULL,
    is_answered boolean,
    answer_text text,
    upvotes integer,
    created_at timestamp without time zone,
    answered_at timestamp without time zone
);


ALTER TABLE public.live_class_questions OWNER TO postgres;

--
-- TOC entry 502 (class 1259 OID 21042)
-- Name: live_class_questions_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.live_class_questions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.live_class_questions_id_seq OWNER TO postgres;

--
-- TOC entry 7770 (class 0 OID 0)
-- Dependencies: 502
-- Name: live_class_questions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.live_class_questions_id_seq OWNED BY public.live_class_questions.id;


--
-- TOC entry 505 (class 1259 OID 21064)
-- Name: live_class_reactions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.live_class_reactions (
    id integer NOT NULL,
    live_class_id integer NOT NULL,
    student_id integer NOT NULL,
    reaction_type character varying NOT NULL,
    created_at timestamp without time zone
);


ALTER TABLE public.live_class_reactions OWNER TO postgres;

--
-- TOC entry 504 (class 1259 OID 21063)
-- Name: live_class_reactions_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.live_class_reactions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.live_class_reactions_id_seq OWNER TO postgres;

--
-- TOC entry 7771 (class 0 OID 0)
-- Dependencies: 504
-- Name: live_class_reactions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.live_class_reactions_id_seq OWNED BY public.live_class_reactions.id;


--
-- TOC entry 419 (class 1259 OID 20053)
-- Name: live_classes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.live_classes (
    id integer NOT NULL,
    course_id integer NOT NULL,
    title character varying NOT NULL,
    description text,
    scheduled_at timestamp without time zone NOT NULL,
    duration_minutes integer,
    meeting_url character varying,
    meeting_password character varying,
    platform character varying,
    status public.liveclassstatus,
    recording_url character varying,
    recording_available boolean,
    instructor_id integer NOT NULL,
    created_at timestamp without time zone,
    updated_at timestamp without time zone,
    whiteboard_data json
);


ALTER TABLE public.live_classes OWNER TO postgres;

--
-- TOC entry 418 (class 1259 OID 20052)
-- Name: live_classes_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.live_classes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.live_classes_id_seq OWNER TO postgres;

--
-- TOC entry 7772 (class 0 OID 0)
-- Dependencies: 418
-- Name: live_classes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.live_classes_id_seq OWNED BY public.live_classes.id;


--
-- TOC entry 643 (class 1259 OID 27882)
-- Name: lms_assignments; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.lms_assignments (
    id uuid NOT NULL,
    title character varying NOT NULL,
    batch_id uuid,
    rubric_json json,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp with time zone
);


ALTER TABLE public.lms_assignments OWNER TO postgres;

--
-- TOC entry 399 (class 1259 OID 19841)
-- Name: marketing_workflows; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.marketing_workflows (
    id integer NOT NULL,
    name character varying NOT NULL,
    description text,
    status character varying,
    trigger_type character varying NOT NULL,
    trigger_config json,
    audience_filters json,
    allow_re_entry boolean,
    exit_on_conversion boolean,
    total_enrolled integer,
    total_completed integer,
    total_converted integer,
    created_by integer,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone
);


ALTER TABLE public.marketing_workflows OWNER TO postgres;

--
-- TOC entry 398 (class 1259 OID 19840)
-- Name: marketing_workflows_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.marketing_workflows_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.marketing_workflows_id_seq OWNER TO postgres;

--
-- TOC entry 7773 (class 0 OID 0)
-- Dependencies: 398
-- Name: marketing_workflows_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.marketing_workflows_id_seq OWNED BY public.marketing_workflows.id;


--
-- TOC entry 451 (class 1259 OID 20416)
-- Name: marketplace_listings; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.marketplace_listings (
    id integer NOT NULL,
    course_id integer NOT NULL,
    is_published boolean,
    is_featured boolean,
    is_promoted boolean,
    marketplace_category character varying(100),
    target_audience character varying(255),
    learning_outcomes text,
    prerequisites text,
    seo_title character varying(255),
    seo_description text,
    seo_keywords text,
    featured_until timestamp with time zone,
    promotion_start timestamp with time zone,
    promotion_end timestamp with time zone,
    view_count integer,
    click_count integer,
    conversion_rate numeric(5,2),
    quality_score numeric(3,2),
    marketplace_rank integer,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone
);


ALTER TABLE public.marketplace_listings OWNER TO postgres;

--
-- TOC entry 450 (class 1259 OID 20415)
-- Name: marketplace_listings_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.marketplace_listings_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.marketplace_listings_id_seq OWNER TO postgres;

--
-- TOC entry 7774 (class 0 OID 0)
-- Dependencies: 450
-- Name: marketplace_listings_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.marketplace_listings_id_seq OWNED BY public.marketplace_listings.id;


--
-- TOC entry 402 (class 1259 OID 19872)
-- Name: meditation_day_completions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.meditation_day_completions (
    id integer NOT NULL,
    progress_id integer NOT NULL,
    level integer NOT NULL,
    day_number integer NOT NULL,
    session_type character varying(20),
    completed_at timestamp with time zone DEFAULT now(),
    total_duration_minutes integer,
    notes text
);


ALTER TABLE public.meditation_day_completions OWNER TO postgres;

--
-- TOC entry 401 (class 1259 OID 19871)
-- Name: meditation_day_completions_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.meditation_day_completions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.meditation_day_completions_id_seq OWNER TO postgres;

--
-- TOC entry 7775 (class 0 OID 0)
-- Dependencies: 401
-- Name: meditation_day_completions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.meditation_day_completions_id_seq OWNED BY public.meditation_day_completions.id;


--
-- TOC entry 587 (class 1259 OID 22133)
-- Name: meditation_experiences; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.meditation_experiences (
    id integer NOT NULL,
    user_id integer NOT NULL,
    day_completion_id integer NOT NULL,
    pre_stress_level integer NOT NULL,
    pre_anxiety_level integer NOT NULL,
    pre_focus_level integer NOT NULL,
    pre_emotional_state character varying(50) NOT NULL,
    pre_concerns text,
    pre_recorded_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    post_stress_level integer,
    post_anxiety_level integer,
    post_focus_level integer,
    post_emotional_state character varying(50),
    post_insights text,
    post_effectiveness_rating integer,
    post_recorded_at timestamp with time zone,
    stress_improvement integer,
    anxiety_improvement integer,
    focus_improvement integer,
    overall_improvement_score double precision,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp with time zone
);


ALTER TABLE public.meditation_experiences OWNER TO postgres;

--
-- TOC entry 586 (class 1259 OID 22132)
-- Name: meditation_experiences_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.meditation_experiences_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.meditation_experiences_id_seq OWNER TO postgres;

--
-- TOC entry 7776 (class 0 OID 0)
-- Dependencies: 586
-- Name: meditation_experiences_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.meditation_experiences_id_seq OWNED BY public.meditation_experiences.id;


--
-- TOC entry 589 (class 1259 OID 22157)
-- Name: meditation_level_purchases; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.meditation_level_purchases (
    id integer NOT NULL,
    user_id integer NOT NULL,
    level integer NOT NULL,
    amount_paid double precision NOT NULL,
    currency character varying(3) DEFAULT 'INR'::character varying,
    discount_applied double precision DEFAULT '0'::double precision,
    payment_gateway character varying(50) NOT NULL,
    payment_id character varying(255) NOT NULL,
    order_id character varying(255),
    payment_status character varying(50) DEFAULT 'pending'::character varying,
    purchased_at timestamp with time zone DEFAULT now(),
    payment_method character varying(50),
    receipt_url character varying(500),
    notes text,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone,
    cashfree_signature character varying(500)
);


ALTER TABLE public.meditation_level_purchases OWNER TO postgres;

--
-- TOC entry 588 (class 1259 OID 22156)
-- Name: meditation_level_purchases_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.meditation_level_purchases_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.meditation_level_purchases_id_seq OWNER TO postgres;

--
-- TOC entry 7777 (class 0 OID 0)
-- Dependencies: 588
-- Name: meditation_level_purchases_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.meditation_level_purchases_id_seq OWNED BY public.meditation_level_purchases.id;


--
-- TOC entry 482 (class 1259 OID 20799)
-- Name: meditation_process_completions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.meditation_process_completions (
    id integer NOT NULL,
    day_completion_id integer NOT NULL,
    process_id integer NOT NULL,
    completed_at timestamp with time zone DEFAULT now(),
    watched_video boolean
);


ALTER TABLE public.meditation_process_completions OWNER TO postgres;

--
-- TOC entry 481 (class 1259 OID 20798)
-- Name: meditation_process_completions_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.meditation_process_completions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.meditation_process_completions_id_seq OWNER TO postgres;

--
-- TOC entry 7778 (class 0 OID 0)
-- Dependencies: 481
-- Name: meditation_process_completions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.meditation_process_completions_id_seq OWNED BY public.meditation_process_completions.id;


--
-- TOC entry 224 (class 1259 OID 18356)
-- Name: meditation_processes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.meditation_processes (
    id integer NOT NULL,
    name character varying(200) NOT NULL,
    description text,
    "order" integer,
    video_url character varying(500),
    video_filename character varying(255),
    duration_minutes integer,
    level integer,
    is_active boolean,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone
);


ALTER TABLE public.meditation_processes OWNER TO postgres;

--
-- TOC entry 223 (class 1259 OID 18355)
-- Name: meditation_processes_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.meditation_processes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.meditation_processes_id_seq OWNER TO postgres;

--
-- TOC entry 7779 (class 0 OID 0)
-- Dependencies: 223
-- Name: meditation_processes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.meditation_processes_id_seq OWNED BY public.meditation_processes.id;


--
-- TOC entry 283 (class 1259 OID 18780)
-- Name: meditation_progress; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.meditation_progress (
    id integer NOT NULL,
    user_id integer NOT NULL,
    current_level integer,
    current_day integer,
    total_streak integer,
    preferred_session character varying(20),
    last_practice_date timestamp with time zone,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone,
    unlocked_levels integer
);


ALTER TABLE public.meditation_progress OWNER TO postgres;

--
-- TOC entry 282 (class 1259 OID 18779)
-- Name: meditation_progress_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.meditation_progress_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.meditation_progress_id_seq OWNER TO postgres;

--
-- TOC entry 7780 (class 0 OID 0)
-- Dependencies: 282
-- Name: meditation_progress_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.meditation_progress_id_seq OWNED BY public.meditation_progress.id;


--
-- TOC entry 285 (class 1259 OID 18794)
-- Name: meditation_sessions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.meditation_sessions (
    id integer NOT NULL,
    user_id integer,
    minutes_listened integer,
    created_at timestamp with time zone DEFAULT now()
);


ALTER TABLE public.meditation_sessions OWNER TO postgres;

--
-- TOC entry 284 (class 1259 OID 18793)
-- Name: meditation_sessions_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.meditation_sessions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.meditation_sessions_id_seq OWNER TO postgres;

--
-- TOC entry 7781 (class 0 OID 0)
-- Dependencies: 284
-- Name: meditation_sessions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.meditation_sessions_id_seq OWNED BY public.meditation_sessions.id;


--
-- TOC entry 553 (class 1259 OID 21664)
-- Name: message_logs; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.message_logs (
    id integer NOT NULL,
    lead_id integer,
    workflow_execution_id integer,
    template_id integer,
    channel character varying NOT NULL,
    recipient character varying NOT NULL,
    subject character varying,
    body text,
    status character varying,
    sent_at timestamp with time zone,
    delivered_at timestamp with time zone,
    opened_at timestamp with time zone,
    clicked_at timestamp with time zone,
    replied_at timestamp with time zone,
    provider_message_id character varying,
    provider_response json,
    error_message text,
    created_at timestamp with time zone DEFAULT now()
);


ALTER TABLE public.message_logs OWNER TO postgres;

--
-- TOC entry 552 (class 1259 OID 21663)
-- Name: message_logs_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.message_logs_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.message_logs_id_seq OWNER TO postgres;

--
-- TOC entry 7782 (class 0 OID 0)
-- Dependencies: 552
-- Name: message_logs_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.message_logs_id_seq OWNED BY public.message_logs.id;


--
-- TOC entry 620 (class 1259 OID 22403)
-- Name: midnight_test_questions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.midnight_test_questions (
    id integer NOT NULL,
    topic_id integer NOT NULL,
    topic_type character varying(50),
    question_text text NOT NULL,
    question_type character varying(30),
    correct_answer text,
    key_concepts text,
    difficulty double precision,
    is_active boolean,
    created_at timestamp with time zone DEFAULT now()
);


ALTER TABLE public.midnight_test_questions OWNER TO postgres;

--
-- TOC entry 619 (class 1259 OID 22402)
-- Name: midnight_test_questions_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.midnight_test_questions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.midnight_test_questions_id_seq OWNER TO postgres;

--
-- TOC entry 7783 (class 0 OID 0)
-- Dependencies: 619
-- Name: midnight_test_questions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.midnight_test_questions_id_seq OWNED BY public.midnight_test_questions.id;


--
-- TOC entry 232 (class 1259 OID 18402)
-- Name: modules; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.modules (
    id integer NOT NULL,
    course_id integer NOT NULL,
    title character varying NOT NULL,
    description text,
    order_index integer,
    quiz_id integer,
    assignment_prompts json,
    duration_minutes integer,
    created_at timestamp without time zone,
    updated_at timestamp without time zone
);


ALTER TABLE public.modules OWNER TO postgres;

--
-- TOC entry 231 (class 1259 OID 18401)
-- Name: modules_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.modules_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.modules_id_seq OWNER TO postgres;

--
-- TOC entry 7784 (class 0 OID 0)
-- Dependencies: 231
-- Name: modules_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.modules_id_seq OWNED BY public.modules.id;


--
-- TOC entry 315 (class 1259 OID 19061)
-- Name: mood_entries; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.mood_entries (
    id integer NOT NULL,
    user_id integer,
    mood character varying,
    note character varying,
    "timestamp" timestamp without time zone
);


ALTER TABLE public.mood_entries OWNER TO postgres;

--
-- TOC entry 314 (class 1259 OID 19060)
-- Name: mood_entries_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.mood_entries_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.mood_entries_id_seq OWNER TO postgres;

--
-- TOC entry 7785 (class 0 OID 0)
-- Dependencies: 314
-- Name: mood_entries_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.mood_entries_id_seq OWNED BY public.mood_entries.id;


--
-- TOC entry 329 (class 1259 OID 19173)
-- Name: notifications; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.notifications (
    id integer NOT NULL,
    user_id integer NOT NULL,
    type public.notificationtype NOT NULL,
    title character varying(200) NOT NULL,
    message text NOT NULL,
    data json,
    action_url character varying(500),
    priority public.notificationpriority,
    is_read boolean,
    read_at timestamp without time zone,
    delivered_realtime boolean,
    delivered_push boolean,
    delivered_email boolean,
    created_at timestamp without time zone
);


ALTER TABLE public.notifications OWNER TO postgres;

--
-- TOC entry 328 (class 1259 OID 19172)
-- Name: notifications_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.notifications_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.notifications_id_seq OWNER TO postgres;

--
-- TOC entry 7786 (class 0 OID 0)
-- Dependencies: 328
-- Name: notifications_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.notifications_id_seq OWNED BY public.notifications.id;


--
-- TOC entry 565 (class 1259 OID 21811)
-- Name: order_items; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.order_items (
    id integer NOT NULL,
    order_id integer NOT NULL,
    course_id integer,
    bundle_id integer,
    item_name character varying(500) NOT NULL,
    item_description text,
    quantity integer NOT NULL,
    unit_price double precision NOT NULL,
    discount double precision NOT NULL,
    total double precision NOT NULL,
    coupon_code character varying(50),
    created_at timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.order_items OWNER TO postgres;

--
-- TOC entry 564 (class 1259 OID 21810)
-- Name: order_items_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.order_items_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.order_items_id_seq OWNER TO postgres;

--
-- TOC entry 7787 (class 0 OID 0)
-- Dependencies: 564
-- Name: order_items_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.order_items_id_seq OWNED BY public.order_items.id;


--
-- TOC entry 549 (class 1259 OID 21606)
-- Name: orders; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.orders (
    id integer NOT NULL,
    order_number character varying(50) NOT NULL,
    user_id integer,
    guest_email character varying(255),
    cart_id integer,
    status public.orderstatus NOT NULL,
    subtotal double precision NOT NULL,
    discount double precision NOT NULL,
    tax double precision NOT NULL,
    total double precision NOT NULL,
    currency character varying(3) NOT NULL,
    billing_name character varying(255),
    billing_email character varying(255),
    billing_address text,
    payment_id integer,
    customer_notes text,
    admin_notes text,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone,
    completed_at timestamp with time zone,
    cancelled_at timestamp with time zone
);


ALTER TABLE public.orders OWNER TO postgres;

--
-- TOC entry 548 (class 1259 OID 21605)
-- Name: orders_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.orders_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.orders_id_seq OWNER TO postgres;

--
-- TOC entry 7788 (class 0 OID 0)
-- Dependencies: 548
-- Name: orders_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.orders_id_seq OWNED BY public.orders.id;


--
-- TOC entry 260 (class 1259 OID 18573)
-- Name: organizations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.organizations (
    id integer NOT NULL,
    name character varying(200) NOT NULL,
    domain character varying(255) NOT NULL,
    slug character varying(100) NOT NULL,
    sso_enabled boolean,
    sso_provider character varying(50),
    sso_enforced boolean,
    is_active boolean,
    max_users integer,
    settings json,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone
);


ALTER TABLE public.organizations OWNER TO postgres;

--
-- TOC entry 259 (class 1259 OID 18572)
-- Name: organizations_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.organizations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.organizations_id_seq OWNER TO postgres;

--
-- TOC entry 7789 (class 0 OID 0)
-- Dependencies: 259
-- Name: organizations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.organizations_id_seq OWNED BY public.organizations.id;


--
-- TOC entry 421 (class 1259 OID 20076)
-- Name: path_courses; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.path_courses (
    id integer NOT NULL,
    path_id integer NOT NULL,
    course_id integer NOT NULL,
    order_index integer,
    prerequisite_course_id integer,
    is_required boolean,
    created_at timestamp without time zone
);


ALTER TABLE public.path_courses OWNER TO postgres;

--
-- TOC entry 420 (class 1259 OID 20075)
-- Name: path_courses_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.path_courses_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.path_courses_id_seq OWNER TO postgres;

--
-- TOC entry 7790 (class 0 OID 0)
-- Dependencies: 420
-- Name: path_courses_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.path_courses_id_seq OWNED BY public.path_courses.id;


--
-- TOC entry 535 (class 1259 OID 21446)
-- Name: path_enrollments; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.path_enrollments (
    id integer NOT NULL,
    path_id integer NOT NULL,
    student_id integer NOT NULL,
    current_course_id integer,
    completed_courses integer,
    total_courses integer,
    progress_percentage double precision,
    is_completed boolean,
    completed_at timestamp without time zone,
    has_paid boolean,
    payment_id integer,
    enrolled_at timestamp without time zone,
    last_accessed_at timestamp without time zone
);


ALTER TABLE public.path_enrollments OWNER TO postgres;

--
-- TOC entry 534 (class 1259 OID 21445)
-- Name: path_enrollments_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.path_enrollments_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.path_enrollments_id_seq OWNER TO postgres;

--
-- TOC entry 7791 (class 0 OID 0)
-- Dependencies: 534
-- Name: path_enrollments_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.path_enrollments_id_seq OWNED BY public.path_enrollments.id;


--
-- TOC entry 375 (class 1259 OID 19606)
-- Name: payment_methods; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.payment_methods (
    id integer NOT NULL,
    user_id integer NOT NULL,
    gateway public.paymentgateway NOT NULL,
    method_type public.paymentmethodtype NOT NULL,
    gateway_token character varying(255) NOT NULL,
    gateway_customer_id character varying(255),
    display_name character varying(100),
    last_four character varying(4),
    card_brand character varying(20),
    expiry_month integer,
    expiry_year integer,
    paypal_email character varying(255),
    is_default boolean NOT NULL,
    is_active boolean NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone,
    last_used_at timestamp with time zone
);


ALTER TABLE public.payment_methods OWNER TO postgres;

--
-- TOC entry 374 (class 1259 OID 19605)
-- Name: payment_methods_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.payment_methods_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.payment_methods_id_seq OWNER TO postgres;

--
-- TOC entry 7792 (class 0 OID 0)
-- Dependencies: 374
-- Name: payment_methods_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.payment_methods_id_seq OWNED BY public.payment_methods.id;


--
-- TOC entry 531 (class 1259 OID 21396)
-- Name: peer_review_assignments; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.peer_review_assignments (
    id integer NOT NULL,
    assignment_id integer NOT NULL,
    reviewer_id integer NOT NULL,
    reviewee_id integer NOT NULL,
    submission_id integer NOT NULL,
    status character varying,
    due_date timestamp without time zone,
    created_at timestamp without time zone DEFAULT now(),
    updated_at timestamp without time zone
);


ALTER TABLE public.peer_review_assignments OWNER TO postgres;

--
-- TOC entry 530 (class 1259 OID 21395)
-- Name: peer_review_assignments_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.peer_review_assignments_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.peer_review_assignments_id_seq OWNER TO postgres;

--
-- TOC entry 7793 (class 0 OID 0)
-- Dependencies: 530
-- Name: peer_review_assignments_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.peer_review_assignments_id_seq OWNED BY public.peer_review_assignments.id;


--
-- TOC entry 559 (class 1259 OID 21748)
-- Name: peer_reviews; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.peer_reviews (
    id integer NOT NULL,
    peer_review_assignment_id integer NOT NULL,
    content text NOT NULL,
    score double precision,
    created_at timestamp without time zone DEFAULT now(),
    updated_at timestamp without time zone
);


ALTER TABLE public.peer_reviews OWNER TO postgres;

--
-- TOC entry 558 (class 1259 OID 21747)
-- Name: peer_reviews_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.peer_reviews_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.peer_reviews_id_seq OWNER TO postgres;

--
-- TOC entry 7794 (class 0 OID 0)
-- Dependencies: 558
-- Name: peer_reviews_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.peer_reviews_id_seq OWNED BY public.peer_reviews.id;


--
-- TOC entry 220 (class 1259 OID 18331)
-- Name: permissions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.permissions (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    display_name character varying(200) NOT NULL,
    description character varying(500),
    resource character varying(50) NOT NULL,
    action character varying(50) NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.permissions OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 18330)
-- Name: permissions_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.permissions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.permissions_id_seq OWNER TO postgres;

--
-- TOC entry 7795 (class 0 OID 0)
-- Dependencies: 219
-- Name: permissions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.permissions_id_seq OWNED BY public.permissions.id;


--
-- TOC entry 551 (class 1259 OID 21636)
-- Name: plagiarism_checks; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.plagiarism_checks (
    id integer NOT NULL,
    submission_id integer NOT NULL,
    assignment_id integer NOT NULL,
    student_id integer NOT NULL,
    similarity_percentage double precision NOT NULL,
    originality_score double precision NOT NULL,
    matches json,
    is_plagiarized boolean,
    review_required boolean,
    reviewed_by_instructor boolean,
    instructor_notes text,
    check_method character varying(50),
    checked_at timestamp with time zone DEFAULT now(),
    created_at timestamp with time zone DEFAULT now()
);


ALTER TABLE public.plagiarism_checks OWNER TO postgres;

--
-- TOC entry 550 (class 1259 OID 21635)
-- Name: plagiarism_checks_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.plagiarism_checks_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.plagiarism_checks_id_seq OWNER TO postgres;

--
-- TOC entry 7796 (class 0 OID 0)
-- Dependencies: 550
-- Name: plagiarism_checks_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.plagiarism_checks_id_seq OWNED BY public.plagiarism_checks.id;


--
-- TOC entry 242 (class 1259 OID 18459)
-- Name: platform_analytics; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.platform_analytics (
    id integer NOT NULL,
    date date NOT NULL,
    total_users integer,
    active_users integer,
    new_users integer,
    dau integer,
    mau integer,
    wau integer,
    total_students integer,
    total_instructors integer,
    new_students integer,
    new_instructors integer,
    total_courses integer,
    active_courses integer,
    published_courses integer,
    new_courses integer,
    total_enrollments integer,
    enrollments_today integer,
    active_enrollments integer,
    completions_today integer,
    total_completions integer,
    revenue_today double precision,
    revenue_mtd double precision,
    total_revenue double precision,
    mrr double precision,
    arr double precision,
    quiz_attempts integer,
    assignments_submitted integer,
    discussion_posts integer,
    live_class_attendees integer,
    certificates_issued integer,
    total_lessons integer,
    total_quizzes integer,
    total_assignments integer,
    video_hours_watched double precision,
    avg_response_time double precision,
    error_rate double precision,
    uptime double precision,
    avg_course_rating double precision,
    total_reviews integer,
    new_reviews integer,
    user_growth_rate double precision,
    revenue_growth_rate double precision,
    enrollment_growth_rate double precision,
    created_at timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.platform_analytics OWNER TO postgres;

--
-- TOC entry 241 (class 1259 OID 18458)
-- Name: platform_analytics_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.platform_analytics_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.platform_analytics_id_seq OWNER TO postgres;

--
-- TOC entry 7797 (class 0 OID 0)
-- Dependencies: 241
-- Name: platform_analytics_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.platform_analytics_id_seq OWNED BY public.platform_analytics.id;


--
-- TOC entry 626 (class 1259 OID 22462)
-- Name: polity_chapter_tasks; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.polity_chapter_tasks (
    id integer NOT NULL,
    chapter_number integer NOT NULL,
    chapter_title character varying NOT NULL,
    research_done boolean,
    report_generated boolean,
    report_saved boolean,
    video_generated boolean,
    podcast_generated boolean,
    status character varying,
    updated_at timestamp with time zone DEFAULT now()
);


ALTER TABLE public.polity_chapter_tasks OWNER TO postgres;

--
-- TOC entry 625 (class 1259 OID 22461)
-- Name: polity_chapter_tasks_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.polity_chapter_tasks_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.polity_chapter_tasks_id_seq OWNER TO postgres;

--
-- TOC entry 7798 (class 0 OID 0)
-- Dependencies: 625
-- Name: polity_chapter_tasks_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.polity_chapter_tasks_id_seq OWNED BY public.polity_chapter_tasks.id;


--
-- TOC entry 557 (class 1259 OID 21729)
-- Name: post_votes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.post_votes (
    id integer NOT NULL,
    post_id integer NOT NULL,
    user_id integer NOT NULL,
    vote_type character varying(10) NOT NULL,
    created_at timestamp with time zone DEFAULT now()
);


ALTER TABLE public.post_votes OWNER TO postgres;

--
-- TOC entry 556 (class 1259 OID 21728)
-- Name: post_votes_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.post_votes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.post_votes_id_seq OWNER TO postgres;

--
-- TOC entry 7799 (class 0 OID 0)
-- Dependencies: 556
-- Name: post_votes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.post_votes_id_seq OWNED BY public.post_votes.id;


--
-- TOC entry 541 (class 1259 OID 21510)
-- Name: project_milestones; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.project_milestones (
    id integer NOT NULL,
    project_id integer NOT NULL,
    title character varying(200) NOT NULL,
    description text,
    due_date timestamp with time zone,
    is_completed boolean,
    created_at timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.project_milestones OWNER TO postgres;

--
-- TOC entry 540 (class 1259 OID 21509)
-- Name: project_milestones_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.project_milestones_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.project_milestones_id_seq OWNER TO postgres;

--
-- TOC entry 7800 (class 0 OID 0)
-- Dependencies: 540
-- Name: project_milestones_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.project_milestones_id_seq OWNED BY public.project_milestones.id;


--
-- TOC entry 563 (class 1259 OID 21785)
-- Name: project_submissions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.project_submissions (
    id integer NOT NULL,
    project_id integer NOT NULL,
    team_id integer NOT NULL,
    file_url character varying,
    description text,
    submitted_at timestamp with time zone DEFAULT now() NOT NULL,
    grade double precision,
    feedback text,
    graded_by integer,
    graded_at timestamp with time zone
);


ALTER TABLE public.project_submissions OWNER TO postgres;

--
-- TOC entry 562 (class 1259 OID 21784)
-- Name: project_submissions_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.project_submissions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.project_submissions_id_seq OWNER TO postgres;

--
-- TOC entry 7801 (class 0 OID 0)
-- Dependencies: 562
-- Name: project_submissions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.project_submissions_id_seq OWNED BY public.project_submissions.id;


--
-- TOC entry 561 (class 1259 OID 21766)
-- Name: project_team_members; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.project_team_members (
    id integer NOT NULL,
    team_id integer NOT NULL,
    user_id integer NOT NULL,
    role public.projectrole NOT NULL,
    joined_at timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.project_team_members OWNER TO postgres;

--
-- TOC entry 560 (class 1259 OID 21765)
-- Name: project_team_members_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.project_team_members_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.project_team_members_id_seq OWNER TO postgres;

--
-- TOC entry 7802 (class 0 OID 0)
-- Dependencies: 560
-- Name: project_team_members_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.project_team_members_id_seq OWNED BY public.project_team_members.id;


--
-- TOC entry 539 (class 1259 OID 21496)
-- Name: project_teams; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.project_teams (
    id integer NOT NULL,
    project_id integer NOT NULL,
    name character varying(100),
    created_at timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.project_teams OWNER TO postgres;

--
-- TOC entry 538 (class 1259 OID 21495)
-- Name: project_teams_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.project_teams_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.project_teams_id_seq OWNER TO postgres;

--
-- TOC entry 7803 (class 0 OID 0)
-- Dependencies: 538
-- Name: project_teams_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.project_teams_id_seq OWNED BY public.project_teams.id;


--
-- TOC entry 495 (class 1259 OID 20972)
-- Name: question_bank_questions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.question_bank_questions (
    question_bank_id integer NOT NULL,
    question_id integer NOT NULL
);


ALTER TABLE public.question_bank_questions OWNER TO postgres;

--
-- TOC entry 417 (class 1259 OID 20031)
-- Name: question_banks; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.question_banks (
    id integer NOT NULL,
    course_id integer NOT NULL,
    instructor_id integer NOT NULL,
    title character varying(200) NOT NULL,
    description text,
    category character varying(100),
    difficulty_level character varying(20),
    is_active boolean,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone
);


ALTER TABLE public.question_banks OWNER TO postgres;

--
-- TOC entry 416 (class 1259 OID 20030)
-- Name: question_banks_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.question_banks_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.question_banks_id_seq OWNER TO postgres;

--
-- TOC entry 7804 (class 0 OID 0)
-- Dependencies: 416
-- Name: question_banks_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.question_banks_id_seq OWNED BY public.question_banks.id;


--
-- TOC entry 307 (class 1259 OID 18996)
-- Name: question_options; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.question_options (
    id integer NOT NULL,
    question_id integer,
    text text NOT NULL,
    is_correct boolean,
    order_index integer,
    match_text text
);


ALTER TABLE public.question_options OWNER TO postgres;

--
-- TOC entry 306 (class 1259 OID 18995)
-- Name: question_options_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.question_options_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.question_options_id_seq OWNER TO postgres;

--
-- TOC entry 7805 (class 0 OID 0)
-- Dependencies: 306
-- Name: question_options_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.question_options_id_seq OWNED BY public.question_options.id;


--
-- TOC entry 274 (class 1259 OID 18696)
-- Name: questions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.questions (
    id integer NOT NULL,
    quiz_id integer,
    text text NOT NULL,
    type character varying NOT NULL,
    points integer,
    order_index integer,
    explanation text
);


ALTER TABLE public.questions OWNER TO postgres;

--
-- TOC entry 273 (class 1259 OID 18695)
-- Name: questions_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.questions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.questions_id_seq OWNER TO postgres;

--
-- TOC entry 7806 (class 0 OID 0)
-- Dependencies: 273
-- Name: questions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.questions_id_seq OWNED BY public.questions.id;


--
-- TOC entry 430 (class 1259 OID 20192)
-- Name: quiz_attempt_analytics; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.quiz_attempt_analytics (
    id integer NOT NULL,
    attempt_id integer,
    time_spent_seconds integer,
    average_time_per_question double precision,
    questions_answered integer,
    questions_correct integer,
    questions_incorrect integer,
    questions_skipped integer,
    questions_reviewed integer,
    difficulty_rating double precision,
    confidence_score double precision,
    times_backtracked integer,
    hints_used integer,
    created_at timestamp with time zone DEFAULT now()
);


ALTER TABLE public.quiz_attempt_analytics OWNER TO postgres;

--
-- TOC entry 429 (class 1259 OID 20191)
-- Name: quiz_attempt_analytics_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.quiz_attempt_analytics_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.quiz_attempt_analytics_id_seq OWNER TO postgres;

--
-- TOC entry 7807 (class 0 OID 0)
-- Dependencies: 429
-- Name: quiz_attempt_analytics_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.quiz_attempt_analytics_id_seq OWNED BY public.quiz_attempt_analytics.id;


--
-- TOC entry 309 (class 1259 OID 19011)
-- Name: quiz_attempts; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.quiz_attempts (
    id integer NOT NULL,
    quiz_id integer,
    user_id integer,
    score double precision,
    passed boolean,
    started_at timestamp with time zone DEFAULT now(),
    completed_at timestamp with time zone
);


ALTER TABLE public.quiz_attempts OWNER TO postgres;

--
-- TOC entry 308 (class 1259 OID 19010)
-- Name: quiz_attempts_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.quiz_attempts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.quiz_attempts_id_seq OWNER TO postgres;

--
-- TOC entry 7808 (class 0 OID 0)
-- Dependencies: 308
-- Name: quiz_attempts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.quiz_attempts_id_seq OWNED BY public.quiz_attempts.id;


--
-- TOC entry 311 (class 1259 OID 19030)
-- Name: quiz_feedback; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.quiz_feedback (
    id integer NOT NULL,
    question_id integer NOT NULL,
    feedback_text text,
    feedback_for_correct text,
    feedback_for_incorrect text,
    hint_text text,
    explanation_url character varying,
    media_url character varying
);


ALTER TABLE public.quiz_feedback OWNER TO postgres;

--
-- TOC entry 310 (class 1259 OID 19029)
-- Name: quiz_feedback_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.quiz_feedback_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.quiz_feedback_id_seq OWNER TO postgres;

--
-- TOC entry 7809 (class 0 OID 0)
-- Dependencies: 310
-- Name: quiz_feedback_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.quiz_feedback_id_seq OWNED BY public.quiz_feedback.id;


--
-- TOC entry 497 (class 1259 OID 20988)
-- Name: quiz_question_pools; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.quiz_question_pools (
    id integer NOT NULL,
    quiz_id integer NOT NULL,
    question_bank_id integer NOT NULL,
    num_questions integer NOT NULL,
    difficulty_filter character varying(20),
    created_at timestamp with time zone DEFAULT now()
);


ALTER TABLE public.quiz_question_pools OWNER TO postgres;

--
-- TOC entry 496 (class 1259 OID 20987)
-- Name: quiz_question_pools_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.quiz_question_pools_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.quiz_question_pools_id_seq OWNER TO postgres;

--
-- TOC entry 7810 (class 0 OID 0)
-- Dependencies: 496
-- Name: quiz_question_pools_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.quiz_question_pools_id_seq OWNED BY public.quiz_question_pools.id;


--
-- TOC entry 610 (class 1259 OID 22329)
-- Name: quiz_results; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.quiz_results (
    id integer NOT NULL,
    student_email character varying NOT NULL,
    segment_key character varying NOT NULL,
    score integer NOT NULL,
    total_questions integer NOT NULL,
    percentage double precision NOT NULL,
    is_weak_spot boolean,
    is_reviewed boolean,
    created_at timestamp without time zone
);


ALTER TABLE public.quiz_results OWNER TO postgres;

--
-- TOC entry 609 (class 1259 OID 22328)
-- Name: quiz_results_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.quiz_results_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.quiz_results_id_seq OWNER TO postgres;

--
-- TOC entry 7811 (class 0 OID 0)
-- Dependencies: 609
-- Name: quiz_results_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.quiz_results_id_seq OWNED BY public.quiz_results.id;


--
-- TOC entry 236 (class 1259 OID 18427)
-- Name: quizzes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.quizzes (
    id integer NOT NULL,
    title character varying,
    description text,
    course_id integer,
    lesson_id integer,
    time_limit_minutes integer,
    passing_score double precision,
    max_attempts integer,
    is_published boolean,
    shuffle_questions boolean,
    show_correct_answers boolean,
    instant_feedback boolean,
    show_score_immediately boolean,
    randomize_options boolean,
    allow_review_answers boolean,
    show_hints boolean,
    require_all_questions boolean,
    allow_backtrack boolean,
    enable_ai_grading boolean,
    ai_grading_model character varying,
    manual_review_threshold double precision,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone
);


ALTER TABLE public.quizzes OWNER TO postgres;

--
-- TOC entry 235 (class 1259 OID 18426)
-- Name: quizzes_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.quizzes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.quizzes_id_seq OWNER TO postgres;

--
-- TOC entry 7812 (class 0 OID 0)
-- Dependencies: 235
-- Name: quizzes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.quizzes_id_seq OWNED BY public.quizzes.id;


--
-- TOC entry 572 (class 1259 OID 21966)
-- Name: ras_plans; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.ras_plans (
    id integer NOT NULL,
    email character varying(255) NOT NULL,
    date date NOT NULL,
    day_number integer NOT NULL,
    slots jsonb NOT NULL,
    status character varying(50) DEFAULT 'active'::character varying,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.ras_plans OWNER TO postgres;

--
-- TOC entry 571 (class 1259 OID 21965)
-- Name: ras_plans_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.ras_plans_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.ras_plans_id_seq OWNER TO postgres;

--
-- TOC entry 7813 (class 0 OID 0)
-- Dependencies: 571
-- Name: ras_plans_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.ras_plans_id_seq OWNED BY public.ras_plans.id;


--
-- TOC entry 574 (class 1259 OID 21991)
-- Name: ras_recordings; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.ras_recordings (
    id integer NOT NULL,
    email character varying(255) NOT NULL,
    topic_id character varying(100) NOT NULL,
    recording_url character varying(500),
    explanation_text text,
    recall_score integer,
    duration integer,
    feedback text,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.ras_recordings OWNER TO postgres;

--
-- TOC entry 573 (class 1259 OID 21990)
-- Name: ras_recordings_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.ras_recordings_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.ras_recordings_id_seq OWNER TO postgres;

--
-- TOC entry 7814 (class 0 OID 0)
-- Dependencies: 573
-- Name: ras_recordings_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.ras_recordings_id_seq OWNED BY public.ras_recordings.id;


--
-- TOC entry 577 (class 1259 OID 22011)
-- Name: ras_topic_progress; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.ras_topic_progress (
    id integer NOT NULL,
    user_id integer NOT NULL,
    topic_id character varying NOT NULL,
    completed boolean,
    hours_spent double precision,
    completed_at timestamp without time zone,
    last_updated timestamp without time zone,
    summary_text character varying,
    mastery_level integer
);


ALTER TABLE public.ras_topic_progress OWNER TO postgres;

--
-- TOC entry 576 (class 1259 OID 22010)
-- Name: ras_topic_progress_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.ras_topic_progress_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.ras_topic_progress_id_seq OWNER TO postgres;

--
-- TOC entry 7815 (class 0 OID 0)
-- Dependencies: 576
-- Name: ras_topic_progress_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.ras_topic_progress_id_seq OWNED BY public.ras_topic_progress.id;


--
-- TOC entry 543 (class 1259 OID 21526)
-- Name: realtime_chat_messages; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.realtime_chat_messages (
    id integer NOT NULL,
    content text NOT NULL,
    message_type public.messagetype,
    sender_id integer NOT NULL,
    study_room_id integer,
    study_group_id integer,
    learning_group_id integer,
    discussion_thread_id integer,
    attachment_url character varying(500),
    attachment_name character varying(200),
    attachment_size integer,
    is_edited boolean,
    edited_at timestamp without time zone,
    is_deleted boolean,
    deleted_at timestamp without time zone,
    reactions text,
    parent_id integer,
    read_by text,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone
);


ALTER TABLE public.realtime_chat_messages OWNER TO postgres;

--
-- TOC entry 542 (class 1259 OID 21525)
-- Name: realtime_chat_messages_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.realtime_chat_messages_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.realtime_chat_messages_id_seq OWNER TO postgres;

--
-- TOC entry 7816 (class 0 OID 0)
-- Dependencies: 542
-- Name: realtime_chat_messages_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.realtime_chat_messages_id_seq OWNED BY public.realtime_chat_messages.id;


--
-- TOC entry 240 (class 1259 OID 18450)
-- Name: realtime_user_presence; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.realtime_user_presence (
    id integer NOT NULL,
    user_id integer NOT NULL,
    status character varying(20),
    status_message character varying(200),
    last_seen timestamp without time zone,
    last_activity timestamp without time zone,
    current_location character varying(100),
    created_at timestamp without time zone,
    updated_at timestamp without time zone
);


ALTER TABLE public.realtime_user_presence OWNER TO postgres;

--
-- TOC entry 239 (class 1259 OID 18449)
-- Name: realtime_user_presence_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.realtime_user_presence_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.realtime_user_presence_id_seq OWNER TO postgres;

--
-- TOC entry 7817 (class 0 OID 0)
-- Dependencies: 239
-- Name: realtime_user_presence_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.realtime_user_presence_id_seq OWNED BY public.realtime_user_presence.id;


--
-- TOC entry 638 (class 1259 OID 22575)
-- Name: retention_reviews; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.retention_reviews (
    id integer NOT NULL,
    topic_log_id integer NOT NULL,
    user_id integer NOT NULL,
    review_type character varying(30),
    grade integer,
    score double precision,
    stability_before double precision,
    stability_after double precision,
    retrievability_at_review double precision,
    user_input text,
    ai_feedback text,
    reviewed_at timestamp with time zone DEFAULT now()
);


ALTER TABLE public.retention_reviews OWNER TO postgres;

--
-- TOC entry 637 (class 1259 OID 22574)
-- Name: retention_reviews_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.retention_reviews_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.retention_reviews_id_seq OWNER TO postgres;

--
-- TOC entry 7818 (class 0 OID 0)
-- Dependencies: 637
-- Name: retention_reviews_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.retention_reviews_id_seq OWNED BY public.retention_reviews.id;


--
-- TOC entry 449 (class 1259 OID 20395)
-- Name: revenue_shares; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.revenue_shares (
    id integer NOT NULL,
    course_id integer NOT NULL,
    instructor_id integer NOT NULL,
    platform_fee_percentage numeric(5,2) NOT NULL,
    instructor_percentage numeric(5,2) NOT NULL,
    total_revenue numeric(10,2) NOT NULL,
    platform_earnings numeric(10,2) NOT NULL,
    instructor_earnings numeric(10,2) NOT NULL,
    pending_payout numeric(10,2) NOT NULL,
    total_enrollments integer,
    last_sale_date timestamp with time zone,
    last_payout_date timestamp with time zone,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone
);


ALTER TABLE public.revenue_shares OWNER TO postgres;

--
-- TOC entry 448 (class 1259 OID 20394)
-- Name: revenue_shares_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.revenue_shares_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.revenue_shares_id_seq OWNER TO postgres;

--
-- TOC entry 7819 (class 0 OID 0)
-- Dependencies: 448
-- Name: revenue_shares_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.revenue_shares_id_seq OWNED BY public.revenue_shares.id;


--
-- TOC entry 453 (class 1259 OID 20433)
-- Name: revenue_transactions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.revenue_transactions (
    id integer NOT NULL,
    course_id integer NOT NULL,
    instructor_id integer NOT NULL,
    student_id integer NOT NULL,
    transaction_type character varying(20) NOT NULL,
    total_amount numeric(10,2) NOT NULL,
    platform_fee numeric(10,2) NOT NULL,
    instructor_earnings numeric(10,2) NOT NULL,
    payment_id character varying(100),
    stripe_payment_intent character varying(100),
    is_refunded boolean,
    refunded_at timestamp with time zone,
    refund_amount numeric(10,2),
    coupon_code character varying(50),
    discount_amount numeric(10,2),
    affiliate_id integer,
    affiliate_commission numeric(10,2),
    created_at timestamp with time zone DEFAULT now()
);


ALTER TABLE public.revenue_transactions OWNER TO postgres;

--
-- TOC entry 452 (class 1259 OID 20432)
-- Name: revenue_transactions_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.revenue_transactions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.revenue_transactions_id_seq OWNER TO postgres;

--
-- TOC entry 7820 (class 0 OID 0)
-- Dependencies: 452
-- Name: revenue_transactions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.revenue_transactions_id_seq OWNED BY public.revenue_transactions.id;


--
-- TOC entry 484 (class 1259 OID 20818)
-- Name: review_helpful; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.review_helpful (
    id integer NOT NULL,
    review_id integer NOT NULL,
    user_id integer NOT NULL,
    created_at timestamp without time zone
);


ALTER TABLE public.review_helpful OWNER TO postgres;

--
-- TOC entry 483 (class 1259 OID 20817)
-- Name: review_helpful_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.review_helpful_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.review_helpful_id_seq OWNER TO postgres;

--
-- TOC entry 7821 (class 0 OID 0)
-- Dependencies: 483
-- Name: review_helpful_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.review_helpful_id_seq OWNED BY public.review_helpful.id;


--
-- TOC entry 640 (class 1259 OID 22596)
-- Name: revision_cycles; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.revision_cycles (
    id integer NOT NULL,
    user_id integer NOT NULL,
    topic_id integer NOT NULL,
    cycle_type character varying(50),
    duration_minutes integer,
    started_at timestamp with time zone,
    completed_at timestamp with time zone,
    recall_score double precision,
    mcq_score double precision,
    total_score double precision,
    verbal_transcript text,
    ai_feedback text,
    user_topic_log_id integer
);


ALTER TABLE public.revision_cycles OWNER TO postgres;

--
-- TOC entry 639 (class 1259 OID 22595)
-- Name: revision_cycles_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.revision_cycles_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.revision_cycles_id_seq OWNER TO postgres;

--
-- TOC entry 7822 (class 0 OID 0)
-- Dependencies: 639
-- Name: revision_cycles_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.revision_cycles_id_seq OWNED BY public.revision_cycles.id;


--
-- TOC entry 226 (class 1259 OID 18367)
-- Name: rewards; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.rewards (
    id integer NOT NULL,
    name character varying,
    description character varying,
    cost integer,
    type character varying,
    image_url character varying
);


ALTER TABLE public.rewards OWNER TO postgres;

--
-- TOC entry 225 (class 1259 OID 18366)
-- Name: rewards_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.rewards_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.rewards_id_seq OWNER TO postgres;

--
-- TOC entry 7823 (class 0 OID 0)
-- Dependencies: 225
-- Name: rewards_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.rewards_id_seq OWNED BY public.rewards.id;


--
-- TOC entry 268 (class 1259 OID 18632)
-- Name: role_permissions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.role_permissions (
    role_id integer NOT NULL,
    permission_id integer NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.role_permissions OWNER TO postgres;

--
-- TOC entry 218 (class 1259 OID 18318)
-- Name: roles; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.roles (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    display_name character varying(100) NOT NULL,
    description character varying(500),
    is_system_role boolean NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.roles OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 18317)
-- Name: roles_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.roles_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.roles_id_seq OWNER TO postgres;

--
-- TOC entry 7824 (class 0 OID 0)
-- Dependencies: 217
-- Name: roles_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.roles_id_seq OWNED BY public.roles.id;


--
-- TOC entry 319 (class 1259 OID 19091)
-- Name: shadow_mode_sessions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.shadow_mode_sessions (
    id integer NOT NULL,
    user_id integer,
    day_number integer,
    start_time timestamp without time zone,
    end_time timestamp without time zone,
    duration_minutes integer,
    goals_completed integer,
    total_goals integer,
    focus_score double precision,
    notes character varying,
    is_active boolean
);


ALTER TABLE public.shadow_mode_sessions OWNER TO postgres;

--
-- TOC entry 318 (class 1259 OID 19090)
-- Name: shadow_mode_sessions_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.shadow_mode_sessions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.shadow_mode_sessions_id_seq OWNER TO postgres;

--
-- TOC entry 7825 (class 0 OID 0)
-- Dependencies: 318
-- Name: shadow_mode_sessions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.shadow_mode_sessions_id_seq OWNED BY public.shadow_mode_sessions.id;


--
-- TOC entry 335 (class 1259 OID 19224)
-- Name: shopping_carts; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.shopping_carts (
    id integer NOT NULL,
    user_id integer,
    session_id character varying(100),
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone,
    expires_at timestamp with time zone,
    is_active integer
);


ALTER TABLE public.shopping_carts OWNER TO postgres;

--
-- TOC entry 334 (class 1259 OID 19223)
-- Name: shopping_carts_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.shopping_carts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.shopping_carts_id_seq OWNER TO postgres;

--
-- TOC entry 7826 (class 0 OID 0)
-- Dependencies: 334
-- Name: shopping_carts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.shopping_carts_id_seq OWNED BY public.shopping_carts.id;


--
-- TOC entry 349 (class 1259 OID 19362)
-- Name: sso_audit_logs; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.sso_audit_logs (
    id integer NOT NULL,
    organization_id integer,
    user_id integer,
    event_type character varying(50) NOT NULL,
    event_status character varying(20),
    provider_type character varying(20),
    ip_address character varying(50),
    user_agent character varying(500),
    details json,
    error_message text,
    created_at timestamp with time zone DEFAULT now()
);


ALTER TABLE public.sso_audit_logs OWNER TO postgres;

--
-- TOC entry 348 (class 1259 OID 19361)
-- Name: sso_audit_logs_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.sso_audit_logs_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.sso_audit_logs_id_seq OWNER TO postgres;

--
-- TOC entry 7827 (class 0 OID 0)
-- Dependencies: 348
-- Name: sso_audit_logs_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.sso_audit_logs_id_seq OWNED BY public.sso_audit_logs.id;


--
-- TOC entry 276 (class 1259 OID 18711)
-- Name: sso_configs; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.sso_configs (
    id integer NOT NULL,
    organization_id integer NOT NULL,
    provider_type public.ssoprovidertype NOT NULL,
    provider_name character varying(100),
    entity_id character varying(500),
    idp_entity_id character varying(500),
    sso_url character varying(500),
    slo_url character varying(500),
    x509_cert text,
    certificate_expires_at timestamp with time zone,
    client_id character varying(500),
    client_secret character varying(500),
    authorization_endpoint character varying(500),
    token_endpoint character varying(500),
    userinfo_endpoint character varying(500),
    scopes json,
    attribute_mapping json,
    role_mapping json,
    settings json,
    is_active boolean,
    jit_enabled boolean,
    auto_assign_roles boolean,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone,
    last_tested_at timestamp with time zone
);


ALTER TABLE public.sso_configs OWNER TO postgres;

--
-- TOC entry 275 (class 1259 OID 18710)
-- Name: sso_configs_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.sso_configs_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.sso_configs_id_seq OWNER TO postgres;

--
-- TOC entry 7828 (class 0 OID 0)
-- Dependencies: 275
-- Name: sso_configs_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.sso_configs_id_seq OWNED BY public.sso_configs.id;


--
-- TOC entry 347 (class 1259 OID 19337)
-- Name: sso_sessions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.sso_sessions (
    id integer NOT NULL,
    user_id integer NOT NULL,
    organization_id integer NOT NULL,
    session_id character varying(255) NOT NULL,
    provider_session_id character varying(255),
    name_id character varying(500),
    provider_type public.ssoprovidertype NOT NULL,
    login_method character varying(50),
    ip_address character varying(50),
    user_agent character varying(500),
    created_at timestamp with time zone DEFAULT now(),
    expires_at timestamp with time zone NOT NULL,
    last_activity_at timestamp with time zone DEFAULT now(),
    logged_out_at timestamp with time zone
);


ALTER TABLE public.sso_sessions OWNER TO postgres;

--
-- TOC entry 346 (class 1259 OID 19336)
-- Name: sso_sessions_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.sso_sessions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.sso_sessions_id_seq OWNER TO postgres;

--
-- TOC entry 7829 (class 0 OID 0)
-- Dependencies: 346
-- Name: sso_sessions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.sso_sessions_id_seq OWNED BY public.sso_sessions.id;


--
-- TOC entry 522 (class 1259 OID 21260)
-- Name: student_activities; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.student_activities (
    id character varying(36) NOT NULL,
    student_id integer NOT NULL,
    session_id character varying(36),
    activity_type character varying(50) NOT NULL,
    activity_data json,
    "timestamp" timestamp without time zone
);


ALTER TABLE public.student_activities OWNER TO postgres;

--
-- TOC entry 445 (class 1259 OID 20353)
-- Name: student_analytics; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.student_analytics (
    id integer NOT NULL,
    user_id integer NOT NULL,
    course_id integer NOT NULL,
    preferred_time_slot character varying(20),
    avg_session_duration double precision,
    total_time_spent integer,
    sessions_count integer,
    last_active timestamp with time zone,
    video_completion_rate double precision,
    reading_completion_rate double precision,
    quiz_preference double precision,
    discussion_engagement double precision,
    completion_rate double precision,
    avg_quiz_score double precision,
    quiz_attempts integer,
    assignments_completed integer,
    avg_assignment_score double precision,
    discussion_posts integer,
    questions_asked integer,
    peer_reviews_given integer,
    notes_created integer,
    bookmarks_created integer,
    estimated_completion_date date,
    estimated_days_to_complete integer,
    at_risk_flag boolean,
    engagement_score double precision,
    progress_percentile double precision,
    performance_percentile double precision,
    engagement_percentile double precision,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    last_calculated timestamp with time zone
);


ALTER TABLE public.student_analytics OWNER TO postgres;

--
-- TOC entry 444 (class 1259 OID 20352)
-- Name: student_analytics_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.student_analytics_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.student_analytics_id_seq OWNER TO postgres;

--
-- TOC entry 7830 (class 0 OID 0)
-- Dependencies: 444
-- Name: student_analytics_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.student_analytics_id_seq OWNED BY public.student_analytics.id;


--
-- TOC entry 428 (class 1259 OID 20166)
-- Name: student_answers; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.student_answers (
    id integer NOT NULL,
    attempt_id integer,
    question_id integer,
    selected_option_id integer,
    text_response text,
    is_correct boolean,
    points_awarded double precision,
    time_spent_seconds integer,
    submitted_at timestamp with time zone DEFAULT now()
);


ALTER TABLE public.student_answers OWNER TO postgres;

--
-- TOC entry 427 (class 1259 OID 20165)
-- Name: student_answers_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.student_answers_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.student_answers_id_seq OWNER TO postgres;

--
-- TOC entry 7831 (class 0 OID 0)
-- Dependencies: 427
-- Name: student_answers_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.student_answers_id_seq OWNED BY public.student_answers.id;


--
-- TOC entry 585 (class 1259 OID 22117)
-- Name: student_mastery; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.student_mastery (
    user_id integer NOT NULL,
    concept_id character varying(36) NOT NULL,
    mastery_probability double precision,
    status public.masterystatus,
    confidence_score double precision,
    last_assessed_at timestamp without time zone
);


ALTER TABLE public.student_mastery OWNER TO postgres;

--
-- TOC entry 628 (class 1259 OID 22474)
-- Name: student_nudge_history; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.student_nudge_history (
    id integer NOT NULL,
    workflow_id integer,
    user_id integer,
    sent_at timestamp with time zone DEFAULT now(),
    action_taken character varying,
    clicked_at timestamp with time zone,
    converted_at timestamp with time zone
);


ALTER TABLE public.student_nudge_history OWNER TO postgres;

--
-- TOC entry 627 (class 1259 OID 22473)
-- Name: student_nudge_history_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.student_nudge_history_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.student_nudge_history_id_seq OWNER TO postgres;

--
-- TOC entry 7832 (class 0 OID 0)
-- Dependencies: 627
-- Name: student_nudge_history_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.student_nudge_history_id_seq OWNED BY public.student_nudge_history.id;


--
-- TOC entry 591 (class 1259 OID 22192)
-- Name: student_nudge_workflows; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.student_nudge_workflows (
    id integer NOT NULL,
    name character varying NOT NULL,
    description text,
    is_active boolean,
    trigger_type character varying NOT NULL,
    trigger_config json,
    message_template text NOT NULL,
    action_type character varying,
    reward_amount integer,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone
);


ALTER TABLE public.student_nudge_workflows OWNER TO postgres;

--
-- TOC entry 590 (class 1259 OID 22191)
-- Name: student_nudge_workflows_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.student_nudge_workflows_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.student_nudge_workflows_id_seq OWNER TO postgres;

--
-- TOC entry 7833 (class 0 OID 0)
-- Dependencies: 590
-- Name: student_nudge_workflows_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.student_nudge_workflows_id_seq OWNED BY public.student_nudge_workflows.id;


--
-- TOC entry 644 (class 1259 OID 27896)
-- Name: student_submissions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.student_submissions (
    id uuid NOT NULL,
    assignment_id uuid,
    student_id integer,
    content_text text,
    s3_pdf_url character varying,
    status character varying,
    submitted_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.student_submissions OWNER TO postgres;

--
-- TOC entry 321 (class 1259 OID 19107)
-- Name: study_groups; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.study_groups (
    id integer NOT NULL,
    name character varying NOT NULL,
    description text,
    creator_id integer NOT NULL,
    is_private boolean,
    max_members integer,
    created_at timestamp without time zone NOT NULL
);


ALTER TABLE public.study_groups OWNER TO postgres;

--
-- TOC entry 320 (class 1259 OID 19106)
-- Name: study_groups_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.study_groups_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.study_groups_id_seq OWNER TO postgres;

--
-- TOC entry 7834 (class 0 OID 0)
-- Dependencies: 320
-- Name: study_groups_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.study_groups_id_seq OWNED BY public.study_groups.id;


--
-- TOC entry 238 (class 1259 OID 18439)
-- Name: study_rooms; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.study_rooms (
    id integer NOT NULL,
    name character varying,
    topic character varying,
    participants_count integer,
    thumbnail_url character varying
);


ALTER TABLE public.study_rooms OWNER TO postgres;

--
-- TOC entry 237 (class 1259 OID 18438)
-- Name: study_rooms_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.study_rooms_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.study_rooms_id_seq OWNER TO postgres;

--
-- TOC entry 7835 (class 0 OID 0)
-- Dependencies: 237
-- Name: study_rooms_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.study_rooms_id_seq OWNED BY public.study_rooms.id;


--
-- TOC entry 581 (class 1259 OID 22045)
-- Name: study_sessions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.study_sessions (
    id integer NOT NULL,
    user_id integer NOT NULL,
    topic_id integer,
    topic_name character varying,
    session_type character varying,
    start_time timestamp without time zone,
    end_time timestamp without time zone,
    duration_seconds integer,
    completed boolean DEFAULT false,
    comprehension_score double precision,
    notes text,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.study_sessions OWNER TO postgres;

--
-- TOC entry 580 (class 1259 OID 22044)
-- Name: study_sessions_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.study_sessions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.study_sessions_id_seq OWNER TO postgres;

--
-- TOC entry 7836 (class 0 OID 0)
-- Dependencies: 580
-- Name: study_sessions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.study_sessions_id_seq OWNED BY public.study_sessions.id;


--
-- TOC entry 490 (class 1259 OID 20906)
-- Name: submissions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.submissions (
    id integer NOT NULL,
    assignment_id integer,
    user_id integer,
    submitted_files json,
    notes text,
    grade double precision,
    feedback text,
    status character varying,
    submitted_at timestamp without time zone,
    graded_at timestamp without time zone
);


ALTER TABLE public.submissions OWNER TO postgres;

--
-- TOC entry 489 (class 1259 OID 20905)
-- Name: submissions_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.submissions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.submissions_id_seq OWNER TO postgres;

--
-- TOC entry 7837 (class 0 OID 0)
-- Dependencies: 489
-- Name: submissions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.submissions_id_seq OWNED BY public.submissions.id;


--
-- TOC entry 254 (class 1259 OID 18535)
-- Name: subscription_coupons; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.subscription_coupons (
    id integer NOT NULL,
    code character varying(50) NOT NULL,
    name character varying(100) NOT NULL,
    description text,
    discount_type character varying(20) NOT NULL,
    discount_value numeric(10,2) NOT NULL,
    currency character varying(3),
    applies_to_plans text,
    duration character varying(20) NOT NULL,
    duration_months integer,
    is_active boolean,
    valid_from timestamp with time zone,
    valid_until timestamp with time zone,
    max_redemptions integer,
    max_redemptions_per_user integer,
    times_redeemed integer,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone
);


ALTER TABLE public.subscription_coupons OWNER TO postgres;

--
-- TOC entry 253 (class 1259 OID 18534)
-- Name: subscription_coupons_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.subscription_coupons_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.subscription_coupons_id_seq OWNER TO postgres;

--
-- TOC entry 7838 (class 0 OID 0)
-- Dependencies: 253
-- Name: subscription_coupons_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.subscription_coupons_id_seq OWNED BY public.subscription_coupons.id;


--
-- TOC entry 455 (class 1259 OID 20465)
-- Name: subscription_invoices; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.subscription_invoices (
    id integer NOT NULL,
    subscription_id integer NOT NULL,
    invoice_number character varying(50),
    amount numeric(10,2) NOT NULL,
    currency character varying(3),
    status character varying(20) NOT NULL,
    invoice_date timestamp with time zone DEFAULT now(),
    due_date timestamp with time zone,
    paid_at timestamp with time zone,
    invoice_pdf_url character varying(500),
    description text,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone,
    cashfree_invoice_id character varying(100),
    cashfree_payment_id character varying(100)
);


ALTER TABLE public.subscription_invoices OWNER TO postgres;

--
-- TOC entry 454 (class 1259 OID 20464)
-- Name: subscription_invoices_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.subscription_invoices_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.subscription_invoices_id_seq OWNER TO postgres;

--
-- TOC entry 7839 (class 0 OID 0)
-- Dependencies: 454
-- Name: subscription_invoices_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.subscription_invoices_id_seq OWNED BY public.subscription_invoices.id;


--
-- TOC entry 252 (class 1259 OID 18521)
-- Name: subscription_plans; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.subscription_plans (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    slug character varying(100) NOT NULL,
    description text,
    short_description character varying(500),
    monthly_price numeric(10,2) NOT NULL,
    yearly_price numeric(10,2),
    currency character varying(3),
    trial_days integer,
    access_level character varying(20),
    max_courses integer,
    max_live_classes integer,
    features text,
    included_features text,
    is_active boolean,
    is_featured boolean,
    is_popular boolean,
    display_order integer,
    total_subscriptions integer,
    active_subscriptions integer,
    total_revenue numeric(10,2),
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone,
    cashfree_plan_id character varying(100)
);


ALTER TABLE public.subscription_plans OWNER TO postgres;

--
-- TOC entry 251 (class 1259 OID 18520)
-- Name: subscription_plans_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.subscription_plans_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.subscription_plans_id_seq OWNER TO postgres;

--
-- TOC entry 7840 (class 0 OID 0)
-- Dependencies: 251
-- Name: subscription_plans_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.subscription_plans_id_seq OWNED BY public.subscription_plans.id;


--
-- TOC entry 230 (class 1259 OID 18390)
-- Name: tags; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tags (
    id integer NOT NULL,
    name character varying NOT NULL,
    slug character varying NOT NULL
);


ALTER TABLE public.tags OWNER TO postgres;

--
-- TOC entry 229 (class 1259 OID 18389)
-- Name: tags_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.tags_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.tags_id_seq OWNER TO postgres;

--
-- TOC entry 7841 (class 0 OID 0)
-- Dependencies: 229
-- Name: tags_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.tags_id_seq OWNED BY public.tags.id;


--
-- TOC entry 281 (class 1259 OID 18762)
-- Name: tasks; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tasks (
    id integer NOT NULL,
    title character varying,
    description character varying,
    task_type character varying,
    duration_minutes integer,
    is_master boolean,
    user_id integer,
    scheduled_date timestamp without time zone,
    is_completed boolean
);


ALTER TABLE public.tasks OWNER TO postgres;

--
-- TOC entry 280 (class 1259 OID 18761)
-- Name: tasks_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.tasks_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.tasks_id_seq OWNER TO postgres;

--
-- TOC entry 7842 (class 0 OID 0)
-- Dependencies: 280
-- Name: tasks_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.tasks_id_seq OWNED BY public.tasks.id;


--
-- TOC entry 569 (class 1259 OID 21857)
-- Name: tax_calculations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tax_calculations (
    id integer NOT NULL,
    order_id integer,
    payment_id integer,
    subscription_id integer,
    user_id integer NOT NULL,
    tax_rate_id integer NOT NULL,
    subtotal numeric(10,2) NOT NULL,
    tax_amount numeric(10,2) NOT NULL,
    total_amount numeric(10,2) NOT NULL,
    currency character varying(3) NOT NULL,
    billing_country character varying(2),
    billing_state character varying(10),
    billing_zip character varying(20),
    tax_id character varying(50),
    tax_exempt boolean,
    tax_exempt_reason character varying(200),
    calculation_method character varying(50),
    is_inclusive boolean,
    created_at timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.tax_calculations OWNER TO postgres;

--
-- TOC entry 568 (class 1259 OID 21856)
-- Name: tax_calculations_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.tax_calculations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.tax_calculations_id_seq OWNER TO postgres;

--
-- TOC entry 7843 (class 0 OID 0)
-- Dependencies: 568
-- Name: tax_calculations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.tax_calculations_id_seq OWNED BY public.tax_calculations.id;


--
-- TOC entry 377 (class 1259 OID 19623)
-- Name: tax_exemptions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tax_exemptions (
    id integer NOT NULL,
    user_id integer NOT NULL,
    organization_id integer,
    exemption_type character varying(50) NOT NULL,
    exemption_certificate character varying(100),
    tax_id character varying(50),
    country_code character varying(2),
    state_code character varying(10),
    applies_to_all boolean,
    is_active boolean NOT NULL,
    verified boolean,
    verified_at timestamp with time zone,
    valid_from timestamp with time zone,
    valid_until timestamp with time zone,
    certificate_url character varying(500),
    notes text,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone
);


ALTER TABLE public.tax_exemptions OWNER TO postgres;

--
-- TOC entry 376 (class 1259 OID 19622)
-- Name: tax_exemptions_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.tax_exemptions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.tax_exemptions_id_seq OWNER TO postgres;

--
-- TOC entry 7844 (class 0 OID 0)
-- Dependencies: 376
-- Name: tax_exemptions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.tax_exemptions_id_seq OWNED BY public.tax_exemptions.id;


--
-- TOC entry 266 (class 1259 OID 18611)
-- Name: tax_rates; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tax_rates (
    id integer NOT NULL,
    country_code character varying(2) NOT NULL,
    state_code character varying(10),
    region_name character varying(100) NOT NULL,
    tax_name character varying(50) NOT NULL,
    tax_rate numeric(5,4) NOT NULL,
    tax_type character varying(20) NOT NULL,
    applies_to_digital_goods boolean,
    applies_to_physical_goods boolean,
    applies_to_services boolean,
    applies_to_subscriptions boolean,
    is_compound boolean,
    compound_order integer,
    is_active boolean NOT NULL,
    effective_from timestamp with time zone,
    effective_until timestamp with time zone,
    description text,
    tax_id_required boolean,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone
);


ALTER TABLE public.tax_rates OWNER TO postgres;

--
-- TOC entry 265 (class 1259 OID 18610)
-- Name: tax_rates_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.tax_rates_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.tax_rates_id_seq OWNER TO postgres;

--
-- TOC entry 7845 (class 0 OID 0)
-- Dependencies: 265
-- Name: tax_rates_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.tax_rates_id_seq OWNED BY public.tax_rates.id;


--
-- TOC entry 649 (class 1259 OID 28385)
-- Name: thread_votes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.thread_votes (
    id integer NOT NULL,
    thread_id integer NOT NULL,
    user_id integer NOT NULL,
    vote_type character varying(10) NOT NULL,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.thread_votes OWNER TO postgres;

--
-- TOC entry 648 (class 1259 OID 28384)
-- Name: thread_votes_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.thread_votes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.thread_votes_id_seq OWNER TO postgres;

--
-- TOC entry 7846 (class 0 OID 0)
-- Dependencies: 648
-- Name: thread_votes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.thread_votes_id_seq OWNED BY public.thread_votes.id;


--
-- TOC entry 246 (class 1259 OID 18479)
-- Name: translations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.translations (
    id integer NOT NULL,
    key character varying(255) NOT NULL,
    language_code character varying(10) NOT NULL,
    value text NOT NULL,
    namespace character varying(100),
    description text,
    is_html boolean,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone
);


ALTER TABLE public.translations OWNER TO postgres;

--
-- TOC entry 245 (class 1259 OID 18478)
-- Name: translations_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.translations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.translations_id_seq OWNER TO postgres;

--
-- TOC entry 7847 (class 0 OID 0)
-- Dependencies: 245
-- Name: translations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.translations_id_seq OWNED BY public.translations.id;


--
-- TOC entry 351 (class 1259 OID 19387)
-- Name: two_factor_auth; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.two_factor_auth (
    id integer NOT NULL,
    user_id integer NOT NULL,
    secret character varying(255) NOT NULL,
    is_enabled boolean NOT NULL,
    verified_at timestamp with time zone,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone
);


ALTER TABLE public.two_factor_auth OWNER TO postgres;

--
-- TOC entry 350 (class 1259 OID 19386)
-- Name: two_factor_auth_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.two_factor_auth_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.two_factor_auth_id_seq OWNER TO postgres;

--
-- TOC entry 7848 (class 0 OID 0)
-- Dependencies: 350
-- Name: two_factor_auth_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.two_factor_auth_id_seq OWNED BY public.two_factor_auth.id;


--
-- TOC entry 465 (class 1259 OID 20579)
-- Name: two_factor_backup_codes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.two_factor_backup_codes (
    id integer NOT NULL,
    user_id integer NOT NULL,
    two_factor_auth_id integer NOT NULL,
    code_hash character varying(255) NOT NULL,
    is_used boolean NOT NULL,
    used_at timestamp with time zone,
    created_at timestamp with time zone NOT NULL
);


ALTER TABLE public.two_factor_backup_codes OWNER TO postgres;

--
-- TOC entry 464 (class 1259 OID 20578)
-- Name: two_factor_backup_codes_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.two_factor_backup_codes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.two_factor_backup_codes_id_seq OWNER TO postgres;

--
-- TOC entry 7849 (class 0 OID 0)
-- Dependencies: 464
-- Name: two_factor_backup_codes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.two_factor_backup_codes_id_seq OWNED BY public.two_factor_backup_codes.id;


--
-- TOC entry 647 (class 1259 OID 28136)
-- Name: universal_progress; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.universal_progress (
    id integer NOT NULL,
    user_id integer,
    state_blob json NOT NULL,
    last_synced_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.universal_progress OWNER TO postgres;

--
-- TOC entry 646 (class 1259 OID 28135)
-- Name: universal_progress_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.universal_progress_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.universal_progress_id_seq OWNER TO postgres;

--
-- TOC entry 7850 (class 0 OID 0)
-- Dependencies: 646
-- Name: universal_progress_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.universal_progress_id_seq OWNED BY public.universal_progress.id;


--
-- TOC entry 555 (class 1259 OID 21710)
-- Name: upsc_attempts; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.upsc_attempts (
    id uuid NOT NULL,
    student_id integer,
    question_id uuid,
    attempt_type character varying NOT NULL,
    answer_text text,
    image_url character varying,
    audio_url character varying,
    transcription text,
    word_count integer,
    time_taken_seconds integer,
    ocr_confidence numeric(5,2),
    submitted_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    drill_session_id uuid
);


ALTER TABLE public.upsc_attempts OWNER TO postgres;

--
-- TOC entry 400 (class 1259 OID 19858)
-- Name: upsc_batches; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.upsc_batches (
    id uuid NOT NULL,
    name character varying NOT NULL,
    description text,
    start_date date NOT NULL,
    end_date date,
    is_active boolean,
    created_by_id integer,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.upsc_batches OWNER TO postgres;

--
-- TOC entry 598 (class 1259 OID 22242)
-- Name: upsc_cognitive_profiles; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.upsc_cognitive_profiles (
    id uuid NOT NULL,
    user_id integer NOT NULL,
    current_level character varying,
    wps_score double precision,
    stress_index double precision,
    is_level2_unlocked boolean,
    is_level3_unlocked boolean,
    last_updated timestamp without time zone
);


ALTER TABLE public.upsc_cognitive_profiles OWNER TO postgres;

--
-- TOC entry 554 (class 1259 OID 21692)
-- Name: upsc_content; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.upsc_content (
    id uuid NOT NULL,
    question_id uuid,
    content_type character varying NOT NULL,
    title character varying,
    content_text text,
    file_url character varying,
    microtopics json,
    keywords json,
    current_affairs json,
    created_by_id integer,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.upsc_content OWNER TO postgres;

--
-- TOC entry 526 (class 1259 OID 21328)
-- Name: upsc_drills; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.upsc_drills (
    id uuid NOT NULL,
    batch_id uuid,
    plan_id uuid,
    scheduled_at timestamp with time zone NOT NULL,
    status character varying,
    created_by_id integer,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.upsc_drills OWNER TO postgres;

--
-- TOC entry 629 (class 1259 OID 22494)
-- Name: upsc_gap_analysis; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.upsc_gap_analysis (
    id uuid NOT NULL,
    profile_id uuid NOT NULL,
    chapter_id integer NOT NULL,
    subject character varying,
    status character varying,
    recall_accuracy double precision,
    last_tested_at timestamp without time zone,
    gap_details json
);


ALTER TABLE public.upsc_gap_analysis OWNER TO postgres;

--
-- TOC entry 478 (class 1259 OID 20737)
-- Name: upsc_plans; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.upsc_plans (
    id uuid NOT NULL,
    batch_id uuid,
    plan_type character varying NOT NULL,
    parent_plan_id uuid,
    title character varying NOT NULL,
    start_date date NOT NULL,
    end_date date NOT NULL,
    sequence_order integer NOT NULL,
    ai_generated boolean,
    approved_by_id integer,
    approved_at timestamp with time zone,
    version integer,
    plan_data json,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.upsc_plans OWNER TO postgres;

--
-- TOC entry 525 (class 1259 OID 21310)
-- Name: upsc_questions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.upsc_questions (
    id uuid NOT NULL,
    plan_id uuid,
    question_number integer NOT NULL,
    title character varying NOT NULL,
    question_text text NOT NULL,
    marks integer NOT NULL,
    subject character varying NOT NULL,
    topic character varying,
    microtopics json NOT NULL,
    keywords json,
    pyq_reference character varying,
    created_by_id integer,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.upsc_questions OWNER TO postgres;

--
-- TOC entry 570 (class 1259 OID 21894)
-- Name: upsc_reports; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.upsc_reports (
    id uuid NOT NULL,
    attempt_before_id uuid,
    attempt_after_id uuid,
    student_id integer,
    question_id uuid,
    coverage_before numeric(5,2),
    similarity_before numeric(5,2),
    keyword_recall_before numeric(5,2),
    structure_score_before numeric(5,2),
    language_score_before numeric(5,2),
    estimated_marks_before numeric(5,2),
    coverage_after numeric(5,2),
    similarity_after numeric(5,2),
    keyword_recall_after numeric(5,2),
    structure_score_after numeric(5,2),
    language_score_after numeric(5,2),
    estimated_marks_after numeric(5,2),
    missed_points json,
    suggestions json,
    common_mistakes json,
    tone_feedback text,
    ai_model_version character varying,
    raw_ai_output json,
    generated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    reviewed_by_id integer,
    reviewed_at timestamp with time zone
);


ALTER TABLE public.upsc_reports OWNER TO postgres;

--
-- TOC entry 480 (class 1259 OID 20780)
-- Name: upsc_rubrics; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.upsc_rubrics (
    id uuid NOT NULL,
    batch_id uuid,
    subject character varying,
    rubric_data json NOT NULL,
    is_active boolean,
    created_by_id integer,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.upsc_rubrics OWNER TO postgres;

--
-- TOC entry 477 (class 1259 OID 20719)
-- Name: upsc_student_profiles; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.upsc_student_profiles (
    id uuid NOT NULL,
    user_id integer,
    batch_id uuid,
    enrollment_date date NOT NULL,
    target_year integer,
    preferred_language character varying,
    profile_data json,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.upsc_student_profiles OWNER TO postgres;

--
-- TOC entry 527 (class 1259 OID 21351)
-- Name: upsc_student_progress; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.upsc_student_progress (
    id uuid NOT NULL,
    student_id integer,
    plan_id uuid,
    is_locked boolean,
    unlocked_at timestamp with time zone,
    completed_at timestamp with time zone,
    completion_percentage numeric(5,2),
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.upsc_student_progress OWNER TO postgres;

--
-- TOC entry 479 (class 1259 OID 20760)
-- Name: upsc_timer_configs; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.upsc_timer_configs (
    id uuid NOT NULL,
    batch_id uuid,
    phase character varying NOT NULL,
    duration_minutes integer NOT NULL,
    is_active boolean,
    created_by_id integer,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.upsc_timer_configs OWNER TO postgres;

--
-- TOC entry 630 (class 1259 OID 22506)
-- Name: upsc_unlock_transactions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.upsc_unlock_transactions (
    id uuid NOT NULL,
    profile_id uuid NOT NULL,
    level_unlocked character varying NOT NULL,
    amount_paid double precision NOT NULL,
    currency character varying,
    transaction_id character varying,
    status character varying,
    unlocked_at timestamp without time zone
);


ALTER TABLE public.upsc_unlock_transactions OWNER TO postgres;

--
-- TOC entry 353 (class 1259 OID 19401)
-- Name: user_achievements; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.user_achievements (
    id integer NOT NULL,
    user_id integer NOT NULL,
    achievement_id integer NOT NULL,
    progress integer,
    unlocked_at timestamp with time zone DEFAULT now(),
    notified boolean
);


ALTER TABLE public.user_achievements OWNER TO postgres;

--
-- TOC entry 352 (class 1259 OID 19400)
-- Name: user_achievements_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.user_achievements_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.user_achievements_id_seq OWNER TO postgres;

--
-- TOC entry 7851 (class 0 OID 0)
-- Dependencies: 352
-- Name: user_achievements_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.user_achievements_id_seq OWNED BY public.user_achievements.id;


--
-- TOC entry 323 (class 1259 OID 19123)
-- Name: user_activities; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.user_activities (
    id integer NOT NULL,
    user_id integer NOT NULL,
    activity_type character varying NOT NULL,
    target_type character varying NOT NULL,
    target_id integer NOT NULL,
    meta_data json,
    created_at timestamp without time zone
);


ALTER TABLE public.user_activities OWNER TO postgres;

--
-- TOC entry 322 (class 1259 OID 19122)
-- Name: user_activities_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.user_activities_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.user_activities_id_seq OWNER TO postgres;

--
-- TOC entry 7852 (class 0 OID 0)
-- Dependencies: 322
-- Name: user_activities_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.user_activities_id_seq OWNED BY public.user_activities.id;


--
-- TOC entry 651 (class 1259 OID 28409)
-- Name: user_activity_sessions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.user_activity_sessions (
    id integer NOT NULL,
    user_id integer NOT NULL,
    start_time timestamp without time zone,
    last_heartbeat timestamp without time zone,
    end_time timestamp without time zone,
    duration_seconds integer,
    is_active boolean,
    ip_address character varying,
    user_agent character varying
);


ALTER TABLE public.user_activity_sessions OWNER TO postgres;

--
-- TOC entry 650 (class 1259 OID 28408)
-- Name: user_activity_sessions_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.user_activity_sessions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.user_activity_sessions_id_seq OWNER TO postgres;

--
-- TOC entry 7853 (class 0 OID 0)
-- Dependencies: 650
-- Name: user_activity_sessions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.user_activity_sessions_id_seq OWNED BY public.user_activity_sessions.id;


--
-- TOC entry 355 (class 1259 OID 19422)
-- Name: user_challenges; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.user_challenges (
    id integer NOT NULL,
    user_id integer NOT NULL,
    challenge_id integer NOT NULL,
    progress_data json,
    progress_percentage integer,
    completed_at timestamp with time zone,
    reward_claimed boolean,
    claimed_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now()
);


ALTER TABLE public.user_challenges OWNER TO postgres;

--
-- TOC entry 354 (class 1259 OID 19421)
-- Name: user_challenges_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.user_challenges_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.user_challenges_id_seq OWNER TO postgres;

--
-- TOC entry 7854 (class 0 OID 0)
-- Dependencies: 354
-- Name: user_challenges_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.user_challenges_id_seq OWNED BY public.user_challenges.id;


--
-- TOC entry 331 (class 1259 OID 19193)
-- Name: user_email_preferences; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.user_email_preferences (
    id integer NOT NULL,
    user_id integer NOT NULL,
    enrollment_enabled boolean,
    assignment_enabled boolean,
    quiz_enabled boolean,
    certificate_enabled boolean,
    announcement_enabled boolean,
    review_enabled boolean,
    course_update_enabled boolean,
    general_enabled boolean,
    all_emails_enabled boolean,
    created_at timestamp without time zone,
    updated_at timestamp without time zone
);


ALTER TABLE public.user_email_preferences OWNER TO postgres;

--
-- TOC entry 330 (class 1259 OID 19192)
-- Name: user_email_preferences_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.user_email_preferences_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.user_email_preferences_id_seq OWNER TO postgres;

--
-- TOC entry 7855 (class 0 OID 0)
-- Dependencies: 330
-- Name: user_email_preferences_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.user_email_preferences_id_seq OWNED BY public.user_email_preferences.id;


--
-- TOC entry 250 (class 1259 OID 18511)
-- Name: user_language_preferences; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.user_language_preferences (
    id integer NOT NULL,
    user_id integer NOT NULL,
    preferred_language character varying(10) NOT NULL,
    content_languages character varying(255),
    auto_translate boolean,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone
);


ALTER TABLE public.user_language_preferences OWNER TO postgres;

--
-- TOC entry 249 (class 1259 OID 18510)
-- Name: user_language_preferences_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.user_language_preferences_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.user_language_preferences_id_seq OWNER TO postgres;

--
-- TOC entry 7856 (class 0 OID 0)
-- Dependencies: 249
-- Name: user_language_preferences_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.user_language_preferences_id_seq OWNED BY public.user_language_preferences.id;


--
-- TOC entry 393 (class 1259 OID 19786)
-- Name: user_permissions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.user_permissions (
    id integer NOT NULL,
    user_id integer NOT NULL,
    can_view_leads boolean,
    can_edit_leads boolean,
    can_delete_leads boolean,
    can_reassign_leads boolean,
    can_export_leads boolean,
    can_manage_users boolean,
    can_view_activity_logs boolean,
    can_manage_permissions boolean,
    can_send_emails boolean,
    can_send_sms boolean,
    can_make_calls boolean,
    can_view_reports boolean,
    can_export_reports boolean,
    can_view_analytics boolean,
    can_view_payments boolean,
    can_process_refunds boolean,
    custom_permissions json,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone
);


ALTER TABLE public.user_permissions OWNER TO postgres;

--
-- TOC entry 392 (class 1259 OID 19785)
-- Name: user_permissions_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.user_permissions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.user_permissions_id_seq OWNER TO postgres;

--
-- TOC entry 7857 (class 0 OID 0)
-- Dependencies: 392
-- Name: user_permissions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.user_permissions_id_seq OWNED BY public.user_permissions.id;


--
-- TOC entry 325 (class 1259 OID 19139)
-- Name: user_preferences; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.user_preferences (
    id integer NOT NULL,
    user_id integer NOT NULL,
    preferred_categories json,
    preferred_difficulty character varying,
    preferred_duration character varying,
    learning_goals json,
    interests json,
    updated_at timestamp without time zone
);


ALTER TABLE public.user_preferences OWNER TO postgres;

--
-- TOC entry 324 (class 1259 OID 19138)
-- Name: user_preferences_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.user_preferences_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.user_preferences_id_seq OWNER TO postgres;

--
-- TOC entry 7858 (class 0 OID 0)
-- Dependencies: 324
-- Name: user_preferences_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.user_preferences_id_seq OWNED BY public.user_preferences.id;


--
-- TOC entry 291 (class 1259 OID 18842)
-- Name: user_rewards; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.user_rewards (
    id integer NOT NULL,
    user_id integer,
    reward_id integer
);


ALTER TABLE public.user_rewards OWNER TO postgres;

--
-- TOC entry 290 (class 1259 OID 18841)
-- Name: user_rewards_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.user_rewards_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.user_rewards_id_seq OWNER TO postgres;

--
-- TOC entry 7859 (class 0 OID 0)
-- Dependencies: 290
-- Name: user_rewards_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.user_rewards_id_seq OWNED BY public.user_rewards.id;


--
-- TOC entry 279 (class 1259 OID 18745)
-- Name: user_roles; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.user_roles (
    user_id integer NOT NULL,
    role_id integer NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.user_roles OWNER TO postgres;

--
-- TOC entry 395 (class 1259 OID 19803)
-- Name: user_sessions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.user_sessions (
    id integer NOT NULL,
    user_id integer NOT NULL,
    session_token character varying,
    ip_address character varying,
    user_agent character varying,
    device_info character varying,
    location character varying,
    is_active boolean,
    login_at timestamp with time zone DEFAULT now(),
    logout_at timestamp with time zone,
    last_activity_at timestamp with time zone DEFAULT now()
);


ALTER TABLE public.user_sessions OWNER TO postgres;

--
-- TOC entry 394 (class 1259 OID 19802)
-- Name: user_sessions_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.user_sessions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.user_sessions_id_seq OWNER TO postgres;

--
-- TOC entry 7860 (class 0 OID 0)
-- Dependencies: 394
-- Name: user_sessions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.user_sessions_id_seq OWNED BY public.user_sessions.id;


--
-- TOC entry 341 (class 1259 OID 19275)
-- Name: user_subscriptions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.user_subscriptions (
    id integer NOT NULL,
    user_id integer NOT NULL,
    plan_id integer NOT NULL,
    billing_cycle character varying(20) NOT NULL,
    status character varying(20) NOT NULL,
    started_at timestamp with time zone DEFAULT now(),
    trial_ends_at timestamp with time zone,
    current_period_start timestamp with time zone,
    current_period_end timestamp with time zone,
    cancelled_at timestamp with time zone,
    ended_at timestamp with time zone,
    price_paid numeric(10,2) NOT NULL,
    currency character varying(3),
    auto_renew boolean,
    cancel_at_period_end boolean,
    last_payment_date timestamp with time zone,
    next_payment_date timestamp with time zone,
    payment_failed_count integer,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone,
    cashfree_subscription_id character varying(100),
    cashfree_customer_id character varying(100),
    cashfree_latest_invoice character varying(100)
);


ALTER TABLE public.user_subscriptions OWNER TO postgres;

--
-- TOC entry 340 (class 1259 OID 19274)
-- Name: user_subscriptions_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.user_subscriptions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.user_subscriptions_id_seq OWNER TO postgres;

--
-- TOC entry 7861 (class 0 OID 0)
-- Dependencies: 340
-- Name: user_subscriptions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.user_subscriptions_id_seq OWNED BY public.user_subscriptions.id;


--
-- TOC entry 618 (class 1259 OID 22387)
-- Name: user_topic_logs; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.user_topic_logs (
    id integer NOT NULL,
    user_id integer NOT NULL,
    topic_id integer NOT NULL,
    topic_type character varying(50),
    topic_name character varying(255),
    stability double precision,
    difficulty double precision,
    retrievability double precision,
    initial_encoding_score double precision,
    last_recall_grade integer,
    total_reviews integer,
    successful_recalls integer,
    learned_at timestamp with time zone,
    last_review_date timestamp with time zone,
    next_due_date timestamp with time zone,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone,
    status character varying(20),
    is_active boolean
);


ALTER TABLE public.user_topic_logs OWNER TO postgres;

--
-- TOC entry 617 (class 1259 OID 22386)
-- Name: user_topic_logs_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.user_topic_logs_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.user_topic_logs_id_seq OWNER TO postgres;

--
-- TOC entry 7862 (class 0 OID 0)
-- Dependencies: 617
-- Name: user_topic_logs_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.user_topic_logs_id_seq OWNED BY public.user_topic_logs.id;


--
-- TOC entry 270 (class 1259 OID 18649)
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    email character varying,
    username character varying,
    hashed_password character varying,
    is_active boolean,
    is_superuser boolean,
    full_name character varying,
    coins integer,
    streak_days integer,
    token_version integer,
    group_id integer,
    role character varying,
    last_login timestamp without time zone,
    is_banned boolean,
    email_notifications boolean,
    is_approved boolean,
    is_premium boolean,
    subscription_status character varying,
    organization_id integer,
    is_sso_user boolean,
    sso_external_id character varying,
    is_verified boolean,
    is_2fa_enabled boolean DEFAULT false,
    is_ras_authorized boolean DEFAULT false,
    is_batch1_authorized boolean DEFAULT false,
    is_batch2_authorized boolean DEFAULT false,
    created_at timestamp without time zone,
    graphotherapy_enrollment_date timestamp without time zone,
    is_graphotherapy_exclusive boolean DEFAULT false,
    totp_secret character varying,
    revision_level character varying,
    revision_exam_id character varying,
    push_subscription json,
    xp integer DEFAULT 0,
    cashfree_customer_id character varying,
    purchased_subjects json DEFAULT '[]'::json NOT NULL
);


ALTER TABLE public.users OWNER TO postgres;

--
-- TOC entry 269 (class 1259 OID 18648)
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.users_id_seq OWNER TO postgres;

--
-- TOC entry 7863 (class 0 OID 0)
-- Dependencies: 269
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- TOC entry 642 (class 1259 OID 22618)
-- Name: voice_notes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.voice_notes (
    id integer NOT NULL,
    user_id integer NOT NULL,
    lead_id integer,
    field_activity_id integer,
    file_url character varying(500) NOT NULL,
    file_name character varying(255),
    file_size_bytes integer,
    duration_seconds integer,
    transcription text,
    title character varying(255),
    created_at timestamp with time zone DEFAULT now()
);


ALTER TABLE public.voice_notes OWNER TO postgres;

--
-- TOC entry 641 (class 1259 OID 22617)
-- Name: voice_notes_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.voice_notes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.voice_notes_id_seq OWNER TO postgres;

--
-- TOC entry 7864 (class 0 OID 0)
-- Dependencies: 641
-- Name: voice_notes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.voice_notes_id_seq OWNED BY public.voice_notes.id;


--
-- TOC entry 524 (class 1259 OID 21281)
-- Name: workflow_executions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.workflow_executions (
    id integer NOT NULL,
    workflow_id integer NOT NULL,
    lead_id integer NOT NULL,
    status character varying,
    current_step_id integer,
    started_at timestamp with time zone DEFAULT now(),
    completed_at timestamp with time zone,
    next_action_at timestamp with time zone,
    execution_log json,
    error_message text,
    retry_count integer,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone
);


ALTER TABLE public.workflow_executions OWNER TO postgres;

--
-- TOC entry 523 (class 1259 OID 21280)
-- Name: workflow_executions_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.workflow_executions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.workflow_executions_id_seq OWNER TO postgres;

--
-- TOC entry 7865 (class 0 OID 0)
-- Dependencies: 523
-- Name: workflow_executions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.workflow_executions_id_seq OWNED BY public.workflow_executions.id;


--
-- TOC entry 474 (class 1259 OID 20677)
-- Name: workflow_steps; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.workflow_steps (
    id integer NOT NULL,
    workflow_id integer NOT NULL,
    order_index integer NOT NULL,
    name character varying NOT NULL,
    step_type character varying NOT NULL,
    channel character varying,
    template_id integer,
    wait_duration_minutes integer,
    wait_until_date timestamp without time zone,
    wait_for_event character varying,
    condition_config json,
    true_next_step integer,
    false_next_step integer,
    field_updates json,
    assign_to_user_id integer,
    assign_to_team character varying,
    is_active boolean,
    created_at timestamp with time zone DEFAULT now()
);


ALTER TABLE public.workflow_steps OWNER TO postgres;

--
-- TOC entry 473 (class 1259 OID 20676)
-- Name: workflow_steps_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.workflow_steps_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.workflow_steps_id_seq OWNER TO postgres;

--
-- TOC entry 7866 (class 0 OID 0)
-- Dependencies: 473
-- Name: workflow_steps_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.workflow_steps_id_seq OWNED BY public.workflow_steps.id;


--
-- TOC entry 5405 (class 2604 OID 18589)
-- Name: achievements id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.achievements ALTER COLUMN id SET DEFAULT nextval('public.achievements_id_seq'::regclass);


--
-- TOC entry 5431 (class 2604 OID 18811)
-- Name: activity_logs id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.activity_logs ALTER COLUMN id SET DEFAULT nextval('public.activity_logs_id_seq'::regclass);


--
-- TOC entry 5489 (class 2604 OID 19467)
-- Name: admin_logs id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.admin_logs ALTER COLUMN id SET DEFAULT nextval('public.admin_logs_id_seq'::regclass);


--
-- TOC entry 5570 (class 2604 OID 20490)
-- Name: affiliate_clicks id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.affiliate_clicks ALTER COLUMN id SET DEFAULT nextval('public.affiliate_clicks_id_seq'::regclass);


--
-- TOC entry 5622 (class 2604 OID 21236)
-- Name: affiliate_commissions id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.affiliate_commissions ALTER COLUMN id SET DEFAULT nextval('public.affiliate_commissions_id_seq'::regclass);


--
-- TOC entry 5473 (class 2604 OID 19301)
-- Name: affiliate_partners id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.affiliate_partners ALTER COLUMN id SET DEFAULT nextval('public.affiliate_partners_id_seq'::regclass);


--
-- TOC entry 5575 (class 2604 OID 20531)
-- Name: affiliate_payouts id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.affiliate_payouts ALTER COLUMN id SET DEFAULT nextval('public.affiliate_payouts_id_seq'::regclass);


--
-- TOC entry 5572 (class 2604 OID 20509)
-- Name: affiliate_referrals id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.affiliate_referrals ALTER COLUMN id SET DEFAULT nextval('public.affiliate_referrals_id_seq'::regclass);


--
-- TOC entry 5490 (class 2604 OID 19485)
-- Name: ai_avatars id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ai_avatars ALTER COLUMN id SET DEFAULT nextval('public.ai_avatars_id_seq'::regclass);


--
-- TOC entry 5705 (class 2604 OID 22357)
-- Name: ai_coaching_sessions id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ai_coaching_sessions ALTER COLUMN id SET DEFAULT nextval('public.ai_coaching_sessions_id_seq'::regclass);


--
-- TOC entry 5457 (class 2604 OID 19159)
-- Name: ai_conversations id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ai_conversations ALTER COLUMN id SET DEFAULT nextval('public.ai_conversations_id_seq'::regclass);


--
-- TOC entry 5578 (class 2604 OID 20549)
-- Name: ai_generated_quizzes id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ai_generated_quizzes ALTER COLUMN id SET DEFAULT nextval('public.ai_generated_quizzes_id_seq'::regclass);


--
-- TOC entry 5613 (class 2604 OID 21109)
-- Name: ai_grading_results id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ai_grading_results ALTER COLUMN id SET DEFAULT nextval('public.ai_grading_results_id_seq'::regclass);


--
-- TOC entry 5702 (class 2604 OID 22317)
-- Name: ai_planning_sessions id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ai_planning_sessions ALTER COLUMN id SET DEFAULT nextval('public.ai_planning_sessions_id_seq'::regclass);


--
-- TOC entry 5475 (class 2604 OID 19321)
-- Name: ai_usage_logs id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ai_usage_logs ALTER COLUMN id SET DEFAULT nextval('public.ai_usage_logs_id_seq'::regclass);


--
-- TOC entry 5559 (class 2604 OID 20375)
-- Name: analytics_events id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.analytics_events ALTER COLUMN id SET DEFAULT nextval('public.analytics_events_id_seq'::regclass);


--
-- TOC entry 5604 (class 2604 OID 20957)
-- Name: announcement_reads id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.announcement_reads ALTER COLUMN id SET DEFAULT nextval('public.announcement_reads_id_seq'::regclass);


--
-- TOC entry 5449 (class 2604 OID 19048)
-- Name: assessment_rubrics id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.assessment_rubrics ALTER COLUMN id SET DEFAULT nextval('public.assessment_rubrics_id_seq'::regclass);


--
-- TOC entry 5491 (class 2604 OID 19501)
-- Name: assets id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.assets ALTER COLUMN id SET DEFAULT nextval('public.assets_id_seq'::regclass);


--
-- TOC entry 5527 (class 2604 OID 19928)
-- Name: assignments id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.assignments ALTER COLUMN id SET DEFAULT nextval('public.assignments_id_seq'::regclass);


--
-- TOC entry 5699 (class 2604 OID 22271)
-- Name: attendance id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.attendance ALTER COLUMN id SET DEFAULT nextval('public.attendance_id_seq'::regclass);


--
-- TOC entry 5586 (class 2604 OID 20707)
-- Name: automation_analytics id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.automation_analytics ALTER COLUMN id SET DEFAULT nextval('public.automation_analytics_id_seq'::regclass);


--
-- TOC entry 5438 (class 2604 OID 18907)
-- Name: bank_questions id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.bank_questions ALTER COLUMN id SET DEFAULT nextval('public.bank_questions_id_seq'::regclass);


--
-- TOC entry 5704 (class 2604 OID 22344)
-- Name: batch1_segments id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.batch1_segments ALTER COLUMN id SET DEFAULT nextval('public.batch1_segments_id_seq'::regclass);


--
-- TOC entry 5677 (class 2604 OID 22031)
-- Name: batch1_test_results id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.batch1_test_results ALTER COLUMN id SET DEFAULT nextval('public.batch1_test_results_id_seq'::regclass);


--
-- TOC entry 5696 (class 2604 OID 22219)
-- Name: batch_sentiments id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.batch_sentiments ALTER COLUMN id SET DEFAULT nextval('public.batch_sentiments_id_seq'::regclass);


--
-- TOC entry 5407 (class 2604 OID 18602)
-- Name: blockchain_blocks id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.blockchain_blocks ALTER COLUMN id SET DEFAULT nextval('public.blockchain_blocks_id_seq'::regclass);


--
-- TOC entry 5541 (class 2604 OID 20120)
-- Name: bundle_enrollments id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.bundle_enrollments ALTER COLUMN id SET DEFAULT nextval('public.bundle_enrollments_id_seq'::regclass);


--
-- TOC entry 5714 (class 2604 OID 22442)
-- Name: call_logs id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.call_logs ALTER COLUMN id SET DEFAULT nextval('public.call_logs_id_seq'::regclass);


--
-- TOC entry 5620 (class 2604 OID 21206)
-- Name: cart_items id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cart_items ALTER COLUMN id SET DEFAULT nextval('public.cart_items_id_seq'::regclass);


--
-- TOC entry 5375 (class 2604 OID 18381)
-- Name: categories id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.categories ALTER COLUMN id SET DEFAULT nextval('public.categories_id_seq'::regclass);


--
-- TOC entry 5441 (class 2604 OID 18940)
-- Name: certificate_templates id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.certificate_templates ALTER COLUMN id SET DEFAULT nextval('public.certificate_templates_id_seq'::regclass);


--
-- TOC entry 5597 (class 2604 OID 20874)
-- Name: certificates id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.certificates ALTER COLUMN id SET DEFAULT nextval('public.certificates_id_seq'::regclass);


--
-- TOC entry 5423 (class 2604 OID 18730)
-- Name: challenges id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.challenges ALTER COLUMN id SET DEFAULT nextval('public.challenges_id_seq'::regclass);


--
-- TOC entry 5642 (class 2604 OID 21565)
-- Name: chat_feedback id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.chat_feedback ALTER COLUMN id SET DEFAULT nextval('public.chat_feedback_id_seq'::regclass);


--
-- TOC entry 5550 (class 2604 OID 20246)
-- Name: chat_sessions id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.chat_sessions ALTER COLUMN id SET DEFAULT nextval('public.chat_sessions_id_seq'::regclass);


--
-- TOC entry 5619 (class 2604 OID 21191)
-- Name: chatbot_messages id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.chatbot_messages ALTER COLUMN id SET DEFAULT nextval('public.chatbot_messages_id_seq'::regclass);


--
-- TOC entry 5487 (class 2604 OID 19448)
-- Name: coin_transactions id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.coin_transactions ALTER COLUMN id SET DEFAULT nextval('public.coin_transactions_id_seq'::regclass);


--
-- TOC entry 5617 (class 2604 OID 21165)
-- Name: collaborative_projects id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.collaborative_projects ALTER COLUMN id SET DEFAULT nextval('public.collaborative_projects_id_seq'::regclass);


--
-- TOC entry 5519 (class 2604 OID 19825)
-- Name: communication_templates id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.communication_templates ALTER COLUMN id SET DEFAULT nextval('public.communication_templates_id_seq'::regclass);


--
-- TOC entry 5400 (class 2604 OID 18563)
-- Name: content_difficulty_analyses id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.content_difficulty_analyses ALTER COLUMN id SET DEFAULT nextval('public.content_difficulty_analyses_id_seq'::regclass);


--
-- TOC entry 5397 (class 2604 OID 18550)
-- Name: content_embeddings id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.content_embeddings ALTER COLUMN id SET DEFAULT nextval('public.content_embeddings_id_seq'::regclass);


--
-- TOC entry 5389 (class 2604 OID 18498)
-- Name: content_translations id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.content_translations ALTER COLUMN id SET DEFAULT nextval('public.content_translations_id_seq'::regclass);


--
-- TOC entry 5643 (class 2604 OID 21585)
-- Name: coupon_usages id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.coupon_usages ALTER COLUMN id SET DEFAULT nextval('public.coupon_usages_id_seq'::regclass);


--
-- TOC entry 5553 (class 2604 OID 20309)
-- Name: coupons id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.coupons ALTER COLUMN id SET DEFAULT nextval('public.coupons_id_seq'::regclass);


--
-- TOC entry 5531 (class 2604 OID 19966)
-- Name: course_announcements id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.course_announcements ALTER COLUMN id SET DEFAULT nextval('public.course_announcements_id_seq'::regclass);


--
-- TOC entry 5535 (class 2604 OID 20013)
-- Name: course_bookmarks id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.course_bookmarks ALTER COLUMN id SET DEFAULT nextval('public.course_bookmarks_id_seq'::regclass);


--
-- TOC entry 5442 (class 2604 OID 18955)
-- Name: course_bundles id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.course_bundles ALTER COLUMN id SET DEFAULT nextval('public.course_bundles_id_seq'::regclass);


--
-- TOC entry 5595 (class 2604 OID 20841)
-- Name: course_payments id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.course_payments ALTER COLUMN id SET DEFAULT nextval('public.course_payments_id_seq'::regclass);


--
-- TOC entry 5551 (class 2604 OID 20266)
-- Name: course_recommendations id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.course_recommendations ALTER COLUMN id SET DEFAULT nextval('public.course_recommendations_id_seq'::regclass);


--
-- TOC entry 5526 (class 2604 OID 19891)
-- Name: course_reviews id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.course_reviews ALTER COLUMN id SET DEFAULT nextval('public.course_reviews_id_seq'::regclass);


--
-- TOC entry 5444 (class 2604 OID 18973)
-- Name: courses id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses ALTER COLUMN id SET DEFAULT nextval('public.courses_id_seq'::regclass);


--
-- TOC entry 5701 (class 2604 OID 22305)
-- Name: daily_dev_reports id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.daily_dev_reports ALTER COLUMN id SET DEFAULT nextval('public.daily_dev_reports_id_seq'::regclass);


--
-- TOC entry 5507 (class 2604 OID 19678)
-- Name: daily_reflections id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.daily_reflections ALTER COLUMN id SET DEFAULT nextval('public.daily_reflections_id_seq'::regclass);


--
-- TOC entry 5693 (class 2604 OID 22206)
-- Name: daily_summaries id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.daily_summaries ALTER COLUMN id SET DEFAULT nextval('public.daily_summaries_id_seq'::regclass);


--
-- TOC entry 5505 (class 2604 OID 19649)
-- Name: daily_tasks id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.daily_tasks ALTER COLUMN id SET DEFAULT nextval('public.daily_tasks_id_seq'::regclass);


--
-- TOC entry 5512 (class 2604 OID 19771)
-- Name: data_masking_configs id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.data_masking_configs ALTER COLUMN id SET DEFAULT nextval('public.data_masking_configs_id_seq'::regclass);


--
-- TOC entry 5700 (class 2604 OID 22288)
-- Name: development_logs id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.development_logs ALTER COLUMN id SET DEFAULT nextval('public.development_logs_id_seq'::regclass);


--
-- TOC entry 5493 (class 2604 OID 19518)
-- Name: digital_products id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.digital_products ALTER COLUMN id SET DEFAULT nextval('public.digital_products_id_seq'::regclass);


--
-- TOC entry 5495 (class 2604 OID 19535)
-- Name: direct_messages id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.direct_messages ALTER COLUMN id SET DEFAULT nextval('public.direct_messages_id_seq'::regclass);


--
-- TOC entry 5529 (class 2604 OID 19950)
-- Name: discussion_categories id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.discussion_categories ALTER COLUMN id SET DEFAULT nextval('public.discussion_categories_id_seq'::regclass);


--
-- TOC entry 5630 (class 2604 OID 21373)
-- Name: discussion_posts id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.discussion_posts ALTER COLUMN id SET DEFAULT nextval('public.discussion_posts_id_seq'::regclass);


--
-- TOC entry 5599 (class 2604 OID 20929)
-- Name: discussion_threads id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.discussion_threads ALTER COLUMN id SET DEFAULT nextval('public.discussion_threads_id_seq'::regclass);


--
-- TOC entry 5552 (class 2604 OID 20286)
-- Name: email_logs id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.email_logs ALTER COLUMN id SET DEFAULT nextval('public.email_logs_id_seq'::regclass);


--
-- TOC entry 5462 (class 2604 OID 19210)
-- Name: email_templates id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.email_templates ALTER COLUMN id SET DEFAULT nextval('public.email_templates_id_seq'::regclass);


--
-- TOC entry 5496 (class 2604 OID 19557)
-- Name: enquiries id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.enquiries ALTER COLUMN id SET DEFAULT nextval('public.enquiries_id_seq'::regclass);


--
-- TOC entry 5544 (class 2604 OID 20142)
-- Name: enrollments id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.enrollments ALTER COLUMN id SET DEFAULT nextval('public.enrollments_id_seq'::regclass);


--
-- TOC entry 5452 (class 2604 OID 19079)
-- Name: exam_sessions id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.exam_sessions ALTER COLUMN id SET DEFAULT nextval('public.exam_sessions_id_seq'::regclass);


--
-- TOC entry 5712 (class 2604 OID 22418)
-- Name: field_activities id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.field_activities ALTER COLUMN id SET DEFAULT nextval('public.field_activities_id_seq'::regclass);


--
-- TOC entry 5722 (class 2604 OID 22557)
-- Name: flashcard_progress id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.flashcard_progress ALTER COLUMN id SET DEFAULT nextval('public.flashcard_progress_id_seq'::regclass);


--
-- TOC entry 5706 (class 2604 OID 22372)
-- Name: flashcards id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.flashcards ALTER COLUMN id SET DEFAULT nextval('public.flashcards_id_seq'::regclass);


--
-- TOC entry 5498 (class 2604 OID 19575)
-- Name: friendships id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.friendships ALTER COLUMN id SET DEFAULT nextval('public.friendships_id_seq'::regclass);


--
-- TOC entry 5697 (class 2604 OID 22231)
-- Name: ghost_login_alerts id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ghost_login_alerts ALTER COLUMN id SET DEFAULT nextval('public.ghost_login_alerts_id_seq'::regclass);


--
-- TOC entry 5698 (class 2604 OID 22260)
-- Name: grapho_books id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.grapho_books ALTER COLUMN id SET DEFAULT nextval('public.grapho_books_id_seq'::regclass);


--
-- TOC entry 5720 (class 2604 OID 22522)
-- Name: grapho_pages id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.grapho_pages ALTER COLUMN id SET DEFAULT nextval('public.grapho_pages_id_seq'::regclass);


--
-- TOC entry 5721 (class 2604 OID 22537)
-- Name: grapho_submissions id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.grapho_submissions ALTER COLUMN id SET DEFAULT nextval('public.grapho_submissions_id_seq'::regclass);


--
-- TOC entry 5581 (class 2604 OID 20602)
-- Name: graphotherapy_day_completions id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.graphotherapy_day_completions ALTER COLUMN id SET DEFAULT nextval('public.graphotherapy_day_completions_id_seq'::regclass);


--
-- TOC entry 5499 (class 2604 OID 19595)
-- Name: graphotherapy_progress id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.graphotherapy_progress ALTER COLUMN id SET DEFAULT nextval('public.graphotherapy_progress_id_seq'::regclass);


--
-- TOC entry 5615 (class 2604 OID 21127)
-- Name: group_memberships id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.group_memberships ALTER COLUMN id SET DEFAULT nextval('public.group_memberships_id_seq'::regclass);


--
-- TOC entry 5636 (class 2604 OID 21479)
-- Name: group_post_comments id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.group_post_comments ALTER COLUMN id SET DEFAULT nextval('public.group_post_comments_id_seq'::regclass);


--
-- TOC entry 5616 (class 2604 OID 21145)
-- Name: group_posts id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.group_posts ALTER COLUMN id SET DEFAULT nextval('public.group_posts_id_seq'::regclass);


--
-- TOC entry 5371 (class 2604 OID 18348)
-- Name: groups id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.groups ALTER COLUMN id SET DEFAULT nextval('public.groups_id_seq'::regclass);


--
-- TOC entry 5583 (class 2604 OID 20618)
-- Name: habit_logs id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.habit_logs ALTER COLUMN id SET DEFAULT nextval('public.habit_logs_id_seq'::regclass);


--
-- TOC entry 5506 (class 2604 OID 19664)
-- Name: habits id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.habits ALTER COLUMN id SET DEFAULT nextval('public.habits_id_seq'::regclass);


--
-- TOC entry 5432 (class 2604 OID 18828)
-- Name: handwriting_submissions id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.handwriting_submissions ALTER COLUMN id SET DEFAULT nextval('public.handwriting_submissions_id_seq'::regclass);


--
-- TOC entry 5555 (class 2604 OID 20336)
-- Name: instructor_analytics id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.instructor_analytics ALTER COLUMN id SET DEFAULT nextval('public.instructor_analytics_id_seq'::regclass);


--
-- TOC entry 5468 (class 2604 OID 19261)
-- Name: instructor_payment_info id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.instructor_payment_info ALTER COLUMN id SET DEFAULT nextval('public.instructor_payment_info_id_seq'::regclass);


--
-- TOC entry 5465 (class 2604 OID 19243)
-- Name: instructor_payouts id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.instructor_payouts ALTER COLUMN id SET DEFAULT nextval('public.instructor_payouts_id_seq'::regclass);


--
-- TOC entry 5664 (class 2604 OID 21841)
-- Name: invoices id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.invoices ALTER COLUMN id SET DEFAULT nextval('public.invoices_id_seq'::regclass);


--
-- TOC entry 5385 (class 2604 OID 18472)
-- Name: languages id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.languages ALTER COLUMN id SET DEFAULT nextval('public.languages_id_seq'::regclass);


--
-- TOC entry 5510 (class 2604 OID 19751)
-- Name: leads id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.leads ALTER COLUMN id SET DEFAULT nextval('public.leads_id_seq'::regclass);


--
-- TOC entry 5549 (class 2604 OID 20226)
-- Name: learning_groups id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.learning_groups ALTER COLUMN id SET DEFAULT nextval('public.learning_groups_id_seq'::regclass);


--
-- TOC entry 5440 (class 2604 OID 18923)
-- Name: learning_paths id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.learning_paths ALTER COLUMN id SET DEFAULT nextval('public.learning_paths_id_seq'::regclass);


--
-- TOC entry 5533 (class 2604 OID 19987)
-- Name: lesson_bookmarks id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.lesson_bookmarks ALTER COLUMN id SET DEFAULT nextval('public.lesson_bookmarks_id_seq'::regclass);


--
-- TOC entry 5419 (class 2604 OID 18679)
-- Name: lesson_drip_settings id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.lesson_drip_settings ALTER COLUMN id SET DEFAULT nextval('public.lesson_drip_settings_id_seq'::regclass);


--
-- TOC entry 5436 (class 2604 OID 18886)
-- Name: lesson_notes id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.lesson_notes ALTER COLUMN id SET DEFAULT nextval('public.lesson_notes_id_seq'::regclass);


--
-- TOC entry 5435 (class 2604 OID 18863)
-- Name: lesson_progress id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.lesson_progress ALTER COLUMN id SET DEFAULT nextval('public.lesson_progress_id_seq'::regclass);


--
-- TOC entry 5378 (class 2604 OID 18417)
-- Name: lessons id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.lessons ALTER COLUMN id SET DEFAULT nextval('public.lessons_id_seq'::regclass);


--
-- TOC entry 5608 (class 2604 OID 21010)
-- Name: live_class_attendance id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.live_class_attendance ALTER COLUMN id SET DEFAULT nextval('public.live_class_attendance_id_seq'::regclass);


--
-- TOC entry 5612 (class 2604 OID 21088)
-- Name: live_class_chat_messages id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.live_class_chat_messages ALTER COLUMN id SET DEFAULT nextval('public.live_class_chat_messages_id_seq'::regclass);


--
-- TOC entry 5634 (class 2604 OID 21430)
-- Name: live_class_poll_responses id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.live_class_poll_responses ALTER COLUMN id SET DEFAULT nextval('public.live_class_poll_responses_id_seq'::regclass);


--
-- TOC entry 5609 (class 2604 OID 21030)
-- Name: live_class_polls id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.live_class_polls ALTER COLUMN id SET DEFAULT nextval('public.live_class_polls_id_seq'::regclass);


--
-- TOC entry 5610 (class 2604 OID 21046)
-- Name: live_class_questions id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.live_class_questions ALTER COLUMN id SET DEFAULT nextval('public.live_class_questions_id_seq'::regclass);


--
-- TOC entry 5611 (class 2604 OID 21067)
-- Name: live_class_reactions id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.live_class_reactions ALTER COLUMN id SET DEFAULT nextval('public.live_class_reactions_id_seq'::regclass);


--
-- TOC entry 5539 (class 2604 OID 20056)
-- Name: live_classes id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.live_classes ALTER COLUMN id SET DEFAULT nextval('public.live_classes_id_seq'::regclass);


--
-- TOC entry 5521 (class 2604 OID 19844)
-- Name: marketing_workflows id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.marketing_workflows ALTER COLUMN id SET DEFAULT nextval('public.marketing_workflows_id_seq'::regclass);


--
-- TOC entry 5563 (class 2604 OID 20419)
-- Name: marketplace_listings id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.marketplace_listings ALTER COLUMN id SET DEFAULT nextval('public.marketplace_listings_id_seq'::regclass);


--
-- TOC entry 5524 (class 2604 OID 19875)
-- Name: meditation_day_completions id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.meditation_day_completions ALTER COLUMN id SET DEFAULT nextval('public.meditation_day_completions_id_seq'::regclass);


--
-- TOC entry 5682 (class 2604 OID 22136)
-- Name: meditation_experiences id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.meditation_experiences ALTER COLUMN id SET DEFAULT nextval('public.meditation_experiences_id_seq'::regclass);


--
-- TOC entry 5685 (class 2604 OID 22160)
-- Name: meditation_level_purchases id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.meditation_level_purchases ALTER COLUMN id SET DEFAULT nextval('public.meditation_level_purchases_id_seq'::regclass);


--
-- TOC entry 5592 (class 2604 OID 20802)
-- Name: meditation_process_completions id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.meditation_process_completions ALTER COLUMN id SET DEFAULT nextval('public.meditation_process_completions_id_seq'::regclass);


--
-- TOC entry 5372 (class 2604 OID 18359)
-- Name: meditation_processes id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.meditation_processes ALTER COLUMN id SET DEFAULT nextval('public.meditation_processes_id_seq'::regclass);


--
-- TOC entry 5427 (class 2604 OID 18783)
-- Name: meditation_progress id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.meditation_progress ALTER COLUMN id SET DEFAULT nextval('public.meditation_progress_id_seq'::regclass);


--
-- TOC entry 5429 (class 2604 OID 18797)
-- Name: meditation_sessions id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.meditation_sessions ALTER COLUMN id SET DEFAULT nextval('public.meditation_sessions_id_seq'::regclass);


--
-- TOC entry 5650 (class 2604 OID 21667)
-- Name: message_logs id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.message_logs ALTER COLUMN id SET DEFAULT nextval('public.message_logs_id_seq'::regclass);


--
-- TOC entry 5710 (class 2604 OID 22406)
-- Name: midnight_test_questions id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.midnight_test_questions ALTER COLUMN id SET DEFAULT nextval('public.midnight_test_questions_id_seq'::regclass);


--
-- TOC entry 5377 (class 2604 OID 18405)
-- Name: modules id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.modules ALTER COLUMN id SET DEFAULT nextval('public.modules_id_seq'::regclass);


--
-- TOC entry 5451 (class 2604 OID 19064)
-- Name: mood_entries id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.mood_entries ALTER COLUMN id SET DEFAULT nextval('public.mood_entries_id_seq'::regclass);


--
-- TOC entry 5460 (class 2604 OID 19176)
-- Name: notifications id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.notifications ALTER COLUMN id SET DEFAULT nextval('public.notifications_id_seq'::regclass);


--
-- TOC entry 5662 (class 2604 OID 21814)
-- Name: order_items id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.order_items ALTER COLUMN id SET DEFAULT nextval('public.order_items_id_seq'::regclass);


--
-- TOC entry 5645 (class 2604 OID 21609)
-- Name: orders id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders ALTER COLUMN id SET DEFAULT nextval('public.orders_id_seq'::regclass);


--
-- TOC entry 5403 (class 2604 OID 18576)
-- Name: organizations id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.organizations ALTER COLUMN id SET DEFAULT nextval('public.organizations_id_seq'::regclass);


--
-- TOC entry 5540 (class 2604 OID 20079)
-- Name: path_courses id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.path_courses ALTER COLUMN id SET DEFAULT nextval('public.path_courses_id_seq'::regclass);


--
-- TOC entry 5635 (class 2604 OID 21449)
-- Name: path_enrollments id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.path_enrollments ALTER COLUMN id SET DEFAULT nextval('public.path_enrollments_id_seq'::regclass);


--
-- TOC entry 5501 (class 2604 OID 19609)
-- Name: payment_methods id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.payment_methods ALTER COLUMN id SET DEFAULT nextval('public.payment_methods_id_seq'::regclass);


--
-- TOC entry 5632 (class 2604 OID 21399)
-- Name: peer_review_assignments id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.peer_review_assignments ALTER COLUMN id SET DEFAULT nextval('public.peer_review_assignments_id_seq'::regclass);


--
-- TOC entry 5656 (class 2604 OID 21751)
-- Name: peer_reviews id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.peer_reviews ALTER COLUMN id SET DEFAULT nextval('public.peer_reviews_id_seq'::regclass);


--
-- TOC entry 5369 (class 2604 OID 18334)
-- Name: permissions id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.permissions ALTER COLUMN id SET DEFAULT nextval('public.permissions_id_seq'::regclass);


--
-- TOC entry 5647 (class 2604 OID 21639)
-- Name: plagiarism_checks id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.plagiarism_checks ALTER COLUMN id SET DEFAULT nextval('public.plagiarism_checks_id_seq'::regclass);


--
-- TOC entry 5383 (class 2604 OID 18462)
-- Name: platform_analytics id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.platform_analytics ALTER COLUMN id SET DEFAULT nextval('public.platform_analytics_id_seq'::regclass);


--
-- TOC entry 5716 (class 2604 OID 22465)
-- Name: polity_chapter_tasks id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.polity_chapter_tasks ALTER COLUMN id SET DEFAULT nextval('public.polity_chapter_tasks_id_seq'::regclass);


--
-- TOC entry 5654 (class 2604 OID 21732)
-- Name: post_votes id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.post_votes ALTER COLUMN id SET DEFAULT nextval('public.post_votes_id_seq'::regclass);


--
-- TOC entry 5639 (class 2604 OID 21513)
-- Name: project_milestones id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.project_milestones ALTER COLUMN id SET DEFAULT nextval('public.project_milestones_id_seq'::regclass);


--
-- TOC entry 5660 (class 2604 OID 21788)
-- Name: project_submissions id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.project_submissions ALTER COLUMN id SET DEFAULT nextval('public.project_submissions_id_seq'::regclass);


--
-- TOC entry 5658 (class 2604 OID 21769)
-- Name: project_team_members id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.project_team_members ALTER COLUMN id SET DEFAULT nextval('public.project_team_members_id_seq'::regclass);


--
-- TOC entry 5637 (class 2604 OID 21499)
-- Name: project_teams id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.project_teams ALTER COLUMN id SET DEFAULT nextval('public.project_teams_id_seq'::regclass);


--
-- TOC entry 5537 (class 2604 OID 20034)
-- Name: question_banks id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.question_banks ALTER COLUMN id SET DEFAULT nextval('public.question_banks_id_seq'::regclass);


--
-- TOC entry 5445 (class 2604 OID 18999)
-- Name: question_options id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.question_options ALTER COLUMN id SET DEFAULT nextval('public.question_options_id_seq'::regclass);


--
-- TOC entry 5420 (class 2604 OID 18699)
-- Name: questions id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.questions ALTER COLUMN id SET DEFAULT nextval('public.questions_id_seq'::regclass);


--
-- TOC entry 5547 (class 2604 OID 20195)
-- Name: quiz_attempt_analytics id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.quiz_attempt_analytics ALTER COLUMN id SET DEFAULT nextval('public.quiz_attempt_analytics_id_seq'::regclass);


--
-- TOC entry 5446 (class 2604 OID 19014)
-- Name: quiz_attempts id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.quiz_attempts ALTER COLUMN id SET DEFAULT nextval('public.quiz_attempts_id_seq'::regclass);


--
-- TOC entry 5448 (class 2604 OID 19033)
-- Name: quiz_feedback id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.quiz_feedback ALTER COLUMN id SET DEFAULT nextval('public.quiz_feedback_id_seq'::regclass);


--
-- TOC entry 5606 (class 2604 OID 20991)
-- Name: quiz_question_pools id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.quiz_question_pools ALTER COLUMN id SET DEFAULT nextval('public.quiz_question_pools_id_seq'::regclass);


--
-- TOC entry 5703 (class 2604 OID 22332)
-- Name: quiz_results id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.quiz_results ALTER COLUMN id SET DEFAULT nextval('public.quiz_results_id_seq'::regclass);


--
-- TOC entry 5379 (class 2604 OID 18430)
-- Name: quizzes id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.quizzes ALTER COLUMN id SET DEFAULT nextval('public.quizzes_id_seq'::regclass);


--
-- TOC entry 5670 (class 2604 OID 21969)
-- Name: ras_plans id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ras_plans ALTER COLUMN id SET DEFAULT nextval('public.ras_plans_id_seq'::regclass);


--
-- TOC entry 5674 (class 2604 OID 21994)
-- Name: ras_recordings id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ras_recordings ALTER COLUMN id SET DEFAULT nextval('public.ras_recordings_id_seq'::regclass);


--
-- TOC entry 5676 (class 2604 OID 22014)
-- Name: ras_topic_progress id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ras_topic_progress ALTER COLUMN id SET DEFAULT nextval('public.ras_topic_progress_id_seq'::regclass);


--
-- TOC entry 5641 (class 2604 OID 21529)
-- Name: realtime_chat_messages id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.realtime_chat_messages ALTER COLUMN id SET DEFAULT nextval('public.realtime_chat_messages_id_seq'::regclass);


--
-- TOC entry 5382 (class 2604 OID 18453)
-- Name: realtime_user_presence id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.realtime_user_presence ALTER COLUMN id SET DEFAULT nextval('public.realtime_user_presence_id_seq'::regclass);


--
-- TOC entry 5724 (class 2604 OID 22578)
-- Name: retention_reviews id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.retention_reviews ALTER COLUMN id SET DEFAULT nextval('public.retention_reviews_id_seq'::regclass);


--
-- TOC entry 5561 (class 2604 OID 20398)
-- Name: revenue_shares id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.revenue_shares ALTER COLUMN id SET DEFAULT nextval('public.revenue_shares_id_seq'::regclass);


--
-- TOC entry 5565 (class 2604 OID 20436)
-- Name: revenue_transactions id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.revenue_transactions ALTER COLUMN id SET DEFAULT nextval('public.revenue_transactions_id_seq'::regclass);


--
-- TOC entry 5594 (class 2604 OID 20821)
-- Name: review_helpful id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.review_helpful ALTER COLUMN id SET DEFAULT nextval('public.review_helpful_id_seq'::regclass);


--
-- TOC entry 5726 (class 2604 OID 22599)
-- Name: revision_cycles id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.revision_cycles ALTER COLUMN id SET DEFAULT nextval('public.revision_cycles_id_seq'::regclass);


--
-- TOC entry 5374 (class 2604 OID 18370)
-- Name: rewards id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.rewards ALTER COLUMN id SET DEFAULT nextval('public.rewards_id_seq'::regclass);


--
-- TOC entry 5366 (class 2604 OID 18321)
-- Name: roles id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.roles ALTER COLUMN id SET DEFAULT nextval('public.roles_id_seq'::regclass);


--
-- TOC entry 5453 (class 2604 OID 19094)
-- Name: shadow_mode_sessions id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.shadow_mode_sessions ALTER COLUMN id SET DEFAULT nextval('public.shadow_mode_sessions_id_seq'::regclass);


--
-- TOC entry 5463 (class 2604 OID 19227)
-- Name: shopping_carts id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.shopping_carts ALTER COLUMN id SET DEFAULT nextval('public.shopping_carts_id_seq'::regclass);


--
-- TOC entry 5480 (class 2604 OID 19365)
-- Name: sso_audit_logs id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sso_audit_logs ALTER COLUMN id SET DEFAULT nextval('public.sso_audit_logs_id_seq'::regclass);


--
-- TOC entry 5421 (class 2604 OID 18714)
-- Name: sso_configs id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sso_configs ALTER COLUMN id SET DEFAULT nextval('public.sso_configs_id_seq'::regclass);


--
-- TOC entry 5477 (class 2604 OID 19340)
-- Name: sso_sessions id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sso_sessions ALTER COLUMN id SET DEFAULT nextval('public.sso_sessions_id_seq'::regclass);


--
-- TOC entry 5557 (class 2604 OID 20356)
-- Name: student_analytics id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.student_analytics ALTER COLUMN id SET DEFAULT nextval('public.student_analytics_id_seq'::regclass);


--
-- TOC entry 5545 (class 2604 OID 20169)
-- Name: student_answers id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.student_answers ALTER COLUMN id SET DEFAULT nextval('public.student_answers_id_seq'::regclass);


--
-- TOC entry 5718 (class 2604 OID 22477)
-- Name: student_nudge_history id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.student_nudge_history ALTER COLUMN id SET DEFAULT nextval('public.student_nudge_history_id_seq'::regclass);


--
-- TOC entry 5691 (class 2604 OID 22195)
-- Name: student_nudge_workflows id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.student_nudge_workflows ALTER COLUMN id SET DEFAULT nextval('public.student_nudge_workflows_id_seq'::regclass);


--
-- TOC entry 5454 (class 2604 OID 19110)
-- Name: study_groups id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.study_groups ALTER COLUMN id SET DEFAULT nextval('public.study_groups_id_seq'::regclass);


--
-- TOC entry 5381 (class 2604 OID 18442)
-- Name: study_rooms id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.study_rooms ALTER COLUMN id SET DEFAULT nextval('public.study_rooms_id_seq'::regclass);


--
-- TOC entry 5679 (class 2604 OID 22048)
-- Name: study_sessions id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.study_sessions ALTER COLUMN id SET DEFAULT nextval('public.study_sessions_id_seq'::regclass);


--
-- TOC entry 5598 (class 2604 OID 20909)
-- Name: submissions id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.submissions ALTER COLUMN id SET DEFAULT nextval('public.submissions_id_seq'::regclass);


--
-- TOC entry 5395 (class 2604 OID 18538)
-- Name: subscription_coupons id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.subscription_coupons ALTER COLUMN id SET DEFAULT nextval('public.subscription_coupons_id_seq'::regclass);


--
-- TOC entry 5567 (class 2604 OID 20468)
-- Name: subscription_invoices id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.subscription_invoices ALTER COLUMN id SET DEFAULT nextval('public.subscription_invoices_id_seq'::regclass);


--
-- TOC entry 5393 (class 2604 OID 18524)
-- Name: subscription_plans id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.subscription_plans ALTER COLUMN id SET DEFAULT nextval('public.subscription_plans_id_seq'::regclass);


--
-- TOC entry 5376 (class 2604 OID 18393)
-- Name: tags id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags ALTER COLUMN id SET DEFAULT nextval('public.tags_id_seq'::regclass);


--
-- TOC entry 5426 (class 2604 OID 18765)
-- Name: tasks id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tasks ALTER COLUMN id SET DEFAULT nextval('public.tasks_id_seq'::regclass);


--
-- TOC entry 5667 (class 2604 OID 21860)
-- Name: tax_calculations id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tax_calculations ALTER COLUMN id SET DEFAULT nextval('public.tax_calculations_id_seq'::regclass);


--
-- TOC entry 5503 (class 2604 OID 19626)
-- Name: tax_exemptions id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tax_exemptions ALTER COLUMN id SET DEFAULT nextval('public.tax_exemptions_id_seq'::regclass);


--
-- TOC entry 5408 (class 2604 OID 18614)
-- Name: tax_rates id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tax_rates ALTER COLUMN id SET DEFAULT nextval('public.tax_rates_id_seq'::regclass);


--
-- TOC entry 5734 (class 2604 OID 28388)
-- Name: thread_votes id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.thread_votes ALTER COLUMN id SET DEFAULT nextval('public.thread_votes_id_seq'::regclass);


--
-- TOC entry 5387 (class 2604 OID 18482)
-- Name: translations id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.translations ALTER COLUMN id SET DEFAULT nextval('public.translations_id_seq'::regclass);


--
-- TOC entry 5482 (class 2604 OID 19390)
-- Name: two_factor_auth id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.two_factor_auth ALTER COLUMN id SET DEFAULT nextval('public.two_factor_auth_id_seq'::regclass);


--
-- TOC entry 5580 (class 2604 OID 20582)
-- Name: two_factor_backup_codes id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.two_factor_backup_codes ALTER COLUMN id SET DEFAULT nextval('public.two_factor_backup_codes_id_seq'::regclass);


--
-- TOC entry 5732 (class 2604 OID 28139)
-- Name: universal_progress id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.universal_progress ALTER COLUMN id SET DEFAULT nextval('public.universal_progress_id_seq'::regclass);


--
-- TOC entry 5483 (class 2604 OID 19404)
-- Name: user_achievements id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_achievements ALTER COLUMN id SET DEFAULT nextval('public.user_achievements_id_seq'::regclass);


--
-- TOC entry 5455 (class 2604 OID 19126)
-- Name: user_activities id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_activities ALTER COLUMN id SET DEFAULT nextval('public.user_activities_id_seq'::regclass);


--
-- TOC entry 5736 (class 2604 OID 28412)
-- Name: user_activity_sessions id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_activity_sessions ALTER COLUMN id SET DEFAULT nextval('public.user_activity_sessions_id_seq'::regclass);


--
-- TOC entry 5485 (class 2604 OID 19425)
-- Name: user_challenges id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_challenges ALTER COLUMN id SET DEFAULT nextval('public.user_challenges_id_seq'::regclass);


--
-- TOC entry 5461 (class 2604 OID 19196)
-- Name: user_email_preferences id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_email_preferences ALTER COLUMN id SET DEFAULT nextval('public.user_email_preferences_id_seq'::regclass);


--
-- TOC entry 5391 (class 2604 OID 18514)
-- Name: user_language_preferences id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_language_preferences ALTER COLUMN id SET DEFAULT nextval('public.user_language_preferences_id_seq'::regclass);


--
-- TOC entry 5514 (class 2604 OID 19789)
-- Name: user_permissions id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_permissions ALTER COLUMN id SET DEFAULT nextval('public.user_permissions_id_seq'::regclass);


--
-- TOC entry 5456 (class 2604 OID 19142)
-- Name: user_preferences id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_preferences ALTER COLUMN id SET DEFAULT nextval('public.user_preferences_id_seq'::regclass);


--
-- TOC entry 5434 (class 2604 OID 18845)
-- Name: user_rewards id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_rewards ALTER COLUMN id SET DEFAULT nextval('public.user_rewards_id_seq'::regclass);


--
-- TOC entry 5516 (class 2604 OID 19806)
-- Name: user_sessions id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_sessions ALTER COLUMN id SET DEFAULT nextval('public.user_sessions_id_seq'::regclass);


--
-- TOC entry 5470 (class 2604 OID 19278)
-- Name: user_subscriptions id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_subscriptions ALTER COLUMN id SET DEFAULT nextval('public.user_subscriptions_id_seq'::regclass);


--
-- TOC entry 5708 (class 2604 OID 22390)
-- Name: user_topic_logs id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_topic_logs ALTER COLUMN id SET DEFAULT nextval('public.user_topic_logs_id_seq'::regclass);


--
-- TOC entry 5411 (class 2604 OID 18652)
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- TOC entry 5727 (class 2604 OID 22621)
-- Name: voice_notes id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.voice_notes ALTER COLUMN id SET DEFAULT nextval('public.voice_notes_id_seq'::regclass);


--
-- TOC entry 5624 (class 2604 OID 21284)
-- Name: workflow_executions id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.workflow_executions ALTER COLUMN id SET DEFAULT nextval('public.workflow_executions_id_seq'::regclass);


--
-- TOC entry 5584 (class 2604 OID 20680)
-- Name: workflow_steps id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.workflow_steps ALTER COLUMN id SET DEFAULT nextval('public.workflow_steps_id_seq'::regclass);


--
-- TOC entry 7273 (class 0 OID 18586)
-- Dependencies: 262
-- Data for Name: achievements; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.achievements (id, name, description, category, rarity, icon, coin_reward, unlock_condition, is_hidden, is_active, display_order, created_at, updated_at) FROM stdin;
\.


--
-- TOC entry 7298 (class 0 OID 18808)
-- Dependencies: 287
-- Data for Name: activity_logs; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.activity_logs (id, user_id, action, details, "timestamp", ip_address, user_agent) FROM stdin;
1	1	login	Login attempt from 169.254.172.3	2026-02-03 18:30:41.732056	169.254.172.3	Mozilla/5.0 (Windows NT; Windows NT 10.0; en-US) WindowsPowerShell/5.1.26100.7462
2	1	login	Login attempt from 169.254.172.2	2026-02-03 18:45:24.864951	169.254.172.2	Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Mobile Safari/537.36
3	11	login	Login attempt from 169.254.172.2	2026-02-04 00:28:46.992893	169.254.172.2	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Safari/537.36 HeyTapBrowser/45.13.6.1 Chrome/125.0.6422.72
4	1	login	Login attempt from 169.254.172.2	2026-02-04 01:36:29.353162	169.254.172.2	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36
5	3	login	Login attempt from 169.254.172.2	2026-02-04 02:10:31.684731	169.254.172.2	Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Mobile Safari/537.36
6	12	login	Login attempt from 169.254.172.2	2026-02-04 02:22:48.993497	169.254.172.2	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36
7	1	interaction	Monsoon Viz: Switched to summer	2026-02-04 03:35:00.529379	\N	\N
8	1	interaction	Monsoon Viz: Switched to winter	2026-02-04 03:35:05.918533	\N	\N
9	1	interaction	Monsoon Viz: Switched to retreat	2026-02-04 03:35:09.436726	\N	\N
10	1	complete_topic	origin-universe	2026-02-04 06:35:33.12255	\N	\N
11	1	complete_topic	geo-time-scale	2026-02-04 06:35:58.939435	\N	\N
12	1	start_visual_module	Polity Viz: parliament	2026-02-04 14:30:57.568949	\N	\N
13	1	start_visual_module	Polity Viz: preamble	2026-02-04 14:31:03.347091	\N	\N
14	1	start_visual_module	Polity Viz: judiciary	2026-02-04 14:31:11.36764	\N	\N
15	1	start_visual_module	Polity Viz: ethics	2026-02-04 14:32:04.291871	\N	\N
16	1	start_visual_module	Polity Viz: thinkers	2026-02-04 14:32:17.308923	\N	\N
17	1	start_visual_module	Opened Map: Gupta Empire (400 CE) (gupta-empire)	2026-02-04 14:34:21.611844	\N	\N
18	11	login	Login attempt from 169.254.172.2	2026-02-04 23:27:40.148666	169.254.172.2	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Safari/537.36 HeyTapBrowser/45.13.7.4 Chrome/125.0.6422.72
19	1	login	Login attempt from 169.254.172.3	2026-02-05 06:28:33.172458	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36
20	1	start_visual_module	Polity Viz: parliament	2026-02-05 06:34:53.985417	\N	\N
21	11	login	Login attempt from 169.254.172.3	2026-02-05 07:01:42.335857	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36
22	11	login	Login attempt from 169.254.172.3	2026-02-05 07:01:43.532142	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36
23	1	login	Login attempt from 169.254.172.3	2026-02-05 07:07:23.205211	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36
24	1	login	Login attempt from 169.254.172.3	2026-02-05 07:22:15.18483	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36
25	1	start_visual_module	Opened Map: Mauryan Empire (250 BCE) (mauryan-empire)	2026-02-05 14:03:02.054356	\N	\N
26	11	login	Login attempt from 169.254.172.3	2026-02-05 15:37:55.679963	169.254.172.3	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Safari/537.36 HeyTapBrowser/45.13.7.4 Chrome/125.0.6422.72
27	11	login	Login attempt from 169.254.172.3	2026-02-05 22:46:19.718271	169.254.172.3	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Safari/537.36 HeyTapBrowser/45.13.7.4 Chrome/125.0.6422.72
28	11	login	Login attempt from 169.254.172.3	2026-02-06 22:35:02.446854	169.254.172.3	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Safari/537.36 HeyTapBrowser/45.13.7.4 Chrome/125.0.6422.72
29	9	login	Login attempt from 169.254.172.3	2026-02-07 02:10:57.838494	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36
30	9	login	Login attempt from 169.254.172.3	2026-02-07 02:11:00.54143	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36
31	2	login	Login attempt from 169.254.172.3	2026-02-08 06:12:22.626155	169.254.172.3	Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Mobile Safari/537.36
32	2	login	Login attempt from 169.254.172.3	2026-02-08 06:12:25.305448	169.254.172.3	Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Mobile Safari/537.36
33	2	login	Login attempt from 169.254.172.3	2026-02-08 06:12:25.483868	169.254.172.3	Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Mobile Safari/537.36
34	2	login	Login attempt from 169.254.172.3	2026-02-08 06:12:25.694074	169.254.172.3	Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Mobile Safari/537.36
35	1	interaction	Monsoon Viz: Switched to summer	2026-02-09 10:48:49.375327	\N	\N
36	1	interaction	Monsoon Viz: Switched to winter	2026-02-09 10:48:49.969447	\N	\N
37	1	interaction	Monsoon Viz: Switched to swMonsoon	2026-02-09 10:48:52.016236	\N	\N
38	1	interaction	Monsoon Viz: Switched to retreat	2026-02-09 10:48:52.671329	\N	\N
39	11	login	Login attempt from 169.254.172.3	2026-02-09 23:57:06.369906	169.254.172.3	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Safari/537.36 HeyTapBrowser/45.13.7.4 Chrome/125.0.6422.72
40	12	login	Login attempt from 169.254.172.3	2026-02-11 02:42:02.896107	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36
41	11	login	Login attempt from 169.254.172.3	2026-02-11 23:53:02.406089	169.254.172.3	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Safari/537.36 HeyTapBrowser/45.13.7.4 Chrome/125.0.6422.72
42	1	login	Login attempt from 169.254.172.3	2026-02-12 07:25:31.925791	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36
43	11	login	Login attempt from 169.254.172.3	2026-02-13 00:34:05.470533	169.254.172.3	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Safari/537.36 HeyTapBrowser/45.13.8.1 Chrome/125.0.6422.72
44	11	login	Login attempt from 169.254.172.3	2026-02-13 00:34:07.133167	169.254.172.3	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Safari/537.36 HeyTapBrowser/45.13.8.1 Chrome/125.0.6422.72
45	9	login	Login attempt from 169.254.172.3	2026-02-14 03:29:34.105205	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36
46	9	login	Login attempt from 169.254.172.3	2026-02-14 03:29:35.47356	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36
47	1	complete_topic	origin-earth	2026-02-15 02:45:12.96112	\N	\N
48	9	login	Login attempt from 169.254.172.3	2026-02-15 03:21:15.015936	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36
49	9	login	Login attempt from 169.254.172.3	2026-02-15 03:21:16.107814	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36
50	11	login	Login attempt from 169.254.172.3	2026-02-15 23:25:34.116033	169.254.172.3	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Safari/537.36 HeyTapBrowser/45.13.8.1 Chrome/125.0.6422.72
51	11	login	Login attempt from 169.254.172.3	2026-02-16 23:30:49.467362	169.254.172.3	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Safari/537.36 HeyTapBrowser/45.13.8.1 Chrome/125.0.6422.72
52	1	login	Login attempt from 169.254.172.3	2026-02-17 07:32:46.530929	169.254.172.3	curl/8.16.0
53	1	login	Login attempt from 169.254.172.3	2026-02-17 07:34:27.199049	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36
54	9	login	Login attempt from 169.254.172.3	2026-02-17 08:07:49.562366	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36
55	9	login	Login attempt from 169.254.172.3	2026-02-17 08:07:49.795131	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36
56	9	login	Login attempt from 169.254.172.3	2026-02-17 08:07:51.29697	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36
57	1	login	Login attempt from 169.254.172.3	2026-02-17 08:30:21.608293	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36
58	11	login	Login attempt from 169.254.172.3	2026-02-17 08:58:10.146564	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36
59	1	login	Login attempt from 169.254.172.3	2026-02-17 09:20:33.374583	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36
60	1	login	Login attempt from 169.254.172.3	2026-02-18 03:31:09.722345	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36
61	12	login	Login attempt from 169.254.172.3	2026-02-18 04:27:20.713656	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36
62	2	login	Login attempt from 169.254.172.3	2026-02-22 13:08:53.186201	169.254.172.3	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36
63	11	login	Login attempt from 169.254.172.3	2026-02-22 23:33:20.256324	169.254.172.3	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Safari/537.36 HeyTapBrowser/45.13.8.1 Chrome/125.0.6422.72
64	3	login	Login attempt from 169.254.172.3	2026-02-24 09:28:45.381019	169.254.172.3	Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Mobile Safari/537.36
65	3	login	Login attempt from 169.254.172.3	2026-02-24 09:30:25.708079	169.254.172.3	Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Mobile Safari/537.36
66	1	login	Login attempt from 169.254.172.3	2026-02-25 04:01:19.303306	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36
67	9	login	Login attempt from 169.254.172.3	2026-02-25 05:24:52.222107	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36
68	12	login	Login attempt from 169.254.172.3	2026-02-25 11:09:46.53439	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36
69	1	login	Login attempt from 169.254.172.3	2026-02-27 02:32:51.542221	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36
70	1	login	Login attempt from 169.254.172.3	2026-02-27 15:50:51.724116	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36
71	1	login	Login attempt from 169.254.172.3	2026-02-28 02:40:33.322605	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36
72	1	login	Login attempt from 169.254.172.3	2026-02-28 02:45:35.990559	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36
73	1	login	Login attempt from 169.254.172.3	2026-02-28 02:45:54.895908	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36
74	1	login	Login attempt from 169.254.172.3	2026-02-28 02:49:36.846874	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36
75	1	login	Login attempt from 169.254.172.3	2026-02-28 02:52:02.532652	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36
76	1	login	Login attempt from 169.254.172.2	2026-02-28 03:10:44.084748	169.254.172.2	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36
77	23	login	Login attempt from 169.254.172.2	2026-02-28 05:26:14.455649	169.254.172.2	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36
78	24	login	Login attempt from 169.254.172.2	2026-02-28 05:26:41.413835	169.254.172.2	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36
79	1	login	Login attempt from 169.254.172.2	2026-03-04 11:32:17.753614	169.254.172.2	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36
80	12	login	Login attempt from 169.254.172.2	2026-03-05 03:07:33.863461	169.254.172.2	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36
81	9	login	Login attempt from 169.254.172.2	2026-03-05 04:39:00.510102	169.254.172.2	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36
82	12	login	Login attempt from 169.254.172.2	2026-03-05 14:24:40.077995	169.254.172.2	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36
83	12	login	Login attempt from 169.254.172.2	2026-03-05 14:24:41.104909	169.254.172.2	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36
84	12	login	Login attempt from 169.254.172.2	2026-03-05 14:24:42.343344	169.254.172.2	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36
85	12	login	Login attempt from 169.254.172.2	2026-03-05 14:24:43.343629	169.254.172.2	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36
86	12	login	Login attempt from 169.254.172.2	2026-03-05 14:24:44.731405	169.254.172.2	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36
87	1	complete_topic	industry-transport	2026-03-06 15:35:38.584137	\N	\N
88	1	login	Login attempt from 169.254.172.3	2026-03-07 12:29:35.075514	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36
89	1	start_visual_module	Opened Map: Gupta Empire (400 CE) (gupta-empire)	2026-03-08 18:14:44.803514	\N	\N
90	1	start_visual_module	Opened Map: Indus Valley Civilization (indus-valley)	2026-03-08 18:14:53.806783	\N	\N
91	1	start_visual_module	Opened Map: Mauryan Empire (250 BCE) (mauryan-empire)	2026-03-08 18:14:58.963347	\N	\N
92	1	start_visual_module	Opened Map: Mauryan Empire (250 BCE) (mauryan-empire)	2026-03-09 13:41:25.47153	\N	\N
93	1	interaction	Monsoon Viz: Switched to summer	2026-03-12 10:13:12.621681	\N	\N
94	1	interaction	Monsoon Viz: Switched to winter	2026-03-12 10:13:15.567601	\N	\N
95	1	interaction	Monsoon Viz: Switched to summer	2026-03-12 10:13:17.310025	\N	\N
96	1	interaction	Monsoon Viz: Switched to swMonsoon	2026-03-12 10:13:20.075247	\N	\N
97	1	interaction	Monsoon Viz: Switched to retreat	2026-03-12 10:13:20.691169	\N	\N
98	1	interaction	Monsoon Viz: Switched to summer	2026-03-12 10:13:32.58592	\N	\N
99	1	interaction	Monsoon Viz: Switched to winter	2026-03-12 10:13:33.597263	\N	\N
100	1	interaction	Monsoon Viz: Switched to retreat	2026-03-13 02:46:49.681512	\N	\N
101	1	interaction	Monsoon Viz: Switched to winter	2026-03-13 02:46:55.643778	\N	\N
102	1	interaction	Monsoon Viz: Switched to summer	2026-03-13 02:47:00.94432	\N	\N
103	1	interaction	Monsoon Viz: Switched to swMonsoon	2026-03-13 02:47:02.698152	\N	\N
104	1	start_visual_module	Science Viz: orbits	2026-03-13 03:10:16.268717	\N	\N
105	1	start_visual_module	Science Viz: tech-tree	2026-03-13 03:10:31.178387	\N	\N
106	1	start_visual_module	Science Viz: tech-tree	2026-03-13 03:10:34.225809	\N	\N
107	1	start_visual_module	Science Viz: defense	2026-03-13 03:10:36.354874	\N	\N
108	9	login	Login attempt from 169.254.172.3	2026-03-13 03:22:43.695598	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
109	11	login	Login attempt from 169.254.172.3	2026-03-13 03:37:11.052169	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
110	1	login	Login attempt from 169.254.172.3	2026-03-13 03:42:59.33587	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
111	25	login	Login attempt from 169.254.172.3	2026-03-13 12:39:21.090528	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
112	26	login	Login attempt from 169.254.172.3	2026-03-13 12:40:31.346693	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
113	12	login	Login attempt from 169.254.172.3	2026-03-13 13:41:31.567499	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36
114	12	login	Login attempt from 169.254.172.3	2026-03-13 13:41:32.763227	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36
115	1	login	Login attempt from 169.254.172.2	2026-03-15 06:51:32.317185	169.254.172.2	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
116	12	login	Login attempt from 169.254.172.2	2026-03-15 07:13:34.740302	169.254.172.2	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36
117	12	login	Login attempt from 169.254.172.2	2026-03-15 07:13:36.481411	169.254.172.2	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36
118	1	login	Login attempt from 169.254.172.3	2026-03-15 08:34:03.219417	169.254.172.3	Mozilla/5.0 (Windows NT; Windows NT 10.0; en-US) WindowsPowerShell/5.1.26100.7920
119	1	login	Login attempt from 169.254.172.2	2026-03-15 08:58:08.636986	169.254.172.2	Mozilla/5.0 (Windows NT; Windows NT 10.0; en-US) WindowsPowerShell/5.1.26100.7920
120	1	login	Login attempt from 169.254.172.2	2026-03-15 08:59:23.007108	169.254.172.2	Mozilla/5.0 (Windows NT; Windows NT 10.0; en-US) WindowsPowerShell/5.1.26100.7920
121	1	login	Login attempt from 169.254.172.2	2026-03-15 10:26:58.432017	169.254.172.2	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
122	1	interaction	Monsoon Viz: Switched to retreat	2026-03-15 10:32:15.001449	\N	\N
123	1	interaction	Monsoon Viz: Switched to summer	2026-03-15 10:32:15.271886	\N	\N
124	1	interaction	Monsoon Viz: Switched to winter	2026-03-15 10:32:16.536983	\N	\N
125	1	interaction	Monsoon Viz: Switched to summer	2026-03-15 10:32:18.30866	\N	\N
126	1	interaction	Monsoon Viz: Switched to swMonsoon	2026-03-15 10:32:18.880119	\N	\N
127	1	interaction	Monsoon Viz: Switched to retreat	2026-03-15 10:32:20.196296	\N	\N
128	1	start_visual_module	Science Viz: orbits	2026-03-15 10:47:44.739134	\N	\N
129	1	login	Login attempt from 169.254.172.3	2026-03-15 12:05:26.915902	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
130	1	login	Login attempt from 169.254.172.3	2026-03-15 12:08:12.588178	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
131	1	login	Login attempt from 169.254.172.3	2026-03-15 12:09:40.431059	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
132	1	login	Login attempt from 169.254.172.3	2026-03-15 12:10:20.61663	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
133	1	login	Login attempt from 169.254.172.3	2026-03-15 12:11:28.952171	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
134	1	login	Login attempt from 169.254.172.3	2026-03-15 12:11:40.954021	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
135	1	login	Login attempt from 169.254.172.3	2026-03-15 12:18:32.206246	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
136	1	login	Login attempt from 169.254.172.2	2026-03-15 12:48:56.133731	169.254.172.2	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
137	1	login	Login attempt from 169.254.172.2	2026-03-15 12:49:09.324854	169.254.172.2	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
138	1	login	Login attempt from 169.254.172.2	2026-03-15 12:49:21.377911	169.254.172.2	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
139	1	login	Login attempt from 169.254.172.2	2026-03-15 12:51:37.779728	169.254.172.2	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
140	1	login	Login attempt from 169.254.172.2	2026-03-15 12:51:42.51193	169.254.172.2	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
141	1	login	Login attempt from 169.254.172.2	2026-03-15 12:51:51.068287	169.254.172.2	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
142	27	login	Login attempt from 169.254.172.2	2026-03-15 14:18:40.588145	169.254.172.2	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
143	1	login	Login attempt from 169.254.172.3	2026-03-15 14:25:52.953761	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
144	1	login	Login attempt from 169.254.172.3	2026-03-15 14:27:21.794329	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
145	1	login	Login attempt from 169.254.172.3	2026-03-15 14:30:52.28368	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
146	1	login	Login attempt from 169.254.172.3	2026-03-15 14:42:49.56647	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
147	1	login	Login attempt from 169.254.172.3	2026-03-15 14:42:52.623978	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
148	17	login	Login attempt from 169.254.172.3	2026-03-15 14:46:40.253257	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
149	17	login	Login attempt from 169.254.172.3	2026-03-15 14:46:56.43188	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
150	17	login	Login attempt from 169.254.172.3	2026-03-15 14:47:15.889572	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
151	17	login	Login attempt from 169.254.172.3	2026-03-15 14:54:40.032884	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
152	17	login	Login attempt from 169.254.172.3	2026-03-15 14:54:55.473828	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
153	17	login	Login attempt from 169.254.172.3	2026-03-15 14:55:28.236969	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
154	28	login	Login attempt from 169.254.172.3	2026-03-15 17:59:48.135995	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
155	1	login	Login attempt from 169.254.172.2	2026-03-15 19:08:21.488902	169.254.172.2	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
156	1	login	Login attempt from 169.254.172.2	2026-03-15 19:46:31.548011	169.254.172.2	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
157	28	login	Login attempt from 169.254.172.2	2026-03-16 11:05:55.879066	169.254.172.2	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
158	29	login	Login attempt from 169.254.172.2	2026-03-16 11:23:37.900149	169.254.172.2	Mozilla/5.0 (Linux; U; Android 14; en-gb; CPH2569 Build/UKQ1.230924.001) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.5970.168 Mobile Safari/537.36 HeyTapBrowser/45.13.9.1
159	29	login	Login attempt from 169.254.172.2	2026-03-16 11:23:38.681696	169.254.172.2	Mozilla/5.0 (Linux; U; Android 14; en-gb; CPH2569 Build/UKQ1.230924.001) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.5970.168 Mobile Safari/537.36 HeyTapBrowser/45.13.9.1
160	29	login	Login attempt from 169.254.172.2	2026-03-16 11:23:39.539088	169.254.172.2	Mozilla/5.0 (Linux; U; Android 14; en-gb; CPH2569 Build/UKQ1.230924.001) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.5970.168 Mobile Safari/537.36 HeyTapBrowser/45.13.9.1
161	29	login	Login attempt from 169.254.172.2	2026-03-16 11:23:39.844943	169.254.172.2	Mozilla/5.0 (Linux; U; Android 14; en-gb; CPH2569 Build/UKQ1.230924.001) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.5970.168 Mobile Safari/537.36 HeyTapBrowser/45.13.9.1
162	29	login	Login attempt from 169.254.172.3	2026-03-16 11:41:55.518465	169.254.172.3	Mozilla/5.0 (Linux; U; Android 14; en-gb; CPH2569 Build/UKQ1.230924.001) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.5970.168 Mobile Safari/537.36 HeyTapBrowser/45.13.9.1
163	29	login	Login attempt from 169.254.172.3	2026-03-16 11:42:50.547469	169.254.172.3	Mozilla/5.0 (Linux; U; Android 14; en-gb; CPH2569 Build/UKQ1.230924.001) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.5970.168 Mobile Safari/537.36 HeyTapBrowser/45.13.9.1
164	29	login	Login attempt from 169.254.172.2	2026-03-16 12:55:45.585677	169.254.172.2	curl/8.18.0
165	29	login	Login attempt from 169.254.172.3	2026-03-16 13:04:38.98571	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
166	29	login	Login attempt from 169.254.172.3	2026-03-16 13:04:51.549352	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
167	1	login	Login attempt from 169.254.172.3	2026-03-16 13:12:58.741756	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
168	1	login	Login attempt from 169.254.172.3	2026-03-16 13:13:04.667813	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
169	1	login	Login attempt from 169.254.172.3	2026-03-16 13:21:36.274289	169.254.172.3	Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
170	1	login	Login attempt from 169.254.172.3	2026-03-16 13:21:37.819861	169.254.172.3	Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
171	29	login	Login attempt from 169.254.172.2	2026-03-16 13:41:38.227686	169.254.172.2	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
172	29	login	Login attempt from 169.254.172.3	2026-03-16 15:24:40.169672	169.254.172.3	Mozilla/5.0 (Linux; U; Android 14; en-gb; CPH2569 Build/UKQ1.230924.001) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.5970.168 Mobile Safari/537.36 HeyTapBrowser/45.13.9.1
173	1	login	Login attempt from 169.254.172.3	2026-03-17 05:39:29.56947	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
174	1	login	Login attempt from 169.254.172.3	2026-03-17 05:40:40.352362	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
175	1	login	Login attempt from 169.254.172.3	2026-03-17 06:07:44.172995	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
177	1	login	Login attempt from 169.254.172.3	2026-03-17 06:10:58.802652	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
178	1	login	Login attempt from 169.254.172.3	2026-03-17 06:19:51.352489	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
176	1	login	Login attempt from 169.254.172.3	2026-03-17 06:08:47.272351	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
179	1	login	Login attempt from 169.254.172.3	2026-03-17 06:30:10.402627	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
180	1	login	Login attempt from 169.254.172.3	2026-03-17 07:37:44.094635	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
\.


--
-- TOC entry 7370 (class 0 OID 19464)
-- Dependencies: 359
-- Data for Name: admin_logs; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.admin_logs (id, admin_id, action, target_type, target_id, details, ip_address, created_at) FROM stdin;
1	1	update_access	user	9	Updated access for dikshajakhar0212@gmail.com: Batch1=True, Batch2=False, RAS=False	\N	2026-02-04 03:46:12.93188
2	1	delete_user	user	13	Deleted user aitester123@gmail.com	\N	2026-02-11 12:38:41.085924
3	1	delete_user	user	16	Deleted user verifystudent999@example.com	\N	2026-02-11 12:39:02.844971
\.


--
-- TOC entry 7468 (class 0 OID 20487)
-- Dependencies: 457
-- Data for Name: affiliate_clicks; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.affiliate_clicks (id, affiliate_id, referral_code, ip_address, user_agent, referrer_url, landing_url, tracking_cookie, cookie_expires_at, converted, converted_at, conversion_value, country, city, created_at) FROM stdin;
\.


--
-- TOC entry 7532 (class 0 OID 21233)
-- Dependencies: 521
-- Data for Name: affiliate_commissions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.affiliate_commissions (id, affiliate_id, referral_id, amount, currency, commission_type, status, payout_id, paid_at, description, created_at, updated_at) FROM stdin;
\.


--
-- TOC entry 7354 (class 0 OID 19298)
-- Dependencies: 343
-- Data for Name: affiliate_partners; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.affiliate_partners (id, user_id, referral_code, custom_slug, commission_percentage, commission_tier, total_earnings, pending_earnings, paid_earnings, total_clicks, total_conversions, conversion_rate, status, is_verified, minimum_payout, payout_method, payout_email, last_click_date, last_conversion_date, last_payout_date, notes, created_at, updated_at) FROM stdin;
\.


--
-- TOC entry 7472 (class 0 OID 20528)
-- Dependencies: 461
-- Data for Name: affiliate_payouts; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.affiliate_payouts (id, affiliate_id, amount, currency, payment_method, payment_details, status, paypal_transaction_id, transaction_id, requested_at, processed_at, completed_at, admin_notes, failure_reason, created_at, updated_at, cashfree_transfer_id) FROM stdin;
\.


--
-- TOC entry 7470 (class 0 OID 20506)
-- Dependencies: 459
-- Data for Name: affiliate_referrals; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.affiliate_referrals (id, affiliate_id, referred_user_id, referral_code, tracking_cookie, purchase_type, purchase_id, purchase_amount, commission_percentage, commission_amount, commission_status, payment_id, first_click_date, conversion_date, is_refunded, refunded_at, created_at, updated_at) FROM stdin;
\.


--
-- TOC entry 7372 (class 0 OID 19482)
-- Dependencies: 361
-- Data for Name: ai_avatars; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.ai_avatars (id, user_id, name, description, purpose, personality, tone, response_style, knowledge_base, is_active, created_at, updated_at) FROM stdin;
\.


--
-- TOC entry 7625 (class 0 OID 22354)
-- Dependencies: 614
-- Data for Name: ai_coaching_sessions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.ai_coaching_sessions (id, user_id, topic, context_data, messages, status, created_at, updated_at) FROM stdin;
\.


--
-- TOC entry 7338 (class 0 OID 19156)
-- Dependencies: 327
-- Data for Name: ai_conversations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.ai_conversations (id, user_id, title, context, messages, created_at, updated_at) FROM stdin;
\.


--
-- TOC entry 7397 (class 0 OID 19719)
-- Dependencies: 386
-- Data for Name: ai_debug_logs; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.ai_debug_logs (id, session_id, student_id, created_at, step_number, step_name, step_description, input_summary, input_full, output_summary, output_full, model_used, provider, tokens_used, estimated_cost, duration_ms, success, is_fallback, error_message, context_type, related_entity_id) FROM stdin;
\.


--
-- TOC entry 7398 (class 0 OID 19733)
-- Dependencies: 387
-- Data for Name: ai_debug_sessions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.ai_debug_sessions (id, session_id, student_id, created_at, completed_at, operation_type, operation_status, total_steps, total_tokens, total_duration_ms, total_cost, final_result_summary, had_errors, had_fallbacks) FROM stdin;
\.


--
-- TOC entry 7656 (class 0 OID 27914)
-- Dependencies: 645
-- Data for Name: ai_evaluation_logs; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.ai_evaluation_logs (id, submission_id, ai_score, ai_feedback_json, teacher_approved_score, status, evaluated_at) FROM stdin;
\.


--
-- TOC entry 7474 (class 0 OID 20546)
-- Dependencies: 463
-- Data for Name: ai_generated_quizzes; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.ai_generated_quizzes (id, course_id, lesson_id, quiz_id, source_content, difficulty_level, num_questions, question_types, questions, quality_score, instructor_rating, used_in_course, review_notes, model_used, generation_cost, generation_time, created_by, created_at, updated_at) FROM stdin;
\.


--
-- TOC entry 7520 (class 0 OID 21106)
-- Dependencies: 509
-- Data for Name: ai_grading_results; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.ai_grading_results (id, student_answer_id, ai_score, ai_feedback, confidence, rubric_scores, needs_manual_review, instructor_override_score, instructor_feedback, reviewed_by_instructor, model_used, grading_time_seconds, created_at, updated_at) FROM stdin;
\.


--
-- TOC entry 7619 (class 0 OID 22314)
-- Dependencies: 608
-- Data for Name: ai_planning_sessions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.ai_planning_sessions (id, days_analyzed, plan_items, insights, request_params, generated_by, created_at) FROM stdin;
\.


--
-- TOC entry 7356 (class 0 OID 19318)
-- Dependencies: 345
-- Data for Name: ai_usage_logs; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.ai_usage_logs (id, user_id, feature, model_used, tokens_used, estimated_cost, request_data, response_time, success, error_message, created_at) FROM stdin;
\.


--
-- TOC entry 7586 (class 0 OID 22005)
-- Dependencies: 575
-- Data for Name: alembic_version; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.alembic_version (version_num) FROM stdin;
eaf9a7586267
\.


--
-- TOC entry 7458 (class 0 OID 20372)
-- Dependencies: 447
-- Data for Name: analytics_events; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.analytics_events (id, event_type, user_id, course_id, event_data, session_id, ip_address, user_agent, "timestamp") FROM stdin;
1	view_page	12	\N	{"details": "/dashboard"}	\N	\N	\N	2026-02-19 13:49:01.255354+00
2	view_page	9	\N	{"details": "/dashboard"}	\N	\N	\N	2026-02-22 02:37:09.923792+00
3	view_page	1	\N	{"details": "/admin"}	\N	\N	\N	2026-03-17 06:03:04.664784+00
\.


--
-- TOC entry 7505 (class 0 OID 20954)
-- Dependencies: 494
-- Data for Name: announcement_reads; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.announcement_reads (id, announcement_id, user_id, read_at) FROM stdin;
\.


--
-- TOC entry 7324 (class 0 OID 19045)
-- Dependencies: 313
-- Data for Name: assessment_rubrics; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.assessment_rubrics (id, question_id, criteria_name, max_points, description, order_index, levels, created_at) FROM stdin;
\.


--
-- TOC entry 7374 (class 0 OID 19498)
-- Dependencies: 363
-- Data for Name: assets; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.assets (id, filename, original_name, file_type, url, size, mime_type, user_id, created_at) FROM stdin;
\.


--
-- TOC entry 7418 (class 0 OID 19925)
-- Dependencies: 407
-- Data for Name: assignments; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.assignments (id, title, description, course_id, lesson_id, max_points, due_date, allow_late_submission, late_penalty_per_day, is_published, file_upload_required, allowed_file_types, max_file_size_mb, created_at, updated_at) FROM stdin;
\.


--
-- TOC entry 7613 (class 0 OID 22268)
-- Dependencies: 602
-- Data for Name: attendance; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.attendance (id, user_id, session_type, "timestamp", is_present, mode) FROM stdin;
\.


--
-- TOC entry 7487 (class 0 OID 20704)
-- Dependencies: 476
-- Data for Name: automation_analytics; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.automation_analytics (id, date, workflow_id, emails_sent, emails_delivered, emails_opened, emails_clicked, sms_sent, sms_delivered, whatsapp_sent, whatsapp_delivered, whatsapp_read, push_sent, push_clicked, workflow_enrollments, workflow_completions, conversions, created_at) FROM stdin;
\.


--
-- TOC entry 7308 (class 0 OID 18904)
-- Dependencies: 297
-- Data for Name: bank_questions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.bank_questions (id, instructor_id, text, type, points, difficulty, options, correct_answer, explanation, tags, usage_count, created_at, updated_at) FROM stdin;
\.


--
-- TOC entry 7623 (class 0 OID 22341)
-- Dependencies: 612
-- Data for Name: batch1_segments; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.batch1_segments (id, cycle_id, day_number, part_number, segment_number, segment_key, title, content_type, video_url, youtube_url, pdf_files, transcription_text, pdf_data, key_points, duration, is_processed, created_at) FROM stdin;
\.


--
-- TOC entry 7590 (class 0 OID 22028)
-- Dependencies: 579
-- Data for Name: batch1_test_results; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.batch1_test_results (id, user_id, cycle_id, day_number, score, total_questions, correct_count, incorrect_count, unanswered_count, answers_json, "timestamp") FROM stdin;
1	1	1	1	80	10	8	2	0	[{"qId": 1, "answer": 0, "isCorrect": true, "confidence": null, "timeSpentSeconds": null}]	2026-01-06 06:23:06.278309
2	10	1	1	-9.06	50	9	41	0	[{"qId": 1, "answer": 2, "isCorrect": false, "confidence": 2, "timeSpentSeconds": 0}, {"qId": 2, "answer": 2, "isCorrect": false, "confidence": 2, "timeSpentSeconds": 0}, {"qId": 3, "answer": 1, "isCorrect": true, "confidence": 2, "timeSpentSeconds": 0}, {"qId": 4, "answer": 1, "isCorrect": true, "confidence": 3, "timeSpentSeconds": 0}, {"qId": 5, "answer": 1, "isCorrect": false, "confidence": 3, "timeSpentSeconds": 0}, {"qId": 6, "answer": 2, "isCorrect": false, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 7, "answer": 1, "isCorrect": false, "confidence": 2, "timeSpentSeconds": 0}, {"qId": 8, "answer": 1, "isCorrect": true, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 9, "answer": 2, "isCorrect": false, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 10, "answer": 3, "isCorrect": false, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 11, "answer": 3, "isCorrect": false, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 12, "answer": 3, "isCorrect": false, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 13, "answer": 3, "isCorrect": false, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 14, "answer": 3, "isCorrect": false, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 15, "answer": 3, "isCorrect": false, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 16, "answer": 3, "isCorrect": false, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 17, "answer": 3, "isCorrect": false, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 18, "answer": 3, "isCorrect": false, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 19, "answer": 3, "isCorrect": true, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 20, "answer": 3, "isCorrect": false, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 21, "answer": 3, "isCorrect": false, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 22, "answer": 3, "isCorrect": false, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 23, "answer": 3, "isCorrect": true, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 24, "answer": 3, "isCorrect": true, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 25, "answer": 3, "isCorrect": true, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 26, "answer": 3, "isCorrect": false, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 27, "answer": 3, "isCorrect": false, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 28, "answer": 3, "isCorrect": false, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 29, "answer": 3, "isCorrect": false, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 30, "answer": 3, "isCorrect": false, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 31, "answer": 3, "isCorrect": false, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 32, "answer": 3, "isCorrect": true, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 33, "answer": 3, "isCorrect": false, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 34, "answer": 3, "isCorrect": false, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 35, "answer": 3, "isCorrect": false, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 36, "answer": 3, "isCorrect": false, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 37, "answer": 3, "isCorrect": false, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 38, "answer": 3, "isCorrect": false, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 39, "answer": 3, "isCorrect": false, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 40, "answer": 3, "isCorrect": false, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 41, "answer": 3, "isCorrect": false, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 42, "answer": 3, "isCorrect": false, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 43, "answer": 3, "isCorrect": false, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 44, "answer": 3, "isCorrect": false, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 45, "answer": 3, "isCorrect": false, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 46, "answer": 3, "isCorrect": true, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 47, "answer": 3, "isCorrect": false, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 48, "answer": 3, "isCorrect": false, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 49, "answer": 3, "isCorrect": false, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 50, "answer": 2, "isCorrect": false, "confidence": 1, "timeSpentSeconds": 0}]	2026-01-06 08:18:15.943484
3	10	1	1	-0.66	50	0	1	49	[{"qId": 1, "answer": 2, "isCorrect": false, "confidence": null, "timeSpentSeconds": 0}, {"qId": 2, "answer": -1, "isCorrect": false, "confidence": null, "timeSpentSeconds": 0}, {"qId": 3, "answer": -1, "isCorrect": false, "confidence": null, "timeSpentSeconds": 0}, {"qId": 4, "answer": -1, "isCorrect": false, "confidence": null, "timeSpentSeconds": 0}, {"qId": 5, "answer": -1, "isCorrect": false, "confidence": null, "timeSpentSeconds": 0}, {"qId": 6, "answer": -1, "isCorrect": false, "confidence": null, "timeSpentSeconds": 0}, {"qId": 7, "answer": -1, "isCorrect": false, "confidence": null, "timeSpentSeconds": 0}, {"qId": 8, "answer": -1, "isCorrect": false, "confidence": null, "timeSpentSeconds": 0}, {"qId": 9, "answer": -1, "isCorrect": false, "confidence": null, "timeSpentSeconds": 0}, {"qId": 10, "answer": -1, "isCorrect": false, "confidence": null, "timeSpentSeconds": 0}, {"qId": 11, "answer": -1, "isCorrect": false, "confidence": null, "timeSpentSeconds": 0}, {"qId": 12, "answer": -1, "isCorrect": false, "confidence": null, "timeSpentSeconds": 0}, {"qId": 13, "answer": -1, "isCorrect": false, "confidence": null, "timeSpentSeconds": 0}, {"qId": 14, "answer": -1, "isCorrect": false, "confidence": null, "timeSpentSeconds": 0}, {"qId": 15, "answer": -1, "isCorrect": false, "confidence": null, "timeSpentSeconds": 0}, {"qId": 16, "answer": -1, "isCorrect": false, "confidence": null, "timeSpentSeconds": 0}, {"qId": 17, "answer": -1, "isCorrect": false, "confidence": null, "timeSpentSeconds": 0}, {"qId": 18, "answer": -1, "isCorrect": false, "confidence": null, "timeSpentSeconds": 0}, {"qId": 19, "answer": -1, "isCorrect": false, "confidence": null, "timeSpentSeconds": 0}, {"qId": 20, "answer": -1, "isCorrect": false, "confidence": null, "timeSpentSeconds": 0}, {"qId": 21, "answer": -1, "isCorrect": false, "confidence": null, "timeSpentSeconds": 0}, {"qId": 22, "answer": -1, "isCorrect": false, "confidence": null, "timeSpentSeconds": 0}, {"qId": 23, "answer": -1, "isCorrect": false, "confidence": null, "timeSpentSeconds": 0}, {"qId": 24, "answer": -1, "isCorrect": false, "confidence": null, "timeSpentSeconds": 0}, {"qId": 25, "answer": -1, "isCorrect": false, "confidence": null, "timeSpentSeconds": 0}, {"qId": 26, "answer": -1, "isCorrect": false, "confidence": null, "timeSpentSeconds": 0}, {"qId": 27, "answer": -1, "isCorrect": false, "confidence": null, "timeSpentSeconds": 0}, {"qId": 28, "answer": -1, "isCorrect": false, "confidence": null, "timeSpentSeconds": 0}, {"qId": 29, "answer": -1, "isCorrect": false, "confidence": null, "timeSpentSeconds": 0}, {"qId": 30, "answer": -1, "isCorrect": false, "confidence": null, "timeSpentSeconds": 0}, {"qId": 31, "answer": -1, "isCorrect": false, "confidence": null, "timeSpentSeconds": 0}, {"qId": 32, "answer": -1, "isCorrect": false, "confidence": null, "timeSpentSeconds": 0}, {"qId": 33, "answer": -1, "isCorrect": false, "confidence": null, "timeSpentSeconds": 0}, {"qId": 34, "answer": -1, "isCorrect": false, "confidence": null, "timeSpentSeconds": 0}, {"qId": 35, "answer": -1, "isCorrect": false, "confidence": null, "timeSpentSeconds": 0}, {"qId": 36, "answer": -1, "isCorrect": false, "confidence": null, "timeSpentSeconds": 0}, {"qId": 37, "answer": -1, "isCorrect": false, "confidence": null, "timeSpentSeconds": 0}, {"qId": 38, "answer": -1, "isCorrect": false, "confidence": null, "timeSpentSeconds": 0}, {"qId": 39, "answer": -1, "isCorrect": false, "confidence": null, "timeSpentSeconds": 0}, {"qId": 40, "answer": -1, "isCorrect": false, "confidence": null, "timeSpentSeconds": 0}, {"qId": 41, "answer": -1, "isCorrect": false, "confidence": null, "timeSpentSeconds": 0}, {"qId": 42, "answer": -1, "isCorrect": false, "confidence": null, "timeSpentSeconds": 0}, {"qId": 43, "answer": -1, "isCorrect": false, "confidence": null, "timeSpentSeconds": 0}, {"qId": 44, "answer": -1, "isCorrect": false, "confidence": null, "timeSpentSeconds": 0}, {"qId": 45, "answer": -1, "isCorrect": false, "confidence": null, "timeSpentSeconds": 0}, {"qId": 46, "answer": -1, "isCorrect": false, "confidence": null, "timeSpentSeconds": 0}, {"qId": 47, "answer": -1, "isCorrect": false, "confidence": null, "timeSpentSeconds": 0}, {"qId": 48, "answer": -1, "isCorrect": false, "confidence": null, "timeSpentSeconds": 0}, {"qId": 49, "answer": -1, "isCorrect": false, "confidence": null, "timeSpentSeconds": 0}, {"qId": 50, "answer": -1, "isCorrect": false, "confidence": null, "timeSpentSeconds": 0}]	2026-01-06 10:12:47.113993
4	10	1	8	-10.34	60	11	49	0	[{"qId": 1, "answer": 3, "isCorrect": true, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 2, "answer": 3, "isCorrect": false, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 3, "answer": 3, "isCorrect": false, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 4, "answer": 3, "isCorrect": false, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 5, "answer": 3, "isCorrect": true, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 6, "answer": 3, "isCorrect": false, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 7, "answer": 3, "isCorrect": false, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 8, "answer": 3, "isCorrect": true, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 9, "answer": 3, "isCorrect": false, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 10, "answer": 3, "isCorrect": false, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 11, "answer": 3, "isCorrect": false, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 12, "answer": 3, "isCorrect": false, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 13, "answer": 3, "isCorrect": true, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 14, "answer": 3, "isCorrect": false, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 15, "answer": 3, "isCorrect": false, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 16, "answer": 3, "isCorrect": true, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 17, "answer": 3, "isCorrect": false, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 18, "answer": 3, "isCorrect": false, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 19, "answer": 3, "isCorrect": false, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 20, "answer": 3, "isCorrect": false, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 21, "answer": 3, "isCorrect": false, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 22, "answer": 3, "isCorrect": false, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 23, "answer": 3, "isCorrect": false, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 24, "answer": 3, "isCorrect": false, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 25, "answer": 3, "isCorrect": true, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 26, "answer": 3, "isCorrect": false, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 27, "answer": 3, "isCorrect": false, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 28, "answer": 3, "isCorrect": false, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 29, "answer": 3, "isCorrect": false, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 30, "answer": 3, "isCorrect": false, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 31, "answer": 3, "isCorrect": false, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 32, "answer": 3, "isCorrect": true, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 33, "answer": 3, "isCorrect": false, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 34, "answer": 3, "isCorrect": false, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 35, "answer": 3, "isCorrect": false, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 36, "answer": 3, "isCorrect": false, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 37, "answer": 3, "isCorrect": false, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 38, "answer": 3, "isCorrect": false, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 39, "answer": 3, "isCorrect": false, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 40, "answer": 3, "isCorrect": true, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 41, "answer": 3, "isCorrect": false, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 42, "answer": 3, "isCorrect": false, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 43, "answer": 3, "isCorrect": false, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 44, "answer": 3, "isCorrect": true, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 45, "answer": 3, "isCorrect": false, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 46, "answer": 3, "isCorrect": true, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 47, "answer": 3, "isCorrect": false, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 48, "answer": 3, "isCorrect": false, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 49, "answer": 3, "isCorrect": false, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 50, "answer": 3, "isCorrect": false, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 51, "answer": 3, "isCorrect": true, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 52, "answer": 3, "isCorrect": false, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 53, "answer": 3, "isCorrect": false, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 54, "answer": 3, "isCorrect": false, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 55, "answer": 3, "isCorrect": false, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 56, "answer": 3, "isCorrect": false, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 57, "answer": 3, "isCorrect": false, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 58, "answer": 3, "isCorrect": false, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 59, "answer": 3, "isCorrect": false, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 60, "answer": 3, "isCorrect": false, "confidence": 1, "timeSpentSeconds": 0}]	2026-01-08 11:43:17.474513
5	12	1	9	44.68	25	23	2	0	[{"qId": 1, "answer": 2, "isCorrect": false, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 2, "answer": 1, "isCorrect": true, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 3, "answer": 2, "isCorrect": true, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 4, "answer": 1, "isCorrect": true, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 5, "answer": 3, "isCorrect": true, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 6, "answer": 1, "isCorrect": true, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 7, "answer": 3, "isCorrect": true, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 8, "answer": 2, "isCorrect": true, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 9, "answer": 2, "isCorrect": true, "confidence": 2, "timeSpentSeconds": 0}, {"qId": 10, "answer": 2, "isCorrect": true, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 11, "answer": 3, "isCorrect": true, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 12, "answer": 2, "isCorrect": true, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 13, "answer": 0, "isCorrect": true, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 14, "answer": 1, "isCorrect": true, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 15, "answer": 1, "isCorrect": true, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 16, "answer": 1, "isCorrect": true, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 17, "answer": 1, "isCorrect": true, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 18, "answer": 1, "isCorrect": true, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 19, "answer": 2, "isCorrect": true, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 20, "answer": 2, "isCorrect": true, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 21, "answer": 1, "isCorrect": true, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 22, "answer": 3, "isCorrect": false, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 23, "answer": 2, "isCorrect": true, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 24, "answer": 0, "isCorrect": true, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 25, "answer": 1, "isCorrect": true, "confidence": 1, "timeSpentSeconds": 0}]	2026-01-10 06:51:21.250986
6	1	1	1	-0.66	60	0	1	59	[{"qId": 1, "answer": 2, "isCorrect": false, "confidence": 1, "timeSpentSeconds": 0}, {"qId": 2, "answer": -1, "isCorrect": false, "confidence": null, "timeSpentSeconds": 0}, {"qId": 3, "answer": -1, "isCorrect": false, "confidence": null, "timeSpentSeconds": 0}, {"qId": 4, "answer": -1, "isCorrect": false, "confidence": null, "timeSpentSeconds": 0}, {"qId": 5, "answer": -1, "isCorrect": false, "confidence": null, "timeSpentSeconds": 0}, {"qId": 6, "answer": -1, "isCorrect": false, "confidence": null, "timeSpentSeconds": 0}, {"qId": 7, "answer": -1, "isCorrect": false, "confidence": null, "timeSpentSeconds": 0}, {"qId": 8, "answer": -1, "isCorrect": false, "confidence": null, "timeSpentSeconds": 0}, {"qId": 9, "answer": -1, "isCorrect": false, "confidence": null, "timeSpentSeconds": 0}, {"qId": 10, "answer": -1, "isCorrect": false, "confidence": null, "timeSpentSeconds": 0}, {"qId": 11, "answer": -1, "isCorrect": false, "confidence": null, "timeSpentSeconds": 0}, {"qId": 12, "answer": -1, "isCorrect": false, "confidence": null, "timeSpentSeconds": 0}, {"qId": 13, "answer": -1, "isCorrect": false, "confidence": null, "timeSpentSeconds": 0}, {"qId": 14, "answer": -1, "isCorrect": false, "confidence": null, "timeSpentSeconds": 0}, {"qId": 15, "answer": -1, "isCorrect": false, "confidence": null, "timeSpentSeconds": 0}, {"qId": 16, "answer": -1, "isCorrect": false, "confidence": null, "timeSpentSeconds": 0}, {"qId": 17, "answer": -1, "isCorrect": false, "confidence": null, "timeSpentSeconds": 0}, {"qId": 18, "answer": -1, "isCorrect": false, "confidence": null, "timeSpentSeconds": 0}, {"qId": 19, "answer": -1, "isCorrect": false, "confidence": null, "timeSpentSeconds": 0}, {"qId": 20, "answer": -1, "isCorrect": false, "confidence": null, "timeSpentSeconds": 0}, {"qId": 21, "answer": -1, "isCorrect": false, "confidence": null, "timeSpentSeconds": 0}, {"qId": 22, "answer": -1, "isCorrect": false, "confidence": null, "timeSpentSeconds": 0}, {"qId": 23, "answer": -1, "isCorrect": false, "confidence": null, "timeSpentSeconds": 0}, {"qId": 24, "answer": -1, "isCorrect": false, "confidence": null, "timeSpentSeconds": 0}, {"qId": 25, "answer": -1, "isCorrect": false, "confidence": null, "timeSpentSeconds": 0}, {"qId": 26, "answer": -1, "isCorrect": false, "confidence": null, "timeSpentSeconds": 0}, {"qId": 27, "answer": -1, "isCorrect": false, "confidence": null, "timeSpentSeconds": 0}, {"qId": 28, "answer": -1, "isCorrect": false, "confidence": null, "timeSpentSeconds": 0}, {"qId": 29, "answer": -1, "isCorrect": false, "confidence": null, "timeSpentSeconds": 0}, {"qId": 30, "answer": -1, "isCorrect": false, "confidence": null, "timeSpentSeconds": 0}, {"qId": 31, "answer": -1, "isCorrect": false, "confidence": null, "timeSpentSeconds": 0}, {"qId": 32, "answer": -1, "isCorrect": false, "confidence": null, "timeSpentSeconds": 0}, {"qId": 33, "answer": -1, "isCorrect": false, "confidence": null, "timeSpentSeconds": 0}, {"qId": 34, "answer": -1, "isCorrect": false, "confidence": null, "timeSpentSeconds": 0}, {"qId": 35, "answer": -1, "isCorrect": false, "confidence": null, "timeSpentSeconds": 0}, {"qId": 36, "answer": -1, "isCorrect": false, "confidence": null, "timeSpentSeconds": 0}, {"qId": 37, "answer": -1, "isCorrect": false, "confidence": null, "timeSpentSeconds": 0}, {"qId": 38, "answer": -1, "isCorrect": false, "confidence": null, "timeSpentSeconds": 0}, {"qId": 39, "answer": -1, "isCorrect": false, "confidence": null, "timeSpentSeconds": 0}, {"qId": 40, "answer": -1, "isCorrect": false, "confidence": null, "timeSpentSeconds": 0}, {"qId": 41, "answer": -1, "isCorrect": false, "confidence": null, "timeSpentSeconds": 0}, {"qId": 42, "answer": -1, "isCorrect": false, "confidence": null, "timeSpentSeconds": 0}, {"qId": 43, "answer": -1, "isCorrect": false, "confidence": null, "timeSpentSeconds": 0}, {"qId": 44, "answer": -1, "isCorrect": false, "confidence": null, "timeSpentSeconds": 0}, {"qId": 45, "answer": -1, "isCorrect": false, "confidence": null, "timeSpentSeconds": 0}, {"qId": 46, "answer": -1, "isCorrect": false, "confidence": null, "timeSpentSeconds": 0}, {"qId": 47, "answer": -1, "isCorrect": false, "confidence": null, "timeSpentSeconds": 0}, {"qId": 48, "answer": -1, "isCorrect": false, "confidence": null, "timeSpentSeconds": 0}, {"qId": 49, "answer": -1, "isCorrect": false, "confidence": null, "timeSpentSeconds": 0}, {"qId": 50, "answer": -1, "isCorrect": false, "confidence": null, "timeSpentSeconds": 0}, {"qId": 51, "answer": -1, "isCorrect": false, "confidence": null, "timeSpentSeconds": 0}, {"qId": 52, "answer": -1, "isCorrect": false, "confidence": null, "timeSpentSeconds": 0}, {"qId": 53, "answer": -1, "isCorrect": false, "confidence": null, "timeSpentSeconds": 0}, {"qId": 54, "answer": -1, "isCorrect": false, "confidence": null, "timeSpentSeconds": 0}, {"qId": 55, "answer": -1, "isCorrect": false, "confidence": null, "timeSpentSeconds": 0}, {"qId": 56, "answer": -1, "isCorrect": false, "confidence": null, "timeSpentSeconds": 0}, {"qId": 57, "answer": -1, "isCorrect": false, "confidence": null, "timeSpentSeconds": 0}, {"qId": 58, "answer": -1, "isCorrect": false, "confidence": null, "timeSpentSeconds": 0}, {"qId": 59, "answer": -1, "isCorrect": false, "confidence": null, "timeSpentSeconds": 0}, {"qId": 60, "answer": -1, "isCorrect": false, "confidence": null, "timeSpentSeconds": 0}]	2026-02-05 06:19:36.606748
7	1	1	5	-26.3	60	5	55	0	[{"qId": 1, "answer": 3, "isCorrect": false, "confidence": 4, "timeSpentSeconds": 0}, {"qId": 2, "answer": 3, "isCorrect": false, "confidence": 4, "timeSpentSeconds": 0}, {"qId": 3, "answer": 3, "isCorrect": false, "confidence": 4, "timeSpentSeconds": 0}, {"qId": 4, "answer": 3, "isCorrect": false, "confidence": 4, "timeSpentSeconds": 0}, {"qId": 5, "answer": 3, "isCorrect": false, "confidence": 4, "timeSpentSeconds": 0}, {"qId": 6, "answer": 3, "isCorrect": false, "confidence": 4, "timeSpentSeconds": 0}, {"qId": 7, "answer": 3, "isCorrect": false, "confidence": 4, "timeSpentSeconds": 0}, {"qId": 8, "answer": 3, "isCorrect": false, "confidence": 4, "timeSpentSeconds": 0}, {"qId": 9, "answer": 3, "isCorrect": false, "confidence": 4, "timeSpentSeconds": 0}, {"qId": 10, "answer": 3, "isCorrect": true, "confidence": 4, "timeSpentSeconds": 0}, {"qId": 11, "answer": 3, "isCorrect": false, "confidence": 4, "timeSpentSeconds": 0}, {"qId": 12, "answer": 3, "isCorrect": false, "confidence": 4, "timeSpentSeconds": 0}, {"qId": 13, "answer": 3, "isCorrect": false, "confidence": 4, "timeSpentSeconds": 0}, {"qId": 14, "answer": 3, "isCorrect": false, "confidence": 4, "timeSpentSeconds": 0}, {"qId": 15, "answer": 3, "isCorrect": false, "confidence": 4, "timeSpentSeconds": 0}, {"qId": 16, "answer": 3, "isCorrect": false, "confidence": 4, "timeSpentSeconds": 0}, {"qId": 17, "answer": 3, "isCorrect": false, "confidence": 4, "timeSpentSeconds": 0}, {"qId": 18, "answer": 3, "isCorrect": false, "confidence": 4, "timeSpentSeconds": 0}, {"qId": 19, "answer": 3, "isCorrect": false, "confidence": 4, "timeSpentSeconds": 0}, {"qId": 20, "answer": 3, "isCorrect": false, "confidence": 4, "timeSpentSeconds": 0}, {"qId": 21, "answer": 3, "isCorrect": false, "confidence": 4, "timeSpentSeconds": 0}, {"qId": 22, "answer": 2, "isCorrect": true, "confidence": 4, "timeSpentSeconds": 0}, {"qId": 23, "answer": 3, "isCorrect": false, "confidence": 4, "timeSpentSeconds": 0}, {"qId": 24, "answer": 3, "isCorrect": false, "confidence": 4, "timeSpentSeconds": 0}, {"qId": 25, "answer": 3, "isCorrect": false, "confidence": 4, "timeSpentSeconds": 0}, {"qId": 26, "answer": 2, "isCorrect": false, "confidence": 4, "timeSpentSeconds": 0}, {"qId": 27, "answer": 3, "isCorrect": false, "confidence": 4, "timeSpentSeconds": 0}, {"qId": 28, "answer": 3, "isCorrect": false, "confidence": 4, "timeSpentSeconds": 0}, {"qId": 29, "answer": 3, "isCorrect": false, "confidence": 4, "timeSpentSeconds": 0}, {"qId": 30, "answer": 3, "isCorrect": false, "confidence": 4, "timeSpentSeconds": 0}, {"qId": 31, "answer": 3, "isCorrect": true, "confidence": 4, "timeSpentSeconds": 0}, {"qId": 32, "answer": 2, "isCorrect": false, "confidence": 4, "timeSpentSeconds": 0}, {"qId": 33, "answer": 3, "isCorrect": false, "confidence": 4, "timeSpentSeconds": 0}, {"qId": 34, "answer": 3, "isCorrect": false, "confidence": 4, "timeSpentSeconds": 0}, {"qId": 35, "answer": 3, "isCorrect": false, "confidence": 4, "timeSpentSeconds": 0}, {"qId": 36, "answer": 3, "isCorrect": false, "confidence": 4, "timeSpentSeconds": 0}, {"qId": 37, "answer": 3, "isCorrect": false, "confidence": 4, "timeSpentSeconds": 0}, {"qId": 38, "answer": 3, "isCorrect": false, "confidence": 4, "timeSpentSeconds": 0}, {"qId": 39, "answer": 3, "isCorrect": false, "confidence": 4, "timeSpentSeconds": 0}, {"qId": 40, "answer": 3, "isCorrect": false, "confidence": 4, "timeSpentSeconds": 0}, {"qId": 41, "answer": 3, "isCorrect": false, "confidence": 4, "timeSpentSeconds": 0}, {"qId": 42, "answer": 3, "isCorrect": false, "confidence": 4, "timeSpentSeconds": 0}, {"qId": 43, "answer": 3, "isCorrect": false, "confidence": 4, "timeSpentSeconds": 0}, {"qId": 44, "answer": 3, "isCorrect": false, "confidence": 4, "timeSpentSeconds": 0}, {"qId": 45, "answer": 3, "isCorrect": false, "confidence": 4, "timeSpentSeconds": 0}, {"qId": 46, "answer": 3, "isCorrect": false, "confidence": 4, "timeSpentSeconds": 0}, {"qId": 47, "answer": 3, "isCorrect": false, "confidence": 4, "timeSpentSeconds": 0}, {"qId": 48, "answer": 3, "isCorrect": false, "confidence": 4, "timeSpentSeconds": 0}, {"qId": 49, "answer": 2, "isCorrect": false, "confidence": 4, "timeSpentSeconds": 0}, {"qId": 50, "answer": 3, "isCorrect": false, "confidence": 4, "timeSpentSeconds": 0}, {"qId": 51, "answer": 1, "isCorrect": true, "confidence": 4, "timeSpentSeconds": 0}, {"qId": 52, "answer": 3, "isCorrect": false, "confidence": 4, "timeSpentSeconds": 0}, {"qId": 53, "answer": 3, "isCorrect": false, "confidence": 4, "timeSpentSeconds": 0}, {"qId": 54, "answer": 3, "isCorrect": false, "confidence": 4, "timeSpentSeconds": 0}, {"qId": 55, "answer": 3, "isCorrect": false, "confidence": 4, "timeSpentSeconds": 0}, {"qId": 56, "answer": 3, "isCorrect": false, "confidence": 4, "timeSpentSeconds": 0}, {"qId": 57, "answer": 3, "isCorrect": false, "confidence": 4, "timeSpentSeconds": 0}, {"qId": 58, "answer": 3, "isCorrect": false, "confidence": 4, "timeSpentSeconds": 0}, {"qId": 59, "answer": 3, "isCorrect": true, "confidence": 4, "timeSpentSeconds": 0}, {"qId": 60, "answer": 3, "isCorrect": false, "confidence": 4, "timeSpentSeconds": 0}]	2026-02-12 05:37:55.056266
\.


--
-- TOC entry 7606 (class 0 OID 22216)
-- Dependencies: 595
-- Data for Name: batch_sentiments; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.batch_sentiments (id, batch_name, date, focused_score, anxious_score, tired_score, inspired_score, dominant_vibe, sample_size, top_keywords, created_at) FROM stdin;
\.


--
-- TOC entry 7275 (class 0 OID 18599)
-- Dependencies: 264
-- Data for Name: blockchain_blocks; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.blockchain_blocks (id, index, "timestamp", data, previous_hash, hash, nonce) FROM stdin;
\.


--
-- TOC entry 7435 (class 0 OID 20117)
-- Dependencies: 424
-- Data for Name: bundle_enrollments; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.bundle_enrollments (id, user_id, bundle_id, enrolled_at, price_paid, currency, payment_id, payment_status, coupon_code, discount_applied, courses_completed, completion_percentage, completed_at, status, created_at, updated_at) FROM stdin;
\.


--
-- TOC entry 7635 (class 0 OID 22439)
-- Dependencies: 624
-- Data for Name: call_logs; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.call_logs (id, user_id, lead_id, call_type, phone_number, duration_seconds, outcome, notes, call_started_at, call_ended_at, created_at) FROM stdin;
\.


--
-- TOC entry 7530 (class 0 OID 21203)
-- Dependencies: 519
-- Data for Name: cart_items; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.cart_items (id, cart_id, course_id, bundle_id, quantity, unit_price, coupon_id, discount_amount, added_at, updated_at) FROM stdin;
\.


--
-- TOC entry 7239 (class 0 OID 18378)
-- Dependencies: 228
-- Data for Name: categories; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.categories (id, name, slug, description, icon) FROM stdin;
\.


--
-- TOC entry 7312 (class 0 OID 18937)
-- Dependencies: 301
-- Data for Name: certificate_templates; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.certificate_templates (id, name, description, background_url, background_color, layout, title_font, title_font_size, title_color, body_font, body_font_size, body_color, border_style, border_color, logo_url, signature_url, is_default, is_public, creator_id, created_at, updated_at) FROM stdin;
\.


--
-- TOC entry 7499 (class 0 OID 20871)
-- Dependencies: 488
-- Data for Name: certificates; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.certificates (id, user_id, course_id, enrollment_id, certificate_number, issued_at, student_name, student_email, course_title, instructor_name, pdf_url, completion_percentage, total_lessons_completed, time_spent_hours, template_id) FROM stdin;
\.


--
-- TOC entry 7289 (class 0 OID 18727)
-- Dependencies: 278
-- Data for Name: challenges; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.challenges (id, title, description, type, start_date, end_date, requirement, reward_coins, reward_achievement_id, is_active, difficulty, created_at) FROM stdin;
\.


--
-- TOC entry 7556 (class 0 OID 21562)
-- Dependencies: 545
-- Data for Name: chat_feedback; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.chat_feedback (id, message_id, user_id, rating, is_helpful, feedback_text, created_at) FROM stdin;
\.


--
-- TOC entry 7446 (class 0 OID 20243)
-- Dependencies: 435
-- Data for Name: chat_sessions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.chat_sessions (id, user_id, course_id, title, context_type, context_id, is_active, created_at, updated_at) FROM stdin;
\.


--
-- TOC entry 7528 (class 0 OID 21188)
-- Dependencies: 517
-- Data for Name: chatbot_messages; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.chatbot_messages (id, session_id, role, content, meta_data, tokens_used, created_at) FROM stdin;
\.


--
-- TOC entry 7368 (class 0 OID 19445)
-- Dependencies: 357
-- Data for Name: coin_transactions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.coin_transactions (id, user_id, amount, type, reason, description, reference_type, reference_id, balance_after, created_at) FROM stdin;
1	2	5	EARNED	daily_login	Daily login bonus	\N	\N	5	2025-12-23 10:52:37.725526+00
2	3	5	EARNED	daily_login	Daily login bonus	\N	\N	5	2025-12-23 10:53:11.485649+00
3	5	5	EARNED	daily_login	Daily login bonus	\N	\N	5	2025-12-23 13:16:25.101342+00
4	7	5	EARNED	daily_login	Daily login bonus	\N	\N	5	2025-12-23 14:50:00.231016+00
5	8	5	EARNED	daily_login	Daily login bonus	\N	\N	5	2025-12-24 02:49:58.710927+00
6	9	5	EARNED	daily_login	Daily login bonus	\N	\N	5	2025-12-24 03:03:23.93721+00
7	10	5	EARNED	daily_login	Daily login bonus	\N	\N	5	2025-12-24 14:33:49.886248+00
8	10	5	EARNED	daily_login	Daily login bonus	\N	\N	10	2025-12-25 02:36:22.696515+00
9	10	10	EARNED	streak_maintain	Maintained 2-day streak	\N	\N	20	2025-12-25 02:36:22.993626+00
10	11	5	EARNED	daily_login	Daily login bonus	\N	\N	5	2025-12-25 13:33:43.813955+00
11	12	5	EARNED	daily_login	Daily login bonus	\N	\N	5	2025-12-26 04:05:10.198547+00
12	2	5	EARNED	daily_login	Daily login bonus	\N	\N	10	2025-12-26 11:30:21.714515+00
13	11	5	EARNED	daily_login	Daily login bonus	\N	\N	10	2025-12-30 18:07:33.712084+00
14	11	5	EARNED	daily_login	Daily login bonus	\N	\N	15	2025-12-31 01:43:54.007111+00
15	11	10	EARNED	streak_maintain	Maintained 2-day streak	\N	\N	25	2025-12-31 01:43:54.326767+00
16	13	5	EARNED	daily_login	Daily login bonus	\N	\N	5	2025-12-31 13:50:31.929305+00
17	14	5	EARNED	daily_login	Daily login bonus	\N	\N	5	2025-12-31 14:11:42.240857+00
18	9	5	EARNED	daily_login	Daily login bonus	\N	\N	10	2025-12-31 14:18:19.565034+00
19	12	5	EARNED	daily_login	Daily login bonus	\N	\N	10	2025-12-31 16:02:43.130259+00
20	11	5	EARNED	daily_login	Daily login bonus	\N	\N	30	2026-01-01 00:19:45.300019+00
21	11	10	EARNED	streak_maintain	Maintained 3-day streak	\N	\N	40	2026-01-01 00:19:45.629039+00
22	9	5	EARNED	daily_login	Daily login bonus	\N	\N	15	2026-01-01 03:10:17.490115+00
23	9	10	EARNED	streak_maintain	Maintained 2-day streak	\N	\N	25	2026-01-01 03:10:17.790945+00
24	10	5	EARNED	daily_login	Daily login bonus	\N	\N	25	2026-01-01 04:21:42.463963+00
25	15	5	EARNED	daily_login	Daily login bonus	\N	\N	5	2026-01-01 05:28:16.651062+00
26	16	5	EARNED	daily_login	Daily login bonus	\N	\N	5	2026-01-01 05:35:10.556028+00
27	13	5	EARNED	daily_login	Daily login bonus	\N	\N	10	2026-01-01 06:22:27.371348+00
28	13	10	EARNED	streak_maintain	Maintained 2-day streak	\N	\N	20	2026-01-01 06:22:27.669216+00
29	12	5	EARNED	daily_login	Daily login bonus	\N	\N	15	2026-01-01 12:34:24.268399+00
30	12	10	EARNED	streak_maintain	Maintained 2-day streak	\N	\N	25	2026-01-01 12:34:24.56004+00
31	11	5	EARNED	daily_login	Daily login bonus	\N	\N	45	2026-01-02 01:34:00.194765+00
32	11	10	EARNED	streak_maintain	Maintained 4-day streak	\N	\N	55	2026-01-02 01:34:00.525279+00
33	9	5	EARNED	daily_login	Daily login bonus	\N	\N	30	2026-01-02 02:43:50.929862+00
34	9	10	EARNED	streak_maintain	Maintained 3-day streak	\N	\N	40	2026-01-02 02:43:51.253874+00
35	12	5	EARNED	daily_login	Daily login bonus	\N	\N	30	2026-01-02 06:59:48.969508+00
36	12	10	EARNED	streak_maintain	Maintained 3-day streak	\N	\N	40	2026-01-02 06:59:49.263571+00
37	2	5	EARNED	daily_login	Daily login bonus	\N	\N	15	2026-01-02 10:50:54.660922+00
38	17	5	EARNED	daily_login	Daily login bonus	\N	\N	5	2026-01-02 15:29:06.960251+00
39	12	5	EARNED	daily_login	Daily login bonus	\N	\N	45	2026-01-03 07:19:33.832523+00
40	12	10	EARNED	streak_maintain	Maintained 4-day streak	\N	\N	55	2026-01-03 07:19:34.127458+00
41	11	5	EARNED	daily_login	Daily login bonus	\N	\N	60	2026-01-03 07:51:27.556762+00
42	11	10	EARNED	streak_maintain	Maintained 5-day streak	\N	\N	70	2026-01-03 07:51:27.844881+00
43	3	5	EARNED	daily_login	Daily login bonus	\N	\N	10	2026-01-03 10:57:54.1517+00
44	18	5	EARNED	daily_login	Daily login bonus	\N	\N	5	2026-01-03 13:56:36.358895+00
45	12	5	EARNED	daily_login	Daily login bonus	\N	\N	60	2026-01-04 06:32:21.368956+00
46	12	10	EARNED	streak_maintain	Maintained 5-day streak	\N	\N	70	2026-01-04 06:32:21.655228+00
47	18	5	EARNED	daily_login	Daily login bonus	\N	\N	10	2026-01-04 06:32:26.273049+00
48	18	10	EARNED	streak_maintain	Maintained 2-day streak	\N	\N	20	2026-01-04 06:32:26.560104+00
49	10	5	EARNED	daily_login	Daily login bonus	\N	\N	30	2026-01-04 06:44:38.917029+00
50	11	5	EARNED	daily_login	Daily login bonus	\N	\N	75	2026-01-04 07:59:05.177538+00
51	11	10	EARNED	streak_maintain	Maintained 6-day streak	\N	\N	85	2026-01-04 07:59:05.466396+00
52	11	5	EARNED	daily_login	Daily login bonus	\N	\N	90	2026-01-05 08:48:37.599785+00
53	11	10	EARNED	streak_maintain	Maintained 7-day streak	\N	\N	100	2026-01-05 08:48:37.891516+00
54	11	100	EARNED	streak_milestone_7	7-day streak milestone!	\N	\N	200	2026-01-05 08:48:37.903969+00
55	10	5	EARNED	daily_login	Daily login bonus	\N	\N	35	2026-01-05 09:34:22.724848+00
56	10	10	EARNED	streak_maintain	Maintained 2-day streak	\N	\N	45	2026-01-05 09:34:23.046168+00
57	3	5	EARNED	daily_login	Daily login bonus	\N	\N	15	2026-01-05 10:13:20.730479+00
58	2	5	EARNED	daily_login	Daily login bonus	\N	\N	20	2026-01-05 10:14:25.478932+00
59	12	5	EARNED	daily_login	Daily login bonus	\N	\N	75	2026-01-05 12:41:09.411337+00
60	12	10	EARNED	streak_maintain	Maintained 6-day streak	\N	\N	85	2026-01-05 12:41:09.698512+00
61	12	5	EARNED	daily_login	Daily login bonus	\N	\N	90	2026-01-06 08:07:24.120427+00
62	12	10	EARNED	streak_maintain	Maintained 7-day streak	\N	\N	100	2026-01-06 08:07:24.397956+00
63	12	100	EARNED	streak_milestone_7	7-day streak milestone!	\N	\N	200	2026-01-06 08:07:24.41194+00
64	10	5	EARNED	daily_login	Daily login bonus	\N	\N	50	2026-01-06 08:15:21.239622+00
65	10	10	EARNED	streak_maintain	Maintained 3-day streak	\N	\N	60	2026-01-06 08:15:21.496927+00
66	3	5	EARNED	daily_login	Daily login bonus	\N	\N	20	2026-01-06 10:41:08.453991+00
67	3	10	EARNED	streak_maintain	Maintained 2-day streak	\N	\N	30	2026-01-06 10:41:08.718118+00
68	11	5	EARNED	daily_login	Daily login bonus	\N	\N	205	2026-01-07 01:29:40.506417+00
69	11	5	EARNED	daily_login	Daily login bonus	\N	\N	210	2026-01-08 05:48:19.983672+00
70	11	10	EARNED	streak_maintain	Maintained 2-day streak	\N	\N	220	2026-01-08 05:48:20.308543+00
71	12	5	EARNED	daily_login	Daily login bonus	\N	\N	205	2026-01-08 07:05:03.089592+00
72	12	5	EARNED	daily_login	Daily login bonus	\N	\N	205	2026-01-08 07:05:03.292558+00
73	9	5	EARNED	daily_login	Daily login bonus	\N	\N	45	2026-01-08 07:14:37.885639+00
74	10	5	EARNED	daily_login	Daily login bonus	\N	\N	65	2026-01-08 11:20:07.133072+00
75	11	5	EARNED	daily_login	Daily login bonus	\N	\N	225	2026-01-09 01:32:45.347097+00
76	11	10	EARNED	streak_maintain	Maintained 3-day streak	\N	\N	235	2026-01-09 01:32:45.714662+00
77	12	5	EARNED	daily_login	Daily login bonus	\N	\N	210	2026-01-09 17:55:20.365116+00
78	12	10	EARNED	streak_maintain	Maintained 2-day streak	\N	\N	220	2026-01-09 17:55:20.732664+00
79	10	5	EARNED	daily_login	Daily login bonus	\N	\N	70	2026-01-10 02:43:24.6244+00
80	12	5	EARNED	daily_login	Daily login bonus	\N	\N	225	2026-01-10 02:43:35.97423+00
81	12	10	EARNED	streak_maintain	Maintained 3-day streak	\N	\N	235	2026-01-10 02:43:36.276541+00
82	19	5	EARNED	daily_login	Daily login bonus	\N	\N	5	2026-01-10 04:43:26.279252+00
83	20	5	EARNED	daily_login	Daily login bonus	\N	\N	5	2026-01-10 07:14:25.726236+00
84	11	5	EARNED	daily_login	Daily login bonus	\N	\N	240	2026-01-10 07:34:56.834082+00
85	11	10	EARNED	streak_maintain	Maintained 4-day streak	\N	\N	250	2026-01-10 07:34:57.134824+00
86	9	5	EARNED	daily_login	Daily login bonus	\N	\N	50	2026-01-10 12:14:19.631314+00
87	13	5	EARNED	daily_login	Daily login bonus	\N	\N	25	2026-01-10 15:57:18.759629+00
88	11	5	EARNED	daily_login	Daily login bonus	\N	\N	255	2026-01-11 01:30:00.100917+00
89	11	10	EARNED	streak_maintain	Maintained 5-day streak	\N	\N	265	2026-01-11 01:30:00.581402+00
90	12	5	EARNED	daily_login	Daily login bonus	\N	\N	240	2026-01-11 05:08:08.951178+00
91	12	10	EARNED	streak_maintain	Maintained 4-day streak	\N	\N	250	2026-01-11 05:08:09.256425+00
92	10	5	EARNED	daily_login	Daily login bonus	\N	\N	75	2026-01-11 06:24:49.154494+00
93	10	10	EARNED	streak_maintain	Maintained 2-day streak	\N	\N	85	2026-01-11 06:24:49.45682+00
94	9	5	EARNED	daily_login	Daily login bonus	\N	\N	55	2026-01-11 08:30:30.74072+00
95	9	10	EARNED	streak_maintain	Maintained 2-day streak	\N	\N	65	2026-01-11 08:30:31.106736+00
96	12	5	EARNED	daily_login	Daily login bonus	\N	\N	255	2026-01-12 02:29:16.511419+00
97	12	10	EARNED	streak_maintain	Maintained 5-day streak	\N	\N	265	2026-01-12 02:29:16.88119+00
98	10	5	EARNED	daily_login	Daily login bonus	\N	\N	90	2026-01-12 02:36:35.198484+00
99	10	10	EARNED	streak_maintain	Maintained 3-day streak	\N	\N	100	2026-01-12 02:36:35.58008+00
100	9	5	EARNED	daily_login	Daily login bonus	\N	\N	70	2026-01-12 02:53:31.547204+00
101	9	10	EARNED	streak_maintain	Maintained 3-day streak	\N	\N	80	2026-01-12 02:53:31.84251+00
102	9	5	EARNED	daily_login	Daily login bonus	\N	\N	85	2026-01-12 02:53:31.862614+00
103	9	10	EARNED	streak_maintain	Maintained 4-day streak	\N	\N	95	2026-01-12 02:53:32.157969+00
104	3	5	EARNED	daily_login	Daily login bonus	\N	\N	35	2026-01-12 10:14:38.094307+00
105	11	5	EARNED	daily_login	Daily login bonus	\N	\N	270	2026-01-13 00:27:47.70811+00
106	12	5	EARNED	daily_login	Daily login bonus	\N	\N	270	2026-01-13 02:53:29.363856+00
107	12	10	EARNED	streak_maintain	Maintained 6-day streak	\N	\N	280	2026-01-13 02:53:29.671275+00
108	10	5	EARNED	daily_login	Daily login bonus	\N	\N	105	2026-01-13 04:04:06.600609+00
109	10	10	EARNED	streak_maintain	Maintained 4-day streak	\N	\N	115	2026-01-13 04:04:06.904243+00
110	3	5	EARNED	daily_login	Daily login bonus	\N	\N	40	2026-01-13 10:41:42.619741+00
111	3	10	EARNED	streak_maintain	Maintained 2-day streak	\N	\N	50	2026-01-13 10:41:42.922063+00
112	11	5	EARNED	daily_login	Daily login bonus	\N	\N	275	2026-01-14 01:34:50.969203+00
113	11	10	EARNED	streak_maintain	Maintained 2-day streak	\N	\N	285	2026-01-14 01:34:51.335604+00
114	12	5	EARNED	daily_login	Daily login bonus	\N	\N	285	2026-01-14 02:43:57.22475+00
115	12	10	EARNED	streak_maintain	Maintained 7-day streak	\N	\N	295	2026-01-14 02:43:57.588858+00
116	12	100	EARNED	streak_milestone_7	7-day streak milestone!	\N	\N	395	2026-01-14 02:43:57.648496+00
117	12	5	EARNED	daily_login	Daily login bonus	\N	\N	300	2026-01-14 02:43:57.609889+00
118	12	10	EARNED	streak_maintain	Maintained 8-day streak	\N	\N	310	2026-01-14 02:43:57.941152+00
119	12	5	EARNED	daily_login	Daily login bonus	\N	\N	315	2026-01-15 02:34:41.571369+00
120	12	10	EARNED	streak_maintain	Maintained 9-day streak	\N	\N	325	2026-01-15 02:34:42.059165+00
121	12	5	EARNED	daily_login	Daily login bonus	\N	\N	315	2026-01-15 02:34:41.769701+00
122	12	10	EARNED	streak_maintain	Maintained 10-day streak	\N	\N	325	2026-01-15 02:34:42.210646+00
123	10	5	EARNED	daily_login	Daily login bonus	\N	\N	120	2026-01-16 02:58:54.419954+00
124	12	5	EARNED	daily_login	Daily login bonus	\N	\N	330	2026-01-16 03:15:56.749626+00
125	12	10	EARNED	streak_maintain	Maintained 11-day streak	\N	\N	340	2026-01-16 03:15:57.046401+00
126	9	5	EARNED	daily_login	Daily login bonus	\N	\N	100	2026-01-17 02:38:11.447627+00
127	12	5	EARNED	daily_login	Daily login bonus	\N	\N	345	2026-01-17 02:40:42.295887+00
128	12	10	EARNED	streak_maintain	Maintained 12-day streak	\N	\N	355	2026-01-17 02:40:42.659863+00
129	12	5	EARNED	daily_login	Daily login bonus	\N	\N	345	2026-01-17 02:40:42.485144+00
130	12	10	EARNED	streak_maintain	Maintained 13-day streak	\N	\N	355	2026-01-17 02:40:42.890404+00
131	11	5	EARNED	daily_login	Daily login bonus	\N	\N	290	2026-01-17 12:13:59.625535+00
132	12	5	EARNED	daily_login	Daily login bonus	\N	\N	360	2026-01-18 12:56:08.722702+00
133	12	10	EARNED	streak_maintain	Maintained 14-day streak	\N	\N	370	2026-01-18 12:56:09.071687+00
134	12	5	EARNED	daily_login	Daily login bonus	\N	\N	360	2026-01-18 12:56:08.931263+00
135	12	10	EARNED	streak_maintain	Maintained 15-day streak	\N	\N	370	2026-01-18 12:56:09.317393+00
136	11	5	EARNED	daily_login	Daily login bonus	\N	\N	295	2026-01-18 16:03:39.031014+00
137	11	10	EARNED	streak_maintain	Maintained 2-day streak	\N	\N	305	2026-01-18 16:03:39.353419+00
138	12	5	EARNED	daily_login	Daily login bonus	\N	\N	375	2026-01-19 00:25:31.393802+00
139	12	10	EARNED	streak_maintain	Maintained 16-day streak	\N	\N	385	2026-01-19 00:25:31.866135+00
140	12	5	EARNED	daily_login	Daily login bonus	\N	\N	375	2026-01-19 00:25:31.585405+00
141	12	10	EARNED	streak_maintain	Maintained 17-day streak	\N	\N	385	2026-01-19 00:25:32.027872+00
142	9	5	EARNED	daily_login	Daily login bonus	\N	\N	105	2026-01-19 01:03:32.261482+00
143	22	5	EARNED	daily_login	Daily login bonus	\N	\N	5	2026-01-19 10:54:21.486333+00
144	11	5	EARNED	daily_login	Daily login bonus	\N	\N	310	2026-01-19 11:35:21.237843+00
145	11	10	EARNED	streak_maintain	Maintained 3-day streak	\N	\N	320	2026-01-19 11:35:21.546482+00
146	12	5	EARNED	daily_login	Daily login bonus	\N	\N	390	2026-01-20 00:59:19.662407+00
147	12	10	EARNED	streak_maintain	Maintained 18-day streak	\N	\N	400	2026-01-20 00:59:20.031779+00
148	9	5	EARNED	daily_login	Daily login bonus	\N	\N	110	2026-01-20 03:00:26.335412+00
149	9	10	EARNED	streak_maintain	Maintained 2-day streak	\N	\N	120	2026-01-20 03:00:26.644099+00
150	11	5	EARNED	daily_login	Daily login bonus	\N	\N	325	2026-01-20 08:43:11.618874+00
151	11	10	EARNED	streak_maintain	Maintained 4-day streak	\N	\N	335	2026-01-20 08:43:11.983171+00
152	9	5	EARNED	daily_login	Daily login bonus	\N	\N	125	2026-01-21 02:27:29.370688+00
153	9	10	EARNED	streak_maintain	Maintained 3-day streak	\N	\N	135	2026-01-21 02:27:29.734342+00
154	11	5	EARNED	daily_login	Daily login bonus	\N	\N	340	2026-01-21 03:36:24.602288+00
155	11	10	EARNED	streak_maintain	Maintained 5-day streak	\N	\N	350	2026-01-21 03:36:24.965795+00
156	12	5	EARNED	daily_login	Daily login bonus	\N	\N	405	2026-01-21 04:09:46.398813+00
157	12	10	EARNED	streak_maintain	Maintained 19-day streak	\N	\N	415	2026-01-21 04:09:46.700561+00
158	12	5	EARNED	daily_login	Daily login bonus	\N	\N	420	2026-01-22 02:34:10.693616+00
159	12	10	EARNED	streak_maintain	Maintained 20-day streak	\N	\N	430	2026-01-22 02:34:11.230169+00
160	12	5	EARNED	daily_login	Daily login bonus	\N	\N	420	2026-01-22 02:34:10.88179+00
161	12	10	EARNED	streak_maintain	Maintained 21-day streak	\N	\N	430	2026-01-22 02:34:11.352578+00
162	9	5	EARNED	daily_login	Daily login bonus	\N	\N	140	2026-01-22 03:50:16.790217+00
163	9	10	EARNED	streak_maintain	Maintained 4-day streak	\N	\N	150	2026-01-22 03:50:17.095213+00
164	11	5	EARNED	daily_login	Daily login bonus	\N	\N	355	2026-01-22 05:35:49.205341+00
165	11	10	EARNED	streak_maintain	Maintained 6-day streak	\N	\N	365	2026-01-22 05:35:49.569462+00
166	11	5	EARNED	daily_login	Daily login bonus	\N	\N	370	2026-01-23 05:30:11.564931+00
167	11	10	EARNED	streak_maintain	Maintained 7-day streak	\N	\N	380	2026-01-23 05:30:11.930116+00
168	11	100	EARNED	streak_milestone_7	7-day streak milestone!	\N	\N	480	2026-01-23 05:30:11.958243+00
169	12	5	EARNED	daily_login	Daily login bonus	\N	\N	435	2026-01-23 07:36:09.734448+00
170	12	10	EARNED	streak_maintain	Maintained 22-day streak	\N	\N	445	2026-01-23 07:36:10.048445+00
171	11	5	EARNED	daily_login	Daily login bonus	\N	\N	485	2026-01-24 12:11:42.161364+00
172	11	10	EARNED	streak_maintain	Maintained 8-day streak	\N	\N	495	2026-01-24 12:11:42.527302+00
173	11	5	EARNED	daily_login	Daily login bonus	\N	\N	500	2026-01-25 00:37:09.400278+00
174	11	10	EARNED	streak_maintain	Maintained 9-day streak	\N	\N	510	2026-01-25 00:37:09.783486+00
175	12	5	EARNED	daily_login	Daily login bonus	\N	\N	450	2026-01-25 03:01:09.471151+00
176	17	5	EARNED	daily_login	Daily login bonus	\N	\N	10	2026-01-25 06:29:04.111972+00
177	9	5	EARNED	daily_login	Daily login bonus	\N	\N	155	2026-01-25 09:18:24.933399+00
178	11	5	EARNED	daily_login	Daily login bonus	\N	\N	515	2026-01-26 00:35:18.754133+00
179	11	10	EARNED	streak_maintain	Maintained 10-day streak	\N	\N	525	2026-01-26 00:35:19.118005+00
180	12	5	EARNED	daily_login	Daily login bonus	\N	\N	455	2026-01-26 01:19:30.242767+00
181	12	10	EARNED	streak_maintain	Maintained 2-day streak	\N	\N	465	2026-01-26 01:19:30.548193+00
182	12	5	EARNED	daily_login	Daily login bonus	\N	\N	470	2026-01-27 04:18:32.107947+00
183	12	10	EARNED	streak_maintain	Maintained 3-day streak	\N	\N	480	2026-01-27 04:18:32.475607+00
184	12	5	EARNED	daily_login	Daily login bonus	\N	\N	485	2026-01-28 02:30:41.129451+00
185	12	10	EARNED	streak_maintain	Maintained 4-day streak	\N	\N	495	2026-01-28 02:30:41.494758+00
186	11	5	EARNED	daily_login	Daily login bonus	\N	\N	530	2026-01-29 00:00:13.492005+00
187	12	5	EARNED	daily_login	Daily login bonus	\N	\N	500	2026-01-29 03:14:16.394489+00
188	12	10	EARNED	streak_maintain	Maintained 5-day streak	\N	\N	510	2026-01-29 03:14:16.716609+00
189	9	5	EARNED	daily_login	Daily login bonus	\N	\N	160	2026-01-30 01:37:36.533764+00
190	12	5	EARNED	daily_login	Daily login bonus	\N	\N	515	2026-01-30 02:55:14.177696+00
191	12	10	EARNED	streak_maintain	Maintained 6-day streak	\N	\N	525	2026-01-30 02:55:14.480875+00
192	2	5	EARNED	daily_login	Daily login bonus	\N	\N	25	2026-01-30 11:25:45.807199+00
193	11	5	EARNED	daily_login	Daily login bonus	\N	\N	535	2026-01-30 23:47:06.700526+00
194	11	10	EARNED	streak_maintain	Maintained 2-day streak	\N	\N	545	2026-01-30 23:47:07.076146+00
195	12	5	EARNED	daily_login	Daily login bonus	\N	\N	530	2026-01-31 02:35:50.62262+00
196	12	10	EARNED	streak_maintain	Maintained 7-day streak	\N	\N	540	2026-01-31 02:35:50.922045+00
197	12	100	EARNED	streak_milestone_7	7-day streak milestone!	\N	\N	640	2026-01-31 02:35:50.945765+00
198	2	5	EARNED	daily_login	Daily login bonus	\N	\N	30	2026-01-31 04:10:01.931052+00
199	2	10	EARNED	streak_maintain	Maintained 2-day streak	\N	\N	40	2026-01-31 04:10:02.86935+00
\.


--
-- TOC entry 7526 (class 0 OID 21162)
-- Dependencies: 515
-- Data for Name: collaborative_projects; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.collaborative_projects (id, title, description, course_id, group_id, deadline, status, max_team_size, created_by, created_at, updated_at) FROM stdin;
\.


--
-- TOC entry 7408 (class 0 OID 19822)
-- Dependencies: 397
-- Data for Name: communication_templates; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.communication_templates (id, name, channel, subject, body, html_body, available_tokens, media_url, media_type, category, is_active, created_by, created_at, updated_at) FROM stdin;
\.


--
-- TOC entry 7594 (class 0 OID 22076)
-- Dependencies: 583
-- Data for Name: concept_dependencies; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.concept_dependencies (parent_concept_id, child_concept_id, strength) FROM stdin;
\.


--
-- TOC entry 7593 (class 0 OID 22071)
-- Dependencies: 582
-- Data for Name: concepts; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.concepts (id, title, subject, difficulty_level, granularity_type) FROM stdin;
\.


--
-- TOC entry 7269 (class 0 OID 18560)
-- Dependencies: 258
-- Data for Name: content_difficulty_analyses; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.content_difficulty_analyses (id, content_id, content_type, flesch_reading_ease, flesch_kincaid_grade, gunning_fog_index, smog_index, avg_sentence_length, avg_word_length, vocabulary_complexity, concept_density, recommended_level, target_audience, estimated_reading_time, simplification_suggestions, difficult_terms, analyzed_at, created_at) FROM stdin;
\.


--
-- TOC entry 7267 (class 0 OID 18547)
-- Dependencies: 256
-- Data for Name: content_embeddings; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.content_embeddings (id, content_id, content_type, embedding_model, embedding_dimension, embedding_vector, content_title, content_excerpt, last_updated, created_at) FROM stdin;
\.


--
-- TOC entry 7259 (class 0 OID 18495)
-- Dependencies: 248
-- Data for Name: content_translations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.content_translations (id, content_type, content_id, field_name, language_code, translated_value, is_machine_translated, translator_notes, created_at, updated_at) FROM stdin;
\.


--
-- TOC entry 7558 (class 0 OID 21582)
-- Dependencies: 547
-- Data for Name: coupon_usages; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.coupon_usages (id, coupon_id, user_id, payment_id, original_price, discount_amount, final_price, used_at) FROM stdin;
\.


--
-- TOC entry 7452 (class 0 OID 20306)
-- Dependencies: 441
-- Data for Name: coupons; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.coupons (id, code, description, discount_type, discount_value, min_purchase_amount, max_discount_amount, course_id, category_id, instructor_id, usage_limit, usage_count, usage_per_user_limit, valid_from, valid_until, is_active, created_at, updated_at) FROM stdin;
\.


--
-- TOC entry 7422 (class 0 OID 19963)
-- Dependencies: 411
-- Data for Name: course_announcements; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.course_announcements (id, course_id, instructor_id, title, content, is_pinned, is_published, send_notification, send_email, created_at, updated_at, published_at) FROM stdin;
\.


--
-- TOC entry 7426 (class 0 OID 20010)
-- Dependencies: 415
-- Data for Name: course_bookmarks; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.course_bookmarks (id, course_id, user_id, note, created_at) FROM stdin;
\.


--
-- TOC entry 7433 (class 0 OID 20101)
-- Dependencies: 422
-- Data for Name: course_bundle_items; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.course_bundle_items (bundle_id, course_id) FROM stdin;
\.


--
-- TOC entry 7314 (class 0 OID 18952)
-- Dependencies: 303
-- Data for Name: course_bundles; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.course_bundles (id, title, slug, description, short_description, price, original_price, discount_percentage, currency, thumbnail_url, banner_url, is_published, is_active, is_featured, instructor_id, total_enrollments, total_revenue, view_count, valid_from, valid_until, meta_title, meta_description, meta_keywords, created_at, updated_at) FROM stdin;
\.


--
-- TOC entry 7497 (class 0 OID 20838)
-- Dependencies: 486
-- Data for Name: course_payments; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.course_payments (id, user_id, course_id, enrollment_id, amount, currency, status, payment_method, failure_reason, refund_reason, refunded_at, created_at, succeeded_at, gateway, cashfree_order_id, cashfree_payment_id, invoice_url) FROM stdin;
\.


--
-- TOC entry 7448 (class 0 OID 20263)
-- Dependencies: 437
-- Data for Name: course_recommendations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.course_recommendations (id, user_id, course_id, score, reason, algorithm, meta_data, created_at, clicked, enrolled) FROM stdin;
\.


--
-- TOC entry 7415 (class 0 OID 19888)
-- Dependencies: 404
-- Data for Name: course_reviews; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.course_reviews (id, course_id, user_id, rating, title, review_text, helpful_count, created_at, updated_at, is_approved) FROM stdin;
\.


--
-- TOC entry 7416 (class 0 OID 19909)
-- Dependencies: 405
-- Data for Name: course_tags; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.course_tags (course_id, tag_id) FROM stdin;
\.


--
-- TOC entry 7316 (class 0 OID 18970)
-- Dependencies: 305
-- Data for Name: courses; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.courses (id, title, slug, description, long_description, thumbnail_url, preview_video_url, instructor_id, category_id, level, prerequisites, is_published, is_featured, is_password_protected, password_hash, price, currency, created_at, updated_at, published_at, total_enrollments, average_rating, total_reviews, total_duration_minutes) FROM stdin;
1	Test	test	TEST	\N	\N	\N	1	\N	BEGINNER	[]	f	f	f	\N	4999	USD	2026-02-27 02:38:49.520908	2026-02-27 02:38:49.520912	\N	0	0	0	0
\.


--
-- TOC entry 7278 (class 0 OID 18623)
-- Dependencies: 267
-- Data for Name: curriculum_insights; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.curriculum_insights (id, date, gs_paper, total_students, average_score, common_challenges, high_performing_topics, low_performing_topics, ai_recommendations, created_at) FROM stdin;
\.


--
-- TOC entry 7617 (class 0 OID 22302)
-- Dependencies: 606
-- Data for Name: daily_dev_reports; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.daily_dev_reports (id, date, batch, summary, actions, files_changed, lines_added, lines_removed, tests_run, tests_passed, created_at, updated_at) FROM stdin;
1	2026-02-11	General	No manual development logs recorded for this date.	[]	0	0	0	0	0	2026-02-11 12:37:49.180797	2026-02-11 12:37:49.1808
2	2026-03-01	General	No manual development logs recorded for this date.	[]	0	0	0	0	0	2026-03-01 17:49:26.320477	2026-03-01 17:49:26.32048
\.


--
-- TOC entry 7394 (class 0 OID 19675)
-- Dependencies: 383
-- Data for Name: daily_reflections; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.daily_reflections (id, user_id, date, content, created_at, updated_at) FROM stdin;
\.


--
-- TOC entry 7604 (class 0 OID 22203)
-- Dependencies: 593
-- Data for Name: daily_summaries; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.daily_summaries (id, date, active_students, total_study_minutes, avg_sentiment_score, security_alerts_count, portal_health, created_at) FROM stdin;
\.


--
-- TOC entry 7390 (class 0 OID 19646)
-- Dependencies: 379
-- Data for Name: daily_tasks; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.daily_tasks (id, user_id, date, title, completed, created_at, updated_at) FROM stdin;
\.


--
-- TOC entry 7402 (class 0 OID 19768)
-- Dependencies: 391
-- Data for Name: data_masking_configs; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.data_masking_configs (id, role, user_id, mask_email, mask_phone, mask_address, mask_financial, custom_masked_fields, masking_pattern, is_active, created_at, updated_at) FROM stdin;
\.


--
-- TOC entry 7615 (class 0 OID 22285)
-- Dependencies: 604
-- Data for Name: development_logs; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.development_logs (id, date, title, description, batch, features, challenges, created_by, created_at, updated_at) FROM stdin;
\.


--
-- TOC entry 7376 (class 0 OID 19515)
-- Dependencies: 365
-- Data for Name: digital_products; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.digital_products (id, title, description, price, file_url, file_type, is_active, sales_count, created_at, updated_at, instructor_id) FROM stdin;
\.


--
-- TOC entry 7378 (class 0 OID 19532)
-- Dependencies: 367
-- Data for Name: direct_messages; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.direct_messages (id, sender_id, receiver_id, message, is_read, read_at, created_at) FROM stdin;
\.


--
-- TOC entry 7420 (class 0 OID 19947)
-- Dependencies: 409
-- Data for Name: discussion_categories; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.discussion_categories (id, course_id, name, description, order_index, is_active, created_at, updated_at) FROM stdin;
\.


--
-- TOC entry 7540 (class 0 OID 21370)
-- Dependencies: 529
-- Data for Name: discussion_posts; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.discussion_posts (id, thread_id, user_id, parent_post_id, content, is_answer, is_edited, upvotes, downvotes, created_at, updated_at) FROM stdin;
\.


--
-- TOC entry 7503 (class 0 OID 20926)
-- Dependencies: 492
-- Data for Name: discussion_threads; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.discussion_threads (id, category_id, course_id, user_id, title, content, is_pinned, is_locked, is_resolved, view_count, reply_count, created_at, updated_at, last_activity_at, is_featured, upvotes) FROM stdin;
\.


--
-- TOC entry 7481 (class 0 OID 20629)
-- Dependencies: 470
-- Data for Name: drill_content; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.drill_content (id, question_id, title, sections, estimated_reading_time, created_at, updated_at) FROM stdin;
\.


--
-- TOC entry 7396 (class 0 OID 19705)
-- Dependencies: 385
-- Data for Name: drill_daily_summaries; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.drill_daily_summaries (id, student_id, date, overall_score, average_improvement, total_time_spent, question_scores, comparison_data, strengths, challenges, recommendations, insights, created_at) FROM stdin;
\.


--
-- TOC entry 7482 (class 0 OID 20643)
-- Dependencies: 471
-- Data for Name: drill_model_answers; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.drill_model_answers (id, question_id, title, answer_text, key_points, word_count, created_at, updated_at) FROM stdin;
\.


--
-- TOC entry 7395 (class 0 OID 19691)
-- Dependencies: 384
-- Data for Name: drill_questions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.drill_questions (id, gs_paper, topic, sub_topic, question_text, key_points, difficulty, created_by, created_at, updated_at) FROM stdin;
\.


--
-- TOC entry 7483 (class 0 OID 20657)
-- Dependencies: 472
-- Data for Name: drill_sessions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.drill_sessions (id, student_id, date, question_id, question_number, before_answer_text, before_answer_image_url, after_answer_text, after_answer_image_url, question_read_time, before_writing_time, content_reading_time, after_writing_time, model_answer_time, before_score, after_score, improvement, overall_score, report_data, completed_at, created_at) FROM stdin;
\.


--
-- TOC entry 7450 (class 0 OID 20283)
-- Dependencies: 439
-- Data for Name: email_logs; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.email_logs (id, user_id, template_id, recipient_email, subject, status, sent_at, error_message, body_html, body_text, created_at) FROM stdin;
\.


--
-- TOC entry 7344 (class 0 OID 19207)
-- Dependencies: 333
-- Data for Name: email_templates; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.email_templates (id, name, display_name, subject, body_html, body_text, variables, is_system, notification_type, created_by, created_at, updated_at) FROM stdin;
\.


--
-- TOC entry 7380 (class 0 OID 19554)
-- Dependencies: 369
-- Data for Name: enquiries; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.enquiries (id, name, email, subject, message, status, created_at, updated_at, user_id) FROM stdin;
\.


--
-- TOC entry 7437 (class 0 OID 20139)
-- Dependencies: 426
-- Data for Name: enrollments; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.enrollments (id, user_id, course_id, status, progress_percentage, last_accessed_lesson_id, enrolled_at, completed_at, expires_at, last_accessed_at, payment_id, price_paid, certificate_issued, certificate_issued_at) FROM stdin;
\.


--
-- TOC entry 7328 (class 0 OID 19076)
-- Dependencies: 317
-- Data for Name: exam_sessions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.exam_sessions (id, user_id, exam_name, start_time, end_time, is_active, violations) FROM stdin;
\.


--
-- TOC entry 7633 (class 0 OID 22415)
-- Dependencies: 622
-- Data for Name: field_activities; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.field_activities (id, user_id, activity_type, latitude, longitude, address, lead_id, title, notes, photos, duration_minutes, route_distance_km, started_at, ended_at, created_at, updated_at) FROM stdin;
1	1	CHECK_IN	28.27422182947045	76.1457948800996	NH148B, Mahendragarh, Haryana, 123029, India	\N	\N	\N	\N	\N	\N	2026-02-09 11:25:21.590867+00	\N	2026-02-09 11:25:21.575283+00	\N
\.


--
-- TOC entry 7647 (class 0 OID 22554)
-- Dependencies: 636
-- Data for Name: flashcard_progress; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.flashcard_progress (id, user_id, flashcard_id, stability, difficulty, last_review_date, next_due_date, reps, lapses, status, created_at, updated_at) FROM stdin;
\.


--
-- TOC entry 7627 (class 0 OID 22369)
-- Dependencies: 616
-- Data for Name: flashcards; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.flashcards (id, lesson_id, batch1_segment_key, question, answer, explanation, difficulty, source_type, created_at, updated_at) FROM stdin;
\.


--
-- TOC entry 7382 (class 0 OID 19572)
-- Dependencies: 371
-- Data for Name: friendships; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.friendships (id, user_id, friend_id, status, created_at, accepted_at) FROM stdin;
\.


--
-- TOC entry 7608 (class 0 OID 22228)
-- Dependencies: 597
-- Data for Name: ghost_login_alerts; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.ghost_login_alerts (id, user_id, login_a_ip, login_a_time, login_b_ip, login_b_time, estimated_distance_km, time_difference_minutes, risk_score, is_resolved, resolved_at, admin_notes, created_at) FROM stdin;
\.


--
-- TOC entry 7611 (class 0 OID 22257)
-- Dependencies: 600
-- Data for Name: grapho_books; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.grapho_books (id, title, level, total_days, pdf_url, cover_image_url, is_published, created_at) FROM stdin;
\.


--
-- TOC entry 7643 (class 0 OID 22519)
-- Dependencies: 632
-- Data for Name: grapho_pages; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.grapho_pages (id, book_id, day, page_number, reference_image_url, focus_points) FROM stdin;
\.


--
-- TOC entry 7645 (class 0 OID 22534)
-- Dependencies: 634
-- Data for Name: grapho_submissions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.grapho_submissions (id, user_id, book_id, day, image_url, status, verification_score, analysis_result, started_at, completed_at, duration_seconds) FROM stdin;
\.


--
-- TOC entry 7478 (class 0 OID 20599)
-- Dependencies: 467
-- Data for Name: graphotherapy_day_completions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.graphotherapy_day_completions (id, progress_id, level, day_number, completed_at, upload_url, upload_filename, notes) FROM stdin;
1	1	1	1	2025-12-23 10:43:24.883033+00	/uploads/graphotherapy/1_1_1_5fad35cdde624dd1a148487c2ae3e70a.jpg	False Version 50-50_page-0002.jpg	\N
2	3	1	1	2025-12-23 11:03:46.991367+00	/uploads/graphotherapy/3_1_1_118842f8c7044214a9ca9d27c1609bcd.jpg	Screenshot_20251223_162627.jpg	\N
3	7	1	1	2025-12-26 04:12:15.165106+00	/uploads/graphotherapy/12_1_1_f17874f88163443ea96f69e660c89a8d.png	Screenshot 2025-06-17 150153.png	\N
4	1	1	2	2026-01-01 13:08:22.693551+00	/uploads/graphotherapy/1_1_2_a3387960cb1c4574b8af412a0fe22e67.jpg	Hand writing  Sample.jpg	\N
\.


--
-- TOC entry 7384 (class 0 OID 19592)
-- Dependencies: 373
-- Data for Name: graphotherapy_progress; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.graphotherapy_progress (id, user_id, current_level, current_day, total_streak, last_practice_date, created_at, updated_at) FROM stdin;
2	2	1	1	0	\N	2025-12-23 10:54:09.625527+00	\N
3	3	1	2	1	2025-12-23 11:03:46.99618+00	2025-12-23 11:00:40.925418+00	2025-12-23 11:03:46.991367+00
4	8	1	1	0	\N	2025-12-24 02:53:25.096894+00	\N
5	9	1	1	0	\N	2025-12-24 03:05:05.088611+00	\N
6	10	1	1	0	\N	2025-12-24 14:37:13.504678+00	\N
7	12	1	2	1	2025-12-26 04:12:15.174606+00	2025-12-26 04:11:38.614206+00	2025-12-26 04:12:15.165106+00
8	11	1	1	0	\N	2025-12-31 06:28:05.807315+00	\N
9	13	1	1	0	\N	2026-01-01 06:22:40.961636+00	\N
1	1	1	3	1	2026-01-01 13:08:22.699127+00	2025-12-23 10:42:59.136439+00	2026-01-01 13:08:22.693551+00
10	18	1	1	0	\N	2026-01-04 06:33:37.757775+00	\N
11	22	1	1	0	\N	2026-01-19 10:55:25.366638+00	\N
\.


--
-- TOC entry 7442 (class 0 OID 20207)
-- Dependencies: 431
-- Data for Name: group_members; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.group_members (group_id, user_id, joined_at) FROM stdin;
\.


--
-- TOC entry 7522 (class 0 OID 21124)
-- Dependencies: 511
-- Data for Name: group_memberships; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.group_memberships (id, group_id, user_id, role, joined_at) FROM stdin;
\.


--
-- TOC entry 7548 (class 0 OID 21476)
-- Dependencies: 537
-- Data for Name: group_post_comments; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.group_post_comments (id, post_id, user_id, content, created_at) FROM stdin;
\.


--
-- TOC entry 7524 (class 0 OID 21142)
-- Dependencies: 513
-- Data for Name: group_posts; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.group_posts (id, group_id, user_id, content, is_pinned, likes_count, created_at, updated_at) FROM stdin;
\.


--
-- TOC entry 7233 (class 0 OID 18345)
-- Dependencies: 222
-- Data for Name: groups; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.groups (id, name, description, avatar_url) FROM stdin;
\.


--
-- TOC entry 7480 (class 0 OID 20615)
-- Dependencies: 469
-- Data for Name: habit_logs; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.habit_logs (id, habit_id, date, completed, created_at, updated_at) FROM stdin;
\.


--
-- TOC entry 7392 (class 0 OID 19661)
-- Dependencies: 381
-- Data for Name: habits; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.habits (id, user_id, name, is_active, created_at, updated_at) FROM stdin;
\.


--
-- TOC entry 7300 (class 0 OID 18825)
-- Dependencies: 289
-- Data for Name: handwriting_submissions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.handwriting_submissions (id, user_id, image_url, quiz_data, report_content, report_level, created_at) FROM stdin;
\.


--
-- TOC entry 7454 (class 0 OID 20333)
-- Dependencies: 443
-- Data for Name: instructor_analytics; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.instructor_analytics (id, instructor_id, course_id, date, total_students, active_students, new_enrollments, completions, avg_progress, avg_quiz_score, quiz_attempts, assignments_submitted, avg_assignment_score, total_revenue, new_revenue, refunds, refund_amount, total_time_spent, avg_session_duration, discussion_posts, questions_asked, peer_reviews_completed, avg_rating, new_reviews, created_at, updated_at) FROM stdin;
\.


--
-- TOC entry 7350 (class 0 OID 19258)
-- Dependencies: 339
-- Data for Name: instructor_payment_info; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.instructor_payment_info (id, instructor_id, stripe_account_id, paypal_email, bank_account_encrypted, tax_country, tax_id, tax_form_type, tax_form_submitted, tax_form_verified, minimum_payout_amount, payout_frequency, verified, verified_at, created_at, updated_at) FROM stdin;
\.


--
-- TOC entry 7348 (class 0 OID 19240)
-- Dependencies: 337
-- Data for Name: instructor_payouts; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.instructor_payouts (id, instructor_id, amount, currency, status, payment_method, payment_details, transaction_id, requested_at, processed_at, completed_at, admin_notes, failure_reason, created_at, updated_at, cashfree_transfer_id) FROM stdin;
\.


--
-- TOC entry 7595 (class 0 OID 22091)
-- Dependencies: 584
-- Data for Name: interaction_logs; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.interaction_logs (id, user_id, question_id, associated_concept_id, is_correct, time_taken_ms, hesitation_detected, backspaces_count, created_at) FROM stdin;
\.


--
-- TOC entry 7578 (class 0 OID 21838)
-- Dependencies: 567
-- Data for Name: invoices; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.invoices (id, order_id, invoice_number, issued_date, due_date, pdf_url, pdf_generated, status, billing_name, billing_email, billing_address, items_json, subtotal, discount, tax, total, currency, notes, created_at, updated_at, sent_at, paid_at) FROM stdin;
\.


--
-- TOC entry 7255 (class 0 OID 18469)
-- Dependencies: 244
-- Data for Name: languages; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.languages (id, code, name, native_name, is_rtl, is_active, flag_emoji, sort_order, created_at, updated_at) FROM stdin;
\.


--
-- TOC entry 7400 (class 0 OID 19748)
-- Dependencies: 389
-- Data for Name: leads; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.leads (id, name, email, phone, status, source_primary, source_secondary, source_tertiary, assigned_to_id, is_verified, verification_method, intent_score, location_latitude, location_longitude, location_address, notes, last_activity, created_at, updated_at, drip_day_sent) FROM stdin;
\.


--
-- TOC entry 7444 (class 0 OID 20223)
-- Dependencies: 433
-- Data for Name: learning_groups; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.learning_groups (id, name, description, group_type, privacy, course_id, max_members, is_active, created_by, created_at, updated_at) FROM stdin;
\.


--
-- TOC entry 7310 (class 0 OID 18920)
-- Dependencies: 299
-- Data for Name: learning_paths; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.learning_paths (id, title, description, slug, thumbnail_url, cover_image_url, difficulty_level, estimated_duration_hours, price, is_published, creator_id, created_at, updated_at) FROM stdin;
\.


--
-- TOC entry 7424 (class 0 OID 19984)
-- Dependencies: 413
-- Data for Name: lesson_bookmarks; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.lesson_bookmarks (id, lesson_id, user_id, course_id, note, created_at) FROM stdin;
\.


--
-- TOC entry 7283 (class 0 OID 18676)
-- Dependencies: 272
-- Data for Name: lesson_drip_settings; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.lesson_drip_settings (id, lesson_id, unlock_type, unlock_date, unlock_after_days, prerequisite_lesson_id, is_active, created_at, updated_at) FROM stdin;
\.


--
-- TOC entry 7306 (class 0 OID 18883)
-- Dependencies: 295
-- Data for Name: lesson_notes; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.lesson_notes (id, lesson_id, user_id, title, content, "timestamp", is_private, color, created_at, updated_at) FROM stdin;
\.


--
-- TOC entry 7304 (class 0 OID 18860)
-- Dependencies: 293
-- Data for Name: lesson_progress; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.lesson_progress (id, user_id, lesson_id, status, time_spent_seconds, first_accessed_at, last_accessed_at, completed_at, video_progress_seconds, video_completed_percentage, result_data) FROM stdin;
\.


--
-- TOC entry 7245 (class 0 OID 18414)
-- Dependencies: 234
-- Data for Name: lessons; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.lessons (id, module_id, title, description, type, content, video_url, video_duration_seconds, video_provider, video_id, video_thumbnail_url, video_status, video_uploaded_at, attachments, order_index, is_preview, available_after_days, prerequisite_lesson_ids, duration_minutes, created_at, updated_at) FROM stdin;
\.


--
-- TOC entry 7510 (class 0 OID 21007)
-- Dependencies: 499
-- Data for Name: live_class_attendance; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.live_class_attendance (id, live_class_id, student_id, joined_at, left_at, duration_minutes, asked_questions, reactions_count, created_at) FROM stdin;
\.


--
-- TOC entry 7518 (class 0 OID 21085)
-- Dependencies: 507
-- Data for Name: live_class_chat_messages; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.live_class_chat_messages (id, live_class_id, user_id, message, is_instructor, created_at) FROM stdin;
\.


--
-- TOC entry 7544 (class 0 OID 21427)
-- Dependencies: 533
-- Data for Name: live_class_poll_responses; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.live_class_poll_responses (id, poll_id, student_id, selected_option_index, responded_at) FROM stdin;
\.


--
-- TOC entry 7512 (class 0 OID 21027)
-- Dependencies: 501
-- Data for Name: live_class_polls; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.live_class_polls (id, live_class_id, question, options, correct_option_index, status, created_at, ended_at) FROM stdin;
\.


--
-- TOC entry 7514 (class 0 OID 21043)
-- Dependencies: 503
-- Data for Name: live_class_questions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.live_class_questions (id, live_class_id, student_id, question_text, is_answered, answer_text, upvotes, created_at, answered_at) FROM stdin;
\.


--
-- TOC entry 7516 (class 0 OID 21064)
-- Dependencies: 505
-- Data for Name: live_class_reactions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.live_class_reactions (id, live_class_id, student_id, reaction_type, created_at) FROM stdin;
\.


--
-- TOC entry 7430 (class 0 OID 20053)
-- Dependencies: 419
-- Data for Name: live_classes; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.live_classes (id, course_id, title, description, scheduled_at, duration_minutes, meeting_url, meeting_password, platform, status, recording_url, recording_available, instructor_id, created_at, updated_at, whiteboard_data) FROM stdin;
\.


--
-- TOC entry 7654 (class 0 OID 27882)
-- Dependencies: 643
-- Data for Name: lms_assignments; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.lms_assignments (id, title, batch_id, rubric_json, created_at, updated_at) FROM stdin;
\.


--
-- TOC entry 7410 (class 0 OID 19841)
-- Dependencies: 399
-- Data for Name: marketing_workflows; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.marketing_workflows (id, name, description, status, trigger_type, trigger_config, audience_filters, allow_re_entry, exit_on_conversion, total_enrolled, total_completed, total_converted, created_by, created_at, updated_at) FROM stdin;
\.


--
-- TOC entry 7462 (class 0 OID 20416)
-- Dependencies: 451
-- Data for Name: marketplace_listings; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.marketplace_listings (id, course_id, is_published, is_featured, is_promoted, marketplace_category, target_audience, learning_outcomes, prerequisites, seo_title, seo_description, seo_keywords, featured_until, promotion_start, promotion_end, view_count, click_count, conversion_rate, quality_score, marketplace_rank, created_at, updated_at) FROM stdin;
\.


--
-- TOC entry 7413 (class 0 OID 19872)
-- Dependencies: 402
-- Data for Name: meditation_day_completions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.meditation_day_completions (id, progress_id, level, day_number, session_type, completed_at, total_duration_minutes, notes) FROM stdin;
1	1	1	1	morning	2025-12-23 10:44:33.127918+00	0	\N
2	1	1	2	morning	2025-12-24 14:18:25.116203+00	0	\N
3	1	1	3	morning	2025-12-25 04:23:52.280431+00	0	\N
4	8	1	1	morning	2026-02-05 07:05:07.31875+00	0	\N
\.


--
-- TOC entry 7598 (class 0 OID 22133)
-- Dependencies: 587
-- Data for Name: meditation_experiences; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.meditation_experiences (id, user_id, day_completion_id, pre_stress_level, pre_anxiety_level, pre_focus_level, pre_emotional_state, pre_concerns, pre_recorded_at, post_stress_level, post_anxiety_level, post_focus_level, post_emotional_state, post_insights, post_effectiveness_rating, post_recorded_at, stress_improvement, anxiety_improvement, focus_improvement, overall_improvement_score, created_at, updated_at) FROM stdin;
1	1	1	5	5	5	Neutral	\N	2026-02-03 18:51:45.089183+00	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	2026-02-03 18:51:45.089183+00	\N
2	1	1	5	5	5	Neutral	\N	2026-02-04 01:37:36.29449+00	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	2026-02-04 01:37:36.29449+00	\N
3	1	1	5	5	5	Neutral	\N	2026-02-04 03:43:30.464041+00	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	2026-02-04 03:43:30.464041+00	\N
4	11	4	5	5	5	Neutral	\N	2026-02-05 07:05:07.331914+00	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	2026-02-05 07:05:07.331914+00	\N
5	1	1	5	5	5	Neutral	\N	2026-02-07 03:02:35.042279+00	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	2026-02-07 03:02:35.042279+00	\N
6	1	1	5	5	5	Neutral	\N	2026-02-09 10:56:08.061515+00	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	2026-02-09 10:56:08.061515+00	\N
7	1	1	5	5	5	Neutral	\N	2026-03-15 10:53:13.16322+00	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	2026-03-15 10:53:13.16322+00	\N
\.


--
-- TOC entry 7600 (class 0 OID 22157)
-- Dependencies: 589
-- Data for Name: meditation_level_purchases; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.meditation_level_purchases (id, user_id, level, amount_paid, currency, discount_applied, payment_gateway, payment_id, order_id, payment_status, purchased_at, payment_method, receipt_url, notes, created_at, updated_at, cashfree_signature) FROM stdin;
\.


--
-- TOC entry 7493 (class 0 OID 20799)
-- Dependencies: 482
-- Data for Name: meditation_process_completions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.meditation_process_completions (id, day_completion_id, process_id, completed_at, watched_video) FROM stdin;
\.


--
-- TOC entry 7235 (class 0 OID 18356)
-- Dependencies: 224
-- Data for Name: meditation_processes; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.meditation_processes (id, name, description, "order", video_url, video_filename, duration_minutes, level, is_active, created_at, updated_at) FROM stdin;
\.


--
-- TOC entry 7294 (class 0 OID 18780)
-- Dependencies: 283
-- Data for Name: meditation_progress; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.meditation_progress (id, user_id, current_level, current_day, total_streak, preferred_session, last_practice_date, created_at, updated_at, unlocked_levels) FROM stdin;
2	2	1	1	0	morning	\N	2025-12-23 10:54:55.166383+00	\N	\N
3	3	1	1	0	morning	\N	2025-12-23 11:00:27.422033+00	\N	\N
4	8	1	1	0	morning	\N	2025-12-24 02:54:55.185508+00	\N	\N
5	9	1	1	0	morning	\N	2025-12-24 03:05:08.147868+00	\N	\N
6	10	1	1	0	morning	\N	2025-12-24 14:38:32.983195+00	\N	\N
1	1	1	4	3	morning	2025-12-25 04:23:52.283847+00	2025-12-23 10:43:56.645588+00	2025-12-25 04:23:52.280431+00	\N
7	12	1	1	0	morning	\N	2025-12-26 04:10:24.963741+00	\N	\N
8	11	1	1	0	morning	\N	2025-12-31 06:28:06.410661+00	\N	\N
9	13	1	1	0	morning	\N	2026-01-01 06:22:42.756479+00	\N	\N
10	18	1	1	0	morning	\N	2026-01-04 06:33:39.05434+00	\N	\N
11	22	1	1	0	morning	\N	2026-01-19 11:00:48.298263+00	\N	\N
12	17	1	1	0	morning	\N	2026-03-15 14:47:42.266179+00	\N	1
13	28	1	1	0	morning	\N	2026-03-15 17:59:50.183303+00	\N	1
14	29	1	1	0	\N	\N	2026-03-16 07:32:56.491477+00	\N	4
\.


--
-- TOC entry 7296 (class 0 OID 18794)
-- Dependencies: 285
-- Data for Name: meditation_sessions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.meditation_sessions (id, user_id, minutes_listened, created_at) FROM stdin;
\.


--
-- TOC entry 7564 (class 0 OID 21664)
-- Dependencies: 553
-- Data for Name: message_logs; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.message_logs (id, lead_id, workflow_execution_id, template_id, channel, recipient, subject, body, status, sent_at, delivered_at, opened_at, clicked_at, replied_at, provider_message_id, provider_response, error_message, created_at) FROM stdin;
\.


--
-- TOC entry 7631 (class 0 OID 22403)
-- Dependencies: 620
-- Data for Name: midnight_test_questions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.midnight_test_questions (id, topic_id, topic_type, question_text, question_type, correct_answer, key_concepts, difficulty, is_active, created_at) FROM stdin;
\.


--
-- TOC entry 7243 (class 0 OID 18402)
-- Dependencies: 232
-- Data for Name: modules; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.modules (id, course_id, title, description, order_index, quiz_id, assignment_prompts, duration_minutes, created_at, updated_at) FROM stdin;
1	1	Chapter 1	Chapter 1	0	\N	[]	0	2026-02-27 02:39:22.321876	2026-02-27 02:39:22.32188
2	1	Chapter 2	Chapter 2	1	\N	[]	0	2026-02-27 02:39:34.014021	2026-02-27 02:39:34.014024
\.


--
-- TOC entry 7326 (class 0 OID 19061)
-- Dependencies: 315
-- Data for Name: mood_entries; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.mood_entries (id, user_id, mood, note, "timestamp") FROM stdin;
\.


--
-- TOC entry 7340 (class 0 OID 19173)
-- Dependencies: 329
-- Data for Name: notifications; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.notifications (id, user_id, type, title, message, data, action_url, priority, is_read, read_at, delivered_realtime, delivered_push, delivered_email, created_at) FROM stdin;
1	12	SYSTEM_ANNOUNCEMENT	Admin Intervention: GUIDANCE	Urgent: Your MCQ accuracy has dropped below 40%. Let's review.	{"sender_id": 1, "action_required": false}	\N	NORMAL	f	\N	f	f	f	2026-03-15 07:13:23.530071
\.


--
-- TOC entry 7576 (class 0 OID 21811)
-- Dependencies: 565
-- Data for Name: order_items; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.order_items (id, order_id, course_id, bundle_id, item_name, item_description, quantity, unit_price, discount, total, coupon_code, created_at) FROM stdin;
\.


--
-- TOC entry 7560 (class 0 OID 21606)
-- Dependencies: 549
-- Data for Name: orders; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.orders (id, order_number, user_id, guest_email, cart_id, status, subtotal, discount, tax, total, currency, billing_name, billing_email, billing_address, payment_id, customer_notes, admin_notes, created_at, updated_at, completed_at, cancelled_at) FROM stdin;
\.


--
-- TOC entry 7271 (class 0 OID 18573)
-- Dependencies: 260
-- Data for Name: organizations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.organizations (id, name, domain, slug, sso_enabled, sso_provider, sso_enforced, is_active, max_users, settings, created_at, updated_at) FROM stdin;
\.


--
-- TOC entry 7432 (class 0 OID 20076)
-- Dependencies: 421
-- Data for Name: path_courses; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.path_courses (id, path_id, course_id, order_index, prerequisite_course_id, is_required, created_at) FROM stdin;
\.


--
-- TOC entry 7546 (class 0 OID 21446)
-- Dependencies: 535
-- Data for Name: path_enrollments; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.path_enrollments (id, path_id, student_id, current_course_id, completed_courses, total_courses, progress_percentage, is_completed, completed_at, has_paid, payment_id, enrolled_at, last_accessed_at) FROM stdin;
\.


--
-- TOC entry 7386 (class 0 OID 19606)
-- Dependencies: 375
-- Data for Name: payment_methods; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.payment_methods (id, user_id, gateway, method_type, gateway_token, gateway_customer_id, display_name, last_four, card_brand, expiry_month, expiry_year, paypal_email, is_default, is_active, created_at, updated_at, last_used_at) FROM stdin;
\.


--
-- TOC entry 7542 (class 0 OID 21396)
-- Dependencies: 531
-- Data for Name: peer_review_assignments; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.peer_review_assignments (id, assignment_id, reviewer_id, reviewee_id, submission_id, status, due_date, created_at, updated_at) FROM stdin;
\.


--
-- TOC entry 7570 (class 0 OID 21748)
-- Dependencies: 559
-- Data for Name: peer_reviews; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.peer_reviews (id, peer_review_assignment_id, content, score, created_at, updated_at) FROM stdin;
\.


--
-- TOC entry 7231 (class 0 OID 18331)
-- Dependencies: 220
-- Data for Name: permissions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.permissions (id, name, display_name, description, resource, action, created_at) FROM stdin;
\.


--
-- TOC entry 7562 (class 0 OID 21636)
-- Dependencies: 551
-- Data for Name: plagiarism_checks; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.plagiarism_checks (id, submission_id, assignment_id, student_id, similarity_percentage, originality_score, matches, is_plagiarized, review_required, reviewed_by_instructor, instructor_notes, check_method, checked_at, created_at) FROM stdin;
\.


--
-- TOC entry 7253 (class 0 OID 18459)
-- Dependencies: 242
-- Data for Name: platform_analytics; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.platform_analytics (id, date, total_users, active_users, new_users, dau, mau, wau, total_students, total_instructors, new_students, new_instructors, total_courses, active_courses, published_courses, new_courses, total_enrollments, enrollments_today, active_enrollments, completions_today, total_completions, revenue_today, revenue_mtd, total_revenue, mrr, arr, quiz_attempts, assignments_submitted, discussion_posts, live_class_attendees, certificates_issued, total_lessons, total_quizzes, total_assignments, video_hours_watched, avg_response_time, error_rate, uptime, avg_course_rating, total_reviews, new_reviews, user_growth_rate, revenue_growth_rate, enrollment_growth_rate, created_at) FROM stdin;
\.


--
-- TOC entry 7637 (class 0 OID 22462)
-- Dependencies: 626
-- Data for Name: polity_chapter_tasks; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.polity_chapter_tasks (id, chapter_number, chapter_title, research_done, report_generated, report_saved, video_generated, podcast_generated, status, updated_at) FROM stdin;
1	1	Historical Background	f	f	f	f	f	pending	2026-02-06 02:55:15.770034+00
2	2	Making of the Constitution	f	f	f	f	f	pending	2026-02-06 02:55:15.770034+00
3	3	Concept of the Constitution	f	f	f	f	f	pending	2026-02-06 02:55:15.770034+00
4	4	Salient Features of the Constitution	f	f	f	f	f	pending	2026-02-06 02:55:15.770034+00
5	5	Preamble of the Constitution	f	f	f	f	f	pending	2026-02-06 02:55:15.770034+00
6	6	Union and its Territory	f	f	f	f	f	pending	2026-02-06 02:55:15.770034+00
7	7	Citizenship	f	f	f	f	f	pending	2026-02-06 02:55:15.770034+00
8	8	Fundamental Rights	f	f	f	f	f	pending	2026-02-06 02:55:15.770034+00
9	9	Directive Principles of State Policy	f	f	f	f	f	pending	2026-02-06 02:55:15.770034+00
10	10	Fundamental Duties	f	f	f	f	f	pending	2026-02-06 02:55:15.770034+00
11	11	Amendment of the Constitution	f	f	f	f	f	pending	2026-02-06 02:55:15.770034+00
12	12	Basic Structure of the Constitution	f	f	f	f	f	pending	2026-02-06 02:55:15.770034+00
13	13	Parliamentary System	f	f	f	f	f	pending	2026-02-06 02:55:15.770034+00
14	14	Federal System	f	f	f	f	f	pending	2026-02-06 02:55:15.770034+00
15	15	Centre–State Relations	f	f	f	f	f	pending	2026-02-06 02:55:15.770034+00
16	16	Inter-State Relations	f	f	f	f	f	pending	2026-02-06 02:55:15.770034+00
17	17	Emergency Provisions	f	f	f	f	f	pending	2026-02-06 02:55:15.770034+00
18	18	President	f	f	f	f	f	pending	2026-02-06 02:55:15.770034+00
19	19	Vice-President	f	f	f	f	f	pending	2026-02-06 02:55:15.770034+00
20	20	Prime Minister	f	f	f	f	f	pending	2026-02-06 02:55:15.770034+00
21	21	Central Council of Ministers	f	f	f	f	f	pending	2026-02-06 02:55:15.770034+00
22	22	Cabinet Committees	f	f	f	f	f	pending	2026-02-06 02:55:15.770034+00
23	23	Parliament	f	f	f	f	f	pending	2026-02-06 02:55:15.770034+00
24	24	Parliamentary Committees	f	f	f	f	f	pending	2026-02-06 02:55:15.770034+00
25	25	Parliamentary Forums	f	f	f	f	f	pending	2026-02-06 02:55:15.770034+00
26	26	Parliamentary Group	f	f	f	f	f	pending	2026-02-06 02:55:15.770034+00
27	27	Supreme Court	f	f	f	f	f	pending	2026-02-06 02:55:15.770034+00
28	28	Judicial Review	f	f	f	f	f	pending	2026-02-06 02:55:15.770034+00
29	29	Judicial Activism	f	f	f	f	f	pending	2026-02-06 02:55:15.770034+00
30	30	Public Interest Litigation	f	f	f	f	f	pending	2026-02-06 02:55:15.770034+00
31	31	Governor	f	f	f	f	f	pending	2026-02-06 02:55:15.770034+00
32	32	Chief Minister	f	f	f	f	f	pending	2026-02-06 02:55:15.770034+00
33	33	State Council of Ministers	f	f	f	f	f	pending	2026-02-06 02:55:15.770034+00
34	34	State Legislature	f	f	f	f	f	pending	2026-02-06 02:55:15.770034+00
35	35	High Court	f	f	f	f	f	pending	2026-02-06 02:55:15.770034+00
36	36	Tribunals	f	f	f	f	f	pending	2026-02-06 02:55:15.770034+00
37	37	Subordinate Courts	f	f	f	f	f	pending	2026-02-06 02:55:15.770034+00
38	38	Special Provisions for Some States	f	f	f	f	f	pending	2026-02-06 02:55:15.770034+00
39	39	Panchayati Raj	f	f	f	f	f	pending	2026-02-06 02:55:15.770034+00
40	40	Municipalities	f	f	f	f	f	pending	2026-02-06 02:55:15.770034+00
41	41	Union Territories	f	f	f	f	f	pending	2026-02-06 02:55:15.770034+00
42	42	Scheduled and Tribal Areas	f	f	f	f	f	pending	2026-02-06 02:55:15.770034+00
43	43	Election Commission	f	f	f	f	f	pending	2026-02-06 02:55:15.770034+00
44	44	Union Public Service Commission (UPSC)	f	f	f	f	f	pending	2026-02-06 02:55:15.770034+00
45	45	State Public Service Commission (SPSC)	f	f	f	f	f	pending	2026-02-06 02:55:15.770034+00
46	46	Finance Commission	f	f	f	f	f	pending	2026-02-06 02:55:15.770034+00
47	47	Goods and Services Tax (GST) Council	f	f	f	f	f	pending	2026-02-06 02:55:15.770034+00
48	48	National Commission for SCs	f	f	f	f	f	pending	2026-02-06 02:55:15.770034+00
49	49	National Commission for STs	f	f	f	f	f	pending	2026-02-06 02:55:15.770034+00
50	50	National Commission for Backward Classes (NCBC)	f	f	f	f	f	pending	2026-02-06 02:55:15.770034+00
51	51	Special Officer for Linguistic Minorities	f	f	f	f	f	pending	2026-02-06 02:55:15.770034+00
52	52	Comptroller and Auditor General of India (CAG)	f	f	f	f	f	pending	2026-02-06 02:55:15.770034+00
53	53	Attorney General of India	f	f	f	f	f	pending	2026-02-06 02:55:15.770034+00
54	54	Advocate General of the State	f	f	f	f	f	pending	2026-02-06 02:55:15.770034+00
55	55	NITI Aayog	f	f	f	f	f	pending	2026-02-06 02:55:15.770034+00
56	56	National Human Rights Commission (NHRC)	f	f	f	f	f	pending	2026-02-06 02:55:15.770034+00
57	57	State Human Rights Commission (SHRC)	f	f	f	f	f	pending	2026-02-06 02:55:15.770034+00
58	58	Central Information Commission (CIC)	f	f	f	f	f	pending	2026-02-06 02:55:15.770034+00
59	59	State Information Commission (SIC)	f	f	f	f	f	pending	2026-02-06 02:55:15.770034+00
60	60	Central Vigilance Commission (CVC)	f	f	f	f	f	pending	2026-02-06 02:55:15.770034+00
61	61	Central Bureau of Investigation (CBI)	f	f	f	f	f	pending	2026-02-06 02:55:15.770034+00
62	62	Lokpal and Lokayuktas	f	f	f	f	f	pending	2026-02-06 02:55:15.770034+00
63	63	National Investigation Agency (NIA)	f	f	f	f	f	pending	2026-02-06 02:55:15.770034+00
64	64	National Disaster Management Authority (NDMA)	f	f	f	f	f	pending	2026-02-06 02:55:15.770034+00
65	65	National Commission for Women (NCW)	f	f	f	f	f	pending	2026-02-06 02:55:15.770034+00
66	66	National Commission for Protection of Child Rights (NCPCR)	f	f	f	f	f	pending	2026-02-06 02:55:15.770034+00
67	67	National Commission for Minorities	f	f	f	f	f	pending	2026-02-06 02:55:15.770034+00
68	68	Bar Council of India	f	f	f	f	f	pending	2026-02-06 02:55:15.770034+00
69	69	Law Commission of India	f	f	f	f	f	pending	2026-02-06 02:55:15.770034+00
70	70	Delimitation Commission of India	f	f	f	f	f	pending	2026-02-06 02:55:15.770034+00
71	71	Consumer Commissions	f	f	f	f	f	pending	2026-02-06 02:55:15.770034+00
72	72	Co-operative Societies	f	f	f	f	f	pending	2026-02-06 02:55:15.770034+00
73	73	Official Language	f	f	f	f	f	pending	2026-02-06 02:55:15.770034+00
74	74	Public Services	f	f	f	f	f	pending	2026-02-06 02:55:15.770034+00
75	75	Rights and Liabilities of the Government	f	f	f	f	f	pending	2026-02-06 02:55:15.770034+00
76	76	Special Provisions Relating to Certain Classes	f	f	f	f	f	pending	2026-02-06 02:55:15.770034+00
77	77	Constitutional Prescriptions	f	f	f	f	f	pending	2026-02-06 02:55:15.770034+00
78	78	Political Parties	f	f	f	f	f	pending	2026-02-06 02:55:15.770034+00
79	79	Role of Regional Parties	f	f	f	f	f	pending	2026-02-06 02:55:15.770034+00
80	80	Elections	f	f	f	f	f	pending	2026-02-06 02:55:15.770034+00
81	81	Election Laws	f	f	f	f	f	pending	2026-02-06 02:55:15.770034+00
82	82	Electoral Reforms	f	f	f	f	f	pending	2026-02-06 02:55:15.770034+00
83	83	Voting Behaviour	f	f	f	f	f	pending	2026-02-06 02:55:15.770034+00
84	84	Coalition Government	f	f	f	f	f	pending	2026-02-06 02:55:15.770034+00
85	85	Anti-Defection Law	f	f	f	f	f	pending	2026-02-06 02:55:15.770034+00
86	86	Pressure Groups	f	f	f	f	f	pending	2026-02-06 02:55:15.770034+00
87	87	National Integration	f	f	f	f	f	pending	2026-02-06 02:55:15.770034+00
88	88	Foreign Policy	f	f	f	f	f	pending	2026-02-06 02:55:15.770034+00
89	89	Landmark Judgements and their Impact	f	f	f	f	f	pending	2026-02-06 02:55:15.770034+00
90	90	Important Doctrines of Constitutional Interpretation	f	f	f	f	f	pending	2026-02-06 02:55:15.770034+00
91	91	World Constitutions	f	f	f	f	f	pending	2026-02-06 02:55:15.770034+00
92	92	National Commission for Persons with Disabilities	f	f	f	f	f	pending	2026-02-06 02:55:15.770034+00
93	93	Model Code of Conduct	f	f	f	f	f	pending	2026-02-06 02:55:15.770034+00
94	94	Bharatiya Nyaya Sanhita (Criminal Law Reforms)	f	f	f	f	f	pending	2026-02-06 02:55:15.770034+00
95	95	One Nation One Election	f	f	f	f	f	pending	2026-02-06 02:55:15.770034+00
\.


--
-- TOC entry 7568 (class 0 OID 21729)
-- Dependencies: 557
-- Data for Name: post_votes; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.post_votes (id, post_id, user_id, vote_type, created_at) FROM stdin;
\.


--
-- TOC entry 7552 (class 0 OID 21510)
-- Dependencies: 541
-- Data for Name: project_milestones; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.project_milestones (id, project_id, title, description, due_date, is_completed, created_at) FROM stdin;
\.


--
-- TOC entry 7574 (class 0 OID 21785)
-- Dependencies: 563
-- Data for Name: project_submissions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.project_submissions (id, project_id, team_id, file_url, description, submitted_at, grade, feedback, graded_by, graded_at) FROM stdin;
\.


--
-- TOC entry 7572 (class 0 OID 21766)
-- Dependencies: 561
-- Data for Name: project_team_members; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.project_team_members (id, team_id, user_id, role, joined_at) FROM stdin;
\.


--
-- TOC entry 7550 (class 0 OID 21496)
-- Dependencies: 539
-- Data for Name: project_teams; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.project_teams (id, project_id, name, created_at) FROM stdin;
\.


--
-- TOC entry 7506 (class 0 OID 20972)
-- Dependencies: 495
-- Data for Name: question_bank_questions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.question_bank_questions (question_bank_id, question_id) FROM stdin;
\.


--
-- TOC entry 7428 (class 0 OID 20031)
-- Dependencies: 417
-- Data for Name: question_banks; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.question_banks (id, course_id, instructor_id, title, description, category, difficulty_level, is_active, created_at, updated_at) FROM stdin;
\.


--
-- TOC entry 7318 (class 0 OID 18996)
-- Dependencies: 307
-- Data for Name: question_options; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.question_options (id, question_id, text, is_correct, order_index, match_text) FROM stdin;
\.


--
-- TOC entry 7285 (class 0 OID 18696)
-- Dependencies: 274
-- Data for Name: questions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.questions (id, quiz_id, text, type, points, order_index, explanation) FROM stdin;
\.


--
-- TOC entry 7441 (class 0 OID 20192)
-- Dependencies: 430
-- Data for Name: quiz_attempt_analytics; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.quiz_attempt_analytics (id, attempt_id, time_spent_seconds, average_time_per_question, questions_answered, questions_correct, questions_incorrect, questions_skipped, questions_reviewed, difficulty_rating, confidence_score, times_backtracked, hints_used, created_at) FROM stdin;
\.


--
-- TOC entry 7320 (class 0 OID 19011)
-- Dependencies: 309
-- Data for Name: quiz_attempts; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.quiz_attempts (id, quiz_id, user_id, score, passed, started_at, completed_at) FROM stdin;
\.


--
-- TOC entry 7322 (class 0 OID 19030)
-- Dependencies: 311
-- Data for Name: quiz_feedback; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.quiz_feedback (id, question_id, feedback_text, feedback_for_correct, feedback_for_incorrect, hint_text, explanation_url, media_url) FROM stdin;
\.


--
-- TOC entry 7508 (class 0 OID 20988)
-- Dependencies: 497
-- Data for Name: quiz_question_pools; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.quiz_question_pools (id, quiz_id, question_bank_id, num_questions, difficulty_filter, created_at) FROM stdin;
\.


--
-- TOC entry 7621 (class 0 OID 22329)
-- Dependencies: 610
-- Data for Name: quiz_results; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.quiz_results (id, student_email, segment_key, score, total_questions, percentage, is_weak_spot, is_reviewed, created_at) FROM stdin;
\.


--
-- TOC entry 7247 (class 0 OID 18427)
-- Dependencies: 236
-- Data for Name: quizzes; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.quizzes (id, title, description, course_id, lesson_id, time_limit_minutes, passing_score, max_attempts, is_published, shuffle_questions, show_correct_answers, instant_feedback, show_score_immediately, randomize_options, allow_review_answers, show_hints, require_all_questions, allow_backtrack, enable_ai_grading, ai_grading_model, manual_review_threshold, created_at, updated_at) FROM stdin;
\.


--
-- TOC entry 7583 (class 0 OID 21966)
-- Dependencies: 572
-- Data for Name: ras_plans; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.ras_plans (id, email, date, day_number, slots, status, created_at, updated_at) FROM stdin;
\.


--
-- TOC entry 7585 (class 0 OID 21991)
-- Dependencies: 574
-- Data for Name: ras_recordings; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.ras_recordings (id, email, topic_id, recording_url, explanation_text, recall_score, duration, feedback, created_at) FROM stdin;
\.


--
-- TOC entry 7588 (class 0 OID 22011)
-- Dependencies: 577
-- Data for Name: ras_topic_progress; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.ras_topic_progress (id, user_id, topic_id, completed, hours_spent, completed_at, last_updated, summary_text, mastery_level) FROM stdin;
1	11	rg_01	t	1.5	2026-01-03 14:21:13.990819	2026-01-03 14:21:13.990819	\N	85
2	11	rg_02	t	1.5	2026-01-03 14:21:13.990819	2026-01-03 14:21:13.990819	\N	85
3	11	rg_03	t	1.5	2026-01-03 14:21:13.990819	2026-01-03 14:21:13.990819	\N	85
4	11	rg_04	t	1.5	2026-01-03 14:21:13.990819	2026-01-03 14:21:13.990819	\N	85
5	11	rg_05	t	1.5	2026-01-03 14:21:13.990819	2026-01-03 14:21:13.990819	\N	85
6	11	rg_06	t	1.5	2026-01-03 14:21:13.990819	2026-01-03 14:21:13.990819	\N	85
7	11	rg_07	t	0	2026-01-07 01:30:02.714895	2026-01-07 01:30:02.715421	\N	0
8	11	rg_08	t	0	2026-01-07 01:30:03.410269	2026-01-07 01:30:03.410484	\N	0
9	11	rg_09	t	0	2026-01-07 01:30:11.328371	2026-01-07 01:30:11.328655	\N	0
10	11	rg_13	t	0	2026-01-07 15:30:18.499007	2026-01-07 15:30:18.49933	\N	0
12	11	rg_11	t	0	2026-01-08 15:26:43.514272	2026-01-08 15:26:43.514745	\N	0
13	11	rg_12	t	0	2026-01-08 15:26:44.783426	2026-01-08 15:26:44.783728	\N	0
14	11	rg_10	t	0	2026-01-09 11:36:10.044399	2026-01-09 11:36:10.044709	\N	0
11	11	rg_14	t	0	2026-01-10 07:35:30.707906	2026-01-10 07:35:30.708205	\N	0
15	11	ph_07	t	0	2026-01-13 12:50:07.166021	2026-01-13 12:50:07.166733	\N	0
16	11	ph_09	f	0	2026-01-14 01:36:46.408131	2026-01-14 01:36:58.293796	\N	0
17	11	ph_08	t	0	2026-01-14 01:37:35.023962	2026-01-14 01:37:35.024249	\N	0
18	1	rg_01	t	0	2026-01-14 10:39:35.947463	2026-01-14 10:39:35.947842	\N	0
\.


--
-- TOC entry 7554 (class 0 OID 21526)
-- Dependencies: 543
-- Data for Name: realtime_chat_messages; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.realtime_chat_messages (id, content, message_type, sender_id, study_room_id, study_group_id, learning_group_id, discussion_thread_id, attachment_url, attachment_name, attachment_size, is_edited, edited_at, is_deleted, deleted_at, reactions, parent_id, read_by, created_at, updated_at) FROM stdin;
\.


--
-- TOC entry 7251 (class 0 OID 18450)
-- Dependencies: 240
-- Data for Name: realtime_user_presence; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.realtime_user_presence (id, user_id, status, status_message, last_seen, last_activity, current_location, created_at, updated_at) FROM stdin;
\.


--
-- TOC entry 7649 (class 0 OID 22575)
-- Dependencies: 638
-- Data for Name: retention_reviews; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.retention_reviews (id, topic_log_id, user_id, review_type, grade, score, stability_before, stability_after, retrievability_at_review, user_input, ai_feedback, reviewed_at) FROM stdin;
\.


--
-- TOC entry 7460 (class 0 OID 20395)
-- Dependencies: 449
-- Data for Name: revenue_shares; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.revenue_shares (id, course_id, instructor_id, platform_fee_percentage, instructor_percentage, total_revenue, platform_earnings, instructor_earnings, pending_payout, total_enrollments, last_sale_date, last_payout_date, created_at, updated_at) FROM stdin;
\.


--
-- TOC entry 7464 (class 0 OID 20433)
-- Dependencies: 453
-- Data for Name: revenue_transactions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.revenue_transactions (id, course_id, instructor_id, student_id, transaction_type, total_amount, platform_fee, instructor_earnings, payment_id, stripe_payment_intent, is_refunded, refunded_at, refund_amount, coupon_code, discount_amount, affiliate_id, affiliate_commission, created_at) FROM stdin;
\.


--
-- TOC entry 7495 (class 0 OID 20818)
-- Dependencies: 484
-- Data for Name: review_helpful; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.review_helpful (id, review_id, user_id, created_at) FROM stdin;
\.


--
-- TOC entry 7651 (class 0 OID 22596)
-- Dependencies: 640
-- Data for Name: revision_cycles; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.revision_cycles (id, user_id, topic_id, cycle_type, duration_minutes, started_at, completed_at, recall_score, mcq_score, total_score, verbal_transcript, ai_feedback, user_topic_log_id) FROM stdin;
\.


--
-- TOC entry 7237 (class 0 OID 18367)
-- Dependencies: 226
-- Data for Name: rewards; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.rewards (id, name, description, cost, type, image_url) FROM stdin;
\.


--
-- TOC entry 7279 (class 0 OID 18632)
-- Dependencies: 268
-- Data for Name: role_permissions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.role_permissions (role_id, permission_id, created_at) FROM stdin;
\.


--
-- TOC entry 7229 (class 0 OID 18318)
-- Dependencies: 218
-- Data for Name: roles; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.roles (id, name, display_name, description, is_system_role, created_at, updated_at) FROM stdin;
\.


--
-- TOC entry 7330 (class 0 OID 19091)
-- Dependencies: 319
-- Data for Name: shadow_mode_sessions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.shadow_mode_sessions (id, user_id, day_number, start_time, end_time, duration_minutes, goals_completed, total_goals, focus_score, notes, is_active) FROM stdin;
\.


--
-- TOC entry 7346 (class 0 OID 19224)
-- Dependencies: 335
-- Data for Name: shopping_carts; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.shopping_carts (id, user_id, session_id, created_at, updated_at, expires_at, is_active) FROM stdin;
\.


--
-- TOC entry 7360 (class 0 OID 19362)
-- Dependencies: 349
-- Data for Name: sso_audit_logs; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.sso_audit_logs (id, organization_id, user_id, event_type, event_status, provider_type, ip_address, user_agent, details, error_message, created_at) FROM stdin;
\.


--
-- TOC entry 7287 (class 0 OID 18711)
-- Dependencies: 276
-- Data for Name: sso_configs; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.sso_configs (id, organization_id, provider_type, provider_name, entity_id, idp_entity_id, sso_url, slo_url, x509_cert, certificate_expires_at, client_id, client_secret, authorization_endpoint, token_endpoint, userinfo_endpoint, scopes, attribute_mapping, role_mapping, settings, is_active, jit_enabled, auto_assign_roles, created_at, updated_at, last_tested_at) FROM stdin;
\.


--
-- TOC entry 7358 (class 0 OID 19337)
-- Dependencies: 347
-- Data for Name: sso_sessions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.sso_sessions (id, user_id, organization_id, session_id, provider_session_id, name_id, provider_type, login_method, ip_address, user_agent, created_at, expires_at, last_activity_at, logged_out_at) FROM stdin;
\.


--
-- TOC entry 7533 (class 0 OID 21260)
-- Dependencies: 522
-- Data for Name: student_activities; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.student_activities (id, student_id, session_id, activity_type, activity_data, "timestamp") FROM stdin;
\.


--
-- TOC entry 7456 (class 0 OID 20353)
-- Dependencies: 445
-- Data for Name: student_analytics; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.student_analytics (id, user_id, course_id, preferred_time_slot, avg_session_duration, total_time_spent, sessions_count, last_active, video_completion_rate, reading_completion_rate, quiz_preference, discussion_engagement, completion_rate, avg_quiz_score, quiz_attempts, assignments_completed, avg_assignment_score, discussion_posts, questions_asked, peer_reviews_given, notes_created, bookmarks_created, estimated_completion_date, estimated_days_to_complete, at_risk_flag, engagement_score, progress_percentile, performance_percentile, engagement_percentile, created_at, last_calculated) FROM stdin;
\.


--
-- TOC entry 7439 (class 0 OID 20166)
-- Dependencies: 428
-- Data for Name: student_answers; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.student_answers (id, attempt_id, question_id, selected_option_id, text_response, is_correct, points_awarded, time_spent_seconds, submitted_at) FROM stdin;
\.


--
-- TOC entry 7596 (class 0 OID 22117)
-- Dependencies: 585
-- Data for Name: student_mastery; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.student_mastery (user_id, concept_id, mastery_probability, status, confidence_score, last_assessed_at) FROM stdin;
\.


--
-- TOC entry 7639 (class 0 OID 22474)
-- Dependencies: 628
-- Data for Name: student_nudge_history; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.student_nudge_history (id, workflow_id, user_id, sent_at, action_taken, clicked_at, converted_at) FROM stdin;
\.


--
-- TOC entry 7602 (class 0 OID 22192)
-- Dependencies: 591
-- Data for Name: student_nudge_workflows; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.student_nudge_workflows (id, name, description, is_active, trigger_type, trigger_config, message_template, action_type, reward_amount, created_at, updated_at) FROM stdin;
\.


--
-- TOC entry 7655 (class 0 OID 27896)
-- Dependencies: 644
-- Data for Name: student_submissions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.student_submissions (id, assignment_id, student_id, content_text, s3_pdf_url, status, submitted_at) FROM stdin;
\.


--
-- TOC entry 7332 (class 0 OID 19107)
-- Dependencies: 321
-- Data for Name: study_groups; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.study_groups (id, name, description, creator_id, is_private, max_members, created_at) FROM stdin;
\.


--
-- TOC entry 7249 (class 0 OID 18439)
-- Dependencies: 238
-- Data for Name: study_rooms; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.study_rooms (id, name, topic, participants_count, thumbnail_url) FROM stdin;
\.


--
-- TOC entry 7592 (class 0 OID 22045)
-- Dependencies: 581
-- Data for Name: study_sessions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.study_sessions (id, user_id, topic_id, topic_name, session_type, start_time, end_time, duration_seconds, completed, comprehension_score, notes, created_at) FROM stdin;
\.


--
-- TOC entry 7501 (class 0 OID 20906)
-- Dependencies: 490
-- Data for Name: submissions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.submissions (id, assignment_id, user_id, submitted_files, notes, grade, feedback, status, submitted_at, graded_at) FROM stdin;
\.


--
-- TOC entry 7265 (class 0 OID 18535)
-- Dependencies: 254
-- Data for Name: subscription_coupons; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.subscription_coupons (id, code, name, description, discount_type, discount_value, currency, applies_to_plans, duration, duration_months, is_active, valid_from, valid_until, max_redemptions, max_redemptions_per_user, times_redeemed, created_at, updated_at) FROM stdin;
\.


--
-- TOC entry 7466 (class 0 OID 20465)
-- Dependencies: 455
-- Data for Name: subscription_invoices; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.subscription_invoices (id, subscription_id, invoice_number, amount, currency, status, invoice_date, due_date, paid_at, invoice_pdf_url, description, created_at, updated_at, cashfree_invoice_id, cashfree_payment_id) FROM stdin;
\.


--
-- TOC entry 7263 (class 0 OID 18521)
-- Dependencies: 252
-- Data for Name: subscription_plans; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.subscription_plans (id, name, slug, description, short_description, monthly_price, yearly_price, currency, trial_days, access_level, max_courses, max_live_classes, features, included_features, is_active, is_featured, is_popular, display_order, total_subscriptions, active_subscriptions, total_revenue, created_at, updated_at, cashfree_plan_id) FROM stdin;
\.


--
-- TOC entry 7241 (class 0 OID 18390)
-- Dependencies: 230
-- Data for Name: tags; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.tags (id, name, slug) FROM stdin;
\.


--
-- TOC entry 7292 (class 0 OID 18762)
-- Dependencies: 281
-- Data for Name: tasks; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.tasks (id, title, description, task_type, duration_minutes, is_master, user_id, scheduled_date, is_completed) FROM stdin;
\.


--
-- TOC entry 7580 (class 0 OID 21857)
-- Dependencies: 569
-- Data for Name: tax_calculations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.tax_calculations (id, order_id, payment_id, subscription_id, user_id, tax_rate_id, subtotal, tax_amount, total_amount, currency, billing_country, billing_state, billing_zip, tax_id, tax_exempt, tax_exempt_reason, calculation_method, is_inclusive, created_at) FROM stdin;
\.


--
-- TOC entry 7388 (class 0 OID 19623)
-- Dependencies: 377
-- Data for Name: tax_exemptions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.tax_exemptions (id, user_id, organization_id, exemption_type, exemption_certificate, tax_id, country_code, state_code, applies_to_all, is_active, verified, verified_at, valid_from, valid_until, certificate_url, notes, created_at, updated_at) FROM stdin;
\.


--
-- TOC entry 7277 (class 0 OID 18611)
-- Dependencies: 266
-- Data for Name: tax_rates; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.tax_rates (id, country_code, state_code, region_name, tax_name, tax_rate, tax_type, applies_to_digital_goods, applies_to_physical_goods, applies_to_services, applies_to_subscriptions, is_compound, compound_order, is_active, effective_from, effective_until, description, tax_id_required, created_at, updated_at) FROM stdin;
\.


--
-- TOC entry 7660 (class 0 OID 28385)
-- Dependencies: 649
-- Data for Name: thread_votes; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.thread_votes (id, thread_id, user_id, vote_type, created_at) FROM stdin;
\.


--
-- TOC entry 7257 (class 0 OID 18479)
-- Dependencies: 246
-- Data for Name: translations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.translations (id, key, language_code, value, namespace, description, is_html, created_at, updated_at) FROM stdin;
\.


--
-- TOC entry 7362 (class 0 OID 19387)
-- Dependencies: 351
-- Data for Name: two_factor_auth; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.two_factor_auth (id, user_id, secret, is_enabled, verified_at, created_at, updated_at) FROM stdin;
\.


--
-- TOC entry 7476 (class 0 OID 20579)
-- Dependencies: 465
-- Data for Name: two_factor_backup_codes; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.two_factor_backup_codes (id, user_id, two_factor_auth_id, code_hash, is_used, used_at, created_at) FROM stdin;
\.


--
-- TOC entry 7658 (class 0 OID 28136)
-- Dependencies: 647
-- Data for Name: universal_progress; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.universal_progress (id, user_id, state_blob, last_synced_at) FROM stdin;
1	28	{"progress": {"prelims": null, "meditation": {"currentLevel": 1, "currentDay": 1, "processIndex": 0, "streakDays": 0, "lastCompleted": null}, "graphotherapy": {"currentLevel": 1, "currentDay": 1, "streakDays": 0, "lastCompleted": null}, "ras": {"currentDay": 1, "topicsCompleted": [], "streakDays": 0, "lastCompleted": null}, "completedSegments": [], "completedChapters": [], "completedMeditation": [], "completedGraphotherapy": [], "lastActivity": "2026-03-16T11:05:53.269Z", "chapterLogs": {}, "chapterConfidence": {}, "chapterStability": {}, "subjectMastery": {"economy": 0, "polity": 0, "history": 0, "geography": 0, "science": 0, "ethics": 0, "security": 0, "art_culture": 0}, "studyHabits": {"dailyMinutes": {"2026-03-16": 15}, "sessionsCount": 1, "totalStudyTime": 15}, "solvedQuestions": [], "sadhana": {"activeSadhanaId": null, "currentCounts": {}, "sriSuktamPrepStreak": 0, "lastSriSuktamActivity": null, "sankalpaResets": 0, "archetype": "Hopper", "bhaktiTier": "External", "skills": [], "journalEntries": 0, "consistencyScore": 0, "points": 0}, "offerStarts": {}}, "reports": {}, "stats": {"prelims": {"avgRecall": 0, "totalSegmentsCompleted": 0, "currentCycle": 1, "currentDay": 1, "lastSessionRecalls": []}, "meditation": {"currentLevel": 1, "currentDay": 1, "streakDays": 0, "minutesToday": 0}, "graphotherapy": {"currentLevel": 1, "currentDay": 1, "streakDays": 0}, "ras": {"currentDay": 1, "streakDays": 0}, "overallStreak": 0}}	2026-03-16 11:05:59.720543+00
4	12	{"progress": {"prelims": null, "meditation": {"currentLevel": 1, "currentDay": 1, "processIndex": 0, "streakDays": 0, "lastCompleted": null}, "graphotherapy": {"currentLevel": 1, "currentDay": 1, "streakDays": 0, "lastCompleted": null}, "ras": {"currentDay": 1, "topicsCompleted": [], "streakDays": 0, "lastCompleted": null}, "completedSegments": [], "completedChapters": [], "completedMeditation": [], "completedGraphotherapy": [], "lastActivity": "2026-03-17T02:59:20.339Z", "chapterLogs": {}, "chapterConfidence": {}, "chapterStability": {}, "subjectMastery": {"economy": 0, "polity": 0, "history": 0, "geography": 0, "science": 0, "ethics": 0, "security": 0, "art_culture": 0}, "studyHabits": {"dailyMinutes": {"2026-02-15": 75, "2026-02-16": 30, "2026-02-17": 210, "2026-02-18": 105, "2026-02-19": 75, "2026-02-20": 45, "2026-02-22": 15, "2026-02-23": 45, "2026-02-24": 60, "2026-02-25": 75, "2026-02-27": 15, "2026-02-28": 15, "2026-03-01": 120, "2026-03-02": 60, "2026-03-03": 15, "2026-03-05": 45, "2026-03-06": 105, "2026-03-07": 45, "2026-03-08": 45, "2026-03-09": 45, "2026-03-10": 45, "2026-03-11": 45, "2026-03-12": 60, "2026-03-13": 60, "2026-03-14": 90, "2026-03-15": 90, "2026-03-16": 120, "2026-03-17": 30}, "sessionsCount": 119, "totalStudyTime": 1785}, "solvedQuestions": [1, 2, "22-1", "22-2", "22-4", "22-8", "22-12", "22-19", "22-23", "22-27", "22-28", "gen-ch22-Easy-0-1771158191970", "23-1", "23-2", "23-4", "23-8", "23-9", "23-17", "gen-ch23-Easy-0-1771158191972", "gen-ch23-Hard-0-1771158191972", 3], "sadhana": {"activeSadhanaId": null, "currentCounts": {}, "sriSuktamPrepStreak": 0, "lastSriSuktamActivity": null, "sankalpaResets": 0, "archetype": "Hopper", "bhaktiTier": "External", "skills": [], "journalEntries": 0, "consistencyScore": 0}, "offerStarts": {}}, "reports": {}, "stats": {"prelims": {"avgRecall": 0, "totalSegmentsCompleted": 0, "currentCycle": 1, "currentDay": 1, "lastSessionRecalls": []}, "meditation": {"currentLevel": 1, "currentDay": 1, "streakDays": 0, "minutesToday": 0}, "graphotherapy": {"currentLevel": 1, "currentDay": 1, "streakDays": 0}, "ras": {"currentDay": 1, "streakDays": 0}, "overallStreak": 0}}	2026-03-17 02:59:22.04929+00
3	29	{"progress": {"prelims": {"cycleId": 1, "dayId": 3, "partId": 1, "segmentIndex": 0, "videoTimestamp": 0, "phase": "video", "lastUpdated": "2026-01-03T09:25:51.093Z"}, "meditation": {"currentLevel": 1, "currentDay": 1, "processIndex": 0, "streakDays": 0, "lastCompleted": null}, "graphotherapy": {"currentLevel": 1, "currentDay": 1, "streakDays": 0, "lastCompleted": null}, "ras": {"currentDay": 1, "topicsCompleted": ["Morning Meditation"], "streakDays": 1, "lastCompleted": "Mon Jan 26 2026"}, "completedSegments": ["1-1-1-1", "1-1-1-2", "1-1-1-3"], "completedChapters": [], "completedMeditation": [], "completedGraphotherapy": [], "lastActivity": "2026-03-17T06:10:42.077Z", "chapterLogs": {}, "chapterConfidence": {}, "chapterStability": {}, "subjectMastery": {"economy": 0, "polity": 0, "history": 0, "geography": 0, "science": 0, "ethics": 0, "security": 0, "art_culture": 0}, "studyHabits": {"dailyMinutes": {"2026-02-15": 165, "2026-02-17": 210, "2026-02-18": 135, "2026-02-19": 60, "2026-02-21": 15, "2026-02-22": 105, "2026-02-23": 75, "2026-02-24": 105, "2026-02-25": 75, "2026-02-26": 15, "2026-02-27": 75, "2026-02-28": 15, "2026-03-01": 15, "2026-03-03": 15, "2026-03-04": 45, "2026-03-06": 30, "2026-03-07": 90, "2026-03-08": 45, "2026-03-09": 75, "2026-03-10": 45, "2026-03-11": 30, "2026-03-12": 90, "2026-03-13": 60, "2026-03-14": 30, "2026-03-15": 120, "2026-03-16": 120, "2026-03-17": 15}, "sessionsCount": 125, "totalStudyTime": 1875}, "solvedQuestions": ["26-1", "26-4", "26-7", "26-10", "26-13", "26-16", "26-20", "26-26", "26-29", "gen-ch26-Easy-0-1771158192012", "gen-ch26-Easy-1-1771158192012", "gen-ch26-Easy-2-1771158192012", "gen-ch26-Easy-3-1771158192012", "gen-ch26-Easy-4-1771158192012", "gen-ch26-Easy-5-1771158192012", "gen-ch26-Easy-6-1771158192012", "gen-ch26-Easy-7-1771158192012", "gen-ch26-Easy-8-1771158192012", "gen-ch26-Easy-9-1771158192012", "gen-ch26-Easy-10-1771158192012", "gen-ch26-Easy-11-1771158192012", "gen-ch26-Easy-12-1771158192012", "gen-ch26-Easy-13-1771158192012", "gen-ch26-Easy-14-1771158192012", "gen-ch26-Easy-15-1771158192012", "gen-ch26-Easy-16-1771158192012", "gen-ch26-Easy-17-1771158192012", "gen-ch26-Easy-18-1771158192012", "gen-ch26-Easy-19-1771158192012", "gen-ch26-Easy-20-1771158192012", "26-2", "26-5", "26-8", "26-11", "26-14", "26-17", "26-21", "26-27", "gen-ch26-Moderate-0-1771158192012", "gen-ch26-Moderate-1-1771158192012", "gen-ch26-Moderate-2-1771158192012", "gen-ch26-Moderate-3-1771158192012", "gen-ch26-Moderate-4-1771158192012", "gen-ch26-Moderate-5-1771158192012", "gen-ch26-Moderate-6-1771158192012", "gen-ch26-Moderate-7-1771158192012", "gen-ch26-Moderate-8-1771158192012", "gen-ch26-Moderate-9-1771158192012", "gen-ch26-Moderate-10-1771158192012", "gen-ch26-Moderate-11-1771158192012", "gen-ch26-Moderate-12-1771158192012", "gen-ch26-Moderate-13-1771158192012", "gen-ch26-Moderate-14-1771158192012", "gen-ch26-Moderate-15-1771158192012", "gen-ch26-Moderate-16-1771158192012", "gen-ch26-Moderate-17-1771158192012", "gen-ch26-Moderate-18-1771158192012", "gen-ch26-Moderate-19-1771158192012", "gen-ch26-Moderate-20-1771158192012", "gen-ch26-Moderate-21-1771158192012", "27-1", "27-4", "27-9", "27-13", "27-21", "gen-ch27-Easy-0-1771158192032", "gen-ch27-Easy-1-1771158192032", "gen-ch27-Easy-2-1771158192032", "gen-ch27-Easy-3-1771158192032", "gen-ch27-Easy-4-1771158192032", "gen-ch27-Easy-5-1771158192032", "gen-ch27-Easy-6-1771158192032", "gen-ch27-Easy-7-1771158192032", "gen-ch27-Easy-8-1771158192032", "gen-ch27-Easy-9-1771158192032", "gen-ch27-Easy-10-1771158192032", "gen-ch27-Easy-11-1771158192032", "gen-ch27-Easy-12-1771158192032", "gen-ch27-Easy-13-1771158192032", "gen-ch27-Easy-14-1771158192032", "gen-ch27-Easy-15-1771158192032", "gen-ch27-Easy-16-1771158192032", "gen-ch27-Easy-17-1771158192032", "gen-ch27-Easy-18-1771158192032", "gen-ch27-Easy-19-1771158192032", "gen-ch27-Easy-20-1771158192032", "gen-ch27-Easy-21-1771158192032", "gen-ch27-Easy-22-1771158192032", "gen-ch27-Easy-23-1771158192032", "gen-ch27-Easy-24-1771158192032", "27-2", "27-5", "27-10", "27-15", "27-28", "gen-ch27-Moderate-0-1771158192032", "gen-ch27-Moderate-1-1771158192032", "gen-ch27-Moderate-2-1771158192032", "gen-ch27-Moderate-3-1771158192032", "gen-ch27-Moderate-4-1771158192032", "gen-ch27-Moderate-5-1771158192032", "gen-ch27-Moderate-6-1771158192032", "gen-ch27-Moderate-7-1771158192032", "gen-ch27-Moderate-8-1771158192032", "gen-ch27-Moderate-9-1771158192032", "gen-ch27-Moderate-10-1771158192032", "gen-ch27-Moderate-11-1771158192032", "gen-ch27-Moderate-12-1771158192032", "gen-ch27-Moderate-13-1771158192032", "gen-ch27-Moderate-14-1771158192032", "gen-ch27-Moderate-15-1771158192032", "gen-ch27-Moderate-16-1771158192032", "gen-ch27-Moderate-17-1771158192032", "gen-ch27-Moderate-18-1771158192032", "gen-ch27-Moderate-19-1771158192032", "gen-ch27-Moderate-20-1771158192032", "gen-ch27-Moderate-21-1771158192032", "gen-ch27-Moderate-22-1771158192032", "gen-ch27-Moderate-23-1771158192032", "gen-ch27-Moderate-24-1771158192032"], "sadhana": {"activeSadhanaId": "gayatri", "currentCounts": {"daily_japa": 587}, "sriSuktamPrepStreak": 1, "lastSriSuktamActivity": "Fri Mar 13 2026", "sankalpaResets": 0, "archetype": "Hopper", "bhaktiTier": "External", "skills": [], "journalEntries": 0, "consistencyScore": 0}, "offerStarts": {}}, "reports": {"1-1-1-1": {"segmentKey": "1-1-1-1", "recallScore": 72, "understandingLevel": "Satisfactory", "coveragePercentage": 0, "feedback": "Analysis completed using template - AI service temporarily unavailable.", "detailedAnalysis": "AI analysis was not available for this response. Please try again or continue with the learning material.", "strengths": ["Completed the segment", "Submitted response on time"], "areasToImprove": ["Cover all key concepts mentioned", "Add more specific details and examples"], "conceptsCovered": ["General topic understanding"], "conceptsMissed": ["Specific details pending AI analysis"], "aiSource": "template", "aiModel": null, "timestamp": "2025-12-24T14:25:20.256Z"}, "1-1-1-2": {"segmentKey": "1-1-1-2", "recallScore": 70, "understandingLevel": "Satisfactory", "coveragePercentage": 0, "feedback": "Analysis could not be completed. Please try again.", "detailedAnalysis": "Unable to analyze your response. Please try again or continue with your learning.", "strengths": ["Submitted response"], "areasToImprove": ["Ensure thorough coverage of key points"], "conceptsCovered": [], "conceptsMissed": [], "aiSource": "template", "timestamp": "2026-01-01T08:32:23.806Z"}, "1-1-1-3": {"segmentKey": "1-1-1-3", "recallScore": 70, "understandingLevel": "Satisfactory", "coveragePercentage": 0, "feedback": "Analysis could not be completed. Please try again.", "detailedAnalysis": "Unable to analyze your response. Please try again or continue with your learning.", "strengths": ["Submitted response"], "areasToImprove": ["Ensure thorough coverage of key points"], "conceptsCovered": [], "conceptsMissed": [], "aiSource": "template", "timestamp": "2026-01-02T08:01:56.047Z"}}, "stats": {"prelims": {"avgRecall": 71, "totalSegmentsCompleted": 3, "currentCycle": 1, "currentDay": 1, "lastSessionRecalls": [70, 70, 72]}, "meditation": {"currentLevel": 1, "currentDay": 1, "streakDays": 0, "minutesToday": 0}, "graphotherapy": {"currentLevel": 1, "currentDay": 1, "streakDays": 0}, "ras": {"currentDay": 1, "streakDays": 0}, "overallStreak": 0}}	2026-03-17 06:10:46.211755+00
2	1	{"progress": {"prelims": null, "meditation": {"currentLevel": 1, "currentDay": 1, "processIndex": 0, "streakDays": 0, "lastCompleted": null}, "graphotherapy": {"currentLevel": 1, "currentDay": 1, "streakDays": 0, "lastCompleted": null}, "ras": {"currentDay": 1, "topicsCompleted": [], "streakDays": 0, "lastCompleted": null}, "completedSegments": [], "completedChapters": [], "completedMeditation": [], "completedGraphotherapy": [], "lastActivity": "2026-03-17T07:37:44.093Z", "chapterLogs": {}, "chapterConfidence": {}, "chapterStability": {}, "subjectMastery": {"economy": 0, "polity": 0, "history": 0, "geography": 0, "science": 0, "ethics": 0, "security": 0, "art_culture": 0}, "studyHabits": {"dailyMinutes": {"2026-03-17": 15}, "sessionsCount": 1, "totalStudyTime": 15}, "solvedQuestions": [], "sadhana": {"activeSadhanaId": null, "currentCounts": {}, "sriSuktamPrepStreak": 0, "lastSriSuktamActivity": null, "sankalpaResets": 0, "archetype": "Hopper", "bhaktiTier": "External", "skills": [], "journalEntries": 0, "consistencyScore": 0, "points": 0}, "offerStarts": {}}, "reports": {}, "stats": {"prelims": {"avgRecall": 0, "totalSegmentsCompleted": 0, "currentCycle": 1, "currentDay": 1, "lastSessionRecalls": []}, "meditation": {"currentLevel": 1, "currentDay": 1, "streakDays": 0, "minutesToday": 0}, "graphotherapy": {"currentLevel": 1, "currentDay": 1, "streakDays": 0}, "ras": {"currentDay": 1, "streakDays": 0}, "overallStreak": 0}}	2026-03-17 07:37:49.417939+00
\.


--
-- TOC entry 7566 (class 0 OID 21710)
-- Dependencies: 555
-- Data for Name: upsc_attempts; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.upsc_attempts (id, student_id, question_id, attempt_type, answer_text, image_url, audio_url, transcription, word_count, time_taken_seconds, ocr_confidence, submitted_at, drill_session_id) FROM stdin;
\.


--
-- TOC entry 7411 (class 0 OID 19858)
-- Dependencies: 400
-- Data for Name: upsc_batches; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.upsc_batches (id, name, description, start_date, end_date, is_active, created_by_id, created_at) FROM stdin;
\.


--
-- TOC entry 7609 (class 0 OID 22242)
-- Dependencies: 598
-- Data for Name: upsc_cognitive_profiles; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.upsc_cognitive_profiles (id, user_id, current_level, wps_score, stress_index, is_level2_unlocked, is_level3_unlocked, last_updated) FROM stdin;
f3d98bc4-6b58-495e-b6a4-29dd8006c11f	1	level3	100	0	t	t	2026-02-05 06:24:37.71705
\.


--
-- TOC entry 7565 (class 0 OID 21692)
-- Dependencies: 554
-- Data for Name: upsc_content; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.upsc_content (id, question_id, content_type, title, content_text, file_url, microtopics, keywords, current_affairs, created_by_id, created_at) FROM stdin;
\.


--
-- TOC entry 7537 (class 0 OID 21328)
-- Dependencies: 526
-- Data for Name: upsc_drills; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.upsc_drills (id, batch_id, plan_id, scheduled_at, status, created_by_id, created_at) FROM stdin;
\.


--
-- TOC entry 7640 (class 0 OID 22494)
-- Dependencies: 629
-- Data for Name: upsc_gap_analysis; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.upsc_gap_analysis (id, profile_id, chapter_id, subject, status, recall_accuracy, last_tested_at, gap_details) FROM stdin;
\.


--
-- TOC entry 7489 (class 0 OID 20737)
-- Dependencies: 478
-- Data for Name: upsc_plans; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.upsc_plans (id, batch_id, plan_type, parent_plan_id, title, start_date, end_date, sequence_order, ai_generated, approved_by_id, approved_at, version, plan_data, created_at) FROM stdin;
\.


--
-- TOC entry 7536 (class 0 OID 21310)
-- Dependencies: 525
-- Data for Name: upsc_questions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.upsc_questions (id, plan_id, question_number, title, question_text, marks, subject, topic, microtopics, keywords, pyq_reference, created_by_id, created_at) FROM stdin;
\.


--
-- TOC entry 7581 (class 0 OID 21894)
-- Dependencies: 570
-- Data for Name: upsc_reports; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.upsc_reports (id, attempt_before_id, attempt_after_id, student_id, question_id, coverage_before, similarity_before, keyword_recall_before, structure_score_before, language_score_before, estimated_marks_before, coverage_after, similarity_after, keyword_recall_after, structure_score_after, language_score_after, estimated_marks_after, missed_points, suggestions, common_mistakes, tone_feedback, ai_model_version, raw_ai_output, generated_at, reviewed_by_id, reviewed_at) FROM stdin;
\.


--
-- TOC entry 7491 (class 0 OID 20780)
-- Dependencies: 480
-- Data for Name: upsc_rubrics; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.upsc_rubrics (id, batch_id, subject, rubric_data, is_active, created_by_id, created_at) FROM stdin;
\.


--
-- TOC entry 7488 (class 0 OID 20719)
-- Dependencies: 477
-- Data for Name: upsc_student_profiles; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.upsc_student_profiles (id, user_id, batch_id, enrollment_date, target_year, preferred_language, profile_data, created_at) FROM stdin;
\.


--
-- TOC entry 7538 (class 0 OID 21351)
-- Dependencies: 527
-- Data for Name: upsc_student_progress; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.upsc_student_progress (id, student_id, plan_id, is_locked, unlocked_at, completed_at, completion_percentage, created_at) FROM stdin;
\.


--
-- TOC entry 7490 (class 0 OID 20760)
-- Dependencies: 479
-- Data for Name: upsc_timer_configs; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.upsc_timer_configs (id, batch_id, phase, duration_minutes, is_active, created_by_id, created_at) FROM stdin;
\.


--
-- TOC entry 7641 (class 0 OID 22506)
-- Dependencies: 630
-- Data for Name: upsc_unlock_transactions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.upsc_unlock_transactions (id, profile_id, level_unlocked, amount_paid, currency, transaction_id, status, unlocked_at) FROM stdin;
\.


--
-- TOC entry 7364 (class 0 OID 19401)
-- Dependencies: 353
-- Data for Name: user_achievements; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.user_achievements (id, user_id, achievement_id, progress, unlocked_at, notified) FROM stdin;
\.


--
-- TOC entry 7334 (class 0 OID 19123)
-- Dependencies: 323
-- Data for Name: user_activities; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.user_activities (id, user_id, activity_type, target_type, target_id, meta_data, created_at) FROM stdin;
\.


--
-- TOC entry 7662 (class 0 OID 28409)
-- Dependencies: 651
-- Data for Name: user_activity_sessions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.user_activity_sessions (id, user_id, start_time, last_heartbeat, end_time, duration_seconds, is_active, ip_address, user_agent) FROM stdin;
1	1	2026-03-15 08:59:23.35401	2026-03-15 08:59:23.35401	2026-03-15 10:22:58.713834	0	f	169.254.172.2	Mozilla/5.0 (Windows NT; Windows NT 10.0; en-US) WindowsPowerShell/5.1.26100.7920
2	1	2026-03-15 10:22:58.713834	2026-03-15 10:22:58.713834	2026-03-15 10:27:59.694066	0	f	169.254.172.2	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
3	1	2026-03-15 10:27:59.694066	2026-03-15 10:27:59.694066	2026-03-15 10:33:50.459711	0	f	169.254.172.2	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
4	1	2026-03-15 10:33:50.459711	2026-03-15 10:33:50.459711	2026-03-15 10:38:50.757936	0	f	169.254.172.2	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
5	1	2026-03-15 10:38:50.757936	2026-03-15 10:38:50.757936	2026-03-15 10:44:18.996322	0	f	169.254.172.2	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
6	1	2026-03-15 10:44:18.996322	2026-03-15 10:44:18.996322	2026-03-15 10:49:25.052577	0	f	169.254.172.2	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
7	1	2026-03-15 10:49:25.052577	2026-03-15 10:49:25.052577	2026-03-15 10:54:37.790086	0	f	169.254.172.2	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
8	1	2026-03-15 10:54:37.790086	2026-03-15 10:54:37.790086	2026-03-15 10:59:37.827962	0	f	169.254.172.2	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
9	1	2026-03-15 10:59:37.827962	2026-03-15 10:59:37.827962	2026-03-15 11:05:14.580666	0	f	169.254.172.2	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
10	1	2026-03-15 11:05:14.580666	2026-03-15 11:05:14.580666	2026-03-15 11:10:38.665272	0	f	169.254.172.2	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
11	1	2026-03-15 11:10:38.665272	2026-03-15 11:10:38.665272	2026-03-15 11:17:20.905303	0	f	169.254.172.2	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
12	1	2026-03-15 11:17:20.905303	2026-03-15 11:17:20.905303	2026-03-15 11:23:19.723664	0	f	169.254.172.2	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
13	1	2026-03-15 11:23:19.723664	2026-03-15 11:23:19.723664	2026-03-15 11:29:18.984402	0	f	169.254.172.2	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
14	1	2026-03-15 11:29:18.984402	2026-03-15 11:29:18.984402	2026-03-15 12:06:17.283657	0	f	169.254.172.2	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
15	1	2026-03-15 12:06:17.283657	2026-03-15 12:06:17.283657	2026-03-15 12:11:27.713157	0	f	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
16	1	2026-03-15 12:11:27.713157	2026-03-15 12:11:27.713157	2026-03-15 12:16:35.946709	0	f	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
17	1	2026-03-15 12:16:35.946709	2026-03-15 12:16:35.946709	2026-03-15 12:22:18.443041	0	f	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
18	1	2026-03-15 12:22:18.443041	2026-03-15 12:22:18.443041	2026-03-15 12:22:18.449161	0	f	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
19	1	2026-03-15 12:22:18.449161	2026-03-15 12:22:18.449161	2026-03-15 12:27:33.639024	0	f	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
20	1	2026-03-15 12:27:33.639024	2026-03-15 12:27:33.639024	2026-03-15 12:32:52.249499	0	f	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
21	1	2026-03-15 12:32:52.249499	2026-03-15 12:32:52.249499	2026-03-15 12:37:59.576931	0	f	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
22	1	2026-03-15 12:37:59.576931	2026-03-15 12:37:59.576931	2026-03-15 12:43:51.628567	0	f	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
23	1	2026-03-15 12:43:51.628567	2026-03-15 12:43:51.628567	2026-03-15 13:59:28.257874	0	f	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
24	1	2026-03-15 13:59:28.257874	2026-03-15 13:59:28.257874	2026-03-15 14:04:28.680737	0	f	169.254.172.2	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
25	1	2026-03-15 14:04:28.680737	2026-03-15 14:04:28.680737	2026-03-15 14:10:06.648957	0	f	169.254.172.2	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
27	1	2026-03-15 14:10:06.648957	2026-03-15 14:10:06.648957	2026-03-15 14:15:09.80005	0	f	169.254.172.2	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
28	1	2026-03-15 14:15:09.80005	2026-03-15 14:15:09.80005	2026-03-15 14:26:03.216876	0	f	169.254.172.2	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
29	1	2026-03-15 14:26:03.216876	2026-03-15 14:26:03.216876	2026-03-15 14:32:40.09196	0	f	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
30	1	2026-03-15 14:32:40.09196	2026-03-15 14:32:40.09196	2026-03-15 14:43:05.73345	0	f	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
31	1	2026-03-15 14:43:05.73345	2026-03-15 14:43:05.73345	2026-03-15 14:48:50.976779	0	f	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
33	1	2026-03-15 14:48:50.976779	2026-03-15 14:48:50.976779	2026-03-15 14:54:20.275321	0	f	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
34	1	2026-03-15 14:54:20.275321	2026-03-15 14:54:20.275321	2026-03-15 14:59:20.688982	0	f	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
32	17	2026-03-15 14:47:42.426338	2026-03-15 14:47:42.426338	2026-03-15 14:59:41.427059	0	f	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
36	17	2026-03-15 14:59:41.427059	2026-03-15 14:59:41.427059	2026-03-15 15:05:39.995746	0	f	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
37	17	2026-03-15 15:05:39.995746	2026-03-15 15:05:39.995746	2026-03-15 15:10:41.899323	0	f	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
38	17	2026-03-15 15:10:41.899323	2026-03-15 15:10:41.899323	2026-03-15 15:16:31.102915	0	f	169.254.172.2	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
39	17	2026-03-15 15:16:31.102915	2026-03-15 15:16:31.102915	2026-03-15 15:21:31.193962	0	f	169.254.172.2	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
40	17	2026-03-15 15:21:31.193962	2026-03-15 15:21:31.193962	2026-03-15 15:27:09.018913	0	f	169.254.172.2	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
35	1	2026-03-15 14:59:20.688982	2026-03-15 14:59:20.688982	2026-03-15 17:58:09.877516	0	f	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
26	12	2026-03-15 14:09:41.326402	2026-03-15 14:09:41.326402	2026-03-15 18:50:08.376044	0	f	169.254.172.2	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36
41	17	2026-03-15 15:27:09.018913	2026-03-15 15:27:09.018913	2026-03-15 15:33:09.486522	0	f	169.254.172.2	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
42	17	2026-03-15 15:33:09.486522	2026-03-15 15:33:09.486522	2026-03-15 15:38:09.853791	0	f	169.254.172.2	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
43	17	2026-03-15 15:38:09.853791	2026-03-15 15:38:09.853791	2026-03-15 15:44:08.679314	0	f	169.254.172.2	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
44	17	2026-03-15 15:44:08.679314	2026-03-15 15:44:08.679314	2026-03-15 15:49:11.258595	0	f	169.254.172.2	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
45	17	2026-03-15 15:49:11.258595	2026-03-15 15:49:11.258595	2026-03-15 15:55:10.200133	0	f	169.254.172.2	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
46	17	2026-03-15 15:55:10.200133	2026-03-15 15:55:10.200133	2026-03-15 16:01:09.489838	0	f	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
47	17	2026-03-15 16:01:09.489838	2026-03-15 16:01:09.489838	2026-03-15 16:07:09.552715	0	f	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
48	17	2026-03-15 16:07:09.552715	2026-03-15 16:07:09.552715	2026-03-15 16:13:09.580165	0	f	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
49	17	2026-03-15 16:13:09.580165	2026-03-15 16:13:09.580165	2026-03-15 16:19:10.421437	0	f	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
50	17	2026-03-15 16:19:10.421437	2026-03-15 16:19:10.421437	2026-03-15 16:25:09.639386	0	f	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
51	17	2026-03-15 16:25:09.639386	2026-03-15 16:25:09.639386	2026-03-15 16:31:09.605929	0	f	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
52	17	2026-03-15 16:31:09.605929	2026-03-15 16:31:09.605929	2026-03-15 16:37:09.679344	0	f	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
53	17	2026-03-15 16:37:09.679344	2026-03-15 16:37:09.679344	2026-03-15 16:43:09.642323	0	f	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
54	17	2026-03-15 16:43:09.642323	2026-03-15 16:43:09.642323	2026-03-15 16:49:09.68849	0	f	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
55	17	2026-03-15 16:49:09.68849	2026-03-15 16:49:09.68849	2026-03-15 16:55:10.749253	0	f	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
56	17	2026-03-15 16:55:10.749253	2026-03-15 16:55:10.749253	2026-03-15 17:01:09.776495	0	f	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
57	17	2026-03-15 17:01:09.776495	2026-03-15 17:01:09.776495	2026-03-15 17:06:10.063916	0	f	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
58	17	2026-03-15 17:06:10.063916	2026-03-15 17:06:10.063916	2026-03-15 17:12:09.066262	0	f	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
59	17	2026-03-15 17:12:09.066262	2026-03-15 17:12:09.066262	2026-03-15 17:17:13.127785	0	f	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
62	28	2026-03-15 17:59:49.932012	2026-03-15 17:59:49.932012	2026-03-15 18:05:50.499677	0	f	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
63	28	2026-03-15 18:05:50.499677	2026-03-15 18:05:50.499677	2026-03-15 18:11:49.805664	0	f	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
64	28	2026-03-15 18:11:49.805664	2026-03-15 18:11:49.805664	2026-03-15 18:17:20.81002	0	f	169.254.172.3	Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Mobile Safari/537.36
60	17	2026-03-15 17:17:13.127785	2026-03-15 17:17:13.127785	2026-03-17 03:45:40.145915	0	f	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
67	1	2026-03-15 19:08:24.131996	2026-03-15 19:50:06.63046	2026-03-16 03:15:08.840813	2502	f	169.254.172.2	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
61	1	2026-03-15 17:58:09.877516	2026-03-15 17:58:09.877516	2026-03-15 19:08:24.131996	0	f	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
76	1	2026-03-16 10:34:40.621325	2026-03-16 11:18:39.636633	2026-03-16 13:13:10.399566	2639	f	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
66	12	2026-03-15 18:50:08.376044	2026-03-15 18:54:36.256634	2026-03-15 23:37:45.980418	267	f	169.254.172.2	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36
69	12	2026-03-16 00:59:13.975092	2026-03-16 00:59:47.200404	2026-03-16 03:16:31.453441	33	f	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36
65	28	2026-03-15 18:17:20.81002	2026-03-15 19:44:26.609379	2026-03-16 11:05:59.776235	5225	f	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
72	12	2026-03-16 04:19:25.603716	2026-03-16 04:27:39.796528	2026-03-16 06:29:57.296276	494	f	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36
71	12	2026-03-16 03:16:31.453441	2026-03-16 04:09:37.379179	2026-03-16 04:19:25.603716	3185	f	169.254.172.2	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36
68	12	2026-03-15 23:37:45.980418	2026-03-16 00:26:54.349718	2026-03-16 00:59:13.975092	2948	f	169.254.172.2	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36
70	1	2026-03-16 03:15:08.840813	2026-03-16 03:25:52.614697	2026-03-16 06:19:55.41628	643	f	169.254.172.2	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
74	9	2026-03-16 06:29:54.711896	2026-03-16 06:56:55.31551	\N	1620	t	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
73	1	2026-03-16 06:19:55.41628	2026-03-16 06:34:43.367823	2026-03-16 10:34:40.621325	887	f	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
77	28	2026-03-16 11:05:59.776235	2026-03-16 13:02:55.059704	\N	7015	t	169.254.172.2	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
75	12	2026-03-16 06:29:57.296276	2026-03-16 09:35:53.767848	2026-03-16 17:15:32.031352	11156	f	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36
79	29	2026-03-16 13:41:39.980186	2026-03-16 15:08:55.767975	2026-03-16 15:24:43.375805	5235	f	169.254.172.2	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
78	1	2026-03-16 13:13:10.399566	2026-03-16 13:41:10.065011	2026-03-17 05:40:45.366458	1679	f	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
90	1	2026-03-17 06:30:31.953627	2026-03-17 08:11:29.324408	\N	6057	t	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
85	12	2026-03-17 02:54:34.736663	2026-03-17 03:38:51.283599	\N	2656	t	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36
86	17	2026-03-17 03:45:40.145915	2026-03-17 05:35:45.722077	\N	6605	t	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
80	29	2026-03-16 15:24:43.375805	2026-03-16 15:34:41.808748	2026-03-16 16:09:23.918478	598	f	169.254.172.3	Mozilla/5.0 (Linux; U; Android 14; en-gb; CPH2569 Build/UKQ1.230924.001) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.5970.168 Mobile Safari/537.36 HeyTapBrowser/45.13.9.1
83	29	2026-03-16 23:32:28.340595	2026-03-17 00:12:28.788926	2026-03-17 00:17:29.387839	2400	f	169.254.172.2	Mozilla/5.0 (Linux; U; Android 14; en-gb; CPH2569 Build/UKQ1.230924.001) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.5970.168 Mobile Safari/537.36 HeyTapBrowser/45.13.9.1
82	12	2026-03-16 17:15:32.031352	2026-03-16 19:04:51.464848	2026-03-17 02:54:34.736663	6559	f	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36
89	1	2026-03-17 06:10:59.766311	2026-03-17 06:20:08.539996	2026-03-17 06:30:31.953627	548	f	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
81	29	2026-03-16 16:09:23.918478	2026-03-16 16:13:44.501023	2026-03-16 23:32:28.340595	260	f	169.254.172.3	Mozilla/5.0 (Linux; U; Android 14; en-gb; CPH2569 Build/UKQ1.230924.001) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.5970.168 Mobile Safari/537.36 HeyTapBrowser/45.13.9.1
84	29	2026-03-17 00:17:29.387839	2026-03-17 00:18:28.723094	2026-03-17 06:10:46.699985	59	f	169.254.172.2	Mozilla/5.0 (Linux; U; Android 14; en-gb; CPH2569 Build/UKQ1.230924.001) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.5970.168 Mobile Safari/537.36 HeyTapBrowser/45.13.9.1
88	29	2026-03-17 06:10:46.699985	2026-03-17 06:10:46.699985	\N	0	t	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
87	1	2026-03-17 05:40:45.366458	2026-03-17 06:04:42.088554	2026-03-17 06:10:59.766311	1436	f	169.254.172.3	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
\.


--
-- TOC entry 7366 (class 0 OID 19422)
-- Dependencies: 355
-- Data for Name: user_challenges; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.user_challenges (id, user_id, challenge_id, progress_data, progress_percentage, completed_at, reward_claimed, claimed_at, started_at) FROM stdin;
\.


--
-- TOC entry 7342 (class 0 OID 19193)
-- Dependencies: 331
-- Data for Name: user_email_preferences; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.user_email_preferences (id, user_id, enrollment_enabled, assignment_enabled, quiz_enabled, certificate_enabled, announcement_enabled, review_enabled, course_update_enabled, general_enabled, all_emails_enabled, created_at, updated_at) FROM stdin;
\.


--
-- TOC entry 7261 (class 0 OID 18511)
-- Dependencies: 250
-- Data for Name: user_language_preferences; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.user_language_preferences (id, user_id, preferred_language, content_languages, auto_translate, created_at, updated_at) FROM stdin;
\.


--
-- TOC entry 7404 (class 0 OID 19786)
-- Dependencies: 393
-- Data for Name: user_permissions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.user_permissions (id, user_id, can_view_leads, can_edit_leads, can_delete_leads, can_reassign_leads, can_export_leads, can_manage_users, can_view_activity_logs, can_manage_permissions, can_send_emails, can_send_sms, can_make_calls, can_view_reports, can_export_reports, can_view_analytics, can_view_payments, can_process_refunds, custom_permissions, created_at, updated_at) FROM stdin;
\.


--
-- TOC entry 7336 (class 0 OID 19139)
-- Dependencies: 325
-- Data for Name: user_preferences; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.user_preferences (id, user_id, preferred_categories, preferred_difficulty, preferred_duration, learning_goals, interests, updated_at) FROM stdin;
\.


--
-- TOC entry 7302 (class 0 OID 18842)
-- Dependencies: 291
-- Data for Name: user_rewards; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.user_rewards (id, user_id, reward_id) FROM stdin;
\.


--
-- TOC entry 7290 (class 0 OID 18745)
-- Dependencies: 279
-- Data for Name: user_roles; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.user_roles (user_id, role_id, created_at) FROM stdin;
\.


--
-- TOC entry 7406 (class 0 OID 19803)
-- Dependencies: 395
-- Data for Name: user_sessions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.user_sessions (id, user_id, session_token, ip_address, user_agent, device_info, location, is_active, login_at, logout_at, last_activity_at) FROM stdin;
\.


--
-- TOC entry 7352 (class 0 OID 19275)
-- Dependencies: 341
-- Data for Name: user_subscriptions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.user_subscriptions (id, user_id, plan_id, billing_cycle, status, started_at, trial_ends_at, current_period_start, current_period_end, cancelled_at, ended_at, price_paid, currency, auto_renew, cancel_at_period_end, last_payment_date, next_payment_date, payment_failed_count, created_at, updated_at, cashfree_subscription_id, cashfree_customer_id, cashfree_latest_invoice) FROM stdin;
\.


--
-- TOC entry 7629 (class 0 OID 22387)
-- Dependencies: 618
-- Data for Name: user_topic_logs; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.user_topic_logs (id, user_id, topic_id, topic_type, topic_name, stability, difficulty, retrievability, initial_encoding_score, last_recall_grade, total_reviews, successful_recalls, learned_at, last_review_date, next_due_date, created_at, updated_at, status, is_active) FROM stdin;
\.


--
-- TOC entry 7281 (class 0 OID 18649)
-- Dependencies: 270
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, email, username, hashed_password, is_active, is_superuser, full_name, coins, streak_days, token_version, group_id, role, last_login, is_banned, email_notifications, is_approved, is_premium, subscription_status, organization_id, is_sso_user, sso_external_id, is_verified, is_2fa_enabled, is_ras_authorized, is_batch1_authorized, is_batch2_authorized, created_at, graphotherapy_enrollment_date, is_graphotherapy_exclusive, totp_secret, revision_level, revision_exam_id, push_subscription, xp, cashfree_customer_id, purchased_subjects) FROM stdin;
9	dikshajakhar0212@gmail.com	\N	$2b$12$d21ysH5G0vnk2NfUGkm92edw3RzhXx6i7KZRp7h.VbnZ60t5qT.9e	t	f	Diksha	160	1	1	\N	student	2026-01-30 01:38:21.786795	f	t	t	f	free	\N	f	\N	f	f	f	t	f	2026-02-03 18:04:43.178829	\N	f	\N	\N	\N	\N	0	\N	[]
13	aitester123@gmail.com	\N	$2b$12$q7/M3FtevXxMhvA4dAe2gOsW6UoL8G2wKFbZJSmvyDYN3Z3R.lifm	f	f	AI Tester	25	1	1	\N	student	2026-01-10 15:57:19.043059	f	t	t	f	free	\N	f	\N	f	f	f	f	f	2026-02-03 18:04:43.178829	\N	f	\N	\N	\N	\N	0	\N	[]
1	ktej255@gmail.com	\N	$2b$12$mZiT94jl7ry8d8UFgn7u7eE4hOl7AnmXMEo4WBRpxphKuH2ix7B0a	t	t	Master Teacher	\N	0	\N	\N	admin	2026-01-31 07:51:39.518756	\N	\N	t	t	\N	\N	\N	\N	t	f	f	f	f	2026-02-03 18:04:43.178829	\N	f	\N	beginner	upsc-cse	\N	0	\N	[]
22	kyogesh323@gmail.com	\N	$2b$12$YYPW0Onn83ktHZSYTPCLbOeKUFXodttqPfF7ZDoxQLZlF9YeGNUSW	t	f	Yogesh Kumar	5	1	1	\N	student	2026-01-19 10:54:21.764101	f	t	t	f	free	\N	f	\N	f	f	f	f	f	2026-02-03 18:04:43.178829	\N	f	\N	\N	\N	\N	0	\N	[]
17	Ktej255@gmail.com	\N	$2b$12$TVbR7vvoVJ2zS7.MIUCljuOKQ6qYrf32yC4rilAdfGN3vKEqGoNo.	t	f	Tej Pratap	10	1	1	\N	student	2026-01-25 06:29:04.39777	f	t	t	f	free	\N	f	\N	f	f	f	f	f	2026-02-03 18:04:43.178829	\N	f	\N	\N	\N	\N	0	\N	[]
12	kajaldhannatar@gmail.com	\N	$2b$12$8cUoDI8cgVounqizdWYbzeOuEzqETcLp3CaXdvtaCbIwhfWEV4APy	t	f	kajal	640	0	1	\N	student	2026-01-31 06:00:30.651546	f	t	t	f	free	\N	f	\N	f	f	f	f	f	2026-02-03 18:04:43.178829	\N	f	\N	\N	\N	\N	0	\N	[]
21	student@example.com	\N	$2b$12$EfN6WgVErN.DgRvI/EI2BuOLBP5vgOGPp6Hx4iEc4RVdhH8izSxDi	t	f	Student One	0	0	1	\N	student	\N	f	t	t	f	free	\N	f	\N	f	f	f	f	f	2026-02-03 18:04:43.178829	\N	f	\N	\N	\N	\N	0	\N	[]
20	tester99@example.com	\N	$2b$12$YRVxCEUZD625fFN5MVfDJeoFvg06OV9Nl3yT4cpRL/Ho65BIS5Opu	t	f	Test User	5	1	1	\N	student	2026-01-10 07:14:26.002072	f	t	t	f	free	\N	f	\N	f	f	f	f	f	2026-02-03 18:04:43.178829	\N	f	\N	\N	\N	\N	0	\N	[]
11	chitrakumawat33@gmail.com	\N	$2b$12$RCfZ3ZXgCpIGvTwLBoKjKej0b0zGZJl4GXk/xpMfG5cbkFG0NrkYK	t	f	Chitra kumawat	545	2	1	\N	student	2026-01-30 23:47:06.985792	f	t	t	f	free	\N	f	\N	f	f	t	f	f	2026-02-03 18:04:43.178829	\N	f	\N	\N	\N	\N	0	\N	[]
4	teacher@test.com	\N	$2b$12$opfVqvzqxDi0s5Y4nsKZG.jZ5SW9tj9jiAjTNaxII2OsmyF.EJb22	f	f	Teacher User	0	0	1	\N	teacher	\N	f	t	f	f	free	\N	f	\N	f	f	f	f	f	2026-02-03 18:04:43.178829	\N	f	\N	\N	\N	\N	0	\N	[]
5	student@test.com	\N	$2b$12$BreA4s27/MLkqzV6uaLObeFlrjBwdEjbK0YkW//1TASRWEUPtdW7K	t	f	Student User	5	1	1	\N	student	2025-12-23 13:18:21.388804	f	t	t	f	free	\N	f	\N	f	f	f	f	f	2026-02-03 18:04:43.178829	\N	f	\N	\N	\N	\N	0	\N	[]
6	testadmin@example.com	\N	$2b$12$loODFqFTaZqls2Td1C087.VJ8yVQ1Be5GktW/bijLy.WljGdTKU5q	f	f	Test Admin	0	0	1	\N	admin	\N	f	t	f	f	free	\N	f	\N	f	f	f	f	f	2026-02-03 18:04:43.178829	\N	f	\N	\N	\N	\N	0	\N	[]
7	teststudent@example.com	\N	$2b$12$JeeQf/3dT8tC40Zg/o/aY.5zgduVN/u3JPh5r81a10A72sEbtxtLS	t	f	Test Student	5	1	1	\N	student	2025-12-23 14:50:00.575269	f	t	t	f	free	\N	f	\N	f	f	f	f	f	2026-02-03 18:04:43.178829	\N	f	\N	\N	\N	\N	0	\N	[]
8	dikshajakhar@0212gmail.com	\N	$2b$12$2e70AefbKzBcQLWvhDia9etSECYXAUpf3StCXRZsV8klHnx/ukc6m	t	f	Diksha	5	1	1	\N	student	2025-12-24 02:49:58.988085	f	t	t	f	free	\N	f	\N	f	f	f	f	f	2026-02-03 18:04:43.178829	\N	f	\N	\N	\N	\N	0	\N	[]
18	Test0123@gmail.com	\N	$2b$12$9E2CTMTSrm8P5diKjzlARuyans7rnmTAvphOq9UhVyXIGB54MGL9y	t	f	Test0123	20	2	1	\N	student	2026-01-04 06:32:26.55371	f	t	t	f	free	\N	f	\N	f	f	f	f	f	2026-02-03 18:04:43.178829	\N	f	\N	\N	\N	\N	0	\N	[]
3	hitvar040@gmail.com	\N	$2b$12$NNQa.kd516gtzmLMkEwa0unrC2A7z2H4E0a0XsgFnN.fnKK3qC/Tm	t	f	Mohit	50	2	1	\N	student	2026-01-13 10:41:42.895863	f	t	t	f	free	\N	f	\N	t	f	f	f	t	2026-02-03 18:04:43.178829	\N	f	\N	\N	\N	\N	0	\N	[]
19	test@example.com	\N	$2b$12$2Y1mr2Tf8mFVFFEsccd.je/jDLtI0imsiNO84FUshxW4KY3oghi/C	t	f	Test User	5	1	1	\N	student	2026-01-10 04:43:26.557154	f	t	t	f	free	\N	f	\N	f	f	f	f	f	2026-02-03 18:04:43.178829	\N	f	\N	\N	\N	\N	0	\N	[]
15	newtestuser6789@example.com	\N	$2b$12$bFxlsh2ySw5S610AOPiKPeX.UHzq59xmiW0kAPKZ96fGdIgXkJpQW	t	f	Test User	5	1	1	\N	student	2026-01-01 05:28:16.934411	f	t	t	f	free	\N	f	\N	f	f	f	f	f	2026-02-03 18:04:43.178829	\N	f	\N	\N	\N	\N	0	\N	[]
14	testai2025dec@gmail.com	\N	$2b$12$bun7PDfoGd6Hd185vFcCpeWFJ8mDAJxyFFRBvmmZX8mTp0XEvQt/q	t	f	Test AI User	5	1	1	\N	student	2025-12-31 14:35:21.858948	f	t	t	f	free	\N	f	\N	f	f	f	f	f	2026-02-03 18:04:43.178829	\N	f	\N	\N	\N	\N	0	\N	[]
10	test001@gmail.com	\N	$2b$12$0wpIClKJMUKfTsEv6HqEoe.mwsEsetWqxno/19EmVoRqruwnfrIrC	t	f	Test001	120	1	1	\N	student	2026-01-16 02:58:54.703182	f	t	t	f	free	\N	f	\N	f	f	f	f	f	2026-02-03 18:04:43.178829	\N	f	\N	\N	\N	\N	0	\N	[]
2	itspanwar111@gmail.com	\N	$2b$12$z/pVh3oPkWPJbIRrcZB0k.QI8WEe2tbY3Ru4.I3k9thMa7c7frs8G	t	f	Ramesh Panwar 	40	2	1	\N	student	2026-01-31 04:10:02.746703	f	t	t	f	free	\N	f	\N	f	f	f	f	t	2026-02-03 18:04:43.178829	\N	f	\N	\N	\N	\N	0	\N	[]
16	verifystudent999@example.com	\N	$2b$12$gOjg5qwSpaABWw/dfbpM.eyG85S.fCCmmLmxKADOtaoSgDcZkrtHC	f	f	Verify Student	5	1	1	\N	student	2026-01-01 05:35:10.832303	f	t	t	f	free	\N	f	\N	f	f	f	f	f	2026-02-03 18:04:43.178829	\N	f	\N	\N	\N	\N	0	\N	[]
23	test3@example.com	\N	$2b$12$944sOlK5RnbUkMlfB7J0iOXGmJu4cYjrwGaHMfBt1X5OaFTQEY3Wm	t	f	Test User	0	0	1	\N	student	\N	f	t	t	f	free	\N	f	\N	f	f	f	f	f	2026-02-28 05:26:12.936913	\N	f	\N	\N	\N	\N	0	\N	[]
24	jetski_random_12345@example.com	\N	$2b$12$0AXqh3td6t25tylB1RACoeocBUfgLl6tjCCme00eH.ME/4xf09Hoy	t	f	Test User	0	0	1	\N	student	\N	f	t	t	f	free	\N	f	\N	f	f	f	f	f	2026-02-28 05:26:40.040667	\N	f	\N	\N	\N	\N	0	\N	[]
25	sarit@eduecosystem.com	\N	$2b$12$MNC8E4saqzLo1J3KFtcBn.kpuBXb3uu2xqgj.OCWLU/64WVQCX3uW	t	f	Sarit	0	0	1	\N	student	\N	f	t	t	f	free	\N	f	\N	f	f	f	f	f	2026-03-13 12:39:19.787001	\N	f	\N	\N	\N	\N	0	\N	[]
26	audit_unique_12345@googletest.com	\N	$2b$12$9wP6czkrrUXljjNthhDJLuJ7yQNjTTd6pEoCuzU0Yad0DodwOWHmm	t	f	Sarit	0	0	1	\N	student	\N	f	t	t	f	free	\N	f	\N	f	f	f	f	f	2026-03-13 12:40:29.894786	\N	f	\N	\N	\N	\N	0	\N	[]
27	unique_student_999@example.om	\N	$2b$12$VQuSte2LPVk3rn66U2viLuP976pZR6fvnmqkndgUIFn65fxKsvQb2	t	f	coUnique Student	0	0	1	\N	student	\N	f	t	t	f	free	\N	f	\N	f	f	f	f	f	2026-03-15 14:18:39.242336	\N	f	\N	\N	\N	\N	0	\N	[]
28	tms11061995@gmail.com	\N	$2b$12$mrEfV3sIi.Ce/4CjlJho3.HbaM0z3b3B/Gzfav9RmdsGfRBFm25YS	t	f	tms	0	0	1	\N	student	\N	f	t	t	f	free	\N	f	\N	f	f	f	f	f	2026-03-15 17:59:46.843364	\N	f	\N	\N	\N	\N	0	\N	[]
29	namariya306@gmail.com	\N	$2b$12$fC4PQV6L3pSV1ZvcVUkhbO7/U5IGDt9rhr/XMVrxoYpDkDsa6K22e	t	f	Riyaaa Nama	\N	0	\N	\N	student	\N	\N	\N	t	t	\N	\N	\N	\N	t	f	f	t	t	2026-03-16 07:32:56.491477	\N	f	\N	\N	\N	\N	0	\N	["full_upsc", "geography", "polity", "history", "economy", "environment", "scitech"]
\.


--
-- TOC entry 7653 (class 0 OID 22618)
-- Dependencies: 642
-- Data for Name: voice_notes; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.voice_notes (id, user_id, lead_id, field_activity_id, file_url, file_name, file_size_bytes, duration_seconds, transcription, title, created_at) FROM stdin;
\.


--
-- TOC entry 7535 (class 0 OID 21281)
-- Dependencies: 524
-- Data for Name: workflow_executions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.workflow_executions (id, workflow_id, lead_id, status, current_step_id, started_at, completed_at, next_action_at, execution_log, error_message, retry_count, created_at, updated_at) FROM stdin;
\.


--
-- TOC entry 7485 (class 0 OID 20677)
-- Dependencies: 474
-- Data for Name: workflow_steps; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.workflow_steps (id, workflow_id, order_index, name, step_type, channel, template_id, wait_duration_minutes, wait_until_date, wait_for_event, condition_config, true_next_step, false_next_step, field_updates, assign_to_user_id, assign_to_team, is_active, created_at) FROM stdin;
\.


--
-- TOC entry 7867 (class 0 OID 0)
-- Dependencies: 261
-- Name: achievements_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.achievements_id_seq', 1, false);


--
-- TOC entry 7868 (class 0 OID 0)
-- Dependencies: 286
-- Name: activity_logs_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.activity_logs_id_seq', 180, true);


--
-- TOC entry 7869 (class 0 OID 0)
-- Dependencies: 358
-- Name: admin_logs_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.admin_logs_id_seq', 3, true);


--
-- TOC entry 7870 (class 0 OID 0)
-- Dependencies: 456
-- Name: affiliate_clicks_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.affiliate_clicks_id_seq', 1, false);


--
-- TOC entry 7871 (class 0 OID 0)
-- Dependencies: 520
-- Name: affiliate_commissions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.affiliate_commissions_id_seq', 1, false);


--
-- TOC entry 7872 (class 0 OID 0)
-- Dependencies: 342
-- Name: affiliate_partners_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.affiliate_partners_id_seq', 1, false);


--
-- TOC entry 7873 (class 0 OID 0)
-- Dependencies: 460
-- Name: affiliate_payouts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.affiliate_payouts_id_seq', 1, false);


--
-- TOC entry 7874 (class 0 OID 0)
-- Dependencies: 458
-- Name: affiliate_referrals_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.affiliate_referrals_id_seq', 1, false);


--
-- TOC entry 7875 (class 0 OID 0)
-- Dependencies: 360
-- Name: ai_avatars_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.ai_avatars_id_seq', 1, false);


--
-- TOC entry 7876 (class 0 OID 0)
-- Dependencies: 613
-- Name: ai_coaching_sessions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.ai_coaching_sessions_id_seq', 1, false);


--
-- TOC entry 7877 (class 0 OID 0)
-- Dependencies: 326
-- Name: ai_conversations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.ai_conversations_id_seq', 1, false);


--
-- TOC entry 7878 (class 0 OID 0)
-- Dependencies: 462
-- Name: ai_generated_quizzes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.ai_generated_quizzes_id_seq', 1, false);


--
-- TOC entry 7879 (class 0 OID 0)
-- Dependencies: 508
-- Name: ai_grading_results_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.ai_grading_results_id_seq', 1, false);


--
-- TOC entry 7880 (class 0 OID 0)
-- Dependencies: 607
-- Name: ai_planning_sessions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.ai_planning_sessions_id_seq', 1, false);


--
-- TOC entry 7881 (class 0 OID 0)
-- Dependencies: 344
-- Name: ai_usage_logs_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.ai_usage_logs_id_seq', 1, false);


--
-- TOC entry 7882 (class 0 OID 0)
-- Dependencies: 446
-- Name: analytics_events_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.analytics_events_id_seq', 3, true);


--
-- TOC entry 7883 (class 0 OID 0)
-- Dependencies: 493
-- Name: announcement_reads_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.announcement_reads_id_seq', 1, false);


--
-- TOC entry 7884 (class 0 OID 0)
-- Dependencies: 312
-- Name: assessment_rubrics_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.assessment_rubrics_id_seq', 1, false);


--
-- TOC entry 7885 (class 0 OID 0)
-- Dependencies: 362
-- Name: assets_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.assets_id_seq', 1, false);


--
-- TOC entry 7886 (class 0 OID 0)
-- Dependencies: 406
-- Name: assignments_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.assignments_id_seq', 1, false);


--
-- TOC entry 7887 (class 0 OID 0)
-- Dependencies: 601
-- Name: attendance_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.attendance_id_seq', 1, false);


--
-- TOC entry 7888 (class 0 OID 0)
-- Dependencies: 475
-- Name: automation_analytics_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.automation_analytics_id_seq', 1, false);


--
-- TOC entry 7889 (class 0 OID 0)
-- Dependencies: 296
-- Name: bank_questions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.bank_questions_id_seq', 1, false);


--
-- TOC entry 7890 (class 0 OID 0)
-- Dependencies: 611
-- Name: batch1_segments_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.batch1_segments_id_seq', 1, false);


--
-- TOC entry 7891 (class 0 OID 0)
-- Dependencies: 578
-- Name: batch1_test_results_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.batch1_test_results_id_seq', 7, true);


--
-- TOC entry 7892 (class 0 OID 0)
-- Dependencies: 594
-- Name: batch_sentiments_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.batch_sentiments_id_seq', 1, false);


--
-- TOC entry 7893 (class 0 OID 0)
-- Dependencies: 263
-- Name: blockchain_blocks_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.blockchain_blocks_id_seq', 1, false);


--
-- TOC entry 7894 (class 0 OID 0)
-- Dependencies: 423
-- Name: bundle_enrollments_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.bundle_enrollments_id_seq', 1, false);


--
-- TOC entry 7895 (class 0 OID 0)
-- Dependencies: 623
-- Name: call_logs_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.call_logs_id_seq', 1, false);


--
-- TOC entry 7896 (class 0 OID 0)
-- Dependencies: 518
-- Name: cart_items_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.cart_items_id_seq', 1, false);


--
-- TOC entry 7897 (class 0 OID 0)
-- Dependencies: 227
-- Name: categories_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.categories_id_seq', 1, false);


--
-- TOC entry 7898 (class 0 OID 0)
-- Dependencies: 300
-- Name: certificate_templates_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.certificate_templates_id_seq', 1, false);


--
-- TOC entry 7899 (class 0 OID 0)
-- Dependencies: 487
-- Name: certificates_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.certificates_id_seq', 1, false);


--
-- TOC entry 7900 (class 0 OID 0)
-- Dependencies: 277
-- Name: challenges_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.challenges_id_seq', 1, false);


--
-- TOC entry 7901 (class 0 OID 0)
-- Dependencies: 544
-- Name: chat_feedback_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.chat_feedback_id_seq', 1, false);


--
-- TOC entry 7902 (class 0 OID 0)
-- Dependencies: 434
-- Name: chat_sessions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.chat_sessions_id_seq', 1, false);


--
-- TOC entry 7903 (class 0 OID 0)
-- Dependencies: 516
-- Name: chatbot_messages_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.chatbot_messages_id_seq', 1, false);


--
-- TOC entry 7904 (class 0 OID 0)
-- Dependencies: 356
-- Name: coin_transactions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.coin_transactions_id_seq', 199, true);


--
-- TOC entry 7905 (class 0 OID 0)
-- Dependencies: 514
-- Name: collaborative_projects_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.collaborative_projects_id_seq', 1, false);


--
-- TOC entry 7906 (class 0 OID 0)
-- Dependencies: 396
-- Name: communication_templates_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.communication_templates_id_seq', 1, false);


--
-- TOC entry 7907 (class 0 OID 0)
-- Dependencies: 257
-- Name: content_difficulty_analyses_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.content_difficulty_analyses_id_seq', 1, false);


--
-- TOC entry 7908 (class 0 OID 0)
-- Dependencies: 255
-- Name: content_embeddings_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.content_embeddings_id_seq', 1, false);


--
-- TOC entry 7909 (class 0 OID 0)
-- Dependencies: 247
-- Name: content_translations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.content_translations_id_seq', 1, false);


--
-- TOC entry 7910 (class 0 OID 0)
-- Dependencies: 546
-- Name: coupon_usages_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.coupon_usages_id_seq', 1, false);


--
-- TOC entry 7911 (class 0 OID 0)
-- Dependencies: 440
-- Name: coupons_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.coupons_id_seq', 1, false);


--
-- TOC entry 7912 (class 0 OID 0)
-- Dependencies: 410
-- Name: course_announcements_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.course_announcements_id_seq', 1, false);


--
-- TOC entry 7913 (class 0 OID 0)
-- Dependencies: 414
-- Name: course_bookmarks_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.course_bookmarks_id_seq', 1, false);


--
-- TOC entry 7914 (class 0 OID 0)
-- Dependencies: 302
-- Name: course_bundles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.course_bundles_id_seq', 1, false);


--
-- TOC entry 7915 (class 0 OID 0)
-- Dependencies: 485
-- Name: course_payments_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.course_payments_id_seq', 1, false);


--
-- TOC entry 7916 (class 0 OID 0)
-- Dependencies: 436
-- Name: course_recommendations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.course_recommendations_id_seq', 1, false);


--
-- TOC entry 7917 (class 0 OID 0)
-- Dependencies: 403
-- Name: course_reviews_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.course_reviews_id_seq', 1, false);


--
-- TOC entry 7918 (class 0 OID 0)
-- Dependencies: 304
-- Name: courses_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.courses_id_seq', 1, true);


--
-- TOC entry 7919 (class 0 OID 0)
-- Dependencies: 605
-- Name: daily_dev_reports_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.daily_dev_reports_id_seq', 2, true);


--
-- TOC entry 7920 (class 0 OID 0)
-- Dependencies: 382
-- Name: daily_reflections_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.daily_reflections_id_seq', 1, false);


--
-- TOC entry 7921 (class 0 OID 0)
-- Dependencies: 592
-- Name: daily_summaries_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.daily_summaries_id_seq', 1, false);


--
-- TOC entry 7922 (class 0 OID 0)
-- Dependencies: 378
-- Name: daily_tasks_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.daily_tasks_id_seq', 1, false);


--
-- TOC entry 7923 (class 0 OID 0)
-- Dependencies: 390
-- Name: data_masking_configs_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.data_masking_configs_id_seq', 1, false);


--
-- TOC entry 7924 (class 0 OID 0)
-- Dependencies: 603
-- Name: development_logs_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.development_logs_id_seq', 1, false);


--
-- TOC entry 7925 (class 0 OID 0)
-- Dependencies: 364
-- Name: digital_products_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.digital_products_id_seq', 1, false);


--
-- TOC entry 7926 (class 0 OID 0)
-- Dependencies: 366
-- Name: direct_messages_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.direct_messages_id_seq', 1, false);


--
-- TOC entry 7927 (class 0 OID 0)
-- Dependencies: 408
-- Name: discussion_categories_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.discussion_categories_id_seq', 1, false);


--
-- TOC entry 7928 (class 0 OID 0)
-- Dependencies: 528
-- Name: discussion_posts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.discussion_posts_id_seq', 1, false);


--
-- TOC entry 7929 (class 0 OID 0)
-- Dependencies: 491
-- Name: discussion_threads_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.discussion_threads_id_seq', 1, false);


--
-- TOC entry 7930 (class 0 OID 0)
-- Dependencies: 438
-- Name: email_logs_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.email_logs_id_seq', 1, false);


--
-- TOC entry 7931 (class 0 OID 0)
-- Dependencies: 332
-- Name: email_templates_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.email_templates_id_seq', 1, false);


--
-- TOC entry 7932 (class 0 OID 0)
-- Dependencies: 368
-- Name: enquiries_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.enquiries_id_seq', 1, false);


--
-- TOC entry 7933 (class 0 OID 0)
-- Dependencies: 425
-- Name: enrollments_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.enrollments_id_seq', 1, false);


--
-- TOC entry 7934 (class 0 OID 0)
-- Dependencies: 316
-- Name: exam_sessions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.exam_sessions_id_seq', 1, false);


--
-- TOC entry 7935 (class 0 OID 0)
-- Dependencies: 621
-- Name: field_activities_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.field_activities_id_seq', 1, true);


--
-- TOC entry 7936 (class 0 OID 0)
-- Dependencies: 635
-- Name: flashcard_progress_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.flashcard_progress_id_seq', 1, false);


--
-- TOC entry 7937 (class 0 OID 0)
-- Dependencies: 615
-- Name: flashcards_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.flashcards_id_seq', 1, false);


--
-- TOC entry 7938 (class 0 OID 0)
-- Dependencies: 370
-- Name: friendships_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.friendships_id_seq', 1, false);


--
-- TOC entry 7939 (class 0 OID 0)
-- Dependencies: 596
-- Name: ghost_login_alerts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.ghost_login_alerts_id_seq', 1, false);


--
-- TOC entry 7940 (class 0 OID 0)
-- Dependencies: 599
-- Name: grapho_books_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.grapho_books_id_seq', 1, false);


--
-- TOC entry 7941 (class 0 OID 0)
-- Dependencies: 631
-- Name: grapho_pages_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.grapho_pages_id_seq', 1, false);


--
-- TOC entry 7942 (class 0 OID 0)
-- Dependencies: 633
-- Name: grapho_submissions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.grapho_submissions_id_seq', 1, false);


--
-- TOC entry 7943 (class 0 OID 0)
-- Dependencies: 466
-- Name: graphotherapy_day_completions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.graphotherapy_day_completions_id_seq', 4, true);


--
-- TOC entry 7944 (class 0 OID 0)
-- Dependencies: 372
-- Name: graphotherapy_progress_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.graphotherapy_progress_id_seq', 11, true);


--
-- TOC entry 7945 (class 0 OID 0)
-- Dependencies: 510
-- Name: group_memberships_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.group_memberships_id_seq', 1, false);


--
-- TOC entry 7946 (class 0 OID 0)
-- Dependencies: 536
-- Name: group_post_comments_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.group_post_comments_id_seq', 1, false);


--
-- TOC entry 7947 (class 0 OID 0)
-- Dependencies: 512
-- Name: group_posts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.group_posts_id_seq', 1, false);


--
-- TOC entry 7948 (class 0 OID 0)
-- Dependencies: 221
-- Name: groups_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.groups_id_seq', 1, false);


--
-- TOC entry 7949 (class 0 OID 0)
-- Dependencies: 468
-- Name: habit_logs_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.habit_logs_id_seq', 1, false);


--
-- TOC entry 7950 (class 0 OID 0)
-- Dependencies: 380
-- Name: habits_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.habits_id_seq', 1, false);


--
-- TOC entry 7951 (class 0 OID 0)
-- Dependencies: 288
-- Name: handwriting_submissions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.handwriting_submissions_id_seq', 1, false);


--
-- TOC entry 7952 (class 0 OID 0)
-- Dependencies: 442
-- Name: instructor_analytics_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.instructor_analytics_id_seq', 1, false);


--
-- TOC entry 7953 (class 0 OID 0)
-- Dependencies: 338
-- Name: instructor_payment_info_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.instructor_payment_info_id_seq', 1, false);


--
-- TOC entry 7954 (class 0 OID 0)
-- Dependencies: 336
-- Name: instructor_payouts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.instructor_payouts_id_seq', 1, false);


--
-- TOC entry 7955 (class 0 OID 0)
-- Dependencies: 566
-- Name: invoices_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.invoices_id_seq', 1, false);


--
-- TOC entry 7956 (class 0 OID 0)
-- Dependencies: 243
-- Name: languages_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.languages_id_seq', 1, false);


--
-- TOC entry 7957 (class 0 OID 0)
-- Dependencies: 388
-- Name: leads_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.leads_id_seq', 1, false);


--
-- TOC entry 7958 (class 0 OID 0)
-- Dependencies: 432
-- Name: learning_groups_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.learning_groups_id_seq', 1, false);


--
-- TOC entry 7959 (class 0 OID 0)
-- Dependencies: 298
-- Name: learning_paths_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.learning_paths_id_seq', 1, false);


--
-- TOC entry 7960 (class 0 OID 0)
-- Dependencies: 412
-- Name: lesson_bookmarks_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.lesson_bookmarks_id_seq', 1, false);


--
-- TOC entry 7961 (class 0 OID 0)
-- Dependencies: 271
-- Name: lesson_drip_settings_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.lesson_drip_settings_id_seq', 1, false);


--
-- TOC entry 7962 (class 0 OID 0)
-- Dependencies: 294
-- Name: lesson_notes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.lesson_notes_id_seq', 1, false);


--
-- TOC entry 7963 (class 0 OID 0)
-- Dependencies: 292
-- Name: lesson_progress_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.lesson_progress_id_seq', 1, false);


--
-- TOC entry 7964 (class 0 OID 0)
-- Dependencies: 233
-- Name: lessons_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.lessons_id_seq', 1, false);


--
-- TOC entry 7965 (class 0 OID 0)
-- Dependencies: 498
-- Name: live_class_attendance_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.live_class_attendance_id_seq', 1, false);


--
-- TOC entry 7966 (class 0 OID 0)
-- Dependencies: 506
-- Name: live_class_chat_messages_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.live_class_chat_messages_id_seq', 1, false);


--
-- TOC entry 7967 (class 0 OID 0)
-- Dependencies: 532
-- Name: live_class_poll_responses_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.live_class_poll_responses_id_seq', 1, false);


--
-- TOC entry 7968 (class 0 OID 0)
-- Dependencies: 500
-- Name: live_class_polls_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.live_class_polls_id_seq', 1, false);


--
-- TOC entry 7969 (class 0 OID 0)
-- Dependencies: 502
-- Name: live_class_questions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.live_class_questions_id_seq', 1, false);


--
-- TOC entry 7970 (class 0 OID 0)
-- Dependencies: 504
-- Name: live_class_reactions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.live_class_reactions_id_seq', 1, false);


--
-- TOC entry 7971 (class 0 OID 0)
-- Dependencies: 418
-- Name: live_classes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.live_classes_id_seq', 1, false);


--
-- TOC entry 7972 (class 0 OID 0)
-- Dependencies: 398
-- Name: marketing_workflows_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.marketing_workflows_id_seq', 1, false);


--
-- TOC entry 7973 (class 0 OID 0)
-- Dependencies: 450
-- Name: marketplace_listings_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.marketplace_listings_id_seq', 1, false);


--
-- TOC entry 7974 (class 0 OID 0)
-- Dependencies: 401
-- Name: meditation_day_completions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.meditation_day_completions_id_seq', 4, true);


--
-- TOC entry 7975 (class 0 OID 0)
-- Dependencies: 586
-- Name: meditation_experiences_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.meditation_experiences_id_seq', 7, true);


--
-- TOC entry 7976 (class 0 OID 0)
-- Dependencies: 588
-- Name: meditation_level_purchases_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.meditation_level_purchases_id_seq', 1, false);


--
-- TOC entry 7977 (class 0 OID 0)
-- Dependencies: 481
-- Name: meditation_process_completions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.meditation_process_completions_id_seq', 1, false);


--
-- TOC entry 7978 (class 0 OID 0)
-- Dependencies: 223
-- Name: meditation_processes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.meditation_processes_id_seq', 1, false);


--
-- TOC entry 7979 (class 0 OID 0)
-- Dependencies: 282
-- Name: meditation_progress_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.meditation_progress_id_seq', 14, true);


--
-- TOC entry 7980 (class 0 OID 0)
-- Dependencies: 284
-- Name: meditation_sessions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.meditation_sessions_id_seq', 1, false);


--
-- TOC entry 7981 (class 0 OID 0)
-- Dependencies: 552
-- Name: message_logs_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.message_logs_id_seq', 1, false);


--
-- TOC entry 7982 (class 0 OID 0)
-- Dependencies: 619
-- Name: midnight_test_questions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.midnight_test_questions_id_seq', 1, false);


--
-- TOC entry 7983 (class 0 OID 0)
-- Dependencies: 231
-- Name: modules_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.modules_id_seq', 2, true);


--
-- TOC entry 7984 (class 0 OID 0)
-- Dependencies: 314
-- Name: mood_entries_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.mood_entries_id_seq', 1, false);


--
-- TOC entry 7985 (class 0 OID 0)
-- Dependencies: 328
-- Name: notifications_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.notifications_id_seq', 1, true);


--
-- TOC entry 7986 (class 0 OID 0)
-- Dependencies: 564
-- Name: order_items_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.order_items_id_seq', 1, false);


--
-- TOC entry 7987 (class 0 OID 0)
-- Dependencies: 548
-- Name: orders_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.orders_id_seq', 1, false);


--
-- TOC entry 7988 (class 0 OID 0)
-- Dependencies: 259
-- Name: organizations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.organizations_id_seq', 1, false);


--
-- TOC entry 7989 (class 0 OID 0)
-- Dependencies: 420
-- Name: path_courses_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.path_courses_id_seq', 1, false);


--
-- TOC entry 7990 (class 0 OID 0)
-- Dependencies: 534
-- Name: path_enrollments_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.path_enrollments_id_seq', 1, false);


--
-- TOC entry 7991 (class 0 OID 0)
-- Dependencies: 374
-- Name: payment_methods_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.payment_methods_id_seq', 1, false);


--
-- TOC entry 7992 (class 0 OID 0)
-- Dependencies: 530
-- Name: peer_review_assignments_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.peer_review_assignments_id_seq', 1, false);


--
-- TOC entry 7993 (class 0 OID 0)
-- Dependencies: 558
-- Name: peer_reviews_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.peer_reviews_id_seq', 1, false);


--
-- TOC entry 7994 (class 0 OID 0)
-- Dependencies: 219
-- Name: permissions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.permissions_id_seq', 1, false);


--
-- TOC entry 7995 (class 0 OID 0)
-- Dependencies: 550
-- Name: plagiarism_checks_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.plagiarism_checks_id_seq', 1, false);


--
-- TOC entry 7996 (class 0 OID 0)
-- Dependencies: 241
-- Name: platform_analytics_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.platform_analytics_id_seq', 1, false);


--
-- TOC entry 7997 (class 0 OID 0)
-- Dependencies: 625
-- Name: polity_chapter_tasks_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.polity_chapter_tasks_id_seq', 95, true);


--
-- TOC entry 7998 (class 0 OID 0)
-- Dependencies: 556
-- Name: post_votes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.post_votes_id_seq', 1, false);


--
-- TOC entry 7999 (class 0 OID 0)
-- Dependencies: 540
-- Name: project_milestones_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.project_milestones_id_seq', 1, false);


--
-- TOC entry 8000 (class 0 OID 0)
-- Dependencies: 562
-- Name: project_submissions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.project_submissions_id_seq', 1, false);


--
-- TOC entry 8001 (class 0 OID 0)
-- Dependencies: 560
-- Name: project_team_members_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.project_team_members_id_seq', 1, false);


--
-- TOC entry 8002 (class 0 OID 0)
-- Dependencies: 538
-- Name: project_teams_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.project_teams_id_seq', 1, false);


--
-- TOC entry 8003 (class 0 OID 0)
-- Dependencies: 416
-- Name: question_banks_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.question_banks_id_seq', 1, false);


--
-- TOC entry 8004 (class 0 OID 0)
-- Dependencies: 306
-- Name: question_options_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.question_options_id_seq', 1, false);


--
-- TOC entry 8005 (class 0 OID 0)
-- Dependencies: 273
-- Name: questions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.questions_id_seq', 1, false);


--
-- TOC entry 8006 (class 0 OID 0)
-- Dependencies: 429
-- Name: quiz_attempt_analytics_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.quiz_attempt_analytics_id_seq', 1, false);


--
-- TOC entry 8007 (class 0 OID 0)
-- Dependencies: 308
-- Name: quiz_attempts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.quiz_attempts_id_seq', 1, false);


--
-- TOC entry 8008 (class 0 OID 0)
-- Dependencies: 310
-- Name: quiz_feedback_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.quiz_feedback_id_seq', 1, false);


--
-- TOC entry 8009 (class 0 OID 0)
-- Dependencies: 496
-- Name: quiz_question_pools_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.quiz_question_pools_id_seq', 1, false);


--
-- TOC entry 8010 (class 0 OID 0)
-- Dependencies: 609
-- Name: quiz_results_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.quiz_results_id_seq', 1, false);


--
-- TOC entry 8011 (class 0 OID 0)
-- Dependencies: 235
-- Name: quizzes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.quizzes_id_seq', 1, false);


--
-- TOC entry 8012 (class 0 OID 0)
-- Dependencies: 571
-- Name: ras_plans_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.ras_plans_id_seq', 1, false);


--
-- TOC entry 8013 (class 0 OID 0)
-- Dependencies: 573
-- Name: ras_recordings_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.ras_recordings_id_seq', 1, false);


--
-- TOC entry 8014 (class 0 OID 0)
-- Dependencies: 576
-- Name: ras_topic_progress_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.ras_topic_progress_id_seq', 18, true);


--
-- TOC entry 8015 (class 0 OID 0)
-- Dependencies: 542
-- Name: realtime_chat_messages_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.realtime_chat_messages_id_seq', 1, false);


--
-- TOC entry 8016 (class 0 OID 0)
-- Dependencies: 239
-- Name: realtime_user_presence_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.realtime_user_presence_id_seq', 1, false);


--
-- TOC entry 8017 (class 0 OID 0)
-- Dependencies: 637
-- Name: retention_reviews_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.retention_reviews_id_seq', 1, false);


--
-- TOC entry 8018 (class 0 OID 0)
-- Dependencies: 448
-- Name: revenue_shares_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.revenue_shares_id_seq', 1, false);


--
-- TOC entry 8019 (class 0 OID 0)
-- Dependencies: 452
-- Name: revenue_transactions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.revenue_transactions_id_seq', 1, false);


--
-- TOC entry 8020 (class 0 OID 0)
-- Dependencies: 483
-- Name: review_helpful_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.review_helpful_id_seq', 1, false);


--
-- TOC entry 8021 (class 0 OID 0)
-- Dependencies: 639
-- Name: revision_cycles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.revision_cycles_id_seq', 1, false);


--
-- TOC entry 8022 (class 0 OID 0)
-- Dependencies: 225
-- Name: rewards_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.rewards_id_seq', 1, false);


--
-- TOC entry 8023 (class 0 OID 0)
-- Dependencies: 217
-- Name: roles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.roles_id_seq', 1, false);


--
-- TOC entry 8024 (class 0 OID 0)
-- Dependencies: 318
-- Name: shadow_mode_sessions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.shadow_mode_sessions_id_seq', 1, false);


--
-- TOC entry 8025 (class 0 OID 0)
-- Dependencies: 334
-- Name: shopping_carts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.shopping_carts_id_seq', 1, false);


--
-- TOC entry 8026 (class 0 OID 0)
-- Dependencies: 348
-- Name: sso_audit_logs_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.sso_audit_logs_id_seq', 1, false);


--
-- TOC entry 8027 (class 0 OID 0)
-- Dependencies: 275
-- Name: sso_configs_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.sso_configs_id_seq', 1, false);


--
-- TOC entry 8028 (class 0 OID 0)
-- Dependencies: 346
-- Name: sso_sessions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.sso_sessions_id_seq', 1, false);


--
-- TOC entry 8029 (class 0 OID 0)
-- Dependencies: 444
-- Name: student_analytics_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.student_analytics_id_seq', 1, false);


--
-- TOC entry 8030 (class 0 OID 0)
-- Dependencies: 427
-- Name: student_answers_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.student_answers_id_seq', 1, false);


--
-- TOC entry 8031 (class 0 OID 0)
-- Dependencies: 627
-- Name: student_nudge_history_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.student_nudge_history_id_seq', 1, false);


--
-- TOC entry 8032 (class 0 OID 0)
-- Dependencies: 590
-- Name: student_nudge_workflows_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.student_nudge_workflows_id_seq', 1, false);


--
-- TOC entry 8033 (class 0 OID 0)
-- Dependencies: 320
-- Name: study_groups_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.study_groups_id_seq', 1, false);


--
-- TOC entry 8034 (class 0 OID 0)
-- Dependencies: 237
-- Name: study_rooms_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.study_rooms_id_seq', 1, false);


--
-- TOC entry 8035 (class 0 OID 0)
-- Dependencies: 580
-- Name: study_sessions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.study_sessions_id_seq', 1, false);


--
-- TOC entry 8036 (class 0 OID 0)
-- Dependencies: 489
-- Name: submissions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.submissions_id_seq', 1, false);


--
-- TOC entry 8037 (class 0 OID 0)
-- Dependencies: 253
-- Name: subscription_coupons_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.subscription_coupons_id_seq', 1, false);


--
-- TOC entry 8038 (class 0 OID 0)
-- Dependencies: 454
-- Name: subscription_invoices_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.subscription_invoices_id_seq', 1, false);


--
-- TOC entry 8039 (class 0 OID 0)
-- Dependencies: 251
-- Name: subscription_plans_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.subscription_plans_id_seq', 1, false);


--
-- TOC entry 8040 (class 0 OID 0)
-- Dependencies: 229
-- Name: tags_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tags_id_seq', 1, false);


--
-- TOC entry 8041 (class 0 OID 0)
-- Dependencies: 280
-- Name: tasks_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tasks_id_seq', 1, false);


--
-- TOC entry 8042 (class 0 OID 0)
-- Dependencies: 568
-- Name: tax_calculations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tax_calculations_id_seq', 1, false);


--
-- TOC entry 8043 (class 0 OID 0)
-- Dependencies: 376
-- Name: tax_exemptions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tax_exemptions_id_seq', 1, false);


--
-- TOC entry 8044 (class 0 OID 0)
-- Dependencies: 265
-- Name: tax_rates_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tax_rates_id_seq', 1, false);


--
-- TOC entry 8045 (class 0 OID 0)
-- Dependencies: 648
-- Name: thread_votes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.thread_votes_id_seq', 1, false);


--
-- TOC entry 8046 (class 0 OID 0)
-- Dependencies: 245
-- Name: translations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.translations_id_seq', 1, false);


--
-- TOC entry 8047 (class 0 OID 0)
-- Dependencies: 350
-- Name: two_factor_auth_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.two_factor_auth_id_seq', 1, false);


--
-- TOC entry 8048 (class 0 OID 0)
-- Dependencies: 464
-- Name: two_factor_backup_codes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.two_factor_backup_codes_id_seq', 1, false);


--
-- TOC entry 8049 (class 0 OID 0)
-- Dependencies: 646
-- Name: universal_progress_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.universal_progress_id_seq', 4, true);


--
-- TOC entry 8050 (class 0 OID 0)
-- Dependencies: 352
-- Name: user_achievements_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.user_achievements_id_seq', 1, false);


--
-- TOC entry 8051 (class 0 OID 0)
-- Dependencies: 322
-- Name: user_activities_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.user_activities_id_seq', 1, false);


--
-- TOC entry 8052 (class 0 OID 0)
-- Dependencies: 650
-- Name: user_activity_sessions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.user_activity_sessions_id_seq', 90, true);


--
-- TOC entry 8053 (class 0 OID 0)
-- Dependencies: 354
-- Name: user_challenges_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.user_challenges_id_seq', 1, false);


--
-- TOC entry 8054 (class 0 OID 0)
-- Dependencies: 330
-- Name: user_email_preferences_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.user_email_preferences_id_seq', 1, false);


--
-- TOC entry 8055 (class 0 OID 0)
-- Dependencies: 249
-- Name: user_language_preferences_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.user_language_preferences_id_seq', 1, false);


--
-- TOC entry 8056 (class 0 OID 0)
-- Dependencies: 392
-- Name: user_permissions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.user_permissions_id_seq', 1, false);


--
-- TOC entry 8057 (class 0 OID 0)
-- Dependencies: 324
-- Name: user_preferences_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.user_preferences_id_seq', 1, false);


--
-- TOC entry 8058 (class 0 OID 0)
-- Dependencies: 290
-- Name: user_rewards_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.user_rewards_id_seq', 1, false);


--
-- TOC entry 8059 (class 0 OID 0)
-- Dependencies: 394
-- Name: user_sessions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.user_sessions_id_seq', 1, false);


--
-- TOC entry 8060 (class 0 OID 0)
-- Dependencies: 340
-- Name: user_subscriptions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.user_subscriptions_id_seq', 1, false);


--
-- TOC entry 8061 (class 0 OID 0)
-- Dependencies: 617
-- Name: user_topic_logs_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.user_topic_logs_id_seq', 1, false);


--
-- TOC entry 8062 (class 0 OID 0)
-- Dependencies: 269
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 29, true);


--
-- TOC entry 8063 (class 0 OID 0)
-- Dependencies: 641
-- Name: voice_notes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.voice_notes_id_seq', 1, false);


--
-- TOC entry 8064 (class 0 OID 0)
-- Dependencies: 523
-- Name: workflow_executions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.workflow_executions_id_seq', 1, false);


--
-- TOC entry 8065 (class 0 OID 0)
-- Dependencies: 473
-- Name: workflow_steps_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.workflow_steps_id_seq', 1, false);


--
-- TOC entry 6356 (class 2606 OID 28371)
-- Name: upsc_timer_configs _batch_phase_uc; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.upsc_timer_configs
    ADD CONSTRAINT _batch_phase_uc UNIQUE (batch_id, phase);


--
-- TOC entry 6460 (class 2606 OID 28362)
-- Name: upsc_student_progress _student_plan_uc; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.upsc_student_progress
    ADD CONSTRAINT _student_plan_uc UNIQUE (student_id, plan_id);


--
-- TOC entry 5843 (class 2606 OID 18594)
-- Name: achievements achievements_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.achievements
    ADD CONSTRAINT achievements_pkey PRIMARY KEY (id);


--
-- TOC entry 5905 (class 2606 OID 18815)
-- Name: activity_logs activity_logs_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.activity_logs
    ADD CONSTRAINT activity_logs_pkey PRIMARY KEY (id);


--
-- TOC entry 6071 (class 2606 OID 19471)
-- Name: admin_logs admin_logs_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.admin_logs
    ADD CONSTRAINT admin_logs_pkey PRIMARY KEY (id);


--
-- TOC entry 6298 (class 2606 OID 20495)
-- Name: affiliate_clicks affiliate_clicks_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.affiliate_clicks
    ADD CONSTRAINT affiliate_clicks_pkey PRIMARY KEY (id);


--
-- TOC entry 6440 (class 2606 OID 21241)
-- Name: affiliate_commissions affiliate_commissions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.affiliate_commissions
    ADD CONSTRAINT affiliate_commissions_pkey PRIMARY KEY (id);


--
-- TOC entry 6025 (class 2606 OID 19308)
-- Name: affiliate_partners affiliate_partners_custom_slug_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.affiliate_partners
    ADD CONSTRAINT affiliate_partners_custom_slug_key UNIQUE (custom_slug);


--
-- TOC entry 6027 (class 2606 OID 19306)
-- Name: affiliate_partners affiliate_partners_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.affiliate_partners
    ADD CONSTRAINT affiliate_partners_pkey PRIMARY KEY (id);


--
-- TOC entry 6309 (class 2606 OID 20537)
-- Name: affiliate_payouts affiliate_payouts_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.affiliate_payouts
    ADD CONSTRAINT affiliate_payouts_pkey PRIMARY KEY (id);


--
-- TOC entry 6304 (class 2606 OID 20513)
-- Name: affiliate_referrals affiliate_referrals_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.affiliate_referrals
    ADD CONSTRAINT affiliate_referrals_pkey PRIMARY KEY (id);


--
-- TOC entry 6077 (class 2606 OID 19489)
-- Name: ai_avatars ai_avatars_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ai_avatars
    ADD CONSTRAINT ai_avatars_pkey PRIMARY KEY (id);


--
-- TOC entry 6648 (class 2606 OID 22361)
-- Name: ai_coaching_sessions ai_coaching_sessions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ai_coaching_sessions
    ADD CONSTRAINT ai_coaching_sessions_pkey PRIMARY KEY (id);


--
-- TOC entry 5986 (class 2606 OID 19165)
-- Name: ai_conversations ai_conversations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ai_conversations
    ADD CONSTRAINT ai_conversations_pkey PRIMARY KEY (id);


--
-- TOC entry 6138 (class 2606 OID 28153)
-- Name: ai_debug_logs ai_debug_logs_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ai_debug_logs
    ADD CONSTRAINT ai_debug_logs_pkey PRIMARY KEY (id);


--
-- TOC entry 6141 (class 2606 OID 28155)
-- Name: ai_debug_sessions ai_debug_sessions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ai_debug_sessions
    ADD CONSTRAINT ai_debug_sessions_pkey PRIMARY KEY (id);


--
-- TOC entry 6717 (class 2606 OID 28157)
-- Name: ai_evaluation_logs ai_evaluation_logs_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ai_evaluation_logs
    ADD CONSTRAINT ai_evaluation_logs_pkey PRIMARY KEY (id);


--
-- TOC entry 6313 (class 2606 OID 20554)
-- Name: ai_generated_quizzes ai_generated_quizzes_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ai_generated_quizzes
    ADD CONSTRAINT ai_generated_quizzes_pkey PRIMARY KEY (id);


--
-- TOC entry 6419 (class 2606 OID 21114)
-- Name: ai_grading_results ai_grading_results_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ai_grading_results
    ADD CONSTRAINT ai_grading_results_pkey PRIMARY KEY (id);


--
-- TOC entry 6421 (class 2606 OID 21116)
-- Name: ai_grading_results ai_grading_results_student_answer_id_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ai_grading_results
    ADD CONSTRAINT ai_grading_results_student_answer_id_key UNIQUE (student_answer_id);


--
-- TOC entry 6634 (class 2606 OID 22321)
-- Name: ai_planning_sessions ai_planning_sessions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ai_planning_sessions
    ADD CONSTRAINT ai_planning_sessions_pkey PRIMARY KEY (id);


--
-- TOC entry 6032 (class 2606 OID 19326)
-- Name: ai_usage_logs ai_usage_logs_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ai_usage_logs
    ADD CONSTRAINT ai_usage_logs_pkey PRIMARY KEY (id);


--
-- TOC entry 6559 (class 2606 OID 22009)
-- Name: alembic_version alembic_version_pkc; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.alembic_version
    ADD CONSTRAINT alembic_version_pkc PRIMARY KEY (version_num);


--
-- TOC entry 6270 (class 2606 OID 20380)
-- Name: analytics_events analytics_events_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.analytics_events
    ADD CONSTRAINT analytics_events_pkey PRIMARY KEY (id);


--
-- TOC entry 6390 (class 2606 OID 20960)
-- Name: announcement_reads announcement_reads_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.announcement_reads
    ADD CONSTRAINT announcement_reads_pkey PRIMARY KEY (id);


--
-- TOC entry 5960 (class 2606 OID 19053)
-- Name: assessment_rubrics assessment_rubrics_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.assessment_rubrics
    ADD CONSTRAINT assessment_rubrics_pkey PRIMARY KEY (id);


--
-- TOC entry 6081 (class 2606 OID 19506)
-- Name: assets assets_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.assets
    ADD CONSTRAINT assets_pkey PRIMARY KEY (id);


--
-- TOC entry 6188 (class 2606 OID 19933)
-- Name: assignments assignments_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.assignments
    ADD CONSTRAINT assignments_pkey PRIMARY KEY (id);


--
-- TOC entry 6619 (class 2606 OID 22275)
-- Name: attendance attendance_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.attendance
    ADD CONSTRAINT attendance_pkey PRIMARY KEY (id);


--
-- TOC entry 6347 (class 2606 OID 20710)
-- Name: automation_analytics automation_analytics_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.automation_analytics
    ADD CONSTRAINT automation_analytics_pkey PRIMARY KEY (id);


--
-- TOC entry 5926 (class 2606 OID 18912)
-- Name: bank_questions bank_questions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.bank_questions
    ADD CONSTRAINT bank_questions_pkey PRIMARY KEY (id);


--
-- TOC entry 6642 (class 2606 OID 22348)
-- Name: batch1_segments batch1_segments_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.batch1_segments
    ADD CONSTRAINT batch1_segments_pkey PRIMARY KEY (id);


--
-- TOC entry 6566 (class 2606 OID 22036)
-- Name: batch1_test_results batch1_test_results_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.batch1_test_results
    ADD CONSTRAINT batch1_test_results_pkey PRIMARY KEY (id);


--
-- TOC entry 6603 (class 2606 OID 22223)
-- Name: batch_sentiments batch_sentiments_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.batch_sentiments
    ADD CONSTRAINT batch_sentiments_pkey PRIMARY KEY (id);


--
-- TOC entry 5848 (class 2606 OID 18606)
-- Name: blockchain_blocks blockchain_blocks_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.blockchain_blocks
    ADD CONSTRAINT blockchain_blocks_pkey PRIMARY KEY (id);


--
-- TOC entry 6222 (class 2606 OID 20124)
-- Name: bundle_enrollments bundle_enrollments_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.bundle_enrollments
    ADD CONSTRAINT bundle_enrollments_pkey PRIMARY KEY (id);


--
-- TOC entry 6671 (class 2606 OID 22447)
-- Name: call_logs call_logs_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.call_logs
    ADD CONSTRAINT call_logs_pkey PRIMARY KEY (id);


--
-- TOC entry 6436 (class 2606 OID 21209)
-- Name: cart_items cart_items_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cart_items
    ADD CONSTRAINT cart_items_pkey PRIMARY KEY (id);


--
-- TOC entry 5759 (class 2606 OID 18385)
-- Name: categories categories_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_pkey PRIMARY KEY (id);


--
-- TOC entry 5934 (class 2606 OID 18944)
-- Name: certificate_templates certificate_templates_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.certificate_templates
    ADD CONSTRAINT certificate_templates_pkey PRIMARY KEY (id);


--
-- TOC entry 6375 (class 2606 OID 20880)
-- Name: certificates certificates_enrollment_id_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.certificates
    ADD CONSTRAINT certificates_enrollment_id_key UNIQUE (enrollment_id);


--
-- TOC entry 6377 (class 2606 OID 20878)
-- Name: certificates certificates_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.certificates
    ADD CONSTRAINT certificates_pkey PRIMARY KEY (id);


--
-- TOC entry 5885 (class 2606 OID 18735)
-- Name: challenges challenges_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.challenges
    ADD CONSTRAINT challenges_pkey PRIMARY KEY (id);


--
-- TOC entry 6492 (class 2606 OID 21569)
-- Name: chat_feedback chat_feedback_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.chat_feedback
    ADD CONSTRAINT chat_feedback_pkey PRIMARY KEY (id);


--
-- TOC entry 6247 (class 2606 OID 20250)
-- Name: chat_sessions chat_sessions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.chat_sessions
    ADD CONSTRAINT chat_sessions_pkey PRIMARY KEY (id);


--
-- TOC entry 6433 (class 2606 OID 21195)
-- Name: chatbot_messages chatbot_messages_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.chatbot_messages
    ADD CONSTRAINT chatbot_messages_pkey PRIMARY KEY (id);


--
-- TOC entry 6065 (class 2606 OID 19453)
-- Name: coin_transactions coin_transactions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.coin_transactions
    ADD CONSTRAINT coin_transactions_pkey PRIMARY KEY (id);


--
-- TOC entry 6430 (class 2606 OID 21170)
-- Name: collaborative_projects collaborative_projects_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.collaborative_projects
    ADD CONSTRAINT collaborative_projects_pkey PRIMARY KEY (id);


--
-- TOC entry 6165 (class 2606 OID 19830)
-- Name: communication_templates communication_templates_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.communication_templates
    ADD CONSTRAINT communication_templates_pkey PRIMARY KEY (id);


--
-- TOC entry 6576 (class 2606 OID 22080)
-- Name: concept_dependencies concept_dependencies_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.concept_dependencies
    ADD CONSTRAINT concept_dependencies_pkey PRIMARY KEY (parent_concept_id, child_concept_id);


--
-- TOC entry 6574 (class 2606 OID 22075)
-- Name: concepts concepts_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.concepts
    ADD CONSTRAINT concepts_pkey PRIMARY KEY (id);


--
-- TOC entry 5834 (class 2606 OID 18569)
-- Name: content_difficulty_analyses content_difficulty_analyses_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.content_difficulty_analyses
    ADD CONSTRAINT content_difficulty_analyses_pkey PRIMARY KEY (id);


--
-- TOC entry 5830 (class 2606 OID 18556)
-- Name: content_embeddings content_embeddings_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.content_embeddings
    ADD CONSTRAINT content_embeddings_pkey PRIMARY KEY (id);


--
-- TOC entry 5808 (class 2606 OID 18503)
-- Name: content_translations content_translations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.content_translations
    ADD CONSTRAINT content_translations_pkey PRIMARY KEY (id);


--
-- TOC entry 6495 (class 2606 OID 21588)
-- Name: coupon_usages coupon_usages_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.coupon_usages
    ADD CONSTRAINT coupon_usages_pkey PRIMARY KEY (id);


--
-- TOC entry 6259 (class 2606 OID 20314)
-- Name: coupons coupons_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.coupons
    ADD CONSTRAINT coupons_pkey PRIMARY KEY (id);


--
-- TOC entry 6195 (class 2606 OID 19971)
-- Name: course_announcements course_announcements_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.course_announcements
    ADD CONSTRAINT course_announcements_pkey PRIMARY KEY (id);


--
-- TOC entry 6201 (class 2606 OID 20018)
-- Name: course_bookmarks course_bookmarks_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.course_bookmarks
    ADD CONSTRAINT course_bookmarks_pkey PRIMARY KEY (id);


--
-- TOC entry 6220 (class 2606 OID 20105)
-- Name: course_bundle_items course_bundle_items_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.course_bundle_items
    ADD CONSTRAINT course_bundle_items_pkey PRIMARY KEY (bundle_id, course_id);


--
-- TOC entry 5937 (class 2606 OID 18960)
-- Name: course_bundles course_bundles_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.course_bundles
    ADD CONSTRAINT course_bundles_pkey PRIMARY KEY (id);


--
-- TOC entry 6370 (class 2606 OID 20846)
-- Name: course_payments course_payments_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.course_payments
    ADD CONSTRAINT course_payments_pkey PRIMARY KEY (id);


--
-- TOC entry 6250 (class 2606 OID 20270)
-- Name: course_recommendations course_recommendations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.course_recommendations
    ADD CONSTRAINT course_recommendations_pkey PRIMARY KEY (id);


--
-- TOC entry 6181 (class 2606 OID 19895)
-- Name: course_reviews course_reviews_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.course_reviews
    ADD CONSTRAINT course_reviews_pkey PRIMARY KEY (id);


--
-- TOC entry 6186 (class 2606 OID 19913)
-- Name: course_tags course_tags_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.course_tags
    ADD CONSTRAINT course_tags_pkey PRIMARY KEY (course_id, tag_id);


--
-- TOC entry 5942 (class 2606 OID 18977)
-- Name: courses courses_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_pkey PRIMARY KEY (id);


--
-- TOC entry 5858 (class 2606 OID 18629)
-- Name: curriculum_insights curriculum_insights_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.curriculum_insights
    ADD CONSTRAINT curriculum_insights_pkey PRIMARY KEY (id);


--
-- TOC entry 6629 (class 2606 OID 22309)
-- Name: daily_dev_reports daily_dev_reports_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.daily_dev_reports
    ADD CONSTRAINT daily_dev_reports_pkey PRIMARY KEY (id);


--
-- TOC entry 6125 (class 2606 OID 19682)
-- Name: daily_reflections daily_reflections_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.daily_reflections
    ADD CONSTRAINT daily_reflections_pkey PRIMARY KEY (id);


--
-- TOC entry 6599 (class 2606 OID 22212)
-- Name: daily_summaries daily_summaries_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.daily_summaries
    ADD CONSTRAINT daily_summaries_pkey PRIMARY KEY (id);


--
-- TOC entry 6116 (class 2606 OID 19651)
-- Name: daily_tasks daily_tasks_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.daily_tasks
    ADD CONSTRAINT daily_tasks_pkey PRIMARY KEY (id);


--
-- TOC entry 6151 (class 2606 OID 19776)
-- Name: data_masking_configs data_masking_configs_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.data_masking_configs
    ADD CONSTRAINT data_masking_configs_pkey PRIMARY KEY (id);


--
-- TOC entry 6624 (class 2606 OID 22292)
-- Name: development_logs development_logs_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.development_logs
    ADD CONSTRAINT development_logs_pkey PRIMARY KEY (id);


--
-- TOC entry 6085 (class 2606 OID 19523)
-- Name: digital_products digital_products_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.digital_products
    ADD CONSTRAINT digital_products_pkey PRIMARY KEY (id);


--
-- TOC entry 6089 (class 2606 OID 19539)
-- Name: direct_messages direct_messages_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.direct_messages
    ADD CONSTRAINT direct_messages_pkey PRIMARY KEY (id);


--
-- TOC entry 6192 (class 2606 OID 19955)
-- Name: discussion_categories discussion_categories_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.discussion_categories
    ADD CONSTRAINT discussion_categories_pkey PRIMARY KEY (id);


--
-- TOC entry 6464 (class 2606 OID 21378)
-- Name: discussion_posts discussion_posts_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.discussion_posts
    ADD CONSTRAINT discussion_posts_pkey PRIMARY KEY (id);


--
-- TOC entry 6386 (class 2606 OID 20935)
-- Name: discussion_threads discussion_threads_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.discussion_threads
    ADD CONSTRAINT discussion_threads_pkey PRIMARY KEY (id);


--
-- TOC entry 6331 (class 2606 OID 20635)
-- Name: drill_content drill_content_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.drill_content
    ADD CONSTRAINT drill_content_pkey PRIMARY KEY (id);


--
-- TOC entry 6333 (class 2606 OID 20637)
-- Name: drill_content drill_content_question_id_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.drill_content
    ADD CONSTRAINT drill_content_question_id_key UNIQUE (question_id);


--
-- TOC entry 6134 (class 2606 OID 19711)
-- Name: drill_daily_summaries drill_daily_summaries_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.drill_daily_summaries
    ADD CONSTRAINT drill_daily_summaries_pkey PRIMARY KEY (id);


--
-- TOC entry 6335 (class 2606 OID 20649)
-- Name: drill_model_answers drill_model_answers_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.drill_model_answers
    ADD CONSTRAINT drill_model_answers_pkey PRIMARY KEY (id);


--
-- TOC entry 6337 (class 2606 OID 20651)
-- Name: drill_model_answers drill_model_answers_question_id_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.drill_model_answers
    ADD CONSTRAINT drill_model_answers_question_id_key UNIQUE (question_id);


--
-- TOC entry 6130 (class 2606 OID 19697)
-- Name: drill_questions drill_questions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.drill_questions
    ADD CONSTRAINT drill_questions_pkey PRIMARY KEY (id);


--
-- TOC entry 6339 (class 2606 OID 20663)
-- Name: drill_sessions drill_sessions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.drill_sessions
    ADD CONSTRAINT drill_sessions_pkey PRIMARY KEY (id);


--
-- TOC entry 6253 (class 2606 OID 20290)
-- Name: email_logs email_logs_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.email_logs
    ADD CONSTRAINT email_logs_pkey PRIMARY KEY (id);


--
-- TOC entry 6001 (class 2606 OID 19214)
-- Name: email_templates email_templates_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.email_templates
    ADD CONSTRAINT email_templates_pkey PRIMARY KEY (id);


--
-- TOC entry 6094 (class 2606 OID 19562)
-- Name: enquiries enquiries_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.enquiries
    ADD CONSTRAINT enquiries_pkey PRIMARY KEY (id);


--
-- TOC entry 6227 (class 2606 OID 20144)
-- Name: enrollments enrollments_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.enrollments
    ADD CONSTRAINT enrollments_pkey PRIMARY KEY (id);


--
-- TOC entry 5966 (class 2606 OID 19083)
-- Name: exam_sessions exam_sessions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.exam_sessions
    ADD CONSTRAINT exam_sessions_pkey PRIMARY KEY (id);


--
-- TOC entry 6665 (class 2606 OID 22423)
-- Name: field_activities field_activities_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.field_activities
    ADD CONSTRAINT field_activities_pkey PRIMARY KEY (id);


--
-- TOC entry 6693 (class 2606 OID 22560)
-- Name: flashcard_progress flashcard_progress_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.flashcard_progress
    ADD CONSTRAINT flashcard_progress_pkey PRIMARY KEY (id);


--
-- TOC entry 6651 (class 2606 OID 22377)
-- Name: flashcards flashcards_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.flashcards
    ADD CONSTRAINT flashcards_pkey PRIMARY KEY (id);


--
-- TOC entry 6099 (class 2606 OID 19577)
-- Name: friendships friendships_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.friendships
    ADD CONSTRAINT friendships_pkey PRIMARY KEY (id);


--
-- TOC entry 6608 (class 2606 OID 22235)
-- Name: ghost_login_alerts ghost_login_alerts_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ghost_login_alerts
    ADD CONSTRAINT ghost_login_alerts_pkey PRIMARY KEY (id);


--
-- TOC entry 6615 (class 2606 OID 22264)
-- Name: grapho_books grapho_books_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.grapho_books
    ADD CONSTRAINT grapho_books_pkey PRIMARY KEY (id);


--
-- TOC entry 6687 (class 2606 OID 22526)
-- Name: grapho_pages grapho_pages_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.grapho_pages
    ADD CONSTRAINT grapho_pages_pkey PRIMARY KEY (id);


--
-- TOC entry 6690 (class 2606 OID 22541)
-- Name: grapho_submissions grapho_submissions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.grapho_submissions
    ADD CONSTRAINT grapho_submissions_pkey PRIMARY KEY (id);


--
-- TOC entry 6323 (class 2606 OID 20607)
-- Name: graphotherapy_day_completions graphotherapy_day_completions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.graphotherapy_day_completions
    ADD CONSTRAINT graphotherapy_day_completions_pkey PRIMARY KEY (id);


--
-- TOC entry 6104 (class 2606 OID 19598)
-- Name: graphotherapy_progress graphotherapy_progress_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.graphotherapy_progress
    ADD CONSTRAINT graphotherapy_progress_pkey PRIMARY KEY (id);


--
-- TOC entry 6242 (class 2606 OID 20211)
-- Name: group_members group_members_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.group_members
    ADD CONSTRAINT group_members_pkey PRIMARY KEY (group_id, user_id);


--
-- TOC entry 6424 (class 2606 OID 21129)
-- Name: group_memberships group_memberships_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.group_memberships
    ADD CONSTRAINT group_memberships_pkey PRIMARY KEY (id);


--
-- TOC entry 6479 (class 2606 OID 21483)
-- Name: group_post_comments group_post_comments_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.group_post_comments
    ADD CONSTRAINT group_post_comments_pkey PRIMARY KEY (id);


--
-- TOC entry 6427 (class 2606 OID 21149)
-- Name: group_posts group_posts_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.group_posts
    ADD CONSTRAINT group_posts_pkey PRIMARY KEY (id);


--
-- TOC entry 5748 (class 2606 OID 18352)
-- Name: groups groups_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.groups
    ADD CONSTRAINT groups_pkey PRIMARY KEY (id);


--
-- TOC entry 6326 (class 2606 OID 20620)
-- Name: habit_logs habit_logs_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.habit_logs
    ADD CONSTRAINT habit_logs_pkey PRIMARY KEY (id);


--
-- TOC entry 6121 (class 2606 OID 19666)
-- Name: habits habits_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.habits
    ADD CONSTRAINT habits_pkey PRIMARY KEY (id);


--
-- TOC entry 5910 (class 2606 OID 18833)
-- Name: handwriting_submissions handwriting_submissions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.handwriting_submissions
    ADD CONSTRAINT handwriting_submissions_pkey PRIMARY KEY (id);


--
-- TOC entry 6263 (class 2606 OID 20339)
-- Name: instructor_analytics instructor_analytics_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.instructor_analytics
    ADD CONSTRAINT instructor_analytics_pkey PRIMARY KEY (id);


--
-- TOC entry 6015 (class 2606 OID 19266)
-- Name: instructor_payment_info instructor_payment_info_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.instructor_payment_info
    ADD CONSTRAINT instructor_payment_info_pkey PRIMARY KEY (id);


--
-- TOC entry 6011 (class 2606 OID 19249)
-- Name: instructor_payouts instructor_payouts_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.instructor_payouts
    ADD CONSTRAINT instructor_payouts_pkey PRIMARY KEY (id);


--
-- TOC entry 6578 (class 2606 OID 22097)
-- Name: interaction_logs interaction_logs_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.interaction_logs
    ADD CONSTRAINT interaction_logs_pkey PRIMARY KEY (id);


--
-- TOC entry 6537 (class 2606 OID 21847)
-- Name: invoices invoices_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.invoices
    ADD CONSTRAINT invoices_pkey PRIMARY KEY (id);


--
-- TOC entry 5798 (class 2606 OID 18475)
-- Name: languages languages_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.languages
    ADD CONSTRAINT languages_pkey PRIMARY KEY (id);


--
-- TOC entry 6149 (class 2606 OID 19756)
-- Name: leads leads_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.leads
    ADD CONSTRAINT leads_pkey PRIMARY KEY (id);


--
-- TOC entry 6245 (class 2606 OID 20230)
-- Name: learning_groups learning_groups_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.learning_groups
    ADD CONSTRAINT learning_groups_pkey PRIMARY KEY (id);


--
-- TOC entry 5932 (class 2606 OID 18927)
-- Name: learning_paths learning_paths_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.learning_paths
    ADD CONSTRAINT learning_paths_pkey PRIMARY KEY (id);


--
-- TOC entry 6199 (class 2606 OID 19992)
-- Name: lesson_bookmarks lesson_bookmarks_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.lesson_bookmarks
    ADD CONSTRAINT lesson_bookmarks_pkey PRIMARY KEY (id);


--
-- TOC entry 5875 (class 2606 OID 18683)
-- Name: lesson_drip_settings lesson_drip_settings_lesson_id_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.lesson_drip_settings
    ADD CONSTRAINT lesson_drip_settings_lesson_id_key UNIQUE (lesson_id);


--
-- TOC entry 5877 (class 2606 OID 18681)
-- Name: lesson_drip_settings lesson_drip_settings_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.lesson_drip_settings
    ADD CONSTRAINT lesson_drip_settings_pkey PRIMARY KEY (id);


--
-- TOC entry 5924 (class 2606 OID 18891)
-- Name: lesson_notes lesson_notes_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.lesson_notes
    ADD CONSTRAINT lesson_notes_pkey PRIMARY KEY (id);


--
-- TOC entry 5921 (class 2606 OID 18867)
-- Name: lesson_progress lesson_progress_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.lesson_progress
    ADD CONSTRAINT lesson_progress_pkey PRIMARY KEY (id);


--
-- TOC entry 5778 (class 2606 OID 18421)
-- Name: lessons lessons_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.lessons
    ADD CONSTRAINT lessons_pkey PRIMARY KEY (id);


--
-- TOC entry 6401 (class 2606 OID 21012)
-- Name: live_class_attendance live_class_attendance_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.live_class_attendance
    ADD CONSTRAINT live_class_attendance_pkey PRIMARY KEY (id);


--
-- TOC entry 6417 (class 2606 OID 21092)
-- Name: live_class_chat_messages live_class_chat_messages_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.live_class_chat_messages
    ADD CONSTRAINT live_class_chat_messages_pkey PRIMARY KEY (id);


--
-- TOC entry 6472 (class 2606 OID 21432)
-- Name: live_class_poll_responses live_class_poll_responses_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.live_class_poll_responses
    ADD CONSTRAINT live_class_poll_responses_pkey PRIMARY KEY (id);


--
-- TOC entry 6405 (class 2606 OID 21034)
-- Name: live_class_polls live_class_polls_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.live_class_polls
    ADD CONSTRAINT live_class_polls_pkey PRIMARY KEY (id);


--
-- TOC entry 6409 (class 2606 OID 21050)
-- Name: live_class_questions live_class_questions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.live_class_questions
    ADD CONSTRAINT live_class_questions_pkey PRIMARY KEY (id);


--
-- TOC entry 6413 (class 2606 OID 21071)
-- Name: live_class_reactions live_class_reactions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.live_class_reactions
    ADD CONSTRAINT live_class_reactions_pkey PRIMARY KEY (id);


--
-- TOC entry 6212 (class 2606 OID 20060)
-- Name: live_classes live_classes_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.live_classes
    ADD CONSTRAINT live_classes_pkey PRIMARY KEY (id);


--
-- TOC entry 6713 (class 2606 OID 28164)
-- Name: lms_assignments lms_assignments_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.lms_assignments
    ADD CONSTRAINT lms_assignments_pkey PRIMARY KEY (id);


--
-- TOC entry 6174 (class 2606 OID 19849)
-- Name: marketing_workflows marketing_workflows_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.marketing_workflows
    ADD CONSTRAINT marketing_workflows_pkey PRIMARY KEY (id);


--
-- TOC entry 6282 (class 2606 OID 20424)
-- Name: marketplace_listings marketplace_listings_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.marketplace_listings
    ADD CONSTRAINT marketplace_listings_pkey PRIMARY KEY (id);


--
-- TOC entry 6179 (class 2606 OID 19880)
-- Name: meditation_day_completions meditation_day_completions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.meditation_day_completions
    ADD CONSTRAINT meditation_day_completions_pkey PRIMARY KEY (id);


--
-- TOC entry 6586 (class 2606 OID 22142)
-- Name: meditation_experiences meditation_experiences_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.meditation_experiences
    ADD CONSTRAINT meditation_experiences_pkey PRIMARY KEY (id);


--
-- TOC entry 6592 (class 2606 OID 22171)
-- Name: meditation_level_purchases meditation_level_purchases_payment_id_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.meditation_level_purchases
    ADD CONSTRAINT meditation_level_purchases_payment_id_key UNIQUE (payment_id);


--
-- TOC entry 6594 (class 2606 OID 22169)
-- Name: meditation_level_purchases meditation_level_purchases_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.meditation_level_purchases
    ADD CONSTRAINT meditation_level_purchases_pkey PRIMARY KEY (id);


--
-- TOC entry 6363 (class 2606 OID 20805)
-- Name: meditation_process_completions meditation_process_completions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.meditation_process_completions
    ADD CONSTRAINT meditation_process_completions_pkey PRIMARY KEY (id);


--
-- TOC entry 5753 (class 2606 OID 18364)
-- Name: meditation_processes meditation_processes_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.meditation_processes
    ADD CONSTRAINT meditation_processes_pkey PRIMARY KEY (id);


--
-- TOC entry 5900 (class 2606 OID 18786)
-- Name: meditation_progress meditation_progress_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.meditation_progress
    ADD CONSTRAINT meditation_progress_pkey PRIMARY KEY (id);


--
-- TOC entry 5903 (class 2606 OID 18800)
-- Name: meditation_sessions meditation_sessions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.meditation_sessions
    ADD CONSTRAINT meditation_sessions_pkey PRIMARY KEY (id);


--
-- TOC entry 6513 (class 2606 OID 21672)
-- Name: message_logs message_logs_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.message_logs
    ADD CONSTRAINT message_logs_pkey PRIMARY KEY (id);


--
-- TOC entry 6663 (class 2606 OID 22411)
-- Name: midnight_test_questions midnight_test_questions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.midnight_test_questions
    ADD CONSTRAINT midnight_test_questions_pkey PRIMARY KEY (id);


--
-- TOC entry 5772 (class 2606 OID 18409)
-- Name: modules modules_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.modules
    ADD CONSTRAINT modules_pkey PRIMARY KEY (id);


--
-- TOC entry 5964 (class 2606 OID 19068)
-- Name: mood_entries mood_entries_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.mood_entries
    ADD CONSTRAINT mood_entries_pkey PRIMARY KEY (id);


--
-- TOC entry 5995 (class 2606 OID 19180)
-- Name: notifications notifications_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.notifications
    ADD CONSTRAINT notifications_pkey PRIMARY KEY (id);


--
-- TOC entry 6535 (class 2606 OID 21819)
-- Name: order_items order_items_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.order_items
    ADD CONSTRAINT order_items_pkey PRIMARY KEY (id);


--
-- TOC entry 6503 (class 2606 OID 21614)
-- Name: orders orders_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY (id);


--
-- TOC entry 5841 (class 2606 OID 18581)
-- Name: organizations organizations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.organizations
    ADD CONSTRAINT organizations_pkey PRIMARY KEY (id);


--
-- TOC entry 6218 (class 2606 OID 20081)
-- Name: path_courses path_courses_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.path_courses
    ADD CONSTRAINT path_courses_pkey PRIMARY KEY (id);


--
-- TOC entry 6477 (class 2606 OID 21451)
-- Name: path_enrollments path_enrollments_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.path_enrollments
    ADD CONSTRAINT path_enrollments_pkey PRIMARY KEY (id);


--
-- TOC entry 6109 (class 2606 OID 19614)
-- Name: payment_methods payment_methods_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.payment_methods
    ADD CONSTRAINT payment_methods_pkey PRIMARY KEY (id);


--
-- TOC entry 6468 (class 2606 OID 21404)
-- Name: peer_review_assignments peer_review_assignments_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.peer_review_assignments
    ADD CONSTRAINT peer_review_assignments_pkey PRIMARY KEY (id);


--
-- TOC entry 6523 (class 2606 OID 21758)
-- Name: peer_reviews peer_reviews_peer_review_assignment_id_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.peer_reviews
    ADD CONSTRAINT peer_reviews_peer_review_assignment_id_key UNIQUE (peer_review_assignment_id);


--
-- TOC entry 6525 (class 2606 OID 21756)
-- Name: peer_reviews peer_reviews_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.peer_reviews
    ADD CONSTRAINT peer_reviews_pkey PRIMARY KEY (id);


--
-- TOC entry 5746 (class 2606 OID 18339)
-- Name: permissions permissions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.permissions
    ADD CONSTRAINT permissions_pkey PRIMARY KEY (id);


--
-- TOC entry 6507 (class 2606 OID 21645)
-- Name: plagiarism_checks plagiarism_checks_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.plagiarism_checks
    ADD CONSTRAINT plagiarism_checks_pkey PRIMARY KEY (id);


--
-- TOC entry 5794 (class 2606 OID 18465)
-- Name: platform_analytics platform_analytics_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.platform_analytics
    ADD CONSTRAINT platform_analytics_pkey PRIMARY KEY (id);


--
-- TOC entry 6678 (class 2606 OID 22470)
-- Name: polity_chapter_tasks polity_chapter_tasks_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.polity_chapter_tasks
    ADD CONSTRAINT polity_chapter_tasks_pkey PRIMARY KEY (id);


--
-- TOC entry 6520 (class 2606 OID 21735)
-- Name: post_votes post_votes_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.post_votes
    ADD CONSTRAINT post_votes_pkey PRIMARY KEY (id);


--
-- TOC entry 6486 (class 2606 OID 21518)
-- Name: project_milestones project_milestones_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.project_milestones
    ADD CONSTRAINT project_milestones_pkey PRIMARY KEY (id);


--
-- TOC entry 6531 (class 2606 OID 21793)
-- Name: project_submissions project_submissions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.project_submissions
    ADD CONSTRAINT project_submissions_pkey PRIMARY KEY (id);


--
-- TOC entry 6528 (class 2606 OID 21772)
-- Name: project_team_members project_team_members_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.project_team_members
    ADD CONSTRAINT project_team_members_pkey PRIMARY KEY (id);


--
-- TOC entry 6483 (class 2606 OID 21502)
-- Name: project_teams project_teams_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.project_teams
    ADD CONSTRAINT project_teams_pkey PRIMARY KEY (id);


--
-- TOC entry 6393 (class 2606 OID 20976)
-- Name: question_bank_questions question_bank_questions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.question_bank_questions
    ADD CONSTRAINT question_bank_questions_pkey PRIMARY KEY (question_bank_id, question_id);


--
-- TOC entry 6206 (class 2606 OID 20039)
-- Name: question_banks question_banks_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.question_banks
    ADD CONSTRAINT question_banks_pkey PRIMARY KEY (id);


--
-- TOC entry 5952 (class 2606 OID 19003)
-- Name: question_options question_options_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.question_options
    ADD CONSTRAINT question_options_pkey PRIMARY KEY (id);


--
-- TOC entry 5880 (class 2606 OID 18703)
-- Name: questions questions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.questions
    ADD CONSTRAINT questions_pkey PRIMARY KEY (id);


--
-- TOC entry 6238 (class 2606 OID 20200)
-- Name: quiz_attempt_analytics quiz_attempt_analytics_attempt_id_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.quiz_attempt_analytics
    ADD CONSTRAINT quiz_attempt_analytics_attempt_id_key UNIQUE (attempt_id);


--
-- TOC entry 6240 (class 2606 OID 20198)
-- Name: quiz_attempt_analytics quiz_attempt_analytics_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.quiz_attempt_analytics
    ADD CONSTRAINT quiz_attempt_analytics_pkey PRIMARY KEY (id);


--
-- TOC entry 5955 (class 2606 OID 19017)
-- Name: quiz_attempts quiz_attempts_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.quiz_attempts
    ADD CONSTRAINT quiz_attempts_pkey PRIMARY KEY (id);


--
-- TOC entry 5958 (class 2606 OID 19037)
-- Name: quiz_feedback quiz_feedback_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.quiz_feedback
    ADD CONSTRAINT quiz_feedback_pkey PRIMARY KEY (id);


--
-- TOC entry 6396 (class 2606 OID 20994)
-- Name: quiz_question_pools quiz_question_pools_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.quiz_question_pools
    ADD CONSTRAINT quiz_question_pools_pkey PRIMARY KEY (id);


--
-- TOC entry 6640 (class 2606 OID 22336)
-- Name: quiz_results quiz_results_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.quiz_results
    ADD CONSTRAINT quiz_results_pkey PRIMARY KEY (id);


--
-- TOC entry 5782 (class 2606 OID 18435)
-- Name: quizzes quizzes_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.quizzes
    ADD CONSTRAINT quizzes_pkey PRIMARY KEY (id);


--
-- TOC entry 6553 (class 2606 OID 21976)
-- Name: ras_plans ras_plans_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ras_plans
    ADD CONSTRAINT ras_plans_pkey PRIMARY KEY (id);


--
-- TOC entry 6557 (class 2606 OID 21999)
-- Name: ras_recordings ras_recordings_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ras_recordings
    ADD CONSTRAINT ras_recordings_pkey PRIMARY KEY (id);


--
-- TOC entry 6564 (class 2606 OID 22018)
-- Name: ras_topic_progress ras_topic_progress_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ras_topic_progress
    ADD CONSTRAINT ras_topic_progress_pkey PRIMARY KEY (id);


--
-- TOC entry 6490 (class 2606 OID 21533)
-- Name: realtime_chat_messages realtime_chat_messages_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.realtime_chat_messages
    ADD CONSTRAINT realtime_chat_messages_pkey PRIMARY KEY (id);


--
-- TOC entry 5790 (class 2606 OID 18455)
-- Name: realtime_user_presence realtime_user_presence_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.realtime_user_presence
    ADD CONSTRAINT realtime_user_presence_pkey PRIMARY KEY (id);


--
-- TOC entry 6699 (class 2606 OID 22583)
-- Name: retention_reviews retention_reviews_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.retention_reviews
    ADD CONSTRAINT retention_reviews_pkey PRIMARY KEY (id);


--
-- TOC entry 6278 (class 2606 OID 20401)
-- Name: revenue_shares revenue_shares_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.revenue_shares
    ADD CONSTRAINT revenue_shares_pkey PRIMARY KEY (id);


--
-- TOC entry 6288 (class 2606 OID 20439)
-- Name: revenue_transactions revenue_transactions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.revenue_transactions
    ADD CONSTRAINT revenue_transactions_pkey PRIMARY KEY (id);


--
-- TOC entry 6368 (class 2606 OID 20823)
-- Name: review_helpful review_helpful_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.review_helpful
    ADD CONSTRAINT review_helpful_pkey PRIMARY KEY (id);


--
-- TOC entry 6704 (class 2606 OID 22603)
-- Name: revision_cycles revision_cycles_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.revision_cycles
    ADD CONSTRAINT revision_cycles_pkey PRIMARY KEY (id);


--
-- TOC entry 5757 (class 2606 OID 18374)
-- Name: rewards rewards_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.rewards
    ADD CONSTRAINT rewards_pkey PRIMARY KEY (id);


--
-- TOC entry 5862 (class 2606 OID 18637)
-- Name: role_permissions role_permissions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.role_permissions
    ADD CONSTRAINT role_permissions_pkey PRIMARY KEY (role_id, permission_id);


--
-- TOC entry 5740 (class 2606 OID 18327)
-- Name: roles roles_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.roles
    ADD CONSTRAINT roles_pkey PRIMARY KEY (id);


--
-- TOC entry 5971 (class 2606 OID 19098)
-- Name: shadow_mode_sessions shadow_mode_sessions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.shadow_mode_sessions
    ADD CONSTRAINT shadow_mode_sessions_pkey PRIMARY KEY (id);


--
-- TOC entry 6009 (class 2606 OID 19230)
-- Name: shopping_carts shopping_carts_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.shopping_carts
    ADD CONSTRAINT shopping_carts_pkey PRIMARY KEY (id);


--
-- TOC entry 6049 (class 2606 OID 19370)
-- Name: sso_audit_logs sso_audit_logs_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sso_audit_logs
    ADD CONSTRAINT sso_audit_logs_pkey PRIMARY KEY (id);


--
-- TOC entry 5883 (class 2606 OID 18719)
-- Name: sso_configs sso_configs_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sso_configs
    ADD CONSTRAINT sso_configs_pkey PRIMARY KEY (id);


--
-- TOC entry 6042 (class 2606 OID 19346)
-- Name: sso_sessions sso_sessions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sso_sessions
    ADD CONSTRAINT sso_sessions_pkey PRIMARY KEY (id);


--
-- TOC entry 6448 (class 2606 OID 21266)
-- Name: student_activities student_activities_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.student_activities
    ADD CONSTRAINT student_activities_pkey PRIMARY KEY (id);


--
-- TOC entry 6268 (class 2606 OID 20359)
-- Name: student_analytics student_analytics_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.student_analytics
    ADD CONSTRAINT student_analytics_pkey PRIMARY KEY (id);


--
-- TOC entry 6235 (class 2606 OID 20174)
-- Name: student_answers student_answers_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.student_answers
    ADD CONSTRAINT student_answers_pkey PRIMARY KEY (id);


--
-- TOC entry 6581 (class 2606 OID 22121)
-- Name: student_mastery student_mastery_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.student_mastery
    ADD CONSTRAINT student_mastery_pkey PRIMARY KEY (user_id, concept_id);


--
-- TOC entry 6681 (class 2606 OID 22482)
-- Name: student_nudge_history student_nudge_history_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.student_nudge_history
    ADD CONSTRAINT student_nudge_history_pkey PRIMARY KEY (id);


--
-- TOC entry 6597 (class 2606 OID 22200)
-- Name: student_nudge_workflows student_nudge_workflows_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.student_nudge_workflows
    ADD CONSTRAINT student_nudge_workflows_pkey PRIMARY KEY (id);


--
-- TOC entry 6715 (class 2606 OID 28176)
-- Name: student_submissions student_submissions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.student_submissions
    ADD CONSTRAINT student_submissions_pkey PRIMARY KEY (id);


--
-- TOC entry 5975 (class 2606 OID 19114)
-- Name: study_groups study_groups_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.study_groups
    ADD CONSTRAINT study_groups_pkey PRIMARY KEY (id);


--
-- TOC entry 5786 (class 2606 OID 18446)
-- Name: study_rooms study_rooms_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.study_rooms
    ADD CONSTRAINT study_rooms_pkey PRIMARY KEY (id);


--
-- TOC entry 6572 (class 2606 OID 22054)
-- Name: study_sessions study_sessions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.study_sessions
    ADD CONSTRAINT study_sessions_pkey PRIMARY KEY (id);


--
-- TOC entry 6384 (class 2606 OID 20913)
-- Name: submissions submissions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.submissions
    ADD CONSTRAINT submissions_pkey PRIMARY KEY (id);


--
-- TOC entry 5828 (class 2606 OID 18543)
-- Name: subscription_coupons subscription_coupons_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.subscription_coupons
    ADD CONSTRAINT subscription_coupons_pkey PRIMARY KEY (id);


--
-- TOC entry 6292 (class 2606 OID 20476)
-- Name: subscription_invoices subscription_invoices_invoice_number_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.subscription_invoices
    ADD CONSTRAINT subscription_invoices_invoice_number_key UNIQUE (invoice_number);


--
-- TOC entry 6294 (class 2606 OID 20474)
-- Name: subscription_invoices subscription_invoices_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.subscription_invoices
    ADD CONSTRAINT subscription_invoices_pkey PRIMARY KEY (id);


--
-- TOC entry 5822 (class 2606 OID 18531)
-- Name: subscription_plans subscription_plans_name_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.subscription_plans
    ADD CONSTRAINT subscription_plans_name_key UNIQUE (name);


--
-- TOC entry 5824 (class 2606 OID 18529)
-- Name: subscription_plans subscription_plans_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.subscription_plans
    ADD CONSTRAINT subscription_plans_pkey PRIMARY KEY (id);


--
-- TOC entry 5767 (class 2606 OID 18397)
-- Name: tags tags_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_pkey PRIMARY KEY (id);


--
-- TOC entry 5897 (class 2606 OID 18769)
-- Name: tasks tasks_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tasks
    ADD CONSTRAINT tasks_pkey PRIMARY KEY (id);


--
-- TOC entry 6547 (class 2606 OID 21863)
-- Name: tax_calculations tax_calculations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tax_calculations
    ADD CONSTRAINT tax_calculations_pkey PRIMARY KEY (id);


--
-- TOC entry 6114 (class 2606 OID 19631)
-- Name: tax_exemptions tax_exemptions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tax_exemptions
    ADD CONSTRAINT tax_exemptions_pkey PRIMARY KEY (id);


--
-- TOC entry 5856 (class 2606 OID 18619)
-- Name: tax_rates tax_rates_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tax_rates
    ADD CONSTRAINT tax_rates_pkey PRIMARY KEY (id);


--
-- TOC entry 6724 (class 2606 OID 28391)
-- Name: thread_votes thread_votes_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.thread_votes
    ADD CONSTRAINT thread_votes_pkey PRIMARY KEY (id);


--
-- TOC entry 5804 (class 2606 OID 18487)
-- Name: translations translations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.translations
    ADD CONSTRAINT translations_pkey PRIMARY KEY (id);


--
-- TOC entry 6053 (class 2606 OID 19392)
-- Name: two_factor_auth two_factor_auth_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.two_factor_auth
    ADD CONSTRAINT two_factor_auth_pkey PRIMARY KEY (id);


--
-- TOC entry 6321 (class 2606 OID 20584)
-- Name: two_factor_backup_codes two_factor_backup_codes_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.two_factor_backup_codes
    ADD CONSTRAINT two_factor_backup_codes_pkey PRIMARY KEY (id);


--
-- TOC entry 5814 (class 2606 OID 18505)
-- Name: content_translations uix_content_translation; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.content_translations
    ADD CONSTRAINT uix_content_translation UNIQUE (content_type, content_id, field_name, language_code);


--
-- TOC entry 5806 (class 2606 OID 18489)
-- Name: translations uix_translation_key_lang_ns; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.translations
    ADD CONSTRAINT uix_translation_key_lang_ns UNIQUE (key, language_code, namespace);


--
-- TOC entry 6721 (class 2606 OID 28144)
-- Name: universal_progress universal_progress_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.universal_progress
    ADD CONSTRAINT universal_progress_pkey PRIMARY KEY (id);


--
-- TOC entry 6517 (class 2606 OID 28188)
-- Name: upsc_attempts upsc_attempts_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.upsc_attempts
    ADD CONSTRAINT upsc_attempts_pkey PRIMARY KEY (id);


--
-- TOC entry 6176 (class 2606 OID 28205)
-- Name: upsc_batches upsc_batches_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.upsc_batches
    ADD CONSTRAINT upsc_batches_pkey PRIMARY KEY (id);


--
-- TOC entry 6611 (class 2606 OID 28237)
-- Name: upsc_cognitive_profiles upsc_cognitive_profiles_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.upsc_cognitive_profiles
    ADD CONSTRAINT upsc_cognitive_profiles_pkey PRIMARY KEY (id);


--
-- TOC entry 6613 (class 2606 OID 22250)
-- Name: upsc_cognitive_profiles upsc_cognitive_profiles_user_id_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.upsc_cognitive_profiles
    ADD CONSTRAINT upsc_cognitive_profiles_user_id_key UNIQUE (user_id);


--
-- TOC entry 6515 (class 2606 OID 28249)
-- Name: upsc_content upsc_content_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.upsc_content
    ADD CONSTRAINT upsc_content_pkey PRIMARY KEY (id);


--
-- TOC entry 6458 (class 2606 OID 28256)
-- Name: upsc_drills upsc_drills_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.upsc_drills
    ADD CONSTRAINT upsc_drills_pkey PRIMARY KEY (id);


--
-- TOC entry 6683 (class 2606 OID 28268)
-- Name: upsc_gap_analysis upsc_gap_analysis_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.upsc_gap_analysis
    ADD CONSTRAINT upsc_gap_analysis_pkey PRIMARY KEY (id);


--
-- TOC entry 6354 (class 2606 OID 28275)
-- Name: upsc_plans upsc_plans_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.upsc_plans
    ADD CONSTRAINT upsc_plans_pkey PRIMARY KEY (id);


--
-- TOC entry 6456 (class 2606 OID 28307)
-- Name: upsc_questions upsc_questions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.upsc_questions
    ADD CONSTRAINT upsc_questions_pkey PRIMARY KEY (id);


--
-- TOC entry 6549 (class 2606 OID 28329)
-- Name: upsc_reports upsc_reports_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.upsc_reports
    ADD CONSTRAINT upsc_reports_pkey PRIMARY KEY (id);


--
-- TOC entry 6360 (class 2606 OID 28346)
-- Name: upsc_rubrics upsc_rubrics_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.upsc_rubrics
    ADD CONSTRAINT upsc_rubrics_pkey PRIMARY KEY (id);


--
-- TOC entry 6352 (class 2606 OID 28353)
-- Name: upsc_student_profiles upsc_student_profiles_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.upsc_student_profiles
    ADD CONSTRAINT upsc_student_profiles_pkey PRIMARY KEY (id);


--
-- TOC entry 6462 (class 2606 OID 28360)
-- Name: upsc_student_progress upsc_student_progress_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.upsc_student_progress
    ADD CONSTRAINT upsc_student_progress_pkey PRIMARY KEY (id);


--
-- TOC entry 6358 (class 2606 OID 28369)
-- Name: upsc_timer_configs upsc_timer_configs_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.upsc_timer_configs
    ADD CONSTRAINT upsc_timer_configs_pkey PRIMARY KEY (id);


--
-- TOC entry 6685 (class 2606 OID 28378)
-- Name: upsc_unlock_transactions upsc_unlock_transactions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.upsc_unlock_transactions
    ADD CONSTRAINT upsc_unlock_transactions_pkey PRIMARY KEY (id);


--
-- TOC entry 6646 (class 2606 OID 22350)
-- Name: batch1_segments uq_batch1_segment_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.batch1_segments
    ADD CONSTRAINT uq_batch1_segment_key UNIQUE (segment_key);


--
-- TOC entry 6296 (class 2606 OID 27934)
-- Name: subscription_invoices uq_subscription_invoices_cashfree_invoice_id; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.subscription_invoices
    ADD CONSTRAINT uq_subscription_invoices_cashfree_invoice_id UNIQUE (cashfree_invoice_id);


--
-- TOC entry 6726 (class 2606 OID 28393)
-- Name: thread_votes uq_thread_user_vote; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.thread_votes
    ADD CONSTRAINT uq_thread_user_vote UNIQUE (thread_id, user_id);


--
-- TOC entry 6058 (class 2606 OID 19407)
-- Name: user_achievements user_achievements_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_achievements
    ADD CONSTRAINT user_achievements_pkey PRIMARY KEY (id);


--
-- TOC entry 5979 (class 2606 OID 19130)
-- Name: user_activities user_activities_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_activities
    ADD CONSTRAINT user_activities_pkey PRIMARY KEY (id);


--
-- TOC entry 6730 (class 2606 OID 28416)
-- Name: user_activity_sessions user_activity_sessions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_activity_sessions
    ADD CONSTRAINT user_activity_sessions_pkey PRIMARY KEY (id);


--
-- TOC entry 6063 (class 2606 OID 19430)
-- Name: user_challenges user_challenges_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_challenges
    ADD CONSTRAINT user_challenges_pkey PRIMARY KEY (id);


--
-- TOC entry 5999 (class 2606 OID 19198)
-- Name: user_email_preferences user_email_preferences_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_email_preferences
    ADD CONSTRAINT user_email_preferences_pkey PRIMARY KEY (id);


--
-- TOC entry 5818 (class 2606 OID 18517)
-- Name: user_language_preferences user_language_preferences_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_language_preferences
    ADD CONSTRAINT user_language_preferences_pkey PRIMARY KEY (id);


--
-- TOC entry 6158 (class 2606 OID 19794)
-- Name: user_permissions user_permissions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_permissions
    ADD CONSTRAINT user_permissions_pkey PRIMARY KEY (id);


--
-- TOC entry 5982 (class 2606 OID 19146)
-- Name: user_preferences user_preferences_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_preferences
    ADD CONSTRAINT user_preferences_pkey PRIMARY KEY (id);


--
-- TOC entry 5984 (class 2606 OID 19148)
-- Name: user_preferences user_preferences_user_id_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_preferences
    ADD CONSTRAINT user_preferences_user_id_key UNIQUE (user_id);


--
-- TOC entry 5915 (class 2606 OID 18847)
-- Name: user_rewards user_rewards_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_rewards
    ADD CONSTRAINT user_rewards_pkey PRIMARY KEY (id);


--
-- TOC entry 5891 (class 2606 OID 18750)
-- Name: user_roles user_roles_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_roles
    ADD CONSTRAINT user_roles_pkey PRIMARY KEY (user_id, role_id);


--
-- TOC entry 6163 (class 2606 OID 19812)
-- Name: user_sessions user_sessions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_sessions
    ADD CONSTRAINT user_sessions_pkey PRIMARY KEY (id);


--
-- TOC entry 6023 (class 2606 OID 19282)
-- Name: user_subscriptions user_subscriptions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_subscriptions
    ADD CONSTRAINT user_subscriptions_pkey PRIMARY KEY (id);


--
-- TOC entry 6659 (class 2606 OID 22393)
-- Name: user_topic_logs user_topic_logs_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_topic_logs
    ADD CONSTRAINT user_topic_logs_pkey PRIMARY KEY (id);


--
-- TOC entry 5872 (class 2606 OID 18656)
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- TOC entry 6710 (class 2606 OID 22626)
-- Name: voice_notes voice_notes_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.voice_notes
    ADD CONSTRAINT voice_notes_pkey PRIMARY KEY (id);


--
-- TOC entry 6454 (class 2606 OID 21290)
-- Name: workflow_executions workflow_executions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.workflow_executions
    ADD CONSTRAINT workflow_executions_pkey PRIMARY KEY (id);


--
-- TOC entry 6345 (class 2606 OID 20685)
-- Name: workflow_steps workflow_steps_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.workflow_steps
    ADD CONSTRAINT workflow_steps_pkey PRIMARY KEY (id);


--
-- TOC entry 6550 (class 1259 OID 21978)
-- Name: idx_ras_plans_date; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_ras_plans_date ON public.ras_plans USING btree (date);


--
-- TOC entry 6551 (class 1259 OID 21977)
-- Name: idx_ras_plans_email; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_ras_plans_email ON public.ras_plans USING btree (email);


--
-- TOC entry 6554 (class 1259 OID 22000)
-- Name: idx_ras_recordings_email; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_ras_recordings_email ON public.ras_recordings USING btree (email);


--
-- TOC entry 6555 (class 1259 OID 22001)
-- Name: idx_ras_recordings_topic; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_ras_recordings_topic ON public.ras_recordings USING btree (topic_id);


--
-- TOC entry 5844 (class 1259 OID 18595)
-- Name: ix_achievements_category; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_achievements_category ON public.achievements USING btree (category);


--
-- TOC entry 5845 (class 1259 OID 18596)
-- Name: ix_achievements_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_achievements_id ON public.achievements USING btree (id);


--
-- TOC entry 5846 (class 1259 OID 18597)
-- Name: ix_achievements_name; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_achievements_name ON public.achievements USING btree (name);


--
-- TOC entry 5906 (class 1259 OID 18823)
-- Name: ix_activity_logs_action; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_activity_logs_action ON public.activity_logs USING btree (action);


--
-- TOC entry 5907 (class 1259 OID 18821)
-- Name: ix_activity_logs_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_activity_logs_id ON public.activity_logs USING btree (id);


--
-- TOC entry 5908 (class 1259 OID 18822)
-- Name: ix_activity_logs_user_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_activity_logs_user_id ON public.activity_logs USING btree (user_id);


--
-- TOC entry 6072 (class 1259 OID 19478)
-- Name: ix_admin_logs_action; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_admin_logs_action ON public.admin_logs USING btree (action);


--
-- TOC entry 6073 (class 1259 OID 19477)
-- Name: ix_admin_logs_admin_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_admin_logs_admin_id ON public.admin_logs USING btree (admin_id);


--
-- TOC entry 6074 (class 1259 OID 19479)
-- Name: ix_admin_logs_created_at; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_admin_logs_created_at ON public.admin_logs USING btree (created_at);


--
-- TOC entry 6075 (class 1259 OID 19480)
-- Name: ix_admin_logs_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_admin_logs_id ON public.admin_logs USING btree (id);


--
-- TOC entry 6299 (class 1259 OID 20501)
-- Name: ix_affiliate_clicks_affiliate_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_affiliate_clicks_affiliate_id ON public.affiliate_clicks USING btree (affiliate_id);


--
-- TOC entry 6300 (class 1259 OID 20504)
-- Name: ix_affiliate_clicks_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_affiliate_clicks_id ON public.affiliate_clicks USING btree (id);


--
-- TOC entry 6301 (class 1259 OID 20502)
-- Name: ix_affiliate_clicks_referral_code; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_affiliate_clicks_referral_code ON public.affiliate_clicks USING btree (referral_code);


--
-- TOC entry 6302 (class 1259 OID 20503)
-- Name: ix_affiliate_clicks_tracking_cookie; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX ix_affiliate_clicks_tracking_cookie ON public.affiliate_clicks USING btree (tracking_cookie);


--
-- TOC entry 6441 (class 1259 OID 21259)
-- Name: ix_affiliate_commissions_affiliate_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_affiliate_commissions_affiliate_id ON public.affiliate_commissions USING btree (affiliate_id);


--
-- TOC entry 6442 (class 1259 OID 21258)
-- Name: ix_affiliate_commissions_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_affiliate_commissions_id ON public.affiliate_commissions USING btree (id);


--
-- TOC entry 6443 (class 1259 OID 21257)
-- Name: ix_affiliate_commissions_referral_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_affiliate_commissions_referral_id ON public.affiliate_commissions USING btree (referral_id);


--
-- TOC entry 6028 (class 1259 OID 19315)
-- Name: ix_affiliate_partners_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_affiliate_partners_id ON public.affiliate_partners USING btree (id);


--
-- TOC entry 6029 (class 1259 OID 19314)
-- Name: ix_affiliate_partners_referral_code; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX ix_affiliate_partners_referral_code ON public.affiliate_partners USING btree (referral_code);


--
-- TOC entry 6030 (class 1259 OID 19316)
-- Name: ix_affiliate_partners_user_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX ix_affiliate_partners_user_id ON public.affiliate_partners USING btree (user_id);


--
-- TOC entry 6310 (class 1259 OID 20543)
-- Name: ix_affiliate_payouts_affiliate_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_affiliate_payouts_affiliate_id ON public.affiliate_payouts USING btree (affiliate_id);


--
-- TOC entry 6311 (class 1259 OID 20544)
-- Name: ix_affiliate_payouts_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_affiliate_payouts_id ON public.affiliate_payouts USING btree (id);


--
-- TOC entry 6305 (class 1259 OID 20525)
-- Name: ix_affiliate_referrals_affiliate_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_affiliate_referrals_affiliate_id ON public.affiliate_referrals USING btree (affiliate_id);


--
-- TOC entry 6306 (class 1259 OID 20524)
-- Name: ix_affiliate_referrals_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_affiliate_referrals_id ON public.affiliate_referrals USING btree (id);


--
-- TOC entry 6307 (class 1259 OID 20526)
-- Name: ix_affiliate_referrals_referred_user_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_affiliate_referrals_referred_user_id ON public.affiliate_referrals USING btree (referred_user_id);


--
-- TOC entry 6078 (class 1259 OID 19495)
-- Name: ix_ai_avatars_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_ai_avatars_id ON public.ai_avatars USING btree (id);


--
-- TOC entry 6079 (class 1259 OID 19496)
-- Name: ix_ai_avatars_user_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_ai_avatars_user_id ON public.ai_avatars USING btree (user_id);


--
-- TOC entry 6649 (class 1259 OID 22367)
-- Name: ix_ai_coaching_sessions_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_ai_coaching_sessions_id ON public.ai_coaching_sessions USING btree (id);


--
-- TOC entry 5987 (class 1259 OID 19171)
-- Name: ix_ai_conversations_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_ai_conversations_id ON public.ai_conversations USING btree (id);


--
-- TOC entry 6139 (class 1259 OID 19732)
-- Name: ix_ai_debug_logs_session_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_ai_debug_logs_session_id ON public.ai_debug_logs USING btree (session_id);


--
-- TOC entry 6142 (class 1259 OID 19746)
-- Name: ix_ai_debug_sessions_session_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX ix_ai_debug_sessions_session_id ON public.ai_debug_sessions USING btree (session_id);


--
-- TOC entry 6314 (class 1259 OID 20576)
-- Name: ix_ai_generated_quizzes_course_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_ai_generated_quizzes_course_id ON public.ai_generated_quizzes USING btree (course_id);


--
-- TOC entry 6315 (class 1259 OID 20577)
-- Name: ix_ai_generated_quizzes_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_ai_generated_quizzes_id ON public.ai_generated_quizzes USING btree (id);


--
-- TOC entry 6316 (class 1259 OID 20575)
-- Name: ix_ai_generated_quizzes_lesson_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_ai_generated_quizzes_lesson_id ON public.ai_generated_quizzes USING btree (lesson_id);


--
-- TOC entry 6422 (class 1259 OID 21122)
-- Name: ix_ai_grading_results_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_ai_grading_results_id ON public.ai_grading_results USING btree (id);


--
-- TOC entry 6635 (class 1259 OID 22327)
-- Name: ix_ai_planning_sessions_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_ai_planning_sessions_id ON public.ai_planning_sessions USING btree (id);


--
-- TOC entry 6033 (class 1259 OID 19335)
-- Name: ix_ai_usage_logs_created_at; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_ai_usage_logs_created_at ON public.ai_usage_logs USING btree (created_at);


--
-- TOC entry 6034 (class 1259 OID 19333)
-- Name: ix_ai_usage_logs_feature; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_ai_usage_logs_feature ON public.ai_usage_logs USING btree (feature);


--
-- TOC entry 6035 (class 1259 OID 19334)
-- Name: ix_ai_usage_logs_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_ai_usage_logs_id ON public.ai_usage_logs USING btree (id);


--
-- TOC entry 6036 (class 1259 OID 19332)
-- Name: ix_ai_usage_logs_user_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_ai_usage_logs_user_id ON public.ai_usage_logs USING btree (user_id);


--
-- TOC entry 6271 (class 1259 OID 20392)
-- Name: ix_analytics_events_event_type; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_analytics_events_event_type ON public.analytics_events USING btree (event_type);


--
-- TOC entry 6272 (class 1259 OID 20393)
-- Name: ix_analytics_events_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_analytics_events_id ON public.analytics_events USING btree (id);


--
-- TOC entry 6273 (class 1259 OID 20391)
-- Name: ix_analytics_events_timestamp; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_analytics_events_timestamp ON public.analytics_events USING btree ("timestamp");


--
-- TOC entry 6391 (class 1259 OID 20971)
-- Name: ix_announcement_reads_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_announcement_reads_id ON public.announcement_reads USING btree (id);


--
-- TOC entry 5961 (class 1259 OID 19059)
-- Name: ix_assessment_rubrics_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_assessment_rubrics_id ON public.assessment_rubrics USING btree (id);


--
-- TOC entry 6082 (class 1259 OID 19512)
-- Name: ix_assets_filename; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_assets_filename ON public.assets USING btree (filename);


--
-- TOC entry 6083 (class 1259 OID 19513)
-- Name: ix_assets_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_assets_id ON public.assets USING btree (id);


--
-- TOC entry 6189 (class 1259 OID 19945)
-- Name: ix_assignments_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_assignments_id ON public.assignments USING btree (id);


--
-- TOC entry 6190 (class 1259 OID 19944)
-- Name: ix_assignments_title; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_assignments_title ON public.assignments USING btree (title);


--
-- TOC entry 6620 (class 1259 OID 22283)
-- Name: ix_attendance_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_attendance_id ON public.attendance USING btree (id);


--
-- TOC entry 6621 (class 1259 OID 22282)
-- Name: ix_attendance_session_type; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_attendance_session_type ON public.attendance USING btree (session_type);


--
-- TOC entry 6622 (class 1259 OID 22281)
-- Name: ix_attendance_user_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_attendance_user_id ON public.attendance USING btree (user_id);


--
-- TOC entry 6348 (class 1259 OID 20716)
-- Name: ix_automation_analytics_date; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_automation_analytics_date ON public.automation_analytics USING btree (date);


--
-- TOC entry 6349 (class 1259 OID 20718)
-- Name: ix_automation_analytics_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_automation_analytics_id ON public.automation_analytics USING btree (id);


--
-- TOC entry 6350 (class 1259 OID 20717)
-- Name: ix_automation_analytics_workflow_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_automation_analytics_workflow_id ON public.automation_analytics USING btree (workflow_id);


--
-- TOC entry 5927 (class 1259 OID 18918)
-- Name: ix_bank_questions_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_bank_questions_id ON public.bank_questions USING btree (id);


--
-- TOC entry 6643 (class 1259 OID 22352)
-- Name: ix_batch1_segments_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_batch1_segments_id ON public.batch1_segments USING btree (id);


--
-- TOC entry 6644 (class 1259 OID 22351)
-- Name: ix_batch1_segments_segment_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX ix_batch1_segments_segment_key ON public.batch1_segments USING btree (segment_key);


--
-- TOC entry 6567 (class 1259 OID 22043)
-- Name: ix_batch1_test_results_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_batch1_test_results_id ON public.batch1_test_results USING btree (id);


--
-- TOC entry 6568 (class 1259 OID 22042)
-- Name: ix_batch1_test_results_user_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_batch1_test_results_user_id ON public.batch1_test_results USING btree (user_id);


--
-- TOC entry 6604 (class 1259 OID 22224)
-- Name: ix_batch_sentiments_batch_name; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_batch_sentiments_batch_name ON public.batch_sentiments USING btree (batch_name);


--
-- TOC entry 6605 (class 1259 OID 22225)
-- Name: ix_batch_sentiments_date; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_batch_sentiments_date ON public.batch_sentiments USING btree (date);


--
-- TOC entry 6606 (class 1259 OID 22226)
-- Name: ix_batch_sentiments_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_batch_sentiments_id ON public.batch_sentiments USING btree (id);


--
-- TOC entry 5849 (class 1259 OID 18607)
-- Name: ix_blockchain_blocks_hash; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX ix_blockchain_blocks_hash ON public.blockchain_blocks USING btree (hash);


--
-- TOC entry 5850 (class 1259 OID 18608)
-- Name: ix_blockchain_blocks_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_blockchain_blocks_id ON public.blockchain_blocks USING btree (id);


--
-- TOC entry 5851 (class 1259 OID 18609)
-- Name: ix_blockchain_blocks_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX ix_blockchain_blocks_index ON public.blockchain_blocks USING btree (index);


--
-- TOC entry 6223 (class 1259 OID 20136)
-- Name: ix_bundle_enrollments_bundle_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_bundle_enrollments_bundle_id ON public.bundle_enrollments USING btree (bundle_id);


--
-- TOC entry 6224 (class 1259 OID 20135)
-- Name: ix_bundle_enrollments_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_bundle_enrollments_id ON public.bundle_enrollments USING btree (id);


--
-- TOC entry 6225 (class 1259 OID 20137)
-- Name: ix_bundle_enrollments_user_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_bundle_enrollments_user_id ON public.bundle_enrollments USING btree (user_id);


--
-- TOC entry 6672 (class 1259 OID 22460)
-- Name: ix_call_logs_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_call_logs_id ON public.call_logs USING btree (id);


--
-- TOC entry 6673 (class 1259 OID 22459)
-- Name: ix_call_logs_lead_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_call_logs_lead_id ON public.call_logs USING btree (lead_id);


--
-- TOC entry 6674 (class 1259 OID 22458)
-- Name: ix_call_logs_user_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_call_logs_user_id ON public.call_logs USING btree (user_id);


--
-- TOC entry 6437 (class 1259 OID 21230)
-- Name: ix_cart_items_cart_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_cart_items_cart_id ON public.cart_items USING btree (cart_id);


--
-- TOC entry 6438 (class 1259 OID 21231)
-- Name: ix_cart_items_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_cart_items_id ON public.cart_items USING btree (id);


--
-- TOC entry 5760 (class 1259 OID 18388)
-- Name: ix_categories_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_categories_id ON public.categories USING btree (id);


--
-- TOC entry 5761 (class 1259 OID 18386)
-- Name: ix_categories_name; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX ix_categories_name ON public.categories USING btree (name);


--
-- TOC entry 5762 (class 1259 OID 18387)
-- Name: ix_categories_slug; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX ix_categories_slug ON public.categories USING btree (slug);


--
-- TOC entry 5935 (class 1259 OID 18950)
-- Name: ix_certificate_templates_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_certificate_templates_id ON public.certificate_templates USING btree (id);


--
-- TOC entry 6378 (class 1259 OID 20903)
-- Name: ix_certificates_certificate_number; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX ix_certificates_certificate_number ON public.certificates USING btree (certificate_number);


--
-- TOC entry 6379 (class 1259 OID 20901)
-- Name: ix_certificates_course_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_certificates_course_id ON public.certificates USING btree (course_id);


--
-- TOC entry 6380 (class 1259 OID 20902)
-- Name: ix_certificates_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_certificates_id ON public.certificates USING btree (id);


--
-- TOC entry 6381 (class 1259 OID 20904)
-- Name: ix_certificates_user_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_certificates_user_id ON public.certificates USING btree (user_id);


--
-- TOC entry 5886 (class 1259 OID 18741)
-- Name: ix_challenges_end_date; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_challenges_end_date ON public.challenges USING btree (end_date);


--
-- TOC entry 5887 (class 1259 OID 18744)
-- Name: ix_challenges_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_challenges_id ON public.challenges USING btree (id);


--
-- TOC entry 5888 (class 1259 OID 18742)
-- Name: ix_challenges_start_date; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_challenges_start_date ON public.challenges USING btree (start_date);


--
-- TOC entry 5889 (class 1259 OID 18743)
-- Name: ix_challenges_type; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_challenges_type ON public.challenges USING btree (type);


--
-- TOC entry 6493 (class 1259 OID 21580)
-- Name: ix_chat_feedback_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_chat_feedback_id ON public.chat_feedback USING btree (id);


--
-- TOC entry 6248 (class 1259 OID 20261)
-- Name: ix_chat_sessions_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_chat_sessions_id ON public.chat_sessions USING btree (id);


--
-- TOC entry 6434 (class 1259 OID 21201)
-- Name: ix_chatbot_messages_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_chatbot_messages_id ON public.chatbot_messages USING btree (id);


--
-- TOC entry 6066 (class 1259 OID 19461)
-- Name: ix_coin_transactions_created_at; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_coin_transactions_created_at ON public.coin_transactions USING btree (created_at);


--
-- TOC entry 6067 (class 1259 OID 19460)
-- Name: ix_coin_transactions_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_coin_transactions_id ON public.coin_transactions USING btree (id);


--
-- TOC entry 6068 (class 1259 OID 19459)
-- Name: ix_coin_transactions_type; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_coin_transactions_type ON public.coin_transactions USING btree (type);


--
-- TOC entry 6069 (class 1259 OID 19462)
-- Name: ix_coin_transactions_user_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_coin_transactions_user_id ON public.coin_transactions USING btree (user_id);


--
-- TOC entry 6431 (class 1259 OID 21186)
-- Name: ix_collaborative_projects_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_collaborative_projects_id ON public.collaborative_projects USING btree (id);


--
-- TOC entry 6166 (class 1259 OID 19837)
-- Name: ix_communication_templates_category; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_communication_templates_category ON public.communication_templates USING btree (category);


--
-- TOC entry 6167 (class 1259 OID 19839)
-- Name: ix_communication_templates_channel; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_communication_templates_channel ON public.communication_templates USING btree (channel);


--
-- TOC entry 6168 (class 1259 OID 19836)
-- Name: ix_communication_templates_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_communication_templates_id ON public.communication_templates USING btree (id);


--
-- TOC entry 6169 (class 1259 OID 19838)
-- Name: ix_communication_templates_name; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_communication_templates_name ON public.communication_templates USING btree (name);


--
-- TOC entry 5835 (class 1259 OID 18570)
-- Name: ix_content_difficulty_analyses_content_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_content_difficulty_analyses_content_id ON public.content_difficulty_analyses USING btree (content_id);


--
-- TOC entry 5836 (class 1259 OID 18571)
-- Name: ix_content_difficulty_analyses_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_content_difficulty_analyses_id ON public.content_difficulty_analyses USING btree (id);


--
-- TOC entry 5831 (class 1259 OID 18558)
-- Name: ix_content_embeddings_content_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_content_embeddings_content_id ON public.content_embeddings USING btree (content_id);


--
-- TOC entry 5832 (class 1259 OID 18557)
-- Name: ix_content_embeddings_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_content_embeddings_id ON public.content_embeddings USING btree (id);


--
-- TOC entry 5809 (class 1259 OID 18507)
-- Name: ix_content_translations_content_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_content_translations_content_id ON public.content_translations USING btree (content_id);


--
-- TOC entry 5810 (class 1259 OID 18506)
-- Name: ix_content_translations_content_type; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_content_translations_content_type ON public.content_translations USING btree (content_type);


--
-- TOC entry 5811 (class 1259 OID 18508)
-- Name: ix_content_translations_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_content_translations_id ON public.content_translations USING btree (id);


--
-- TOC entry 5812 (class 1259 OID 18509)
-- Name: ix_content_translations_language_code; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_content_translations_language_code ON public.content_translations USING btree (language_code);


--
-- TOC entry 6496 (class 1259 OID 21604)
-- Name: ix_coupon_usages_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_coupon_usages_id ON public.coupon_usages USING btree (id);


--
-- TOC entry 6260 (class 1259 OID 20331)
-- Name: ix_coupons_code; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX ix_coupons_code ON public.coupons USING btree (code);


--
-- TOC entry 6261 (class 1259 OID 20330)
-- Name: ix_coupons_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_coupons_id ON public.coupons USING btree (id);


--
-- TOC entry 6196 (class 1259 OID 19982)
-- Name: ix_course_announcements_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_course_announcements_id ON public.course_announcements USING btree (id);


--
-- TOC entry 6202 (class 1259 OID 20029)
-- Name: ix_course_bookmarks_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_course_bookmarks_id ON public.course_bookmarks USING btree (id);


--
-- TOC entry 5938 (class 1259 OID 18968)
-- Name: ix_course_bundles_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_course_bundles_id ON public.course_bundles USING btree (id);


--
-- TOC entry 5939 (class 1259 OID 18966)
-- Name: ix_course_bundles_slug; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX ix_course_bundles_slug ON public.course_bundles USING btree (slug);


--
-- TOC entry 5940 (class 1259 OID 18967)
-- Name: ix_course_bundles_title; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_course_bundles_title ON public.course_bundles USING btree (title);


--
-- TOC entry 6371 (class 1259 OID 27931)
-- Name: ix_course_payments_cashfree_order_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX ix_course_payments_cashfree_order_id ON public.course_payments USING btree (cashfree_order_id);


--
-- TOC entry 6372 (class 1259 OID 27932)
-- Name: ix_course_payments_cashfree_payment_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX ix_course_payments_cashfree_payment_id ON public.course_payments USING btree (cashfree_payment_id);


--
-- TOC entry 6373 (class 1259 OID 20863)
-- Name: ix_course_payments_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_course_payments_id ON public.course_payments USING btree (id);


--
-- TOC entry 6251 (class 1259 OID 20281)
-- Name: ix_course_recommendations_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_course_recommendations_id ON public.course_recommendations USING btree (id);


--
-- TOC entry 6182 (class 1259 OID 19906)
-- Name: ix_course_reviews_course_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_course_reviews_course_id ON public.course_reviews USING btree (course_id);


--
-- TOC entry 6183 (class 1259 OID 19908)
-- Name: ix_course_reviews_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_course_reviews_id ON public.course_reviews USING btree (id);


--
-- TOC entry 6184 (class 1259 OID 19907)
-- Name: ix_course_reviews_user_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_course_reviews_user_id ON public.course_reviews USING btree (user_id);


--
-- TOC entry 5943 (class 1259 OID 18992)
-- Name: ix_courses_category_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_courses_category_id ON public.courses USING btree (category_id);


--
-- TOC entry 5944 (class 1259 OID 18989)
-- Name: ix_courses_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_courses_id ON public.courses USING btree (id);


--
-- TOC entry 5945 (class 1259 OID 18993)
-- Name: ix_courses_instructor_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_courses_instructor_id ON public.courses USING btree (instructor_id);


--
-- TOC entry 5946 (class 1259 OID 18990)
-- Name: ix_courses_is_published; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_courses_is_published ON public.courses USING btree (is_published);


--
-- TOC entry 5947 (class 1259 OID 18988)
-- Name: ix_courses_level; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_courses_level ON public.courses USING btree (level);


--
-- TOC entry 5948 (class 1259 OID 18991)
-- Name: ix_courses_slug; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX ix_courses_slug ON public.courses USING btree (slug);


--
-- TOC entry 5949 (class 1259 OID 18994)
-- Name: ix_courses_title; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_courses_title ON public.courses USING btree (title);


--
-- TOC entry 5859 (class 1259 OID 18631)
-- Name: ix_curriculum_insights_date; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_curriculum_insights_date ON public.curriculum_insights USING btree (date);


--
-- TOC entry 5860 (class 1259 OID 18630)
-- Name: ix_curriculum_insights_gs_paper; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_curriculum_insights_gs_paper ON public.curriculum_insights USING btree (gs_paper);


--
-- TOC entry 6630 (class 1259 OID 22312)
-- Name: ix_daily_dev_reports_batch; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_daily_dev_reports_batch ON public.daily_dev_reports USING btree (batch);


--
-- TOC entry 6631 (class 1259 OID 22311)
-- Name: ix_daily_dev_reports_date; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX ix_daily_dev_reports_date ON public.daily_dev_reports USING btree (date);


--
-- TOC entry 6632 (class 1259 OID 22310)
-- Name: ix_daily_dev_reports_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_daily_dev_reports_id ON public.daily_dev_reports USING btree (id);


--
-- TOC entry 6126 (class 1259 OID 19690)
-- Name: ix_daily_reflections_date; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_daily_reflections_date ON public.daily_reflections USING btree (date);


--
-- TOC entry 6127 (class 1259 OID 19689)
-- Name: ix_daily_reflections_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_daily_reflections_id ON public.daily_reflections USING btree (id);


--
-- TOC entry 6128 (class 1259 OID 19688)
-- Name: ix_daily_reflections_user_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_daily_reflections_user_id ON public.daily_reflections USING btree (user_id);


--
-- TOC entry 6600 (class 1259 OID 22213)
-- Name: ix_daily_summaries_date; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_daily_summaries_date ON public.daily_summaries USING btree (date);


--
-- TOC entry 6601 (class 1259 OID 22214)
-- Name: ix_daily_summaries_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_daily_summaries_id ON public.daily_summaries USING btree (id);


--
-- TOC entry 6117 (class 1259 OID 19658)
-- Name: ix_daily_tasks_date; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_daily_tasks_date ON public.daily_tasks USING btree (date);


--
-- TOC entry 6118 (class 1259 OID 19659)
-- Name: ix_daily_tasks_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_daily_tasks_id ON public.daily_tasks USING btree (id);


--
-- TOC entry 6119 (class 1259 OID 19657)
-- Name: ix_daily_tasks_user_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_daily_tasks_user_id ON public.daily_tasks USING btree (user_id);


--
-- TOC entry 6152 (class 1259 OID 19783)
-- Name: ix_data_masking_configs_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_data_masking_configs_id ON public.data_masking_configs USING btree (id);


--
-- TOC entry 6153 (class 1259 OID 19784)
-- Name: ix_data_masking_configs_role; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_data_masking_configs_role ON public.data_masking_configs USING btree (role);


--
-- TOC entry 6154 (class 1259 OID 19782)
-- Name: ix_data_masking_configs_user_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_data_masking_configs_user_id ON public.data_masking_configs USING btree (user_id);


--
-- TOC entry 6625 (class 1259 OID 22299)
-- Name: ix_development_logs_batch; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_development_logs_batch ON public.development_logs USING btree (batch);


--
-- TOC entry 6626 (class 1259 OID 22298)
-- Name: ix_development_logs_date; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_development_logs_date ON public.development_logs USING btree (date);


--
-- TOC entry 6627 (class 1259 OID 22300)
-- Name: ix_development_logs_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_development_logs_id ON public.development_logs USING btree (id);


--
-- TOC entry 6086 (class 1259 OID 19529)
-- Name: ix_digital_products_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_digital_products_id ON public.digital_products USING btree (id);


--
-- TOC entry 6087 (class 1259 OID 19530)
-- Name: ix_digital_products_title; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_digital_products_title ON public.digital_products USING btree (title);


--
-- TOC entry 6090 (class 1259 OID 19550)
-- Name: ix_direct_messages_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_direct_messages_id ON public.direct_messages USING btree (id);


--
-- TOC entry 6091 (class 1259 OID 19552)
-- Name: ix_direct_messages_receiver_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_direct_messages_receiver_id ON public.direct_messages USING btree (receiver_id);


--
-- TOC entry 6092 (class 1259 OID 19551)
-- Name: ix_direct_messages_sender_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_direct_messages_sender_id ON public.direct_messages USING btree (sender_id);


--
-- TOC entry 6193 (class 1259 OID 19961)
-- Name: ix_discussion_categories_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_discussion_categories_id ON public.discussion_categories USING btree (id);


--
-- TOC entry 6465 (class 1259 OID 21394)
-- Name: ix_discussion_posts_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_discussion_posts_id ON public.discussion_posts USING btree (id);


--
-- TOC entry 6387 (class 1259 OID 20951)
-- Name: ix_discussion_threads_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_discussion_threads_id ON public.discussion_threads USING btree (id);


--
-- TOC entry 6388 (class 1259 OID 20952)
-- Name: ix_discussion_threads_title; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_discussion_threads_title ON public.discussion_threads USING btree (title);


--
-- TOC entry 6135 (class 1259 OID 19718)
-- Name: ix_drill_daily_summaries_date; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_drill_daily_summaries_date ON public.drill_daily_summaries USING btree (date);


--
-- TOC entry 6136 (class 1259 OID 19717)
-- Name: ix_drill_daily_summaries_student_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_drill_daily_summaries_student_id ON public.drill_daily_summaries USING btree (student_id);


--
-- TOC entry 6131 (class 1259 OID 19704)
-- Name: ix_drill_questions_gs_paper; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_drill_questions_gs_paper ON public.drill_questions USING btree (gs_paper);


--
-- TOC entry 6132 (class 1259 OID 19703)
-- Name: ix_drill_questions_topic; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_drill_questions_topic ON public.drill_questions USING btree (topic);


--
-- TOC entry 6340 (class 1259 OID 20675)
-- Name: ix_drill_sessions_date; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_drill_sessions_date ON public.drill_sessions USING btree (date);


--
-- TOC entry 6341 (class 1259 OID 20674)
-- Name: ix_drill_sessions_student_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_drill_sessions_student_id ON public.drill_sessions USING btree (student_id);


--
-- TOC entry 6254 (class 1259 OID 20301)
-- Name: ix_email_logs_created_at; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_email_logs_created_at ON public.email_logs USING btree (created_at);


--
-- TOC entry 6255 (class 1259 OID 20302)
-- Name: ix_email_logs_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_email_logs_id ON public.email_logs USING btree (id);


--
-- TOC entry 6256 (class 1259 OID 20303)
-- Name: ix_email_logs_status; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_email_logs_status ON public.email_logs USING btree (status);


--
-- TOC entry 6257 (class 1259 OID 20304)
-- Name: ix_email_logs_user_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_email_logs_user_id ON public.email_logs USING btree (user_id);


--
-- TOC entry 6002 (class 1259 OID 19222)
-- Name: ix_email_templates_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_email_templates_id ON public.email_templates USING btree (id);


--
-- TOC entry 6003 (class 1259 OID 19220)
-- Name: ix_email_templates_name; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX ix_email_templates_name ON public.email_templates USING btree (name);


--
-- TOC entry 6004 (class 1259 OID 19221)
-- Name: ix_email_templates_notification_type; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_email_templates_notification_type ON public.email_templates USING btree (notification_type);


--
-- TOC entry 6095 (class 1259 OID 19570)
-- Name: ix_enquiries_email; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_enquiries_email ON public.enquiries USING btree (email);


--
-- TOC entry 6096 (class 1259 OID 19568)
-- Name: ix_enquiries_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_enquiries_id ON public.enquiries USING btree (id);


--
-- TOC entry 6097 (class 1259 OID 19569)
-- Name: ix_enquiries_name; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_enquiries_name ON public.enquiries USING btree (name);


--
-- TOC entry 6228 (class 1259 OID 20160)
-- Name: ix_enrollments_course_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_enrollments_course_id ON public.enrollments USING btree (course_id);


--
-- TOC entry 6229 (class 1259 OID 20163)
-- Name: ix_enrollments_enrolled_at; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_enrollments_enrolled_at ON public.enrollments USING btree (enrolled_at);


--
-- TOC entry 6230 (class 1259 OID 20162)
-- Name: ix_enrollments_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_enrollments_id ON public.enrollments USING btree (id);


--
-- TOC entry 6231 (class 1259 OID 20164)
-- Name: ix_enrollments_status; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_enrollments_status ON public.enrollments USING btree (status);


--
-- TOC entry 6232 (class 1259 OID 20161)
-- Name: ix_enrollments_user_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_enrollments_user_id ON public.enrollments USING btree (user_id);


--
-- TOC entry 5967 (class 1259 OID 19089)
-- Name: ix_exam_sessions_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_exam_sessions_id ON public.exam_sessions USING btree (id);


--
-- TOC entry 6666 (class 1259 OID 22435)
-- Name: ix_field_activities_activity_type; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_field_activities_activity_type ON public.field_activities USING btree (activity_type);


--
-- TOC entry 6667 (class 1259 OID 22436)
-- Name: ix_field_activities_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_field_activities_id ON public.field_activities USING btree (id);


--
-- TOC entry 6668 (class 1259 OID 22437)
-- Name: ix_field_activities_lead_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_field_activities_lead_id ON public.field_activities USING btree (lead_id);


--
-- TOC entry 6669 (class 1259 OID 22434)
-- Name: ix_field_activities_user_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_field_activities_user_id ON public.field_activities USING btree (user_id);


--
-- TOC entry 6694 (class 1259 OID 22573)
-- Name: ix_flashcard_progress_flashcard_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_flashcard_progress_flashcard_id ON public.flashcard_progress USING btree (flashcard_id);


--
-- TOC entry 6695 (class 1259 OID 22571)
-- Name: ix_flashcard_progress_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_flashcard_progress_id ON public.flashcard_progress USING btree (id);


--
-- TOC entry 6696 (class 1259 OID 22572)
-- Name: ix_flashcard_progress_user_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_flashcard_progress_user_id ON public.flashcard_progress USING btree (user_id);


--
-- TOC entry 6652 (class 1259 OID 22384)
-- Name: ix_flashcards_batch1_segment_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_flashcards_batch1_segment_key ON public.flashcards USING btree (batch1_segment_key);


--
-- TOC entry 6653 (class 1259 OID 22385)
-- Name: ix_flashcards_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_flashcards_id ON public.flashcards USING btree (id);


--
-- TOC entry 6654 (class 1259 OID 22383)
-- Name: ix_flashcards_lesson_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_flashcards_lesson_id ON public.flashcards USING btree (lesson_id);


--
-- TOC entry 6100 (class 1259 OID 19589)
-- Name: ix_friendships_friend_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_friendships_friend_id ON public.friendships USING btree (friend_id);


--
-- TOC entry 6101 (class 1259 OID 19590)
-- Name: ix_friendships_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_friendships_id ON public.friendships USING btree (id);


--
-- TOC entry 6102 (class 1259 OID 19588)
-- Name: ix_friendships_user_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_friendships_user_id ON public.friendships USING btree (user_id);


--
-- TOC entry 6609 (class 1259 OID 22241)
-- Name: ix_ghost_login_alerts_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_ghost_login_alerts_id ON public.ghost_login_alerts USING btree (id);


--
-- TOC entry 6616 (class 1259 OID 22266)
-- Name: ix_grapho_books_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_grapho_books_id ON public.grapho_books USING btree (id);


--
-- TOC entry 6617 (class 1259 OID 22265)
-- Name: ix_grapho_books_title; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_grapho_books_title ON public.grapho_books USING btree (title);


--
-- TOC entry 6688 (class 1259 OID 22532)
-- Name: ix_grapho_pages_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_grapho_pages_id ON public.grapho_pages USING btree (id);


--
-- TOC entry 6691 (class 1259 OID 22552)
-- Name: ix_grapho_submissions_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_grapho_submissions_id ON public.grapho_submissions USING btree (id);


--
-- TOC entry 6324 (class 1259 OID 20613)
-- Name: ix_graphotherapy_day_completions_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_graphotherapy_day_completions_id ON public.graphotherapy_day_completions USING btree (id);


--
-- TOC entry 6105 (class 1259 OID 19604)
-- Name: ix_graphotherapy_progress_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_graphotherapy_progress_id ON public.graphotherapy_progress USING btree (id);


--
-- TOC entry 6425 (class 1259 OID 21140)
-- Name: ix_group_memberships_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_group_memberships_id ON public.group_memberships USING btree (id);


--
-- TOC entry 6480 (class 1259 OID 21494)
-- Name: ix_group_post_comments_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_group_post_comments_id ON public.group_post_comments USING btree (id);


--
-- TOC entry 6428 (class 1259 OID 21160)
-- Name: ix_group_posts_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_group_posts_id ON public.group_posts USING btree (id);


--
-- TOC entry 5749 (class 1259 OID 18353)
-- Name: ix_groups_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_groups_id ON public.groups USING btree (id);


--
-- TOC entry 5750 (class 1259 OID 18354)
-- Name: ix_groups_name; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX ix_groups_name ON public.groups USING btree (name);


--
-- TOC entry 6327 (class 1259 OID 20628)
-- Name: ix_habit_logs_date; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_habit_logs_date ON public.habit_logs USING btree (date);


--
-- TOC entry 6328 (class 1259 OID 20627)
-- Name: ix_habit_logs_habit_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_habit_logs_habit_id ON public.habit_logs USING btree (habit_id);


--
-- TOC entry 6329 (class 1259 OID 20626)
-- Name: ix_habit_logs_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_habit_logs_id ON public.habit_logs USING btree (id);


--
-- TOC entry 6122 (class 1259 OID 19673)
-- Name: ix_habits_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_habits_id ON public.habits USING btree (id);


--
-- TOC entry 6123 (class 1259 OID 19672)
-- Name: ix_habits_user_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_habits_user_id ON public.habits USING btree (user_id);


--
-- TOC entry 5911 (class 1259 OID 18840)
-- Name: ix_handwriting_submissions_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_handwriting_submissions_id ON public.handwriting_submissions USING btree (id);


--
-- TOC entry 5912 (class 1259 OID 18839)
-- Name: ix_handwriting_submissions_user_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_handwriting_submissions_user_id ON public.handwriting_submissions USING btree (user_id);


--
-- TOC entry 6264 (class 1259 OID 20350)
-- Name: ix_instructor_analytics_date; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_instructor_analytics_date ON public.instructor_analytics USING btree (date);


--
-- TOC entry 6265 (class 1259 OID 20351)
-- Name: ix_instructor_analytics_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_instructor_analytics_id ON public.instructor_analytics USING btree (id);


--
-- TOC entry 6016 (class 1259 OID 19272)
-- Name: ix_instructor_payment_info_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_instructor_payment_info_id ON public.instructor_payment_info USING btree (id);


--
-- TOC entry 6017 (class 1259 OID 19273)
-- Name: ix_instructor_payment_info_instructor_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX ix_instructor_payment_info_instructor_id ON public.instructor_payment_info USING btree (instructor_id);


--
-- TOC entry 6012 (class 1259 OID 19256)
-- Name: ix_instructor_payouts_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_instructor_payouts_id ON public.instructor_payouts USING btree (id);


--
-- TOC entry 6013 (class 1259 OID 19255)
-- Name: ix_instructor_payouts_instructor_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_instructor_payouts_instructor_id ON public.instructor_payouts USING btree (instructor_id);


--
-- TOC entry 6579 (class 1259 OID 22108)
-- Name: ix_interaction_logs_user_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_interaction_logs_user_id ON public.interaction_logs USING btree (user_id);


--
-- TOC entry 6538 (class 1259 OID 21855)
-- Name: ix_invoices_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_invoices_id ON public.invoices USING btree (id);


--
-- TOC entry 6539 (class 1259 OID 21854)
-- Name: ix_invoices_invoice_number; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX ix_invoices_invoice_number ON public.invoices USING btree (invoice_number);


--
-- TOC entry 6540 (class 1259 OID 21853)
-- Name: ix_invoices_order_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX ix_invoices_order_id ON public.invoices USING btree (order_id);


--
-- TOC entry 5795 (class 1259 OID 18476)
-- Name: ix_languages_code; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX ix_languages_code ON public.languages USING btree (code);


--
-- TOC entry 5796 (class 1259 OID 18477)
-- Name: ix_languages_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_languages_id ON public.languages USING btree (id);


--
-- TOC entry 6143 (class 1259 OID 19765)
-- Name: ix_leads_email; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_leads_email ON public.leads USING btree (email);


--
-- TOC entry 6144 (class 1259 OID 19764)
-- Name: ix_leads_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_leads_id ON public.leads USING btree (id);


--
-- TOC entry 6145 (class 1259 OID 19763)
-- Name: ix_leads_name; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_leads_name ON public.leads USING btree (name);


--
-- TOC entry 6146 (class 1259 OID 19762)
-- Name: ix_leads_phone; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_leads_phone ON public.leads USING btree (phone);


--
-- TOC entry 6147 (class 1259 OID 19766)
-- Name: ix_leads_source_primary; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_leads_source_primary ON public.leads USING btree (source_primary);


--
-- TOC entry 6243 (class 1259 OID 20241)
-- Name: ix_learning_groups_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_learning_groups_id ON public.learning_groups USING btree (id);


--
-- TOC entry 5928 (class 1259 OID 18934)
-- Name: ix_learning_paths_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_learning_paths_id ON public.learning_paths USING btree (id);


--
-- TOC entry 5929 (class 1259 OID 18933)
-- Name: ix_learning_paths_slug; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX ix_learning_paths_slug ON public.learning_paths USING btree (slug);


--
-- TOC entry 5930 (class 1259 OID 18935)
-- Name: ix_learning_paths_title; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_learning_paths_title ON public.learning_paths USING btree (title);


--
-- TOC entry 6197 (class 1259 OID 20008)
-- Name: ix_lesson_bookmarks_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_lesson_bookmarks_id ON public.lesson_bookmarks USING btree (id);


--
-- TOC entry 5873 (class 1259 OID 18694)
-- Name: ix_lesson_drip_settings_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_lesson_drip_settings_id ON public.lesson_drip_settings USING btree (id);


--
-- TOC entry 5922 (class 1259 OID 18902)
-- Name: ix_lesson_notes_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_lesson_notes_id ON public.lesson_notes USING btree (id);


--
-- TOC entry 5916 (class 1259 OID 18881)
-- Name: ix_lesson_progress_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_lesson_progress_id ON public.lesson_progress USING btree (id);


--
-- TOC entry 5917 (class 1259 OID 18879)
-- Name: ix_lesson_progress_lesson_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_lesson_progress_lesson_id ON public.lesson_progress USING btree (lesson_id);


--
-- TOC entry 5918 (class 1259 OID 18880)
-- Name: ix_lesson_progress_status; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_lesson_progress_status ON public.lesson_progress USING btree (status);


--
-- TOC entry 5919 (class 1259 OID 18878)
-- Name: ix_lesson_progress_user_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_lesson_progress_user_id ON public.lesson_progress USING btree (user_id);


--
-- TOC entry 5773 (class 1259 OID 18425)
-- Name: ix_lessons_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_lessons_id ON public.lessons USING btree (id);


--
-- TOC entry 5774 (class 1259 OID 18422)
-- Name: ix_lessons_module_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_lessons_module_id ON public.lessons USING btree (module_id);


--
-- TOC entry 5775 (class 1259 OID 18424)
-- Name: ix_lessons_order_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_lessons_order_index ON public.lessons USING btree (order_index);


--
-- TOC entry 5776 (class 1259 OID 18423)
-- Name: ix_lessons_type; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_lessons_type ON public.lessons USING btree (type);


--
-- TOC entry 6397 (class 1259 OID 21025)
-- Name: ix_live_class_attendance_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_live_class_attendance_id ON public.live_class_attendance USING btree (id);


--
-- TOC entry 6398 (class 1259 OID 21023)
-- Name: ix_live_class_attendance_live_class_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_live_class_attendance_live_class_id ON public.live_class_attendance USING btree (live_class_id);


--
-- TOC entry 6399 (class 1259 OID 21024)
-- Name: ix_live_class_attendance_student_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_live_class_attendance_student_id ON public.live_class_attendance USING btree (student_id);


--
-- TOC entry 6414 (class 1259 OID 21104)
-- Name: ix_live_class_chat_messages_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_live_class_chat_messages_id ON public.live_class_chat_messages USING btree (id);


--
-- TOC entry 6415 (class 1259 OID 21103)
-- Name: ix_live_class_chat_messages_live_class_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_live_class_chat_messages_live_class_id ON public.live_class_chat_messages USING btree (live_class_id);


--
-- TOC entry 6469 (class 1259 OID 21444)
-- Name: ix_live_class_poll_responses_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_live_class_poll_responses_id ON public.live_class_poll_responses USING btree (id);


--
-- TOC entry 6470 (class 1259 OID 21443)
-- Name: ix_live_class_poll_responses_poll_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_live_class_poll_responses_poll_id ON public.live_class_poll_responses USING btree (poll_id);


--
-- TOC entry 6402 (class 1259 OID 21041)
-- Name: ix_live_class_polls_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_live_class_polls_id ON public.live_class_polls USING btree (id);


--
-- TOC entry 6403 (class 1259 OID 21040)
-- Name: ix_live_class_polls_live_class_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_live_class_polls_live_class_id ON public.live_class_polls USING btree (live_class_id);


--
-- TOC entry 6406 (class 1259 OID 21062)
-- Name: ix_live_class_questions_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_live_class_questions_id ON public.live_class_questions USING btree (id);


--
-- TOC entry 6407 (class 1259 OID 21061)
-- Name: ix_live_class_questions_live_class_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_live_class_questions_live_class_id ON public.live_class_questions USING btree (live_class_id);


--
-- TOC entry 6410 (class 1259 OID 21082)
-- Name: ix_live_class_reactions_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_live_class_reactions_id ON public.live_class_reactions USING btree (id);


--
-- TOC entry 6411 (class 1259 OID 21083)
-- Name: ix_live_class_reactions_live_class_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_live_class_reactions_live_class_id ON public.live_class_reactions USING btree (live_class_id);


--
-- TOC entry 6207 (class 1259 OID 20071)
-- Name: ix_live_classes_course_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_live_classes_course_id ON public.live_classes USING btree (course_id);


--
-- TOC entry 6208 (class 1259 OID 20073)
-- Name: ix_live_classes_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_live_classes_id ON public.live_classes USING btree (id);


--
-- TOC entry 6209 (class 1259 OID 20072)
-- Name: ix_live_classes_scheduled_at; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_live_classes_scheduled_at ON public.live_classes USING btree (scheduled_at);


--
-- TOC entry 6210 (class 1259 OID 20074)
-- Name: ix_live_classes_status; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_live_classes_status ON public.live_classes USING btree (status);


--
-- TOC entry 6711 (class 1259 OID 27895)
-- Name: ix_lms_assignments_title; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_lms_assignments_title ON public.lms_assignments USING btree (title);


--
-- TOC entry 6170 (class 1259 OID 19857)
-- Name: ix_marketing_workflows_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_marketing_workflows_id ON public.marketing_workflows USING btree (id);


--
-- TOC entry 6171 (class 1259 OID 19855)
-- Name: ix_marketing_workflows_name; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_marketing_workflows_name ON public.marketing_workflows USING btree (name);


--
-- TOC entry 6172 (class 1259 OID 19856)
-- Name: ix_marketing_workflows_status; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_marketing_workflows_status ON public.marketing_workflows USING btree (status);


--
-- TOC entry 6279 (class 1259 OID 20431)
-- Name: ix_marketplace_listings_course_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX ix_marketplace_listings_course_id ON public.marketplace_listings USING btree (course_id);


--
-- TOC entry 6280 (class 1259 OID 20430)
-- Name: ix_marketplace_listings_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_marketplace_listings_id ON public.marketplace_listings USING btree (id);


--
-- TOC entry 6177 (class 1259 OID 19886)
-- Name: ix_meditation_day_completions_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_meditation_day_completions_id ON public.meditation_day_completions USING btree (id);


--
-- TOC entry 6582 (class 1259 OID 22155)
-- Name: ix_meditation_experiences_day_completion_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_meditation_experiences_day_completion_id ON public.meditation_experiences USING btree (day_completion_id);


--
-- TOC entry 6583 (class 1259 OID 22153)
-- Name: ix_meditation_experiences_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_meditation_experiences_id ON public.meditation_experiences USING btree (id);


--
-- TOC entry 6584 (class 1259 OID 22154)
-- Name: ix_meditation_experiences_user_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_meditation_experiences_user_id ON public.meditation_experiences USING btree (user_id);


--
-- TOC entry 6587 (class 1259 OID 22177)
-- Name: ix_meditation_level_purchases_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_meditation_level_purchases_id ON public.meditation_level_purchases USING btree (id);


--
-- TOC entry 6588 (class 1259 OID 22179)
-- Name: ix_meditation_level_purchases_level; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_meditation_level_purchases_level ON public.meditation_level_purchases USING btree (level);


--
-- TOC entry 6589 (class 1259 OID 22180)
-- Name: ix_meditation_level_purchases_payment_status; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_meditation_level_purchases_payment_status ON public.meditation_level_purchases USING btree (payment_status);


--
-- TOC entry 6590 (class 1259 OID 22178)
-- Name: ix_meditation_level_purchases_user_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_meditation_level_purchases_user_id ON public.meditation_level_purchases USING btree (user_id);


--
-- TOC entry 6361 (class 1259 OID 20816)
-- Name: ix_meditation_process_completions_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_meditation_process_completions_id ON public.meditation_process_completions USING btree (id);


--
-- TOC entry 5751 (class 1259 OID 18365)
-- Name: ix_meditation_processes_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_meditation_processes_id ON public.meditation_processes USING btree (id);


--
-- TOC entry 5898 (class 1259 OID 18792)
-- Name: ix_meditation_progress_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_meditation_progress_id ON public.meditation_progress USING btree (id);


--
-- TOC entry 5901 (class 1259 OID 18806)
-- Name: ix_meditation_sessions_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_meditation_sessions_id ON public.meditation_sessions USING btree (id);


--
-- TOC entry 6508 (class 1259 OID 21688)
-- Name: ix_message_logs_channel; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_message_logs_channel ON public.message_logs USING btree (channel);


--
-- TOC entry 6509 (class 1259 OID 21691)
-- Name: ix_message_logs_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_message_logs_id ON public.message_logs USING btree (id);


--
-- TOC entry 6510 (class 1259 OID 21689)
-- Name: ix_message_logs_lead_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_message_logs_lead_id ON public.message_logs USING btree (lead_id);


--
-- TOC entry 6511 (class 1259 OID 21690)
-- Name: ix_message_logs_status; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_message_logs_status ON public.message_logs USING btree (status);


--
-- TOC entry 6660 (class 1259 OID 22412)
-- Name: ix_midnight_test_questions_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_midnight_test_questions_id ON public.midnight_test_questions USING btree (id);


--
-- TOC entry 6661 (class 1259 OID 22413)
-- Name: ix_midnight_test_questions_topic_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_midnight_test_questions_topic_id ON public.midnight_test_questions USING btree (topic_id);


--
-- TOC entry 5768 (class 1259 OID 18412)
-- Name: ix_modules_course_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_modules_course_id ON public.modules USING btree (course_id);


--
-- TOC entry 5769 (class 1259 OID 18410)
-- Name: ix_modules_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_modules_id ON public.modules USING btree (id);


--
-- TOC entry 5770 (class 1259 OID 18411)
-- Name: ix_modules_order_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_modules_order_index ON public.modules USING btree (order_index);


--
-- TOC entry 5962 (class 1259 OID 19074)
-- Name: ix_mood_entries_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_mood_entries_id ON public.mood_entries USING btree (id);


--
-- TOC entry 5988 (class 1259 OID 19188)
-- Name: ix_notifications_created_at; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_notifications_created_at ON public.notifications USING btree (created_at);


--
-- TOC entry 5989 (class 1259 OID 19186)
-- Name: ix_notifications_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_notifications_id ON public.notifications USING btree (id);


--
-- TOC entry 5990 (class 1259 OID 19189)
-- Name: ix_notifications_is_read; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_notifications_is_read ON public.notifications USING btree (is_read);


--
-- TOC entry 5991 (class 1259 OID 19187)
-- Name: ix_notifications_priority; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_notifications_priority ON public.notifications USING btree (priority);


--
-- TOC entry 5992 (class 1259 OID 19190)
-- Name: ix_notifications_type; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_notifications_type ON public.notifications USING btree (type);


--
-- TOC entry 5993 (class 1259 OID 19191)
-- Name: ix_notifications_user_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_notifications_user_id ON public.notifications USING btree (user_id);


--
-- TOC entry 6532 (class 1259 OID 21836)
-- Name: ix_order_items_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_order_items_id ON public.order_items USING btree (id);


--
-- TOC entry 6533 (class 1259 OID 21835)
-- Name: ix_order_items_order_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_order_items_order_id ON public.order_items USING btree (order_id);


--
-- TOC entry 6497 (class 1259 OID 21631)
-- Name: ix_orders_guest_email; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_orders_guest_email ON public.orders USING btree (guest_email);


--
-- TOC entry 6498 (class 1259 OID 21632)
-- Name: ix_orders_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_orders_id ON public.orders USING btree (id);


--
-- TOC entry 6499 (class 1259 OID 21634)
-- Name: ix_orders_order_number; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX ix_orders_order_number ON public.orders USING btree (order_number);


--
-- TOC entry 6500 (class 1259 OID 21630)
-- Name: ix_orders_status; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_orders_status ON public.orders USING btree (status);


--
-- TOC entry 6501 (class 1259 OID 21633)
-- Name: ix_orders_user_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_orders_user_id ON public.orders USING btree (user_id);


--
-- TOC entry 5837 (class 1259 OID 18582)
-- Name: ix_organizations_domain; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX ix_organizations_domain ON public.organizations USING btree (domain);


--
-- TOC entry 5838 (class 1259 OID 18583)
-- Name: ix_organizations_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_organizations_id ON public.organizations USING btree (id);


--
-- TOC entry 5839 (class 1259 OID 18584)
-- Name: ix_organizations_slug; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX ix_organizations_slug ON public.organizations USING btree (slug);


--
-- TOC entry 6213 (class 1259 OID 20099)
-- Name: ix_path_courses_course_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_path_courses_course_id ON public.path_courses USING btree (course_id);


--
-- TOC entry 6214 (class 1259 OID 20100)
-- Name: ix_path_courses_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_path_courses_id ON public.path_courses USING btree (id);


--
-- TOC entry 6215 (class 1259 OID 20097)
-- Name: ix_path_courses_order_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_path_courses_order_index ON public.path_courses USING btree (order_index);


--
-- TOC entry 6216 (class 1259 OID 20098)
-- Name: ix_path_courses_path_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_path_courses_path_id ON public.path_courses USING btree (path_id);


--
-- TOC entry 6473 (class 1259 OID 21474)
-- Name: ix_path_enrollments_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_path_enrollments_id ON public.path_enrollments USING btree (id);


--
-- TOC entry 6474 (class 1259 OID 21472)
-- Name: ix_path_enrollments_path_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_path_enrollments_path_id ON public.path_enrollments USING btree (path_id);


--
-- TOC entry 6475 (class 1259 OID 21473)
-- Name: ix_path_enrollments_student_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_path_enrollments_student_id ON public.path_enrollments USING btree (student_id);


--
-- TOC entry 6106 (class 1259 OID 19621)
-- Name: ix_payment_methods_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_payment_methods_id ON public.payment_methods USING btree (id);


--
-- TOC entry 6107 (class 1259 OID 19620)
-- Name: ix_payment_methods_user_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_payment_methods_user_id ON public.payment_methods USING btree (user_id);


--
-- TOC entry 6466 (class 1259 OID 21425)
-- Name: ix_peer_review_assignments_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_peer_review_assignments_id ON public.peer_review_assignments USING btree (id);


--
-- TOC entry 6521 (class 1259 OID 21764)
-- Name: ix_peer_reviews_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_peer_reviews_id ON public.peer_reviews USING btree (id);


--
-- TOC entry 5741 (class 1259 OID 18343)
-- Name: ix_permissions_action; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_permissions_action ON public.permissions USING btree (action);


--
-- TOC entry 5742 (class 1259 OID 18342)
-- Name: ix_permissions_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_permissions_id ON public.permissions USING btree (id);


--
-- TOC entry 5743 (class 1259 OID 18340)
-- Name: ix_permissions_name; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX ix_permissions_name ON public.permissions USING btree (name);


--
-- TOC entry 5744 (class 1259 OID 18341)
-- Name: ix_permissions_resource; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_permissions_resource ON public.permissions USING btree (resource);


--
-- TOC entry 6504 (class 1259 OID 21662)
-- Name: ix_plagiarism_checks_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_plagiarism_checks_id ON public.plagiarism_checks USING btree (id);


--
-- TOC entry 6505 (class 1259 OID 21661)
-- Name: ix_plagiarism_checks_submission_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_plagiarism_checks_submission_id ON public.plagiarism_checks USING btree (submission_id);


--
-- TOC entry 5791 (class 1259 OID 18466)
-- Name: ix_platform_analytics_date; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX ix_platform_analytics_date ON public.platform_analytics USING btree (date);


--
-- TOC entry 5792 (class 1259 OID 18467)
-- Name: ix_platform_analytics_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_platform_analytics_id ON public.platform_analytics USING btree (id);


--
-- TOC entry 6675 (class 1259 OID 22472)
-- Name: ix_polity_chapter_tasks_chapter_number; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX ix_polity_chapter_tasks_chapter_number ON public.polity_chapter_tasks USING btree (chapter_number);


--
-- TOC entry 6676 (class 1259 OID 22471)
-- Name: ix_polity_chapter_tasks_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_polity_chapter_tasks_id ON public.polity_chapter_tasks USING btree (id);


--
-- TOC entry 6518 (class 1259 OID 21746)
-- Name: ix_post_votes_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_post_votes_id ON public.post_votes USING btree (id);


--
-- TOC entry 6484 (class 1259 OID 21524)
-- Name: ix_project_milestones_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_project_milestones_id ON public.project_milestones USING btree (id);


--
-- TOC entry 6529 (class 1259 OID 21809)
-- Name: ix_project_submissions_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_project_submissions_id ON public.project_submissions USING btree (id);


--
-- TOC entry 6526 (class 1259 OID 21783)
-- Name: ix_project_team_members_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_project_team_members_id ON public.project_team_members USING btree (id);


--
-- TOC entry 6481 (class 1259 OID 21508)
-- Name: ix_project_teams_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_project_teams_id ON public.project_teams USING btree (id);


--
-- TOC entry 6203 (class 1259 OID 20051)
-- Name: ix_question_banks_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_question_banks_id ON public.question_banks USING btree (id);


--
-- TOC entry 6204 (class 1259 OID 20050)
-- Name: ix_question_banks_title; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_question_banks_title ON public.question_banks USING btree (title);


--
-- TOC entry 5950 (class 1259 OID 19009)
-- Name: ix_question_options_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_question_options_id ON public.question_options USING btree (id);


--
-- TOC entry 5878 (class 1259 OID 18709)
-- Name: ix_questions_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_questions_id ON public.questions USING btree (id);


--
-- TOC entry 6236 (class 1259 OID 20206)
-- Name: ix_quiz_attempt_analytics_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_quiz_attempt_analytics_id ON public.quiz_attempt_analytics USING btree (id);


--
-- TOC entry 5953 (class 1259 OID 19028)
-- Name: ix_quiz_attempts_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_quiz_attempts_id ON public.quiz_attempts USING btree (id);


--
-- TOC entry 5956 (class 1259 OID 19043)
-- Name: ix_quiz_feedback_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_quiz_feedback_id ON public.quiz_feedback USING btree (id);


--
-- TOC entry 6394 (class 1259 OID 21005)
-- Name: ix_quiz_question_pools_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_quiz_question_pools_id ON public.quiz_question_pools USING btree (id);


--
-- TOC entry 6636 (class 1259 OID 22338)
-- Name: ix_quiz_results_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_quiz_results_id ON public.quiz_results USING btree (id);


--
-- TOC entry 6637 (class 1259 OID 22337)
-- Name: ix_quiz_results_segment_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_quiz_results_segment_key ON public.quiz_results USING btree (segment_key);


--
-- TOC entry 6638 (class 1259 OID 22339)
-- Name: ix_quiz_results_student_email; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_quiz_results_student_email ON public.quiz_results USING btree (student_email);


--
-- TOC entry 5779 (class 1259 OID 18437)
-- Name: ix_quizzes_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_quizzes_id ON public.quizzes USING btree (id);


--
-- TOC entry 5780 (class 1259 OID 18436)
-- Name: ix_quizzes_title; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_quizzes_title ON public.quizzes USING btree (title);


--
-- TOC entry 6560 (class 1259 OID 22024)
-- Name: ix_ras_topic_progress_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_ras_topic_progress_id ON public.ras_topic_progress USING btree (id);


--
-- TOC entry 6561 (class 1259 OID 22026)
-- Name: ix_ras_topic_progress_topic_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_ras_topic_progress_topic_id ON public.ras_topic_progress USING btree (topic_id);


--
-- TOC entry 6562 (class 1259 OID 22025)
-- Name: ix_ras_topic_progress_user_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_ras_topic_progress_user_id ON public.ras_topic_progress USING btree (user_id);


--
-- TOC entry 6487 (class 1259 OID 21559)
-- Name: ix_realtime_chat_messages_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_realtime_chat_messages_id ON public.realtime_chat_messages USING btree (id);


--
-- TOC entry 6488 (class 1259 OID 21560)
-- Name: ix_realtime_chat_messages_sender_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_realtime_chat_messages_sender_id ON public.realtime_chat_messages USING btree (sender_id);


--
-- TOC entry 5787 (class 1259 OID 18457)
-- Name: ix_realtime_user_presence_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_realtime_user_presence_id ON public.realtime_user_presence USING btree (id);


--
-- TOC entry 5788 (class 1259 OID 18456)
-- Name: ix_realtime_user_presence_user_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX ix_realtime_user_presence_user_id ON public.realtime_user_presence USING btree (user_id);


--
-- TOC entry 6697 (class 1259 OID 22594)
-- Name: ix_retention_reviews_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_retention_reviews_id ON public.retention_reviews USING btree (id);


--
-- TOC entry 6274 (class 1259 OID 20413)
-- Name: ix_revenue_shares_course_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_revenue_shares_course_id ON public.revenue_shares USING btree (course_id);


--
-- TOC entry 6275 (class 1259 OID 20412)
-- Name: ix_revenue_shares_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_revenue_shares_id ON public.revenue_shares USING btree (id);


--
-- TOC entry 6276 (class 1259 OID 20414)
-- Name: ix_revenue_shares_instructor_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_revenue_shares_instructor_id ON public.revenue_shares USING btree (instructor_id);


--
-- TOC entry 6283 (class 1259 OID 20463)
-- Name: ix_revenue_transactions_course_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_revenue_transactions_course_id ON public.revenue_transactions USING btree (course_id);


--
-- TOC entry 6284 (class 1259 OID 20461)
-- Name: ix_revenue_transactions_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_revenue_transactions_id ON public.revenue_transactions USING btree (id);


--
-- TOC entry 6285 (class 1259 OID 20462)
-- Name: ix_revenue_transactions_instructor_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_revenue_transactions_instructor_id ON public.revenue_transactions USING btree (instructor_id);


--
-- TOC entry 6286 (class 1259 OID 20460)
-- Name: ix_revenue_transactions_student_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_revenue_transactions_student_id ON public.revenue_transactions USING btree (student_id);


--
-- TOC entry 6364 (class 1259 OID 20834)
-- Name: ix_review_helpful_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_review_helpful_id ON public.review_helpful USING btree (id);


--
-- TOC entry 6365 (class 1259 OID 20835)
-- Name: ix_review_helpful_review_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_review_helpful_review_id ON public.review_helpful USING btree (review_id);


--
-- TOC entry 6366 (class 1259 OID 20836)
-- Name: ix_review_helpful_user_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_review_helpful_user_id ON public.review_helpful USING btree (user_id);


--
-- TOC entry 6700 (class 1259 OID 22616)
-- Name: ix_revision_cycles_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_revision_cycles_id ON public.revision_cycles USING btree (id);


--
-- TOC entry 6701 (class 1259 OID 22615)
-- Name: ix_revision_cycles_topic_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_revision_cycles_topic_id ON public.revision_cycles USING btree (topic_id);


--
-- TOC entry 6702 (class 1259 OID 22614)
-- Name: ix_revision_cycles_user_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_revision_cycles_user_id ON public.revision_cycles USING btree (user_id);


--
-- TOC entry 5754 (class 1259 OID 18375)
-- Name: ix_rewards_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_rewards_id ON public.rewards USING btree (id);


--
-- TOC entry 5755 (class 1259 OID 18376)
-- Name: ix_rewards_name; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_rewards_name ON public.rewards USING btree (name);


--
-- TOC entry 5737 (class 1259 OID 18329)
-- Name: ix_roles_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_roles_id ON public.roles USING btree (id);


--
-- TOC entry 5738 (class 1259 OID 18328)
-- Name: ix_roles_name; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX ix_roles_name ON public.roles USING btree (name);


--
-- TOC entry 5968 (class 1259 OID 19105)
-- Name: ix_shadow_mode_sessions_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_shadow_mode_sessions_id ON public.shadow_mode_sessions USING btree (id);


--
-- TOC entry 5969 (class 1259 OID 19104)
-- Name: ix_shadow_mode_sessions_user_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_shadow_mode_sessions_user_id ON public.shadow_mode_sessions USING btree (user_id);


--
-- TOC entry 6005 (class 1259 OID 19238)
-- Name: ix_shopping_carts_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_shopping_carts_id ON public.shopping_carts USING btree (id);


--
-- TOC entry 6006 (class 1259 OID 19237)
-- Name: ix_shopping_carts_session_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX ix_shopping_carts_session_id ON public.shopping_carts USING btree (session_id);


--
-- TOC entry 6007 (class 1259 OID 19236)
-- Name: ix_shopping_carts_user_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_shopping_carts_user_id ON public.shopping_carts USING btree (user_id);


--
-- TOC entry 6043 (class 1259 OID 19382)
-- Name: ix_sso_audit_logs_created_at; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_sso_audit_logs_created_at ON public.sso_audit_logs USING btree (created_at);


--
-- TOC entry 6044 (class 1259 OID 19385)
-- Name: ix_sso_audit_logs_event_type; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_sso_audit_logs_event_type ON public.sso_audit_logs USING btree (event_type);


--
-- TOC entry 6045 (class 1259 OID 19383)
-- Name: ix_sso_audit_logs_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_sso_audit_logs_id ON public.sso_audit_logs USING btree (id);


--
-- TOC entry 6046 (class 1259 OID 19381)
-- Name: ix_sso_audit_logs_organization_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_sso_audit_logs_organization_id ON public.sso_audit_logs USING btree (organization_id);


--
-- TOC entry 6047 (class 1259 OID 19384)
-- Name: ix_sso_audit_logs_user_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_sso_audit_logs_user_id ON public.sso_audit_logs USING btree (user_id);


--
-- TOC entry 5881 (class 1259 OID 18725)
-- Name: ix_sso_configs_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_sso_configs_id ON public.sso_configs USING btree (id);


--
-- TOC entry 6037 (class 1259 OID 19359)
-- Name: ix_sso_sessions_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_sso_sessions_id ON public.sso_sessions USING btree (id);


--
-- TOC entry 6038 (class 1259 OID 19358)
-- Name: ix_sso_sessions_provider_session_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_sso_sessions_provider_session_id ON public.sso_sessions USING btree (provider_session_id);


--
-- TOC entry 6039 (class 1259 OID 19360)
-- Name: ix_sso_sessions_session_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX ix_sso_sessions_session_id ON public.sso_sessions USING btree (session_id);


--
-- TOC entry 6040 (class 1259 OID 19357)
-- Name: ix_sso_sessions_user_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_sso_sessions_user_id ON public.sso_sessions USING btree (user_id);


--
-- TOC entry 6444 (class 1259 OID 21277)
-- Name: ix_student_activities_session_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_student_activities_session_id ON public.student_activities USING btree (session_id);


--
-- TOC entry 6445 (class 1259 OID 21278)
-- Name: ix_student_activities_student_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_student_activities_student_id ON public.student_activities USING btree (student_id);


--
-- TOC entry 6446 (class 1259 OID 21279)
-- Name: ix_student_activities_timestamp; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_student_activities_timestamp ON public.student_activities USING btree ("timestamp");


--
-- TOC entry 6266 (class 1259 OID 20370)
-- Name: ix_student_analytics_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_student_analytics_id ON public.student_analytics USING btree (id);


--
-- TOC entry 6233 (class 1259 OID 20190)
-- Name: ix_student_answers_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_student_answers_id ON public.student_answers USING btree (id);


--
-- TOC entry 6679 (class 1259 OID 22493)
-- Name: ix_student_nudge_history_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_student_nudge_history_id ON public.student_nudge_history USING btree (id);


--
-- TOC entry 6595 (class 1259 OID 22201)
-- Name: ix_student_nudge_workflows_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_student_nudge_workflows_id ON public.student_nudge_workflows USING btree (id);


--
-- TOC entry 5972 (class 1259 OID 19120)
-- Name: ix_study_groups_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_study_groups_id ON public.study_groups USING btree (id);


--
-- TOC entry 5973 (class 1259 OID 19121)
-- Name: ix_study_groups_name; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_study_groups_name ON public.study_groups USING btree (name);


--
-- TOC entry 5783 (class 1259 OID 18448)
-- Name: ix_study_rooms_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_study_rooms_id ON public.study_rooms USING btree (id);


--
-- TOC entry 5784 (class 1259 OID 18447)
-- Name: ix_study_rooms_name; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_study_rooms_name ON public.study_rooms USING btree (name);


--
-- TOC entry 6569 (class 1259 OID 22061)
-- Name: ix_study_sessions_topic_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_study_sessions_topic_id ON public.study_sessions USING btree (topic_id);


--
-- TOC entry 6570 (class 1259 OID 22060)
-- Name: ix_study_sessions_user_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_study_sessions_user_id ON public.study_sessions USING btree (user_id);


--
-- TOC entry 6382 (class 1259 OID 20924)
-- Name: ix_submissions_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_submissions_id ON public.submissions USING btree (id);


--
-- TOC entry 5825 (class 1259 OID 18544)
-- Name: ix_subscription_coupons_code; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX ix_subscription_coupons_code ON public.subscription_coupons USING btree (code);


--
-- TOC entry 5826 (class 1259 OID 18545)
-- Name: ix_subscription_coupons_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_subscription_coupons_id ON public.subscription_coupons USING btree (id);


--
-- TOC entry 6289 (class 1259 OID 20485)
-- Name: ix_subscription_invoices_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_subscription_invoices_id ON public.subscription_invoices USING btree (id);


--
-- TOC entry 6290 (class 1259 OID 20484)
-- Name: ix_subscription_invoices_subscription_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_subscription_invoices_subscription_id ON public.subscription_invoices USING btree (subscription_id);


--
-- TOC entry 5819 (class 1259 OID 18533)
-- Name: ix_subscription_plans_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_subscription_plans_id ON public.subscription_plans USING btree (id);


--
-- TOC entry 5820 (class 1259 OID 18532)
-- Name: ix_subscription_plans_slug; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX ix_subscription_plans_slug ON public.subscription_plans USING btree (slug);


--
-- TOC entry 5763 (class 1259 OID 18399)
-- Name: ix_tags_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_tags_id ON public.tags USING btree (id);


--
-- TOC entry 5764 (class 1259 OID 18400)
-- Name: ix_tags_name; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX ix_tags_name ON public.tags USING btree (name);


--
-- TOC entry 5765 (class 1259 OID 18398)
-- Name: ix_tags_slug; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX ix_tags_slug ON public.tags USING btree (slug);


--
-- TOC entry 5892 (class 1259 OID 18777)
-- Name: ix_tasks_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_tasks_id ON public.tasks USING btree (id);


--
-- TOC entry 5893 (class 1259 OID 18775)
-- Name: ix_tasks_scheduled_date; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_tasks_scheduled_date ON public.tasks USING btree (scheduled_date);


--
-- TOC entry 5894 (class 1259 OID 18776)
-- Name: ix_tasks_title; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_tasks_title ON public.tasks USING btree (title);


--
-- TOC entry 5895 (class 1259 OID 18778)
-- Name: ix_tasks_user_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_tasks_user_id ON public.tasks USING btree (user_id);


--
-- TOC entry 6541 (class 1259 OID 21891)
-- Name: ix_tax_calculations_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_tax_calculations_id ON public.tax_calculations USING btree (id);


--
-- TOC entry 6542 (class 1259 OID 21890)
-- Name: ix_tax_calculations_order_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_tax_calculations_order_id ON public.tax_calculations USING btree (order_id);


--
-- TOC entry 6543 (class 1259 OID 21892)
-- Name: ix_tax_calculations_payment_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_tax_calculations_payment_id ON public.tax_calculations USING btree (payment_id);


--
-- TOC entry 6544 (class 1259 OID 21889)
-- Name: ix_tax_calculations_subscription_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_tax_calculations_subscription_id ON public.tax_calculations USING btree (subscription_id);


--
-- TOC entry 6545 (class 1259 OID 21893)
-- Name: ix_tax_calculations_user_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_tax_calculations_user_id ON public.tax_calculations USING btree (user_id);


--
-- TOC entry 6110 (class 1259 OID 19644)
-- Name: ix_tax_exemptions_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_tax_exemptions_id ON public.tax_exemptions USING btree (id);


--
-- TOC entry 6111 (class 1259 OID 19643)
-- Name: ix_tax_exemptions_organization_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_tax_exemptions_organization_id ON public.tax_exemptions USING btree (organization_id);


--
-- TOC entry 6112 (class 1259 OID 19642)
-- Name: ix_tax_exemptions_user_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_tax_exemptions_user_id ON public.tax_exemptions USING btree (user_id);


--
-- TOC entry 5852 (class 1259 OID 18621)
-- Name: ix_tax_rates_country_code; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_tax_rates_country_code ON public.tax_rates USING btree (country_code);


--
-- TOC entry 5853 (class 1259 OID 18620)
-- Name: ix_tax_rates_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_tax_rates_id ON public.tax_rates USING btree (id);


--
-- TOC entry 5854 (class 1259 OID 18622)
-- Name: ix_tax_rates_state_code; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_tax_rates_state_code ON public.tax_rates USING btree (state_code);


--
-- TOC entry 6722 (class 1259 OID 28404)
-- Name: ix_thread_votes_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_thread_votes_id ON public.thread_votes USING btree (id);


--
-- TOC entry 5799 (class 1259 OID 18493)
-- Name: ix_translations_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_translations_id ON public.translations USING btree (id);


--
-- TOC entry 5800 (class 1259 OID 18491)
-- Name: ix_translations_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_translations_key ON public.translations USING btree (key);


--
-- TOC entry 5801 (class 1259 OID 18492)
-- Name: ix_translations_language_code; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_translations_language_code ON public.translations USING btree (language_code);


--
-- TOC entry 5802 (class 1259 OID 18490)
-- Name: ix_translations_namespace; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_translations_namespace ON public.translations USING btree (namespace);


--
-- TOC entry 6050 (class 1259 OID 19398)
-- Name: ix_two_factor_auth_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_two_factor_auth_id ON public.two_factor_auth USING btree (id);


--
-- TOC entry 6051 (class 1259 OID 19399)
-- Name: ix_two_factor_auth_user_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX ix_two_factor_auth_user_id ON public.two_factor_auth USING btree (user_id);


--
-- TOC entry 6317 (class 1259 OID 20597)
-- Name: ix_two_factor_backup_codes_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_two_factor_backup_codes_id ON public.two_factor_backup_codes USING btree (id);


--
-- TOC entry 6318 (class 1259 OID 20596)
-- Name: ix_two_factor_backup_codes_two_factor_auth_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_two_factor_backup_codes_two_factor_auth_id ON public.two_factor_backup_codes USING btree (two_factor_auth_id);


--
-- TOC entry 6319 (class 1259 OID 20595)
-- Name: ix_two_factor_backup_codes_user_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_two_factor_backup_codes_user_id ON public.two_factor_backup_codes USING btree (user_id);


--
-- TOC entry 6718 (class 1259 OID 28150)
-- Name: ix_universal_progress_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_universal_progress_id ON public.universal_progress USING btree (id);


--
-- TOC entry 6719 (class 1259 OID 28151)
-- Name: ix_universal_progress_user_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX ix_universal_progress_user_id ON public.universal_progress USING btree (user_id);


--
-- TOC entry 6054 (class 1259 OID 19419)
-- Name: ix_user_achievements_achievement_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_user_achievements_achievement_id ON public.user_achievements USING btree (achievement_id);


--
-- TOC entry 6055 (class 1259 OID 19420)
-- Name: ix_user_achievements_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_user_achievements_id ON public.user_achievements USING btree (id);


--
-- TOC entry 6056 (class 1259 OID 19418)
-- Name: ix_user_achievements_user_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_user_achievements_user_id ON public.user_achievements USING btree (user_id);


--
-- TOC entry 5976 (class 1259 OID 19136)
-- Name: ix_user_activities_created_at; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_user_activities_created_at ON public.user_activities USING btree (created_at);


--
-- TOC entry 5977 (class 1259 OID 19137)
-- Name: ix_user_activities_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_user_activities_id ON public.user_activities USING btree (id);


--
-- TOC entry 6727 (class 1259 OID 28422)
-- Name: ix_user_activity_sessions_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_user_activity_sessions_id ON public.user_activity_sessions USING btree (id);


--
-- TOC entry 6728 (class 1259 OID 28423)
-- Name: ix_user_activity_sessions_user_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_user_activity_sessions_user_id ON public.user_activity_sessions USING btree (user_id);


--
-- TOC entry 6059 (class 1259 OID 19443)
-- Name: ix_user_challenges_challenge_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_user_challenges_challenge_id ON public.user_challenges USING btree (challenge_id);


--
-- TOC entry 6060 (class 1259 OID 19441)
-- Name: ix_user_challenges_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_user_challenges_id ON public.user_challenges USING btree (id);


--
-- TOC entry 6061 (class 1259 OID 19442)
-- Name: ix_user_challenges_user_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_user_challenges_user_id ON public.user_challenges USING btree (user_id);


--
-- TOC entry 5996 (class 1259 OID 19205)
-- Name: ix_user_email_preferences_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_user_email_preferences_id ON public.user_email_preferences USING btree (id);


--
-- TOC entry 5997 (class 1259 OID 19204)
-- Name: ix_user_email_preferences_user_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX ix_user_email_preferences_user_id ON public.user_email_preferences USING btree (user_id);


--
-- TOC entry 5815 (class 1259 OID 18519)
-- Name: ix_user_language_preferences_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_user_language_preferences_id ON public.user_language_preferences USING btree (id);


--
-- TOC entry 5816 (class 1259 OID 18518)
-- Name: ix_user_language_preferences_user_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX ix_user_language_preferences_user_id ON public.user_language_preferences USING btree (user_id);


--
-- TOC entry 6155 (class 1259 OID 19800)
-- Name: ix_user_permissions_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_user_permissions_id ON public.user_permissions USING btree (id);


--
-- TOC entry 6156 (class 1259 OID 19801)
-- Name: ix_user_permissions_user_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_user_permissions_user_id ON public.user_permissions USING btree (user_id);


--
-- TOC entry 5980 (class 1259 OID 19154)
-- Name: ix_user_preferences_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_user_preferences_id ON public.user_preferences USING btree (id);


--
-- TOC entry 5913 (class 1259 OID 18858)
-- Name: ix_user_rewards_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_user_rewards_id ON public.user_rewards USING btree (id);


--
-- TOC entry 6159 (class 1259 OID 19820)
-- Name: ix_user_sessions_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_user_sessions_id ON public.user_sessions USING btree (id);


--
-- TOC entry 6160 (class 1259 OID 19819)
-- Name: ix_user_sessions_session_token; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX ix_user_sessions_session_token ON public.user_sessions USING btree (session_token);


--
-- TOC entry 6161 (class 1259 OID 19818)
-- Name: ix_user_sessions_user_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_user_sessions_user_id ON public.user_sessions USING btree (user_id);


--
-- TOC entry 6018 (class 1259 OID 28134)
-- Name: ix_user_subscriptions_cashfree_subscription_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX ix_user_subscriptions_cashfree_subscription_id ON public.user_subscriptions USING btree (cashfree_subscription_id);


--
-- TOC entry 6019 (class 1259 OID 19296)
-- Name: ix_user_subscriptions_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_user_subscriptions_id ON public.user_subscriptions USING btree (id);


--
-- TOC entry 6020 (class 1259 OID 19294)
-- Name: ix_user_subscriptions_plan_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_user_subscriptions_plan_id ON public.user_subscriptions USING btree (plan_id);


--
-- TOC entry 6021 (class 1259 OID 19293)
-- Name: ix_user_subscriptions_user_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_user_subscriptions_user_id ON public.user_subscriptions USING btree (user_id);


--
-- TOC entry 6655 (class 1259 OID 22401)
-- Name: ix_user_topic_logs_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_user_topic_logs_id ON public.user_topic_logs USING btree (id);


--
-- TOC entry 6656 (class 1259 OID 22400)
-- Name: ix_user_topic_logs_topic_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_user_topic_logs_topic_id ON public.user_topic_logs USING btree (topic_id);


--
-- TOC entry 6657 (class 1259 OID 22399)
-- Name: ix_user_topic_logs_user_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_user_topic_logs_user_id ON public.user_topic_logs USING btree (user_id);


--
-- TOC entry 5863 (class 1259 OID 18671)
-- Name: ix_users_email; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX ix_users_email ON public.users USING btree (email);


--
-- TOC entry 5864 (class 1259 OID 18673)
-- Name: ix_users_full_name; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_users_full_name ON public.users USING btree (full_name);


--
-- TOC entry 5865 (class 1259 OID 18672)
-- Name: ix_users_group_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_users_group_id ON public.users USING btree (group_id);


--
-- TOC entry 5866 (class 1259 OID 18670)
-- Name: ix_users_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_users_id ON public.users USING btree (id);


--
-- TOC entry 5867 (class 1259 OID 18674)
-- Name: ix_users_organization_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_users_organization_id ON public.users USING btree (organization_id);


--
-- TOC entry 5868 (class 1259 OID 18667)
-- Name: ix_users_role; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_users_role ON public.users USING btree (role);


--
-- TOC entry 5869 (class 1259 OID 18669)
-- Name: ix_users_sso_external_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_users_sso_external_id ON public.users USING btree (sso_external_id);


--
-- TOC entry 5870 (class 1259 OID 18668)
-- Name: ix_users_username; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX ix_users_username ON public.users USING btree (username);


--
-- TOC entry 6705 (class 1259 OID 22642)
-- Name: ix_voice_notes_field_activity_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_voice_notes_field_activity_id ON public.voice_notes USING btree (field_activity_id);


--
-- TOC entry 6706 (class 1259 OID 22645)
-- Name: ix_voice_notes_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_voice_notes_id ON public.voice_notes USING btree (id);


--
-- TOC entry 6707 (class 1259 OID 22644)
-- Name: ix_voice_notes_lead_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_voice_notes_lead_id ON public.voice_notes USING btree (lead_id);


--
-- TOC entry 6708 (class 1259 OID 22643)
-- Name: ix_voice_notes_user_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_voice_notes_user_id ON public.voice_notes USING btree (user_id);


--
-- TOC entry 6449 (class 1259 OID 21307)
-- Name: ix_workflow_executions_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_workflow_executions_id ON public.workflow_executions USING btree (id);


--
-- TOC entry 6450 (class 1259 OID 21309)
-- Name: ix_workflow_executions_lead_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_workflow_executions_lead_id ON public.workflow_executions USING btree (lead_id);


--
-- TOC entry 6451 (class 1259 OID 21306)
-- Name: ix_workflow_executions_status; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_workflow_executions_status ON public.workflow_executions USING btree (status);


--
-- TOC entry 6452 (class 1259 OID 21308)
-- Name: ix_workflow_executions_workflow_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_workflow_executions_workflow_id ON public.workflow_executions USING btree (workflow_id);


--
-- TOC entry 6342 (class 1259 OID 20701)
-- Name: ix_workflow_steps_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_workflow_steps_id ON public.workflow_steps USING btree (id);


--
-- TOC entry 6343 (class 1259 OID 20702)
-- Name: ix_workflow_steps_workflow_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_workflow_steps_workflow_id ON public.workflow_steps USING btree (workflow_id);


--
-- TOC entry 6751 (class 2606 OID 18816)
-- Name: activity_logs activity_logs_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.activity_logs
    ADD CONSTRAINT activity_logs_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- TOC entry 6797 (class 2606 OID 19472)
-- Name: admin_logs admin_logs_admin_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.admin_logs
    ADD CONSTRAINT admin_logs_admin_id_fkey FOREIGN KEY (admin_id) REFERENCES public.users(id);


--
-- TOC entry 6884 (class 2606 OID 20496)
-- Name: affiliate_clicks affiliate_clicks_affiliate_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.affiliate_clicks
    ADD CONSTRAINT affiliate_clicks_affiliate_id_fkey FOREIGN KEY (affiliate_id) REFERENCES public.affiliate_partners(id);


--
-- TOC entry 6957 (class 2606 OID 21242)
-- Name: affiliate_commissions affiliate_commissions_affiliate_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.affiliate_commissions
    ADD CONSTRAINT affiliate_commissions_affiliate_id_fkey FOREIGN KEY (affiliate_id) REFERENCES public.affiliate_partners(id);


--
-- TOC entry 6958 (class 2606 OID 21252)
-- Name: affiliate_commissions affiliate_commissions_payout_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.affiliate_commissions
    ADD CONSTRAINT affiliate_commissions_payout_id_fkey FOREIGN KEY (payout_id) REFERENCES public.affiliate_payouts(id);


--
-- TOC entry 6959 (class 2606 OID 21247)
-- Name: affiliate_commissions affiliate_commissions_referral_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.affiliate_commissions
    ADD CONSTRAINT affiliate_commissions_referral_id_fkey FOREIGN KEY (referral_id) REFERENCES public.affiliate_referrals(id);


--
-- TOC entry 6785 (class 2606 OID 19309)
-- Name: affiliate_partners affiliate_partners_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.affiliate_partners
    ADD CONSTRAINT affiliate_partners_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- TOC entry 6887 (class 2606 OID 20538)
-- Name: affiliate_payouts affiliate_payouts_affiliate_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.affiliate_payouts
    ADD CONSTRAINT affiliate_payouts_affiliate_id_fkey FOREIGN KEY (affiliate_id) REFERENCES public.affiliate_partners(id);


--
-- TOC entry 6885 (class 2606 OID 20514)
-- Name: affiliate_referrals affiliate_referrals_affiliate_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.affiliate_referrals
    ADD CONSTRAINT affiliate_referrals_affiliate_id_fkey FOREIGN KEY (affiliate_id) REFERENCES public.affiliate_partners(id);


--
-- TOC entry 6886 (class 2606 OID 20519)
-- Name: affiliate_referrals affiliate_referrals_referred_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.affiliate_referrals
    ADD CONSTRAINT affiliate_referrals_referred_user_id_fkey FOREIGN KEY (referred_user_id) REFERENCES public.users(id);


--
-- TOC entry 6798 (class 2606 OID 19490)
-- Name: ai_avatars ai_avatars_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ai_avatars
    ADD CONSTRAINT ai_avatars_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- TOC entry 7052 (class 2606 OID 22362)
-- Name: ai_coaching_sessions ai_coaching_sessions_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ai_coaching_sessions
    ADD CONSTRAINT ai_coaching_sessions_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- TOC entry 6776 (class 2606 OID 19166)
-- Name: ai_conversations ai_conversations_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ai_conversations
    ADD CONSTRAINT ai_conversations_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- TOC entry 6815 (class 2606 OID 19727)
-- Name: ai_debug_logs ai_debug_logs_student_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ai_debug_logs
    ADD CONSTRAINT ai_debug_logs_student_id_fkey FOREIGN KEY (student_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- TOC entry 6816 (class 2606 OID 19741)
-- Name: ai_debug_sessions ai_debug_sessions_student_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ai_debug_sessions
    ADD CONSTRAINT ai_debug_sessions_student_id_fkey FOREIGN KEY (student_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- TOC entry 7078 (class 2606 OID 28177)
-- Name: ai_evaluation_logs ai_evaluation_logs_submission_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ai_evaluation_logs
    ADD CONSTRAINT ai_evaluation_logs_submission_id_fkey FOREIGN KEY (submission_id) REFERENCES public.student_submissions(id);


--
-- TOC entry 6888 (class 2606 OID 20555)
-- Name: ai_generated_quizzes ai_generated_quizzes_course_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ai_generated_quizzes
    ADD CONSTRAINT ai_generated_quizzes_course_id_fkey FOREIGN KEY (course_id) REFERENCES public.courses(id) ON DELETE CASCADE;


--
-- TOC entry 6889 (class 2606 OID 20570)
-- Name: ai_generated_quizzes ai_generated_quizzes_created_by_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ai_generated_quizzes
    ADD CONSTRAINT ai_generated_quizzes_created_by_fkey FOREIGN KEY (created_by) REFERENCES public.users(id);


--
-- TOC entry 6890 (class 2606 OID 20560)
-- Name: ai_generated_quizzes ai_generated_quizzes_lesson_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ai_generated_quizzes
    ADD CONSTRAINT ai_generated_quizzes_lesson_id_fkey FOREIGN KEY (lesson_id) REFERENCES public.lessons(id) ON DELETE CASCADE;


--
-- TOC entry 6891 (class 2606 OID 20565)
-- Name: ai_generated_quizzes ai_generated_quizzes_quiz_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ai_generated_quizzes
    ADD CONSTRAINT ai_generated_quizzes_quiz_id_fkey FOREIGN KEY (quiz_id) REFERENCES public.quizzes(id) ON DELETE SET NULL;


--
-- TOC entry 6944 (class 2606 OID 21117)
-- Name: ai_grading_results ai_grading_results_student_answer_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ai_grading_results
    ADD CONSTRAINT ai_grading_results_student_answer_id_fkey FOREIGN KEY (student_answer_id) REFERENCES public.student_answers(id);


--
-- TOC entry 7051 (class 2606 OID 22322)
-- Name: ai_planning_sessions ai_planning_sessions_generated_by_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ai_planning_sessions
    ADD CONSTRAINT ai_planning_sessions_generated_by_fkey FOREIGN KEY (generated_by) REFERENCES public.users(id);


--
-- TOC entry 6786 (class 2606 OID 19327)
-- Name: ai_usage_logs ai_usage_logs_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ai_usage_logs
    ADD CONSTRAINT ai_usage_logs_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- TOC entry 6874 (class 2606 OID 20386)
-- Name: analytics_events analytics_events_course_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.analytics_events
    ADD CONSTRAINT analytics_events_course_id_fkey FOREIGN KEY (course_id) REFERENCES public.courses(id) ON DELETE SET NULL;


--
-- TOC entry 6875 (class 2606 OID 20381)
-- Name: analytics_events analytics_events_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.analytics_events
    ADD CONSTRAINT analytics_events_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE SET NULL;


--
-- TOC entry 6929 (class 2606 OID 20961)
-- Name: announcement_reads announcement_reads_announcement_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.announcement_reads
    ADD CONSTRAINT announcement_reads_announcement_id_fkey FOREIGN KEY (announcement_id) REFERENCES public.course_announcements(id);


--
-- TOC entry 6930 (class 2606 OID 20966)
-- Name: announcement_reads announcement_reads_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.announcement_reads
    ADD CONSTRAINT announcement_reads_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- TOC entry 6769 (class 2606 OID 19054)
-- Name: assessment_rubrics assessment_rubrics_question_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.assessment_rubrics
    ADD CONSTRAINT assessment_rubrics_question_id_fkey FOREIGN KEY (question_id) REFERENCES public.questions(id);


--
-- TOC entry 6799 (class 2606 OID 19507)
-- Name: assets assets_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.assets
    ADD CONSTRAINT assets_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- TOC entry 6829 (class 2606 OID 19934)
-- Name: assignments assignments_course_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.assignments
    ADD CONSTRAINT assignments_course_id_fkey FOREIGN KEY (course_id) REFERENCES public.courses(id);


--
-- TOC entry 6830 (class 2606 OID 19939)
-- Name: assignments assignments_lesson_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.assignments
    ADD CONSTRAINT assignments_lesson_id_fkey FOREIGN KEY (lesson_id) REFERENCES public.lessons(id);


--
-- TOC entry 7049 (class 2606 OID 22276)
-- Name: attendance attendance_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.attendance
    ADD CONSTRAINT attendance_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- TOC entry 6903 (class 2606 OID 20711)
-- Name: automation_analytics automation_analytics_workflow_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.automation_analytics
    ADD CONSTRAINT automation_analytics_workflow_id_fkey FOREIGN KEY (workflow_id) REFERENCES public.marketing_workflows(id);


--
-- TOC entry 6759 (class 2606 OID 18913)
-- Name: bank_questions bank_questions_instructor_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.bank_questions
    ADD CONSTRAINT bank_questions_instructor_id_fkey FOREIGN KEY (instructor_id) REFERENCES public.users(id);


--
-- TOC entry 7036 (class 2606 OID 22037)
-- Name: batch1_test_results batch1_test_results_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.batch1_test_results
    ADD CONSTRAINT batch1_test_results_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- TOC entry 6848 (class 2606 OID 20130)
-- Name: bundle_enrollments bundle_enrollments_bundle_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.bundle_enrollments
    ADD CONSTRAINT bundle_enrollments_bundle_id_fkey FOREIGN KEY (bundle_id) REFERENCES public.course_bundles(id);


--
-- TOC entry 6849 (class 2606 OID 20125)
-- Name: bundle_enrollments bundle_enrollments_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.bundle_enrollments
    ADD CONSTRAINT bundle_enrollments_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- TOC entry 7057 (class 2606 OID 22453)
-- Name: call_logs call_logs_lead_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.call_logs
    ADD CONSTRAINT call_logs_lead_id_fkey FOREIGN KEY (lead_id) REFERENCES public.leads(id);


--
-- TOC entry 7058 (class 2606 OID 22448)
-- Name: call_logs call_logs_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.call_logs
    ADD CONSTRAINT call_logs_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- TOC entry 6953 (class 2606 OID 21220)
-- Name: cart_items cart_items_bundle_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cart_items
    ADD CONSTRAINT cart_items_bundle_id_fkey FOREIGN KEY (bundle_id) REFERENCES public.course_bundles(id) ON DELETE CASCADE;


--
-- TOC entry 6954 (class 2606 OID 21210)
-- Name: cart_items cart_items_cart_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cart_items
    ADD CONSTRAINT cart_items_cart_id_fkey FOREIGN KEY (cart_id) REFERENCES public.shopping_carts(id) ON DELETE CASCADE;


--
-- TOC entry 6955 (class 2606 OID 21225)
-- Name: cart_items cart_items_coupon_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cart_items
    ADD CONSTRAINT cart_items_coupon_id_fkey FOREIGN KEY (coupon_id) REFERENCES public.coupons(id) ON DELETE SET NULL;


--
-- TOC entry 6956 (class 2606 OID 21215)
-- Name: cart_items cart_items_course_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cart_items
    ADD CONSTRAINT cart_items_course_id_fkey FOREIGN KEY (course_id) REFERENCES public.courses(id) ON DELETE CASCADE;


--
-- TOC entry 6761 (class 2606 OID 18945)
-- Name: certificate_templates certificate_templates_creator_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.certificate_templates
    ADD CONSTRAINT certificate_templates_creator_id_fkey FOREIGN KEY (creator_id) REFERENCES public.users(id);


--
-- TOC entry 6920 (class 2606 OID 20886)
-- Name: certificates certificates_course_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.certificates
    ADD CONSTRAINT certificates_course_id_fkey FOREIGN KEY (course_id) REFERENCES public.courses(id);


--
-- TOC entry 6921 (class 2606 OID 20891)
-- Name: certificates certificates_enrollment_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.certificates
    ADD CONSTRAINT certificates_enrollment_id_fkey FOREIGN KEY (enrollment_id) REFERENCES public.enrollments(id);


--
-- TOC entry 6922 (class 2606 OID 20896)
-- Name: certificates certificates_template_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.certificates
    ADD CONSTRAINT certificates_template_id_fkey FOREIGN KEY (template_id) REFERENCES public.certificate_templates(id);


--
-- TOC entry 6923 (class 2606 OID 20881)
-- Name: certificates certificates_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.certificates
    ADD CONSTRAINT certificates_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- TOC entry 6745 (class 2606 OID 18736)
-- Name: challenges challenges_reward_achievement_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.challenges
    ADD CONSTRAINT challenges_reward_achievement_id_fkey FOREIGN KEY (reward_achievement_id) REFERENCES public.achievements(id);


--
-- TOC entry 6995 (class 2606 OID 21570)
-- Name: chat_feedback chat_feedback_message_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.chat_feedback
    ADD CONSTRAINT chat_feedback_message_id_fkey FOREIGN KEY (message_id) REFERENCES public.chatbot_messages(id) ON DELETE CASCADE;


--
-- TOC entry 6996 (class 2606 OID 21575)
-- Name: chat_feedback chat_feedback_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.chat_feedback
    ADD CONSTRAINT chat_feedback_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- TOC entry 6861 (class 2606 OID 20256)
-- Name: chat_sessions chat_sessions_course_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.chat_sessions
    ADD CONSTRAINT chat_sessions_course_id_fkey FOREIGN KEY (course_id) REFERENCES public.courses(id) ON DELETE SET NULL;


--
-- TOC entry 6862 (class 2606 OID 20251)
-- Name: chat_sessions chat_sessions_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.chat_sessions
    ADD CONSTRAINT chat_sessions_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- TOC entry 6952 (class 2606 OID 21196)
-- Name: chatbot_messages chatbot_messages_session_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.chatbot_messages
    ADD CONSTRAINT chatbot_messages_session_id_fkey FOREIGN KEY (session_id) REFERENCES public.chat_sessions(id) ON DELETE CASCADE;


--
-- TOC entry 6796 (class 2606 OID 19454)
-- Name: coin_transactions coin_transactions_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.coin_transactions
    ADD CONSTRAINT coin_transactions_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- TOC entry 6949 (class 2606 OID 21171)
-- Name: collaborative_projects collaborative_projects_course_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.collaborative_projects
    ADD CONSTRAINT collaborative_projects_course_id_fkey FOREIGN KEY (course_id) REFERENCES public.courses(id) ON DELETE CASCADE;


--
-- TOC entry 6950 (class 2606 OID 21181)
-- Name: collaborative_projects collaborative_projects_created_by_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.collaborative_projects
    ADD CONSTRAINT collaborative_projects_created_by_fkey FOREIGN KEY (created_by) REFERENCES public.users(id) ON DELETE SET NULL;


--
-- TOC entry 6951 (class 2606 OID 21176)
-- Name: collaborative_projects collaborative_projects_group_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.collaborative_projects
    ADD CONSTRAINT collaborative_projects_group_id_fkey FOREIGN KEY (group_id) REFERENCES public.learning_groups(id) ON DELETE CASCADE;


--
-- TOC entry 6821 (class 2606 OID 19831)
-- Name: communication_templates communication_templates_created_by_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.communication_templates
    ADD CONSTRAINT communication_templates_created_by_fkey FOREIGN KEY (created_by) REFERENCES public.users(id);


--
-- TOC entry 7038 (class 2606 OID 22081)
-- Name: concept_dependencies concept_dependencies_child_concept_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.concept_dependencies
    ADD CONSTRAINT concept_dependencies_child_concept_id_fkey FOREIGN KEY (child_concept_id) REFERENCES public.concepts(id);


--
-- TOC entry 7039 (class 2606 OID 22086)
-- Name: concept_dependencies concept_dependencies_parent_concept_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.concept_dependencies
    ADD CONSTRAINT concept_dependencies_parent_concept_id_fkey FOREIGN KEY (parent_concept_id) REFERENCES public.concepts(id);


--
-- TOC entry 6997 (class 2606 OID 21589)
-- Name: coupon_usages coupon_usages_coupon_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.coupon_usages
    ADD CONSTRAINT coupon_usages_coupon_id_fkey FOREIGN KEY (coupon_id) REFERENCES public.coupons(id) ON DELETE CASCADE;


--
-- TOC entry 6998 (class 2606 OID 21599)
-- Name: coupon_usages coupon_usages_payment_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.coupon_usages
    ADD CONSTRAINT coupon_usages_payment_id_fkey FOREIGN KEY (payment_id) REFERENCES public.course_payments(id) ON DELETE SET NULL;


--
-- TOC entry 6999 (class 2606 OID 21594)
-- Name: coupon_usages coupon_usages_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.coupon_usages
    ADD CONSTRAINT coupon_usages_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- TOC entry 6867 (class 2606 OID 20320)
-- Name: coupons coupons_category_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.coupons
    ADD CONSTRAINT coupons_category_id_fkey FOREIGN KEY (category_id) REFERENCES public.categories(id) ON DELETE SET NULL;


--
-- TOC entry 6868 (class 2606 OID 20315)
-- Name: coupons coupons_course_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.coupons
    ADD CONSTRAINT coupons_course_id_fkey FOREIGN KEY (course_id) REFERENCES public.courses(id) ON DELETE CASCADE;


--
-- TOC entry 6869 (class 2606 OID 20325)
-- Name: coupons coupons_instructor_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.coupons
    ADD CONSTRAINT coupons_instructor_id_fkey FOREIGN KEY (instructor_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- TOC entry 6832 (class 2606 OID 19972)
-- Name: course_announcements course_announcements_course_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.course_announcements
    ADD CONSTRAINT course_announcements_course_id_fkey FOREIGN KEY (course_id) REFERENCES public.courses(id);


--
-- TOC entry 6833 (class 2606 OID 19977)
-- Name: course_announcements course_announcements_instructor_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.course_announcements
    ADD CONSTRAINT course_announcements_instructor_id_fkey FOREIGN KEY (instructor_id) REFERENCES public.users(id);


--
-- TOC entry 6837 (class 2606 OID 20019)
-- Name: course_bookmarks course_bookmarks_course_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.course_bookmarks
    ADD CONSTRAINT course_bookmarks_course_id_fkey FOREIGN KEY (course_id) REFERENCES public.courses(id);


--
-- TOC entry 6838 (class 2606 OID 20024)
-- Name: course_bookmarks course_bookmarks_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.course_bookmarks
    ADD CONSTRAINT course_bookmarks_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- TOC entry 6846 (class 2606 OID 20106)
-- Name: course_bundle_items course_bundle_items_bundle_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.course_bundle_items
    ADD CONSTRAINT course_bundle_items_bundle_id_fkey FOREIGN KEY (bundle_id) REFERENCES public.course_bundles(id) ON DELETE CASCADE;


--
-- TOC entry 6847 (class 2606 OID 20111)
-- Name: course_bundle_items course_bundle_items_course_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.course_bundle_items
    ADD CONSTRAINT course_bundle_items_course_id_fkey FOREIGN KEY (course_id) REFERENCES public.courses(id) ON DELETE CASCADE;


--
-- TOC entry 6762 (class 2606 OID 18961)
-- Name: course_bundles course_bundles_instructor_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.course_bundles
    ADD CONSTRAINT course_bundles_instructor_id_fkey FOREIGN KEY (instructor_id) REFERENCES public.users(id);


--
-- TOC entry 6917 (class 2606 OID 20852)
-- Name: course_payments course_payments_course_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.course_payments
    ADD CONSTRAINT course_payments_course_id_fkey FOREIGN KEY (course_id) REFERENCES public.courses(id) ON DELETE SET NULL;


--
-- TOC entry 6918 (class 2606 OID 20857)
-- Name: course_payments course_payments_enrollment_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.course_payments
    ADD CONSTRAINT course_payments_enrollment_id_fkey FOREIGN KEY (enrollment_id) REFERENCES public.enrollments(id) ON DELETE SET NULL;


--
-- TOC entry 6919 (class 2606 OID 20847)
-- Name: course_payments course_payments_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.course_payments
    ADD CONSTRAINT course_payments_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- TOC entry 6863 (class 2606 OID 20276)
-- Name: course_recommendations course_recommendations_course_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.course_recommendations
    ADD CONSTRAINT course_recommendations_course_id_fkey FOREIGN KEY (course_id) REFERENCES public.courses(id) ON DELETE CASCADE;


--
-- TOC entry 6864 (class 2606 OID 20271)
-- Name: course_recommendations course_recommendations_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.course_recommendations
    ADD CONSTRAINT course_recommendations_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- TOC entry 6825 (class 2606 OID 19896)
-- Name: course_reviews course_reviews_course_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.course_reviews
    ADD CONSTRAINT course_reviews_course_id_fkey FOREIGN KEY (course_id) REFERENCES public.courses(id) ON DELETE CASCADE;


--
-- TOC entry 6826 (class 2606 OID 19901)
-- Name: course_reviews course_reviews_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.course_reviews
    ADD CONSTRAINT course_reviews_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- TOC entry 6827 (class 2606 OID 19914)
-- Name: course_tags course_tags_course_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.course_tags
    ADD CONSTRAINT course_tags_course_id_fkey FOREIGN KEY (course_id) REFERENCES public.courses(id) ON DELETE CASCADE;


--
-- TOC entry 6828 (class 2606 OID 19919)
-- Name: course_tags course_tags_tag_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.course_tags
    ADD CONSTRAINT course_tags_tag_id_fkey FOREIGN KEY (tag_id) REFERENCES public.tags(id) ON DELETE CASCADE;


--
-- TOC entry 6763 (class 2606 OID 18983)
-- Name: courses courses_category_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_category_id_fkey FOREIGN KEY (category_id) REFERENCES public.categories(id);


--
-- TOC entry 6764 (class 2606 OID 18978)
-- Name: courses courses_instructor_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_instructor_id_fkey FOREIGN KEY (instructor_id) REFERENCES public.users(id);


--
-- TOC entry 6812 (class 2606 OID 19683)
-- Name: daily_reflections daily_reflections_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.daily_reflections
    ADD CONSTRAINT daily_reflections_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- TOC entry 6810 (class 2606 OID 19652)
-- Name: daily_tasks daily_tasks_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.daily_tasks
    ADD CONSTRAINT daily_tasks_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- TOC entry 6818 (class 2606 OID 19777)
-- Name: data_masking_configs data_masking_configs_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.data_masking_configs
    ADD CONSTRAINT data_masking_configs_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- TOC entry 7050 (class 2606 OID 22293)
-- Name: development_logs development_logs_created_by_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.development_logs
    ADD CONSTRAINT development_logs_created_by_fkey FOREIGN KEY (created_by) REFERENCES public.users(id);


--
-- TOC entry 6800 (class 2606 OID 19524)
-- Name: digital_products digital_products_instructor_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.digital_products
    ADD CONSTRAINT digital_products_instructor_id_fkey FOREIGN KEY (instructor_id) REFERENCES public.users(id);


--
-- TOC entry 6801 (class 2606 OID 19545)
-- Name: direct_messages direct_messages_receiver_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.direct_messages
    ADD CONSTRAINT direct_messages_receiver_id_fkey FOREIGN KEY (receiver_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- TOC entry 6802 (class 2606 OID 19540)
-- Name: direct_messages direct_messages_sender_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.direct_messages
    ADD CONSTRAINT direct_messages_sender_id_fkey FOREIGN KEY (sender_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- TOC entry 6831 (class 2606 OID 19956)
-- Name: discussion_categories discussion_categories_course_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.discussion_categories
    ADD CONSTRAINT discussion_categories_course_id_fkey FOREIGN KEY (course_id) REFERENCES public.courses(id);


--
-- TOC entry 6972 (class 2606 OID 21389)
-- Name: discussion_posts discussion_posts_parent_post_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.discussion_posts
    ADD CONSTRAINT discussion_posts_parent_post_id_fkey FOREIGN KEY (parent_post_id) REFERENCES public.discussion_posts(id);


--
-- TOC entry 6973 (class 2606 OID 21379)
-- Name: discussion_posts discussion_posts_thread_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.discussion_posts
    ADD CONSTRAINT discussion_posts_thread_id_fkey FOREIGN KEY (thread_id) REFERENCES public.discussion_threads(id);


--
-- TOC entry 6974 (class 2606 OID 21384)
-- Name: discussion_posts discussion_posts_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.discussion_posts
    ADD CONSTRAINT discussion_posts_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- TOC entry 6926 (class 2606 OID 20936)
-- Name: discussion_threads discussion_threads_category_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.discussion_threads
    ADD CONSTRAINT discussion_threads_category_id_fkey FOREIGN KEY (category_id) REFERENCES public.discussion_categories(id);


--
-- TOC entry 6927 (class 2606 OID 20941)
-- Name: discussion_threads discussion_threads_course_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.discussion_threads
    ADD CONSTRAINT discussion_threads_course_id_fkey FOREIGN KEY (course_id) REFERENCES public.courses(id);


--
-- TOC entry 6928 (class 2606 OID 20946)
-- Name: discussion_threads discussion_threads_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.discussion_threads
    ADD CONSTRAINT discussion_threads_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- TOC entry 6896 (class 2606 OID 20638)
-- Name: drill_content drill_content_question_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.drill_content
    ADD CONSTRAINT drill_content_question_id_fkey FOREIGN KEY (question_id) REFERENCES public.drill_questions(id);


--
-- TOC entry 6814 (class 2606 OID 19712)
-- Name: drill_daily_summaries drill_daily_summaries_student_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.drill_daily_summaries
    ADD CONSTRAINT drill_daily_summaries_student_id_fkey FOREIGN KEY (student_id) REFERENCES public.users(id);


--
-- TOC entry 6897 (class 2606 OID 20652)
-- Name: drill_model_answers drill_model_answers_question_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.drill_model_answers
    ADD CONSTRAINT drill_model_answers_question_id_fkey FOREIGN KEY (question_id) REFERENCES public.drill_questions(id);


--
-- TOC entry 6813 (class 2606 OID 19698)
-- Name: drill_questions drill_questions_created_by_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.drill_questions
    ADD CONSTRAINT drill_questions_created_by_fkey FOREIGN KEY (created_by) REFERENCES public.users(id);


--
-- TOC entry 6898 (class 2606 OID 20669)
-- Name: drill_sessions drill_sessions_question_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.drill_sessions
    ADD CONSTRAINT drill_sessions_question_id_fkey FOREIGN KEY (question_id) REFERENCES public.drill_questions(id);


--
-- TOC entry 6899 (class 2606 OID 20664)
-- Name: drill_sessions drill_sessions_student_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.drill_sessions
    ADD CONSTRAINT drill_sessions_student_id_fkey FOREIGN KEY (student_id) REFERENCES public.users(id);


--
-- TOC entry 6865 (class 2606 OID 20296)
-- Name: email_logs email_logs_template_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.email_logs
    ADD CONSTRAINT email_logs_template_id_fkey FOREIGN KEY (template_id) REFERENCES public.email_templates(id) ON DELETE SET NULL;


--
-- TOC entry 6866 (class 2606 OID 20291)
-- Name: email_logs email_logs_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.email_logs
    ADD CONSTRAINT email_logs_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- TOC entry 6779 (class 2606 OID 19215)
-- Name: email_templates email_templates_created_by_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.email_templates
    ADD CONSTRAINT email_templates_created_by_fkey FOREIGN KEY (created_by) REFERENCES public.users(id) ON DELETE SET NULL;


--
-- TOC entry 6803 (class 2606 OID 19563)
-- Name: enquiries enquiries_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.enquiries
    ADD CONSTRAINT enquiries_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- TOC entry 6850 (class 2606 OID 20150)
-- Name: enrollments enrollments_course_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.enrollments
    ADD CONSTRAINT enrollments_course_id_fkey FOREIGN KEY (course_id) REFERENCES public.courses(id) ON DELETE CASCADE;


--
-- TOC entry 6851 (class 2606 OID 20155)
-- Name: enrollments enrollments_last_accessed_lesson_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.enrollments
    ADD CONSTRAINT enrollments_last_accessed_lesson_id_fkey FOREIGN KEY (last_accessed_lesson_id) REFERENCES public.lessons(id);


--
-- TOC entry 6852 (class 2606 OID 20145)
-- Name: enrollments enrollments_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.enrollments
    ADD CONSTRAINT enrollments_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- TOC entry 6771 (class 2606 OID 19084)
-- Name: exam_sessions exam_sessions_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.exam_sessions
    ADD CONSTRAINT exam_sessions_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- TOC entry 7055 (class 2606 OID 22429)
-- Name: field_activities field_activities_lead_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.field_activities
    ADD CONSTRAINT field_activities_lead_id_fkey FOREIGN KEY (lead_id) REFERENCES public.leads(id);


--
-- TOC entry 7056 (class 2606 OID 22424)
-- Name: field_activities field_activities_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.field_activities
    ADD CONSTRAINT field_activities_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- TOC entry 6989 (class 2606 OID 21932)
-- Name: realtime_chat_messages fk_chat_sender; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.realtime_chat_messages
    ADD CONSTRAINT fk_chat_sender FOREIGN KEY (sender_id) REFERENCES public.users(id);


--
-- TOC entry 6736 (class 2606 OID 21942)
-- Name: realtime_user_presence fk_presence_user; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.realtime_user_presence
    ADD CONSTRAINT fk_presence_user FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- TOC entry 7066 (class 2606 OID 22566)
-- Name: flashcard_progress flashcard_progress_flashcard_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.flashcard_progress
    ADD CONSTRAINT flashcard_progress_flashcard_id_fkey FOREIGN KEY (flashcard_id) REFERENCES public.flashcards(id);


--
-- TOC entry 7067 (class 2606 OID 22561)
-- Name: flashcard_progress flashcard_progress_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.flashcard_progress
    ADD CONSTRAINT flashcard_progress_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- TOC entry 7053 (class 2606 OID 22378)
-- Name: flashcards flashcards_lesson_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.flashcards
    ADD CONSTRAINT flashcards_lesson_id_fkey FOREIGN KEY (lesson_id) REFERENCES public.lessons(id);


--
-- TOC entry 6804 (class 2606 OID 19583)
-- Name: friendships friendships_friend_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.friendships
    ADD CONSTRAINT friendships_friend_id_fkey FOREIGN KEY (friend_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- TOC entry 6805 (class 2606 OID 19578)
-- Name: friendships friendships_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.friendships
    ADD CONSTRAINT friendships_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- TOC entry 7047 (class 2606 OID 22236)
-- Name: ghost_login_alerts ghost_login_alerts_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ghost_login_alerts
    ADD CONSTRAINT ghost_login_alerts_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- TOC entry 7063 (class 2606 OID 22527)
-- Name: grapho_pages grapho_pages_book_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.grapho_pages
    ADD CONSTRAINT grapho_pages_book_id_fkey FOREIGN KEY (book_id) REFERENCES public.grapho_books(id);


--
-- TOC entry 7064 (class 2606 OID 22547)
-- Name: grapho_submissions grapho_submissions_book_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.grapho_submissions
    ADD CONSTRAINT grapho_submissions_book_id_fkey FOREIGN KEY (book_id) REFERENCES public.grapho_books(id);


--
-- TOC entry 7065 (class 2606 OID 22542)
-- Name: grapho_submissions grapho_submissions_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.grapho_submissions
    ADD CONSTRAINT grapho_submissions_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- TOC entry 6894 (class 2606 OID 20608)
-- Name: graphotherapy_day_completions graphotherapy_day_completions_progress_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.graphotherapy_day_completions
    ADD CONSTRAINT graphotherapy_day_completions_progress_id_fkey FOREIGN KEY (progress_id) REFERENCES public.graphotherapy_progress(id);


--
-- TOC entry 6806 (class 2606 OID 19599)
-- Name: graphotherapy_progress graphotherapy_progress_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.graphotherapy_progress
    ADD CONSTRAINT graphotherapy_progress_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- TOC entry 6857 (class 2606 OID 20212)
-- Name: group_members group_members_group_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.group_members
    ADD CONSTRAINT group_members_group_id_fkey FOREIGN KEY (group_id) REFERENCES public.study_groups(id) ON DELETE CASCADE;


--
-- TOC entry 6858 (class 2606 OID 20217)
-- Name: group_members group_members_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.group_members
    ADD CONSTRAINT group_members_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- TOC entry 6945 (class 2606 OID 21130)
-- Name: group_memberships group_memberships_group_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.group_memberships
    ADD CONSTRAINT group_memberships_group_id_fkey FOREIGN KEY (group_id) REFERENCES public.learning_groups(id);


--
-- TOC entry 6946 (class 2606 OID 21135)
-- Name: group_memberships group_memberships_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.group_memberships
    ADD CONSTRAINT group_memberships_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- TOC entry 6985 (class 2606 OID 21484)
-- Name: group_post_comments group_post_comments_post_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.group_post_comments
    ADD CONSTRAINT group_post_comments_post_id_fkey FOREIGN KEY (post_id) REFERENCES public.group_posts(id);


--
-- TOC entry 6986 (class 2606 OID 21489)
-- Name: group_post_comments group_post_comments_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.group_post_comments
    ADD CONSTRAINT group_post_comments_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- TOC entry 6947 (class 2606 OID 21150)
-- Name: group_posts group_posts_group_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.group_posts
    ADD CONSTRAINT group_posts_group_id_fkey FOREIGN KEY (group_id) REFERENCES public.learning_groups(id);


--
-- TOC entry 6948 (class 2606 OID 21155)
-- Name: group_posts group_posts_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.group_posts
    ADD CONSTRAINT group_posts_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- TOC entry 6895 (class 2606 OID 20621)
-- Name: habit_logs habit_logs_habit_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.habit_logs
    ADD CONSTRAINT habit_logs_habit_id_fkey FOREIGN KEY (habit_id) REFERENCES public.habits(id);


--
-- TOC entry 6811 (class 2606 OID 19667)
-- Name: habits habits_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.habits
    ADD CONSTRAINT habits_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- TOC entry 6752 (class 2606 OID 18834)
-- Name: handwriting_submissions handwriting_submissions_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.handwriting_submissions
    ADD CONSTRAINT handwriting_submissions_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- TOC entry 6870 (class 2606 OID 20345)
-- Name: instructor_analytics instructor_analytics_course_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.instructor_analytics
    ADD CONSTRAINT instructor_analytics_course_id_fkey FOREIGN KEY (course_id) REFERENCES public.courses(id) ON DELETE CASCADE;


--
-- TOC entry 6871 (class 2606 OID 20340)
-- Name: instructor_analytics instructor_analytics_instructor_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.instructor_analytics
    ADD CONSTRAINT instructor_analytics_instructor_id_fkey FOREIGN KEY (instructor_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- TOC entry 6782 (class 2606 OID 19267)
-- Name: instructor_payment_info instructor_payment_info_instructor_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.instructor_payment_info
    ADD CONSTRAINT instructor_payment_info_instructor_id_fkey FOREIGN KEY (instructor_id) REFERENCES public.users(id);


--
-- TOC entry 6781 (class 2606 OID 19250)
-- Name: instructor_payouts instructor_payouts_instructor_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.instructor_payouts
    ADD CONSTRAINT instructor_payouts_instructor_id_fkey FOREIGN KEY (instructor_id) REFERENCES public.users(id);


--
-- TOC entry 7040 (class 2606 OID 22098)
-- Name: interaction_logs interaction_logs_associated_concept_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.interaction_logs
    ADD CONSTRAINT interaction_logs_associated_concept_id_fkey FOREIGN KEY (associated_concept_id) REFERENCES public.concepts(id);


--
-- TOC entry 7041 (class 2606 OID 22103)
-- Name: interaction_logs interaction_logs_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.interaction_logs
    ADD CONSTRAINT interaction_logs_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- TOC entry 7024 (class 2606 OID 21848)
-- Name: invoices invoices_order_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.invoices
    ADD CONSTRAINT invoices_order_id_fkey FOREIGN KEY (order_id) REFERENCES public.orders(id) ON DELETE CASCADE;


--
-- TOC entry 6817 (class 2606 OID 19757)
-- Name: leads leads_assigned_to_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.leads
    ADD CONSTRAINT leads_assigned_to_id_fkey FOREIGN KEY (assigned_to_id) REFERENCES public.users(id);


--
-- TOC entry 6859 (class 2606 OID 20231)
-- Name: learning_groups learning_groups_course_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.learning_groups
    ADD CONSTRAINT learning_groups_course_id_fkey FOREIGN KEY (course_id) REFERENCES public.courses(id);


--
-- TOC entry 6860 (class 2606 OID 20236)
-- Name: learning_groups learning_groups_created_by_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.learning_groups
    ADD CONSTRAINT learning_groups_created_by_fkey FOREIGN KEY (created_by) REFERENCES public.users(id);


--
-- TOC entry 6760 (class 2606 OID 18928)
-- Name: learning_paths learning_paths_creator_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.learning_paths
    ADD CONSTRAINT learning_paths_creator_id_fkey FOREIGN KEY (creator_id) REFERENCES public.users(id);


--
-- TOC entry 6834 (class 2606 OID 20003)
-- Name: lesson_bookmarks lesson_bookmarks_course_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.lesson_bookmarks
    ADD CONSTRAINT lesson_bookmarks_course_id_fkey FOREIGN KEY (course_id) REFERENCES public.courses(id);


--
-- TOC entry 6835 (class 2606 OID 19993)
-- Name: lesson_bookmarks lesson_bookmarks_lesson_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.lesson_bookmarks
    ADD CONSTRAINT lesson_bookmarks_lesson_id_fkey FOREIGN KEY (lesson_id) REFERENCES public.lessons(id);


--
-- TOC entry 6836 (class 2606 OID 19998)
-- Name: lesson_bookmarks lesson_bookmarks_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.lesson_bookmarks
    ADD CONSTRAINT lesson_bookmarks_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- TOC entry 6741 (class 2606 OID 18684)
-- Name: lesson_drip_settings lesson_drip_settings_lesson_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.lesson_drip_settings
    ADD CONSTRAINT lesson_drip_settings_lesson_id_fkey FOREIGN KEY (lesson_id) REFERENCES public.lessons(id) ON DELETE CASCADE;


--
-- TOC entry 6742 (class 2606 OID 18689)
-- Name: lesson_drip_settings lesson_drip_settings_prerequisite_lesson_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.lesson_drip_settings
    ADD CONSTRAINT lesson_drip_settings_prerequisite_lesson_id_fkey FOREIGN KEY (prerequisite_lesson_id) REFERENCES public.lessons(id);


--
-- TOC entry 6757 (class 2606 OID 18892)
-- Name: lesson_notes lesson_notes_lesson_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.lesson_notes
    ADD CONSTRAINT lesson_notes_lesson_id_fkey FOREIGN KEY (lesson_id) REFERENCES public.lessons(id);


--
-- TOC entry 6758 (class 2606 OID 18897)
-- Name: lesson_notes lesson_notes_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.lesson_notes
    ADD CONSTRAINT lesson_notes_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- TOC entry 6755 (class 2606 OID 18873)
-- Name: lesson_progress lesson_progress_lesson_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.lesson_progress
    ADD CONSTRAINT lesson_progress_lesson_id_fkey FOREIGN KEY (lesson_id) REFERENCES public.lessons(id) ON DELETE CASCADE;


--
-- TOC entry 6756 (class 2606 OID 18868)
-- Name: lesson_progress lesson_progress_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.lesson_progress
    ADD CONSTRAINT lesson_progress_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- TOC entry 6733 (class 2606 OID 21957)
-- Name: lessons lessons_module_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.lessons
    ADD CONSTRAINT lessons_module_id_fkey FOREIGN KEY (module_id) REFERENCES public.modules(id) ON DELETE CASCADE;


--
-- TOC entry 6935 (class 2606 OID 21013)
-- Name: live_class_attendance live_class_attendance_live_class_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.live_class_attendance
    ADD CONSTRAINT live_class_attendance_live_class_id_fkey FOREIGN KEY (live_class_id) REFERENCES public.live_classes(id) ON DELETE CASCADE;


--
-- TOC entry 6936 (class 2606 OID 21018)
-- Name: live_class_attendance live_class_attendance_student_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.live_class_attendance
    ADD CONSTRAINT live_class_attendance_student_id_fkey FOREIGN KEY (student_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- TOC entry 6942 (class 2606 OID 21093)
-- Name: live_class_chat_messages live_class_chat_messages_live_class_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.live_class_chat_messages
    ADD CONSTRAINT live_class_chat_messages_live_class_id_fkey FOREIGN KEY (live_class_id) REFERENCES public.live_classes(id) ON DELETE CASCADE;


--
-- TOC entry 6943 (class 2606 OID 21098)
-- Name: live_class_chat_messages live_class_chat_messages_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.live_class_chat_messages
    ADD CONSTRAINT live_class_chat_messages_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- TOC entry 6979 (class 2606 OID 21433)
-- Name: live_class_poll_responses live_class_poll_responses_poll_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.live_class_poll_responses
    ADD CONSTRAINT live_class_poll_responses_poll_id_fkey FOREIGN KEY (poll_id) REFERENCES public.live_class_polls(id) ON DELETE CASCADE;


--
-- TOC entry 6980 (class 2606 OID 21438)
-- Name: live_class_poll_responses live_class_poll_responses_student_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.live_class_poll_responses
    ADD CONSTRAINT live_class_poll_responses_student_id_fkey FOREIGN KEY (student_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- TOC entry 6937 (class 2606 OID 21035)
-- Name: live_class_polls live_class_polls_live_class_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.live_class_polls
    ADD CONSTRAINT live_class_polls_live_class_id_fkey FOREIGN KEY (live_class_id) REFERENCES public.live_classes(id) ON DELETE CASCADE;


--
-- TOC entry 6938 (class 2606 OID 21051)
-- Name: live_class_questions live_class_questions_live_class_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.live_class_questions
    ADD CONSTRAINT live_class_questions_live_class_id_fkey FOREIGN KEY (live_class_id) REFERENCES public.live_classes(id) ON DELETE CASCADE;


--
-- TOC entry 6939 (class 2606 OID 21056)
-- Name: live_class_questions live_class_questions_student_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.live_class_questions
    ADD CONSTRAINT live_class_questions_student_id_fkey FOREIGN KEY (student_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- TOC entry 6940 (class 2606 OID 21072)
-- Name: live_class_reactions live_class_reactions_live_class_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.live_class_reactions
    ADD CONSTRAINT live_class_reactions_live_class_id_fkey FOREIGN KEY (live_class_id) REFERENCES public.live_classes(id) ON DELETE CASCADE;


--
-- TOC entry 6941 (class 2606 OID 21077)
-- Name: live_class_reactions live_class_reactions_student_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.live_class_reactions
    ADD CONSTRAINT live_class_reactions_student_id_fkey FOREIGN KEY (student_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- TOC entry 6841 (class 2606 OID 20061)
-- Name: live_classes live_classes_course_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.live_classes
    ADD CONSTRAINT live_classes_course_id_fkey FOREIGN KEY (course_id) REFERENCES public.courses(id) ON DELETE CASCADE;


--
-- TOC entry 6842 (class 2606 OID 20066)
-- Name: live_classes live_classes_instructor_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.live_classes
    ADD CONSTRAINT live_classes_instructor_id_fkey FOREIGN KEY (instructor_id) REFERENCES public.users(id);


--
-- TOC entry 7075 (class 2606 OID 28231)
-- Name: lms_assignments lms_assignments_batch_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.lms_assignments
    ADD CONSTRAINT lms_assignments_batch_id_fkey FOREIGN KEY (batch_id) REFERENCES public.upsc_batches(id);


--
-- TOC entry 6822 (class 2606 OID 19850)
-- Name: marketing_workflows marketing_workflows_created_by_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.marketing_workflows
    ADD CONSTRAINT marketing_workflows_created_by_fkey FOREIGN KEY (created_by) REFERENCES public.users(id);


--
-- TOC entry 6878 (class 2606 OID 20425)
-- Name: marketplace_listings marketplace_listings_course_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.marketplace_listings
    ADD CONSTRAINT marketplace_listings_course_id_fkey FOREIGN KEY (course_id) REFERENCES public.courses(id);


--
-- TOC entry 6824 (class 2606 OID 19881)
-- Name: meditation_day_completions meditation_day_completions_progress_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.meditation_day_completions
    ADD CONSTRAINT meditation_day_completions_progress_id_fkey FOREIGN KEY (progress_id) REFERENCES public.meditation_progress(id);


--
-- TOC entry 7044 (class 2606 OID 22148)
-- Name: meditation_experiences meditation_experiences_day_completion_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.meditation_experiences
    ADD CONSTRAINT meditation_experiences_day_completion_id_fkey FOREIGN KEY (day_completion_id) REFERENCES public.meditation_day_completions(id);


--
-- TOC entry 7045 (class 2606 OID 22143)
-- Name: meditation_experiences meditation_experiences_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.meditation_experiences
    ADD CONSTRAINT meditation_experiences_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- TOC entry 7046 (class 2606 OID 22172)
-- Name: meditation_level_purchases meditation_level_purchases_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.meditation_level_purchases
    ADD CONSTRAINT meditation_level_purchases_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- TOC entry 6913 (class 2606 OID 20806)
-- Name: meditation_process_completions meditation_process_completions_day_completion_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.meditation_process_completions
    ADD CONSTRAINT meditation_process_completions_day_completion_id_fkey FOREIGN KEY (day_completion_id) REFERENCES public.meditation_day_completions(id);


--
-- TOC entry 6914 (class 2606 OID 20811)
-- Name: meditation_process_completions meditation_process_completions_process_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.meditation_process_completions
    ADD CONSTRAINT meditation_process_completions_process_id_fkey FOREIGN KEY (process_id) REFERENCES public.meditation_processes(id);


--
-- TOC entry 6749 (class 2606 OID 18787)
-- Name: meditation_progress meditation_progress_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.meditation_progress
    ADD CONSTRAINT meditation_progress_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- TOC entry 6750 (class 2606 OID 18801)
-- Name: meditation_sessions meditation_sessions_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.meditation_sessions
    ADD CONSTRAINT meditation_sessions_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- TOC entry 7006 (class 2606 OID 21673)
-- Name: message_logs message_logs_lead_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.message_logs
    ADD CONSTRAINT message_logs_lead_id_fkey FOREIGN KEY (lead_id) REFERENCES public.leads(id);


--
-- TOC entry 7007 (class 2606 OID 21683)
-- Name: message_logs message_logs_template_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.message_logs
    ADD CONSTRAINT message_logs_template_id_fkey FOREIGN KEY (template_id) REFERENCES public.communication_templates(id);


--
-- TOC entry 7008 (class 2606 OID 21678)
-- Name: message_logs message_logs_workflow_execution_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.message_logs
    ADD CONSTRAINT message_logs_workflow_execution_id_fkey FOREIGN KEY (workflow_execution_id) REFERENCES public.workflow_executions(id);


--
-- TOC entry 6731 (class 2606 OID 21937)
-- Name: modules modules_course_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.modules
    ADD CONSTRAINT modules_course_id_fkey FOREIGN KEY (course_id) REFERENCES public.courses(id) ON DELETE CASCADE;


--
-- TOC entry 6732 (class 2606 OID 21952)
-- Name: modules modules_quiz_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.modules
    ADD CONSTRAINT modules_quiz_id_fkey FOREIGN KEY (quiz_id) REFERENCES public.quizzes(id);


--
-- TOC entry 6770 (class 2606 OID 19069)
-- Name: mood_entries mood_entries_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.mood_entries
    ADD CONSTRAINT mood_entries_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- TOC entry 6777 (class 2606 OID 19181)
-- Name: notifications notifications_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.notifications
    ADD CONSTRAINT notifications_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- TOC entry 7021 (class 2606 OID 21830)
-- Name: order_items order_items_bundle_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.order_items
    ADD CONSTRAINT order_items_bundle_id_fkey FOREIGN KEY (bundle_id) REFERENCES public.course_bundles(id) ON DELETE SET NULL;


--
-- TOC entry 7022 (class 2606 OID 21825)
-- Name: order_items order_items_course_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.order_items
    ADD CONSTRAINT order_items_course_id_fkey FOREIGN KEY (course_id) REFERENCES public.courses(id) ON DELETE SET NULL;


--
-- TOC entry 7023 (class 2606 OID 21820)
-- Name: order_items order_items_order_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.order_items
    ADD CONSTRAINT order_items_order_id_fkey FOREIGN KEY (order_id) REFERENCES public.orders(id) ON DELETE CASCADE;


--
-- TOC entry 7000 (class 2606 OID 21620)
-- Name: orders orders_cart_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_cart_id_fkey FOREIGN KEY (cart_id) REFERENCES public.shopping_carts(id) ON DELETE SET NULL;


--
-- TOC entry 7001 (class 2606 OID 21625)
-- Name: orders orders_payment_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_payment_id_fkey FOREIGN KEY (payment_id) REFERENCES public.course_payments(id) ON DELETE SET NULL;


--
-- TOC entry 7002 (class 2606 OID 21615)
-- Name: orders orders_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE SET NULL;


--
-- TOC entry 6843 (class 2606 OID 20087)
-- Name: path_courses path_courses_course_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.path_courses
    ADD CONSTRAINT path_courses_course_id_fkey FOREIGN KEY (course_id) REFERENCES public.courses(id) ON DELETE CASCADE;


--
-- TOC entry 6844 (class 2606 OID 20082)
-- Name: path_courses path_courses_path_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.path_courses
    ADD CONSTRAINT path_courses_path_id_fkey FOREIGN KEY (path_id) REFERENCES public.learning_paths(id) ON DELETE CASCADE;


--
-- TOC entry 6845 (class 2606 OID 20092)
-- Name: path_courses path_courses_prerequisite_course_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.path_courses
    ADD CONSTRAINT path_courses_prerequisite_course_id_fkey FOREIGN KEY (prerequisite_course_id) REFERENCES public.courses(id);


--
-- TOC entry 6981 (class 2606 OID 21462)
-- Name: path_enrollments path_enrollments_current_course_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.path_enrollments
    ADD CONSTRAINT path_enrollments_current_course_id_fkey FOREIGN KEY (current_course_id) REFERENCES public.courses(id);


--
-- TOC entry 6982 (class 2606 OID 21452)
-- Name: path_enrollments path_enrollments_path_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.path_enrollments
    ADD CONSTRAINT path_enrollments_path_id_fkey FOREIGN KEY (path_id) REFERENCES public.learning_paths(id) ON DELETE CASCADE;


--
-- TOC entry 6983 (class 2606 OID 21467)
-- Name: path_enrollments path_enrollments_payment_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.path_enrollments
    ADD CONSTRAINT path_enrollments_payment_id_fkey FOREIGN KEY (payment_id) REFERENCES public.course_payments(id);


--
-- TOC entry 6984 (class 2606 OID 21457)
-- Name: path_enrollments path_enrollments_student_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.path_enrollments
    ADD CONSTRAINT path_enrollments_student_id_fkey FOREIGN KEY (student_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- TOC entry 6807 (class 2606 OID 19615)
-- Name: payment_methods payment_methods_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.payment_methods
    ADD CONSTRAINT payment_methods_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- TOC entry 6975 (class 2606 OID 21405)
-- Name: peer_review_assignments peer_review_assignments_assignment_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.peer_review_assignments
    ADD CONSTRAINT peer_review_assignments_assignment_id_fkey FOREIGN KEY (assignment_id) REFERENCES public.assignments(id);


--
-- TOC entry 6976 (class 2606 OID 21415)
-- Name: peer_review_assignments peer_review_assignments_reviewee_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.peer_review_assignments
    ADD CONSTRAINT peer_review_assignments_reviewee_id_fkey FOREIGN KEY (reviewee_id) REFERENCES public.users(id);


--
-- TOC entry 6977 (class 2606 OID 21410)
-- Name: peer_review_assignments peer_review_assignments_reviewer_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.peer_review_assignments
    ADD CONSTRAINT peer_review_assignments_reviewer_id_fkey FOREIGN KEY (reviewer_id) REFERENCES public.users(id);


--
-- TOC entry 6978 (class 2606 OID 21420)
-- Name: peer_review_assignments peer_review_assignments_submission_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.peer_review_assignments
    ADD CONSTRAINT peer_review_assignments_submission_id_fkey FOREIGN KEY (submission_id) REFERENCES public.submissions(id);


--
-- TOC entry 7015 (class 2606 OID 21759)
-- Name: peer_reviews peer_reviews_peer_review_assignment_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.peer_reviews
    ADD CONSTRAINT peer_reviews_peer_review_assignment_id_fkey FOREIGN KEY (peer_review_assignment_id) REFERENCES public.peer_review_assignments(id);


--
-- TOC entry 7003 (class 2606 OID 21651)
-- Name: plagiarism_checks plagiarism_checks_assignment_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.plagiarism_checks
    ADD CONSTRAINT plagiarism_checks_assignment_id_fkey FOREIGN KEY (assignment_id) REFERENCES public.assignments(id);


--
-- TOC entry 7004 (class 2606 OID 21656)
-- Name: plagiarism_checks plagiarism_checks_student_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.plagiarism_checks
    ADD CONSTRAINT plagiarism_checks_student_id_fkey FOREIGN KEY (student_id) REFERENCES public.users(id);


--
-- TOC entry 7005 (class 2606 OID 21646)
-- Name: plagiarism_checks plagiarism_checks_submission_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.plagiarism_checks
    ADD CONSTRAINT plagiarism_checks_submission_id_fkey FOREIGN KEY (submission_id) REFERENCES public.submissions(id) ON DELETE CASCADE;


--
-- TOC entry 7013 (class 2606 OID 21736)
-- Name: post_votes post_votes_post_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.post_votes
    ADD CONSTRAINT post_votes_post_id_fkey FOREIGN KEY (post_id) REFERENCES public.discussion_posts(id);


--
-- TOC entry 7014 (class 2606 OID 21741)
-- Name: post_votes post_votes_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.post_votes
    ADD CONSTRAINT post_votes_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- TOC entry 6988 (class 2606 OID 21519)
-- Name: project_milestones project_milestones_project_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.project_milestones
    ADD CONSTRAINT project_milestones_project_id_fkey FOREIGN KEY (project_id) REFERENCES public.collaborative_projects(id) ON DELETE CASCADE;


--
-- TOC entry 7018 (class 2606 OID 21804)
-- Name: project_submissions project_submissions_graded_by_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.project_submissions
    ADD CONSTRAINT project_submissions_graded_by_fkey FOREIGN KEY (graded_by) REFERENCES public.users(id) ON DELETE SET NULL;


--
-- TOC entry 7019 (class 2606 OID 21794)
-- Name: project_submissions project_submissions_project_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.project_submissions
    ADD CONSTRAINT project_submissions_project_id_fkey FOREIGN KEY (project_id) REFERENCES public.collaborative_projects(id) ON DELETE CASCADE;


--
-- TOC entry 7020 (class 2606 OID 21799)
-- Name: project_submissions project_submissions_team_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.project_submissions
    ADD CONSTRAINT project_submissions_team_id_fkey FOREIGN KEY (team_id) REFERENCES public.project_teams(id) ON DELETE CASCADE;


--
-- TOC entry 7016 (class 2606 OID 21773)
-- Name: project_team_members project_team_members_team_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.project_team_members
    ADD CONSTRAINT project_team_members_team_id_fkey FOREIGN KEY (team_id) REFERENCES public.project_teams(id) ON DELETE CASCADE;


--
-- TOC entry 7017 (class 2606 OID 21778)
-- Name: project_team_members project_team_members_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.project_team_members
    ADD CONSTRAINT project_team_members_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- TOC entry 6987 (class 2606 OID 21503)
-- Name: project_teams project_teams_project_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.project_teams
    ADD CONSTRAINT project_teams_project_id_fkey FOREIGN KEY (project_id) REFERENCES public.collaborative_projects(id) ON DELETE CASCADE;


--
-- TOC entry 6931 (class 2606 OID 20977)
-- Name: question_bank_questions question_bank_questions_question_bank_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.question_bank_questions
    ADD CONSTRAINT question_bank_questions_question_bank_id_fkey FOREIGN KEY (question_bank_id) REFERENCES public.question_banks(id);


--
-- TOC entry 6932 (class 2606 OID 20982)
-- Name: question_bank_questions question_bank_questions_question_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.question_bank_questions
    ADD CONSTRAINT question_bank_questions_question_id_fkey FOREIGN KEY (question_id) REFERENCES public.bank_questions(id);


--
-- TOC entry 6839 (class 2606 OID 20040)
-- Name: question_banks question_banks_course_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.question_banks
    ADD CONSTRAINT question_banks_course_id_fkey FOREIGN KEY (course_id) REFERENCES public.courses(id);


--
-- TOC entry 6840 (class 2606 OID 20045)
-- Name: question_banks question_banks_instructor_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.question_banks
    ADD CONSTRAINT question_banks_instructor_id_fkey FOREIGN KEY (instructor_id) REFERENCES public.users(id);


--
-- TOC entry 6765 (class 2606 OID 19004)
-- Name: question_options question_options_question_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.question_options
    ADD CONSTRAINT question_options_question_id_fkey FOREIGN KEY (question_id) REFERENCES public.questions(id);


--
-- TOC entry 6743 (class 2606 OID 18704)
-- Name: questions questions_quiz_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.questions
    ADD CONSTRAINT questions_quiz_id_fkey FOREIGN KEY (quiz_id) REFERENCES public.quizzes(id);


--
-- TOC entry 6856 (class 2606 OID 20201)
-- Name: quiz_attempt_analytics quiz_attempt_analytics_attempt_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.quiz_attempt_analytics
    ADD CONSTRAINT quiz_attempt_analytics_attempt_id_fkey FOREIGN KEY (attempt_id) REFERENCES public.quiz_attempts(id);


--
-- TOC entry 6766 (class 2606 OID 19018)
-- Name: quiz_attempts quiz_attempts_quiz_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.quiz_attempts
    ADD CONSTRAINT quiz_attempts_quiz_id_fkey FOREIGN KEY (quiz_id) REFERENCES public.quizzes(id);


--
-- TOC entry 6767 (class 2606 OID 19023)
-- Name: quiz_attempts quiz_attempts_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.quiz_attempts
    ADD CONSTRAINT quiz_attempts_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- TOC entry 6768 (class 2606 OID 19038)
-- Name: quiz_feedback quiz_feedback_question_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.quiz_feedback
    ADD CONSTRAINT quiz_feedback_question_id_fkey FOREIGN KEY (question_id) REFERENCES public.questions(id);


--
-- TOC entry 6933 (class 2606 OID 21000)
-- Name: quiz_question_pools quiz_question_pools_question_bank_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.quiz_question_pools
    ADD CONSTRAINT quiz_question_pools_question_bank_id_fkey FOREIGN KEY (question_bank_id) REFERENCES public.question_banks(id);


--
-- TOC entry 6934 (class 2606 OID 20995)
-- Name: quiz_question_pools quiz_question_pools_quiz_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.quiz_question_pools
    ADD CONSTRAINT quiz_question_pools_quiz_id_fkey FOREIGN KEY (quiz_id) REFERENCES public.quizzes(id);


--
-- TOC entry 6734 (class 2606 OID 21927)
-- Name: quizzes quizzes_course_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.quizzes
    ADD CONSTRAINT quizzes_course_id_fkey FOREIGN KEY (course_id) REFERENCES public.courses(id);


--
-- TOC entry 6735 (class 2606 OID 21947)
-- Name: quizzes quizzes_lesson_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.quizzes
    ADD CONSTRAINT quizzes_lesson_id_fkey FOREIGN KEY (lesson_id) REFERENCES public.lessons(id);


--
-- TOC entry 7035 (class 2606 OID 22019)
-- Name: ras_topic_progress ras_topic_progress_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ras_topic_progress
    ADD CONSTRAINT ras_topic_progress_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- TOC entry 6990 (class 2606 OID 21549)
-- Name: realtime_chat_messages realtime_chat_messages_discussion_thread_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.realtime_chat_messages
    ADD CONSTRAINT realtime_chat_messages_discussion_thread_id_fkey FOREIGN KEY (discussion_thread_id) REFERENCES public.discussion_threads(id);


--
-- TOC entry 6991 (class 2606 OID 21544)
-- Name: realtime_chat_messages realtime_chat_messages_learning_group_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.realtime_chat_messages
    ADD CONSTRAINT realtime_chat_messages_learning_group_id_fkey FOREIGN KEY (learning_group_id) REFERENCES public.learning_groups(id);


--
-- TOC entry 6992 (class 2606 OID 21554)
-- Name: realtime_chat_messages realtime_chat_messages_parent_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.realtime_chat_messages
    ADD CONSTRAINT realtime_chat_messages_parent_id_fkey FOREIGN KEY (parent_id) REFERENCES public.realtime_chat_messages(id);


--
-- TOC entry 6993 (class 2606 OID 21539)
-- Name: realtime_chat_messages realtime_chat_messages_study_group_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.realtime_chat_messages
    ADD CONSTRAINT realtime_chat_messages_study_group_id_fkey FOREIGN KEY (study_group_id) REFERENCES public.study_groups(id);


--
-- TOC entry 6994 (class 2606 OID 21534)
-- Name: realtime_chat_messages realtime_chat_messages_study_room_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.realtime_chat_messages
    ADD CONSTRAINT realtime_chat_messages_study_room_id_fkey FOREIGN KEY (study_room_id) REFERENCES public.study_rooms(id);


--
-- TOC entry 7068 (class 2606 OID 22584)
-- Name: retention_reviews retention_reviews_topic_log_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.retention_reviews
    ADD CONSTRAINT retention_reviews_topic_log_id_fkey FOREIGN KEY (topic_log_id) REFERENCES public.user_topic_logs(id);


--
-- TOC entry 7069 (class 2606 OID 22589)
-- Name: retention_reviews retention_reviews_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.retention_reviews
    ADD CONSTRAINT retention_reviews_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- TOC entry 6876 (class 2606 OID 20402)
-- Name: revenue_shares revenue_shares_course_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.revenue_shares
    ADD CONSTRAINT revenue_shares_course_id_fkey FOREIGN KEY (course_id) REFERENCES public.courses(id);


--
-- TOC entry 6877 (class 2606 OID 20407)
-- Name: revenue_shares revenue_shares_instructor_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.revenue_shares
    ADD CONSTRAINT revenue_shares_instructor_id_fkey FOREIGN KEY (instructor_id) REFERENCES public.users(id);


--
-- TOC entry 6879 (class 2606 OID 20455)
-- Name: revenue_transactions revenue_transactions_affiliate_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.revenue_transactions
    ADD CONSTRAINT revenue_transactions_affiliate_id_fkey FOREIGN KEY (affiliate_id) REFERENCES public.users(id);


--
-- TOC entry 6880 (class 2606 OID 20440)
-- Name: revenue_transactions revenue_transactions_course_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.revenue_transactions
    ADD CONSTRAINT revenue_transactions_course_id_fkey FOREIGN KEY (course_id) REFERENCES public.courses(id);


--
-- TOC entry 6881 (class 2606 OID 20445)
-- Name: revenue_transactions revenue_transactions_instructor_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.revenue_transactions
    ADD CONSTRAINT revenue_transactions_instructor_id_fkey FOREIGN KEY (instructor_id) REFERENCES public.users(id);


--
-- TOC entry 6882 (class 2606 OID 20450)
-- Name: revenue_transactions revenue_transactions_student_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.revenue_transactions
    ADD CONSTRAINT revenue_transactions_student_id_fkey FOREIGN KEY (student_id) REFERENCES public.users(id);


--
-- TOC entry 6915 (class 2606 OID 20824)
-- Name: review_helpful review_helpful_review_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.review_helpful
    ADD CONSTRAINT review_helpful_review_id_fkey FOREIGN KEY (review_id) REFERENCES public.course_reviews(id) ON DELETE CASCADE;


--
-- TOC entry 6916 (class 2606 OID 20829)
-- Name: review_helpful review_helpful_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.review_helpful
    ADD CONSTRAINT review_helpful_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- TOC entry 7070 (class 2606 OID 22604)
-- Name: revision_cycles revision_cycles_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.revision_cycles
    ADD CONSTRAINT revision_cycles_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- TOC entry 7071 (class 2606 OID 22609)
-- Name: revision_cycles revision_cycles_user_topic_log_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.revision_cycles
    ADD CONSTRAINT revision_cycles_user_topic_log_id_fkey FOREIGN KEY (user_topic_log_id) REFERENCES public.user_topic_logs(id);


--
-- TOC entry 6737 (class 2606 OID 18643)
-- Name: role_permissions role_permissions_permission_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.role_permissions
    ADD CONSTRAINT role_permissions_permission_id_fkey FOREIGN KEY (permission_id) REFERENCES public.permissions(id) ON DELETE CASCADE;


--
-- TOC entry 6738 (class 2606 OID 18638)
-- Name: role_permissions role_permissions_role_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.role_permissions
    ADD CONSTRAINT role_permissions_role_id_fkey FOREIGN KEY (role_id) REFERENCES public.roles(id) ON DELETE CASCADE;


--
-- TOC entry 6772 (class 2606 OID 19099)
-- Name: shadow_mode_sessions shadow_mode_sessions_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.shadow_mode_sessions
    ADD CONSTRAINT shadow_mode_sessions_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- TOC entry 6780 (class 2606 OID 19231)
-- Name: shopping_carts shopping_carts_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.shopping_carts
    ADD CONSTRAINT shopping_carts_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- TOC entry 6789 (class 2606 OID 19371)
-- Name: sso_audit_logs sso_audit_logs_organization_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sso_audit_logs
    ADD CONSTRAINT sso_audit_logs_organization_id_fkey FOREIGN KEY (organization_id) REFERENCES public.organizations(id) ON DELETE CASCADE;


--
-- TOC entry 6790 (class 2606 OID 19376)
-- Name: sso_audit_logs sso_audit_logs_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sso_audit_logs
    ADD CONSTRAINT sso_audit_logs_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE SET NULL;


--
-- TOC entry 6744 (class 2606 OID 18720)
-- Name: sso_configs sso_configs_organization_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sso_configs
    ADD CONSTRAINT sso_configs_organization_id_fkey FOREIGN KEY (organization_id) REFERENCES public.organizations(id) ON DELETE CASCADE;


--
-- TOC entry 6787 (class 2606 OID 19352)
-- Name: sso_sessions sso_sessions_organization_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sso_sessions
    ADD CONSTRAINT sso_sessions_organization_id_fkey FOREIGN KEY (organization_id) REFERENCES public.organizations(id) ON DELETE CASCADE;


--
-- TOC entry 6788 (class 2606 OID 19347)
-- Name: sso_sessions sso_sessions_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sso_sessions
    ADD CONSTRAINT sso_sessions_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- TOC entry 6960 (class 2606 OID 21272)
-- Name: student_activities student_activities_session_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.student_activities
    ADD CONSTRAINT student_activities_session_id_fkey FOREIGN KEY (session_id) REFERENCES public.drill_sessions(id);


--
-- TOC entry 6961 (class 2606 OID 21267)
-- Name: student_activities student_activities_student_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.student_activities
    ADD CONSTRAINT student_activities_student_id_fkey FOREIGN KEY (student_id) REFERENCES public.users(id);


--
-- TOC entry 6872 (class 2606 OID 20365)
-- Name: student_analytics student_analytics_course_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.student_analytics
    ADD CONSTRAINT student_analytics_course_id_fkey FOREIGN KEY (course_id) REFERENCES public.courses(id) ON DELETE CASCADE;


--
-- TOC entry 6873 (class 2606 OID 20360)
-- Name: student_analytics student_analytics_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.student_analytics
    ADD CONSTRAINT student_analytics_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- TOC entry 6853 (class 2606 OID 20175)
-- Name: student_answers student_answers_attempt_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.student_answers
    ADD CONSTRAINT student_answers_attempt_id_fkey FOREIGN KEY (attempt_id) REFERENCES public.quiz_attempts(id);


--
-- TOC entry 6854 (class 2606 OID 20180)
-- Name: student_answers student_answers_question_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.student_answers
    ADD CONSTRAINT student_answers_question_id_fkey FOREIGN KEY (question_id) REFERENCES public.questions(id);


--
-- TOC entry 6855 (class 2606 OID 20185)
-- Name: student_answers student_answers_selected_option_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.student_answers
    ADD CONSTRAINT student_answers_selected_option_id_fkey FOREIGN KEY (selected_option_id) REFERENCES public.question_options(id);


--
-- TOC entry 7042 (class 2606 OID 22122)
-- Name: student_mastery student_mastery_concept_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.student_mastery
    ADD CONSTRAINT student_mastery_concept_id_fkey FOREIGN KEY (concept_id) REFERENCES public.concepts(id);


--
-- TOC entry 7043 (class 2606 OID 22127)
-- Name: student_mastery student_mastery_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.student_mastery
    ADD CONSTRAINT student_mastery_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- TOC entry 7059 (class 2606 OID 22488)
-- Name: student_nudge_history student_nudge_history_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.student_nudge_history
    ADD CONSTRAINT student_nudge_history_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- TOC entry 7060 (class 2606 OID 22483)
-- Name: student_nudge_history student_nudge_history_workflow_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.student_nudge_history
    ADD CONSTRAINT student_nudge_history_workflow_id_fkey FOREIGN KEY (workflow_id) REFERENCES public.student_nudge_workflows(id);


--
-- TOC entry 7076 (class 2606 OID 28182)
-- Name: student_submissions student_submissions_assignment_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.student_submissions
    ADD CONSTRAINT student_submissions_assignment_id_fkey FOREIGN KEY (assignment_id) REFERENCES public.lms_assignments(id);


--
-- TOC entry 7077 (class 2606 OID 27909)
-- Name: student_submissions student_submissions_student_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.student_submissions
    ADD CONSTRAINT student_submissions_student_id_fkey FOREIGN KEY (student_id) REFERENCES public.users(id);


--
-- TOC entry 6773 (class 2606 OID 19115)
-- Name: study_groups study_groups_creator_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.study_groups
    ADD CONSTRAINT study_groups_creator_id_fkey FOREIGN KEY (creator_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- TOC entry 7037 (class 2606 OID 22055)
-- Name: study_sessions study_sessions_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.study_sessions
    ADD CONSTRAINT study_sessions_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- TOC entry 6924 (class 2606 OID 20914)
-- Name: submissions submissions_assignment_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.submissions
    ADD CONSTRAINT submissions_assignment_id_fkey FOREIGN KEY (assignment_id) REFERENCES public.assignments(id);


--
-- TOC entry 6925 (class 2606 OID 20919)
-- Name: submissions submissions_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.submissions
    ADD CONSTRAINT submissions_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- TOC entry 6883 (class 2606 OID 20479)
-- Name: subscription_invoices subscription_invoices_subscription_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.subscription_invoices
    ADD CONSTRAINT subscription_invoices_subscription_id_fkey FOREIGN KEY (subscription_id) REFERENCES public.user_subscriptions(id);


--
-- TOC entry 6748 (class 2606 OID 18770)
-- Name: tasks tasks_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tasks
    ADD CONSTRAINT tasks_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- TOC entry 7025 (class 2606 OID 21864)
-- Name: tax_calculations tax_calculations_order_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tax_calculations
    ADD CONSTRAINT tax_calculations_order_id_fkey FOREIGN KEY (order_id) REFERENCES public.orders(id);


--
-- TOC entry 7026 (class 2606 OID 21869)
-- Name: tax_calculations tax_calculations_payment_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tax_calculations
    ADD CONSTRAINT tax_calculations_payment_id_fkey FOREIGN KEY (payment_id) REFERENCES public.course_payments(id);


--
-- TOC entry 7027 (class 2606 OID 21874)
-- Name: tax_calculations tax_calculations_subscription_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tax_calculations
    ADD CONSTRAINT tax_calculations_subscription_id_fkey FOREIGN KEY (subscription_id) REFERENCES public.user_subscriptions(id);


--
-- TOC entry 7028 (class 2606 OID 21884)
-- Name: tax_calculations tax_calculations_tax_rate_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tax_calculations
    ADD CONSTRAINT tax_calculations_tax_rate_id_fkey FOREIGN KEY (tax_rate_id) REFERENCES public.tax_rates(id);


--
-- TOC entry 7029 (class 2606 OID 21879)
-- Name: tax_calculations tax_calculations_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tax_calculations
    ADD CONSTRAINT tax_calculations_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- TOC entry 6808 (class 2606 OID 19637)
-- Name: tax_exemptions tax_exemptions_organization_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tax_exemptions
    ADD CONSTRAINT tax_exemptions_organization_id_fkey FOREIGN KEY (organization_id) REFERENCES public.organizations(id);


--
-- TOC entry 6809 (class 2606 OID 19632)
-- Name: tax_exemptions tax_exemptions_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tax_exemptions
    ADD CONSTRAINT tax_exemptions_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- TOC entry 7080 (class 2606 OID 28394)
-- Name: thread_votes thread_votes_thread_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.thread_votes
    ADD CONSTRAINT thread_votes_thread_id_fkey FOREIGN KEY (thread_id) REFERENCES public.discussion_threads(id);


--
-- TOC entry 7081 (class 2606 OID 28399)
-- Name: thread_votes thread_votes_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.thread_votes
    ADD CONSTRAINT thread_votes_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- TOC entry 6791 (class 2606 OID 19393)
-- Name: two_factor_auth two_factor_auth_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.two_factor_auth
    ADD CONSTRAINT two_factor_auth_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- TOC entry 6892 (class 2606 OID 20590)
-- Name: two_factor_backup_codes two_factor_backup_codes_two_factor_auth_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.two_factor_backup_codes
    ADD CONSTRAINT two_factor_backup_codes_two_factor_auth_id_fkey FOREIGN KEY (two_factor_auth_id) REFERENCES public.two_factor_auth(id);


--
-- TOC entry 6893 (class 2606 OID 20585)
-- Name: two_factor_backup_codes two_factor_backup_codes_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.two_factor_backup_codes
    ADD CONSTRAINT two_factor_backup_codes_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- TOC entry 7079 (class 2606 OID 28145)
-- Name: universal_progress universal_progress_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.universal_progress
    ADD CONSTRAINT universal_progress_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- TOC entry 7011 (class 2606 OID 28313)
-- Name: upsc_attempts upsc_attempts_question_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.upsc_attempts
    ADD CONSTRAINT upsc_attempts_question_id_fkey FOREIGN KEY (question_id) REFERENCES public.upsc_questions(id) ON DELETE CASCADE;


--
-- TOC entry 7012 (class 2606 OID 21718)
-- Name: upsc_attempts upsc_attempts_student_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.upsc_attempts
    ADD CONSTRAINT upsc_attempts_student_id_fkey FOREIGN KEY (student_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- TOC entry 6823 (class 2606 OID 19866)
-- Name: upsc_batches upsc_batches_created_by_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.upsc_batches
    ADD CONSTRAINT upsc_batches_created_by_id_fkey FOREIGN KEY (created_by_id) REFERENCES public.users(id);


--
-- TOC entry 7048 (class 2606 OID 22251)
-- Name: upsc_cognitive_profiles upsc_cognitive_profiles_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.upsc_cognitive_profiles
    ADD CONSTRAINT upsc_cognitive_profiles_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- TOC entry 7009 (class 2606 OID 21705)
-- Name: upsc_content upsc_content_created_by_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.upsc_content
    ADD CONSTRAINT upsc_content_created_by_id_fkey FOREIGN KEY (created_by_id) REFERENCES public.users(id);


--
-- TOC entry 7010 (class 2606 OID 28318)
-- Name: upsc_content upsc_content_question_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.upsc_content
    ADD CONSTRAINT upsc_content_question_id_fkey FOREIGN KEY (question_id) REFERENCES public.upsc_questions(id) ON DELETE CASCADE;


--
-- TOC entry 6967 (class 2606 OID 28257)
-- Name: upsc_drills upsc_drills_batch_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.upsc_drills
    ADD CONSTRAINT upsc_drills_batch_id_fkey FOREIGN KEY (batch_id) REFERENCES public.upsc_batches(id) ON DELETE CASCADE;


--
-- TOC entry 6968 (class 2606 OID 21346)
-- Name: upsc_drills upsc_drills_created_by_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.upsc_drills
    ADD CONSTRAINT upsc_drills_created_by_id_fkey FOREIGN KEY (created_by_id) REFERENCES public.users(id);


--
-- TOC entry 6969 (class 2606 OID 28291)
-- Name: upsc_drills upsc_drills_plan_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.upsc_drills
    ADD CONSTRAINT upsc_drills_plan_id_fkey FOREIGN KEY (plan_id) REFERENCES public.upsc_plans(id);


--
-- TOC entry 7061 (class 2606 OID 28269)
-- Name: upsc_gap_analysis upsc_gap_analysis_profile_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.upsc_gap_analysis
    ADD CONSTRAINT upsc_gap_analysis_profile_id_fkey FOREIGN KEY (profile_id) REFERENCES public.upsc_cognitive_profiles(id);


--
-- TOC entry 6906 (class 2606 OID 20755)
-- Name: upsc_plans upsc_plans_approved_by_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.upsc_plans
    ADD CONSTRAINT upsc_plans_approved_by_id_fkey FOREIGN KEY (approved_by_id) REFERENCES public.users(id);


--
-- TOC entry 6907 (class 2606 OID 28296)
-- Name: upsc_plans upsc_plans_batch_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.upsc_plans
    ADD CONSTRAINT upsc_plans_batch_id_fkey FOREIGN KEY (batch_id) REFERENCES public.upsc_batches(id) ON DELETE CASCADE;


--
-- TOC entry 6908 (class 2606 OID 28301)
-- Name: upsc_plans upsc_plans_parent_plan_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.upsc_plans
    ADD CONSTRAINT upsc_plans_parent_plan_id_fkey FOREIGN KEY (parent_plan_id) REFERENCES public.upsc_plans(id);


--
-- TOC entry 6965 (class 2606 OID 21323)
-- Name: upsc_questions upsc_questions_created_by_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.upsc_questions
    ADD CONSTRAINT upsc_questions_created_by_id_fkey FOREIGN KEY (created_by_id) REFERENCES public.users(id);


--
-- TOC entry 6966 (class 2606 OID 28323)
-- Name: upsc_questions upsc_questions_plan_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.upsc_questions
    ADD CONSTRAINT upsc_questions_plan_id_fkey FOREIGN KEY (plan_id) REFERENCES public.upsc_plans(id) ON DELETE CASCADE;


--
-- TOC entry 7030 (class 2606 OID 28335)
-- Name: upsc_reports upsc_reports_attempt_after_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.upsc_reports
    ADD CONSTRAINT upsc_reports_attempt_after_id_fkey FOREIGN KEY (attempt_after_id) REFERENCES public.upsc_attempts(id) ON DELETE CASCADE;


--
-- TOC entry 7031 (class 2606 OID 28330)
-- Name: upsc_reports upsc_reports_attempt_before_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.upsc_reports
    ADD CONSTRAINT upsc_reports_attempt_before_id_fkey FOREIGN KEY (attempt_before_id) REFERENCES public.upsc_attempts(id) ON DELETE CASCADE;


--
-- TOC entry 7032 (class 2606 OID 28340)
-- Name: upsc_reports upsc_reports_question_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.upsc_reports
    ADD CONSTRAINT upsc_reports_question_id_fkey FOREIGN KEY (question_id) REFERENCES public.upsc_questions(id) ON DELETE CASCADE;


--
-- TOC entry 7033 (class 2606 OID 21922)
-- Name: upsc_reports upsc_reports_reviewed_by_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.upsc_reports
    ADD CONSTRAINT upsc_reports_reviewed_by_id_fkey FOREIGN KEY (reviewed_by_id) REFERENCES public.users(id);


--
-- TOC entry 7034 (class 2606 OID 21912)
-- Name: upsc_reports upsc_reports_student_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.upsc_reports
    ADD CONSTRAINT upsc_reports_student_id_fkey FOREIGN KEY (student_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- TOC entry 6911 (class 2606 OID 28347)
-- Name: upsc_rubrics upsc_rubrics_batch_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.upsc_rubrics
    ADD CONSTRAINT upsc_rubrics_batch_id_fkey FOREIGN KEY (batch_id) REFERENCES public.upsc_batches(id);


--
-- TOC entry 6912 (class 2606 OID 20793)
-- Name: upsc_rubrics upsc_rubrics_created_by_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.upsc_rubrics
    ADD CONSTRAINT upsc_rubrics_created_by_id_fkey FOREIGN KEY (created_by_id) REFERENCES public.users(id);


--
-- TOC entry 6904 (class 2606 OID 28354)
-- Name: upsc_student_profiles upsc_student_profiles_batch_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.upsc_student_profiles
    ADD CONSTRAINT upsc_student_profiles_batch_id_fkey FOREIGN KEY (batch_id) REFERENCES public.upsc_batches(id);


--
-- TOC entry 6905 (class 2606 OID 20727)
-- Name: upsc_student_profiles upsc_student_profiles_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.upsc_student_profiles
    ADD CONSTRAINT upsc_student_profiles_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- TOC entry 6970 (class 2606 OID 28363)
-- Name: upsc_student_progress upsc_student_progress_plan_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.upsc_student_progress
    ADD CONSTRAINT upsc_student_progress_plan_id_fkey FOREIGN KEY (plan_id) REFERENCES public.upsc_plans(id) ON DELETE CASCADE;


--
-- TOC entry 6971 (class 2606 OID 21359)
-- Name: upsc_student_progress upsc_student_progress_student_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.upsc_student_progress
    ADD CONSTRAINT upsc_student_progress_student_id_fkey FOREIGN KEY (student_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- TOC entry 6909 (class 2606 OID 28372)
-- Name: upsc_timer_configs upsc_timer_configs_batch_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.upsc_timer_configs
    ADD CONSTRAINT upsc_timer_configs_batch_id_fkey FOREIGN KEY (batch_id) REFERENCES public.upsc_batches(id);


--
-- TOC entry 6910 (class 2606 OID 20775)
-- Name: upsc_timer_configs upsc_timer_configs_created_by_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.upsc_timer_configs
    ADD CONSTRAINT upsc_timer_configs_created_by_id_fkey FOREIGN KEY (created_by_id) REFERENCES public.users(id);


--
-- TOC entry 7062 (class 2606 OID 28379)
-- Name: upsc_unlock_transactions upsc_unlock_transactions_profile_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.upsc_unlock_transactions
    ADD CONSTRAINT upsc_unlock_transactions_profile_id_fkey FOREIGN KEY (profile_id) REFERENCES public.upsc_cognitive_profiles(id);


--
-- TOC entry 6792 (class 2606 OID 19413)
-- Name: user_achievements user_achievements_achievement_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_achievements
    ADD CONSTRAINT user_achievements_achievement_id_fkey FOREIGN KEY (achievement_id) REFERENCES public.achievements(id) ON DELETE CASCADE;


--
-- TOC entry 6793 (class 2606 OID 19408)
-- Name: user_achievements user_achievements_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_achievements
    ADD CONSTRAINT user_achievements_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- TOC entry 6774 (class 2606 OID 19131)
-- Name: user_activities user_activities_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_activities
    ADD CONSTRAINT user_activities_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- TOC entry 7082 (class 2606 OID 28417)
-- Name: user_activity_sessions user_activity_sessions_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_activity_sessions
    ADD CONSTRAINT user_activity_sessions_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- TOC entry 6794 (class 2606 OID 19436)
-- Name: user_challenges user_challenges_challenge_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_challenges
    ADD CONSTRAINT user_challenges_challenge_id_fkey FOREIGN KEY (challenge_id) REFERENCES public.challenges(id) ON DELETE CASCADE;


--
-- TOC entry 6795 (class 2606 OID 19431)
-- Name: user_challenges user_challenges_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_challenges
    ADD CONSTRAINT user_challenges_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- TOC entry 6778 (class 2606 OID 19199)
-- Name: user_email_preferences user_email_preferences_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_email_preferences
    ADD CONSTRAINT user_email_preferences_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- TOC entry 6819 (class 2606 OID 19795)
-- Name: user_permissions user_permissions_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_permissions
    ADD CONSTRAINT user_permissions_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- TOC entry 6775 (class 2606 OID 19149)
-- Name: user_preferences user_preferences_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_preferences
    ADD CONSTRAINT user_preferences_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- TOC entry 6753 (class 2606 OID 18853)
-- Name: user_rewards user_rewards_reward_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_rewards
    ADD CONSTRAINT user_rewards_reward_id_fkey FOREIGN KEY (reward_id) REFERENCES public.rewards(id);


--
-- TOC entry 6754 (class 2606 OID 18848)
-- Name: user_rewards user_rewards_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_rewards
    ADD CONSTRAINT user_rewards_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- TOC entry 6746 (class 2606 OID 18756)
-- Name: user_roles user_roles_role_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_roles
    ADD CONSTRAINT user_roles_role_id_fkey FOREIGN KEY (role_id) REFERENCES public.roles(id) ON DELETE CASCADE;


--
-- TOC entry 6747 (class 2606 OID 18751)
-- Name: user_roles user_roles_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_roles
    ADD CONSTRAINT user_roles_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- TOC entry 6820 (class 2606 OID 19813)
-- Name: user_sessions user_sessions_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_sessions
    ADD CONSTRAINT user_sessions_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- TOC entry 6783 (class 2606 OID 19288)
-- Name: user_subscriptions user_subscriptions_plan_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_subscriptions
    ADD CONSTRAINT user_subscriptions_plan_id_fkey FOREIGN KEY (plan_id) REFERENCES public.subscription_plans(id);


--
-- TOC entry 6784 (class 2606 OID 19283)
-- Name: user_subscriptions user_subscriptions_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_subscriptions
    ADD CONSTRAINT user_subscriptions_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- TOC entry 7054 (class 2606 OID 22394)
-- Name: user_topic_logs user_topic_logs_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_topic_logs
    ADD CONSTRAINT user_topic_logs_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- TOC entry 6739 (class 2606 OID 18657)
-- Name: users users_group_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_group_id_fkey FOREIGN KEY (group_id) REFERENCES public.groups(id);


--
-- TOC entry 6740 (class 2606 OID 18662)
-- Name: users users_organization_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_organization_id_fkey FOREIGN KEY (organization_id) REFERENCES public.organizations(id) ON DELETE SET NULL;


--
-- TOC entry 7072 (class 2606 OID 22637)
-- Name: voice_notes voice_notes_field_activity_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.voice_notes
    ADD CONSTRAINT voice_notes_field_activity_id_fkey FOREIGN KEY (field_activity_id) REFERENCES public.field_activities(id);


--
-- TOC entry 7073 (class 2606 OID 22632)
-- Name: voice_notes voice_notes_lead_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.voice_notes
    ADD CONSTRAINT voice_notes_lead_id_fkey FOREIGN KEY (lead_id) REFERENCES public.leads(id);


--
-- TOC entry 7074 (class 2606 OID 22627)
-- Name: voice_notes voice_notes_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.voice_notes
    ADD CONSTRAINT voice_notes_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- TOC entry 6962 (class 2606 OID 21301)
-- Name: workflow_executions workflow_executions_current_step_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.workflow_executions
    ADD CONSTRAINT workflow_executions_current_step_id_fkey FOREIGN KEY (current_step_id) REFERENCES public.workflow_steps(id);


--
-- TOC entry 6963 (class 2606 OID 21296)
-- Name: workflow_executions workflow_executions_lead_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.workflow_executions
    ADD CONSTRAINT workflow_executions_lead_id_fkey FOREIGN KEY (lead_id) REFERENCES public.leads(id);


--
-- TOC entry 6964 (class 2606 OID 21291)
-- Name: workflow_executions workflow_executions_workflow_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.workflow_executions
    ADD CONSTRAINT workflow_executions_workflow_id_fkey FOREIGN KEY (workflow_id) REFERENCES public.marketing_workflows(id);


--
-- TOC entry 6900 (class 2606 OID 20696)
-- Name: workflow_steps workflow_steps_assign_to_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.workflow_steps
    ADD CONSTRAINT workflow_steps_assign_to_user_id_fkey FOREIGN KEY (assign_to_user_id) REFERENCES public.users(id);


--
-- TOC entry 6901 (class 2606 OID 20691)
-- Name: workflow_steps workflow_steps_template_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.workflow_steps
    ADD CONSTRAINT workflow_steps_template_id_fkey FOREIGN KEY (template_id) REFERENCES public.communication_templates(id);


--
-- TOC entry 6902 (class 2606 OID 20686)
-- Name: workflow_steps workflow_steps_workflow_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.workflow_steps
    ADD CONSTRAINT workflow_steps_workflow_id_fkey FOREIGN KEY (workflow_id) REFERENCES public.marketing_workflows(id);


-- Completed on 2026-03-17 10:07:58 UTC

--
-- PostgreSQL database dump complete
--

\unrestrict jEOGfPLklacaRF6m2rmLCrnm16bLIas8sZjdMQ99rtraXgTpoQqVIdZdeYxh4Yx

