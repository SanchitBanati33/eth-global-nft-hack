import React, { useState } from "react";
import axios from "axios";
import VideoJS from "../VideoJS";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Title = styled.div`
  font-size: 30px;
  text-align: center;
  margin: 40px;
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled(Link)`
  display: grid;
  height: 300px;
  width: 200px;
  border: 1px solid white;
  text-decoration: none;
  color: yellow;
  margin: auto;
  transition: 0.2s ease-in;
  &:hover {
    transform: scale(1.03);
    border: 1px solid yellow;
  }
  div {
    margin: auto;
  }
`;

const RecordedSessions = ({ sessions }) => {
  return (
    <>
      <Title>Recorded Sessions</Title>
      <Grid>
        {sessions
          ? sessions.map((session, index) => {
              return (
                <Card key={index} to={`pastSessions/${index + 1}`}>
                  <div>Session #{index + 1}</div>
                </Card>
              );
            })
          : null}
      </Grid>
    </>
  );
};

export default RecordedSessions;
