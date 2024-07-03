import React from "react";
import TodaysDeal from "./TodaysDeal";
import Seasonal from "./Seasonal";
import Top from "./Top";

function Home({handleClick}) {
  return (
    <section>
      <TodaysDeal handleClick={handleClick}/>
      <Seasonal handleClick={handleClick}/>
      <Top handleClick={handleClick}/>
    </section>
  );
}

export default Home;
