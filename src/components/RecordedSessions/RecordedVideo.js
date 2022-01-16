import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import VideoJS from "../VideoJS";
import styled from "styled-components";

const Title = styled.div`
  font-size: 30px;
  text-align: center;
  margin: 40px;
`;

const RecordedVideo = ({ sessions }) => {
  //   const [sessions, setSessions] = useState();
  const [videoUrl, setVideoUrl] = useState();
  const { id } = useParams();

  const playerRef = React.useRef(null);

  const fetchSessions = async () => {
    try {
      //   const url = `https://livepeer.com/api/stream/b8903d43-5dd2-4b70-8d82-1e4f40f9810a/sessions`;
      //   const options = {
      //     headers: {
      //       "content-type": "application/json",
      //       authorization: "Bearer 8dc398be-464b-448a-a377-b21e76da223b",
      //     },
      //   };
      //   const { data } = await axios.get(url, options);
      //   console.log(data);
      setVideoUrl(sessions[id - 1].recordingUrl);
      console.log(sessions[id - 1].recordingUrl);
    } catch (err) {
      if (err) console.log(err);
    }
  };

  React.useEffect(() => {
    fetchSessions();
    console.log("sessions in recorded vid:", sessions);
    // console.log("url:", sessions[id - 1].recordingUrl);
  }, []);

  //   const videoJsOptions = {
  //     // lookup the options in the docs for more options
  //     autoplay: true,
  //     controls: true,
  //     responsive: true,
  //     fluid: true,
  //     sources: [
  //       {
  //         // src: "https://lax-cdn.livepeer.com/recordings/e42b9d48-fcb3-4c33-9043-c2a909055525/index.m3u8",
  //         // src: videoUrl,
  //       },
  //     ],
  //   };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // you can handle player events here
    player.on("waiting", () => {
      console.log("player is waiting");
    });

    player.on("dispose", () => {
      console.log("player will dispose");
    });
  };

  return (
    <>
      <Title>RecordedSession #{id}</Title>
      {/* <div>{sessions[id - 1].userId}</div> */}
      {sessions[id - 1] ? (
        sessions[id - 1].recordingStatus === "waiting" ? (
          <>
            <Title>Recording status is in waiting...</Title>
            <Title>Will soon be displayed...</Title>
          </>
        ) : (
          <VideoJS
            options={{
              autoplay: true,
              controls: true,
              responsive: true,
              fluid: true,
              sources: [
                {
                  //   src: "https://fra-cdn.livepeer.com/recordings/e42b9d48-fcb3-4c33-9043-c2a909055525/index.m3u8",
                  src: sessions[id - 1] ? sessions[id - 1].recordingUrl : "",
                },
              ],
            }}
            onReady={handlePlayerReady}
          />
        )
      ) : null}
    </>
  );
};

export default RecordedVideo;
