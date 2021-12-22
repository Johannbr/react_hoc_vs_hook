import React from "react";
import { Find } from "../components/Find";
import { PeopleLightTableComponent } from "../components/PeopleLightComponent";
import { useFilter } from "./hooks";

export const PeopleLightComponentWrapper = () => {
  const { filteredPeople, handleSearchTextChange } = useFilter(20);

  return (
    <div className="people-table">
      <div>Recherche</div>
      <Find onChange={handleSearchTextChange} />
      <PeopleLightTableComponent people={filteredPeople} />
    </div>
  );
};
