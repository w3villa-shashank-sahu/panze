import {Bell, Globe, Moon, Search, Menu} from 'lucide-react';

function Appbar({ showMenu, onMenuClick }) {
    return ( 
        <div className="flex p-4 bg-white justify-between">
            <div className="flex items-center gap-4">
                <button 
                    className="sm:hidden text-gray-600"
                    onClick={onMenuClick}
                >
                    <Menu size={24} />
                </button>
                <div className="search bg-[#ecf2f9] p-3 rounded-4xl flex items-center text-[#343743]">
                    <Search className='size-5'/>
                    <input type="text" placeholder='Search tasks...' className='placeholder-[#343743] ml-3 text-sm'/>
                </div>
            </div>
            <div className='flex gap-4 items-center'>
                <div className='bg-[#ecf2f9] p-2 rounded-3xl'>
                    <Moon className='text-neutral-600'/>
                </div>
                <div className='bg-[#ecf2f9] p-2 rounded-3xl'>
                    <Bell className='text-neutral-600'/>
                </div>
                <div className='bg-[#ecf2f9] p-2 rounded-3xl'>
                    <Globe className='text-neutral-600'/>
                </div>
                <img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg" alt="profile" className='h-10 rounded-3xl aspect-square object-cover'/>
            </div>
        </div>
    );
}

export default Appbar;