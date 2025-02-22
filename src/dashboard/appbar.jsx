import { Bell, Globe, Moon, Search, Menu } from 'lucide-react';

function Appbar({ showMenu, onMenuClick }) {
    return ( 
        <div className="flex w-full p-4 bg-white justify-between">
            <div className="flex items-center gap-4">
                <button 
                    className="sm:hidden text-gray-600"
                    onClick={onMenuClick}>
                    <Menu className="icon-size" size={"clamp(20px, 5vw, 30px)"} />
                </button>
                <div className="search bg-[#ecf2f9] p-2 rounded-4xl flex items-center text-[#343743]">
                    <Search className='icon-size' size={"clamp(20px, 5vw, 25px)"} />
                    <input 
                        type="text" 
                        placeholder='Search tasks...' 
                        className='placeholder-[#343743] ml-3 text-sm hidden bp760:block'/>
                </div>
            </div>
            <div className='flex gap-4 items-center'>
                <div className='bg-[#ecf2f9] p-2 rounded-3xl'>
                    <Moon className='icon-size text-neutral-600' size={"clamp(20px, 5vw, 25px)"} />
                </div>
                <div className='bg-[#ecf2f9] p-2 rounded-3xl'>
                    <Bell className='icon-size text-neutral-600' size={"clamp(20px, 5vw, 25px)"} />
                </div>
                <div className='bg-[#ecf2f9] p-2 rounded-3xl'>
                    <Globe className='icon-size text-neutral-600' size={"clamp(20px, 5vw, 25px)"} />
                </div>
                <img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg" 
                    alt="profile" 
                    className=' rounded-3xl aspect-square object-cover' style={{height: "clamp(30px,4vw, 40px)"}}/>
            </div>
        </div>
    );
}

export default Appbar;
