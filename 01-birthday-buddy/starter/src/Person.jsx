import React from "react";

const Person = ({ id, name, age, image, congratulateBirthday }) => {
  return (
    <article className="person">
      <img src={image} alt={name} className="img" />
      <div>
        <h4>
          {name} turns {age} today.
        </h4>
        <button className="btn" onClick={() => congratulateBirthday(id)}>
          congratulate
        </button>
      </div>
    </article>
  );
};

export default Person;
