// import axios from "axios";
import React, { useEffect, useState } from "react";
import { getData } from "../services/GetServices";

const Profile = () => {
  // const API = "https://api.github.com/users/adityakkpk/repos";

  const [data, setData] = useState([""]);

  const getAPIData = async () => {
    try {
      // const res = await axios.get(API);
      const res = await getData();
      setData(res.data);
    } catch (error) {
      console.error("Error message:", error.message);
      console.error("Error status:", error.response.status);
      console.error("Error data:", error.response.data);
    }
  };

  useEffect(() => {
    getAPIData();
  }, []);

  return <ul>
    {
      data.map((item,index) => {
        return <li key={index}>{item.name}</li>
      })
    }
  </ul>
};

export default Profile;
