import React from "react";
import styled from "styled-components";
import Videopage from "../VideoPage";
import "./style.css";

const Body = ({ account, haveTokens }) => {
  const BodyContainer = styled.div`
    /* height: 100vh; */
  `;

  const BodyContent = styled.div`
    display: grid;
    /* grid-template-columns: 50vw 50vw; */
    align-items: center;
    justify-content: center;
  `;

  const Container = styled.div`
    background-color: black;
    border-radius: 20px;
    height: 400px;
    width: 700px;
    margin: auto;
    padding: 40px 0 0 70px;
  `;

  const Content = styled.div`
    display: grid;
    align-items: center;
    justify-content: center;
  `;

  const Para = styled.p`
    text-align: center;
    font-size: 4vh;
  `;

  const LinkToOpensea = styled.a`
    width: fit-content;
    justify-self: center;
    border-radius: 10px;
    margin: 10px;
    text-decoration: none;
    font-size: 16px;
    font-weight: 600;
    padding: 12px 20px;
    background-color: rgb(32, 129, 226);
    border: 1px solid rgb(32, 129, 226);
    color: rgb(255, 255, 255);
  `;

  const noAccountUrl = "";
  const connectedNoTokens = "";
  const connectedHaveTokens = "";

  return (
    <>
      <BodyContainer>
        {/* <Image src={homePage} /> */}
        <BodyContent>
          <Content>
            <Para>
              {account ? (
                haveTokens ? (
                  <span>Hurray! You are in :)</span>
                ) : (
                  <span>Wallet connected but No NFT Found :(</span>
                )
              ) : (
                <span> Connect your wallet</span>
              )}
            </Para>
            {/* <Container>
            <iframe
              className="video"
              src={
                account
                  ? haveTokens
                    ? connectedHaveTokens
                    : connectedNoTokens
                  : noAccountUrl
              }
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowfullscreen
            ></iframe>
          </Container> */}
            {account ? (
              !haveTokens ? (
                <LinkToOpensea
                  href="https://testnets.opensea.io/collection/zeusnft-v2"
                  target="_blank"
                >
                  Buy On Opensea
                </LinkToOpensea>
              ) : null
            ) : null}
          </Content>
        </BodyContent>
        {/* <Videopage /> */}
      </BodyContainer>
    </>
  );
};

export default Body;
