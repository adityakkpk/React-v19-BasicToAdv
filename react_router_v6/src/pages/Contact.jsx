import {Form} from 'react-router-dom'

export const contactData = async ({ request }) => {
  try {
    const res = await request.formData();
    const data = Object.fromEntries(res);
    console.log(data);
    return null;
    
  } catch (error) {
    console.log(error);
  }

};

const Contact = () => {

  return (
    <div className="my-5 w-full h-full flex justify-center items-center">
      <div className="border shadow-lg rounded p-5 w-96 bg-white ">
        <h1 className="text-3xl mb-3">Contact Form</h1>
        <Form method='POST' action='/contact' className="flex flex-col">
          <label htmlFor="username">Username :</label>
          <input
            type="text"
            name="username"
            required
            autoComplete="off"
            className="border rounded focus:outline-none px-2 mb-2 bg-gray-200"
            placeholder='enter full name'
          />

          <label htmlFor="email">Email :</label>
          <input
            type="email"
            name="email"
            required
            autoComplete="off"
            className="border rounded focus:outline-none px-2 mb-2 bg-gray-200"
            placeholder='enter email'
          />

          <label htmlFor="message">Message :</label>
          <textarea
            type="text"
            name="message"
            required
            autoComplete="off"
            rows={4}
            className="border rounded focus:outline-none px-2 mb-8 bg-gray-200"
          />

          <button type="submit" className="py-1 px-2 bg-blue-600 rounded">
            Submit
          </button>
        </Form>
      </div>
    </div>
  )
}

export default Contact