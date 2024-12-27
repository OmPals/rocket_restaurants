import { useEffect, useState } from "react";

const Loading = () => {
  const [dots, setDots] = useState(0);
  const loadingText = "Loading";

  useEffect(() => {
    let effectDots = 0;
    window.setInterval(() => {
      setDots(++effectDots % 4);
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
