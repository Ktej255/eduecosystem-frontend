"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type EmployeeData = {
    name: string;
    polity: number;
    ethics: number;
    total: number;
};

interface SkillsMatrixProps {
    data: EmployeeData[];
}

export function SkillsMatrix({ data }: SkillsMatrixProps) {
    const getIntensity = (score: number) => {
        if (score >= 80) return "bg-green-500";
        if (score >= 60) return "bg-green-300";
        if (score >= 40) return "bg-yellow-300";
        return "bg-red-300";
    };

    return (
        <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
                <CardTitle className="text-gray-100 flex items-center justify-between">
                    <span>Skills Matrix (Heatmap)</span>
                    <Badge variant="outline">Live Updates</Badge>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-400">
                        <thead className="text-xs uppercase bg-gray-800 text-gray-300">
                            <tr>
                                <th scope="col" className="px-6 py-3">Employee</th>
                                <th scope="col" className="px-6 py-3 text-center">Polity</th>
                                <th scope="col" className="px-6 py-3 text-center">Ethics</th>
                                <th scope="col" className="px-6 py-3 text-center">Total Score</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((employee, idx) => (
                                <tr key={idx} className="border-b border-gray-800 hover:bg-gray-800/50">
                                    <td className="px-6 py-4 font-medium text-white">
                                        {employee.name}
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <div className="flex items-center justify-center gap-2">
                                            <div className={`w-3 h-3 rounded-full ${getIntensity(employee.polity)}`} />
                                            {employee.polity}%
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <div className="flex items-center justify-center gap-2">
                                            <div className={`w-3 h-3 rounded-full ${getIntensity(employee.ethics)}`} />
                                            {employee.ethics}%
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-center font-bold text-white">
                                        {employee.total}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {data.length === 0 && (
                        <div className="text-center py-8 text-gray-600 italic">No employee data found.</div>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}
