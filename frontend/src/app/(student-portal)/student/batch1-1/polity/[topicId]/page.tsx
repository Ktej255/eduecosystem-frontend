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
import { TOPIC_TITLES, POLITY_PARTS, getPartById, getPartColors, PartId } from "@/components/batch1-1/polity/data/polity-types-95";
import MakingConstitutionModuleV2 from "@/components/batch1-1/polity/MakingConstitutionModuleV2";
import SalientFeaturesModule from "@/components/batch1-1/polity/SalientFeaturesModule";
import PreambleModule from "@/components/batch1-1/polity/PreambleModule";
import UnionAndItsTerritoryModule from "@/components/batch1-1/polity/UnionAndItsTerritoryModule";
import CitizenshipModule from "@/components/batch1-1/polity/CitizenshipModule";
import FundamentalRightsModule from "@/components/batch1-1/polity/FundamentalRightsModule";
import DPSPModule from "@/components/batch1-1/polity/DPSPModule";
import FundamentalDutiesModule from "@/components/batch1-1/polity/FundamentalDutiesModule";
import AmendmentModule from "@/components/batch1-1/polity/AmendmentModule";
import BasicStructureModule from "@/components/batch1-1/polity/BasicStructureModule";
import ParliamentarySystemModule from "@/components/batch1-1/polity/ParliamentarySystemModule";
import FederalSystemModule from "@/components/batch1-1/polity/FederalSystemModule";
import CentreStateRelationsModule from "@/components/batch1-1/polity/CentreStateRelationsModule";
import InterStateRelationsModule from "@/components/batch1-1/polity/InterStateRelationsModule";
import EmergencyProvisionsModule from "@/components/batch1-1/polity/EmergencyProvisionsModule";
import PresidentModule from "@/components/batch1-1/polity/PresidentModule";
import VicePresidentModule from "@/components/batch1-1/polity/VicePresidentModule";
import PrimeMinisterModule from "@/components/batch1-1/polity/PrimeMinisterModule";
import CentralCouncilModule from "@/components/batch1-1/polity/CentralCouncilModule";
import ParliamentModule from "@/components/batch1-1/polity/ParliamentModule";
import SupremeCourtModule from "@/components/batch1-1/polity/SupremeCourtModule";
import JudicialReviewModule from "@/components/batch1-1/polity/JudicialReviewModule";
import JudicialActivismModule from "@/components/batch1-1/polity/JudicialActivismModule";
import PubIntLitigationModule from "@/components/batch1-1/polity/PubIntLitigationModule";
import GovernorModule from "@/components/batch1-1/polity/GovernorModule";
import ChiefMinisterModule from "@/components/batch1-1/polity/ChiefMinisterModule";
import StateCouncilModule from "@/components/batch1-1/polity/StateCouncilModule";
import StateLegislatureModule from "@/components/batch1-1/polity/StateLegislatureModule";
import HighCourtModule from "@/components/batch1-1/polity/HighCourtModule";
import SubordinateCourtsModule from "@/components/batch1-1/polity/SubordinateCourtsModule";

