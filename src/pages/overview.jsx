import TaskCard from "../components/dashboardCard";
import {ChevronRight} from 'lucide-react';
import PieChart from "../components/pieChart";
import ProjectStatistics from "../components/barchart";
import ProjectSummaryCard from "../components/summaryCard";
import ProjectOverviewCard from "../components/spiralChart";
import DailyTaskCard from '../components/dailytaskCard';

function OverviewPage() {
  const projectData = {
      title: 'Projects Summary',
      items: [
        {
          icon: 'path/to/tiddo-icon.png', // Replace with actual path
          name: 'Tiddo App',
          details: '19 Members'
        },
        {
          icon: 'path/to/homie-icon.png', // Replace with actual path
          name: 'Homie SAAS Application',
          details: '24 Members'
        },
        {
          icon: 'path/to/inprogress-icon.png', // Replace with actual path
          name: 'In Progress',
          details: '22 Projects'
        },
        {
          icon: 'path/to/completed-icon.png', // Replace with actual path
          name: 'Completed',
          details: '10 Projects'
        },
        {
          icon: 'path/to/inprogress-icon.png', // Replace with actual path
          name: 'In Progress',
          details: '22 Projects'
        },

      ]
    };
    const spiralData = {
      title: 'Projects Overview',
      percentages: [65, 80, 40], // Percentages for each layer
      projectTypes: ['App Design', 'Web Development', 'UI/UX'], // Project types for each layer
      totalProjects: 10,
      totalMembers: 8,
    };
    const taskData = [
      {
        title: "Tiddo Mobile App Web Version",
        description: "We’ve to design a dashboard for DevignEdge Design Agency.",
        time: "2 Hours",
        avatars: [
          "https://randomuser.me/api/portraits/men/1.jpg",
          "https://randomuser.me/api/portraits/women/2.jpg",
        ],
        extraCount: 2,
      },
      {
        title: "Scrum Call Discussion",
        description: "We’ve to design a dashboard for DevignEdge Design Agency.",
        time: "5 Hours",
        avatars: [
          "https://randomuser.me/api/portraits/men/3.jpg",
          "https://randomuser.me/api/portraits/women/4.jpg",
        ],
        extraCount: 8,
      },
      {
        title: "Tiddo Mobile App Web Version",
        description: "We’ve to design a dashboard for DevignEdge Design Agency.",
        time: "2 Hours",
        avatars: [
          "https://randomuser.me/api/portraits/men/1.jpg",
          "https://randomuser.me/api/portraits/women/2.jpg",
        ],
        extraCount: 2,
      },
      
    ];
  return ( 
    // want to make only this component scrollable 
    <div className="h-auto gap-4 flex min-w-full flex-col overflow-y-auto scrollbar-hide">
      <div className="text-gray-400 flex ">Dashboard <ChevronRight /> Overview</div>
      <div className="flex flex-wrap gap-4 justify-center ">
          <TaskCard 
              title="Create a style guide" 
              description="Style guide for the business" 
              time="Updated 5 Hours ago" 
              avatars={["https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?t=st=1739792098~exp=1739795698~hmac=5c3853aa8204cef7cefbe20580f43273f8ecee770b80ac8c86f3e90f611c437f&w=826", "https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?t=st=1739792098~exp=1739795698~hmac=5c3853aa8204cef7cefbe20580f43273f8ecee770b80ac8c86f3e90f611c437f&w=826"]}
          />
          <TaskCard 
              title="Create a style guide" 
              description="Style guide for the business" 
              time="Updated 5 Hours ago" 
              avatars={["https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?t=st=1739792098~exp=1739795698~hmac=5c3853aa8204cef7cefbe20580f43273f8ecee770b80ac8c86f3e90f611c437f&w=826", "https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?t=st=1739792098~exp=1739795698~hmac=5c3853aa8204cef7cefbe20580f43273f8ecee770b80ac8c86f3e90f611c437f&w=826"]}
          />
          <TaskCard 
              title="Create a style guide" 
              description="Style guide for the business" 
              time="Updated 5 Hours ago" 
              avatars={["https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?t=st=1739792098~exp=1739795698~hmac=5c3853aa8204cef7cefbe20580f43273f8ecee770b80ac8c86f3e90f611c437f&w=826", "https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?t=st=1739792098~exp=1739795698~hmac=5c3853aa8204cef7cefbe20580f43273f8ecee770b80ac8c86f3e90f611c437f&w=826"]}
          />
          <TaskCard 
              title="Create a style guide" 
              description="Style guide for the business" 
              time="Updated 5 Hours ago" 
              avatars={["https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?t=st=1739792098~exp=1739795698~hmac=5c3853aa8204cef7cefbe20580f43273f8ecee770b80ac8c86f3e90f611c437f&w=826", "https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?t=st=1739792098~exp=1739795698~hmac=5c3853aa8204cef7cefbe20580f43273f8ecee770b80ac8c86f3e90f611c437f&w=826"]}
          />
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-4 xl:flex-row ">
          <PieChart/>
          <ProjectStatistics/>
      </div>
      <div className="flex flex-wrap gap-4 max-h-[500px] justify-center">
          <ProjectSummaryCard {...projectData}/>
          <ProjectOverviewCard {...spiralData} />
          <div className="flex flex-col gap-4 justify-center flex-1 min-w-80 bg-white rounded-lg p-3">
            {taskData.map((task, index) => (
              <DailyTaskCard key={index} {...task} />
            ))}
          </div>
      </div>
      <div className="h-80 w-80 bg-amber-300 "/>
    </div>
);
}

export default OverviewPage;