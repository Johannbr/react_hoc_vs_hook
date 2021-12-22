import React from "react";
import { PersonLightComponent } from "./PersonLightComponent";

export const PeopleLightTableComponent = ({ people }) => {
  return (
    <>
      <table>
        <tr>
          <th>Un Prénom</th>
          <th>Un Email</th>
        </tr>
        {people.map((person) => {
          return <PersonLightComponent person={person} />;
        })}
      </table>
    </>
  );
};
