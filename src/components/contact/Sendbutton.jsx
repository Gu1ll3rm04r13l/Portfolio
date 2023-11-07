import { useState } from "react";
import { RiSendPlaneFill } from "react-icons/ri";

const SendButton = () => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <button
            className={`bg-purple-500 w-full text-white font-semibold p-2 rounded-lg flex items-center justify-center space-x-1 ${isHovered ? 'bg-purple-600' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => {
                // Send the email
            }}
        >
            <span>Send</span>
            <RiSendPlaneFill />
        </button>
    );
};
export default SendButton;