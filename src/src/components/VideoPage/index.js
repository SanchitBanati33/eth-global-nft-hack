import React from "react";
import {
  Container,
  VideoWrapper,
  Title,
  Description,
  TextWrapper,
  BackLink,
} from "./videopageelements";

const Videopage = ({ content, segment }) => {
  return (
    <div>
      <Container>
        <VideoWrapper>
          <iframe
            title="vimeo-player"
            src={content ? content.video : null}
            width="1000"
            height="500"
            border-radius="20px"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </VideoWrapper>
        <TextWrapper>
          <Description>
            <BackLink to={`/${segment}`}>← Back to Episodes</BackLink>
          </Description>
          <Title> {content.title} </Title>
          <Description>
            {/* The stakes are higher as Ms. Stoner's ailments worsen and the cat's
            sentience fades. Fefe tries to get her paws on more Skunky Smoke
            while Baxter discovers a mysterious world and Dave meets a new
            friend.{" "} */}
            {content.description}
          </Description>
        </TextWrapper>
      </Container>
    </div>
  );
};

export default Videopage;
