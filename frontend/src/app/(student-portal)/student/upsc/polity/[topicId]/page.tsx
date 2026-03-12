"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import {
    ArrowLeft, BookOpen, CheckCircle2, ChevronRight, ChevronLeft,
    FileText, Brain, Target, Clock, Sparkles
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TOPIC_TITLES, POLITY_PARTS, getPartById, getPartColors, PartId } from "@/components/upsc/platform/polity/data/polity-types-95";
import MakingConstitutionModuleV2 from "@/components/upsc/platform/polity/MakingConstitutionModuleV2";
import SalientFeaturesModule from "@/components/upsc/platform/polity/SalientFeaturesModule";
import PreambleModule from "@/components/upsc/platform/polity/PreambleModule";
import UnionAndItsTerritoryModule from "@/components/upsc/platform/polity/UnionAndItsTerritoryModule";
import CitizenshipModule from "@/components/upsc/platform/polity/CitizenshipModule";
import FundamentalRightsModule from "@/components/upsc/platform/polity/FundamentalRightsModule";
import DPSPModule from "@/components/upsc/platform/polity/DPSPModule";
import FundamentalDutiesModule from "@/components/upsc/platform/polity/FundamentalDutiesModule";
import AmendmentModule from "@/components/upsc/platform/polity/AmendmentModule";
import BasicStructureModule from "@/components/upsc/platform/polity/BasicStructureModule";
import ParliamentarySystemModule from "@/components/upsc/platform/polity/ParliamentarySystemModule";
import FederalSystemModule from "@/components/upsc/platform/polity/FederalSystemModule";
import CentreStateRelationsModule from "@/components/upsc/platform/polity/CentreStateRelationsModule";
import InterStateRelationsModule from "@/components/upsc/platform/polity/InterStateRelationsModule";
import EmergencyProvisionsModule from "@/components/upsc/platform/polity/EmergencyProvisionsModule";
import PresidentModule from "@/components/upsc/platform/polity/PresidentModule";
import VicePresidentModule from "@/components/upsc/platform/polity/VicePresidentModule";
import PrimeMinisterModule from "@/components/upsc/platform/polity/PrimeMinisterModule";
import CentralCouncilModule from "@/components/upsc/platform/polity/CentralCouncilModule";
import ParliamentModule from "@/components/upsc/platform/polity/ParliamentModule";
import SupremeCourtModule from "@/components/upsc/platform/polity/SupremeCourtModule";
import JudicialReviewModule from "@/components/upsc/platform/polity/JudicialReviewModule";
import JudicialActivismModule from "@/components/upsc/platform/polity/JudicialActivismModule";
import PubIntLitigationModule from "@/components/upsc/platform/polity/PubIntLitigationModule";
import GovernorModule from "@/components/upsc/platform/polity/GovernorModule";
import ChiefMinisterModule from "@/components/upsc/platform/polity/ChiefMinisterModule";
import StateCouncilModule from "@/components/upsc/platform/polity/StateCouncilModule";
import StateLegislatureModule from "@/components/upsc/platform/polity/StateLegislatureModule";
import HighCourtModule from "@/components/upsc/platform/polity/HighCourtModule";
import SubordinateCourtsModule from "@/components/upsc/platform/polity/SubordinateCourtsModule";

