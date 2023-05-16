import { useState } from "react";

const MyComponent = () => {
    const [Data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
  
    const handleFilter = (searchTerm) => {
      const filteredData = Data.filter((e) =>
        e.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
  
      setData(filteredData);
    };
  
    return (
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
        {Data.map(e => (
          <div key={e.id}>{e.name}</div>
        ))}
      </div>
    );
  };
  export default MyComponent;