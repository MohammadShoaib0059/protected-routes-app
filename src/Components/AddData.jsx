import React, { useState } from "react";
import Datalist from "./Datalist";

const AddData = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/TodoData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Success");
        // Clear the input fields after successful submission
        setFormData({
          title: "",
          description: "",
        });
      } else {
        alert("Failed");
      }
    } catch (error) {
      alert("Fetching error", error);
    }
  };

  return (
    <div style={{ display: "block" }}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
      <Datalist AddData={formData} />
    </div>
  );
};

export default AddData;
