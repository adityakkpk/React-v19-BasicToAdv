import React, {useState} from 'react'

const RegisterReact = () => {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phone: "",
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
    <form className="h-full" onSubmit={handleFormSubmit}>
      <div className="container bg-white flex justify-center items-center h-full">
        <div className="border rounded-xl my-5 flex flex-col justify-center items-center p-5 gap-5 shadow-lg">
          <h1 className="text-3xl text-blue-400">Sign up</h1>
          <p className="text-gray-400">Please fill in this form to create an account.</p>

          <div className="flex flex-col gap-5 w-full">
            <div className="flex gap-2 flex-col">
              <label htmlFor="firstName">
                <b>First Name :</b>
              </label>
              <input
                type="text"
                name="firstName"
                placeholder="Enter First Name"
                required
                className="px-2 rounded text-black focus:outline-none border shadow"
                value={formData.firstName}
                onChange={handleInputChange}
              />
            </div>

            <div className="flex gap-2 flex-col">
              <label htmlFor="lastName">
                <b>Last Name :</b>
              </label>
              <input
                type="text"
                name="lastName"
                placeholder="Enter last Name"
                required
                className="px-2 rounded text-black focus:outline-none border shadow"
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </div>

            <div className="flex gap-2 flex-col">
              <label htmlFor="email">
                <b>Email :</b>
              </label>
              <input
                type="text"
                name="email"
                placeholder="Enter Email"
                required
                className="px-2 rounded text-black focus:outline-none border shadow"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>

            <div className="flex gap-2 flex-col">
              <label htmlFor="password">
                <b>Password :</b>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                required
                className="px-2 rounded text-black focus:outline-none border shadow"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>

            <div className="flex gap-2 flex-col ">
              <label htmlFor="phone">
                <b>Phone Number :</b>
              </label>
              <input
                type="number"
                name="phone"
                placeholder="Enter phone Number"
                required
                className="px-2 rounded text-black focus:outline-none border shadow"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <p className="text-gray-400">
            By creating an account you agree to our 
            {" "}
            <a href="#" target="_blank" className="text-blue-400 underline">
              Terms & Privacy
            </a>
            .
          </p>

          <div>
            <button type="submit" className="bg-blue-600 py-1 rounded text-black px-2 hover:bg-blue-400">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default RegisterReact