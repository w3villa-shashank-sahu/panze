import React from 'react';
import {CircleUser} from 'lucide-react';

function ProjectSummaryCard({ title, items }) {
  return (
    <div className="rounded-2xl p-5 flex-1 min-w-100 font-sans bg-white shadow-2xl ">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-xl font-semibold text-gray-700">{title}</h2>
        {/* You can add a more options icon here if needed */}
      </div>

      {items.map((item, index) => (
        <div key={index} className="flex justify-between items-center mb-2 text-gray-700">
          <div className="flex items-center">
          <CircleUser className='h-10 w-10 mr-4 text-yellow-400' />
            {/* {item.icon && <img src={item.icon} alt="item icon" className="mr-2 w-6 h-6" />} */}
            <div>
              <p className="font-bold text-base">{item.name}</p>
              <p className="text-gray-600 text-sm">{item.details}</p>
            </div>
          </div>
          <span>&gt;</span> {/* Or use a right arrow icon */}
        </div>
      ))}
    </div>
  );
}

export default ProjectSummaryCard;