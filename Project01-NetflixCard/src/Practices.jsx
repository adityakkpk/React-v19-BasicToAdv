import React from "react";

const Practices = () => {
  const students = [1];

  return (
    <>
      {/* <p>{students.length && "No Student Found"}</p> */}

      {/* 1st solution */}
      {/* <p>{students.length === 0 && "No Student Found"}</p> */}

      {/* 2nd solution */}
      {/* <p>{!students.length && "No Student Found"}</p> */}

      {/* 3rd solution */}
      <p>{Boolean(!students.length) && "No Student Found"}</p>

      <p>Number of Students: {students.length}</p>
    </>
  );
};

export default Practices;
