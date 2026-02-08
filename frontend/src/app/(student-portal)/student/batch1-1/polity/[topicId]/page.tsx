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
                <HistoryModule onComplete={markComplete} isCompleted={isCompleted} />
            ) : topicId === 2 ? (
                <MakingConstitutionModuleV2 onComplete={markComplete} isCompleted={isCompleted} />
            ) : topicId === 4 ? (
                <SalientFeaturesModule onComplete={markComplete} isCompleted={isCompleted} />
            ) : topicId === 5 ? (
                <PreambleModule onComplete={markComplete} isCompleted={isCompleted} />
            ) : topicId === 6 ? (
                <UnionAndItsTerritoryModule onComplete={markComplete} isCompleted={isCompleted} />
            ) : topicId === 7 ? (
                <CitizenshipModule onComplete={markComplete} isCompleted={isCompleted} />
            ) : topicId === 8 ? (
                <FundamentalRightsModule onComplete={markComplete} isCompleted={isCompleted} />
            ) : topicId === 9 ? (
                <DPSPModule onComplete={markComplete} isCompleted={isCompleted} />
            ) : topicId === 10 ? (
                <FundamentalDutiesModule onComplete={markComplete} isCompleted={isCompleted} />
            ) : topicId === 11 ? (
                <AmendmentModule onComplete={markComplete} isCompleted={isCompleted} />
            ) : topicId === 12 ? (
                <BasicStructureModule onComplete={markComplete} isCompleted={isCompleted} />
            ) : topicId === 13 ? (
                <ParliamentarySystemModule onComplete={markComplete} isCompleted={isCompleted} />
            ) : topicId === 14 ? (
                <FederalSystemModule onComplete={markComplete} isCompleted={isCompleted} />
            ) : topicId === 15 ? (
                <CentreStateRelationsModule onComplete={markComplete} isCompleted={isCompleted} />
            ) : topicId === 16 ? (
                <InterStateRelationsModule onComplete={markComplete} isCompleted={isCompleted} />
            ) : topicId === 17 ? (
                <EmergencyProvisionsModule onComplete={markComplete} isCompleted={isCompleted} />
            ) : topicId === 18 ? (
                <PresidentModule onComplete={markComplete} isCompleted={isCompleted} />
            ) : topicId === 19 ? (
                <VicePresidentModule onComplete={markComplete} isCompleted={isCompleted} />
            ) : topicId === 20 ? (
                <PrimeMinisterModule onComplete={markComplete} isCompleted={isCompleted} />
            ) : topicId === 21 ? (
                <CentralCouncilModule onComplete={markComplete} isCompleted={isCompleted} />
            ) : topicId === 22 ? (
                <CabinetCommitteesModule onComplete={markComplete} isCompleted={isCompleted} />
            ) : topicId === 23 ? (
                <ParliamentModule onComplete={markComplete} isCompleted={isCompleted} />
            ) : topicId === 26 ? (
                <SupremeCourtModule onComplete={markComplete} isCompleted={isCompleted} />
            ) : topicId === 27 ? (
                <JudicialReviewModule onComplete={markComplete} isCompleted={isCompleted} />
            ) : topicId === 28 ? (
                <JudicialActivismModule onComplete={markComplete} isCompleted={isCompleted} />
            ) : topicId === 29 ? (
                <PubIntLitigationModule onComplete={markComplete} isCompleted={isCompleted} />
            ) : topicId === 30 ? (
                <GovernorModule onComplete={markComplete} isCompleted={isCompleted} />
            ) : topicId === 31 ? (
                <ChiefMinisterModule onComplete={markComplete} isCompleted={isCompleted} />
            ) : topicId === 32 ? (
                <StateCouncilModule onComplete={markComplete} isCompleted={isCompleted} />
            ) : topicId === 33 ? (
                <StateLegislatureModule onComplete={markComplete} isCompleted={isCompleted} />
            ) : topicId === 34 ? (
                <HighCourtModule onComplete={markComplete} isCompleted={isCompleted} />
            ) : topicId === 35 ? (
                <SubordinateCourtsModule onComplete={markComplete} isCompleted={isCompleted} />
            ) : topicId === 36 ? (
                <TribunalsModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber="36" />
            ) : topicId === 39 ? (
                <PanchayatiRajModule onComplete={markComplete} isCompleted={isCompleted} />
            ) : topicId === 40 ? (
                <MunicipalitiesModule onComplete={markComplete} isCompleted={isCompleted} />
            ) : topicId === 41 ? (
                <UnionTerritoriesModule onComplete={markComplete} isCompleted={isCompleted} />
            ) : topicId === 42 ? (
                <ScheduledTribalAreasModule onComplete={markComplete} isCompleted={isCompleted} />
            ) : topicId === 43 ? (
                <ElectionCommissionModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber="43" />
            ) : topicId === 44 ? (
                <UPSCModule onComplete={markComplete} isCompleted={isCompleted} />
            ) : topicId === 45 ? (
                <SPSCModule onComplete={markComplete} isCompleted={isCompleted} />
            ) : topicId === 46 ? (
                <FinanceCommissionModule onComplete={markComplete} isCompleted={isCompleted} />
            ) : topicId === 47 ? (
                <GSTCouncilModule onComplete={markComplete} isCompleted={isCompleted} />
            ) : topicId === 48 ? (
                <NCSCModule onComplete={markComplete} isCompleted={isCompleted} />
            ) : topicId === 49 ? (
                <NCSTModule onComplete={markComplete} isCompleted={isCompleted} />
            ) : topicId === 50 ? (
                <NCBCModule onComplete={markComplete} isCompleted={isCompleted} />
            ) : topicId === 51 ? (
                <LinguisticMinoritiesModule onComplete={markComplete} isCompleted={isCompleted} />
            ) : topicId === 52 ? (
                <CAGModule onComplete={markComplete} isCompleted={isCompleted} />
            ) : topicId === 53 ? (
                <AttorneyGeneralModule onComplete={markComplete} isCompleted={isCompleted} />
            ) : topicId === 54 ? (
                <AdvocateGeneralModule onComplete={markComplete} isCompleted={isCompleted} />
            ) : topicId === 56 ? (
                <NITIAayogModule onComplete={markComplete} isCompleted={isCompleted} />
            ) : topicId === 57 ? (
                <NHRCModule onComplete={markComplete} isCompleted={isCompleted} />
            ) : topicId === 58 ? (
                <SHRCModule onComplete={markComplete} isCompleted={isCompleted} />
            ) : topicId === 62 ? (
                <CICModule onComplete={markComplete} isCompleted={isCompleted} />
            ) : topicId === 63 ? (
                <SICModule onComplete={markComplete} isCompleted={isCompleted} />
            ) : topicId === 64 ? (
                <CVCModule onComplete={markComplete} isCompleted={isCompleted} />
            ) : topicId === 65 ? (
                <CBIModule onComplete={markComplete} isCompleted={isCompleted} />
            ) : topicId === 66 ? (
                <LokpalModule onComplete={markComplete} isCompleted={isCompleted} />
            ) : topicId === 67 ? (
                <NIAModule onComplete={markComplete} isCompleted={isCompleted} />
            ) : topicId === 68 ? (
                <NDMAModule onComplete={markComplete} isCompleted={isCompleted} />
            ) : topicId === 73 ? (
                <CooperativeSocietiesModule onComplete={markComplete} isCompleted={isCompleted} />
            ) : topicId === 74 ? (
                <OfficialLanguageModule onComplete={markComplete} isCompleted={isCompleted} />
            ) : topicId === 75 ? (
                <PublicServicesModule onComplete={markComplete} isCompleted={isCompleted} />
            ) : topicId === 76 ? (
                <RightsLiabilitiesModule onComplete={markComplete} isCompleted={isCompleted} />
            ) : topicId === 77 ? (
                <CertainClassesModule onComplete={markComplete} isCompleted={isCompleted} />
            ) : topicId === 78 ? (
                <SpecialProvisionsStatesModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber="78" />
            ) : topicId === 79 ? (
                <PoliticalPartiesModule onComplete={markComplete} isCompleted={isCompleted} />
            ) : topicId === 80 ? (
                <RegionalPartiesModule onComplete={markComplete} isCompleted={isCompleted} />
            ) : topicId === 81 ? (
                <ElectionsModule onComplete={markComplete} isCompleted={isCompleted} />
            ) : topicId === 82 ? (
                <ElectionLawsModule onComplete={markComplete} isCompleted={isCompleted} />
            ) : topicId === 83 ? (
                <ElectoralReformsModule onComplete={markComplete} isCompleted={isCompleted} />
            ) : topicId === 84 ? (
                <VotingBehaviourModule onComplete={markComplete} isCompleted={isCompleted} />
            ) : topicId === 85 ? (
                <CoalitionGovtModule onComplete={markComplete} isCompleted={isCompleted} />
            ) : topicId === 86 ? (
                <AntiDefectionLawModule onComplete={markComplete} isCompleted={isCompleted} />
            ) : topicId === 87 ? (
                <PressureGroupsModule onComplete={markComplete} isCompleted={isCompleted} />
            ) : topicId === 88 ? (
                <NationalIntegrationModule onComplete={markComplete} isCompleted={isCompleted} />
            ) : topicId === 89 ? (
                <ForeignPolicyModule onComplete={markComplete} isCompleted={isCompleted} />
            ) : topicId === 90 ? (
                <NCRWCModule onComplete={markComplete} isCompleted={isCompleted} chapterNumber="90" />
            ) : topicId === 91 ? (
                <LandmarkJudgementsModule onComplete={markComplete} isCompleted={isCompleted} />
            ) : topicId === 92 ? (
                <ScopeOfArticle21Module onComplete={markComplete} isCompleted={isCompleted} />
            ) : topicId === 93 ? (
                <AmendmentJudgementsModule onComplete={markComplete} isCompleted={isCompleted} />
            ) : topicId === 94 ? (
                <ConstitutionalDoctrinesModule onComplete={markComplete} isCompleted={isCompleted} />
            ) : topicId === 95 ? (
                <WorldConstitutionsModule onComplete={markComplete} isCompleted={isCompleted} />
            ) : (
                <Card className={`bg-gradient-to-r ${colors.gradient} text-white border-0 shadow-xl`}>
                    <CardContent className="p-6">
                        <div className="flex items-start justify-between">
                            <div className="flex items-start gap-4">
                                <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center text-3xl">
                                    {part.icon}
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <Badge variant="secondary" className="bg-white/20 text-white border-0">
                                            Part {part.number}
                                        </Badge>
                                        <Badge variant="secondary" className="bg-white/20 text-white border-0">
                                            Topic {topicId}
                                        </Badge>
                                        {isNew && (
                                            <Badge className="bg-purple-500 text-white">
                                                <Sparkles className="h-3 w-3 mr-1" />
                                                New
                                            </Badge>
                                        )}
                                    </div>
                                    <h1 className="text-2xl md:text-3xl font-bold">{topic.title}</h1>
                                    <p className="text-sm opacity-90 mt-1">{part.title}</p>
                                </div>
                            </div>
                            {isCompleted ? (
                                <div className="flex items-center gap-2 bg-green-500 px-4 py-2 rounded-lg">
                                    <CheckCircle2 className="h-5 w-5" />
                                    <span className="font-medium">Completed</span>
                                </div>
                            ) : (
                                <Button
                                    onClick={markComplete}
                                    className="bg-white text-gray-800 hover:bg-gray-100"
                                >
                                    <CheckCircle2 className="h-4 w-4 mr-2" />
                                    Mark Complete
                                </Button>
                            )}
                        </div>
                    </CardContent>
                </Card>
            )}

            {/* Content Tabs (Hidden for topics using Special Modules) */}
            {(topicId > 0 && ![1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 56, 57, 58, 62, 63, 64, 65, 66, 67, 68, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95].includes(topicId)) && (
                <Tabs defaultValue="overview" className="w-full">
                    <TabsList className="grid w-full grid-cols-4">
                        <TabsTrigger value="overview">
                            <FileText className="h-4 w-4 mr-2" />
                            Overview
                        </TabsTrigger>
                        <TabsTrigger value="concepts">
                            <Brain className="h-4 w-4 mr-2" />
                            Key Concepts
                        </TabsTrigger>
                        <TabsTrigger value="prelims">
                            <Target className="h-4 w-4 mr-2" />
                            Prelims Points
                        </TabsTrigger>
                        <TabsTrigger value="practice">
                            <BookOpen className="h-4 w-4 mr-2" />
                            Practice
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="overview" className="mt-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <FileText className="h-5 w-5" />
                                    Topic Overview
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                                    <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">
                                        Static Focus Area
                                    </h4>
                                    {topicData ? (
                                        <div className="whitespace-pre-line text-gray-700 dark:text-gray-300">
                                            {topicData.staticFocus}
                                        </div>
                                    ) : (
                                        <>
                                            <p className="text-gray-700 dark:text-gray-300">
                                                Content will be loaded here. You can provide detailed content for this topic including:
                                            </p>
                                            <ul className="list-disc list-inside mt-2 text-gray-600 dark:text-gray-400 space-y-1">
                                                <li>Core articles and constitutional provisions</li>
                                                <li>Key definitions and concepts</li>
                                                <li>Historical context and evolution</li>
                                                <li>Recent amendments and updates</li>
                                            </ul>
                                        </>
                                    )}
                                </div>

                                {topicData?.coreArticles && topicData.coreArticles.length > 0 && (
                                    <div className="space-y-3">
                                        <h4 className="font-semibold text-gray-700 dark:text-gray-300">Core Articles/Provisions</h4>
                                        <div className="grid gap-3">
                                            {topicData.coreArticles.map((art: any, i: number) => (
                                                <div key={i} className="p-3 border rounded-lg bg-gray-50 dark:bg-gray-800/40">
                                                    <div className="font-medium text-blue-600 dark:text-blue-400">{art.number}</div>
                                                    <div className="text-sm font-semibold mt-1">{art.title}</div>
                                                    <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">{art.description}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                                    <h4 className="font-semibold text-amber-700 dark:text-amber-300 mb-2">
                                        Current Affairs
                                    </h4>
                                    {topicData?.currentAffairs && topicData.currentAffairs.length > 0 ? (
                                        <div className="space-y-3">
                                            {topicData.currentAffairs.map((ca: any, i: number) => (
                                                <div key={i} className="text-sm">
                                                    <div className="font-medium">{ca.headline}</div>
                                                    <div className="text-xs text-gray-500 mt-1">{ca.date} • {ca.source}</div>
                                                    <div className="text-xs italic mt-1 text-gray-600 dark:text-gray-400">"{ca.teachingHook}"</div>
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <p className="text-gray-600 dark:text-gray-400">
                                            Recent news and developments related to {topic.title} will be displayed here.
                                        </p>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="concepts" className="mt-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Brain className="h-5 w-5" />
                                    Key Concepts
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                {topicData?.keyConcepts && topicData.keyConcepts.length > 0 ? (
                                    <div className="grid gap-4">
                                        {topicData.keyConcepts.map((concept: any, i: number) => (
                                            <div key={i} className="p-4 border rounded-lg">
                                                <h4 className="font-semibold text-lg mb-1">{concept.term}</h4>
                                                <p className="text-gray-700 dark:text-gray-300">{concept.definition}</p>
                                                {concept.example && (
                                                    <div className="mt-2 text-sm text-gray-600 bg-gray-50 p-2 rounded">
                                                        Example: {concept.example}
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <p className="text-gray-500 italic">No key concepts defined for this topic yet.</p>
                                )}
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="prelims" className="mt-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Target className="h-5 w-5" />
                                    Prelims Pointers
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                {topicData?.prelimsPointers && topicData?.prelimsPointers.length > 0 ? (
                                    <ul className="space-y-3">
                                        {topicData.prelimsPointers.map((pointer: any, i: number) => (
                                            <li key={i} className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
                                                <Badge variant="outline" className="bg-white shrink-0 mt-0.5">
                                                    {pointer.category}
                                                </Badge>
                                                <span className="text-gray-800">{pointer.fact}</span>
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className="text-gray-500 italic">No prelims pointers defined for this topic yet.</p>
                                )}
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="practice" className="mt-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <BookOpen className="h-5 w-5" />
                                    Practice Questions
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-center py-10">
                                    <p className="text-gray-500 mb-4">Practice questions will be available here.</p>
                                    <Button variant="outline">
                                        Start Quiz
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            )}
        </div>
    );
}
