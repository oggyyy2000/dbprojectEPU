import React from "react";
import HomeHeader from "./HomeHeader";
import NLTSPanel from "./NLTSPanel";
import ImportPanel from "./ImportPanel";

const Home = () => {
  return (
    <>
      <div className="w-full h-screen bg-light-grayish-blue absolute">
        <div>
          <HomeHeader />
        </div>

        <div className="flex mt-4">
          <NLTSPanel />
          <ImportPanel />
        </div>
      </div>
    </>
  );
};

export default Home;
