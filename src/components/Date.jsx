import { useEffect, useState } from "react";

const DateComponent = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formattedDate = date.toLocaleDateString();

  return (
    <div>
       {formattedDate}
    </div>
  );
};

export default DateComponent;
