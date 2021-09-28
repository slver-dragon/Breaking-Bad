import React from "react";
import { useParams } from "react-router-dom";
import PersonSheetContainer from "../../organism/PersonSheet";

const Person = () => {
  return (
    <div>
      <PersonSheetContainer value={useParams()} />
    </div>
  );
};

export default Person;
