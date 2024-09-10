import React, { useEffect, useState } from "react";
import { addPost } from "../api/PostApi";

const Form = ({ data, setData, updateData, setUpdateData }) => {
  const [formData, setFormData] = useState({
    title: "",
    body: "",
  });

  // console.log(formData);

  useEffect(() => {
    updateData && setFormData({
      title: updateData.title || '',
      body: updateData.body || ''
    })
  }, [updateData])

  const handleInputChange = (e) => {
    const name = e.target.name;
    const val = e.target.value;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: val,
      };
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    postData();
  };

  const postData = async () => {
    try {
      const res = await addPost(formData);
      if (res.status === 201) {
        setData([...data, res.data]);
        setFormData({title:"",body:""});
        // console.log(res);
        
      } else {
        console.log("Failed to Post the data:", res.status);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="flex gap-2 rounded bg-gray-600 p-3"
    >
      <input
        type="text"
        placeholder="Enter title"
        className="text-black px-3 py-1 rounded outline-none border-none"
        id="title"
        name="title"
        value={formData.title}
        onChange={handleInputChange}
      />
      <input
        type="text"
        placeholder="Enter news"
        className="text-black px-3 py-1 rounded outline-none border-none"
        id="body"
        name="body"
        value={formData.body}
        onChange={handleInputChange}
      />
      <button
        type="submit"
        className="px-5 py-1 rounded bg-green-500 text-black"
      >
        ADD
      </button>
    </form>
  );
};

export default Form;
