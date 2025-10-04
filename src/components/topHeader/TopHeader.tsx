import React, { useEffect, useState } from "react";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const targetDate = "2025-10-31T23:59:59";

const Countdown: React.FC = () => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date(targetDate) - +new Date();

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="bg-[url(src/assets/images/top-header.gif)] bg-cover bg-center h-14 p-3 absolute top-0 flex items-center w-full ">
      <div className="max-md:hidden bg-white rounded-full flex justify-evenly w-44 sm:h-10 sm:ml-16 items-center xs:h-8">
        <div className="pt-1 bg-orange-600 w-[2vw] h-[2vw] rounded text-white text-center flex items-center justify-center">
          {timeLeft.days}
        </div>
        <span className="text-orange-600 text-sm 2xl:-m-2 lg:-m-5">:</span>
        <div className="pt-1 bg-orange-600 w-[2vw] h-[2vw]  rounded text-white text-center flex items-center justify-center ">
          {timeLeft.hours}
        </div>
        <span className="text-orange-600 text-sm 2xl:-m-2 lg:-m-5">:</span>
        <div className="pt-1 bg-orange-600 w-[2vw] h-[2vw] rounded text-white text-center flex items-center justify-center">
          {timeLeft.minutes}
        </div>
        <span className="text-orange-600 text-sm 2xl:-m-2 lg:-m-5">:</span>

        <div className="pt-1 bg-orange-600 w-[2vw] h-[2vw] rounded text-white text-center flex items-center justify-center ">
          {timeLeft.seconds}
        </div>
      </div>
    </div>
  );
};

export default Countdown;
