import React from "react";
import "./Home.css";
import FeaturedWidgets from "./../../components/FeaturedWidgets/FeaturedWidgets";
import GraphWidget from "../../components/GraphWidget/GraphWidget";
import NewUserWidget from "./../../components/NewUserWidget/NewUserWidget";
import LastestTransactions from "../../components/LatestTransactions/LastestTransactions";
const Home = () => {
  return (
    <div className="homeholder">
      <div className="home__container">
        <FeaturedWidgets />
        <GraphWidget />
        <div className="home__row">
          <NewUserWidget />
          <LastestTransactions/>
        </div>
    
      </div>
    </div>
  );
};

export default Home;
