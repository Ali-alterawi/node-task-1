import axios from "axios";
import Card from "./Card"
import React, { useEffect, useState } from "react";
import e from "cors";

function Cards() {
  const [Data, setData] = useState(null);
  const [searchData, setsearchData] = useState(null);
 
    const [searchTerm, setSearchTerm] = useState('');
  
    const handleFilter = (searchTerm) => {
      const filteredData = Data.filter((e) =>
        e.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
  
      setsearchData(filteredData);
    };
  const fetchData = () => {
    axios.get("http://localhost:5000/").then((res) => {
      setData(res.data);
      setsearchData(res.data)
    });
  };
  useEffect(() => {
    fetchData();
  }, []);
  
// const filterData = Data.filter((card)=>{
//     return card.title
// })
  return (
    <>
      <div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            handleFilter(e.target.value);
          }}
          placeholder="Search..."
        />
           {/* Render your filtered data */}
      
      </div>
      <div className="container">
      
        {searchData?.map((e) => {
          return (
            <div className="card grid-cols-3">
              <Card e={e}/>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default Cards;
