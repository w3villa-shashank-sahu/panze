import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';

function ProjectOverviewCard({ title, percentages, projectTypes, totalProjects, totalMembers }) {
  const data = [
    { name: 'Layer 1', value: percentages[0] },
    { name: 'Layer 2', value: percentages[1] },
    { name: 'Layer 3', value: percentages[2] },
  ];

  const COLORS = [
    ['#8884d8', '#E5E4E2'], // Layer 1 colors
    ['#82ca9d', '#E5E4E2'], // Layer 2 colors
    ['#ffc658', '#E5E4E2'], // Layer 3 colors
  ];

  const innerRadii = [40, 60, 80]; // Radii for the inner circles
  const outerRadii = [50, 70, 90]; // Radii for the outer circles

  return (
    <div className="bg-white rounded-lg p-6 shadow-md min-w-80 flex-1">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <span className="text-gray-500">...</span>
      </div>

      <div className="flex flex-col items-center">
        <PieChart width={180} height={180}>
          {data.map((entry, index) => (
            <Pie
              key={`pie-${index}`}
              data={[{ name: 'A', value: entry.value }, { name: 'B', value: 100 - entry.value }]}
              cx="50%"
              cy="50%"
              innerRadius={innerRadii[index]}
              outerRadius={outerRadii[index]}
              fill={COLORS[index][0]}
              paddingAngle={2}
              dataKey="value"
            >
              {[{ name: 'A', value: entry.value }, { name: 'B', value: 100 - entry.value }].map((e, i) => (
                <Cell key={`cell-${index}-${i}`} fill={COLORS[index][i]} />
              ))}
            </Pie>
          ))}
        </PieChart>
        <div className="text-center mt-2">
          <p className="text-2xl font-bold text-gray-800">{percentages[0]}%</p>
          <p className="text-sm text-gray-600">{projectTypes[0]}</p>
        </div>
      </div>

      <div className="mt-6 flex items-center">
        <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
        <div>
          <p className="text-sm font-medium text-gray-700">{projectTypes[0]}</p>
          <p className="text-xs text-gray-500">{totalProjects} Total Projects, {totalMembers} Members</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectOverviewCard;