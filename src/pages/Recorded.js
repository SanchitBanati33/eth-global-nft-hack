import React from "react";
import RecordedSessions from "../components/RecordedSessions";

const Recorded = ({ sessions }) => {
  return (
    <div>
      <RecordedSessions sessions={sessions} />
    </div>
  );
};

export default Recorded;
