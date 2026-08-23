import React from "react";
import Person from "./Person";

const List = ({ people, congratulateBirthday, clearList }) => {
  return (
    <section>
      {people.map((person) => {
        return (
          <Person
            key={person.id}
            {...person}
            congratulateBirthday={congratulateBirthday}
          />
        );
      })}
    </section>
  );
};

export default List;
