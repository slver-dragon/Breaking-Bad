import React from "react";
import { useParams } from "react-router-dom";
import { PersonItemContainer } from "../../organism/personPage/container";

const PersonItem = () => {
  return (
    <div>
      <PersonItemContainer value={useParams()} />
    </div>
  );
};

export default PersonItem;
