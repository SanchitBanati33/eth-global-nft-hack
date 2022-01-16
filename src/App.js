import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Livepeer from "../src/pages/Livepeer";
import Recorded from "./pages/Recorded";

import ProtectedRoute from "./utils/ProtectedRoute";

import Web3Modal from "web3modal";
import web3 from "./ethereum/web3";
import WalletConnectProvider from "@walletconnect/web3-provider";

import ZeusNFT from "./ethereum/ZeusNFT";
import Segment from "./pages/Segment";
import ContentPage from "./pages/ContentPage";
import Podcast from "./pages/Podcast";
import ErrorPage from "./components/ErrorPage";
import RecordedVideo from "./components/RecordedSessions/RecordedVideo";
const axios = require("axios");

const infuraId =
  "https://mainnet.infura.io/v3/97c2d52095a84da7a0b710a8daa16acf";
// "https://rinkeby.infura.io/v3/97c2d52095a84da7a0b710a8daa16acf";

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider, // required
    options: {
      infuraId: infuraId, // required
    },
  },
};

const web3Modal = new Web3Modal({
  // network: "mainnet", // optional
  cacheProvider: true, // optional
  providerOptions, // required
});
let provider;

const App = () => {
  const [account, setaccount] = useState("");

  const [gold, setGold] = useState(false);
  const [silver, setSilver] = useState(false);
  const [bronze, setBronze] = useState(false);

  const [haveTokens, setHaveTokens] = useState(false);
  const [sessions, setSessions] = useState([]);
  const [stream, setStream] = useState({ isActive: false });

  const fetchSessions = async () => {
    try {
      const url = `https://livepeer.com/api/stream/${process.env.REACT_APP_STREAM_ID}/sessions`;
      const options = {
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
          "Access-Control-Allow-Origin": "*",
        },
      };
      const { data } = await axios.get(url, options);
      console.log(data);
      setSessions(data);
    } catch (err) {
      if (err) console.log(err);
    }
  };

  React.useEffect(() => {
    fetchSessions();
  }, []);

  const fetchPlaybackId = async () => {
    console.log("stream id: ", process.env.REACT_APP_STREAM_ID);
    console.log("api key: ", process.env.REACT_APP_API_KEY);
    try {
      const url = `https://livepeer.com/api/stream/${process.env.REACT_APP_STREAM_ID}`;
      const options = {
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
          "Access-Control-Allow-Origin": "*",
        },
      };
      const { data } = await axios.get(url, options);
      console.log(data);
      // setIsStreamActive(data.isActive);
      // setPlaybackId(data.playbackId);
      setStream(data);
    } catch (err) {
      if (err) console.log(err);
    }
  };

  useEffect(() => {
    fetchPlaybackId();
  }, []);

  const onConnectWallet = async () => {
    console.log("connecting wallet...");
    console.log("cached provider", web3Modal.cachedProvider);
    try {
      provider = await web3Modal.connect();
    } catch (err) {
      console.log("Could not get a wallet connection", err);
      return;
    }
    web3.setProvider(provider);
    const accounts = await web3.eth.getAccounts();
    setaccount(accounts[0]);
  };

  const onDisconnect = async (e) => {
    e.preventDefault();

    console.log(
      "cached provider before provider.close(): ",
      web3Modal.cachedProvider
    );
    console.log("Killing the session", web3.currentProvider);
    console.log("web3.givenProvider", web3.givenProvider);

    if (web3 && web3.currentProvider && web3.currentProvider.close) {
      await web3.currentProvider.close();
    }

    console.log(
      "cached provider after provider.close(): ",
      web3Modal.cachedProvider
    );
    web3Modal.clearCachedProvider();
    console.log("cached provider after clear: ", web3Modal.cachedProvider);
    provider = null;
    setaccount("");
    setGold(false);
    setSilver(false);
    setBronze(false);
    setHaveTokens(false);
    window.location.reload();
  };

  const run = async () => {
    try {
      setGold(false);
      setSilver(false);
      setBronze(false);
      const accounts = await web3.eth.getAccounts();
      // setaccount(account[0]);

      // const userAddress = accounts[0];
      const userAddress = account;
      // "0x6ff9c8ed337de934e46e773f61a1a3369617c3ce";
      //   "0x5908bfd84673974ddb8b6688501a53ac5fc92b6b";
      const balance = await ZeusNFT.methods
        .balanceOf(userAddress.toString())
        .call();

      // if(balance === 0)
      console.log("token balance: ", balance);
      if (balance > 0) {
        setHaveTokens(true);
      }

      for (let i = 0; i < balance; i++) {
        const tokenId = await ZeusNFT.methods
          .tokenOfOwnerByIndex(userAddress, i)
          .call();

        const url =
          // `https://api.opensea.io/api/v1/asset/0x2E9983b023934e72e1E115Ab6AEbB3636f1C4Cbe/${tokenId}/`;
          `https://rinkeby-api.opensea.io/api/v1/asset/0x5d3a3430aEBa963DA7a83a330337B9efe777A1e0/${tokenId}/`;
        const { data } = await axios.get(url);

        await data.traits.map((trait) => {
          //   console.log(trait);
          if (trait.trait_type === "Level") {
            console.log(trait.value);
            if (trait.value === "Gold") {
              setGold(true);
              setSilver(true);
              setBronze(true);
            } else if (trait.value === "Silver") {
              setSilver(true);
              setBronze(true);
            } else if (trait.value === "Bronze") setBronze(true);
          }
          return 0;
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    run();
  }, [account]);

  useEffect(() => {
    async function listenMMAccount() {
      try {
        window.ethereum.on("accountsChanged", async function () {
          // Time to reload your interface with accounts[0]!
          const accounts = await web3.eth.getAccounts();
          setaccount(accounts[0]);
          // accounts = await web3.eth.getAccounts();
          console.log(accounts);
          setGold(false);
          setSilver(false);
          setBronze(false);
          // run();
          window.location.reload();
        });
      } catch (err) {
        console.log("Browser wallet not installed!");
      }
    }

    listenMMAccount();
  }, []);

  useEffect(() => {
    // alert("Connect to the Rinkeby testnet!");
    onConnectWallet();
  }, []);

  return (
    <div>
      <Header
        account={account}
        onConnectWallet={onConnectWallet}
        onDisconnect={onDisconnect}
        level={{ gold: gold, silver: silver, bronze: bronze }}
      />
      <Switch>
        <Route
          exact
          path="/"
          component={() => <Home account={account} haveTokens={haveTokens} />}
        />
        {/* <Route exact path="/thirdweb-podcast" component={() => <Podcast />} /> */}
        <ProtectedRoute
          level={gold}
          exact
          path="/Gold"
          component={() => <Segment segment="Gold" />}
        />
        <ProtectedRoute
          level={gold}
          exact
          path="/Gold/:id"
          component={() => <ContentPage segment="Gold" account={account} />}
        />
        <ProtectedRoute
          level={silver}
          exact
          path="/Silver"
          component={() => <Segment segment="Silver" />}
        />
        <ProtectedRoute
          level={silver}
          exact
          path="/Silver/:id"
          component={() => <ContentPage segment="Silver" account={account} />}
        />
        <ProtectedRoute
          level={bronze}
          exact
          path="/Bronze"
          component={() => <Segment segment="Bronze" />}
        />
        <ProtectedRoute
          level={bronze}
          exact
          path="/Bronze/:id"
          component={() => <ContentPage segment="Bronze" account={account} />}
        />
        <ProtectedRoute
          level={gold || silver || bronze}
          exact
          path="/Livepeer"
          component={() => <Livepeer sessions={sessions} stream={stream} />}
        />
        <ProtectedRoute
          level={gold || silver || bronze}
          exact
          path="/pastSessions"
          component={() => <Recorded sessions={sessions} />}
        />
        <ProtectedRoute
          level={gold || silver || bronze}
          exact
          path="/pastSessions/:id"
          component={() => <RecordedVideo sessions={sessions} />}
        />
        <Route
          path="*"
          component={() => <ErrorPage text={"404 NOT FOUND"} />}
        />
      </Switch>
    </div>
  );
};

export default App;
