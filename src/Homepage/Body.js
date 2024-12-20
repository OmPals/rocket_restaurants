import { useState } from "react";
import ResCardsList from "./ResCardList";
import Search from "./Search";

const Body = () => {
  const [isFilterOn, setIsFilterOn] = useState(false);

  return (
    <div className="body">
      <Search setIsFilterOn={setIsFilterOn} isFilterOn={isFilterOn} />
      <ResCardsList isFilterOn={isFilterOn} />
    </div>
  );
};

export default Body;
