import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { useState } from "react";

const yearData = [
  { name: "Jan", hours: 320, projects: 200 },
  { name: "Feb", hours: 400, projects: 250 },
  { name: "Mar", hours: 380, projects: 230 },
  { name: "Apr", hours: 420, projects: 270 },
  { name: "May", hours: 450, projects: 290 },
  { name: "Jun", hours: 480, projects: 310 },
  { name: "Jul", hours: 430, projects: 280 },
  { name: "Aug", hours: 410, projects: 260 },
  { name: "Sep", hours: 460, projects: 300 },
  { name: "Oct", hours: 490, projects: 320 },
  { name: "Nov", hours: 510, projects: 340 },
  { name: "Dec", hours: 530, projects: 360 },
];

// 30 Days Data
const monthData = [
    { name: "Day 1", hours: 10, projects: 6 },
    { name: "Day 2", hours: 12, projects: 7 },
    { name: "Day 3", hours: 8, projects: 5 },
    { name: "Day 4", hours: 9, projects: 6 },
    { name: "Day 5", hours: 11, projects: 7 },
    { name: "Day 6", hours: 10, projects: 6 },
    { name: "Day 7", hours: 12, projects: 8 },
    { name: "Day 8", hours: 9, projects: 5 },
    { name: "Day 9", hours: 11, projects: 7 },
    { name: "Day 10", hours: 10, projects: 6 },
    { name: "Day 11", hours: 12, projects: 8 },
    { name: "Day 12", hours: 9, projects: 5 },
    { name: "Day 13", hours: 11, projects: 7 },
    { name: "Day 14", hours: 10, projects: 6 },
    { name: "Day 15", hours: 12, projects: 8 },
    { name: "Day 16", hours: 9, projects: 5 },
    { name: "Day 17", hours: 11, projects: 7 },
    { name: "Day 18", hours: 10, projects: 6 },
    { name: "Day 19", hours: 12, projects: 8 },
    { name: "Day 20", hours: 9, projects: 5 },
    { name: "Day 21", hours: 11, projects: 7 },
    { name: "Day 22", hours: 10, projects: 6 },
    { name: "Day 23", hours: 12, projects: 8 },
    { name: "Day 24", hours: 9, projects: 5 },
    { name: "Day 25", hours: 11, projects: 7 },
    { name: "Day 26", hours: 10, projects: 6 },
    { name: "Day 27", hours: 12, projects: 8 },
    { name: "Day 28", hours: 9, projects: 5 },
    { name: "Day 29", hours: 11, projects: 7 },
    { name: "Day 30", hours: 10, projects: 6 },
];

// 7 Days Data
const weekData = [
    { name: "Mon", hours: 10, projects: 6 },
    { name: "Tue", hours: 12, projects: 7 },
    { name: "Wed", hours: 8, projects: 5 },
    { name: "Thu", hours: 9, projects: 6 },
    { name: "Fri", hours: 11, projects: 7 },
    { name: "Sat", hours: 10, projects: 6 },
    { name: "Sun", hours: 12, projects: 8 },
];

// 24 Hours Data
const dayData = [
    { name: "12 AM", hours: 10, projects: 6 },
    { name: "1 AM", hours: 12, projects: 7 },
    { name: "2 AM", hours: 8, projects: 5 },
    { name: "3 AM", hours: 9, projects: 6 },
    { name: "4 AM", hours: 11, projects: 7 },
    { name: "5 AM", hours: 10, projects: 6 },
    { name: "6 AM", hours: 12, projects: 8 },
    { name: "7 AM", hours: 9, projects: 5 },
    { name: "8 AM", hours: 11, projects: 7 },
    { name: "9 AM", hours: 10, projects: 6 },
    { name: "10 AM", hours: 12, projects: 8 },
    { name: "11 AM", hours: 9, projects: 5 },
    { name: "12 PM", hours: 11, projects: 7 },
    { name: "1 PM", hours: 10, projects: 6 },
    { name: "2 PM", hours: 12, projects: 8 },
    { name: "3 PM", hours: 9, projects: 5 },
    { name: "4 PM", hours: 11, projects: 7 },
    { name: "5 PM", hours: 10, projects: 6 },
    { name: "6 PM", hours: 12, projects: 8 },
    { name: "7 PM", hours: 9, projects: 5 },
    { name: "8 PM", hours: 11, projects: 7 },
    { name: "9 PM", hours: 10, projects: 6 },
    { name: "10 PM", hours: 12, projects: 8 },
    { name: "11 PM", hours: 9, projects: 5 },
    { name: "12 AM", hours: 11, projects: 7 },
];

// Custom Tooltip Component
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-800 text-white text-sm px-3 py-2 rounded-lg shadow-md">
        <p>Average {Math.floor(payload[0].value / 60)} hr {payload[0].value % 60} mins</p>
        <p>Projects: {payload[1].value}</p>
      </div>
    );
  }
  return null;
};

// Time Range Buttons
const TimeRangeButtons = ({ title, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1 rounded-lg text-sm font-semibold ${
        active ? "bg-orange-500 text-white" : "text-gray-500"
      }`}
    >
      {title}
    </button>
  );
};

const timeRanges = ["12 Month", "30 Days", "7 days", "24 Hours"];

function ProjectStatistics() {
    const [activeRange, setActiveRange] = useState("12 Month");
    const [chartData, setChartData] = useState(yearData);
    return (
        <div className=" w-full h-[400px] bg-white rounded-lg p-5 shadow-md flex flex-col">
            <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold text-gray-700">Project Statistics</h2>
                <div>
                    {timeRanges.map((range) => (
                        <TimeRangeButtons
                            key={range}
                            title={range}
                            active={activeRange === range}
                            onClick={() => {
                                setActiveRange(range);
                                if (range === "12 Month") setChartData(yearData);
                                if (range === "30 Days") setChartData(monthData);
                                if (range === "7 days") setChartData(weekData);
                                if (range === "24 Hours") setChartData(dayData);
                            }}
                        />
                    ))}
                </div>
            </div>

            <div className="flex-1">
            <ResponsiveContainer>
                <BarChart data={chartData} margin={{ top: 0, right: 0, left: 0, bottom: 0}}>
                    <XAxis dataKey="name" stroke="#888" />
                    <YAxis />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend 
                    wrapperStyle={{
                        paddingTop: '20px',
                        fontSize: '16px',
                        color: '#1f2937', 
                        fontWeight: 500
                    }} />
                    <defs>
                        <linearGradient id="colorHours" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="5%" stopColor="#f4566f" />
                            <stop offset="95%" stopColor="#ff7300" />
                        </linearGradient>
                        <linearGradient id="colorProjects" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="5%" stopColor="#dadadb" />
                            <stop offset="95%" stopColor="#bfbfbf"/>
                        </linearGradient>
                    </defs>
                    <Bar dataKey="hours" fill="url(#colorHours)" name="Working Hours" barSize={13} radius={[10, 10, 0, 0]} 
                    />
                    <Bar dataKey="projects" fill="url(#colorProjects)" name="Projects" barSize={13} radius={[10, 10, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
            </div>
        </div>
    );
}

export default ProjectStatistics;
