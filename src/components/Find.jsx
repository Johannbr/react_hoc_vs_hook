import React from "react";

export const Find = ({ onChange }) => {
  const handleChange = (event) => {
    onChange(event?.target?.value);
  };
  return (
    <div>
      <input name="searchText" onChange={handleChange} />
    </div>
  );
};
