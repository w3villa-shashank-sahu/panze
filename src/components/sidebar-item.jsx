import { ChevronRight } from "lucide-react";
import { NavLink } from "react-router";

const SidebarButton = ({ icon, text, active, collapsable, onclick}) => {
    console.log('active:', active);
    
    return (
        
        <NavLink to={text} className={`flex items-center gap-3 w-full rounded-lg  cursor-pointer hover:bg-gray-800 transition
            ${active ? "bg-gradient-to-r from-orange-500 to-pink-500 text-white p-3" : "text-gray-300 p-2"}`} onClick={onclick}>
            {icon}
            <span className="text-base">{text}</span>
            {collapsable && <div className="flex flex-1 justify-end "><ChevronRight size={15}/></div>}
        </NavLink>
    );
};

export default SidebarButton;
