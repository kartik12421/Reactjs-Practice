import { useState } from "react";

export default function CommentsForm() {
  let [formData, setFormData] = useState({
    username: "",
    remarks: "",
    rating: 0,
  });

  let inputChange = (event) => {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  let manageForm = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({
      username: "",
      remarks: "",
      rating: 0,
    });
  };

  return (
    <div>
      <h3>Give a Comments</h3>
      <form onSubmit={manageForm}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          placeholder="username"
          value={formData.username}
          name="username"
          onChange={inputChange}
        />
        <br />
        <br />
        <label htmlFor="remarks">Remarks</label>
        <textarea
          id="remarks"
          value={formData.remarks}
          placeholder="Add some remarks"
          name="remarks"
          onChange={inputChange}
        ></textarea>
        <br />
        <br />
        <label htmlFor="rating">Rating</label>
        <input
          id="rating"
          type="number"
          placeholder="rating"
          min={1}
          max={5}
          value={formData.rating}
          name="rating"
          onChange={inputChange}
          required
        />
        <br />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}
