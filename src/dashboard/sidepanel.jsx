import { Home, Calendar, Ticket, Folder, LayoutGrid, FolderOpen, CheckSquare, Lock, FileText, Grid, Headphones, Settings, LogOut, X } from "lucide-react";
import SidebarButton from '../components/sidebar-item'
import { useState } from "react";

const buttonText = [
    "Overview",
    "Calendar",
    "Tickets",
    "File Manager",
    "Kanban",
    "Projects",
    "Tasks",
    "Auth Pages",
    "Extra Pages",
    "Layout",
    "Supports",
    "Settings",
    "Log Out",
    "GET API"
]

const Sidebar = ({onClose, isCollapsible}) => {
    const [activeButton, setActiveButton] = useState(buttonText[0]);
    return (
        <div className="h-full min-w-60 bg-[#0d2023] text-white flex flex-col p-4">

            {/* Logo */}
            <div className="flex justify-between items-center mb-6">
                <div className="text-5xl font-bold text-orange-400">panze</div>
                {isCollapsible && (
                    <button 
                        onClick={onClose}
                        className="text-gray-400 hover:text-white sm:hidden"
                    >
                        <X size={24} />
                    </button>
                )}
            </div>
            {/* Dashboard Section */}
            <div className="overflow-y-auto scrollbar-hide">
            <div>
                <p className="text-gray-400 text-sm mb-2">DASHBOARDS</p>
                <ul className="space-y-2">
                <SidebarButton icon={<Home size={20}/>} text="Overview" active={buttonText[0] === activeButton} onclick={()=>{setActiveButton(buttonText[0])}} />
                <SidebarButton icon={<Home size={20}/>} text="GET API" active={buttonText[13] === activeButton} onclick={()=>{setActiveButton(buttonText[13])}} />
                <SidebarButton icon={<Calendar size={20} />} text="Calendar" active={buttonText[1] === activeButton} onclick={()=>{setActiveButton(buttonText[1])}} />
                <SidebarButton icon={<Ticket size={20} />} text="Tickets" active={buttonText[2] === activeButton} onclick={()=>{setActiveButton(buttonText[2])}}  />
                <SidebarButton icon={<Folder size={20} />} text="File Manager" active={buttonText[3] === activeButton} onclick={()=>{setActiveButton(buttonText[3])}}  />
                <SidebarButton icon={<LayoutGrid size={20} />} text="Kanban" active={buttonText[4] === activeButton} onclick={()=>{setActiveButton(buttonText[4])}}  />
                <SidebarButton icon={<FolderOpen size={20} />} text="Projects" collapsable={true} active={buttonText[5] === activeButton} onclick={()=>{setActiveButton(buttonText[5])}}  />
                <SidebarButton icon={<CheckSquare size={20} />} text="Tasks" collapsable={true} active={buttonText[6] === activeButton} onclick={()=>{setActiveButton(buttonText[6])}} />
                </ul>
            </div>

            {/* Administrator Section */}
            <div className="mt-6">
                <p className="text-gray-400 text-sm mb-2">ADMINISTRATOR</p>
                <ul className="space-y-2">
                    <SidebarButton icon={<Lock size={20} />} text="Auth Pages" collapsable={true} active={buttonText[7] === activeButton} onclick={()=>{setActiveButton(buttonText[7])}}  />
                    <SidebarButton icon={<FileText size={20} />} text="Extra Pages" collapsable={true} active={buttonText[8] === activeButton} onclick={()=>{setActiveButton(buttonText[8])}} />
                    <SidebarButton icon={<Grid size={20} />} text="Layout"  active={buttonText[9] === activeButton} onclick={()=>{setActiveButton(buttonText[9])}} />
                </ul>
            </div>

            {/* Settings Section */}
            <div className="mt-6 flex-grow">
                <p className="text-gray-400 text-sm mb-2">SETTINGS</p>
                <ul className="space-y-2">
                    <SidebarButton icon={<Headphones size={20} />} text="Supports" collapsable={true} active={buttonText[10] === activeButton} onclick={()=>{setActiveButton(buttonText[10])}}  />
                    <SidebarButton icon={<Settings size={20} />} text="Settings" collapsable={true} active={buttonText[11] === activeButton} onclick={()=>{setActiveButton(buttonText[11])}}  />
                    <SidebarButton icon={<LogOut size={20} />} text="Log Out" active={buttonText[12] === activeButton} onclick={()=>{setActiveButton(buttonText[12])}}  />
                </ul>
            </div>
                    </div>
        </div>
    );
};

export default Sidebar;
