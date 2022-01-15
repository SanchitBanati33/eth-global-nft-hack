import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Header = ({ account, onConnectWallet, onDisconnect, level }) => {
  const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    /* width: 100vw; */
    height: fit-content;
    padding: 12px;
    background-color: black;

    border-bottom: 1px solid white;
    top: 0;
    position: sticky;
    z-index: 100;
  `;

  const Logo = styled.div`
    top: 0;
    left: 0;
    /* position: absolute; */
    padding: 0px 10px;
    font-weight: bold;
  `;

  const HeaderFields = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 15px;
    padding: 0px 10px;
  `;

  const Item = styled(NavLink)`
    text-decoration: none;
    height: 40px;
    width: 100px;
    border-radius: 10px;
    color: white;

    border: 1px solid white;
    display: grid;
    align-content: center;
    justify-content: center;
    margin: 0px 5px;
    transition: 0.3s ease-in;

    &:hover {
      transform: scale(1.1);
      cursor: pointer;
      background-color: #25b04a;
    }

    &.selected {
      background-color: #25b04a;
      transform: scale(1.1);
    }
  `;

  const Wallet = styled.div`
    height: 40px;
    width: 100px;
    border-radius: 10px;
    color: white;

    border: 1px solid white;
    display: grid;
    align-content: center;
    justify-content: center;
    margin: 0px 5px;
    transition: 0.3s ease-in;

    width: fit-content;
    top: 0;
    right: 10;
    position: inherit;
    padding: 0px 15px;
    margin-right: 50px;

    &:hover {
      transform: scale(1.1);
      cursor: pointer;
      background-color: #25b04a;
    }
  `;

  const userAddress = account
    ? account.slice(0, 8) + "...." + account.slice(-8)
    : null;

  return (
    <HeaderContainer>
      <Logo>
        <h2> ZeusDAO</h2>
      </Logo>
      <HeaderFields>
        <Item exact to="/" activeClassName="selected">
          <h4>Home</h4>
        </Item>
        {/* <Item exact to="/thirdweb-podcast" activeClassName="selected">
          <h4>Podcast</h4>
        </Item> */}
        <Item exact to="/Holders" activeClassName="selected">
          <h4> Livepeer</h4>
        </Item>

        <Item exact to="/s" activeClassName="selected">
          <h4> Recorded</h4>
        </Item>

        {level.bronze ? (
          <Item to="/Bronze" activeClassName="selected">
            <h4>Bronze</h4>
          </Item>
        ) : null}
        {level.silver ? (
          <Item to="/Silver" activeClassName="selected">
            <h4>Silver</h4>
          </Item>
        ) : null}
        {level.gold ? (
          <Item to="/Gold" activeClassName="selected">
            <h4>Gold</h4>
          </Item>
        ) : null}
      </HeaderFields>

      {account === "" || typeof account === "undefined" ? (
        <Wallet onClick={onConnectWallet}>
          <h3>Connect Wallet</h3>
        </Wallet>
      ) : (
        <Wallet onClick={onDisconnect}>
          <h3>{userAddress}</h3>
        </Wallet>
      )}
    </HeaderContainer>
  );
};

export default Header;
