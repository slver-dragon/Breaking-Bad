import React from "react";
import { useParams } from "react-router-dom";
import PersonPageContainer from "../../organism/personPage";

const Person = () => {
  return (
    <div>
      <PersonPageContainer value={useParams()} />
    </div>
  );
};

export default Person;
