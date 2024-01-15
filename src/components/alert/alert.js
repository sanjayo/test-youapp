// components/Alert.js
import React, { useState, useEffect } from "react";

const Alert = ({ message, type, onClose }) => {
  const [visible, setVisible] = useState(true);

  const hideAlert = () => {
    setVisible(false);
    onClose();
  };

  useEffect(() => {
    const timeout = setTimeout(hideAlert, 5000); // Adjust the duration (in milliseconds) as needed

    return () => clearTimeout(timeout);
  }, [onClose]);

  return (
    <div
      className={`animate-slide-down text-md font-bold alert ${
        type === "success" ? "alert-success" : "alert-error"
      } ${visible ? "active" : ""}`}
    >
      <span>{message}</span>
      <button onClick={hideAlert} className="ml-2 text-md font-bold">
        x
      </button>
    </div>
  );
};

export default Alert;
