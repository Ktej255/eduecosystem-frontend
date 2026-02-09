import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, TrendingUp, Newspaper, ExternalLink, ChevronRight, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CURRENT_AFFAIRS_DATA } from '@/components/batch1/current-affairs/current-affairs-data';
import { useRouter } from 'next/navigation';

const CurrentAffairsDashboard = () => {
    const router = useRouter();
    const polityAffairs = CURRENT_AFFAIRS_DATA
        .filter(item => item.subject === 'Polity')
        .slice(0, 5);

    const stats = {
        newThisMonth: CURRENT_AFFAIRS_DATA.filter(i => i.subject === 'Polity').length,
        upcoming: 2, // Mock
        analysis: 5 // Mock
    };

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Quick Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-white dark:bg-[#111] border-l-4 border-l-blue-500 shadow-sm">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-2">
                            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">Key Updates</h3>
                            <Newspaper className="w-5 h-5 text-blue-500" />
                        </div>
                        <p className="text-3xl font-bold text-gray-900 dark:text-white">{stats.newThisMonth}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">New this month</p>
                    </CardContent>
                </Card>
                <Card className="bg-white dark:bg-[#111] border-l-4 border-l-green-500 shadow-sm">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-2">
                            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">Upcoming Events</h3>
                            <Calendar className="w-5 h-5 text-green-500" />
                        </div>
                        <p className="text-3xl font-bold text-gray-900 dark:text-white">{stats.upcoming}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Important dates acting</p>
                    </CardContent>
                </Card>
                <Card className="bg-white dark:bg-[#111] border-l-4 border-l-purple-500 shadow-sm">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-2">
                            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">Analysis</h3>
                            <TrendingUp className="w-5 h-5 text-purple-500" />
                        </div>
                        <p className="text-3xl font-bold text-gray-900 dark:text-white">{stats.analysis}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Expert insights avail.</p>
                    </CardContent>
                </Card>
            </div>

            {/* Recent Affairs List */}
            <Card className="w-full bg-white dark:bg-[#111] border-gray-200 dark:border-gray-800">
                <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle className="flex items-center gap-2 text-xl font-bold text-gray-800 dark:text-gray-200">
                        <Newspaper className="w-6 h-6 text-indigo-600" />
                        Recent Polity Affairs
                    </CardTitle>
                    <Button
                        variant="ghost"
                        onClick={() => router.push('/student/batch1/current-affairs?subject=Polity&source=polity_dashboard')}
                        className="text-indigo-600 hover:text-indigo-700"
                    >
                        View Central Hub <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {polityAffairs.length > 0 ? (
                            polityAffairs.map((affair) => (
                                <div key={affair.id} className="group flex items-center justify-between p-4 border rounded-xl hover:shadow-md transition-all bg-gray-50 dark:bg-gray-900/50 border-gray-100 dark:border-gray-800 hover:border-indigo-200 dark:hover:border-indigo-800 cursor-pointer"
                                    onClick={() => router.push(`/student/batch1/current-affairs?subject=Polity&source=polity_dashboard`)}> {/* Could deep link later */}
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            {affair.tags.map(tag => (
                                                <span key={tag} className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full">{tag}</span>
                                            ))}
                                            <span className="text-xs text-gray-400">{affair.date}</span>
                                        </div>
                                        <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 transition-colors">
                                            {affair.title}
                                        </h4>
                                        <p className="text-xs text-gray-500 line-clamp-1 mt-1">{affair.description}</p>
                                    </div>
                                    <div className="p-2 rounded-full bg-white dark:bg-gray-800 text-gray-400 group-hover:text-indigo-600 group-hover:bg-indigo-50 transition-colors">
                                        <ChevronRight className="w-5 h-5" />
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="text-center py-8 text-gray-500">
                                No recent updates available for Polity.
                            </div>
                        )}
                    </div>
                    <div className="mt-6 text-center">
                        <Button
                            className="bg-indigo-600 hover:bg-indigo-700 text-white w-full md:w-auto"
                            onClick={() => router.push('/student/batch1/current-affairs?subject=Polity&source=polity_dashboard')}
                        >
                            Explore All Current Affairs <ExternalLink className="w-4 h-4 ml-2" />
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default CurrentAffairsDashboard;
