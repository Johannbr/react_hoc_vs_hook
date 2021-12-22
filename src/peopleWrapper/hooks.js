import { useEffect, useState } from "react";
import { filterPeopleByText } from "../service/peopleService";
import peopleList from "../data/people";

export const useFilter = (sizeOfList) => {
  const [filteredPeople, setFilteredPeople] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [people, setPeople] = useState(peopleList.slice(0, sizeOfList));

  const handleSearchTextChange = (text) => {
    setSearchText(text);
  };

  useEffect(() => {
    const filteredPeople = filterPeopleByText(people, searchText);
    setFilteredPeople(filteredPeople);
  }, [people, searchText]);


  const handleFirstNameChange = (name, key) => {
    const clonedPeople = people.map((person) => {
      if (person.email === key) {
        return { ...person, first_name: name };
      } else {
        return person;
      }
    });
    setPeople(clonedPeople);
  };

  return { filteredPeople, handleSearchTextChange, handleFirstNameChange };
};
