import { useEffect, useState } from "react";

const Loading = () => {
  const [dots, setDots] = useState(0);
  const loadingText = "Loading";

  useEffect(() => {
    const interval = window.setInterval(() => {
      setDots((dots) => (dots + 1) % 4);
    }, 1000);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h2>
        {loadingText}
        {".".repeat(dots)}
      </h2>
    </div>
  );
};

export default Loading;
