import { useEffect, useState } from "react";

function Time  () {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval); // cleanup
  }, []);

  const formattedTime = time.toLocaleTimeString(); // hh:mm:ss format

  return (
    <div>
      {formattedTime}
    </div>
  );
};

export default Time;
