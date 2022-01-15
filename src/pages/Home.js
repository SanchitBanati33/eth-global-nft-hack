import React from "react";
import Body from "../components/Home/Body";

const Home = ({ account, haveTokens }) => {
  return (
    <div>
      <Body account={account} haveTokens={haveTokens} />
    </div>
  );
};

export default Home;
