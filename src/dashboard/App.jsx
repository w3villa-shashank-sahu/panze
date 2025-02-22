import { useState } from "react";
import Appbar from "./appbar";
import Sidebar from "./sidepanel";
import { Outlet } from "react-router";



function App() {
    const [isOpen, setIsOpen] = useState(true);
    return (         
        <div className="flex h-screen w-screen text-xl  text-white">
            {/* Hamburger Button */}
            <button 
                className="fixed top-4 left-4 z-50 w-6 h-5 flex flex-col justify-between sm:hidden"
                onClick={() => setIsOpen(!isOpen)}
            />
            

            {/* Sidebar Panel */}
            <div className={`fixed  z-1 sm:static w-60 h-full transition-transform duration-300 ease-in-out ${!isOpen ? 'translate-x-0' : 'translate-x-[-100%]'} sm:translate-x-0`}>
                <Sidebar
                    onClose={() => setIsOpen(true)} 
                    isCollapsible={window.innerWidth < 640}
                />
            </div>

            {/* Main Content */}
            <div className="flex h-full flex-col w-full">
                {/* Appbar */}
                <Appbar showMenu={!isOpen} onMenuClick={() => setIsOpen(!isOpen)} />

                {/* Screen */}
                <div className="h-[99%] overflow-y-scroll min-w-full  flex p-3 bg-[#ecf2f9]">
                    {/* <OverviewPage/> */}
                    <Outlet/> 
                </div>
            </div>                
        </div> 
    );
}

export default App;
