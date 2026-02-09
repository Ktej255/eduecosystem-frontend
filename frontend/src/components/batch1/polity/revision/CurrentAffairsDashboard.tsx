import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, TrendingUp, Newspaper, ExternalLink, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const CurrentAffairsDashboard = () => {
    // Placeholder for actual data fetching and rendering
    // In a real app, this would fetch from an API or the MajorCurrentAffairsRegistry
    const recentAffairs = [
        { title: 'Nari Shakti Vandan Adhiniyam (106th Amendment)', date: '2023-09-28', link: '#', tag: 'Polity' },
        { title: 'Supreme Court Verdict on Article 370', date: '2023-12-11', link: '#', tag: 'Judiciary' },
        { title: 'CEC and Other ECs Appointment Act', date: '2023-12-28', link: '#', tag: 'Governance' },
        { title: 'Supreme Court on Electoral Bonds', date: '2024-02-15', link: '#', tag: 'Rights' },
        { title: 'Uttarakhand Uniform Civil Code', date: '2024-02-07', link: '#', tag: 'State' },
    ];

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-white dark:bg-[#111] border-l-4 border-l-blue-500 shadow-sm">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-2">
                            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">Key Updates</h3>
                            <Newspaper className="w-5 h-5 text-blue-500" />
                        </div>
                        <p className="text-3xl font-bold text-gray-900 dark:text-white">12</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">New this month</p>
                    </CardContent>
                </Card>
                <Card className="bg-white dark:bg-[#111] border-l-4 border-l-green-500 shadow-sm">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-2">
                            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">Upcoming Events</h3>
                            <Calendar className="w-5 h-5 text-green-500" />
                        </div>
                        <p className="text-3xl font-bold text-gray-900 dark:text-white">5</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Important dates acting</p>
                    </CardContent>
                </Card>
                <Card className="bg-white dark:bg-[#111] border-l-4 border-l-purple-500 shadow-sm">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-2">
                            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">Analysis</h3>
                            <TrendingUp className="w-5 h-5 text-purple-500" />
                        </div>
                        <p className="text-3xl font-bold text-gray-900 dark:text-white">8</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Expert insights avail.</p>
                    </CardContent>
                </Card>
            </div>

            <Card className="w-full bg-white dark:bg-[#111] border-gray-200 dark:border-gray-800">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-xl font-bold text-gray-800 dark:text-gray-200">
                        <Newspaper className="w-6 h-6 text-indigo-600" />
                        Recent Polity Affairs
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {recentAffairs.map((affair, index) => (
                            <div key={index} className="group flex items-center justify-between p-4 border rounded-xl hover:shadow-md transition-all bg-gray-50 dark:bg-gray-900/50 border-gray-100 dark:border-gray-800 hover:border-indigo-200 dark:hover:border-indigo-800">
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full">{affair.tag}</span>
                                        <span className="text-xs text-gray-400">{affair.date}</span>
                                    </div>
                                    <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 transition-colors">
                                        {affair.title}
                                    </h4>
                                </div>
                                <Link href={affair.link} className="p-2 rounded-full bg-white dark:bg-gray-800 text-gray-400 group-hover:text-indigo-600 group-hover:bg-indigo-50 transition-colors">
                                    <ChevronRight className="w-5 h-5" />
                                </Link>
                            </div>
                        ))}
                    </div>
                    <div className="mt-6 text-center">
                        <Link href="/student/value-addition" className="inline-flex items-center text-indigo-600 font-bold hover:underline">
                            View All Current Affairs <ExternalLink className="w-4 h-4 ml-1" />
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default CurrentAffairsDashboard;