import PanchayatiRajModule from "@/components/batch1-1/polity/PanchayatiRajModule";
import MunicipalitiesModule from "@/components/batch1-1/polity/MunicipalitiesModule";
import UnionTerritoriesModule from "@/components/batch1-1/polity/UnionTerritoriesModule";
import ScheduledTribalAreasModule from "@/components/batch1-1/polity/ScheduledTribalAreasModule";
import ElectionCommissionModule from "@/components/batch1-1/polity/ElectionCommissionModule";
import UPSCModule from "@/components/batch1-1/polity/UPSCModule";
import SPSCModule from "@/components/batch1-1/polity/SPSCModule";
import FinanceCommissionModule from "@/components/batch1-1/polity/FinanceCommissionModule";
import GSTCouncilModule from "@/components/batch1-1/polity/GSTCouncilModule";
import NCSCModule from "@/components/batch1-1/polity/NCSCModule";
import NCSTModule from "@/components/batch1-1/polity/NCSTModule";
import NCBCModule from "@/components/batch1-1/polity/NCBCModule";
import LinguisticMinoritiesModule from "@/components/batch1-1/polity/LinguisticMinoritiesModule";
import CAGModule from "@/components/batch1-1/polity/CAGModule";
import AttorneyGeneralModule from "@/components/batch1-1/polity/AttorneyGeneralModule";
import AdvocateGeneralModule from "@/components/batch1-1/polity/AdvocateGeneralModule";
import NITIAayogModule from "@/components/batch1-1/polity/NITIAayogModule";
import NHRCModule from "@/components/batch1-1/polity/NHRCModule";
import SHRCModule from "@/components/batch1-1/polity/SHRCModule";
import CICModule from "@/components/batch1-1/polity/CICModule";
import SICModule from "@/components/batch1-1/polity/SICModule";
import CVCModule from "@/components/batch1-1/polity/CVCModule";
import CBIModule from "@/components/batch1-1/polity/CBIModule";
import LokpalModule from "@/components/batch1-1/polity/LokpalModule";
import NIAModule from "@/components/batch1-1/polity/NIAModule";
import NDMAModule from "@/components/batch1-1/polity/NDMAModule";
import CooperativeSocietiesModule from "@/components/batch1-1/polity/CooperativeSocietiesModule";
import OfficialLanguageModule from "@/components/batch1-1/polity/OfficialLanguageModule";
import PublicServicesModule from "@/components/batch1-1/polity/PublicServicesModule";
import RightsLiabilitiesModule from "@/components/batch1-1/polity/RightsLiabilitiesModule";
import HindiTextModule from "@/components/batch1-1/polity/HindiTextModule";
import CertainClassesModule from "@/components/batch1-1/polity/CertainClassesModule";
import PoliticalPartiesModule from "@/components/batch1-1/polity/PoliticalPartiesModule";
import ElectionsModule from "@/components/batch1-1/polity/ElectionsModule";
import ElectoralReformsModule from "@/components/batch1-1/polity/ElectoralReformsModule";
import AntiDefectionLawModule from "@/components/batch1-1/polity/AntiDefectionLawModule";
import PressureGroupsModule from "@/components/batch1-1/polity/PressureGroupsModule";
import NationalIntegrationModule from "@/components/batch1-1/polity/NationalIntegrationModule";
import ForeignPolicyModule from "@/components/batch1-1/polity/ForeignPolicyModule";
import NCRWCModule from "@/components/batch1-1/polity/NCRWCModule";
import TribunalsModule from "@/components/batch1-1/polity/TribunalsModule";
import SpecialProvisionsStatesModule from "@/components/batch1-1/polity/SpecialProvisionsStatesModule";
import RegionalPartiesModule from "@/components/batch1-1/polity/RegionalPartiesModule";
import ElectionLawsModule from "@/components/batch1-1/polity/ElectionLawsModule";
import VotingBehaviourModule from "@/components/batch1-1/polity/VotingBehaviourModule";
import CoalitionGovtModule from "@/components/batch1-1/polity/CoalitionGovtModule";
import LandmarkJudgementsModule from "@/components/batch1-1/polity/LandmarkJudgementsModule";
import ScopeOfArticle21Module from "@/components/batch1-1/polity/ScopeOfArticle21Module";
import AmendmentJudgementsModule from "@/components/batch1-1/polity/AmendmentJudgementsModule";
import ConstitutionalDoctrinesModule from "@/components/batch1-1/polity/ConstitutionalDoctrinesModule";
import CabinetCommitteesModule from "@/components/batch1-1/polity/CabinetCommitteesModule";
import WorldConstitutionsModule from "@/components/batch1-1/polity/WorldConstitutionsModule";
import HistoryModule from "@/components/batch1-1/polity/HistoryModule";
import ChapterCurrentAffairsSection from "@/components/batch1-1/polity/revision/ChapterCurrentAffairsSection";
import ChapterLevelGame from "@/components/batch1-1/polity/revision/ChapterLevelGame";
import TopicPYQWidget from "@/components/batch1-1/polity/revision/TopicPYQWidget";
import GenericPremiumModule from "@/components/batch1-1/polity/GenericPremiumModule";
import { TOPICS_DATA } from "@/components/batch1-1/polity/data/topics";

