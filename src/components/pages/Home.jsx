import React from "react";
import TodaysDeal from "./TodaysDeal";
import Seasonal from "./Seasonal";
import Top from "./Top";

function Home() {
  return (
    <section>
      <TodaysDeal/>
      <Seasonal/>
      <Top/>
    </section>
  );
}

export default Home;
