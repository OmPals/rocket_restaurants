import { useEffect, useState } from "react";

const Loading = () => {
  const [dots, setDots] = useState(1);
  const loadingText = "Loading";

  useEffect(() => {
    let effectDots = 1;
    window.setInterval(() => {
      setDots(effectDots++ % 4);
    }, 1000);
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
