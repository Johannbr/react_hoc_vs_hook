import React from "react";
import { PersonComponent } from "./PersonComponent";

export const PeopleTableComponent = ({ people, onChange }) => {
  return (
    <>
      <table>
        <tr>
          <th>Prénom</th>
          <th>Nom</th>
          <th>Email</th>
          <th>Genre</th>
        </tr>
        {people.map((person) => {
          return <PersonComponent person={person} onChange={onChange} />;
        })}
      </table>
    </>
  );
};
