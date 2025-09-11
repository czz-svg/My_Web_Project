import { useEffect, useRef, useState } from "react";

export default function Clock() {
  const [now, setNow] = useState(new Date());
  const [date, setDate] = useState(new Date());
  const dateRef = useRef(date);
  useEffect(() => {
    let timer = setInterval(() => {
      const time = new Date();
      setNow(time);
      if (
        time.getFullYear() !== dateRef.current.getDate() ||
        time.getMonth() !== dateRef.current.getMonth() ||
        time.getFullYear() !== dateRef.current.getFullYear()
      ) {
        setDate(time);
        dateRef.current = time;
      }
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const hh = String(now.getHours()).padStart(2, "0");
  const mm = String(now.getMinutes()).padStart(2, "0");
  const ss = String(now.getSeconds()).padStart(2, "0");

  const dd = String(date.getDate()).padStart(2, "0");
  const mt = String(date.getMonth() + 1).padStart(2, "0");
  const yyyy = String(date.getFullYear());

  return (
    <div className="show-clock">
      <h1>
        {hh}:{mm}:{ss}
      </h1>
      <h3>
        {dd}:{mt}:{yyyy}
      </h3>
    </div>
  );
}