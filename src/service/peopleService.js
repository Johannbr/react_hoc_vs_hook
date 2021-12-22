export const filterPeopleByText = (peopleList, searchText) => peopleList.filter(
    person => person.email.toLowerCase().includes(searchText.toLowerCase())
        || person.first_name.toLowerCase().includes(searchText.toLowerCase())
        || person.last_name.toLowerCase().includes(searchText.toLowerCase())
)