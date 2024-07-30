import React, { useState } from "react";

const TodoList = () => {
  const [activity, setActivity] = useState("");
  const [listData, setListData] = useState([]);

  const addActivity = () => {
    setListData((listData) => {
      const updatedList = [...listData, activity];
      console.log(updatedList);
      setActivity("");
      return updatedList;
    });
  };

  // const removeActivity = (index) => {
  //   const updatedListData = listData.filter((item, i) => i !== index);
  //   setListData(updatedListData);
  // };
  const removeActivity = (i) => {
    const updatedListData = listData.filter((ele, id) => {
      return i != id;
    });
    setListData(updatedListData);
  };

  const removeAll=()=>{
    setListData([]);
  }

  return (
    <div className="container">

      
      <div className="header">TODOLIST</div>
      <input
        type="text"
        placeholder="Add Activity"
        value={activity}
        onChange={(e) => setActivity(e.target.value)}
      />
      <button onClick={addActivity}>Add</button>

      <p className="List-heading">Here is your List :</p>
      {listData.length > 0 &&
        listData.map((data, i) => (
          <p key={i} className="list-item">
            <div className="listData">{data}</div>
            <button className="btn-position" onClick={() => removeActivity(i)}>
              Remove(-)
            </button>
          </p>
        ))}
      {listData.length >= 1 && (
        <button className="btn-position" onClick={removeAll}>Remove All</button>
      )}
    </div>
  );
};

export default TodoList;