export default function TopicViewerPage() {
    const params = useParams();
    const router = useRouter();
    const topicId = Number(params.topicId);

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
            setIsCompleted(progress[topicId.toString()]?.completed || false);
        }

        // Load authored content if available
        import("@/components/batch1-1/polity/data/topics").then((mod) => {
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
        progress[topicId.toString()] = {
            ...progress[topicId.toString()],
            completed: true,
            lastViewed: new Date().toISOString()
        };
        localStorage.setItem('polity_95_progress', JSON.stringify(progress));
        setIsCompleted(true);
    };

    // Navigate to adjacent topics
    const goToTopic = (id: number) => {
        if (id >= 1 && id <= 95) {
            router.push(`/student/batch1-1/polity/${id}`);
        }
    };

    if (!topic || !part) {
        return (
            <div className="p-6 text-center">
                <h2 className="text-xl font-bold text-red-600">Topic not found</h2>
                <Button onClick={() => router.push('/student/batch1-1/polity')} className="mt-4">
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
                    onClick={() => router.push('/student/batch1-1/polity')}
                    className="flex items-center gap-2"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Back to Topics
                </Button>
                <div className="flex items-center gap-2">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => router.push(`/student/batch1-1/polity/ai-tutor?topicId=${topicId}`)}
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
                <HistoryModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={topicId.toString()} />
            ) : topicId === 2 ? (
                <MakingConstitutionModuleV2 onComplete={markComplete} isCompleted={isCompleted} chapterNumber={topicId.toString()} />
            ) : topicId === 4 ? (
                <SalientFeaturesModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={topicId.toString()} />
            ) : topicId === 5 ? (
                <PreambleModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={topicId.toString()} />
            ) : topicId === 6 ? (
                <UnionAndItsTerritoryModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={topicId.toString()} />
            ) : topicId === 7 ? (
                <CitizenshipModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={topicId.toString()} />
            ) : topicId === 8 ? (
                <FundamentalRightsModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={topicId.toString()} />
            ) : topicId === 9 ? (
                <DPSPModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={topicId.toString()} />
            ) : topicId === 10 ? (
                <FundamentalDutiesModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={topicId.toString()} />
            ) : topicId === 11 ? (
                <AmendmentModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={topicId.toString()} />
            ) : topicId === 12 ? (
                <BasicStructureModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={topicId.toString()} />
            ) : topicId === 13 ? (
                <ParliamentarySystemModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={topicId.toString()} />
            ) : topicId === 14 ? (
                <FederalSystemModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={topicId.toString()} />
            ) : topicId === 15 ? (
                <CentreStateRelationsModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={topicId.toString()} />
            ) : topicId === 16 ? (
                <InterStateRelationsModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={topicId.toString()} />
            ) : topicId === 17 ? (
                <EmergencyProvisionsModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={topicId.toString()} />
            ) : topicId === 18 ? (
                <PresidentModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={topicId.toString()} />
            ) : topicId === 19 ? (
                <VicePresidentModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={topicId.toString()} />
            ) : topicId === 20 ? (
                <PrimeMinisterModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={topicId.toString()} />
            ) : topicId === 21 ? (
                <CentralCouncilModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={topicId.toString()} />
            ) : topicId === 22 ? (
                <CabinetCommitteesModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={topicId.toString()} />
            ) : topicId === 23 ? (
                <ParliamentModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={topicId.toString()} />
            ) : topicId === 26 ? (
                <SupremeCourtModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={topicId.toString()} />
            ) : topicId === 27 ? (
                <JudicialReviewModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={topicId.toString()} />
            ) : topicId === 28 ? (
                <JudicialActivismModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={topicId.toString()} />
            ) : topicId === 29 ? (
                <PubIntLitigationModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={topicId.toString()} />
            ) : topicId === 30 ? (
                <GovernorModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={topicId.toString()} />
            ) : topicId === 31 ? (
                <ChiefMinisterModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={topicId.toString()} />
            ) : topicId === 32 ? (
                <StateCouncilModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={topicId.toString()} />
            ) : topicId === 33 ? (
                <StateLegislatureModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={topicId.toString()} />
            ) : topicId === 34 ? (
                <HighCourtModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={topicId.toString()} />
            ) : topicId === 35 ? (
                <SubordinateCourtsModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={topicId.toString()} />
            ) : topicId === 36 ? (
                <TribunalsModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={topicId.toString()} />
            ) : topicId === 39 ? (
                <PanchayatiRajModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={topicId.toString()} />
            ) : topicId === 40 ? (
                <MunicipalitiesModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={topicId.toString()} />
            ) : topicId === 41 ? (
                <UnionTerritoriesModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={topicId.toString()} />
            ) : topicId === 42 ? (
                <ScheduledTribalAreasModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={topicId.toString()} />
            ) : topicId === 43 ? (
                <ElectionCommissionModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={topicId.toString()} />
            ) : topicId === 44 ? (
                <UPSCModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={topicId.toString()} />
            ) : topicId === 45 ? (
                <SPSCModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={topicId.toString()} />
            ) : topicId === 46 ? (
                <FinanceCommissionModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={topicId.toString()} />
            ) : topicId === 47 ? (
                <GSTCouncilModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={topicId.toString()} />
            ) : topicId === 48 ? (
                <NCSCModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={topicId.toString()} />
            ) : topicId === 49 ? (
                <NCSTModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={topicId.toString()} />
            ) : topicId === 50 ? (
                <NCBCModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={topicId.toString()} />
            ) : topicId === 51 ? (
                <LinguisticMinoritiesModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={topicId} />
            ) : topicId === 52 ? (
                <CAGModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={topicId.toString()} />
            ) : topicId === 53 ? (
                <AttorneyGeneralModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={topicId} />
            ) : topicId === 54 ? (
                <AdvocateGeneralModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={topicId.toString()} />
            ) : topicId === 56 ? (
                <NITIAayogModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={topicId.toString()} />
            ) : topicId === 57 ? (
                <NHRCModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={topicId.toString()} />
            ) : topicId === 58 ? (
                <SHRCModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={topicId.toString()} />
            ) : topicId === 62 ? (
                <CICModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={topicId.toString()} />
            ) : topicId === 63 ? (
                <SICModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={topicId.toString()} />
            ) : topicId === 64 ? (
                <CVCModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={topicId.toString()} />
            ) : topicId === 65 ? (
                <CBIModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={topicId.toString()} />
            ) : topicId === 66 ? (
                <LokpalModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={topicId.toString()} />
            ) : topicId === 67 ? (
                <NIAModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={topicId.toString()} />
            ) : topicId === 68 ? (
                <NDMAModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={topicId.toString()} />
            ) : topicId === 73 ? (
                <CooperativeSocietiesModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={topicId.toString()} />
            ) : topicId === 74 ? (
                <OfficialLanguageModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={topicId.toString()} />
            ) : topicId === 75 ? (
                <PublicServicesModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={topicId.toString()} />
            ) : topicId === 76 ? (
                <RightsLiabilitiesModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={topicId.toString()} />
            ) : topicId === 77 ? (
                <CertainClassesModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={topicId.toString()} />
            ) : topicId === 78 ? (
                <SpecialProvisionsStatesModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={topicId.toString()} />
            ) : topicId === 79 ? (
                <PoliticalPartiesModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={topicId.toString()} />
            ) : topicId === 80 ? (
                <RegionalPartiesModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={topicId.toString()} />
            ) : topicId === 81 ? (
                <ElectionsModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={topicId.toString()} />
            ) : topicId === 82 ? (
                <ElectionLawsModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={topicId.toString()} />
            ) : topicId === 83 ? (
                <ElectoralReformsModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={topicId.toString()} />
            ) : topicId === 84 ? (
                <VotingBehaviourModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={topicId.toString()} />
            ) : topicId === 85 ? (
                <CoalitionGovtModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={topicId.toString()} />
            ) : topicId === 86 ? (
                <AntiDefectionLawModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={topicId.toString()} />
            ) : topicId === 87 ? (
                <PressureGroupsModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={topicId.toString()} />
            ) : topicId === 88 ? (
                <NationalIntegrationModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={topicId.toString()} />
            ) : topicId === 89 ? (
                <ForeignPolicyModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={topicId.toString()} />
            ) : topicId === 90 ? (
                <NCRWCModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={topicId.toString()} />
            ) : topicId === 91 ? (
                <LandmarkJudgementsModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={topicId.toString()} />
            ) : topicId === 92 ? (
                <ScopeOfArticle21Module onComplete={markComplete} isCompleted={isCompleted} chapterNumber={topicId.toString()} />
            ) : topicId === 93 ? (
                <AmendmentJudgementsModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={topicId.toString()} />
            ) : topicId === 94 ? (
                <ConstitutionalDoctrinesModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={topicId.toString()} />
            ) : topicId === 95 ? (
                <WorldConstitutionsModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber={topicId.toString()} />
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
