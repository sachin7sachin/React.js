import { useEffect } from "react";
import { useState } from "react";

const CurrentTime = () => {
  const [time, setTime] = useState(new Date());

  // const intervalId = setInterval(() => {
  //   setTime(new Date());
  // }, 1000);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalId);
      console.log("Interval Cleared");
    };
  }, []);

  return (
    <p className="text-center currentTime">
      This is the current time : {time.toLocaleDateString()} -
      {time.toLocaleTimeString()}
    </p>
  );
};

export default CurrentTime;