import PanchayatiRajModule from "@/components/upsc/platform/polity/PanchayatiRajModule";
import MunicipalitiesModule from "@/components/upsc/platform/polity/MunicipalitiesModule";
import UnionTerritoriesModule from "@/components/upsc/platform/polity/UnionTerritoriesModule";
import ScheduledTribalAreasModule from "@/components/upsc/platform/polity/ScheduledTribalAreasModule";
import ElectionCommissionModule from "@/components/upsc/platform/polity/ElectionCommissionModule";
import UPSCModule from "@/components/upsc/platform/polity/UPSCModule";
import SPSCModule from "@/components/upsc/platform/polity/SPSCModule";
import FinanceCommissionModule from "@/components/upsc/platform/polity/FinanceCommissionModule";
import GSTCouncilModule from "@/components/upsc/platform/polity/GSTCouncilModule";
import NCSCModule from "@/components/upsc/platform/polity/NCSCModule";
import NCSTModule from "@/components/upsc/platform/polity/NCSTModule";
import NCBCModule from "@/components/upsc/platform/polity/NCBCModule";
import LinguisticMinoritiesModule from "@/components/upsc/platform/polity/LinguisticMinoritiesModule";
import CAGModule from "@/components/upsc/platform/polity/CAGModule";
import AttorneyGeneralModule from "@/components/upsc/platform/polity/AttorneyGeneralModule";
import AdvocateGeneralModule from "@/components/upsc/platform/polity/AdvocateGeneralModule";
import NITIAayogModule from "@/components/upsc/platform/polity/NITIAayogModule";
import NHRCModule from "@/components/upsc/platform/polity/NHRCModule";
import SHRCModule from "@/components/upsc/platform/polity/SHRCModule";
import CICModule from "@/components/upsc/platform/polity/CICModule";
import SICModule from "@/components/upsc/platform/polity/SICModule";
import CVCModule from "@/components/upsc/platform/polity/CVCModule";
import CBIModule from "@/components/upsc/platform/polity/CBIModule";
import LokpalModule from "@/components/upsc/platform/polity/LokpalModule";
import NIAModule from "@/components/upsc/platform/polity/NIAModule";
import NDMAModule from "@/components/upsc/platform/polity/NDMAModule";
import CooperativeSocietiesModule from "@/components/upsc/platform/polity/CooperativeSocietiesModule";
import OfficialLanguageModule from "@/components/upsc/platform/polity/OfficialLanguageModule";
import PublicServicesModule from "@/components/upsc/platform/polity/PublicServicesModule";
import RightsLiabilitiesModule from "@/components/upsc/platform/polity/RightsLiabilitiesModule";
import HindiTextModule from "@/components/upsc/platform/polity/HindiTextModule";
import CertainClassesModule from "@/components/upsc/platform/polity/CertainClassesModule";
import PoliticalPartiesModule from "@/components/upsc/platform/polity/PoliticalPartiesModule";
import ElectionsModule from "@/components/upsc/platform/polity/ElectionsModule";
import ElectoralReformsModule from "@/components/upsc/platform/polity/ElectoralReformsModule";
import AntiDefectionLawModule from "@/components/upsc/platform/polity/AntiDefectionLawModule";
import PressureGroupsModule from "@/components/upsc/platform/polity/PressureGroupsModule";
import NationalIntegrationModule from "@/components/upsc/platform/polity/NationalIntegrationModule";
import ForeignPolicyModule from "@/components/upsc/platform/polity/ForeignPolicyModule";
import NCRWCModule from "@/components/upsc/platform/polity/NCRWCModule";
import TribunalsModule from "@/components/upsc/platform/polity/TribunalsModule";
import SpecialProvisionsStatesModule from "@/components/upsc/platform/polity/SpecialProvisionsStatesModule";
import RegionalPartiesModule from "@/components/upsc/platform/polity/RegionalPartiesModule";
import ElectionLawsModule from "@/components/upsc/platform/polity/ElectionLawsModule";
import VotingBehaviourModule from "@/components/upsc/platform/polity/VotingBehaviourModule";
import CoalitionGovtModule from "@/components/upsc/platform/polity/CoalitionGovtModule";
import LandmarkJudgementsModule from "@/components/upsc/platform/polity/LandmarkJudgementsModule";
import ScopeOfArticle21Module from "@/components/upsc/platform/polity/ScopeOfArticle21Module";
import AmendmentJudgementsModule from "@/components/upsc/platform/polity/AmendmentJudgementsModule";
import ConstitutionalDoctrinesModule from "@/components/upsc/platform/polity/ConstitutionalDoctrinesModule";
import CabinetCommitteesModule from "@/components/upsc/platform/polity/CabinetCommitteesModule";
import WorldConstitutionsModule from "@/components/upsc/platform/polity/WorldConstitutionsModule";
import HistoryModule from "@/components/upsc/platform/polity/HistoryModule";
import ChapterCurrentAffairsSection from "@/components/upsc/platform/polity/revision/ChapterCurrentAffairsSection";
import ChapterLevelGame from "@/components/upsc/platform/polity/revision/ChapterLevelGame";
import TopicPYQWidget from "@/components/upsc/platform/polity/revision/TopicPYQWidget";
import GenericPremiumModule from "@/components/upsc/platform/polity/GenericPremiumModule";
import { TOPICS_DATA } from "@/components/upsc/platform/polity/data/topics";

