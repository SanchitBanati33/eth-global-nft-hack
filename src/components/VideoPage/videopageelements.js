import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  background-color: #1b1b1b;
  width: 1060px;
  height: 800px;
  border-radius: 20px;
  margin: auto;
  padding: 75px 0 0 60px;
`;

export const VideoWrapper = styled.div`
  // background-color: white;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

export const TextWrapper = styled.div`
  // background-color: white;
  height: 200px;
  width: 920px;
  padding: 0 0 0 50px;
`;

export const Title = styled.h1`
  font-family: Roboto;
  font-size: 40px;
  font-weight: bold;
  text-align: left;
  color: white;
`;

export const Description = styled.p`
  font-size: 20px;
  color: grey;
  text-align: left;
`;
export const BackLink = styled(Link)`
  color: grey;
  text-decoration: none;
`;
