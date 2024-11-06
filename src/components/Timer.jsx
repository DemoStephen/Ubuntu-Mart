import { useState, useEffect } from "react";
import TimerSection from "./TimerSection";

export default function Timer() {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    // Define the target time (2 hours, 59 minutes, and 59 seconds from now)
    const targetTime =
      new Date().getTime() + 2 * 60 * 60 * 1000 + 59 * 60 * 1000 + 59 * 1000;

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetTime - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({
          days: days.toString().padStart(2, "0"),
          hours: hours.toString().padStart(2, "0"),
          minutes: minutes.toString().padStart(2, "0"),
          seconds: seconds.toString().padStart(2, "0"),
        });
      } else {
        // Clear countdown once it reaches zero
        clearInterval(intervalId);
        setTimeLeft({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
      }
    };

    // Initial countdown update and start interval
    updateCountdown();
    const intervalId = setInterval(updateCountdown, 1000);

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  return (
    <div className="my-4 flex items-start gap-2">
      <TimerSection value={timeLeft.days} timeframe="Days" />
      <TimerSection value={timeLeft.hours} timeframe="Hours" />
      <TimerSection value={timeLeft.minutes} timeframe="Mins" />
      <TimerSection value={timeLeft.seconds} timeframe="Secs" last />
    </div>
  );
}
