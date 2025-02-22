import React from 'react';
import {CircleUser} from 'lucide-react';

function ProjectSummaryCard({ title, items }) {
  return (
    <div className="rounded-2xl p-5 flex-1 min-w-74 font-sans bg-white shadow-md ">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-xl font-semibold text-gray-700" style={{fontSize: "clamp(15px,2vw,20px)"}}>{title}</h2>
        {/* You can add a more options icon here if needed */}
      </div>

      {items.map((item, index) => (
        <div key={index} className="flex justify-between items-center mb-2 text-gray-700">
          <div className="flex items-center">
            <CircleUser className='aspect-square mr-4 text-yellow-400' style={{height: "clamp(30px,2vw,40px)", width: "clamp(30px,2vw,40px)"}} />
            <div>
              <p className="font-bold text-base whitespace-nowrap" style={{ fontSize: 'clamp(13px, 2vw, 17px)' }}>{item.name}</p>
              <p className="text-gray-600 text-sm" style={{ fontSize: 'clamp(13px, 2vw, 16px)' }}>{item.details}</p>
            </div>
          </div>
          <span>&gt;</span> {/* Or use a right arrow icon */}
        </div>
      ))}
    </div>
  );
}

export default ProjectSummaryCard;