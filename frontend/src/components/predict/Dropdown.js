import React, { useState } from "react";
import './Dropdown.css';

function Dropdown () {
  const [data, setData] = useState([
    { name: "India"},
    { name: "Australia"},
    { name: "Pakistan"},
  ]);

  const [filterValue, setFilterValue] = useState("");

//   const handleFilterChange = (event) => {
//     setFilterValue(event.target.value);
//   };

//   const filteredData = data.filter((item) =>
//     item.name.toLowerCase().includes(filterValue.toLowerCase())
//   );

  return (
    <div>
      <label htmlFor="sort">Sort by Country:</label>
      <select id="sort" onChange={(event) => setData([...data].sort((a, b) => a.age - b.age))}>
        <option className="options">Choose the Country</option>
        <option className="options">India</option>
        <option className="options">Australia</option>
        <option className="options">Sri Lanka</option>
        <option className="options">New Zealand</option>
        <option className="options">England</option>
        <option className="options">South Africa</option>
        <option className="options">Bangladesh</option>
        <option className="options">West Indies</option>
      </select>
    </div>
  );
}

export default Dropdown;
