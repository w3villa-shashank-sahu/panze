import { MoreVertical } from "lucide-react";

const TaskCard = ({ title, description, time, avatars }) => {
    return (
        <div className="bg-white shadow-lg rounded-2xl p-4 min-w-80 flex-1 flex flex-col space-y-2">
            {/* Header */}
            <div className="flex justify-between items-start">
                <div>
                    <h2 className="text-lg font-semibold text-gray-700">{title}</h2>
                    <p className="text-gray-500 text-sm">{description}</p>
                </div>
                <MoreVertical className="text-gray-400 cursor-pointer" />
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                    <span className="text-orange-500">⏰</span>
                    <span>{time}</span>
                </div>

                {/* Avatars */}
                <div className="flex -space-x-4">
                    {avatars.map((avatar, index) => (
                        <img key={index} src={avatar} className="w-9 h-9 rounded-full border-1 border-white" alt={`User ${index + 1}`} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TaskCard;
