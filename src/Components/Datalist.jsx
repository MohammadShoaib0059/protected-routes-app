import React, { useEffect, useState } from "react";

const Datalist = (props) => {
  const [TodoData, setTodoData] = useState(props.AddData && []);
  const [editItem, setEditItem] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:5000/TodoData");
        const data = await res.json();
        setTodoData(data);
      } catch (error) {
        alert("Fetching error", error);
      }
    };

    fetchData();
  }, [editItem,props.AddData]);

  const handleUpdate = (item) => {
    setEditItem(item);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:5000/TodoData/${editItem.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editItem),
      });

      if (res.ok) {
        alert("Update Success");
        // Clear the item being edited
        setEditItem(null);
      } else {
        alert("Update Failed");
      }
    } catch (error) {
      alert("Fetching error", error);
    }
  };

  return (
    <div>
      {TodoData.map((item) => (
        <ul key={item.id} data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            onClick={() => handleUpdate(item)}>
          <li>
            {item.title}
          </li>
          <li>{item.description}</li>
        </ul>
      ))}

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Item</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form className="modal-body" onSubmit={handleSubmit}>
              <input
                type="text"
                name="title"
                value={editItem ? editItem.title : ""}
                onChange={(e) => setEditItem({ ...editItem, title: e.target.value })}
              />
              <input
                type="text"
                name="description"
                value={editItem ? editItem.description : ""}
                onChange={(e) => setEditItem({ ...editItem, description: e.target.value })}
              />
           
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" >Close</button>
              <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
            
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Datalist;
