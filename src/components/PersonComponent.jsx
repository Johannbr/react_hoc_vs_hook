import React from "react";

export const PersonComponent = ({ person, onChange }) => {
  const handleChange = (event, key) => {
    onChange(event?.target?.value, key);
  };
  return (
    <tr key={person.email}>
      <td>
        <input
          defaultValue={person.first_name}
          onBlur={(event) => handleChange(event, person.email)}
        ></input>
      </td>
      <td>{person.last_name}</td>
      <td>{person.email}</td>
      <td>{person.gender}</td>
    </tr>
  );
};
