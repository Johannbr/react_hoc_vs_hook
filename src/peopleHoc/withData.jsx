import React, { useEffect, useState } from "react";
import { Find } from "../components/Find";
import { filterPeopleByText } from "../service/peopleService";
import peopleList from "../data/people";

export const withDataAndSearch = (WrappedComponent, sizeOfList) => {
  return () => {
    const [filteredPeople, setFilteredPeople] = useState([]);
    const [people, setPeople] = useState(peopleList.slice(0, sizeOfList));
    const [searchText, setSearchText] = useState("");

    const handleTextChange = (text) => {
      setSearchText(text);
    };

    useEffect(() => {
      const filteredPeople = filterPeopleByText(people, searchText);
      setFilteredPeople(filteredPeople);
    }, [people, searchText]);

    const handleChange = (name, key) => {
      const clonedPeople = people.map((person) => {
        if (person.email === key) {
          return { ...person, first_name: name };
        } else {
          return person;
        }
      });

      setPeople(clonedPeople);
    };

    return (
      <div className="people-table">
        <div>Recherche</div>
        <Find onChange={handleTextChange} />
        <WrappedComponent people={filteredPeople} onChange={handleChange} />
      </div>
    );
  };
};
