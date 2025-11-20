import React, { useEffect} from "react";
import { useToastStore } from "../stores/toastStore";

const Toast: React.FC = ()=> {
      const { message, type, visible, hideToast } = useToastStore();

  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => hideToast(), 3000);
      return () => clearTimeout(timer);
    }
  }, [visible, hideToast]);

  if (!visible) return null;

  const bgColor =
    type === "success"
      ? "bg-green-500"
      : type === "error"
      ? "bg-red-500"
      : "bg-blue-500";

  return (
       <div
      className={`${bgColor} fixed z-[9999] top-16 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-lg text-white shadow-lg
        transition-all duration-300
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}
      `}
    >
      {message}
    </div>
  );
};

export default Toast;
