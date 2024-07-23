import React, { useState } from "react";

const HowNotToFetchApi = () => {
    const [data, setData] = useState([]);
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    // .then((data) => setData(data)) //Unlimited requests will send
    .catch((err) => console.log(err));

  return <ul className="grid grid-cols-4">
        {
            data.map((item) => (
                <li className="bg-green-400 border mx-1 my-1 p-1 rounded" key={item.id}>{item.title}</li>
            ))
        }
    </ul>;
};

export default HowNotToFetchApi;
