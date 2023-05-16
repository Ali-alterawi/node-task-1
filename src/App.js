// import './App.css';
// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
import  Navbar  from './comp/Navbar';
import Button from './comp/Button';
import Slider from './comp/Slider';
// import Cards from './comp/Cards';
import Footer from './comp/Footer';
import Cards from './comp/Cards';
import Search from './comp/Search';

// function App() {

//   const[Data,setData] = useState(null)
//   const fetchData =()=>{
//     axios.get('http://localhost:5000')
//   .then(res => {
//     setData(res.data)
//   })

//   }

//   useEffect(()=>{
//     fetchData()

//   },[])
//   return (
//     <div className="App">

// <h3>{Data}</h3>
//     </div>
//   );
// }
// export default App;

import React from "react";


const App = () => {
  return (
    <div>
      <Navbar/>
      <Slider/>
      {/* <Search/> */}
      <Cards/>
      <Button/>
      <Footer/>
    </div>
  );
};

export default App;
