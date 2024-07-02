import React, { useEffect, useState } from "react";

const DateTime = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  
  // Date and time
  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      setDate(now.toLocaleDateString());
      setTime(now.toLocaleTimeString());
    }, 1000);
    // Clear the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <h2 className="text-white text-center py-5 text-2xl">
      {date} - {time}{" "}
    </h2>
  );
};

export default DateTime;
