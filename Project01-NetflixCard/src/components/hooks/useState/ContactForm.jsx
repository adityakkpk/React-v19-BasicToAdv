import React, { useState } from "react";

const ContactForm = () => {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const contactData = {
//       username,
//       email,
//       message
//     };
//     console.log(contactData);
//   };

const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
});

const handleInputChange = (event) => {
    const {name, value} = event.target;

    setFormData((prev) => ({
        ...prev, [name]: value
    }));
};

const handleFormSubmit = (event) => {
    event.preventDefault();

    console.log(formData);
}

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="border shadow-lg rounded p-5 w-96 bg-white ">
        <h1 className="text-3xl mb-3">Contact Form</h1>
        <form className="flex flex-col" onSubmit={handleFormSubmit}>
          <label htmlFor="username">Username :</label>
          <input
            type="text"
            name="username"
            required
            autoComplete="off"
            className="border rounded focus:outline-none px-2 mb-2 bg-gray-200"
            value={formData.username}
            // onChange={(e) => setUsername(e.target.value)}
            onChange={handleInputChange}
          />

          <label htmlFor="email">Email :</label>
          <input
            type="email"
            name="email"
            required
            autoComplete="off"
            className="border rounded focus:outline-none px-2 mb-2 bg-gray-200"
            value={formData.email}
            // onChange={(e) => setUsername(e.target.value)}
            onChange={handleInputChange}
          />

          <label htmlFor="message">Message :</label>
          <textarea
            type="text"
            name="message"
            required
            autoComplete="off"
            rows={4}
            className="border rounded focus:outline-none px-2 mb-8 bg-gray-200"
            value={formData.message}
            // onChange={(e) => setUsername(e.target.value)}
            onChange={handleInputChange}
          />

          <button type="submit" className="py-1 px-2 bg-blue-600 rounded">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
