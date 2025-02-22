const DailyTaskCard = ({ title, description, time, avatars, extraCount }) => {
  return (
    <div className="border-gray-200 rounded-2xl shadow-md p-4 border">
      <h3 className="font-semibold text-gray-700" style={{fontSize: "clamp(16px, 2vw, 19px)"}}>{title}</h3>
      <p className="text-gray-500 text-sm">{description}</p>
      <div className="flex items-center mt-3 text-gray-500 text-sm">
        {/* <FaRegClock className="mr-1 text-orange-500" /> */}
        <span className="mr-2" style={{fontSize: "clamp(12px, 2vw, 15px)"}}>Updated {time} ago</span>
        <div className="flex items-center ml-auto">
          {avatars.map((avatar, index) => (
            <img key={index} src={avatar} className=" w-8 h-8 md:w-9 md:h-9 rounded-full border-1 border-white" alt={`User ${index + 1}`} />
          ))}
          {extraCount > 0 && (
            <span className="w-6 h-6 flex items-center justify-center bg-gray-200 text-xs rounded-full -ml-2">
              +{extraCount}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default DailyTaskCard;
