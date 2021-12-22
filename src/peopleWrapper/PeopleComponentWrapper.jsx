import React from "react";
import { Find } from "../components/Find";
import { PeopleTableComponent } from "../components/PeopleComponent";
import { useFilter } from "./hooks";

export const PeopleComponentWrapper = () => {
  const {filteredPeople, handleSearchTextChange, handleFirstNameChange} = useFilter(100);

  return (
    <div className="people-table">
      <div>Recherche</div>
      <Find onChange={handleSearchTextChange} />
      <PeopleTableComponent people={filteredPeople} onChange={handleFirstNameChange} />
    </div>
  );
};
