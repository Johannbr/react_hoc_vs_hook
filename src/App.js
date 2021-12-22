import "./App.css";
import { PeopleTableComponent } from "./components/PeopleComponent";
import { PeopleLightTableComponent } from "./components/PeopleLightComponent";
import { withDataAndSearch } from "./peopleHoc/withData";
import { PeopleComponentWrapper } from "./peopleWrapper/PeopleComponentWrapper";
import { PeopleLightComponentWrapper } from "./peopleWrapper/PeopleLightComponentWrapper";

const PeopleComponentHoc = withDataAndSearch(
  PeopleTableComponent,
  100
);

const PeopleLightComponentHoc = withDataAndSearch(
  PeopleLightTableComponent,
  20
);
const hoc = 0;
function App() {
  return (
    <div className="App">
      {!hoc && (
        <>
          <h1>React Wrapper</h1>
          <div className="people-table-container">
            <PeopleComponentWrapper />
            <PeopleLightComponentWrapper />
          </div>
        </>
      )}

      {hoc && (
        <>
          <h1>React HOC</h1>
          <div className="people-table-container">
            <PeopleComponentHoc />
            <PeopleLightComponentHoc />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