export default function TopicViewerPage() {
    const params = useParams();
    const router = useRouter();
    const topicId = parseInt(params.topicId as string);

    const [isCompleted, setIsCompleted] = useState(false);
    const [topicData, setTopicData] = useState<any>(null);

    // Get topic info
    const topic = TOPIC_TITLES.find(t => t.id === topicId);
    const part = topic ? getPartById(topic.part) : null;
    const colors = part ? getPartColors(part.color) : getPartColors('blue');

    // Load progress and topic content
    useEffect(() => {
        // Load progress
        const saved = localStorage.getItem('polity_95_progress');
        if (saved) {
            const progress = JSON.parse(saved);
            setIsCompleted(progress[topicId]?.completed || false);
        }

        // Load authored content if available
        import("@/components/upsc/platform/polity/data/topics").then((mod) => {
            if (mod.TOPICS_DATA[topicId]) {
                setTopicData(mod.TOPICS_DATA[topicId]);
            } else {
                setTopicData(null);
            }
        }).catch(err => {
            console.error("Failed to load topic data:", err);
            setTopicData(null);
        });
    }, [topicId]);

    // Mark as completed
    const markComplete = () => {
        const saved = localStorage.getItem('polity_95_progress');
        const progress = saved ? JSON.parse(saved) : {};
        progress[topicId] = {
            ...progress[topicId],
            completed: true,
            lastViewed: new Date().toISOString()
        };
        localStorage.setItem('polity_95_progress', JSON.stringify(progress));
        setIsCompleted(true);
    };

    // Navigate to adjacent topics
    const goToTopic = (id: number) => {
        if (id >= 1 && id <= 95) {
            router.push(`/student/upsc/polity/${id}`);
        }
    };

    if (!topic || !part) {
        return (
            <div className="p-6 text-center">
                <h2 className="text-xl font-bold text-red-600">Topic not found</h2>
                <Button onClick={() => router.push('/student/upsc/polity')} className="mt-4">
                    Back to Topics
                </Button>
            </div>
        );
    }

    const isNew = topicId >= 85;

    return (
        <div className="max-w-5xl mx-auto p-4 md:p-6 space-y-6">
            {/* Navigation Header */}
            <div className="flex items-center justify-between">
                <Button
                    variant="ghost"
                    onClick={() => router.push('/student/upsc/polity')}
                    className="flex items-center gap-2"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Back to Topics
                </Button>
                <div className="flex items-center gap-2">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => router.push(`/student/upsc/polity/ai-tutor?topicId=${topicId}`)}
                        className="hidden md:flex gap-2 text-purple-600 border-purple-200 hover:bg-purple-50"
                    >
                        <Sparkles className="h-4 w-4" />
                        Ask Dr. Ambedkar
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => goToTopic(topicId - 1)}
                        disabled={topicId <= 1}
                    >
                        <ChevronLeft className="h-4 w-4" />
                        Prev
                    </Button>
                    <span className="text-sm text-gray-500">{topicId} / 95</span>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => goToTopic(topicId + 1)}
                        disabled={topicId >= 95}
                    >
                        Next
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                </div>
            </div>

            {/* Topic Header - Special Module for History (Topic 1) */}
            {topicId === 1 ? (
                <HistoryModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={String(topicId)} />
            ) : topicId === 2 ? (
                <MakingConstitutionModuleV2 onComplete={markComplete} isCompleted={isCompleted} chapterNumber={String(topicId)} />
            ) : topicId === 4 ? (
                <SalientFeaturesModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={String(topicId)} />
            ) : topicId === 5 ? (
                <PreambleModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={String(topicId)} />
            ) : topicId === 6 ? (
                <UnionAndItsTerritoryModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={String(topicId)} />
            ) : topicId === 7 ? (
                <CitizenshipModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={String(topicId)} />
            ) : topicId === 8 ? (
                <FundamentalRightsModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={String(topicId)} />
            ) : topicId === 9 ? (
                <DPSPModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={String(topicId)} />
            ) : topicId === 10 ? (
                <FundamentalDutiesModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={String(topicId)} />
            ) : topicId === 11 ? (
                <AmendmentModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={String(topicId)} />
            ) : topicId === 12 ? (
                <BasicStructureModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={String(topicId)} />
            ) : topicId === 13 ? (
                <ParliamentarySystemModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={String(topicId)} />
            ) : topicId === 14 ? (
                <FederalSystemModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={String(topicId)} />
            ) : topicId === 15 ? (
                <CentreStateRelationsModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={String(topicId)} />
            ) : topicId === 16 ? (
                <InterStateRelationsModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={String(topicId)} />
            ) : topicId === 17 ? (
                <EmergencyProvisionsModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={String(topicId)} />
            ) : topicId === 18 ? (
                <PresidentModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={String(topicId)} />
            ) : topicId === 19 ? (
                <VicePresidentModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={String(topicId)} />
            ) : topicId === 20 ? (
                <PrimeMinisterModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={String(topicId)} />
            ) : topicId === 21 ? (
                <CentralCouncilModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={String(topicId)} />
            ) : topicId === 22 ? (
                <CabinetCommitteesModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={String(topicId)} />
            ) : topicId === 23 ? (
                <ParliamentModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={String(topicId)} />
            ) : topicId === 26 ? (
                <SupremeCourtModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={String(topicId)} />
            ) : topicId === 27 ? (
                <JudicialReviewModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={String(topicId)} />
            ) : topicId === 28 ? (
                <JudicialActivismModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={String(topicId)} />
            ) : topicId === 29 ? (
                <PubIntLitigationModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={String(topicId)} />
            ) : topicId === 30 ? (
                <GovernorModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={String(topicId)} />
            ) : topicId === 31 ? (
                <ChiefMinisterModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={String(topicId)} />
            ) : topicId === 32 ? (
                <StateCouncilModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={String(topicId)} />
            ) : topicId === 33 ? (
                <StateLegislatureModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={String(topicId)} />
            ) : topicId === 34 ? (
                <HighCourtModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={String(topicId)} />
            ) : topicId === 35 ? (
                <SubordinateCourtsModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={String(topicId)} />
            ) : topicId === 36 ? (
                <TribunalsModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber="36" />
            ) : topicId === 39 ? (
                <PanchayatiRajModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={String(topicId)} />
            ) : topicId === 40 ? (
                <MunicipalitiesModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={String(topicId)} />
            ) : topicId === 41 ? (
                <UnionTerritoriesModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={String(topicId)} />
            ) : topicId === 42 ? (
                <ScheduledTribalAreasModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={String(topicId)} />
            ) : topicId === 43 ? (
                <ElectionCommissionModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber="43" />
            ) : topicId === 44 ? (
                <UPSCModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={String(topicId)} />
            ) : topicId === 45 ? (
                <SPSCModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={String(topicId)} />
            ) : topicId === 46 ? (
                <FinanceCommissionModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={String(topicId)} />
            ) : topicId === 47 ? (
                <GSTCouncilModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={String(topicId)} />
            ) : topicId === 48 ? (
                <NCSCModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={String(topicId)} />
            ) : topicId === 49 ? (
                <NCSTModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={String(topicId)} />
            ) : topicId === 50 ? (
                <NCBCModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={String(topicId)} />
            ) : topicId === 51 ? (
                <LinguisticMinoritiesModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={String(topicId)} />
            ) : topicId === 52 ? (
                <CAGModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={String(topicId)} />
            ) : topicId === 53 ? (
                <AttorneyGeneralModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={String(topicId)} />
            ) : topicId === 54 ? (
                <AdvocateGeneralModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={String(topicId)} />
            ) : topicId === 56 ? (
                <NITIAayogModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={String(topicId)} />
            ) : topicId === 57 ? (
                <NHRCModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={String(topicId)} />
            ) : topicId === 58 ? (
                <SHRCModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={String(topicId)} />
            ) : topicId === 62 ? (
                <CICModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={String(topicId)} />
            ) : topicId === 63 ? (
                <SICModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={String(topicId)} />
            ) : topicId === 64 ? (
                <CVCModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={String(topicId)} />
            ) : topicId === 65 ? (
                <CBIModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={String(topicId)} />
            ) : topicId === 66 ? (
                <LokpalModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={String(topicId)} />
            ) : topicId === 67 ? (
                <NIAModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={String(topicId)} />
            ) : topicId === 68 ? (
                <NDMAModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={String(topicId)} />
            ) : topicId === 73 ? (
                <CooperativeSocietiesModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={String(topicId)} />
            ) : topicId === 74 ? (
                <OfficialLanguageModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={String(topicId)} />
            ) : topicId === 75 ? (
                <PublicServicesModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={String(topicId)} />
            ) : topicId === 76 ? (
                <RightsLiabilitiesModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={String(topicId)} />
            ) : topicId === 77 ? (
                <CertainClassesModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={String(topicId)} />
            ) : topicId === 78 ? (
                <SpecialProvisionsStatesModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber="78" />
            ) : topicId === 79 ? (
                <PoliticalPartiesModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={String(topicId)} />
            ) : topicId === 80 ? (
                <RegionalPartiesModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={String(topicId)} />
            ) : topicId === 81 ? (
                <ElectionsModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={String(topicId)} />
            ) : topicId === 82 ? (
                <ElectionLawsModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={String(topicId)} />
            ) : topicId === 83 ? (
                <ElectoralReformsModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={String(topicId)} />
            ) : topicId === 84 ? (
                <VotingBehaviourModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={String(topicId)} />
            ) : topicId === 85 ? (
                <CoalitionGovtModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={String(topicId)} />
            ) : topicId === 86 ? (
                <AntiDefectionLawModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={String(topicId)} />
            ) : topicId === 87 ? (
                <PressureGroupsModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={String(topicId)} />
            ) : topicId === 88 ? (
                <NationalIntegrationModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={String(topicId)} />
            ) : topicId === 89 ? (
                <ForeignPolicyModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={String(topicId)} />
            ) : topicId === 90 ? (
                <NCRWCModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber="90" />
            ) : topicId === 91 ? (
                <LandmarkJudgementsModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={String(topicId)} />
            ) : topicId === 92 ? (
                <ScopeOfArticle21Module onComplete={markComplete} isCompleted={isCompleted} chapterNumber={String(topicId)} />
            ) : topicId === 93 ? (
                <AmendmentJudgementsModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={String(topicId)} />
            ) : topicId === 94 ? (
                <ConstitutionalDoctrinesModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={String(topicId)} />
            ) : topicId === 95 ? (
                <WorldConstitutionsModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={String(topicId)} />
            ) : (
                <GenericPremiumModule
                    topicId={topicId}
                    title={topic.title}
                    onComplete={markComplete}
                    isCompleted={isCompleted}
                    staticFocus={topicData?.staticFocus ? [topicData.staticFocus] : []}
                    keyConcepts={topicData?.keyConcepts?.map((c: any) => c.term + ": " + c.definition) || []}
                    prelimsPointers={topicData?.prelimsPointers?.map((p: any) => p.fact) || []}
                />
            )}

            {/* Centralized Practice & Updates Footer (Restoring "Fantastic UI" for all 95 Chapters) */}
            <div className="mt-12 space-y-12 border-t-2 border-slate-100 pt-12 pb-24">
                <div className="text-center space-y-2">
                    <Badge variant="outline" className="text-indigo-600 bg-indigo-50 border-indigo-200 uppercase tracking-widest text-[10px] font-black">
                        Mastery & Updates
                    </Badge>
                    <h2 className="text-3xl font-black text-slate-900 leading-tight">Practice & Recent Developments</h2>
                    <p className="text-slate-500 max-w-lg mx-auto text-sm">
                        Master the static concepts with Level-wise MCQs and stay updated with the latest Constitutional developments.
                    </p>
                </div>

                <div className="grid gap-12">
                    {/* Chapter-wise Current Affairs (The "Reflecting Data" fix) */}
                    <Card className="border-0 shadow-none bg-transparent">
                        <ChapterCurrentAffairsSection topicId={topicId} />
                    </Card>

                    {/* Level 1, 2, 3 MCQs (The "10,000 Questions" fix) */}
                    <Card className="border-2 border-indigo-100 p-6 rounded-3xl bg-white shadow-xl shadow-indigo-100/50">
                        <ChapterLevelGame topicId={topicId} onComplete={(level, score) => {
                            console.log(`Level ${level} completed with score ${score}`);
                        }} />
                    </Card>

                    {/* UPSC Past Year Questions */}
                    <Card className="border-0 shadow-none bg-transparent">
                        <TopicPYQWidget topicId={topicId} />
                    </Card>
                </div>
            </div>


        </div>
    );
}
