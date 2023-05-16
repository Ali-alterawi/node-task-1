import axios from "axios";
import Card from "./Card"
import React, { useEffect, useState } from "react";

function Cards() {
  const [Data, setData] = useState(null);
  const fetchData = () => {
    axios.get("http://localhost:5000/").then((res) => {
      setData(res.data);
    });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="container">
      
        {Data?.map((e) => {
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
