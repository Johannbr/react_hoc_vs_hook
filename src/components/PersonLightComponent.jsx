import React from "react";

export const PersonLightComponent = ({ person }) => {
  return (
    <tr key={person.email}>
      <td>{person.first_name}</td>
      <td>{person.email}</td>
    </tr>
  );
};
