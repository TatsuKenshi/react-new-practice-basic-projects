import { useState } from "react";
import List from "./List";
import data from "./data";

const App = () => {
  const [people, setPeople] = useState(data);

  const congratulateBirthday = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  const clearList = () => {
    setPeople([]);
  };

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List
          people={people}
          congratulateBirthday={congratulateBirthday}
          clearList={clearList}
        />
        {people.length > 0 ? (
          <button className="btn btn-block" onClick={clearList}>
            clear list
          </button>
        ) : null}
      </section>
    </main>
  );
};
export default App;
